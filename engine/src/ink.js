// Line-art look for pop-up objects: a paper-toned fill, pencil hatching where the light falls off,
// and crisp outlines along creases. Glow materials carry values (energy, quantities) in the accent colour.
import * as THREE from "three";
import { LineSegments2 } from "three/examples/jsm/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/examples/jsm/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { palette } from "./tokens.js";

const lineMaterials = new Set();
const inkMaterials = new Set();
export const resolution = new THREE.Vector2(1, 1);

export function setResolution(w, h) {
  resolution.set(w, h);
  for (const m of lineMaterials) m.resolution.copy(resolution);
}

export function lineMaterial(color, width = 1.6, opts = {}) {
  const m = new LineMaterial({ color: new THREE.Color(color), linewidth: width, worldUnits: false, transparent: opts.opacity !== undefined, opacity: opts.opacity ?? 1, dashed: !!opts.dashed, dashSize: opts.dashSize ?? 0.4, gapSize: opts.gapSize ?? 0.3 });
  m.resolution.copy(resolution);
  lineMaterials.add(m);
  return m;
}

/** Paper-toned surface with screen-space hatching in the shade. */
export function inkMaterial({ color, hatch = true } = {}) {
  const p = palette();
  const mat = new THREE.MeshLambertMaterial({ color: new THREE.Color(color ?? p.fill) });
  mat.userData.uniforms = {
    uInk: { value: new THREE.Color(p.hatch) },
    uSpacing: { value: 9.0 },
    uHatch: { value: hatch ? 1 : 0 },
  };
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, mat.userData.uniforms);
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform vec3 uInk; uniform float uSpacing; uniform float uHatch;")
      .replace(
        "#include <opaque_fragment>",
        `{
          float base = max(dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114)), 1e-3);
          float lit = clamp(dot(outgoingLight, vec3(0.299, 0.587, 0.114)) / base, 0.0, 1.4);
          float shade = clamp(1.0 - lit, 0.0, 1.0);
          float s = uSpacing;
          float a = smoothstep(0.7, 0.86, abs(fract((gl_FragCoord.x + gl_FragCoord.y) / s) - 0.5) * 2.0);
          float b = smoothstep(0.7, 0.86, abs(fract((gl_FragCoord.x - gl_FragCoord.y) / s) - 0.5) * 2.0);
          float h = a * smoothstep(0.35, 0.6, shade) + b * smoothstep(0.65, 0.88, shade);
          outgoingLight = mix(outgoingLight, uInk, clamp(h, 0.0, 1.0) * 0.26 * uHatch);
        }
        #include <opaque_fragment>`,
      );
  };
  mat.customProgramCacheKey = () => "dt-ink";
  inkMaterials.add(mat);
  return mat;
}

export function glowMaterial(color, { opacity = 0.9 } = {}) {
  return new THREE.MeshBasicMaterial({ color: new THREE.Color(color ?? palette().accent), transparent: opacity < 1, opacity, toneMapped: false });
}

/** Outline creases of a geometry as screen-width lines. */
export function outlineOf(geometry, { color, width = 1.6, threshold = 28 } = {}) {
  const edges = new THREE.EdgesGeometry(geometry, threshold);
  const g = new LineSegmentsGeometry().fromEdgesGeometry(edges);
  edges.dispose();
  const line = new LineSegments2(g, lineMaterial(color ?? palette().ink, width));
  line.userData.isOutline = true;
  return line;
}

/** Mesh in ink style: fill + outline, casting and receiving shadows. */
export function inked(geometry, opts = {}) {
  const mesh = new THREE.Mesh(geometry, opts.glow ? glowMaterial(opts.glow, opts) : inkMaterial(opts));
  mesh.castShadow = opts.shadow !== false;
  mesh.receiveShadow = !opts.glow;
  if (opts.outline !== false) mesh.add(outlineOf(geometry, { color: opts.lineColor, width: opts.lineWidth }));
  return mesh;
}

export function repaintInk() {
  const p = palette();
  for (const m of inkMaterials) m.userData.uniforms.uInk.value.set(p.hatch);
}
