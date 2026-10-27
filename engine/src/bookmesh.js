// The open hardback on the mat: cover, page blocks, two printed pages that dip toward the spine,
// a liftable flap, and the page-turn animation between spreads.
import * as THREE from "three";
import { palette } from "./tokens.js";
import { PAGE_W, PAGE_H } from "./printer.js";
import { outlineOf } from "./ink.js";

export const PW = 21;           // page width (cm)
export const PH = 28;           // page height (cm)
const BASE = 0.12;              // top of the mat
const COVER_T = 0.35;
const BLOCK_T = 1.2;
export const SURFACE = BASE + COVER_T + BLOCK_T;
export const FLAP_OPEN = 2.9;

function canvasTexture(canvas) {
  const t = new THREE.CanvasTexture(canvas);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  return t;
}

export function makeCanvas(w = PAGE_W, h = PAGE_H) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  return c;
}

/** height of the paper at distance d from the spine: dips into the gutter, rises gently in the middle */
function lift(d) { return 0.32 * Math.sin((Math.PI * d) / PW) - 0.95 * Math.exp(-d / 1.25); }

function pageGeometry(side) {
  const g = new THREE.PlaneGeometry(PW, PH, 56, 1);
  g.rotateX(-Math.PI / 2);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);                    // -PW/2 .. PW/2
    const d = side === "left" ? PW / 2 - x : x + PW / 2;  // distance from spine
    pos.setX(i, side === "left" ? -d : d);
    pos.setY(i, SURFACE + lift(d));
  }
  g.computeVertexNormals();
  return g;
}

