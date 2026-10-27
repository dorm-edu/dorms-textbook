// The desk world: workbench, cutting mat with grid, window light with soft shadows, camera.
// Draws only when something changed or an animation runs, so tablets and phones stay cool.
import * as THREE from "three";
import { palette } from "./tokens.js";
import { setResolution } from "./ink.js";
import { reportError } from "./bridge.js";

function gridTexture(size, cells, minor, major, base) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  g.fillStyle = base; g.fillRect(0, 0, size, size);
  const step = size / cells;
  for (let i = 0; i <= cells; i++) {
    g.strokeStyle = i % 5 === 0 ? major : minor;
    g.lineWidth = i % 5 === 0 ? 2.5 : 1.2;
    g.beginPath(); g.moveTo(i * step, 0); g.lineTo(i * step, size); g.stroke();
    g.beginPath(); g.moveTo(0, i * step); g.lineTo(size, i * step); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function deskTexture() {
  const p = palette();
  const c = document.createElement("canvas");
  c.width = 1024; c.height = 1024;
  const g = c.getContext("2d");
  g.fillStyle = p.desk; g.fillRect(0, 0, 1024, 1024);
  // brushed workbench: faint long strokes
  for (let i = 0; i < 260; i++) {
    g.strokeStyle = `rgba(255,255,255,${0.008 + Math.random() * 0.018})`;
    g.lineWidth = 1 + Math.random() * 2;
    const y = Math.random() * 1024;
    g.beginPath(); g.moveTo(0, y); g.bezierCurveTo(300, y + 6, 700, y - 6, 1024, y + 2); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 3);
  return t;
}

export function createWorld(container) {
  const canvas = document.createElement("canvas");
  canvas.className = "dt-canvas";
  canvas.setAttribute("aria-hidden", "true");
  container.append(canvas);

  const lowEnd = (navigator.hardwareConcurrency ?? 8) <= 4 || matchMedia("(max-width: 700px)").matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, powerPreference: "default" });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 1, 600);
  const target = new THREE.Vector3(0, 2, 1);

  const hemi = new THREE.HemisphereLight(0xdfe8f2, 0x0a0e14, 1.5);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1df, 3.2);
  sun.position.set(-38, 64, -30);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lowEnd ? 1024 : 2048, lowEnd ? 1024 : 2048);
  Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 32, bottom: -32, near: 10, far: 180 });
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.04;
  sun.shadow.radius = 4;
  scene.add(sun, sun.target);
  const fill = new THREE.DirectionalLight(0xbcd3ea, 0.35);
  fill.position.set(30, 30, 40);
  scene.add(fill);

  const deskMat = new THREE.MeshLambertMaterial({ map: deskTexture() });
  const desk = new THREE.Mesh(new THREE.PlaneGeometry(260, 200), deskMat);
  desk.rotation.x = -Math.PI / 2;
  desk.receiveShadow = true;
  scene.add(desk);

  const p = palette();
  const matTex = gridTexture(2048, 70, p.matGrid, p.matGridMajor, p.mat);
  const matMesh = new THREE.Mesh(new THREE.BoxGeometry(76, 0.12, 54), new THREE.MeshLambertMaterial({ map: matTex }));
  matMesh.position.set(0, 0.06, 2);
  matMesh.receiveShadow = true;
  scene.add(matMesh);

  // window mullions high above: only their shadows land on the desk, like light through a window.
  const blinds = new THREE.Group();
  const shadowOnly = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false });
  for (let i = 0; i < 2; i++) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.3, 140), shadowOnly);
    bar.position.set(-14 + i * 34, 40, -10);
    bar.castShadow = true;
    blinds.add(bar);
  }
  scene.add(blinds);

  let dirty = true, running = false, destroyed = false, visible = true;
  const frameCallbacks = new Set();
  const perf = { frames: 0, slow: 0 };

  function resize() {
    const rect = container.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width)), h = Math.max(1, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, lowEnd ? 1.5 : 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    setResolution(w * dpr, h * dpr);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    api.onResize && api.onResize(w, h);
    request();
  }

  function frame() {
    running = false;
    if (destroyed || !visible) return;
    const now = performance.now() / 1000;
    let animating = false;
    for (const cb of frameCallbacks) {
      try { if (cb(now) === true) animating = true; else frameCallbacks.delete(cb); } catch (e) { frameCallbacks.delete(cb); reportError(e); }
    }
    if (dirty || animating) {
      dirty = false;
      camera.lookAt(target);
      const t0 = performance.now();
      renderer.render(scene, camera);
      const dt = performance.now() - t0;
      perf.frames++; if (dt > 28) perf.slow++;
      if (perf.frames > 20 && perf.slow / perf.frames > 0.5 && renderer.shadowMap.type !== THREE.BasicShadowMap) {
        renderer.shadowMap.type = THREE.BasicShadowMap; sun.shadow.mapSize.set(1024, 1024); sun.shadow.map?.dispose(); sun.shadow.map = null;
        renderer.setPixelRatio(1);
        perf.lowPower = true;
      }
      api.afterRender && api.afterRender();
      if (window.__dt) window.__dt.perf = { ...perf, lastFrameMs: Math.round(dt * 10) / 10 };
    }
    if (animating) schedule();
  }
  function schedule() { if (!running && !destroyed) { running = true; requestAnimationFrame(frame); } }
  function request() { dirty = true; schedule(); }

  const ro = new ResizeObserver(resize);
  ro.observe(container);
  document.addEventListener("visibilitychange", () => { visible = !document.hidden; if (visible) request(); });

  const reduceMotion = () => document.documentElement.dataset.dtStill === "1" || matchMedia("(prefers-reduced-motion: reduce)").matches;

  const api = {
    THREE, renderer, scene, camera, target, canvas, sun,
    request,
    animate(cb) { frameCallbacks.add(cb); schedule(); },
    /** tween: calls fn(t in 0..1 eased) for seconds; resolves when done. */
    tween(seconds, fn, ease = (t) => 1 - Math.pow(1 - t, 3)) {
      if (reduceMotion() || seconds <= 0) { fn(1); request(); return Promise.resolve(); }
      const start = performance.now() / 1000;
      return new Promise((resolve) => {
        api.animate((now) => {
          const t = Math.min(1, (now - start) / seconds);
          fn(ease(t));
          if (t >= 1) { resolve(); return false; }
          return true;
        });
      });
    },
    moveCamera(pos, look, seconds = 1.4) {
      const p0 = camera.position.clone(), t0 = target.clone();
      const p1 = new THREE.Vector3(...pos), t1 = new THREE.Vector3(...look);
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      return api.tween(seconds, (t) => { camera.position.lerpVectors(p0, p1, t); target.lerpVectors(t0, t1, t); }, ease);
    },
    repaint() {
      const q = palette();
      deskMat.map.dispose(); deskMat.map = deskTexture(); deskMat.needsUpdate = true;
      matMesh.material.map.dispose(); matMesh.material.map = gridTexture(2048, 70, q.matGrid, q.matGridMajor, q.mat); matMesh.material.needsUpdate = true;
      hemi.color.set(q.name === "light" ? 0xffffff : 0xdfe8f2);
      hemi.intensity = q.name === "light" ? 1.6 : 1.5;
      request();
    },
    reduceMotion,
    lowEnd,
    perf,
    destroy() { destroyed = true; ro.disconnect(); renderer.dispose(); },
  };
  resize();
  return api;
}
