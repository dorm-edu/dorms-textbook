// The pop-up toolkit a lesson uses on the right page (S). Units are centimetres on the page:
// x from -10 (spine side) to 10 (outer edge), z from -13 (top of page) to 13 (bottom, toward the reader), y up.
import * as THREE from "three";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { inked, inkMaterial, glowMaterial, lineMaterial, outlineOf } from "./ink.js";
import { palette, FONT } from "./tokens.js";
import { record as bridgeRecord, reportError } from "./bridge.js";

const LIMITS = { objects: 300, samples: 1500, surfaceGrid: 96 };

export function fmt(v, digits = 3) {
  if (!Number.isFinite(v)) return "정의되지 않음";
  const r = Number(v.toFixed(digits));
  return (Object.is(r, -0) ? 0 : r).toLocaleString("ko-KR", { maximumFractionDigits: digits });
}

function tone(name) {
  const p = palette();
  return { accent: p.accent, ink: p.ink, soft: p.inkSoft, warm: p.warm, red: p.red, fill: p.fill }[name] ?? name;
}

function v3(p) { return Array.isArray(p) ? new THREE.Vector3(p[0], p[1] ?? 0, p[2] ?? 0) : new THREE.Vector3(p.x, p.y ?? 0, p.z ?? 0); }

function fatLine(points, { color = "accent", width = 2.6, dashed = false, opacity } = {}) {
  const g = new LineGeometry();
  g.setPositions(points.flatMap((q) => [q.x, q.y, q.z]));
  const line = new Line2(g, lineMaterial(tone(color), width, { dashed, opacity, dashSize: 0.35, gapSize: 0.25 }));
  if (dashed) line.computeLineDistances();
  return line;
}
function setLine(line, points) {
  line.geometry.dispose();
  const g = new LineGeometry();
  g.setPositions(points.flatMap((q) => [q.x, q.y, q.z]));
  line.geometry = g;
  if (line.material.dashed) line.computeLineDistances();
}