export function createBook(world) {
  const { scene } = world;
  const group = new THREE.Group();
  scene.add(group);
  const p = palette();

  const coverMat = new THREE.MeshLambertMaterial({ color: p.cover });
  const cover = new THREE.Mesh(new THREE.BoxGeometry(PW * 2 + 1.2, COVER_T, PH + 1.2), coverMat);
  cover.position.set(0, BASE + COVER_T / 2, 0);
  cover.castShadow = cover.receiveShadow = true;
  cover.add(outlineOf(cover.geometry, { color: p.coverEdge, width: 1.2 }));
  group.add(cover);

  const blockMat = new THREE.MeshLambertMaterial({ color: p.paperEdge, emissive: new THREE.Color(p.paperEdge), emissiveIntensity: 0.35 });
  // page blocks: their top follows the same curve as the paper so nothing shows through the gutter
  for (const side of [-1, 1]) {
    const shape = new THREE.Shape();
    const bottom = BASE + COVER_T;
    shape.moveTo(0, bottom);
    for (let i = 0; i <= 40; i++) { const d = (PW * i) / 40; shape.lineTo(d, SURFACE + lift(d) - 0.04); }
    shape.lineTo(PW, bottom);
    shape.lineTo(0, bottom);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: PH - 0.3, bevelEnabled: false, curveSegments: 1 });
    geo.translate(0, 0, -(PH - 0.3) / 2);
    if (side < 0) geo.scale(-1, 1, 1);
    const b = new THREE.Mesh(geo, blockMat);
    b.castShadow = b.receiveShadow = true;
    b.add(outlineOf(geo, { color: p.rule, width: 1, threshold: 40 }));
    group.add(b);
  }

  const leftCanvas = makeCanvas(), rightCanvas = makeCanvas();
  const leftTex = canvasTexture(leftCanvas), rightTex = canvasTexture(rightCanvas);
  const leftMat = new THREE.MeshLambertMaterial({ map: leftTex });
  const rightMat = new THREE.MeshLambertMaterial({ map: rightTex });
  const left = new THREE.Mesh(pageGeometry("left"), leftMat);
  const right = new THREE.Mesh(pageGeometry("right"), rightMat);
  left.receiveShadow = right.receiveShadow = true;
  left.userData.side = "left"; right.userData.side = "right";
  group.add(left, right);

  // pop-up stage anchored at the centre of the right page
  const stage = new THREE.Group();
  stage.position.set(PW / 2, SURFACE + 0.12, 0);
  group.add(stage);

  // ── flap ──
  let flap = null;
  function setFlap(rect, flapCanvas) {
    if (flap) { group.remove(flap.pivot); flap.mesh.geometry.dispose(); flap.mesh.material.map.dispose(); flap = null; }
    if (!rect) return null;
    const w = (rect.w / PAGE_W) * PW, h = (rect.h / PAGE_H) * PH;
    const x0 = -PW + (rect.x / PAGE_W) * PW;
    const zTop = -PH / 2 + (rect.y / PAGE_H) * PH;
    const pivot = new THREE.Group();
    const d = PW - (rect.x / PAGE_W) * PW - w / 2; // distance of centre from spine
    // hinge on the bottom edge: the flap folds down toward the reader, so the prediction above stays visible
    pivot.position.set(x0 + w / 2, SURFACE + lift(Math.max(d, 4)) + 0.05, zTop + h);
    const geo = new THREE.PlaneGeometry(w, h);
    geo.rotateX(-Math.PI / 2);
    geo.translate(0, 0, -h / 2);
    const tex = canvasTexture(flapCanvas);
    const mesh = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: tex, side: THREE.FrontSide }));
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.isFlap = true;
    const backside = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: palette().paperEdge, side: THREE.BackSide }));
    mesh.add(backside);
    pivot.add(mesh);
    group.add(pivot);
    flap = { pivot, mesh, open: false };
    return flap;
  }
  function openFlap(open) {
    if (!flap) return Promise.resolve();
    const from = flap.pivot.rotation.x, to = open ? FLAP_OPEN : 0;
    flap.open = open;
    return world.tween(0.6, (t) => { flap.pivot.rotation.x = from + (to - from) * t; });
  }

  // ── page turn ──
  const turnGeoFront = new THREE.PlaneGeometry(PW, PH, 40, 1);
  turnGeoFront.rotateX(-Math.PI / 2);
  turnGeoFront.translate(PW / 2, 0, 0);
  const base0 = turnGeoFront.attributes.position.array.slice();
  function bend(geo, a) {
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const d = base0[i * 3];
      const curl = 0.55 * Math.sin(a) * (d / PW);
      const phi = a + curl;
      pos.setX(i, d * Math.cos(phi));
      pos.setY(i, SURFACE + 0.08 + d * Math.sin(phi) + lift(d) * Math.cos(a) * 0.6);
      pos.setZ(i, base0[i * 3 + 2]);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }
  async function turn(direction, frontCanvas, backCanvas, seconds = 0.95) {
    const geo = turnGeoFront.clone();
    const frontTex = canvasTexture(frontCanvas);
    const backTex = canvasTexture(backCanvas);
    backTex.wrapS = THREE.RepeatWrapping; backTex.repeat.x = -1; backTex.offset.x = 1;
    const front = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: frontTex, side: THREE.FrontSide }));
    const back = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ map: backTex, side: THREE.BackSide }));
    front.castShadow = back.castShadow = true;
    group.add(front, back);
    const a0 = direction > 0 ? 0 : Math.PI, a1 = direction > 0 ? Math.PI : 0;
    bend(geo, a0);
    await world.tween(seconds, (t) => bend(geo, a0 + (a1 - a0) * t), (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2));
    group.remove(front, back);
    geo.dispose(); frontTex.dispose(); backTex.dispose(); front.material.dispose(); back.material.dispose();
    world.request();
  }

  function repaint() {
    const q = palette();
    coverMat.color.set(q.cover);
    blockMat.color.set(q.paperEdge);
  }

  return {
    group, stage, left, right, leftCanvas, rightCanvas,
    refresh(side) { (side === "left" ? leftTex : rightTex).needsUpdate = true; world.request(); },
    setFlap, openFlap, get flap() { return flap; }, turn, repaint,
    /** canvas pixel under a ray hit on a page */
    pixelOf(hit) { return { x: hit.uv.x * PAGE_W, y: (1 - hit.uv.y) * PAGE_H }; },
  };
}
