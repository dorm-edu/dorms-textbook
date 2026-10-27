// book(def): a lesson as an open hardback on the desk. Each spread = printed left page + pop-up right page.
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { createWorld } from "./world.js";
import { createBook, makeCanvas, PW, FLAP_OPEN } from "./bookmesh.js";
import { printLeft, printRight, printFlap, PAGE_W, PAGE_H } from "./printer.js";
import { createPopup } from "./popup.js";
import { createUI } from "./ui.js";
import { validateLesson } from "./validate.js";
import { palette, setPalette } from "./tokens.js";
import { repaintInk, lineMaterial } from "./ink.js";
import { post, record, reportError, errorList } from "./bridge.js";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export function book(def, mountTarget) {
  const root = typeof mountTarget === "string" ? document.querySelector(mountTarget) : mountTarget || document.getElementById("book") || document.body;
  window.__dt = window.__dt || { version: "2", ready: false, errors: [], perf: {} };
  const problems = validateLesson(def);
  if (problems.length) {
    window.__dt.invalid = problems;
    root.innerHTML = `<section class="dt-invalid" role="alert"><h1>차시를 열 수 없어요</h1><ul>${problems.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>`;
    post("invalid", { problems });
    return null;
  }
  const params = new URLSearchParams(location.search);
  const checkMode = params.has("check");
  if (checkMode || params.get("still") === "1") document.documentElement.dataset.dtStill = "1";
  if (params.get("theme") === "light") setPalette("light"); else setPalette("dark");

  root.classList.add("dt-root");
  const world = createWorld(root);
  const bk = createBook(world);
  const spreads = def.spreads;
  const states = spreads.map(() => ({ picked: null, checkPicked: null, checkResult: null, flapOpen: false, margin: null, challengeDone: false, stamped: false }));
  let index = Math.min(spreads.length - 1, Math.max(0, Number(params.get("spread") ?? 0) | 0));
  let busy = false;
  let side = "right";
  let popup = null;
  let regions = [];
  let selection = null;
  let playToken = 0;

  const ui = createUI(root, def, {
    go: (i) => go(i),
    prev: () => go(index - 1),
    next: () => go(index + 1),
    play: () => (playToken ? stopShots() : playShots()),
    side: () => { side = side === "right" ? "left" : "right"; ui.sideLabel(side); frameCamera(1.0); },
    still: (on) => { document.documentElement.dataset.dtStill = on ? "1" : ""; },
    theme: () => { setPalette(palette().name === "dark" ? "light" : "dark"); ui.themeLabel(palette().name); world.repaint(); bk.repaint(); repaintInk(); printSpread(index); buildScene(false); },
  });

  // ── camera framing ──
  function narrow() { return world.camera.aspect < 1.05; }
  /** fit a box of width w and depth h (cm) centred at look into the view, seen from direction dir */
  function fitDistance(w, h, dir) {
    const cam = world.camera;
    const v = THREE.MathUtils.degToRad(cam.fov) / 2;
    const hfov = Math.atan(Math.tan(v) * cam.aspect);
    const tilt = Math.atan2(dir[1], dir[2]); // angle above the page
    const apparentH = h * Math.sin(tilt) + 2.5 * Math.cos(tilt);
    return Math.max((w / 2) / Math.tan(hfov), (apparentH / 2) / Math.tan(v)) * (cam.aspect > 1.05 ? 1.1 : 1.02);
  }
  function frameCamera(seconds = 0) {
    const cam = world.camera;
    const dir = new THREE.Vector3(0, 0.62, 0.78).normalize();
    let look, w, h;
    if (!narrow()) { cam.fov = 30; w = PW * 2 + 2.5; h = 28 + 1.5; look = new THREE.Vector3(0, 1.4, 1.6); }
    else { cam.fov = 36; w = PW + 1.4; h = 28 + 1; look = new THREE.Vector3(side === "right" ? PW / 2 : -PW / 2, 1.4, 1.2); }
    cam.updateProjectionMatrix();
    const d = fitDistance(w, h, [0, dir.y, dir.z]);
    const pos = look.clone().addScaledVector(dir, d);
    return world.moveCamera([pos.x, pos.y, pos.z], [look.x, look.y, look.z], seconds);
  }
  world.onResize = () => { if (!busy) frameCamera(0); };
  const stageWorld = () => bk.stage.getWorldPosition(new THREE.Vector3());
  function view(name, seconds = 1.4) {
    const c = stageWorld();
    const presets = {
      spread: null,
      page: { from: [c.x, 34, c.z + 27], look: [c.x, 3, c.z + 1] },
      close: { from: [c.x + 4, 16, c.z + 17], look: [c.x, 4, c.z - 1] },
      low: { from: [c.x + 16, 7, c.z + 16], look: [c.x, 4, c.z - 1] },
      top: { from: [c.x, 46, c.z + 3], look: [c.x, 0, c.z] },
    };
    if (name === "spread" || name === undefined) return frameCamera(seconds);
    const v = typeof name === "object" ? { from: [c.x + name.from[0], c.y + name.from[1], c.z + name.from[2]], look: [c.x + name.look[0], c.y + name.look[1], c.z + name.look[2]] } : presets[name];
    if (!v) return frameCamera(seconds);
    return world.moveCamera(v.from, v.look, seconds);
  }

  // ── printing ──
  function flapCanvasFor(rect, spread) {
    const c = makeCanvas(Math.round(rect.w), Math.round(rect.h));
    printFlap(c, spread);
    return c;
  }
  function printSpread(i, { leftCanvas = bk.leftCanvas, rightCanvas = bk.rightCanvas, flap = true } = {}) {
    const res = printLeft(leftCanvas, def, spreads[i], i, states[i]);
    printRight(rightCanvas, def, spreads[i], i, states[i]);
    if (leftCanvas === bk.leftCanvas) {
      regions = res.regions;
      bk.refresh("left");
      if (flap) {
        const f = bk.setFlap(res.flapRect, res.flapRect ? flapCanvasFor(res.flapRect, spreads[i]) : null);
        if (f && states[i].flapOpen) f.pivot.rotation.x = FLAP_OPEN;
      }
    }
    if (rightCanvas === bk.rightCanvas) bk.refresh("right");
    return res;
  }
  function copyCanvas(src) { const c = makeCanvas(src.width, src.height); c.getContext("2d").drawImage(src, 0, 0); return c; }

  // ── scene ──
  function buildScene(animate = true) {
    if (popup) popup.clear();
    ui.resetSceneButtons();
    selection = null;
    popup = createPopup({
      world, book: bk, ui, spreadIndex: index,
      setMargin: (lines) => { states[index].margin = lines; printSpread(index, { flap: false }); },
      complete: () => complete(),
      select: (obj) => select(obj),
      view,
    });
    const spread = spreads[index];
    ui.renderText(spread, states[index], { choose, flap: toggleFlap });
    try {
      const r = spread.scene(popup.S);
      if (r && typeof r.then === "function") r.catch(reportError);
    } catch (e) {
      reportError(e);
    }
    world.afterRender = () => { if (!popup) return; const rect = root.getBoundingClientRect(); popup.placeLabels(rect.width, rect.height); };
    if (animate) return popup.rise();
    world.request();
    return Promise.resolve();
  }

  function select(obj) {
    if (selection) { bk.stage.remove(selection); selection.geometry.dispose(); selection = null; }
    const box = new THREE.Box3().setFromObject(obj);
    const center = bk.stage.worldToLocal(box.getCenter(new THREE.Vector3()));
    const size = box.getSize(new THREE.Vector3());
    const r = Math.max(size.x, size.z) * 0.62 + 0.6;
    const pts = [];
    for (let i = 0; i <= 64; i++) { const a = (i / 64) * Math.PI * 2; pts.push(center.x + Math.cos(a) * r, 0.06, center.z + Math.sin(a) * r); }
    const g = new LineGeometry(); g.setPositions(pts);
    selection = new Line2(g, lineMaterial(palette().ink, 1.6, { dashed: true, dashSize: 0.5, gapSize: 0.35 }));
    selection.computeLineDistances();
    bk.stage.add(selection);
    world.request();
  }

  function complete() {
    const st = states[index];
    if (st.stamped) return;
    st.stamped = true; st.challengeDone = true;
    printSpread(index, { flap: false });
    ui.announce("도장을 받았어요.");
    post("complete", { spread: index });
    if (spreads[index].challengeRecord) record(spreads[index].challengeRecord, "done", index);
  }

  // ── left page actions ──
  function choose(kind, i) {
    const spread = spreads[index], st = states[index];
    const block = spread[kind];
    if (!block) return;
    if (kind === "predict") { st.picked = i; ui.caption(""); }
    else { st.checkPicked = i; st.checkResult = i === block.answer ? "good" : "retry"; if (st.checkResult === "good" && block.completes !== false) complete(); }
    if (block.record) record(block.record, block.choices[i], index);
    printSpread(index, { flap: false });
    ui.renderText(spread, st, { choose, flap: toggleFlap });
    ui.announce(kind === "predict" ? `예측: ${block.choices[i]}` : st.checkResult === "good" ? "맞았어요." : "다시 생각해 봐요.");
  }
  function toggleFlap() {
    const spread = spreads[index], st = states[index];
    if (!spread.flap) return;
    if (spread.predict && st.picked === null && !st.flapOpen) { ui.caption("먼저 예측을 하나 골라 주세요.", 2600); return; }
    st.flapOpen = !st.flapOpen;
    bk.openFlap(st.flapOpen);
    if (st.flapOpen && spread.flap.record) record(spread.flap.record, "opened", index);
    ui.renderText(spread, st, { choose, flap: toggleFlap });
  }

  // ── spread changes ──
  async function go(i) {
    if (busy || i < 0 || i >= spreads.length || i === index) return;
    busy = true;
    stopShots();
    try {
      if (popup) await popup.fold();
      if (popup) popup.clear();
      popup = null;
      bk.setFlap(null);
      const dir = i > index ? 1 : -1;
      if (dir > 0) {
        const front = copyCanvas(bk.rightCanvas);
        const back = makeCanvas();
        index = i;
        printSpread(i, { leftCanvas: back, rightCanvas: bk.rightCanvas });
        await bk.turn(1, front, back, world.reduceMotion() ? 0 : 0.95);
        printSpread(i);
      } else {
        const back = copyCanvas(bk.leftCanvas);
        const front = makeCanvas();
        index = i;
        printSpread(i, { leftCanvas: bk.leftCanvas, rightCanvas: front });
        await bk.turn(-1, front, back, world.reduceMotion() ? 0 : 0.95);
        printSpread(i);
      }
      ui.setSpread(index, spreads[index], spreads.length);
      post("spread", { index });
      await buildScene(true);
    } catch (e) {
      reportError(e);
    } finally {
      busy = false;
    }
  }

  // ── demonstration (camera shots + captions) ──
  async function playShots() {
    const shots = spreads[index].shots ?? [];
    if (!shots.length) return;
    const token = ++playToken;
    ui.playing(true);
    try {
      for (const shot of shots) {
        if (token !== playToken) return;
        ui.caption(shot.say);
        const moves = [];
        if (shot.view) moves.push(view(shot.view, shot.seconds ?? 1.6));
        if (shot.run) moves.push(Promise.resolve(shot.run(popup.S)));
        await Promise.all(moves);
        await new Promise((r) => setTimeout(r, world.reduceMotion() ? 300 : shot.hold ?? 1800));
      }
    } catch (e) { reportError(e); }
    if (token === playToken) stopShots();
  }
  function stopShots() {
    if (!playToken) return;
    playToken = 0;
    ui.playing(false);
    ui.caption("");
    frameCamera(1.0);
  }

  // ── pointer input on the 3D book ──
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let drag = null;
  function cast(e) {
    const rect = world.canvas.getBoundingClientRect();
    ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1);
    ray.setFromCamera(ndc, world.camera);
  }
  world.canvas.addEventListener("pointerdown", (e) => {
    if (busy || !popup) return;
    cast(e);
    // 1) draggable handles
    const dragMeshes = popup.draggables.map((d) => d.mesh);
    const dh = dragMeshes.length ? ray.intersectObjects(dragMeshes, true)[0] : null;
    if (dh) {
      drag = popup.draggables.find((d) => d.mesh === dh.object || d.mesh.getObjectById(dh.object.id));
      if (drag) { world.canvas.setPointerCapture(e.pointerId); e.preventDefault(); return; }
    }
    // 2) tappable pop-up objects
    const tapRoots = popup.tappables.map((t) => t.obj);
    const th = tapRoots.length ? ray.intersectObjects(tapRoots, true)[0] : null;
    if (th && popup.S._tap(th.object)) return;
    // 3) the flap
    if (bk.flap) { const fh = ray.intersectObject(bk.flap.mesh, false)[0]; if (fh) { toggleFlap(); return; } }
    // 4) printed regions on the left page
    const lh = ray.intersectObject(bk.left, false)[0];
    if (lh) {
      const px = bk.pixelOf(lh);
      const hit = regions.find((r) => px.x >= r.x && px.x <= r.x + r.w && px.y >= r.y && px.y <= r.y + r.h);
      if (hit) {
        const [kind, n] = hit.id.split(":");
        if (kind === "flap") toggleFlap(); else choose(kind, Number(n));
        return;
      }
      if (narrow() && side === "right") { side = "left"; ui.sideLabel(side); frameCamera(1.0); }
    }
  });
  world.canvas.addEventListener("pointermove", (e) => {
    if (!drag) {
      if (!popup || busy) return;
      cast(e);
      const hot = [...popup.tappables.map((t) => t.obj), ...popup.draggables.map((d) => d.mesh)];
      const over = (hot.length && ray.intersectObjects(hot, true).length) || (bk.flap && ray.intersectObject(bk.flap.mesh).length);
      world.canvas.style.cursor = over ? "pointer" : "";
      return;
    }
    cast(e);
    const hit = new THREE.Vector3();
    if (ray.ray.intersectPlane(drag.plane(), hit)) drag.drag(hit);
  });
  const endDrag = () => { drag = null; };
  world.canvas.addEventListener("pointerup", endDrag);
  world.canvas.addEventListener("pointercancel", endDrag);
  window.addEventListener("keydown", (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.key === "ArrowRight") go(index + 1);
    else if (e.key === "ArrowLeft") go(index - 1);
    else if (e.key === " " && spreads[index].shots?.length) { e.preventDefault(); playToken ? stopShots() : playShots(); }
    else if (e.key === "Escape") stopShots();
  });
  window.addEventListener("error", (e) => reportError(e.error || e.message));
  window.addEventListener("unhandledrejection", (e) => reportError(e.reason));

  // ── start ──
  printSpread(index);
  ui.setSpread(index, spreads[index], spreads.length);
  ui.themeLabel(palette().name);
  frameCamera(0);
  const ready = buildScene(!checkMode);

  Object.assign(window.__dt, {
    ready: true,
    title: def.title,
    unitCode: def.unitCode,
    standards: def.standards.slice(),
    spreads: spreads.length,
    get errors() { return errorList(); },
    /** jump without the page-turn animation (used by the checker) */
    async goTo(i) {
      if (i < 0 || i >= spreads.length) return false;
      stopShots(); if (popup) popup.clear(); popup = null;
      index = i; printSpread(i); ui.setSpread(i, spreads[i], spreads.length);
      await buildScene(false); world.request();
      return true;
    },
    capture() { world.renderer.render(world.scene, world.camera); return world.canvas.toDataURL("image/jpeg", 0.82); },
    pageSize: [PAGE_W, PAGE_H],
  });
  ready.then(() => post("ready", { title: def.title, spreads: spreads.length }));
  return { go };
}