function boardTexture(opts) {
  const p = palette();
  const W = 1024, H = Math.round(1024 * (opts.height / opts.width));
  const c = document.createElement("canvas"); c.width = W; c.height = H;
  const g = c.getContext("2d");
  g.fillStyle = p.paper; g.fillRect(0, 0, W, H);
  const pad = 70;
  const sx = (W - pad * 2) / (opts.x[1] - opts.x[0]), sy = (H - pad * 2) / (opts.y[1] - opts.y[0]);
  const X = (x) => pad + (x - opts.x[0]) * sx, Y = (y) => H - pad - (y - opts.y[0]) * sy;
  const step = (span) => { const raw = span / 8, k = Math.pow(10, Math.floor(Math.log10(raw))), n = raw / k; return (n < 1.5 ? 1 : n < 3.5 ? 2 : n < 7.5 ? 5 : 10) * k; };
  const xs = opts.step?.[0] ?? step(opts.x[1] - opts.x[0]), ys = opts.step?.[1] ?? step(opts.y[1] - opts.y[0]);
  g.strokeStyle = p.paperGrid.replace(/[\d.]+\)$/, "0.12)"); g.lineWidth = 2;
  for (let x = Math.ceil(opts.x[0] / xs) * xs; x <= opts.x[1] + 1e-9; x += xs) { g.beginPath(); g.moveTo(X(x), pad); g.lineTo(X(x), H - pad); g.stroke(); }
  for (let y = Math.ceil(opts.y[0] / ys) * ys; y <= opts.y[1] + 1e-9; y += ys) { g.beginPath(); g.moveTo(pad, Y(y)); g.lineTo(W - pad, Y(y)); g.stroke(); }
  g.strokeStyle = p.inkSoft; g.lineWidth = 4;
  if (opts.x[0] <= 0 && opts.x[1] >= 0) { g.beginPath(); g.moveTo(X(0), pad - 10); g.lineTo(X(0), H - pad + 10); g.stroke(); }
  if (opts.y[0] <= 0 && opts.y[1] >= 0) { g.beginPath(); g.moveTo(pad - 10, Y(0)); g.lineTo(W - pad + 10, Y(0)); g.stroke(); }
  g.font = `700 28px ${FONT.mono}`; g.fillStyle = p.inkSoft; g.textAlign = "center";
  const ax = Math.min(Math.max(0, opts.y[0]), opts.y[1]);
  for (let x = Math.ceil(opts.x[0] / xs) * xs; x <= opts.x[1] + 1e-9; x += xs) if (Math.abs(x) > 1e-9) g.fillText(fmt(x), X(x), Y(ax) + 40);
  g.textAlign = "right";
  const ay = Math.min(Math.max(0, opts.x[0]), opts.x[1]);
  for (let y = Math.ceil(opts.y[0] / ys) * ys; y <= opts.y[1] + 1e-9; y += ys) if (Math.abs(y) > 1e-9) g.fillText(fmt(y), X(ay) - 14, Y(y) + 10);
  if (opts.title) { g.textAlign = "left"; g.font = `800 34px ${FONT.sans}`; g.fillStyle = p.ink; g.fillText(opts.title, pad, 50); }
  // corner brackets
  g.strokeStyle = p.ink; g.lineWidth = 5; const L = 40, m = 16;
  for (const [cx, cy, dx, dy] of [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]]) { g.beginPath(); g.moveTo(cx + dx * L, cy); g.lineTo(cx, cy); g.lineTo(cx, cy + dy * L); g.stroke(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return { texture: t, pad: pad / W };
}

export function createPopup(ctx) {
  const { world, book, ui, spreadIndex } = ctx;
  const stage = book.stage;
  const tappables = [];
  const draggables = [];
  const labels = [];
  const frames = [];
  let count = 0;

  function track(obj, at) {
    if (++count > LIMITS.objects) throw new Error(`그림 쪽 부품이 너무 많아요(최대 ${LIMITS.objects}개).`);
    if (at) obj.position.copy(v3(at));
    stage.add(obj);
    world.request();
    return obj;
  }
  const shape = (geometry, opts = {}) => track(inked(geometry, opts), opts.at);

  const S = {
    THREE,
    fmt,
    stage,
    palette,
    /** any geometry drawn in ink: { at:[x,y,z], color, glow, outline:false, shadow:false } */
    ink: (geometry, opts) => shape(geometry, opts),
    box: (w, h, d, opts = {}) => { const g = new THREE.BoxGeometry(w, h, d); g.translate(0, h / 2, 0); return shape(g, opts); },
    cylinder: (rTop, rBottom, h, opts = {}) => { const g = new THREE.CylinderGeometry(rTop, rBottom, h, opts.segments ?? 48, 1, !!opts.open); g.translate(0, h / 2, 0); return shape(g, { ...opts, outline: opts.outline ?? true }); },
    sphere: (r, opts = {}) => { const g = new THREE.SphereGeometry(r, 40, 24); g.translate(0, r, 0); return shape(g, { ...opts, outline: false }); },
    cone: (r, h, opts = {}) => { const g = new THREE.ConeGeometry(r, h, 40); g.translate(0, h / 2, 0); return shape(g, opts); },
    torus: (r, tube, opts = {}) => shape(new THREE.TorusGeometry(r, tube, 20, 64), { ...opts, outline: false }),
    tube(points, radius = 0.15, opts = {}) {
      const curve = new THREE.CatmullRomCurve3(points.map(v3));
      return shape(new THREE.TubeGeometry(curve, Math.min(400, points.length * 8), radius, 10, false), { ...opts, outline: false });
    },
    lathe(profile, opts = {}) { return shape(new THREE.LatheGeometry(profile.map(([x, y]) => new THREE.Vector2(x, y)), 48), { ...opts, outline: false }); },
    extrude(outline2d, depth, opts = {}) {
      const s = new THREE.Shape(outline2d.map(([x, y]) => new THREE.Vector2(x, y)));
      const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false });
      return shape(g, opts);
    },
    /** glowing line in space (energy path, ray, vector) */
    line(points, opts = {}) {
      const l = track(fatLine(points.map(v3), opts));
      return { update(pts) { setLine(l, pts.map(v3)); world.request(); }, set visible(v) { l.visible = v; world.request(); } };
    },
    /** a glass with a glowing fill; .level = 0..1 animates the fill */
    jar({ at = [0, 0, 0], radius = 1, height = 3, color = "accent", level = 0 } = {}) {
      const group = new THREE.Group();
      const glass = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, 40, 1, true), new THREE.MeshLambertMaterial({ color: tone("fill"), transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }));
      glass.position.y = height / 2;
      for (const yy of [0, height]) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.035, 6, 48), new THREE.MeshBasicMaterial({ color: tone("ink") }));
        ring.rotation.x = Math.PI / 2; ring.position.y = yy - height / 2; glass.add(ring);
      }
      for (const sx of [-1, 1]) {
        const edge = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, height, 6), new THREE.MeshBasicMaterial({ color: tone("ink") }));
        edge.position.x = sx * radius; glass.add(edge); edge.userData.silhouette = true;
      }
      const liquidGeo = new THREE.CylinderGeometry(radius * 0.9, radius * 0.9, 1, 32);
      liquidGeo.translate(0, 0.5, 0);
      const liquid = new THREE.Mesh(liquidGeo, glowMaterial(tone(color), { opacity: 0.85 }));
      liquid.scale.y = Math.max(0.001, level * height * 0.95);
      group.add(glass, liquid);
      track(group, at);
      let current = level;
      return {
        group,
        get level() { return current; },
        set level(v) {
          const from = current, to = Math.min(1, Math.max(0, v)); current = to;
          world.tween(0.6, (t) => { liquid.scale.y = Math.max(0.001, (from + (to - from) * t) * height * 0.95); });
        },
      };
    },
    /** an arc of light travelling from a to b (energy moving between stores) */
    flow(a, b, { color = "accent", height = 2.5, seconds = 1.2 } = {}) {
      const A = v3(a), B = v3(b), mid = A.clone().add(B).multiplyScalar(0.5); mid.y += height;
      const curve = new THREE.QuadraticBezierCurve3(A, mid, B);
      const pts = curve.getPoints(48);
      const l = track(fatLine(pts.slice(0, 2), { color, width: 6 }));
      return world.tween(seconds, (t) => { const n = Math.max(2, Math.round(t * pts.length)); setLine(l, pts.slice(Math.max(0, n - 18), n)); }).then(() => { stage.remove(l); world.request(); });
    },
    /** standing graph card: { at:[x,z], width, height, x:[a,b], y:[c,d], title } */
    board(opts = {}) {
      const o = { at: [0, -4], width: 15, height: 10, x: [-5, 5], y: [-3, 3], ...opts };
      const group = new THREE.Group();
      const { texture, pad } = boardTexture(o);
      const cardGeo = new THREE.BoxGeometry(o.width, o.height, 0.12);
      const faceMat = new THREE.MeshLambertMaterial({ map: texture });
      const edgeMat = inkMaterial({ hatch: false });
      const card = new THREE.Mesh(cardGeo, [edgeMat, edgeMat, edgeMat, edgeMat, faceMat, edgeMat]);
      card.position.y = o.height / 2 + 0.6;
      card.castShadow = true; card.receiveShadow = true;
      card.add(outlineOf(cardGeo, { color: tone("ink"), width: 1.4 }));
      group.add(card);
      for (const sx of [-1, 1]) {
        const foot = inked(new THREE.BoxGeometry(1.6, 0.6, 1.4), {});
        foot.position.set(sx * (o.width / 2 - 1.4), 0.3, 0);
        group.add(foot);
      }
      group.position.set(o.at[0], 0, o.at[1]);
      if (o.turn) group.rotation.y = o.turn;
      track(group);
      const innerW = o.width * (1 - pad * 2), innerH = o.height - o.width * pad * 2;
      const X = (x) => -innerW / 2 + ((x - o.x[0]) / (o.x[1] - o.x[0])) * innerW;
      const Y = (y) => 0.6 + o.height / 2 - innerH / 2 + ((y - o.y[0]) / (o.y[1] - o.y[0])) * innerH;
      const Z = 0.1;
      const toLocal = (x, y, z = Z) => new THREE.Vector3(X(x), Y(y), z);
      const inside = (y) => Number.isFinite(y) && y >= o.y[0] - 1e-9 && y <= o.y[1] + 1e-9;
      const clipPts = (fn, from, to, n) => {
        const out = [];
        for (let i = 0; i <= n; i++) { const x = from + ((to - from) * i) / n, y = fn(x); if (inside(y)) out.push(toLocal(x, y)); }
        return out;
      };
      const extendLine = (p, q) => {
        // clip infinite line through p, q to the plot box
        const dx = q.x - p.x, dy = q.y - p.y;
        const ts = [];
        if (Math.abs(dx) > 1e-12) for (const xb of o.x) { const t = (xb - p.x) / dx, y = p.y + t * dy; if (y >= o.y[0] - 1e-9 && y <= o.y[1] + 1e-9) ts.push(t); }
        if (Math.abs(dy) > 1e-12) for (const yb of o.y) { const t = (yb - p.y) / dy, x = p.x + t * dx; if (x >= o.x[0] - 1e-9 && x <= o.x[1] + 1e-9) ts.push(t); }
        if (ts.length < 2) return [toLocal(p.x, p.y), toLocal(q.x, q.y)];
        const t0 = Math.min(...ts), t1 = Math.max(...ts);
        return [toLocal(p.x + t0 * dx, p.y + t0 * dy), toLocal(p.x + t1 * dx, p.y + t1 * dy)];
      };
      const B = {
        group,
        graph(f, { color = "accent", width = 3.2, samples = 360, from = o.x[0], to = o.x[1] } = {}) {
          samples = Math.min(LIMITS.samples, Math.max(16, samples | 0));
          const pts = clipPts(f, from, to, samples);
          if (pts.length < 2) throw new Error("그래프가 판 안에 보이지 않아요. x, y 범위를 확인해 주세요.");
          const l = fatLine(pts, { color, width }); card.parent.add(l);
          const halo = fatLine(pts, { color, width: width * 3, opacity: 0.18 }); card.parent.add(halo);
          world.request();
          return { update(nf) { f = nf; const q = clipPts(nf, from, to, samples); setLine(l, q); setLine(halo, q); world.request(); } };
        },
        line(p, q, { color = "ink", width = 2.2, dashed = false, extend = false } = {}) {
          const mk = (a, b) => (extend ? extendLine(a, b) : [toLocal(a.x, a.y), toLocal(b.x, b.y)]);
          const l = fatLine(mk(p, q), { color, width, dashed }); card.parent.add(l); world.request();
          return { update(a, b) { setLine(l, mk(a, b)); world.request(); }, set visible(v) { l.visible = v; world.request(); } };
        },
        secant(f, a, h, opts = {}) {
          const l = B.line({ x: a, y: f(a) }, { x: a + h, y: f(a + h) }, { extend: true, ...opts });
          return { update(na, nh, nf = f) { f = nf; l.update({ x: na, y: f(na) }, { x: na + nh, y: f(na + nh) }); } };
        },
        tangent(f, a, { df, color = "warm", dashed = true, width = 2.4 } = {}) {
          const slope = (x) => (df ? df(x) : (f(x + 1e-5) - f(x - 1e-5)) / 2e-5);
          const l = B.line({ x: a, y: f(a) }, { x: a + 1, y: f(a) + slope(a) }, { extend: true, color, dashed, width });
          return { slope, update(na) { l.update({ x: na, y: f(na) }, { x: na + 1, y: f(na) + slope(na) }); } };
        },
        area(f, a, b, { g = () => 0, color = "accent", opacity = 0.3, samples = 120 } = {}) {
          const mk = (fa, fb) => {
            const sh = [];
            for (let i = 0; i <= samples; i++) { const x = fa + ((fb - fa) * i) / samples; sh.push(new THREE.Vector2(X(x), Y(Math.min(o.y[1], Math.max(o.y[0], f(x)))))); }
            for (let i = samples; i >= 0; i--) { const x = fa + ((fb - fa) * i) / samples; sh.push(new THREE.Vector2(X(x), Y(Math.min(o.y[1], Math.max(o.y[0], g(x)))))); }
            const geo = new THREE.ShapeGeometry(new THREE.Shape(sh)); geo.translate(0, 0, 0.08); return geo;
          };
          const m = new THREE.Mesh(mk(a, b), glowMaterial(tone(color), { opacity })); card.parent.add(m); world.request();
          return { update(na, nb, nf = f) { f = nf; m.geometry.dispose(); m.geometry = mk(na, nb); world.request(); } };
        },
        point(x, y, { color = "accent", label, draggable } = {}) {
          const dot = new THREE.Mesh(new THREE.SphereGeometry(0.26, 20, 14), glowMaterial(tone(color), { opacity: 1 }));
          dot.position.copy(toLocal(x, y, 0.3)); card.parent.add(dot);
          const tag = label ? S.label(label, [0, 0, 0], { tone: "accent" }) : null;
          const handle = {
            x, y,
            move(nx, ny) { handle.x = nx; handle.y = ny; dot.position.copy(toLocal(nx, ny, 0.3)); if (tag) tag.attach(dot, [0.55, 0.55, 0]); world.request(); },
            set label(t) { if (tag) tag.text = t; },
          };
          handle.move(x, y);
          if (draggable) {
            draggables.push({
              mesh: dot,
              plane: () => { const n = new THREE.Vector3(0, 0, 1).applyQuaternion(card.getWorldQuaternion(new THREE.Quaternion())); return new THREE.Plane().setFromNormalAndCoplanarPoint(n, card.getWorldPosition(new THREE.Vector3()).addScaledVector(n, 0.06)); },
              drag(world3) {
                const local = card.parent.worldToLocal(world3.clone());
                const px = o.x[0] + ((local.x + innerW / 2) / innerW) * (o.x[1] - o.x[0]);
                const py = o.y[0] + ((local.y - (0.6 + o.height / 2 - innerH / 2)) / innerH) * (o.y[1] - o.y[0]);
                const [nx, ny] = draggable.constrain ? draggable.constrain(px, py) : [px, py];
                handle.move(nx, ny);
                try { draggable.onDrag && draggable.onDrag(nx, ny); } catch (e) { reportError(e); }
              },
            });
          }
          return handle;
        },
        label(text, x, y, opts = {}) { const t = S.label(text, [0, 0, 0], opts); const holder = new THREE.Object3D(); holder.position.copy(toLocal(x, y, 0.3)); card.parent.add(holder); t.attach(holder); return t; },
      };
      return B;
    },
    /** z = f(x, y) surface lying on the page: { x:[a,b], y:[c,d], size:12, height:4, at:[x,z] } */
    surface(f, { x = [-2, 2], y = [-2, 2], size = 12, height = 4, at = [0, 0], grid = 28, color = "accent" } = {}) {
      grid = Math.min(LIMITS.surfaceGrid, Math.max(8, grid | 0));
      const geo = new THREE.PlaneGeometry(size, size, grid, grid);
      geo.rotateX(-Math.PI / 2);
      const pos = geo.attributes.position;
      let lo = Infinity, hi = -Infinity;
      const vals = [];
      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i) / size + 0.5, w = pos.getZ(i) / size + 0.5;
        const val = f(x[0] + u * (x[1] - x[0]), y[1] - w * (y[1] - y[0]));
        vals.push(val); if (Number.isFinite(val)) { lo = Math.min(lo, val); hi = Math.max(hi, val); }
      }
      const span = hi - lo || 1;
      for (let i = 0; i < pos.count; i++) pos.setY(i, 0.8 + ((Number.isFinite(vals[i]) ? vals[i] : lo) - lo) / span * height);
      geo.computeVertexNormals();
      const mesh = new THREE.Mesh(geo, glowMaterial(tone(color), { opacity: 0.3 }));
      mesh.material.side = THREE.DoubleSide; mesh.material.depthWrite = false;
      const wire = new THREE.LineSegments(new THREE.WireframeGeometry(geo), new THREE.LineBasicMaterial({ color: tone("ink"), transparent: true, opacity: 0.28 }));
      const g = new THREE.Group(); g.add(mesh, wire); g.position.set(at[0], 0, at[1]);
      return track(g);
    },
    /** printed tag floating in the scene (crisp HTML text) */
    label(text, at, { tone: t = "note" } = {}) {
      const el = document.createElement("span");
      el.className = `dt-tag is-${t}`;
      el.textContent = String(text);
      ui.labels.append(el);
      const item = { el, obj: null, offset: new THREE.Vector3(), pos: v3(at) };
      labels.push(item);
      world.request();
      return {
        set text(s) { el.textContent = String(s); },
        move(p) { item.pos = v3(p); item.obj = null; world.request(); },
        attach(obj, off = [0, 0, 0]) { item.obj = obj; item.offset = v3(off); world.request(); },
      };
    },
    /** tap an object to run onTap; shows a dashed ring around it while selected */
    tappable(obj, { name, onTap } = {}) {
      tappables.push({ obj, name: name ?? "그림", onTap });
      ui.addA11yButton(name ?? "그림 누르기", () => S._tap(obj));
      return obj;
    },
    /** drag an object along the page: { axis: "x" | "z", min, max, onDrag } */
    drag(obj, { axis = "x", min = -9, max = 9, onDrag } = {}) {
      draggables.push({
        mesh: obj,
        plane: () => new THREE.Plane(new THREE.Vector3(0, 1, 0), -(stage.getWorldPosition(new THREE.Vector3()).y + 0.5)),
        drag(world3) {
          const local = stage.worldToLocal(world3.clone());
          const v = Math.min(max, Math.max(min, axis === "z" ? local.z : local.x));
          obj.position[axis] = v;
          world.request();
          try { onDrag && onDrag(v); } catch (e) { reportError(e); }
        },
      });
      return obj;
    },
    slider(opts) { return ui.slider(opts); },
    readout(name, value = "") { return ui.readout(name, value); },
    margin(lines) { ctx.setMargin(Array.isArray(lines) ? lines.map(String) : [String(lines)]); },
    complete() { ctx.complete(); },
    record(key, value) { bridgeRecord(key, value, spreadIndex); },
    onFrame(cb) { frames.push(cb); world.animate((t) => { try { return cb(t) === true; } catch (e) { reportError(e); return false; } }); },
    tween(seconds, fn) { return world.tween(seconds, fn); },
    wait(ms) { return new Promise((r) => setTimeout(r, world.reduceMotion() ? 0 : ms)); },
    say(text) { ui.caption(text); },
    /** move the camera, in page coordinates: view("page" | "close" | "low" | "spread") or ({ from:[x,y,z], look:[x,y,z] }) */
    view(name, seconds = 1.4) { return ctx.view(name, seconds); },
    _tap(obj) {
      const t = tappables.find((x) => x.obj === obj || isChild(obj, x.obj));
      if (!t) return false;
      ctx.select(t.obj);
      try { t.onTap && t.onTap(); } catch (e) { reportError(e); }
      return true;
    },
  };

  function isChild(o, root) { for (let n = o; n; n = n.parent) if (n === root) return true; return false; }

  function placeLabels(width, height) {
    const v = new THREE.Vector3();
    for (const item of labels) {
      if (item.obj) item.obj.getWorldPosition(v).add(item.offset);
      else v.copy(item.pos).applyMatrix4(stage.matrixWorld);
      v.project(world.camera);
      const x = (v.x * 0.5 + 0.5) * width, y = (-v.y * 0.5 + 0.5) * height;
      item.el.style.display = v.z > 1 || x < -60 || x > width + 60 || y < -30 || y > height + 30 ? "none" : "";
      item.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%)`;
    }
  }

  function rise() {
    const kids = stage.children.slice();
    kids.forEach((k) => { k.userData.baseScaleY = k.scale.y; k.scale.y = 0.001; });
    const stagger = 0.6 / Math.max(1, kids.length);
    // each piece unfolds up off the page in turn, with a small overshoot like paper springing up
    return world.tween(world.reduceMotion() ? 0 : 0.9, (t) => {
      kids.forEach((k, i) => {
        const local = Math.min(1, Math.max(0, t * 1.6 - i * stagger));
        const e = local <= 0 ? 0.001 : 1 - Math.pow(1 - local, 3) + Math.sin(local * Math.PI) * 0.08;
        k.scale.y = Math.max(0.001, k.userData.baseScaleY * e);
      });
    }, (t) => t);
  }
  function fold() {
    const kids = stage.children.slice();
    return world.tween(world.reduceMotion() ? 0 : 0.35, (t) => kids.forEach((k) => { k.scale.y = Math.max(0.001, (k.userData.baseScaleY ?? 1) * (1 - t)); }));
  }
  function clear() {
    for (const item of labels) item.el.remove();
    labels.length = 0; tappables.length = 0; draggables.length = 0;
    stage.traverse((o) => { o.geometry && o.geometry.dispose(); const m = o.material; if (m) (Array.isArray(m) ? m : [m]).forEach((x) => { x.map && x.map.dispose(); x.dispose(); }); });
    stage.clear();
    ui.clearControls();
    ui.resetSceneButtons();
    world.request();
  }

  return { S, tappables, draggables, placeLabels, rise, fold, clear };
}
