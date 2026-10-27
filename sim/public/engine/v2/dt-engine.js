/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Gp = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Wp = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Dd = 0, gl = 1, Ud = 2, Xp = 3, _l = 0, Ol = 1, Bl = 2, kn = 3, Cn = 0, Ue = 1, gn = 2, li = 0, Ki = 1, xl = 2, vl = 3, yl = 4, Nd = 5, bi = 100, Fd = 101, Od = 102, Bd = 103, zd = 104, kd = 200, Vd = 201, Hd = 202, Gd = 203, no = 204, io = 205, Wd = 206, Xd = 207, qd = 208, Yd = 209, $d = 210, Zd = 211, Jd = 212, Kd = 213, jd = 214, so = 0, ro = 1, ao = 2, es = 3, oo = 4, co = 5, lo = 6, ho = 7, Vr = 0, Qd = 1, tf = 2, Xn = 0, ef = 1, nf = 2, sf = 3, rf = 4, af = 5, of = 6, cf = 7, Ml = "attached", lf = "detached", Xo = 300, ui = 301, wi = 302, Er = 303, Tr = 304, Hs = 306, ns = 1e3, _n = 1001, Ar = 1002, Ne = 1003, zl = 1004, qp = 1004, Ps = 1005, Yp = 1005, be = 1006, gr = 1007, $p = 1007, An = 1008, Zp = 1008, Zn = 1009, kl = 1010, Vl = 1011, Os = 1012, qo = 1013, di = 1014, tn = 1015, Gs = 1016, Yo = 1017, $o = 1018, is = 1020, Hl = 35902, Gl = 1021, Wl = 1022, $e = 1023, Xl = 1024, ql = 1025, ji = 1026, ss = 1027, Zo = 1028, Hr = 1029, Yl = 1030, Jo = 1031, Jp = 1032, Ko = 1033, _r = 33776, xr = 33777, vr = 33778, yr = 33779, uo = 35840, fo = 35841, po = 35842, mo = 35843, go = 36196, _o = 37492, xo = 37496, vo = 37808, yo = 37809, Mo = 37810, So = 37811, bo = 37812, wo = 37813, Eo = 37814, To = 37815, Ao = 37816, Co = 37817, Ro = 37818, Po = 37819, Io = 37820, Lo = 37821, Mr = 36492, Do = 36494, Uo = 36495, $l = 36283, No = 36284, Fo = 36285, Oo = 36286, hf = 2200, uf = 2201, df = 2202, Cr = 2300, Bo = 2301, Ja = 2302, Yi = 2400, $i = 2401, Rr = 2402, jo = 2500, Zl = 2501, Kp = 0, jp = 1, Qp = 2, ff = 3200, pf = 3201, tm = 3202, em = 3203, Ti = 0, mf = 1, ai = "", Se = "srgb", os = "srgb-linear", Gr = "linear", re = "srgb", nm = 0, Gi = 7680, im = 7681, sm = 7682, rm = 7683, am = 34055, om = 34056, cm = 5386, lm = 512, hm = 513, um = 514, dm = 515, fm = 516, pm = 517, mm = 518, Sl = 519, gf = 512, _f = 513, xf = 514, Jl = 515, vf = 516, yf = 517, Mf = 518, Sf = 519, Pr = 35044, gm = 35048, _m = 35040, xm = 35045, vm = 35049, ym = 35041, Mm = 35046, Sm = 35050, bm = 35042, wm = "100", bl = "300 es", Gn = 2e3, Ir = 2001;
class Jn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t];
    if (i !== void 0) {
      const r = i.indexOf(e);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++)
        i[r].call(this, t);
      t.target = null;
    }
  }
}
const Oe = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Vh = 1234567;
const Qi = Math.PI / 180, Bs = 180 / Math.PI;
function cn() {
  const s = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Oe[s & 255] + Oe[s >> 8 & 255] + Oe[s >> 16 & 255] + Oe[s >> 24 & 255] + "-" + Oe[t & 255] + Oe[t >> 8 & 255] + "-" + Oe[t >> 16 & 15 | 64] + Oe[t >> 24 & 255] + "-" + Oe[e & 63 | 128] + Oe[e >> 8 & 255] + "-" + Oe[e >> 16 & 255] + Oe[e >> 24 & 255] + Oe[n & 255] + Oe[n >> 8 & 255] + Oe[n >> 16 & 255] + Oe[n >> 24 & 255]).toLowerCase();
}
function ge(s, t, e) {
  return Math.max(t, Math.min(e, s));
}
function Kl(s, t) {
  return (s % t + t) % t;
}
function Em(s, t, e, n, i) {
  return n + (s - t) * (i - n) / (e - t);
}
function Tm(s, t, e) {
  return s !== t ? (e - s) / (t - s) : 0;
}
function Sr(s, t, e) {
  return (1 - e) * s + e * t;
}
function Am(s, t, e, n) {
  return Sr(s, t, 1 - Math.exp(-e * n));
}
function Cm(s, t = 1) {
  return t - Math.abs(Kl(s, t * 2) - t);
}
function Rm(s, t, e) {
  return s <= t ? 0 : s >= e ? 1 : (s = (s - t) / (e - t), s * s * (3 - 2 * s));
}
function Pm(s, t, e) {
  return s <= t ? 0 : s >= e ? 1 : (s = (s - t) / (e - t), s * s * s * (s * (s * 6 - 15) + 10));
}
function Im(s, t) {
  return s + Math.floor(Math.random() * (t - s + 1));
}
function Lm(s, t) {
  return s + Math.random() * (t - s);
}
function Dm(s) {
  return s * (0.5 - Math.random());
}
function Um(s) {
  s !== void 0 && (Vh = s);
  let t = Vh += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Nm(s) {
  return s * Qi;
}
function Fm(s) {
  return s * Bs;
}
function Om(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Bm(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function zm(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function km(s, t, e, n, i) {
  const r = Math.cos, a = Math.sin, o = r(e / 2), c = a(e / 2), l = r((t + n) / 2), h = a((t + n) / 2), u = r((t - n) / 2), d = a((t - n) / 2), f = r((n - t) / 2), m = a((n - t) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, c * u, c * d, o * l);
      break;
    case "YZY":
      s.set(c * d, o * h, c * u, o * l);
      break;
    case "ZXZ":
      s.set(c * u, c * d, o * h, o * l);
      break;
    case "XZX":
      s.set(o * h, c * m, c * f, o * l);
      break;
    case "YXY":
      s.set(c * f, o * h, c * m, o * l);
      break;
    case "ZYZ":
      s.set(c * m, c * f, o * h, o * l);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Ye(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ht(s, t) {
  switch (t.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const jl = {
  DEG2RAD: Qi,
  RAD2DEG: Bs,
  generateUUID: cn,
  clamp: ge,
  euclideanModulo: Kl,
  mapLinear: Em,
  inverseLerp: Tm,
  lerp: Sr,
  damp: Am,
  pingpong: Cm,
  smoothstep: Rm,
  smootherstep: Pm,
  randInt: Im,
  randFloat: Lm,
  randFloatSpread: Dm,
  seededRandom: Um,
  degToRad: Nm,
  radToDeg: Fm,
  isPowerOfTwo: Om,
  ceilPowerOfTwo: Bm,
  floorPowerOfTwo: zm,
  setQuaternionFromProperEuler: km,
  normalize: Ht,
  denormalize: Ye
};
class nt {
  constructor(t = 0, e = 0) {
    nt.prototype.isVector2 = !0, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = t.elements;
    return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ge(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * i + t.x, this.y = r * i + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Vt {
  constructor(t, e, n, i, r, a, o, c, l) {
    Vt.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i, r, a, o, c, l);
  }
  set(t, e, n, i, r, a, o, c, l) {
    const h = this.elements;
    return h[0] = t, h[1] = i, h[2] = o, h[3] = e, h[4] = r, h[5] = c, h[6] = n, h[7] = a, h[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[4],
      e[8],
      e[1],
      e[5],
      e[9],
      e[2],
      e[6],
      e[10]
    ), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], f = n[5], m = n[8], _ = i[0], g = i[3], p = i[6], y = i[1], x = i[4], v = i[7], E = i[2], b = i[5], C = i[8];
    return r[0] = a * _ + o * y + c * E, r[3] = a * g + o * x + c * b, r[6] = a * p + o * v + c * C, r[1] = l * _ + h * y + u * E, r[4] = l * g + h * x + u * b, r[7] = l * p + h * v + u * C, r[2] = d * _ + f * y + m * E, r[5] = d * g + f * x + m * b, r[8] = d * p + f * v + m * C, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8];
    return e * a * h - e * o * l - n * r * h + n * o * c + i * r * l - i * a * c;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = h * a - o * l, d = o * c - h * r, f = l * r - a * c, m = e * u + n * d + i * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return t[0] = u * _, t[1] = (i * l - h * n) * _, t[2] = (o * n - i * a) * _, t[3] = d * _, t[4] = (h * e - i * c) * _, t[5] = (i * r - o * e) * _, t[6] = f * _, t[7] = (n * c - l * e) * _, t[8] = (a * e - n * r) * _, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, n, i, r, a, o) {
    const c = Math.cos(r), l = Math.sin(r);
    return this.set(
      n * c,
      n * l,
      -n * (c * a + l * o) + a + t,
      -i * l,
      i * c,
      -i * (-l * a + c * o) + o + e,
      0,
      0,
      1
    ), this;
  }
  //
  scale(t, e) {
    return this.premultiply(wc.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(wc.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(wc.makeTranslation(t, e)), this;
  }
  // for 2D Transforms
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(
      1,
      0,
      t.x,
      0,
      1,
      t.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      t,
      0,
      1,
      e,
      0,
      0,
      1
    ), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      n,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e) {
    return this.set(
      t,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 9; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const wc = /* @__PURE__ */ new Vt();
function bf(s) {
  for (let t = s.length - 1; t >= 0; --t)
    if (s[t] >= 65535) return !0;
  return !1;
}
const Vm = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
};
function Is(s, t) {
  return new Vm[s](t);
}
function Lr(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function wf() {
  const s = Lr("canvas");
  return s.style.display = "block", s;
}
const Hh = {};
function ur(s) {
  s in Hh || (Hh[s] = !0, console.warn(s));
}
function Hm(s, t, e) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(t, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
function Gm(s) {
  const t = s.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Wm(s) {
  const t = s.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const Kt = {
  enabled: !0,
  workingColorSpace: os,
  /**
   * Implementations of supported color spaces.
   *
   * Required:
   *	- primaries: chromaticity coordinates [ rx ry gx gy bx by ]
   *	- whitePoint: reference white [ x y ]
   *	- transfer: transfer function (pre-defined)
   *	- toXYZ: Matrix3 RGB to XYZ transform
   *	- fromXYZ: Matrix3 XYZ to RGB transform
   *	- luminanceCoefficients: RGB luminance coefficients
   *
   * Optional:
   *  - outputColorSpaceConfig: { drawingBufferColorSpace: ColorSpace }
   *  - workingColorSpaceConfig: { unpackColorSpace: ColorSpace }
   *
   * Reference:
   * - https://www.russellcottrell.com/photo/matrixCalculator.htm
   */
  spaces: {},
  convert: function(s, t, e) {
    return this.enabled === !1 || t === e || !t || !e || (this.spaces[t].transfer === re && (s.r = hi(s.r), s.g = hi(s.g), s.b = hi(s.b)), this.spaces[t].primaries !== this.spaces[e].primaries && (s.applyMatrix3(this.spaces[t].toXYZ), s.applyMatrix3(this.spaces[e].fromXYZ)), this.spaces[e].transfer === re && (s.r = Fs(s.r), s.g = Fs(s.g), s.b = Fs(s.b))), s;
  },
  fromWorkingColorSpace: function(s, t) {
    return this.convert(s, this.workingColorSpace, t);
  },
  toWorkingColorSpace: function(s, t) {
    return this.convert(s, t, this.workingColorSpace);
  },
  getPrimaries: function(s) {
    return this.spaces[s].primaries;
  },
  getTransfer: function(s) {
    return s === ai ? Gr : this.spaces[s].transfer;
  },
  getLuminanceCoefficients: function(s, t = this.workingColorSpace) {
    return s.fromArray(this.spaces[t].luminanceCoefficients);
  },
  define: function(s) {
    Object.assign(this.spaces, s);
  },
  // Internal APIs
  _getMatrix: function(s, t, e) {
    return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ);
  },
  _getDrawingBufferColorSpace: function(s) {
    return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
  },
  _getUnpackColorSpace: function(s = this.workingColorSpace) {
    return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
  }
};
function hi(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Fs(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const Gh = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], Wh = [0.2126, 0.7152, 0.0722], Xh = [0.3127, 0.329], qh = /* @__PURE__ */ new Vt().set(
  0.4123908,
  0.3575843,
  0.1804808,
  0.212639,
  0.7151687,
  0.0721923,
  0.0193308,
  0.1191948,
  0.9505322
), Yh = /* @__PURE__ */ new Vt().set(
  3.2409699,
  -1.5373832,
  -0.4986108,
  -0.9692436,
  1.8759675,
  0.0415551,
  0.0556301,
  -0.203977,
  1.0569715
);
Kt.define({
  [os]: {
    primaries: Gh,
    whitePoint: Xh,
    transfer: Gr,
    toXYZ: qh,
    fromXYZ: Yh,
    luminanceCoefficients: Wh,
    workingColorSpaceConfig: { unpackColorSpace: Se },
    outputColorSpaceConfig: { drawingBufferColorSpace: Se }
  },
  [Se]: {
    primaries: Gh,
    whitePoint: Xh,
    transfer: re,
    toXYZ: qh,
    fromXYZ: Yh,
    luminanceCoefficients: Wh,
    outputColorSpaceConfig: { drawingBufferColorSpace: Se }
  }
});
let us;
class Ef {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u")
      return t.src;
    let e;
    if (t instanceof HTMLCanvasElement)
      e = t;
    else {
      us === void 0 && (us = Lr("canvas")), us.width = t.width, us.height = t.height;
      const n = us.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = us;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Lr("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const i = n.getImageData(0, 0, t.width, t.height), r = i.data;
      for (let a = 0; a < r.length; a++)
        r[a] = hi(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(hi(e[n] / 255) * 255) : e[n] = hi(e[n]);
      return {
        data: e,
        width: t.width,
        height: t.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let Xm = 0;
class Zi {
  constructor(t = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Xm++ }), this.uuid = cn(), this.data = t, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0)
      return t.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(Ec(i[a].image)) : r.push(Ec(i[a]));
      } else
        r = Ec(i);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function Ec(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Ef.getDataURL(s) : s.data ? {
    data: Array.from(s.data),
    width: s.width,
    height: s.height,
    type: s.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let qm = 0;
class _e extends Jn {
  constructor(t = _e.DEFAULT_IMAGE, e = _e.DEFAULT_MAPPING, n = _n, i = _n, r = be, a = An, o = $e, c = Zn, l = _e.DEFAULT_ANISOTROPY, h = ai) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: qm++ }), this.uuid = cn(), this.name = "", this.source = new Zi(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new nt(0, 0), this.repeat = new nt(1, 1), this.center = new nt(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Vt(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0)
      return t.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Xo) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1)
      switch (this.wrapS) {
        case ns:
          t.x = t.x - Math.floor(t.x);
          break;
        case _n:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case Ar:
          Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case ns:
          t.y = t.y - Math.floor(t.y);
          break;
        case _n:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case Ar:
          Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
          break;
      }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
_e.DEFAULT_IMAGE = null;
_e.DEFAULT_MAPPING = Xo;
_e.DEFAULT_ANISOTROPY = 1;
class Zt {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    Zt.prototype.isVector4 = !0, this.x = t, this.y = e, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, i) {
    return this.x = t, this.y = e, this.z = n, this.w = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, i, r;
    const c = t.elements, l = c[0], h = c[4], u = c[8], d = c[1], f = c[5], m = c[9], _ = c[2], g = c[6], p = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(m - g) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(m + g) < 0.1 && Math.abs(l + f + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const x = (l + 1) / 2, v = (f + 1) / 2, E = (p + 1) / 2, b = (h + d) / 4, C = (u + _) / 4, A = (m + g) / 4;
      return x > v && x > E ? x < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(x), i = b / n, r = C / n) : v > E ? v < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(v), n = b / i, r = A / i) : E < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(E), n = C / r, i = A / r), this.set(n, i, r, e), this;
    }
    let y = Math.sqrt((g - m) * (g - m) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (g - m) / y, this.y = (u - _) / y, this.z = (d - h) / y, this.w = Math.acos((l + f + p - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Tf extends Jn {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = !0, this.width = t, this.height = e, this.depth = 1, this.scissor = new Zt(0, 0, t, e), this.scissorTest = !1, this.viewport = new Zt(0, 0, t, e);
    const i = { width: t, height: e, depth: 1 };
    n = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: be,
      depthBuffer: !0,
      stencilBuffer: !1,
      resolveDepthBuffer: !0,
      resolveStencilBuffer: !0,
      depthTexture: null,
      samples: 0,
      count: 1
    }, n);
    const r = new _e(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = !0;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let i = 0, r = this.textures.length; i < r; i++)
        this.textures[i].image.width = t, this.textures[i].image.height = e, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, i = t.textures.length; n < i; n++)
      this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Zi(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Rn extends Tf {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = !0;
  }
}
class Qo extends _e {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ne, this.minFilter = Ne, this.wrapR = _n, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ym extends Rn {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    super(t, e, i), this.isWebGLArrayRenderTarget = !0, this.depth = n, this.texture = new Qo(null, t, e, n), this.texture.isRenderTargetTexture = !0;
  }
}
class Ql extends _e {
  constructor(t = null, e = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: t, width: e, height: n, depth: i }, this.magFilter = Ne, this.minFilter = Ne, this.wrapR = _n, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class $m extends Rn {
  constructor(t = 1, e = 1, n = 1, i = {}) {
    super(t, e, i), this.isWebGL3DRenderTarget = !0, this.depth = n, this.texture = new Ql(null, t, e, n), this.texture.isRenderTargetTexture = !0;
  }
}
class Ze {
  constructor(t = 0, e = 0, n = 0, i = 1) {
    this.isQuaternion = !0, this._x = t, this._y = e, this._z = n, this._w = i;
  }
  static slerpFlat(t, e, n, i, r, a, o) {
    let c = n[i + 0], l = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[a + 0], f = r[a + 1], m = r[a + 2], _ = r[a + 3];
    if (o === 0) {
      t[e + 0] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = d, t[e + 1] = f, t[e + 2] = m, t[e + 3] = _;
      return;
    }
    if (u !== _ || c !== d || l !== f || h !== m) {
      let g = 1 - o;
      const p = c * d + l * f + h * m + u * _, y = p >= 0 ? 1 : -1, x = 1 - p * p;
      if (x > Number.EPSILON) {
        const E = Math.sqrt(x), b = Math.atan2(E, p * y);
        g = Math.sin(g * b) / E, o = Math.sin(o * b) / E;
      }
      const v = o * y;
      if (c = c * g + d * v, l = l * g + f * v, h = h * g + m * v, u = u * g + _ * v, g === 1 - o) {
        const E = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= E, l *= E, h *= E, u *= E;
      }
    }
    t[e] = c, t[e + 1] = l, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, i, r, a) {
    const o = n[i], c = n[i + 1], l = n[i + 2], h = n[i + 3], u = r[a], d = r[a + 1], f = r[a + 2], m = r[a + 3];
    return t[e] = o * m + h * u + c * f - l * d, t[e + 1] = c * m + h * d + l * u - o * f, t[e + 2] = l * m + h * f + o * d - c * u, t[e + 3] = h * m - o * u - c * d - l * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, n, i) {
    return this._x = t, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = !0) {
    const n = t._x, i = t._y, r = t._z, a = t._order, o = Math.cos, c = Math.sin, l = o(n / 2), h = o(i / 2), u = o(r / 2), d = c(n / 2), f = c(i / 2), m = c(r / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "YXZ":
        this._x = d * h * u + l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "ZXY":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "ZYX":
        this._x = d * h * u - l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u + d * f * m;
        break;
      case "YZX":
        this._x = d * h * u + l * f * m, this._y = l * f * u + d * h * m, this._z = l * h * m - d * f * u, this._w = l * h * u - d * f * m;
        break;
      case "XZY":
        this._x = d * h * u - l * f * m, this._y = l * f * u - d * h * m, this._z = l * h * m + d * f * u, this._w = l * h * u + d * f * m;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, i = Math.sin(n);
    return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], i = e[4], r = e[8], a = e[1], o = e[5], c = e[9], l = e[2], h = e[6], u = e[10], d = n + o + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - c) * f, this._y = (r - l) * f, this._z = (a - i) * f;
    } else if (n > o && n > u) {
      const f = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - c) / f, this._x = 0.25 * f, this._y = (i + a) / f, this._z = (r + l) / f;
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - l) / f, this._x = (i + a) / f, this._y = 0.25 * f, this._z = (c + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / f, this._x = (r + l) / f, this._y = (c + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(ge(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const i = Math.min(1, e / n);
    return this.slerp(t, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x, i = t._y, r = t._z, a = t._w, o = e._x, c = e._y, l = e._z, h = e._w;
    return this._x = n * h + a * o + i * l - r * c, this._y = i * h + a * c + r * o - n * l, this._z = r * h + a * l + n * c - i * o, this._w = a * h - n * o - i * c - r * l, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * t._w + n * t._x + i * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1)
      return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * a + e * this._w, this._x = f * n + e * this._x, this._y = f * i + e * this._y, this._z = f * r + e * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, o), u = Math.sin((1 - e) * h) / l, d = Math.sin(e * h) / l;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(
      i * Math.sin(t),
      i * Math.cos(t),
      r * Math.sin(e),
      r * Math.cos(e)
    );
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(t = 0, e = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion($h.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion($h.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, i = this.z, r = t.x, a = t.y, o = t.z, c = t.w, l = 2 * (a * i - o * n), h = 2 * (o * e - r * i), u = 2 * (r * n - a * e);
    return this.x = e + c * l + a * u - o * h, this.y = n + c * h + o * l - r * u, this.z = i + c * u + r * h - a * l, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, i = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, i = t.y, r = t.z, a = e.x, o = e.y, c = e.z;
    return this.x = i * c - r * o, this.y = r * a - n * c, this.z = n * o - i * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return Tc.copy(this).projectOnVector(t), this.sub(Tc);
  }
  reflect(t) {
    return this.sub(Tc.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ge(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, i = this.z - t.z;
    return e * e + n * n + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const i = Math.sin(e) * t;
    return this.x = i * Math.sin(n), this.y = Math.cos(e) * t, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Tc = /* @__PURE__ */ new R(), $h = /* @__PURE__ */ new Ze();
class we {
  constructor(t = new R(1 / 0, 1 / 0, 1 / 0), e = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(Sn.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(Sn.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Sn.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  setFromObject(t, e = !1) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          t.isMesh === !0 ? t.getVertexPosition(a, Sn) : Sn.fromBufferAttribute(r, a), Sn.applyMatrix4(t.matrixWorld), this.expandByPoint(Sn);
      else
        t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), ea.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), ea.copy(n.boundingBox)), ea.applyMatrix4(t.matrixWorld), this.union(ea);
    }
    const i = t.children;
    for (let r = 0, a = i.length; r < a; r++)
      this.expandByObject(i[r], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Sn), Sn.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Js), na.subVectors(this.max, Js), ds.subVectors(t.a, Js), fs.subVectors(t.b, Js), ps.subVectors(t.c, Js), gi.subVectors(fs, ds), _i.subVectors(ps, fs), Pi.subVectors(ds, ps);
    let e = [
      0,
      -gi.z,
      gi.y,
      0,
      -_i.z,
      _i.y,
      0,
      -Pi.z,
      Pi.y,
      gi.z,
      0,
      -gi.x,
      _i.z,
      0,
      -_i.x,
      Pi.z,
      0,
      -Pi.x,
      -gi.y,
      gi.x,
      0,
      -_i.y,
      _i.x,
      0,
      -Pi.y,
      Pi.x,
      0
    ];
    return !Ac(e, ds, fs, ps, na) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ac(e, ds, fs, ps, na)) ? !1 : (ia.crossVectors(gi, _i), e = [ia.x, ia.y, ia.z], Ac(e, ds, fs, ps, na));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Sn).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Sn).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (Qn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), Qn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), Qn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), Qn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), Qn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), Qn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), Qn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), Qn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(Qn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Qn = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], Sn = /* @__PURE__ */ new R(), ea = /* @__PURE__ */ new we(), ds = /* @__PURE__ */ new R(), fs = /* @__PURE__ */ new R(), ps = /* @__PURE__ */ new R(), gi = /* @__PURE__ */ new R(), _i = /* @__PURE__ */ new R(), Pi = /* @__PURE__ */ new R(), Js = /* @__PURE__ */ new R(), na = /* @__PURE__ */ new R(), ia = /* @__PURE__ */ new R(), Ii = /* @__PURE__ */ new R();
function Ac(s, t, e, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Ii.fromArray(s, r);
    const o = i.x * Math.abs(Ii.x) + i.y * Math.abs(Ii.y) + i.z * Math.abs(Ii.z), c = t.dot(Ii), l = e.dot(Ii), h = n.dot(Ii);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
      return !1;
  }
  return !0;
}
const Zm = /* @__PURE__ */ new we(), Ks = /* @__PURE__ */ new R(), Cc = /* @__PURE__ */ new R();
class Pe {
  constructor(t = new R(), e = -1) {
    this.isSphere = !0, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Zm.setFromPoints(t).getCenter(n);
    let i = 0;
    for (let r = 0, a = t.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty())
      return this.center.copy(t), this.radius = 0, this;
    Ks.subVectors(t, this.center);
    const e = Ks.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Ks, i / n), this.radius += i;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === !0 ? this.radius = Math.max(this.radius, t.radius) : (Cc.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Ks.copy(t.center).add(Cc)), this.expandByPoint(Ks.copy(t.center).sub(Cc))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ti = /* @__PURE__ */ new R(), Rc = /* @__PURE__ */ new R(), sa = /* @__PURE__ */ new R(), xi = /* @__PURE__ */ new R(), Pc = /* @__PURE__ */ new R(), ra = /* @__PURE__ */ new R(), Ic = /* @__PURE__ */ new R();
class Ws {
  constructor(t = new R(), e = new R(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, ti)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = ti.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (ti.copy(this.origin).addScaledVector(this.direction, e), ti.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, i) {
    Rc.copy(t).add(e).multiplyScalar(0.5), sa.copy(e).sub(t).normalize(), xi.copy(this.origin).sub(Rc);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(sa), o = xi.dot(this.direction), c = -xi.dot(sa), l = xi.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, f, m;
    if (h > 0)
      if (u = a * c - o, d = a * o - c, m = r * h, u >= 0)
        if (d >= -m)
          if (d <= m) {
            const _ = 1 / h;
            u *= _, d *= _, f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l;
          } else
            d = r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
        else
          d = -r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
      else
        d <= -m ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l) : d <= m ? (u = 0, d = Math.min(Math.max(-r, -c), r), f = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -c), r), f = -u * u + d * (d + 2 * c) + l);
    else
      d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), f = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Rc).addScaledVector(sa, d), f;
  }
  intersectSphere(t, e) {
    ti.subVectors(t.center, this.origin);
    const n = ti.dot(this.direction), i = ti.dot(ti) - n * n, r = t.radius * t.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, c = n + a;
    return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0)
      return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, i, r, a, o, c;
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (t.min.x - d.x) * l, i = (t.max.x - d.x) * l) : (n = (t.max.x - d.x) * l, i = (t.min.x - d.x) * l), h >= 0 ? (r = (t.min.y - d.y) * h, a = (t.max.y - d.y) * h) : (r = (t.max.y - d.y) * h, a = (t.min.y - d.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (t.min.z - d.z) * u, c = (t.max.z - d.z) * u) : (o = (t.max.z - d.z) * u, c = (t.min.z - d.z) * u), n > c || o > i) || ((o > n || n !== n) && (n = o), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, ti) !== null;
  }
  intersectTriangle(t, e, n, i, r) {
    Pc.subVectors(e, t), ra.subVectors(n, t), Ic.crossVectors(Pc, ra);
    let a = this.direction.dot(Ic), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    xi.subVectors(this.origin, t);
    const c = o * this.direction.dot(ra.crossVectors(xi, ra));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(Pc.cross(xi));
    if (l < 0 || c + l > a)
      return null;
    const h = -o * xi.dot(Ic);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ft {
  constructor(t, e, n, i, r, a, o, c, l, h, u, d, f, m, _, g) {
    Ft.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i, r, a, o, c, l, h, u, d, f, m, _, g);
  }
  set(t, e, n, i, r, a, o, c, l, h, u, d, f, m, _, g) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = i, p[1] = r, p[5] = a, p[9] = o, p[13] = c, p[2] = l, p[6] = h, p[10] = u, p[14] = d, p[3] = f, p[7] = m, p[11] = _, p[15] = g, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new Ft().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(
      e[0],
      e[3],
      e[6],
      0,
      e[1],
      e[4],
      e[7],
      0,
      e[2],
      e[5],
      e[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(
      t.x,
      e.x,
      n.x,
      0,
      t.y,
      e.y,
      n.y,
      0,
      t.z,
      e.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, i = 1 / ms.setFromMatrixColumn(t, 0).length(), r = 1 / ms.setFromMatrixColumn(t, 1).length(), a = 1 / ms.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), c = Math.cos(i), l = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const d = a * h, f = a * u, m = o * h, _ = o * u;
      e[0] = c * h, e[4] = -c * u, e[8] = l, e[1] = f + m * l, e[5] = d - _ * l, e[9] = -o * c, e[2] = _ - d * l, e[6] = m + f * l, e[10] = a * c;
    } else if (t.order === "YXZ") {
      const d = c * h, f = c * u, m = l * h, _ = l * u;
      e[0] = d + _ * o, e[4] = m * o - f, e[8] = a * l, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = f * o - m, e[6] = _ + d * o, e[10] = a * c;
    } else if (t.order === "ZXY") {
      const d = c * h, f = c * u, m = l * h, _ = l * u;
      e[0] = d - _ * o, e[4] = -a * u, e[8] = m + f * o, e[1] = f + m * o, e[5] = a * h, e[9] = _ - d * o, e[2] = -a * l, e[6] = o, e[10] = a * c;
    } else if (t.order === "ZYX") {
      const d = a * h, f = a * u, m = o * h, _ = o * u;
      e[0] = c * h, e[4] = m * l - f, e[8] = d * l + _, e[1] = c * u, e[5] = _ * l + d, e[9] = f * l - m, e[2] = -l, e[6] = o * c, e[10] = a * c;
    } else if (t.order === "YZX") {
      const d = a * c, f = a * l, m = o * c, _ = o * l;
      e[0] = c * h, e[4] = _ - d * u, e[8] = m * u + f, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -l * h, e[6] = f * u + m, e[10] = d - _ * u;
    } else if (t.order === "XZY") {
      const d = a * c, f = a * l, m = o * c, _ = o * l;
      e[0] = c * h, e[4] = -u, e[8] = l * h, e[1] = d * u + _, e[5] = a * h, e[9] = f * u - m, e[2] = m * u - f, e[6] = o * h, e[10] = _ * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Jm, t, Km);
  }
  lookAt(t, e, n) {
    const i = this.elements;
    return sn.subVectors(t, e), sn.lengthSq() === 0 && (sn.z = 1), sn.normalize(), vi.crossVectors(n, sn), vi.lengthSq() === 0 && (Math.abs(n.z) === 1 ? sn.x += 1e-4 : sn.z += 1e-4, sn.normalize(), vi.crossVectors(n, sn)), vi.normalize(), aa.crossVectors(sn, vi), i[0] = vi.x, i[4] = aa.x, i[8] = sn.x, i[1] = vi.y, i[5] = aa.y, i[9] = sn.y, i[2] = vi.z, i[6] = aa.z, i[10] = sn.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, i = e.elements, r = this.elements, a = n[0], o = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], f = n[13], m = n[2], _ = n[6], g = n[10], p = n[14], y = n[3], x = n[7], v = n[11], E = n[15], b = i[0], C = i[4], A = i[8], S = i[12], M = i[1], I = i[5], O = i[9], N = i[13], U = i[2], q = i[6], V = i[10], j = i[14], G = i[3], st = i[7], dt = i[11], Z = i[15];
    return r[0] = a * b + o * M + c * U + l * G, r[4] = a * C + o * I + c * q + l * st, r[8] = a * A + o * O + c * V + l * dt, r[12] = a * S + o * N + c * j + l * Z, r[1] = h * b + u * M + d * U + f * G, r[5] = h * C + u * I + d * q + f * st, r[9] = h * A + u * O + d * V + f * dt, r[13] = h * S + u * N + d * j + f * Z, r[2] = m * b + _ * M + g * U + p * G, r[6] = m * C + _ * I + g * q + p * st, r[10] = m * A + _ * O + g * V + p * dt, r[14] = m * S + _ * N + g * j + p * Z, r[3] = y * b + x * M + v * U + E * G, r[7] = y * C + x * I + v * q + E * st, r[11] = y * A + x * O + v * V + E * dt, r[15] = y * S + x * N + v * j + E * Z, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], i = t[8], r = t[12], a = t[1], o = t[5], c = t[9], l = t[13], h = t[2], u = t[6], d = t[10], f = t[14], m = t[3], _ = t[7], g = t[11], p = t[15];
    return m * (+r * c * u - i * l * u - r * o * d + n * l * d + i * o * f - n * c * f) + _ * (+e * c * f - e * l * d + r * a * d - i * a * f + i * l * h - r * c * h) + g * (+e * l * u - e * o * f - r * a * u + n * a * f + r * o * h - n * l * h) + p * (-i * o * h - e * c * u + e * o * d + i * a * u - n * a * d + n * c * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const i = this.elements;
    return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], i = t[2], r = t[3], a = t[4], o = t[5], c = t[6], l = t[7], h = t[8], u = t[9], d = t[10], f = t[11], m = t[12], _ = t[13], g = t[14], p = t[15], y = u * g * l - _ * d * l + _ * c * f - o * g * f - u * c * p + o * d * p, x = m * d * l - h * g * l - m * c * f + a * g * f + h * c * p - a * d * p, v = h * _ * l - m * u * l + m * o * f - a * _ * f - h * o * p + a * u * p, E = m * u * c - h * _ * c - m * o * d + a * _ * d + h * o * g - a * u * g, b = e * y + n * x + i * v + r * E;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / b;
    return t[0] = y * C, t[1] = (_ * d * r - u * g * r - _ * i * f + n * g * f + u * i * p - n * d * p) * C, t[2] = (o * g * r - _ * c * r + _ * i * l - n * g * l - o * i * p + n * c * p) * C, t[3] = (u * c * r - o * d * r - u * i * l + n * d * l + o * i * f - n * c * f) * C, t[4] = x * C, t[5] = (h * g * r - m * d * r + m * i * f - e * g * f - h * i * p + e * d * p) * C, t[6] = (m * c * r - a * g * r - m * i * l + e * g * l + a * i * p - e * c * p) * C, t[7] = (a * d * r - h * c * r + h * i * l - e * d * l - a * i * f + e * c * f) * C, t[8] = v * C, t[9] = (m * u * r - h * _ * r - m * n * f + e * _ * f + h * n * p - e * u * p) * C, t[10] = (a * _ * r - m * o * r + m * n * l - e * _ * l - a * n * p + e * o * p) * C, t[11] = (h * o * r - a * u * r - h * n * l + e * u * l + a * n * f - e * o * f) * C, t[12] = E * C, t[13] = (h * _ * i - m * u * i + m * n * d - e * _ * d - h * n * g + e * u * g) * C, t[14] = (m * o * i - a * _ * i - m * n * c + e * _ * c + a * n * g - e * o * g) * C, t[15] = (a * u * i - h * o * i + h * n * c - e * u * c - a * n * d + e * o * d) * C, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, i = t.y, r = t.z;
    return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, i));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(
      1,
      0,
      0,
      t.x,
      0,
      1,
      0,
      t.y,
      0,
      0,
      1,
      t.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      t,
      0,
      1,
      0,
      e,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      e,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(
      e,
      -n,
      0,
      0,
      n,
      e,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), i = Math.sin(e), r = 1 - n, a = t.x, o = t.y, c = t.z, l = r * a, h = r * o;
    return this.set(
      l * a + n,
      l * o - i * c,
      l * c + i * o,
      0,
      l * o + i * c,
      h * o + n,
      h * c - i * a,
      0,
      l * c - i * o,
      h * c + i * a,
      r * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(t, e, n) {
    return this.set(
      t,
      0,
      0,
      0,
      0,
      e,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(t, e, n, i, r, a) {
    return this.set(
      1,
      n,
      r,
      0,
      t,
      1,
      a,
      0,
      e,
      i,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(t, e, n) {
    const i = this.elements, r = e._x, a = e._y, o = e._z, c = e._w, l = r + r, h = a + a, u = o + o, d = r * l, f = r * h, m = r * u, _ = a * h, g = a * u, p = o * u, y = c * l, x = c * h, v = c * u, E = n.x, b = n.y, C = n.z;
    return i[0] = (1 - (_ + p)) * E, i[1] = (f + v) * E, i[2] = (m - x) * E, i[3] = 0, i[4] = (f - v) * b, i[5] = (1 - (d + p)) * b, i[6] = (g + y) * b, i[7] = 0, i[8] = (m + x) * C, i[9] = (g - y) * C, i[10] = (1 - (d + _)) * C, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
  }
  decompose(t, e, n) {
    const i = this.elements;
    let r = ms.set(i[0], i[1], i[2]).length();
    const a = ms.set(i[4], i[5], i[6]).length(), o = ms.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), t.x = i[12], t.y = i[13], t.z = i[14], bn.copy(this);
    const l = 1 / r, h = 1 / a, u = 1 / o;
    return bn.elements[0] *= l, bn.elements[1] *= l, bn.elements[2] *= l, bn.elements[4] *= h, bn.elements[5] *= h, bn.elements[6] *= h, bn.elements[8] *= u, bn.elements[9] *= u, bn.elements[10] *= u, e.setFromRotationMatrix(bn), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, i, r, a, o = Gn) {
    const c = this.elements, l = 2 * r / (e - t), h = 2 * r / (n - i), u = (e + t) / (e - t), d = (n + i) / (n - i);
    let f, m;
    if (o === Gn)
      f = -(a + r) / (a - r), m = -2 * a * r / (a - r);
    else if (o === Ir)
      f = -a / (a - r), m = -a * r / (a - r);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = u, c[12] = 0, c[1] = 0, c[5] = h, c[9] = d, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = f, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(t, e, n, i, r, a, o = Gn) {
    const c = this.elements, l = 1 / (e - t), h = 1 / (n - i), u = 1 / (a - r), d = (e + t) * l, f = (n + i) * h;
    let m, _;
    if (o === Gn)
      m = (a + r) * u, _ = -2 * u;
    else if (o === Ir)
      m = r * u, _ = -1 * u;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -d, c[1] = 0, c[5] = 2 * h, c[9] = 0, c[13] = -f, c[2] = 0, c[6] = 0, c[10] = _, c[14] = -m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let i = 0; i < 16; i++)
      if (e[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const ms = /* @__PURE__ */ new R(), bn = /* @__PURE__ */ new Ft(), Jm = /* @__PURE__ */ new R(0, 0, 0), Km = /* @__PURE__ */ new R(1, 1, 1), vi = /* @__PURE__ */ new R(), aa = /* @__PURE__ */ new R(), sn = /* @__PURE__ */ new R(), Zh = /* @__PURE__ */ new Ft(), Jh = /* @__PURE__ */ new Ze();
class hn {
  constructor(t = 0, e = 0, n = 0, i = hn.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = t, this._y = e, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, n, i = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const i = t.elements, r = i[0], a = i[4], o = i[8], c = i[1], l = i[5], h = i[9], u = i[2], d = i[6], f = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(ge(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ge(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, f), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ge(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, r));
        break;
      case "ZYX":
        this._y = Math.asin(-ge(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(c, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(ge(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, f));
        break;
      case "XZY":
        this._z = Math.asin(-ge(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return Zh.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Zh, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Jh.setFromEuler(this), this.setFromQuaternion(Jh, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
hn.DEFAULT_ORDER = "XYZ";
class tc {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let jm = 0;
const Kh = /* @__PURE__ */ new R(), gs = /* @__PURE__ */ new Ze(), ei = /* @__PURE__ */ new Ft(), oa = /* @__PURE__ */ new R(), js = /* @__PURE__ */ new R(), Qm = /* @__PURE__ */ new R(), tg = /* @__PURE__ */ new Ze(), jh = /* @__PURE__ */ new R(1, 0, 0), Qh = /* @__PURE__ */ new R(0, 1, 0), tu = /* @__PURE__ */ new R(0, 0, 1), eu = { type: "added" }, eg = { type: "removed" }, _s = { type: "childadded", child: null }, Lc = { type: "childremoved", child: null };
class Qt extends Jn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: jm++ }), this.uuid = cn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Qt.DEFAULT_UP.clone();
    const t = new R(), e = new hn(), n = new Ze(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      modelViewMatrix: {
        value: new Ft()
      },
      normalMatrix: {
        value: new Vt()
      }
    }), this.matrix = new Ft(), this.matrixWorld = new Ft(), this.matrixAutoUpdate = Qt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new tc(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return gs.setFromAxisAngle(t, e), this.quaternion.multiply(gs), this;
  }
  rotateOnWorldAxis(t, e) {
    return gs.setFromAxisAngle(t, e), this.quaternion.premultiply(gs), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(jh, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Qh, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(tu, t);
  }
  translateOnAxis(t, e) {
    return Kh.copy(t).applyQuaternion(this.quaternion), this.position.add(Kh.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(jh, t);
  }
  translateY(t) {
    return this.translateOnAxis(Qh, t);
  }
  translateZ(t) {
    return this.translateOnAxis(tu, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(!0, !1), t.applyMatrix4(ei.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? oa.copy(t) : oa.set(t, e, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1), js.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? ei.lookAt(js, oa, this.up) : ei.lookAt(oa, js, this.up), this.quaternion.setFromRotationMatrix(ei), i && (ei.extractRotation(i.matrixWorld), gs.setFromRotationMatrix(ei), this.quaternion.premultiply(gs.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(eu), _s.child = t, this.dispatchEvent(_s), _s.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(eg), Lc.child = t, this.dispatchEvent(Lc), Lc.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(!0, !1), ei.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(!0, !1), ei.multiply(t.parent.matrixWorld)), t.applyMatrix4(ei), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(eu), _s.child = t, this.dispatchEvent(_s), _s.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(js, t, Qm), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(js, tg, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
    const e = this.children;
    for (let n = 0, i = e.length; n < i; n++)
      e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === !0) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++)
        i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, n.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (i.boundingSphere = {
      center: i.boundingSphere.center.toArray(),
      radius: i.boundingSphere.radius
    }), this.boundingBox !== null && (i.boundingBox = {
      min: i.boundingBox.min.toArray(),
      max: i.boundingBox.max.toArray()
    }));
    function r(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            r(t.shapes, u);
          }
        else
          r(t.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(r(t.materials, this.material[c]));
        i.material = o;
      } else
        i.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        i.animations.push(r(t.animations, c));
      }
    }
    if (e) {
      const o = a(t.geometries), c = a(t.materials), l = a(t.textures), h = a(t.images), u = a(t.shapes), d = a(t.skeletons), f = a(t.animations), m = a(t.nodes);
      o.length > 0 && (n.geometries = o), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), f.length > 0 && (n.animations = f), m.length > 0 && (n.nodes = m);
    }
    return n.object = i, n;
    function a(o) {
      const c = [];
      for (const l in o) {
        const h = o[l];
        delete h.metadata, c.push(h);
      }
      return c;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === !0)
      for (let n = 0; n < t.children.length; n++) {
        const i = t.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Qt.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
Qt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const wn = /* @__PURE__ */ new R(), ni = /* @__PURE__ */ new R(), Dc = /* @__PURE__ */ new R(), ii = /* @__PURE__ */ new R(), xs = /* @__PURE__ */ new R(), vs = /* @__PURE__ */ new R(), nu = /* @__PURE__ */ new R(), Uc = /* @__PURE__ */ new R(), Nc = /* @__PURE__ */ new R(), Fc = /* @__PURE__ */ new R(), Oc = /* @__PURE__ */ new Zt(), Bc = /* @__PURE__ */ new Zt(), zc = /* @__PURE__ */ new Zt();
class Qe {
  constructor(t = new R(), e = new R(), n = new R()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, i) {
    i.subVectors(n, e), wn.subVectors(t, e), i.cross(wn);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(t, e, n, i, r) {
    wn.subVectors(i, e), ni.subVectors(n, e), Dc.subVectors(t, e);
    const a = wn.dot(wn), o = wn.dot(ni), c = wn.dot(Dc), l = ni.dot(ni), h = ni.dot(Dc), u = a * l - o * o;
    if (u === 0)
      return r.set(0, 0, 0), null;
    const d = 1 / u, f = (l * c - o * h) * d, m = (a * h - o * c) * d;
    return r.set(1 - f - m, m, f);
  }
  static containsPoint(t, e, n, i) {
    return this.getBarycoord(t, e, n, i, ii) === null ? !1 : ii.x >= 0 && ii.y >= 0 && ii.x + ii.y <= 1;
  }
  static getInterpolation(t, e, n, i, r, a, o, c) {
    return this.getBarycoord(t, e, n, i, ii) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(r, ii.x), c.addScaledVector(a, ii.y), c.addScaledVector(o, ii.z), c);
  }
  static getInterpolatedAttribute(t, e, n, i, r, a) {
    return Oc.setScalar(0), Bc.setScalar(0), zc.setScalar(0), Oc.fromBufferAttribute(t, e), Bc.fromBufferAttribute(t, n), zc.fromBufferAttribute(t, i), a.setScalar(0), a.addScaledVector(Oc, r.x), a.addScaledVector(Bc, r.y), a.addScaledVector(zc, r.z), a;
  }
  static isFrontFacing(t, e, n, i) {
    return wn.subVectors(n, e), ni.subVectors(t, e), wn.cross(ni).dot(i) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, i) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[i]), this;
  }
  setFromAttributeAndIndices(t, e, n, i) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return wn.subVectors(this.c, this.b), ni.subVectors(this.a, this.b), wn.cross(ni).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Qe.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Qe.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, i, r) {
    return Qe.getInterpolation(t, this.a, this.b, this.c, e, n, i, r);
  }
  containsPoint(t) {
    return Qe.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Qe.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    xs.subVectors(i, n), vs.subVectors(r, n), Uc.subVectors(t, n);
    const c = xs.dot(Uc), l = vs.dot(Uc);
    if (c <= 0 && l <= 0)
      return e.copy(n);
    Nc.subVectors(t, i);
    const h = xs.dot(Nc), u = vs.dot(Nc);
    if (h >= 0 && u <= h)
      return e.copy(i);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return a = c / (c - h), e.copy(n).addScaledVector(xs, a);
    Fc.subVectors(t, r);
    const f = xs.dot(Fc), m = vs.dot(Fc);
    if (m >= 0 && f <= m)
      return e.copy(r);
    const _ = f * l - c * m;
    if (_ <= 0 && l >= 0 && m <= 0)
      return o = l / (l - m), e.copy(n).addScaledVector(vs, o);
    const g = h * m - f * u;
    if (g <= 0 && u - h >= 0 && f - m >= 0)
      return nu.subVectors(r, i), o = (u - h) / (u - h + (f - m)), e.copy(i).addScaledVector(nu, o);
    const p = 1 / (g + _ + d);
    return a = _ * p, o = d * p, e.copy(n).addScaledVector(xs, a).addScaledVector(vs, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Af = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, yi = { h: 0, s: 0, l: 0 }, ca = { h: 0, s: 0, l: 0 };
function kc(s, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? s + (t - s) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? s + (t - s) * 6 * (2 / 3 - e) : s;
}
class gt {
  constructor(t, e, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const i = t;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else
      this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = Se) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Kt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, i = Kt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Kt.toWorkingColorSpace(this, i), this;
  }
  setHSL(t, e, n, i = Kt.workingColorSpace) {
    if (t = Kl(t, 1), e = ge(e, 0, 1), n = ge(n, 0, 1), e === 0)
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = kc(a, r, t + 1 / 3), this.g = kc(a, r, t), this.b = kc(a, r, t - 1 / 3);
    }
    return Kt.toWorkingColorSpace(this, i), this;
  }
  setStyle(t, e = Se) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(255, parseInt(r[1], 10)) / 255,
              Math.min(255, parseInt(r[2], 10)) / 255,
              Math.min(255, parseInt(r[3], 10)) / 255,
              e
            );
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setRGB(
              Math.min(100, parseInt(r[1], 10)) / 100,
              Math.min(100, parseInt(r[2], 10)) / 100,
              Math.min(100, parseInt(r[3], 10)) / 100,
              e
            );
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return n(r[4]), this.setHSL(
              parseFloat(r[1]) / 360,
              parseFloat(r[2]) / 100,
              parseFloat(r[3]) / 100,
              e
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = i[1], a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          e
        );
      if (a === 6)
        return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0)
      return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Se) {
    const n = Af[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = hi(t.r), this.g = hi(t.g), this.b = hi(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = Fs(t.r), this.g = Fs(t.g), this.b = Fs(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = Se) {
    return Kt.fromWorkingColorSpace(Be.copy(this), t), Math.round(ge(Be.r * 255, 0, 255)) * 65536 + Math.round(ge(Be.g * 255, 0, 255)) * 256 + Math.round(ge(Be.b * 255, 0, 255));
  }
  getHexString(t = Se) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Kt.workingColorSpace) {
    Kt.fromWorkingColorSpace(Be.copy(this), e);
    const n = Be.r, i = Be.g, r = Be.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let c, l;
    const h = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const u = a - o;
      switch (l = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          c = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          c = (r - n) / u + 2;
          break;
        case r:
          c = (n - i) / u + 4;
          break;
      }
      c /= 6;
    }
    return t.h = c, t.s = l, t.l = h, t;
  }
  getRGB(t, e = Kt.workingColorSpace) {
    return Kt.fromWorkingColorSpace(Be.copy(this), e), t.r = Be.r, t.g = Be.g, t.b = Be.b, t;
  }
  getStyle(t = Se) {
    Kt.fromWorkingColorSpace(Be.copy(this), t);
    const e = Be.r, n = Be.g, i = Be.b;
    return t !== Se ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(yi), this.setHSL(yi.h + t, yi.s + e, yi.l + n);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(yi), t.getHSL(ca);
    const n = Sr(yi.h, ca.h, e), i = Sr(yi.s, ca.s, e), r = Sr(yi.l, ca.l, e);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, i = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Be = /* @__PURE__ */ new gt();
gt.NAMES = Af;
let ng = 0;
class ke extends Jn {
  static get type() {
    return "Material";
  }
  get type() {
    return this.constructor.type;
  }
  set type(t) {
  }
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: ng++ }), this.uuid = cn(), this.name = "", this.blending = Ki, this.side = Cn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = no, this.blendDst = io, this.blendEquation = bi, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new gt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = es, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = Sl, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gi, this.stencilZFail = Gi, this.stencilZPass = Gi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  // onBeforeRender and onBeforeCompile only supported in WebGLRenderer
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const i = this[e];
        if (i === void 0) {
          console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n;
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ki && (n.blending = this.blending), this.side !== Cn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== no && (n.blendSrc = this.blendSrc), this.blendDst !== io && (n.blendDst = this.blendDst), this.blendEquation !== bi && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== es && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Sl && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Gi && (n.stencilFail = this.stencilFail), this.stencilZFail !== Gi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Gi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const c = r[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (e) {
      const r = i(t.textures), a = i(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const i = e.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r)
        n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class xn extends ke {
  static get type() {
    return "MeshBasicMaterial";
  }
  constructor(t) {
    super(), this.isMeshBasicMaterial = !0, this.color = new gt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.combine = Vr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const oi = /* @__PURE__ */ ig();
function ig() {
  const s = new ArrayBuffer(4), t = new Float32Array(s), e = new Uint32Array(s), n = new Uint32Array(512), i = new Uint32Array(512);
  for (let c = 0; c < 256; ++c) {
    const l = c - 127;
    l < -27 ? (n[c] = 0, n[c | 256] = 32768, i[c] = 24, i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14, n[c | 256] = 1024 >> -l - 14 | 32768, i[c] = -l - 1, i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10, n[c | 256] = l + 15 << 10 | 32768, i[c] = 13, i[c | 256] = 13) : l < 128 ? (n[c] = 31744, n[c | 256] = 64512, i[c] = 24, i[c | 256] = 24) : (n[c] = 31744, n[c | 256] = 64512, i[c] = 13, i[c | 256] = 13);
  }
  const r = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
  for (let c = 1; c < 1024; ++c) {
    let l = c << 13, h = 0;
    for (; (l & 8388608) === 0; )
      l <<= 1, h -= 8388608;
    l &= -8388609, h += 947912704, r[c] = l | h;
  }
  for (let c = 1024; c < 2048; ++c)
    r[c] = 939524096 + (c - 1024 << 13);
  for (let c = 1; c < 31; ++c)
    a[c] = c << 23;
  a[31] = 1199570944, a[32] = 2147483648;
  for (let c = 33; c < 63; ++c)
    a[c] = 2147483648 + (c - 32 << 23);
  a[63] = 3347054592;
  for (let c = 1; c < 64; ++c)
    c !== 32 && (o[c] = 1024);
  return {
    floatView: t,
    uint32View: e,
    baseTable: n,
    shiftTable: i,
    mantissaTable: r,
    exponentTable: a,
    offsetTable: o
  };
}
function je(s) {
  Math.abs(s) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."), s = ge(s, -65504, 65504), oi.floatView[0] = s;
  const t = oi.uint32View[0], e = t >> 23 & 511;
  return oi.baseTable[e] + ((t & 8388607) >> oi.shiftTable[e]);
}
function dr(s) {
  const t = s >> 10;
  return oi.uint32View[0] = oi.mantissaTable[oi.offsetTable[t] + (s & 1023)] + oi.exponentTable[t], oi.floatView[0];
}
const sg = {
  toHalfFloat: je,
  fromHalfFloat: dr
}, ve = /* @__PURE__ */ new R(), la = /* @__PURE__ */ new nt();
class ae {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Pr, this.updateRanges = [], this.gpuType = tn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        la.fromBufferAttribute(this, e), la.applyMatrix3(t), this.setXY(e, la.x, la.y);
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        ve.fromBufferAttribute(this, e), ve.applyMatrix3(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ve.fromBufferAttribute(this, e), ve.applyMatrix4(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ve.fromBufferAttribute(this, e), ve.applyNormalMatrix(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      ve.fromBufferAttribute(this, e), ve.transformDirection(t), this.setXYZ(e, ve.x, ve.y, ve.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = Ye(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Ht(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array), i = Ht(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t *= this.itemSize, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array), i = Ht(i, this.array), r = Ht(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = i, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (t.name = this.name), this.usage !== Pr && (t.usage = this.usage), t;
  }
}
class rg extends ae {
  constructor(t, e, n) {
    super(new Int8Array(t), e, n);
  }
}
class ag extends ae {
  constructor(t, e, n) {
    super(new Uint8Array(t), e, n);
  }
}
class og extends ae {
  constructor(t, e, n) {
    super(new Uint8ClampedArray(t), e, n);
  }
}
class cg extends ae {
  constructor(t, e, n) {
    super(new Int16Array(t), e, n);
  }
}
class th extends ae {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class lg extends ae {
  constructor(t, e, n) {
    super(new Int32Array(t), e, n);
  }
}
class eh extends ae {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class hg extends ae {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n), this.isFloat16BufferAttribute = !0;
  }
  getX(t) {
    let e = dr(this.array[t * this.itemSize]);
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize] = je(e), this;
  }
  getY(t) {
    let e = dr(this.array[t * this.itemSize + 1]);
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize + 1] = je(e), this;
  }
  getZ(t) {
    let e = dr(this.array[t * this.itemSize + 2]);
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize + 2] = je(e), this;
  }
  getW(t) {
    let e = dr(this.array[t * this.itemSize + 3]);
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.array[t * this.itemSize + 3] = je(e), this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array)), this.array[t + 0] = je(e), this.array[t + 1] = je(n), this;
  }
  setXYZ(t, e, n, i) {
    return t *= this.itemSize, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array), i = Ht(i, this.array)), this.array[t + 0] = je(e), this.array[t + 1] = je(n), this.array[t + 2] = je(i), this;
  }
  setXYZW(t, e, n, i, r) {
    return t *= this.itemSize, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array), i = Ht(i, this.array), r = Ht(r, this.array)), this.array[t + 0] = je(e), this.array[t + 1] = je(n), this.array[t + 2] = je(i), this.array[t + 3] = je(r), this;
  }
}
class Ct extends ae {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let ug = 0;
const dn = /* @__PURE__ */ new Ft(), Vc = /* @__PURE__ */ new Qt(), ys = /* @__PURE__ */ new R(), rn = /* @__PURE__ */ new we(), Qs = /* @__PURE__ */ new we(), Ae = /* @__PURE__ */ new R();
class Yt extends Jn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: ug++ }), this.uuid = cn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (bf(t) ? eh : th)(t, 1) : this.index = t, this;
  }
  setIndirect(t) {
    return this.indirect = t, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({
      start: t,
      count: e,
      materialIndex: n
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Vt().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = !0;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(t), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return dn.makeRotationFromQuaternion(t), this.applyMatrix4(dn), this;
  }
  rotateX(t) {
    return dn.makeRotationX(t), this.applyMatrix4(dn), this;
  }
  rotateY(t) {
    return dn.makeRotationY(t), this.applyMatrix4(dn), this;
  }
  rotateZ(t) {
    return dn.makeRotationZ(t), this.applyMatrix4(dn), this;
  }
  translate(t, e, n) {
    return dn.makeTranslation(t, e, n), this.applyMatrix4(dn), this;
  }
  scale(t, e, n) {
    return dn.makeScale(t, e, n), this.applyMatrix4(dn), this;
  }
  lookAt(t) {
    return Vc.lookAt(t), Vc.updateMatrix(), this.applyMatrix4(Vc.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ys).negate(), this.translate(ys.x, ys.y, ys.z), this;
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let i = 0, r = t.length; i < r; i++) {
        const a = t[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Ct(n, 3));
    } else {
      for (let n = 0, i = e.count; n < i; n++) {
        const r = t[n];
        e.setXYZ(n, r.x, r.y, r.z || 0);
      }
      t.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new we());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e)
        for (let n = 0, i = e.length; n < i; n++) {
          const r = e[n];
          rn.setFromBufferAttribute(r), this.morphTargetsRelative ? (Ae.addVectors(this.boundingBox.min, rn.min), this.boundingBox.expandByPoint(Ae), Ae.addVectors(this.boundingBox.max, rn.max), this.boundingBox.expandByPoint(Ae)) : (this.boundingBox.expandByPoint(rn.min), this.boundingBox.expandByPoint(rn.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pe());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (rn.setFromBufferAttribute(t), e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r];
          Qs.setFromBufferAttribute(o), this.morphTargetsRelative ? (Ae.addVectors(rn.min, Qs.min), rn.expandByPoint(Ae), Ae.addVectors(rn.max, Qs.max), rn.expandByPoint(Ae)) : (rn.expandByPoint(Qs.min), rn.expandByPoint(Qs.max));
        }
      rn.getCenter(n);
      let i = 0;
      for (let r = 0, a = t.count; r < a; r++)
        Ae.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(Ae));
      if (e)
        for (let r = 0, a = e.length; r < a; r++) {
          const o = e[r], c = this.morphTargetsRelative;
          for (let l = 0, h = o.count; l < h; l++)
            Ae.fromBufferAttribute(o, l), c && (ys.fromBufferAttribute(t, l), Ae.add(ys)), i = Math.max(i, n.distanceToSquared(Ae));
        }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, i = e.normal, r = e.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new ae(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], c = [];
    for (let A = 0; A < n.count; A++)
      o[A] = new R(), c[A] = new R();
    const l = new R(), h = new R(), u = new R(), d = new nt(), f = new nt(), m = new nt(), _ = new R(), g = new R();
    function p(A, S, M) {
      l.fromBufferAttribute(n, A), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, M), d.fromBufferAttribute(r, A), f.fromBufferAttribute(r, S), m.fromBufferAttribute(r, M), h.sub(l), u.sub(l), f.sub(d), m.sub(d);
      const I = 1 / (f.x * m.y - m.x * f.y);
      isFinite(I) && (_.copy(h).multiplyScalar(m.y).addScaledVector(u, -f.y).multiplyScalar(I), g.copy(u).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(I), o[A].add(_), o[S].add(_), o[M].add(_), c[A].add(g), c[S].add(g), c[M].add(g));
    }
    let y = this.groups;
    y.length === 0 && (y = [{
      start: 0,
      count: t.count
    }]);
    for (let A = 0, S = y.length; A < S; ++A) {
      const M = y[A], I = M.start, O = M.count;
      for (let N = I, U = I + O; N < U; N += 3)
        p(
          t.getX(N + 0),
          t.getX(N + 1),
          t.getX(N + 2)
        );
    }
    const x = new R(), v = new R(), E = new R(), b = new R();
    function C(A) {
      E.fromBufferAttribute(i, A), b.copy(E);
      const S = o[A];
      x.copy(S), x.sub(E.multiplyScalar(E.dot(S))).normalize(), v.crossVectors(b, S);
      const I = v.dot(c[A]) < 0 ? -1 : 1;
      a.setXYZW(A, x.x, x.y, x.z, I);
    }
    for (let A = 0, S = y.length; A < S; ++A) {
      const M = y[A], I = M.start, O = M.count;
      for (let N = I, U = I + O; N < U; N += 3)
        C(t.getX(N + 0)), C(t.getX(N + 1)), C(t.getX(N + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new ae(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, f = n.count; d < f; d++)
          n.setXYZ(d, 0, 0, 0);
      const i = new R(), r = new R(), a = new R(), o = new R(), c = new R(), l = new R(), h = new R(), u = new R();
      if (t)
        for (let d = 0, f = t.count; d < f; d += 3) {
          const m = t.getX(d + 0), _ = t.getX(d + 1), g = t.getX(d + 2);
          i.fromBufferAttribute(e, m), r.fromBufferAttribute(e, _), a.fromBufferAttribute(e, g), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, m), c.fromBufferAttribute(n, _), l.fromBufferAttribute(n, g), o.add(h), c.add(h), l.add(h), n.setXYZ(m, o.x, o.y, o.z), n.setXYZ(_, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
        }
      else
        for (let d = 0, f = e.count; d < f; d += 3)
          i.fromBufferAttribute(e, d + 0), r.fromBufferAttribute(e, d + 1), a.fromBufferAttribute(e, d + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      Ae.fromBufferAttribute(t, e), Ae.normalize(), t.setXYZ(e, Ae.x, Ae.y, Ae.z);
  }
  toNonIndexed() {
    function t(o, c) {
      const l = o.array, h = o.itemSize, u = o.normalized, d = new l.constructor(c.length * h);
      let f = 0, m = 0;
      for (let _ = 0, g = c.length; _ < g; _++) {
        o.isInterleavedBufferAttribute ? f = c[_] * o.data.stride + o.offset : f = c[_] * h;
        for (let p = 0; p < h; p++)
          d[m++] = l[f++];
      }
      return new ae(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Yt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const c = i[o], l = t(c, n);
      e.setAttribute(o, l);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const c = [], l = r[o];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], f = t(d, n);
        c.push(f);
      }
      e.morphAttributes[o] = c;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      e.addGroup(l.start, l.count, l.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (t[l] = c[l]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = {
      type: e.array.constructor.name,
      array: Array.prototype.slice.call(e.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      t.data.attributes[c] = l.toJSON(t.data);
    }
    const i = {};
    let r = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (i[c] = h, r = !0);
    }
    r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const i = t.attributes;
    for (const l in i) {
      const h = i[l];
      this.setAttribute(l, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const l in r) {
      const h = [], u = r[l];
      for (let d = 0, f = u.length; d < f; d++)
        h.push(u[d].clone(e));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let l = 0, h = a.length; l < h; l++) {
      const u = a[l];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = t.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const iu = /* @__PURE__ */ new Ft(), Li = /* @__PURE__ */ new Ws(), ha = /* @__PURE__ */ new Pe(), su = /* @__PURE__ */ new R(), ua = /* @__PURE__ */ new R(), da = /* @__PURE__ */ new R(), fa = /* @__PURE__ */ new R(), Hc = /* @__PURE__ */ new R(), pa = /* @__PURE__ */ new R(), ru = /* @__PURE__ */ new R(), ma = /* @__PURE__ */ new R();
class qt extends Qt {
  constructor(t = new Yt(), e = new xn()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(i, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      pa.set(0, 0, 0);
      for (let c = 0, l = r.length; c < l; c++) {
        const h = o[c], u = r[c];
        h !== 0 && (Hc.fromBufferAttribute(u, t), a ? pa.addScaledVector(Hc, h) : pa.addScaledVector(Hc.sub(e), h));
      }
      e.add(pa);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), ha.copy(n.boundingSphere), ha.applyMatrix4(r), Li.copy(t.ray).recast(t.near), !(ha.containsPoint(Li.origin) === !1 && (Li.intersectSphere(ha, su) === null || Li.origin.distanceToSquared(su) > (t.far - t.near) ** 2)) && (iu.copy(r).invert(), Li.copy(t.ray).applyMatrix4(iu), !(n.boundingBox !== null && Li.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(t, e, Li)));
  }
  _computeIntersections(t, e, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, c = r.attributes.position, l = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = a[g.materialIndex], y = Math.max(g.start, f.start), x = Math.min(o.count, Math.min(g.start + g.count, f.start + f.count));
          for (let v = y, E = x; v < E; v += 3) {
            const b = o.getX(v), C = o.getX(v + 1), A = o.getX(v + 2);
            i = ga(this, p, t, n, l, h, u, b, C, A), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = g.materialIndex, e.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const y = o.getX(g), x = o.getX(g + 1), v = o.getX(g + 2);
          i = ga(this, a, t, n, l, h, u, y, x, v), i && (i.faceIndex = Math.floor(g / 3), e.push(i));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let m = 0, _ = d.length; m < _; m++) {
          const g = d[m], p = a[g.materialIndex], y = Math.max(g.start, f.start), x = Math.min(c.count, Math.min(g.start + g.count, f.start + f.count));
          for (let v = y, E = x; v < E; v += 3) {
            const b = v, C = v + 1, A = v + 2;
            i = ga(this, p, t, n, l, h, u, b, C, A), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = g.materialIndex, e.push(i));
          }
        }
      else {
        const m = Math.max(0, f.start), _ = Math.min(c.count, f.start + f.count);
        for (let g = m, p = _; g < p; g += 3) {
          const y = g, x = g + 1, v = g + 2;
          i = ga(this, a, t, n, l, h, u, y, x, v), i && (i.faceIndex = Math.floor(g / 3), e.push(i));
        }
      }
  }
}
function dg(s, t, e, n, i, r, a, o) {
  let c;
  if (t.side === Ue ? c = n.intersectTriangle(a, r, i, !0, o) : c = n.intersectTriangle(i, r, a, t.side === Cn, o), c === null) return null;
  ma.copy(o), ma.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(ma);
  return l < e.near || l > e.far ? null : {
    distance: l,
    point: ma.clone(),
    object: s
  };
}
function ga(s, t, e, n, i, r, a, o, c, l) {
  s.getVertexPosition(o, ua), s.getVertexPosition(c, da), s.getVertexPosition(l, fa);
  const h = dg(s, t, e, n, ua, da, fa, ru);
  if (h) {
    const u = new R();
    Qe.getBarycoord(ru, ua, da, fa, u), i && (h.uv = Qe.getInterpolatedAttribute(i, o, c, l, u, new nt())), r && (h.uv1 = Qe.getInterpolatedAttribute(r, o, c, l, u, new nt())), a && (h.normal = Qe.getInterpolatedAttribute(a, o, c, l, u, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    Qe.getNormal(ua, da, fa, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class ln extends Yt {
  constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: t,
      height: e,
      depth: n,
      widthSegments: i,
      heightSegments: r,
      depthSegments: a
    };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const c = [], l = [], h = [], u = [];
    let d = 0, f = 0;
    m("z", "y", "x", -1, -1, n, e, t, a, r, 0), m("z", "y", "x", 1, -1, n, e, -t, a, r, 1), m("x", "z", "y", 1, 1, t, n, e, i, a, 2), m("x", "z", "y", 1, -1, t, n, -e, i, a, 3), m("x", "y", "z", 1, -1, t, e, n, i, r, 4), m("x", "y", "z", -1, -1, t, e, -n, i, r, 5), this.setIndex(c), this.setAttribute("position", new Ct(l, 3)), this.setAttribute("normal", new Ct(h, 3)), this.setAttribute("uv", new Ct(u, 2));
    function m(_, g, p, y, x, v, E, b, C, A, S) {
      const M = v / C, I = E / A, O = v / 2, N = E / 2, U = b / 2, q = C + 1, V = A + 1;
      let j = 0, G = 0;
      const st = new R();
      for (let dt = 0; dt < V; dt++) {
        const Z = dt * I - N;
        for (let ot = 0; ot < q; ot++) {
          const Rt = ot * M - O;
          st[_] = Rt * y, st[g] = Z * x, st[p] = U, l.push(st.x, st.y, st.z), st[_] = 0, st[g] = 0, st[p] = b > 0 ? 1 : -1, h.push(st.x, st.y, st.z), u.push(ot / C), u.push(1 - dt / A), j += 1;
        }
      }
      for (let dt = 0; dt < A; dt++)
        for (let Z = 0; Z < C; Z++) {
          const ot = d + Z + q * dt, Rt = d + Z + q * (dt + 1), D = d + (Z + 1) + q * (dt + 1), k = d + (Z + 1) + q * dt;
          c.push(ot, Rt, k), c.push(Rt, D, k), G += 6;
        }
      o.addGroup(f, G, S), f += G, d += j;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ln(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function zs(s) {
  const t = {};
  for (const e in s) {
    t[e] = {};
    for (const n in s[e]) {
      const i = s[e][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = i.clone() : Array.isArray(i) ? t[e][n] = i.slice() : t[e][n] = i;
    }
  }
  return t;
}
function Ge(s) {
  const t = {};
  for (let e = 0; e < s.length; e++) {
    const n = zs(s[e]);
    for (const i in n)
      t[i] = n[i];
  }
  return t;
}
function fg(s) {
  const t = [];
  for (let e = 0; e < s.length; e++)
    t.push(s[e].clone());
  return t;
}
function Cf(s) {
  const t = s.getRenderTarget();
  return t === null ? s.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : Kt.workingColorSpace;
}
const ec = { clone: zs, merge: Ge };
var pg = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, mg = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class vn extends ke {
  static get type() {
    return "ShaderMaterial";
  }
  constructor(t) {
    super(), this.isShaderMaterial = !0, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = pg, this.fragmentShader = mg, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = zs(t.uniforms), this.uniformsGroups = fg(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? e.uniforms[i] = {
        type: "t",
        value: a.toJSON(t).uuid
      } : a && a.isColor ? e.uniforms[i] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? e.uniforms[i] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? e.uniforms[i] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? e.uniforms[i] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? e.uniforms[i] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? e.uniforms[i] = {
        type: "m4",
        value: a.toArray()
      } : e.uniforms[i] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions)
      this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class nc extends Qt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ft(), this.projectionMatrix = new Ft(), this.projectionMatrixInverse = new Ft(), this.coordinateSystem = Gn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Mi = /* @__PURE__ */ new R(), au = /* @__PURE__ */ new nt(), ou = /* @__PURE__ */ new nt();
class Re extends nc {
  constructor(t = 50, e = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Bs * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const t = Math.tan(Qi * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Bs * 2 * Math.atan(
      Math.tan(Qi * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(t, e, n) {
    Mi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(Mi.x, Mi.y).multiplyScalar(-t / Mi.z), Mi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Mi.x, Mi.y).multiplyScalar(-t / Mi.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(t, e) {
    return this.getViewBounds(t, au, ou), e.subVectors(ou, au);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(t, e, n, i, r, a) {
    this.aspect = t / e, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(Qi * 0.5 * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      r += a.offsetX * i / c, e -= a.offsetY * n / l, i *= a.width / c, n *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Ms = -90, Ss = 1;
class Rf extends Qt {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new Re(Ms, Ss, t, e);
    i.layers = this.layers, this.add(i);
    const r = new Re(Ms, Ss, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Re(Ms, Ss, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Re(Ms, Ss, t, e);
    o.layers = this.layers, this.add(o);
    const c = new Re(Ms, Ss, t, e);
    c.layers = this.layers, this.add(c);
    const l = new Re(Ms, Ss, t, e);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, i, r, a, o, c] = e;
    for (const l of e) this.remove(l);
    if (t === Gn)
      n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (t === Ir)
      n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const l of e)
      this.add(l), l.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, c, l, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), m = t.xr.enabled;
    t.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, t.setRenderTarget(n, 0, i), t.render(e, r), t.setRenderTarget(n, 1, i), t.render(e, a), t.setRenderTarget(n, 2, i), t.render(e, o), t.setRenderTarget(n, 3, i), t.render(e, c), t.setRenderTarget(n, 4, i), t.render(e, l), n.texture.generateMipmaps = _, t.setRenderTarget(n, 5, i), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = m, n.texture.needsPMREMUpdate = !0;
  }
}
class Wr extends _e {
  constructor(t, e, n, i, r, a, o, c, l, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : ui, super(t, e, n, i, r, a, o, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Pf extends Rn {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = !0;
    const n = { width: t, height: t, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new Wr(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : !1, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : be;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, i = new ln(5, 5, 5), r = new vn({
      name: "CubemapFromEquirect",
      uniforms: zs(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: Ue,
      blending: li
    });
    r.uniforms.tEquirect.value = e;
    const a = new qt(i, r), o = e.minFilter;
    return e.minFilter === An && (e.minFilter = be), new Rf(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, i) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++)
      t.setRenderTarget(this, a), t.clear(e, n, i);
    t.setRenderTarget(r);
  }
}
const Gc = /* @__PURE__ */ new R(), gg = /* @__PURE__ */ new R(), _g = /* @__PURE__ */ new Vt();
class Vn {
  constructor(t = new R(1, 0, 0), e = 0) {
    this.isPlane = !0, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, i) {
    return this.normal.set(t, e, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const i = Gc.subVectors(n, e).cross(gg.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Gc), i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || _g.getNormalMatrix(t), i = this.coplanarPoint(Gc).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Di = /* @__PURE__ */ new Pe(), _a = /* @__PURE__ */ new R();
class Xr {
  constructor(t = new Vn(), e = new Vn(), n = new Vn(), i = new Vn(), r = new Vn(), a = new Vn()) {
    this.planes = [t, e, n, i, r, a];
  }
  set(t, e, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = Gn) {
    const n = this.planes, i = t.elements, r = i[0], a = i[1], o = i[2], c = i[3], l = i[4], h = i[5], u = i[6], d = i[7], f = i[8], m = i[9], _ = i[10], g = i[11], p = i[12], y = i[13], x = i[14], v = i[15];
    if (n[0].setComponents(c - r, d - l, g - f, v - p).normalize(), n[1].setComponents(c + r, d + l, g + f, v + p).normalize(), n[2].setComponents(c + a, d + h, g + m, v + y).normalize(), n[3].setComponents(c - a, d - h, g - m, v - y).normalize(), n[4].setComponents(c - o, d - u, g - _, v - x).normalize(), e === Gn)
      n[5].setComponents(c + o, d + u, g + _, v + x).normalize();
    else if (e === Ir)
      n[5].setComponents(o, u, _, x).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      t.boundingSphere === null && t.computeBoundingSphere(), Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(Di);
  }
  intersectsSprite(t) {
    return Di.center.set(0, 0, 0), Di.radius = 0.7071067811865476, Di.applyMatrix4(t.matrixWorld), this.intersectsSphere(Di);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, i = -t.radius;
    for (let r = 0; r < 6; r++)
      if (e[r].distanceToPoint(n) < i)
        return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = e[n];
      if (_a.x = i.normal.x > 0 ? t.max.x : t.min.x, _a.y = i.normal.y > 0 ? t.max.y : t.min.y, _a.z = i.normal.z > 0 ? t.max.z : t.min.z, i.distanceToPoint(_a) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++)
      if (e[n].distanceToPoint(t) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function If() {
  let s = null, t = !1, e = null, n = null;
  function i(r, a) {
    e(r, a), n = s.requestAnimationFrame(i);
  }
  return {
    start: function() {
      t !== !0 && e !== null && (n = s.requestAnimationFrame(i), t = !0);
    },
    stop: function() {
      s.cancelAnimationFrame(n), t = !1;
    },
    setAnimationLoop: function(r) {
      e = r;
    },
    setContext: function(r) {
      s = r;
    }
  };
}
function xg(s) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, c) {
    const l = o.array, h = o.usage, u = l.byteLength, d = s.createBuffer();
    s.bindBuffer(c, d), s.bufferData(c, l, h), o.onUploadCallback();
    let f;
    if (l instanceof Float32Array)
      f = s.FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? f = s.HALF_FLOAT : f = s.UNSIGNED_SHORT;
    else if (l instanceof Int16Array)
      f = s.SHORT;
    else if (l instanceof Uint32Array)
      f = s.UNSIGNED_INT;
    else if (l instanceof Int32Array)
      f = s.INT;
    else if (l instanceof Int8Array)
      f = s.BYTE;
    else if (l instanceof Uint8Array)
      f = s.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray)
      f = s.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
    return {
      buffer: d,
      type: f,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: u
    };
  }
  function n(o, c, l) {
    const h = c.array, u = c.updateRanges;
    if (s.bindBuffer(l, o), u.length === 0)
      s.bufferSubData(l, 0, h);
    else {
      u.sort((f, m) => f.start - m.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const m = u[d], _ = u[f];
        _.start <= m.start + m.count + 1 ? m.count = Math.max(
          m.count,
          _.start + _.count - m.start
        ) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let f = 0, m = u.length; f < m; f++) {
        const _ = u[f];
        s.bufferSubData(
          l,
          _.start * h.BYTES_PER_ELEMENT,
          h,
          _.start,
          _.count
        );
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = t.get(o);
    c && (s.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, {
        buffer: o.buffer,
        type: o.type,
        bytesPerElement: o.elementSize,
        version: o.version
      });
      return;
    }
    const l = t.get(o);
    if (l === void 0)
      t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(l.buffer, o, c), l.version = o.version;
    }
  }
  return {
    get: i,
    remove: r,
    update: a
  };
}
class Pn extends Yt {
  constructor(t = 1, e = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: t,
      height: e,
      widthSegments: n,
      heightSegments: i
    };
    const r = t / 2, a = e / 2, o = Math.floor(n), c = Math.floor(i), l = o + 1, h = c + 1, u = t / o, d = e / c, f = [], m = [], _ = [], g = [];
    for (let p = 0; p < h; p++) {
      const y = p * d - a;
      for (let x = 0; x < l; x++) {
        const v = x * u - r;
        m.push(v, -y, 0), _.push(0, 0, 1), g.push(x / o), g.push(1 - p / c);
      }
    }
    for (let p = 0; p < c; p++)
      for (let y = 0; y < o; y++) {
        const x = y + l * p, v = y + l * (p + 1), E = y + 1 + l * (p + 1), b = y + 1 + l * p;
        f.push(x, v, b), f.push(v, E, b);
      }
    this.setIndex(f), this.setAttribute("position", new Ct(m, 3)), this.setAttribute("normal", new Ct(_, 3)), this.setAttribute("uv", new Ct(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Pn(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var vg = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, yg = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Mg = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Sg = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, bg = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, wg = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Eg = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Tg = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, Ag = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Cg = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Rg = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Pg = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Ig = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Lg = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Dg = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ug = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ng = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fg = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Og = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Bg = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, zg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, kg = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Vg = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Hg = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Gg = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Wg = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Xg = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, qg = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Yg = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, $g = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Zg = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Jg = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Kg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, jg = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Qg = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, t0 = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, e0 = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, n0 = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, i0 = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, s0 = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, r0 = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, a0 = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, o0 = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, c0 = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, l0 = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, h0 = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, u0 = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, d0 = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, f0 = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, p0 = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, m0 = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, g0 = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, _0 = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, x0 = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, v0 = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, y0 = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, M0 = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, S0 = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, b0 = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, w0 = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, E0 = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, T0 = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, A0 = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, C0 = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, R0 = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, P0 = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, I0 = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, L0 = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, D0 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, U0 = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, N0 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, F0 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, O0 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, B0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, z0 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, k0 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, V0 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, H0 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, G0 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, W0 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, X0 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, q0 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Y0 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, $0 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Z0 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, J0 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, K0 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, j0 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Q0 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, t_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, e_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, n_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, i_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, s_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, r_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, a_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, o_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, c_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, l_ = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, h_ = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, u_ = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, d_ = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, f_ = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, p_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, m_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, g_ = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, __ = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const x_ = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, v_ = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, y_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, M_ = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, S_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, b_ = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, w_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, E_ = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, T_ = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, A_ = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, C_ = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, R_ = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, P_ = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, I_ = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, L_ = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, D_ = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, U_ = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, N_ = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, F_ = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, O_ = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, B_ = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, z_ = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, k_ = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, V_ = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, H_ = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, G_ = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, W_ = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, X_ = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, q_ = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Y_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, $_ = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Z_ = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, J_ = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, K_ = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Xt = {
  alphahash_fragment: vg,
  alphahash_pars_fragment: yg,
  alphamap_fragment: Mg,
  alphamap_pars_fragment: Sg,
  alphatest_fragment: bg,
  alphatest_pars_fragment: wg,
  aomap_fragment: Eg,
  aomap_pars_fragment: Tg,
  batching_pars_vertex: Ag,
  batching_vertex: Cg,
  begin_vertex: Rg,
  beginnormal_vertex: Pg,
  bsdfs: Ig,
  iridescence_fragment: Lg,
  bumpmap_pars_fragment: Dg,
  clipping_planes_fragment: Ug,
  clipping_planes_pars_fragment: Ng,
  clipping_planes_pars_vertex: Fg,
  clipping_planes_vertex: Og,
  color_fragment: Bg,
  color_pars_fragment: zg,
  color_pars_vertex: kg,
  color_vertex: Vg,
  common: Hg,
  cube_uv_reflection_fragment: Gg,
  defaultnormal_vertex: Wg,
  displacementmap_pars_vertex: Xg,
  displacementmap_vertex: qg,
  emissivemap_fragment: Yg,
  emissivemap_pars_fragment: $g,
  colorspace_fragment: Zg,
  colorspace_pars_fragment: Jg,
  envmap_fragment: Kg,
  envmap_common_pars_fragment: jg,
  envmap_pars_fragment: Qg,
  envmap_pars_vertex: t0,
  envmap_physical_pars_fragment: u0,
  envmap_vertex: e0,
  fog_vertex: n0,
  fog_pars_vertex: i0,
  fog_fragment: s0,
  fog_pars_fragment: r0,
  gradientmap_pars_fragment: a0,
  lightmap_pars_fragment: o0,
  lights_lambert_fragment: c0,
  lights_lambert_pars_fragment: l0,
  lights_pars_begin: h0,
  lights_toon_fragment: d0,
  lights_toon_pars_fragment: f0,
  lights_phong_fragment: p0,
  lights_phong_pars_fragment: m0,
  lights_physical_fragment: g0,
  lights_physical_pars_fragment: _0,
  lights_fragment_begin: x0,
  lights_fragment_maps: v0,
  lights_fragment_end: y0,
  logdepthbuf_fragment: M0,
  logdepthbuf_pars_fragment: S0,
  logdepthbuf_pars_vertex: b0,
  logdepthbuf_vertex: w0,
  map_fragment: E0,
  map_pars_fragment: T0,
  map_particle_fragment: A0,
  map_particle_pars_fragment: C0,
  metalnessmap_fragment: R0,
  metalnessmap_pars_fragment: P0,
  morphinstance_vertex: I0,
  morphcolor_vertex: L0,
  morphnormal_vertex: D0,
  morphtarget_pars_vertex: U0,
  morphtarget_vertex: N0,
  normal_fragment_begin: F0,
  normal_fragment_maps: O0,
  normal_pars_fragment: B0,
  normal_pars_vertex: z0,
  normal_vertex: k0,
  normalmap_pars_fragment: V0,
  clearcoat_normal_fragment_begin: H0,
  clearcoat_normal_fragment_maps: G0,
  clearcoat_pars_fragment: W0,
  iridescence_pars_fragment: X0,
  opaque_fragment: q0,
  packing: Y0,
  premultiplied_alpha_fragment: $0,
  project_vertex: Z0,
  dithering_fragment: J0,
  dithering_pars_fragment: K0,
  roughnessmap_fragment: j0,
  roughnessmap_pars_fragment: Q0,
  shadowmap_pars_fragment: t_,
  shadowmap_pars_vertex: e_,
  shadowmap_vertex: n_,
  shadowmask_pars_fragment: i_,
  skinbase_vertex: s_,
  skinning_pars_vertex: r_,
  skinning_vertex: a_,
  skinnormal_vertex: o_,
  specularmap_fragment: c_,
  specularmap_pars_fragment: l_,
  tonemapping_fragment: h_,
  tonemapping_pars_fragment: u_,
  transmission_fragment: d_,
  transmission_pars_fragment: f_,
  uv_pars_fragment: p_,
  uv_pars_vertex: m_,
  uv_vertex: g_,
  worldpos_vertex: __,
  background_vert: x_,
  background_frag: v_,
  backgroundCube_vert: y_,
  backgroundCube_frag: M_,
  cube_vert: S_,
  cube_frag: b_,
  depth_vert: w_,
  depth_frag: E_,
  distanceRGBA_vert: T_,
  distanceRGBA_frag: A_,
  equirect_vert: C_,
  equirect_frag: R_,
  linedashed_vert: P_,
  linedashed_frag: I_,
  meshbasic_vert: L_,
  meshbasic_frag: D_,
  meshlambert_vert: U_,
  meshlambert_frag: N_,
  meshmatcap_vert: F_,
  meshmatcap_frag: O_,
  meshnormal_vert: B_,
  meshnormal_frag: z_,
  meshphong_vert: k_,
  meshphong_frag: V_,
  meshphysical_vert: H_,
  meshphysical_frag: G_,
  meshtoon_vert: W_,
  meshtoon_frag: X_,
  points_vert: q_,
  points_frag: Y_,
  shadow_vert: $_,
  shadow_frag: Z_,
  sprite_vert: J_,
  sprite_frag: K_
}, pt = {
  common: {
    diffuse: { value: /* @__PURE__ */ new gt(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Vt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Vt() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Vt() }
  },
  envmap: {
    envMap: { value: null },
    envMapRotation: { value: /* @__PURE__ */ new Vt() },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Vt() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Vt() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Vt() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Vt() },
    normalScale: { value: /* @__PURE__ */ new nt(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Vt() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Vt() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Vt() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Vt() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new gt(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowIntensity: 1,
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new gt(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Vt() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Vt() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new gt(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new nt(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Vt() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Vt() },
    alphaTest: { value: 0 }
  }
}, Xe = {
  basic: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.specularmap,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.fog
    ]),
    vertexShader: Xt.meshbasic_vert,
    fragmentShader: Xt.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.specularmap,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new gt(0) }
      }
    ]),
    vertexShader: Xt.meshlambert_vert,
    fragmentShader: Xt.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.specularmap,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new gt(0) },
        specular: { value: /* @__PURE__ */ new gt(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Xt.meshphong_vert,
    fragmentShader: Xt.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.envmap,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.roughnessmap,
      pt.metalnessmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new gt(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
      }
    ]),
    vertexShader: Xt.meshphysical_vert,
    fragmentShader: Xt.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.aomap,
      pt.lightmap,
      pt.emissivemap,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.gradientmap,
      pt.fog,
      pt.lights,
      {
        emissive: { value: /* @__PURE__ */ new gt(0) }
      }
    ]),
    vertexShader: Xt.meshtoon_vert,
    fragmentShader: Xt.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      pt.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Xt.meshmatcap_vert,
    fragmentShader: Xt.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Ge([
      pt.points,
      pt.fog
    ]),
    vertexShader: Xt.points_vert,
    fragmentShader: Xt.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Xt.linedashed_vert,
    fragmentShader: Xt.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.displacementmap
    ]),
    vertexShader: Xt.depth_vert,
    fragmentShader: Xt.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.bumpmap,
      pt.normalmap,
      pt.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Xt.meshnormal_vert,
    fragmentShader: Xt.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Ge([
      pt.sprite,
      pt.fog
    ]),
    vertexShader: Xt.sprite_vert,
    fragmentShader: Xt.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Vt() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Xt.background_vert,
    fragmentShader: Xt.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 },
      backgroundRotation: { value: /* @__PURE__ */ new Vt() }
    },
    vertexShader: Xt.backgroundCube_vert,
    fragmentShader: Xt.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Xt.cube_vert,
    fragmentShader: Xt.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Xt.equirect_vert,
    fragmentShader: Xt.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Ge([
      pt.common,
      pt.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Xt.distanceRGBA_vert,
    fragmentShader: Xt.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Ge([
      pt.lights,
      pt.fog,
      {
        color: { value: /* @__PURE__ */ new gt(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Xt.shadow_vert,
    fragmentShader: Xt.shadow_frag
  }
};
Xe.physical = {
  uniforms: /* @__PURE__ */ Ge([
    Xe.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Vt() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Vt() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new nt(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Vt() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Vt() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Vt() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new gt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Vt() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Vt() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Vt() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new nt() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Vt() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new gt(0) },
      specularColor: { value: /* @__PURE__ */ new gt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Vt() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Vt() },
      anisotropyVector: { value: /* @__PURE__ */ new nt() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Vt() }
    }
  ]),
  vertexShader: Xt.meshphysical_vert,
  fragmentShader: Xt.meshphysical_frag
};
const xa = { r: 0, b: 0, g: 0 }, Ui = /* @__PURE__ */ new hn(), j_ = /* @__PURE__ */ new Ft();
function Q_(s, t, e, n, i, r, a) {
  const o = new gt(0);
  let c = r === !0 ? 0 : 1, l, h, u = null, d = 0, f = null;
  function m(y) {
    let x = y.isScene === !0 ? y.background : null;
    return x && x.isTexture && (x = (y.backgroundBlurriness > 0 ? e : t).get(x)), x;
  }
  function _(y) {
    let x = !1;
    const v = m(y);
    v === null ? p(o, c) : v && v.isColor && (p(v, 1), x = !0);
    const E = s.xr.getEnvironmentBlendMode();
    E === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || x) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function g(y, x) {
    const v = m(x);
    v && (v.isCubeTexture || v.mapping === Hs) ? (h === void 0 && (h = new qt(
      new ln(1, 1, 1),
      new vn({
        name: "BackgroundCubeMaterial",
        uniforms: zs(Xe.backgroundCube.uniforms),
        vertexShader: Xe.backgroundCube.vertexShader,
        fragmentShader: Xe.backgroundCube.fragmentShader,
        side: Ue,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(E, b, C) {
      this.matrixWorld.copyPosition(C.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), i.update(h)), Ui.copy(x.backgroundRotation), Ui.x *= -1, Ui.y *= -1, Ui.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (Ui.y *= -1, Ui.z *= -1), h.material.uniforms.envMap.value = v, h.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = x.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Ui)), h.material.toneMapped = Kt.getTransfer(v.colorSpace) !== re, (u !== v || d !== v.version || f !== s.toneMapping) && (h.material.needsUpdate = !0, u = v, d = v.version, f = s.toneMapping), h.layers.enableAll(), y.unshift(h, h.geometry, h.material, 0, 0, null)) : v && v.isTexture && (l === void 0 && (l = new qt(
      new Pn(2, 2),
      new vn({
        name: "BackgroundMaterial",
        uniforms: zs(Xe.background.uniforms),
        vertexShader: Xe.background.vertexShader,
        fragmentShader: Xe.background.fragmentShader,
        side: Cn,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), i.update(l)), l.material.uniforms.t2D.value = v, l.material.uniforms.backgroundIntensity.value = x.backgroundIntensity, l.material.toneMapped = Kt.getTransfer(v.colorSpace) !== re, v.matrixAutoUpdate === !0 && v.updateMatrix(), l.material.uniforms.uvTransform.value.copy(v.matrix), (u !== v || d !== v.version || f !== s.toneMapping) && (l.material.needsUpdate = !0, u = v, d = v.version, f = s.toneMapping), l.layers.enableAll(), y.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function p(y, x) {
    y.getRGB(xa, Cf(s)), n.buffers.color.setClear(xa.r, xa.g, xa.b, x, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(y, x = 1) {
      o.set(y), c = x, p(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(y) {
      c = y, p(o, c);
    },
    render: _,
    addToRenderList: g
  };
}
function tx(s, t) {
  const e = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, a = !1;
  function o(M, I, O, N, U) {
    let q = !1;
    const V = u(N, O, I);
    r !== V && (r = V, l(r.object)), q = f(M, N, O, U), q && m(M, N, O, U), U !== null && t.update(U, s.ELEMENT_ARRAY_BUFFER), (q || a) && (a = !1, v(M, I, O, N), U !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(U).buffer));
  }
  function c() {
    return s.createVertexArray();
  }
  function l(M) {
    return s.bindVertexArray(M);
  }
  function h(M) {
    return s.deleteVertexArray(M);
  }
  function u(M, I, O) {
    const N = O.wireframe === !0;
    let U = n[M.id];
    U === void 0 && (U = {}, n[M.id] = U);
    let q = U[I.id];
    q === void 0 && (q = {}, U[I.id] = q);
    let V = q[N];
    return V === void 0 && (V = d(c()), q[N] = V), V;
  }
  function d(M) {
    const I = [], O = [], N = [];
    for (let U = 0; U < e; U++)
      I[U] = 0, O[U] = 0, N[U] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: O,
      attributeDivisors: N,
      object: M,
      attributes: {},
      index: null
    };
  }
  function f(M, I, O, N) {
    const U = r.attributes, q = I.attributes;
    let V = 0;
    const j = O.getAttributes();
    for (const G in j)
      if (j[G].location >= 0) {
        const dt = U[G];
        let Z = q[G];
        if (Z === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (Z = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (Z = M.instanceColor)), dt === void 0 || dt.attribute !== Z || Z && dt.data !== Z.data) return !0;
        V++;
      }
    return r.attributesNum !== V || r.index !== N;
  }
  function m(M, I, O, N) {
    const U = {}, q = I.attributes;
    let V = 0;
    const j = O.getAttributes();
    for (const G in j)
      if (j[G].location >= 0) {
        let dt = q[G];
        dt === void 0 && (G === "instanceMatrix" && M.instanceMatrix && (dt = M.instanceMatrix), G === "instanceColor" && M.instanceColor && (dt = M.instanceColor));
        const Z = {};
        Z.attribute = dt, dt && dt.data && (Z.data = dt.data), U[G] = Z, V++;
      }
    r.attributes = U, r.attributesNum = V, r.index = N;
  }
  function _() {
    const M = r.newAttributes;
    for (let I = 0, O = M.length; I < O; I++)
      M[I] = 0;
  }
  function g(M) {
    p(M, 0);
  }
  function p(M, I) {
    const O = r.newAttributes, N = r.enabledAttributes, U = r.attributeDivisors;
    O[M] = 1, N[M] === 0 && (s.enableVertexAttribArray(M), N[M] = 1), U[M] !== I && (s.vertexAttribDivisor(M, I), U[M] = I);
  }
  function y() {
    const M = r.newAttributes, I = r.enabledAttributes;
    for (let O = 0, N = I.length; O < N; O++)
      I[O] !== M[O] && (s.disableVertexAttribArray(O), I[O] = 0);
  }
  function x(M, I, O, N, U, q, V) {
    V === !0 ? s.vertexAttribIPointer(M, I, O, U, q) : s.vertexAttribPointer(M, I, O, N, U, q);
  }
  function v(M, I, O, N) {
    _();
    const U = N.attributes, q = O.getAttributes(), V = I.defaultAttributeValues;
    for (const j in q) {
      const G = q[j];
      if (G.location >= 0) {
        let st = U[j];
        if (st === void 0 && (j === "instanceMatrix" && M.instanceMatrix && (st = M.instanceMatrix), j === "instanceColor" && M.instanceColor && (st = M.instanceColor)), st !== void 0) {
          const dt = st.normalized, Z = st.itemSize, ot = t.get(st);
          if (ot === void 0) continue;
          const Rt = ot.buffer, D = ot.type, k = ot.bytesPerElement, H = D === s.INT || D === s.UNSIGNED_INT || st.gpuType === qo;
          if (st.isInterleavedBufferAttribute) {
            const X = st.data, Q = X.stride, at = st.offset;
            if (X.isInstancedInterleavedBuffer) {
              for (let ct = 0; ct < G.locationSize; ct++)
                p(G.location + ct, X.meshPerAttribute);
              M.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = X.meshPerAttribute * X.count);
            } else
              for (let ct = 0; ct < G.locationSize; ct++)
                g(G.location + ct);
            s.bindBuffer(s.ARRAY_BUFFER, Rt);
            for (let ct = 0; ct < G.locationSize; ct++)
              x(
                G.location + ct,
                Z / G.locationSize,
                D,
                dt,
                Q * k,
                (at + Z / G.locationSize * ct) * k,
                H
              );
          } else {
            if (st.isInstancedBufferAttribute) {
              for (let X = 0; X < G.locationSize; X++)
                p(G.location + X, st.meshPerAttribute);
              M.isInstancedMesh !== !0 && N._maxInstanceCount === void 0 && (N._maxInstanceCount = st.meshPerAttribute * st.count);
            } else
              for (let X = 0; X < G.locationSize; X++)
                g(G.location + X);
            s.bindBuffer(s.ARRAY_BUFFER, Rt);
            for (let X = 0; X < G.locationSize; X++)
              x(
                G.location + X,
                Z / G.locationSize,
                D,
                dt,
                Z * k,
                Z / G.locationSize * X * k,
                H
              );
          }
        } else if (V !== void 0) {
          const dt = V[j];
          if (dt !== void 0)
            switch (dt.length) {
              case 2:
                s.vertexAttrib2fv(G.location, dt);
                break;
              case 3:
                s.vertexAttrib3fv(G.location, dt);
                break;
              case 4:
                s.vertexAttrib4fv(G.location, dt);
                break;
              default:
                s.vertexAttrib1fv(G.location, dt);
            }
        }
      }
    }
    y();
  }
  function E() {
    A();
    for (const M in n) {
      const I = n[M];
      for (const O in I) {
        const N = I[O];
        for (const U in N)
          h(N[U].object), delete N[U];
        delete I[O];
      }
      delete n[M];
    }
  }
  function b(M) {
    if (n[M.id] === void 0) return;
    const I = n[M.id];
    for (const O in I) {
      const N = I[O];
      for (const U in N)
        h(N[U].object), delete N[U];
      delete I[O];
    }
    delete n[M.id];
  }
  function C(M) {
    for (const I in n) {
      const O = n[I];
      if (O[M.id] === void 0) continue;
      const N = O[M.id];
      for (const U in N)
        h(N[U].object), delete N[U];
      delete O[M.id];
    }
  }
  function A() {
    S(), a = !0, r !== i && (r = i, l(r.object));
  }
  function S() {
    i.geometry = null, i.program = null, i.wireframe = !1;
  }
  return {
    setup: o,
    reset: A,
    resetDefaultState: S,
    dispose: E,
    releaseStatesOfGeometry: b,
    releaseStatesOfProgram: C,
    initAttributes: _,
    enableAttribute: g,
    disableUnusedAttributes: y
  };
}
function ex(s, t, e) {
  let n;
  function i(l) {
    n = l;
  }
  function r(l, h) {
    s.drawArrays(n, l, h), e.update(h, n, 1);
  }
  function a(l, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, l, h, u), e.update(h, n, u));
  }
  function o(l, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, l, 0, h, 0, u);
    let f = 0;
    for (let m = 0; m < u; m++)
      f += h[m];
    e.update(f, n, 1);
  }
  function c(l, h, u, d) {
    if (u === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null)
      for (let m = 0; m < l.length; m++)
        a(l[m], h[m], d[m]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, d, 0, u);
      let m = 0;
      for (let _ = 0; _ < u; _++)
        m += h[_] * d[_];
      e.update(m, n, 1);
    }
  }
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = c;
}
function nx(s, t, e, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const C = t.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function a(C) {
    return !(C !== $e && n.convert(C) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(C) {
    const A = C === Gs && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(C !== Zn && n.convert(C) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
    C !== tn && !A);
  }
  function c(C) {
    if (C === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0)
        return "highp";
      C = "mediump";
    }
    return C === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp";
  const h = c(l);
  h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."), l = h);
  const u = e.logarithmicDepthBuffer === !0, d = e.reverseDepthBuffer === !0 && t.has("EXT_clip_control"), f = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), m = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), p = s.getParameter(s.MAX_VERTEX_ATTRIBS), y = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), x = s.getParameter(s.MAX_VARYING_VECTORS), v = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), E = m > 0, b = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    // keeping this for backwards compatibility
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: u,
    reverseDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: m,
    maxTextureSize: _,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: y,
    maxVaryings: x,
    maxFragmentUniforms: v,
    vertexTextures: E,
    maxSamples: b
  };
}
function ix(s) {
  const t = this;
  let e = null, n = 0, i = !1, r = !1;
  const a = new Vn(), o = new Vt(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || i;
    return i = d, n = u.length, f;
  }, this.beginShadows = function() {
    r = !0, h(null);
  }, this.endShadows = function() {
    r = !1;
  }, this.setGlobalState = function(u, d) {
    e = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const m = u.clippingPlanes, _ = u.clipIntersection, g = u.clipShadows, p = s.get(u);
    if (!i || m === null || m.length === 0 || r && !g)
      r ? h(null) : l();
    else {
      const y = r ? 0 : n, x = y * 4;
      let v = p.clippingState || null;
      c.value = v, v = h(m, d, x, f);
      for (let E = 0; E !== x; ++E)
        v[E] = e[E];
      p.clippingState = v, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function l() {
    c.value !== e && (c.value = e, c.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, d, f, m) {
    const _ = u !== null ? u.length : 0;
    let g = null;
    if (_ !== 0) {
      if (g = c.value, m !== !0 || g === null) {
        const p = f + _ * 4, y = d.matrixWorldInverse;
        o.getNormalMatrix(y), (g === null || g.length < p) && (g = new Float32Array(p));
        for (let x = 0, v = f; x !== _; ++x, v += 4)
          a.copy(u[x]).applyMatrix4(y, o), a.normal.toArray(g, v), g[v + 3] = a.constant;
      }
      c.value = g, c.needsUpdate = !0;
    }
    return t.numPlanes = _, t.numIntersection = 0, g;
  }
}
function sx(s) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === Er ? a.mapping = ui : o === Tr && (a.mapping = wi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Er || o === Tr)
        if (t.has(a)) {
          const c = t.get(a).texture;
          return e(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new Pf(c.height);
            return l.fromEquirectangularTexture(s, a), t.set(a, l), a.addEventListener("dispose", i), e(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const c = t.get(o);
    c !== void 0 && (t.delete(o), c.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class ic extends nc {
  constructor(t = -1, e = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, i, r, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = i + e, c = i - e;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += l * this.view.offsetX, a = r + l * this.view.width, o -= h * this.view.offsetY, c = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const Ls = 4, cu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], qi = 20, Wc = /* @__PURE__ */ new ic(), lu = /* @__PURE__ */ new gt();
let Xc = null, qc = 0, Yc = 0, $c = !1;
const Wi = (1 + Math.sqrt(5)) / 2, bs = 1 / Wi, hu = [
  /* @__PURE__ */ new R(-Wi, bs, 0),
  /* @__PURE__ */ new R(Wi, bs, 0),
  /* @__PURE__ */ new R(-bs, 0, Wi),
  /* @__PURE__ */ new R(bs, 0, Wi),
  /* @__PURE__ */ new R(0, Wi, -bs),
  /* @__PURE__ */ new R(0, Wi, bs),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, 1)
];
class wl {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(t, e = 0, n = 0.1, i = 100) {
    Xc = this._renderer.getRenderTarget(), qc = this._renderer.getActiveCubeFace(), Yc = this._renderer.getActiveMipmapLevel(), $c = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = !0, this._sceneToCubeUV(t, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported equirectangular image size is 64 x 32.
   */
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   * The smallest supported cube size is 16 x 16.
   */
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = fu(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = du(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(Xc, qc, Yc), this._renderer.xr.enabled = $c, t.scissorTest = !1, va(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === ui || t.mapping === wi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Xc = this._renderer.getRenderTarget(), qc = this._renderer.getActiveCubeFace(), Yc = this._renderer.getActiveMipmapLevel(), $c = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = {
      magFilter: be,
      minFilter: be,
      generateMipmaps: !1,
      type: Gs,
      format: $e,
      colorSpace: os,
      depthBuffer: !1
    }, i = uu(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = uu(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = rx(r)), this._blurMaterial = ax(r, t, e);
    }
    return i;
  }
  _compileMaterial(t) {
    const e = new qt(this._lodPlanes[0], t);
    this._renderer.compile(e, Wc);
  }
  _sceneToCubeUV(t, e, n, i) {
    const o = new Re(90, 1, e, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(lu), h.toneMapping = Xn, h.autoClear = !1;
    const f = new xn({
      name: "PMREM.Background",
      side: Ue,
      depthWrite: !1,
      depthTest: !1
    }), m = new qt(new ln(), f);
    let _ = !1;
    const g = t.background;
    g ? g.isColor && (f.color.copy(g), t.background = null, _ = !0) : (f.color.copy(lu), _ = !0);
    for (let p = 0; p < 6; p++) {
      const y = p % 3;
      y === 0 ? (o.up.set(0, c[p], 0), o.lookAt(l[p], 0, 0)) : y === 1 ? (o.up.set(0, 0, c[p]), o.lookAt(0, l[p], 0)) : (o.up.set(0, c[p], 0), o.lookAt(0, 0, l[p]));
      const x = this._cubeSize;
      va(i, y * x, p > 2 ? x : 0, x, x), h.setRenderTarget(i), _ && h.render(m, o), h.render(t, o);
    }
    m.geometry.dispose(), m.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = g;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, i = t.mapping === ui || t.mapping === wi;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = fu()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = du());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new qt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const c = this._cubeSize;
    va(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, Wc);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = hu[(i - r - 1) % hu.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(t, e, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      t,
      a,
      e,
      n,
      i,
      "latitudinal",
      r
    ), this._halfBlur(
      a,
      t,
      n,
      n,
      i,
      "longitudinal",
      r
    );
  }
  _halfBlur(t, e, n, i, r, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const h = 3, u = new qt(this._lodPlanes[i], l), d = l.uniforms, f = this._sizeLods[n] - 1, m = isFinite(r) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * qi - 1), _ = r / m, g = isFinite(r) ? 1 + Math.floor(h * _) : qi;
    g > qi && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);
    const p = [];
    let y = 0;
    for (let C = 0; C < qi; ++C) {
      const A = C / _, S = Math.exp(-A * A / 2);
      p.push(S), C === 0 ? y += S : C < g && (y += 2 * S);
    }
    for (let C = 0; C < p.length; C++)
      p[C] = p[C] / y;
    d.envMap.value = t.texture, d.samples.value = g, d.weights.value = p, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: x } = this;
    d.dTheta.value = m, d.mipInt.value = x - n;
    const v = this._sizeLods[i], E = 3 * v * (i > x - Ls ? i - x + Ls : 0), b = 4 * (this._cubeSize - v);
    va(e, E, b, 3 * v, 2 * v), c.setRenderTarget(e), c.render(u, Wc);
  }
}
function rx(s) {
  const t = [], e = [], n = [];
  let i = s;
  const r = s - Ls + 1 + cu.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    e.push(o);
    let c = 1 / o;
    a > s - Ls ? c = cu[a - s + Ls - 1] : a === 0 && (c = 0), n.push(c);
    const l = 1 / (o - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, m = 6, _ = 3, g = 2, p = 1, y = new Float32Array(_ * m * f), x = new Float32Array(g * m * f), v = new Float32Array(p * m * f);
    for (let b = 0; b < f; b++) {
      const C = b % 3 * 2 / 3 - 1, A = b > 2 ? 0 : -1, S = [
        C,
        A,
        0,
        C + 2 / 3,
        A,
        0,
        C + 2 / 3,
        A + 1,
        0,
        C,
        A,
        0,
        C + 2 / 3,
        A + 1,
        0,
        C,
        A + 1,
        0
      ];
      y.set(S, _ * m * b), x.set(d, g * m * b);
      const M = [b, b, b, b, b, b];
      v.set(M, p * m * b);
    }
    const E = new Yt();
    E.setAttribute("position", new ae(y, _)), E.setAttribute("uv", new ae(x, g)), E.setAttribute("faceIndex", new ae(v, p)), t.push(E), i > Ls && i--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function uu(s, t, e) {
  const n = new Rn(s, t, e);
  return n.texture.mapping = Hs, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function va(s, t, e, n, i) {
  s.viewport.set(t, e, n, i), s.scissor.set(t, e, n, i);
}
function ax(s, t, e) {
  const n = new Float32Array(qi), i = new R(0, 1, 0);
  return new vn({
    name: "SphericalGaussianBlur",
    defines: {
      n: qi,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${s}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i }
    },
    vertexShader: nh(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: li,
    depthTest: !1,
    depthWrite: !1
  });
}
function du() {
  return new vn({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: nh(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: li,
    depthTest: !1,
    depthWrite: !1
  });
}
function fu() {
  return new vn({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: nh(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: li,
    depthTest: !1,
    depthWrite: !1
  });
}
function nh() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function ox(s) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === Er || c === Tr, h = c === ui || c === wi;
      if (l || h) {
        let u = t.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return e === null && (e = new wl(s)), u = l ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0)
          return u.texture;
        {
          const f = o.image;
          return l && f && f.height > 0 || h && f && i(f) ? (e === null && (e = new wl(s)), u = l ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let c = 0;
    const l = 6;
    for (let h = 0; h < l; h++)
      o[h] !== void 0 && c++;
    return c === l;
  }
  function r(o) {
    const c = o.target;
    c.removeEventListener("dispose", r);
    const l = t.get(c);
    l !== void 0 && (t.delete(c), l.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return {
    get: n,
    dispose: a
  };
}
function cx(s) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0)
      return t[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return t[n] = i, i;
  }
  return {
    has: function(n) {
      return e(n) !== null;
    },
    init: function() {
      e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
    },
    get: function(n) {
      const i = e(n);
      return i === null && ur("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    }
  };
}
function lx(s, t, e, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const m in d.attributes)
      t.remove(d.attributes[m]);
    for (const m in d.morphAttributes) {
      const _ = d.morphAttributes[m];
      for (let g = 0, p = _.length; g < p; g++)
        t.remove(_[g]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const f = r.get(d);
    f && (t.remove(f), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === !0 || (d.addEventListener("dispose", a), i[d.id] = !0, e.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const m in d)
      t.update(d[m], s.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const m in f) {
      const _ = f[m];
      for (let g = 0, p = _.length; g < p; g++)
        t.update(_[g], s.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], f = u.index, m = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const y = f.array;
      _ = f.version;
      for (let x = 0, v = y.length; x < v; x += 3) {
        const E = y[x + 0], b = y[x + 1], C = y[x + 2];
        d.push(E, b, b, C, C, E);
      }
    } else if (m !== void 0) {
      const y = m.array;
      _ = m.version;
      for (let x = 0, v = y.length / 3 - 1; x < v; x += 3) {
        const E = x + 0, b = x + 1, C = x + 2;
        d.push(E, b, b, C, C, E);
      }
    } else
      return;
    const g = new (bf(d) ? eh : th)(d, 1);
    g.version = _;
    const p = r.get(u);
    p && t.remove(p), r.set(u, g);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && l(u);
    } else
      l(u);
    return r.get(u);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: h
  };
}
function hx(s, t, e) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function c(d, f) {
    s.drawElements(n, f, r, d * a), e.update(f, n, 1);
  }
  function l(d, f, m) {
    m !== 0 && (s.drawElementsInstanced(n, f, r, d * a, m), e.update(f, n, m));
  }
  function h(d, f, m) {
    if (m === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, d, 0, m);
    let g = 0;
    for (let p = 0; p < m; p++)
      g += f[p];
    e.update(g, n, 1);
  }
  function u(d, f, m, _) {
    if (m === 0) return;
    const g = t.get("WEBGL_multi_draw");
    if (g === null)
      for (let p = 0; p < d.length; p++)
        l(d[p] / a, f[p], _[p]);
    else {
      g.multiDrawElementsInstancedWEBGL(n, f, 0, r, d, 0, _, 0, m);
      let p = 0;
      for (let y = 0; y < m; y++)
        p += f[y] * _[y];
      e.update(p, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = c, this.renderInstances = l, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function ux(s) {
  const t = {
    geometries: 0,
    textures: 0
  }, e = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case s.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case s.LINES:
        e.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        e.lines += o * r;
        break;
      case s.POINTS:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n
  };
}
function dx(s, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Zt();
  function r(a, o, c) {
    const l = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let S = function() {
        C.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      d !== void 0 && d.texture.dispose();
      const f = o.morphAttributes.position !== void 0, m = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, g = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], y = o.morphAttributes.color || [];
      let x = 0;
      f === !0 && (x = 1), m === !0 && (x = 2), _ === !0 && (x = 3);
      let v = o.attributes.position.count * x, E = 1;
      v > t.maxTextureSize && (E = Math.ceil(v / t.maxTextureSize), v = t.maxTextureSize);
      const b = new Float32Array(v * E * 4 * u), C = new Qo(b, v, E, u);
      C.type = tn, C.needsUpdate = !0;
      const A = x * 4;
      for (let M = 0; M < u; M++) {
        const I = g[M], O = p[M], N = y[M], U = v * E * 4 * M;
        for (let q = 0; q < I.count; q++) {
          const V = q * A;
          f === !0 && (i.fromBufferAttribute(I, q), b[U + V + 0] = i.x, b[U + V + 1] = i.y, b[U + V + 2] = i.z, b[U + V + 3] = 0), m === !0 && (i.fromBufferAttribute(O, q), b[U + V + 4] = i.x, b[U + V + 5] = i.y, b[U + V + 6] = i.z, b[U + V + 7] = 0), _ === !0 && (i.fromBufferAttribute(N, q), b[U + V + 8] = i.x, b[U + V + 9] = i.y, b[U + V + 10] = i.z, b[U + V + 11] = N.itemSize === 4 ? i.w : 1);
        }
      }
      d = {
        count: u,
        texture: C,
        size: new nt(v, E)
      }, n.set(o, d), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(s, "morphTexture", a.morphTexture, e);
    else {
      let f = 0;
      for (let _ = 0; _ < l.length; _++)
        f += l[_];
      const m = o.morphTargetsRelative ? 1 : 1 - f;
      c.getUniforms().setValue(s, "morphTargetBaseInfluence", m), c.getUniforms().setValue(s, "morphTargetInfluences", l);
    }
    c.getUniforms().setValue(s, "morphTargetsTexture", d.texture, e), c.getUniforms().setValue(s, "morphTargetsTextureSize", d.size);
  }
  return {
    update: r
  };
}
function fx(s, t, e, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(c) {
    const l = n.render.frame, h = c.geometry, u = t.get(c, h);
    if (i.get(u) !== l && (t.update(u), i.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), i.get(c) !== l && (e.update(c.instanceMatrix, s.ARRAY_BUFFER), c.instanceColor !== null && e.update(c.instanceColor, s.ARRAY_BUFFER), i.set(c, l))), c.isSkinnedMesh) {
      const d = c.skeleton;
      i.get(d) !== l && (d.update(), i.set(d, l));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), e.remove(l.instanceMatrix), l.instanceColor !== null && e.remove(l.instanceColor);
  }
  return {
    update: r,
    dispose: a
  };
}
class ih extends _e {
  constructor(t, e, n, i, r, a, o, c, l, h = ji) {
    if (h !== ji && h !== ss)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === ji && (n = di), n === void 0 && h === ss && (n = is), super(null, i, r, a, o, c, h, n, l), this.isDepthTexture = !0, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : Ne, this.minFilter = c !== void 0 ? c : Ne, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Lf = /* @__PURE__ */ new _e(), pu = /* @__PURE__ */ new ih(1, 1), Df = /* @__PURE__ */ new Qo(), Uf = /* @__PURE__ */ new Ql(), Nf = /* @__PURE__ */ new Wr(), mu = [], gu = [], _u = new Float32Array(16), xu = new Float32Array(9), vu = new Float32Array(4);
function Xs(s, t, e) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = t * e;
  let r = mu[i];
  if (r === void 0 && (r = new Float32Array(i), mu[i] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a)
      o += e, s[a].toArray(r, o);
  }
  return r;
}
function Ee(s, t) {
  if (s.length !== t.length) return !1;
  for (let e = 0, n = s.length; e < n; e++)
    if (s[e] !== t[e]) return !1;
  return !0;
}
function Te(s, t) {
  for (let e = 0, n = t.length; e < n; e++)
    s[e] = t[e];
}
function sc(s, t) {
  let e = gu[t];
  e === void 0 && (e = new Int32Array(t), gu[t] = e);
  for (let n = 0; n !== t; ++n)
    e[n] = s.allocateTextureUnit();
  return e;
}
function px(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1f(this.addr, t), e[0] = t);
}
function mx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Ee(e, t)) return;
    s.uniform2fv(this.addr, t), Te(e, t);
  }
}
function gx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (s.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (Ee(e, t)) return;
    s.uniform3fv(this.addr, t), Te(e, t);
  }
}
function _x(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Ee(e, t)) return;
    s.uniform4fv(this.addr, t), Te(e, t);
  }
}
function xx(s, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ee(e, t)) return;
    s.uniformMatrix2fv(this.addr, !1, t), Te(e, t);
  } else {
    if (Ee(e, n)) return;
    vu.set(n), s.uniformMatrix2fv(this.addr, !1, vu), Te(e, n);
  }
}
function vx(s, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ee(e, t)) return;
    s.uniformMatrix3fv(this.addr, !1, t), Te(e, t);
  } else {
    if (Ee(e, n)) return;
    xu.set(n), s.uniformMatrix3fv(this.addr, !1, xu), Te(e, n);
  }
}
function yx(s, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (Ee(e, t)) return;
    s.uniformMatrix4fv(this.addr, !1, t), Te(e, t);
  } else {
    if (Ee(e, n)) return;
    _u.set(n), s.uniformMatrix4fv(this.addr, !1, _u), Te(e, n);
  }
}
function Mx(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1i(this.addr, t), e[0] = t);
}
function Sx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Ee(e, t)) return;
    s.uniform2iv(this.addr, t), Te(e, t);
  }
}
function bx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Ee(e, t)) return;
    s.uniform3iv(this.addr, t), Te(e, t);
  }
}
function wx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Ee(e, t)) return;
    s.uniform4iv(this.addr, t), Te(e, t);
  }
}
function Ex(s, t) {
  const e = this.cache;
  e[0] !== t && (s.uniform1ui(this.addr, t), e[0] = t);
}
function Tx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) && (s.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (Ee(e, t)) return;
    s.uniform2uiv(this.addr, t), Te(e, t);
  }
}
function Ax(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (s.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (Ee(e, t)) return;
    s.uniform3uiv(this.addr, t), Te(e, t);
  }
}
function Cx(s, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (s.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (Ee(e, t)) return;
    s.uniform4uiv(this.addr, t), Te(e, t);
  }
}
function Rx(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (pu.compareFunction = Jl, r = pu) : r = Lf, e.setTexture2D(t || r, i);
}
function Px(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTexture3D(t || Uf, i);
}
function Ix(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTextureCube(t || Nf, i);
}
function Lx(s, t, e) {
  const n = this.cache, i = e.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), e.setTexture2DArray(t || Df, i);
}
function Dx(s) {
  switch (s) {
    case 5126:
      return px;
    // FLOAT
    case 35664:
      return mx;
    // _VEC2
    case 35665:
      return gx;
    // _VEC3
    case 35666:
      return _x;
    // _VEC4
    case 35674:
      return xx;
    // _MAT2
    case 35675:
      return vx;
    // _MAT3
    case 35676:
      return yx;
    // _MAT4
    case 5124:
    case 35670:
      return Mx;
    // INT, BOOL
    case 35667:
    case 35671:
      return Sx;
    // _VEC2
    case 35668:
    case 35672:
      return bx;
    // _VEC3
    case 35669:
    case 35673:
      return wx;
    // _VEC4
    case 5125:
      return Ex;
    // UINT
    case 36294:
      return Tx;
    // _VEC2
    case 36295:
      return Ax;
    // _VEC3
    case 36296:
      return Cx;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Rx;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Px;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Ix;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return Lx;
  }
}
function Ux(s, t) {
  s.uniform1fv(this.addr, t);
}
function Nx(s, t) {
  const e = Xs(t, this.size, 2);
  s.uniform2fv(this.addr, e);
}
function Fx(s, t) {
  const e = Xs(t, this.size, 3);
  s.uniform3fv(this.addr, e);
}
function Ox(s, t) {
  const e = Xs(t, this.size, 4);
  s.uniform4fv(this.addr, e);
}
function Bx(s, t) {
  const e = Xs(t, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, e);
}
function zx(s, t) {
  const e = Xs(t, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, e);
}
function kx(s, t) {
  const e = Xs(t, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, e);
}
function Vx(s, t) {
  s.uniform1iv(this.addr, t);
}
function Hx(s, t) {
  s.uniform2iv(this.addr, t);
}
function Gx(s, t) {
  s.uniform3iv(this.addr, t);
}
function Wx(s, t) {
  s.uniform4iv(this.addr, t);
}
function Xx(s, t) {
  s.uniform1uiv(this.addr, t);
}
function qx(s, t) {
  s.uniform2uiv(this.addr, t);
}
function Yx(s, t) {
  s.uniform3uiv(this.addr, t);
}
function $x(s, t) {
  s.uniform4uiv(this.addr, t);
}
function Zx(s, t, e) {
  const n = this.cache, i = t.length, r = sc(e, i);
  Ee(n, r) || (s.uniform1iv(this.addr, r), Te(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTexture2D(t[a] || Lf, r[a]);
}
function Jx(s, t, e) {
  const n = this.cache, i = t.length, r = sc(e, i);
  Ee(n, r) || (s.uniform1iv(this.addr, r), Te(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTexture3D(t[a] || Uf, r[a]);
}
function Kx(s, t, e) {
  const n = this.cache, i = t.length, r = sc(e, i);
  Ee(n, r) || (s.uniform1iv(this.addr, r), Te(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTextureCube(t[a] || Nf, r[a]);
}
function jx(s, t, e) {
  const n = this.cache, i = t.length, r = sc(e, i);
  Ee(n, r) || (s.uniform1iv(this.addr, r), Te(n, r));
  for (let a = 0; a !== i; ++a)
    e.setTexture2DArray(t[a] || Df, r[a]);
}
function Qx(s) {
  switch (s) {
    case 5126:
      return Ux;
    // FLOAT
    case 35664:
      return Nx;
    // _VEC2
    case 35665:
      return Fx;
    // _VEC3
    case 35666:
      return Ox;
    // _VEC4
    case 35674:
      return Bx;
    // _MAT2
    case 35675:
      return zx;
    // _MAT3
    case 35676:
      return kx;
    // _MAT4
    case 5124:
    case 35670:
      return Vx;
    // INT, BOOL
    case 35667:
    case 35671:
      return Hx;
    // _VEC2
    case 35668:
    case 35672:
      return Gx;
    // _VEC3
    case 35669:
    case 35673:
      return Wx;
    // _VEC4
    case 5125:
      return Xx;
    // UINT
    case 36294:
      return qx;
    // _VEC2
    case 36295:
      return Yx;
    // _VEC3
    case 36296:
      return $x;
    // _VEC4
    case 35678:
    // SAMPLER_2D
    case 36198:
    // SAMPLER_EXTERNAL_OES
    case 36298:
    // INT_SAMPLER_2D
    case 36306:
    // UNSIGNED_INT_SAMPLER_2D
    case 35682:
      return Zx;
    case 35679:
    // SAMPLER_3D
    case 36299:
    // INT_SAMPLER_3D
    case 36307:
      return Jx;
    case 35680:
    // SAMPLER_CUBE
    case 36300:
    // INT_SAMPLER_CUBE
    case 36308:
    // UNSIGNED_INT_SAMPLER_CUBE
    case 36293:
      return Kx;
    case 36289:
    // SAMPLER_2D_ARRAY
    case 36303:
    // INT_SAMPLER_2D_ARRAY
    case 36311:
    // UNSIGNED_INT_SAMPLER_2D_ARRAY
    case 36292:
      return jx;
  }
}
class tv {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = Dx(e.type);
  }
}
class ev {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Qx(e.type);
  }
}
class nv {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const Zc = /(\w+)(\])?(\[|\.)?/g;
function yu(s, t) {
  s.seq.push(t), s.map[t.id] = t;
}
function iv(s, t, e) {
  const n = s.name, i = n.length;
  for (Zc.lastIndex = 0; ; ) {
    const r = Zc.exec(n), a = Zc.lastIndex;
    let o = r[1];
    const c = r[2] === "]", l = r[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === i) {
      yu(e, l === void 0 ? new tv(o, s, t) : new ev(o, s, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new nv(o), yu(e, u)), e = u;
    }
  }
}
class Ka {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = t.getActiveUniform(e, i), a = t.getUniformLocation(e, r.name);
      iv(r, a, this);
    }
  }
  setValue(t, e, n, i) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, i);
  }
  setOptional(t, e, n) {
    const i = e[n];
    i !== void 0 && this.setValue(t, n, i);
  }
  static upload(t, e, n, i) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(t, c.value, i);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let i = 0, r = t.length; i !== r; ++i) {
      const a = t[i];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Mu(s, t, e) {
  const n = s.createShader(t);
  return s.shaderSource(n, e), s.compileShader(n), n;
}
const sv = 37297;
let rv = 0;
function av(s, t) {
  const e = s.split(`
`), n = [], i = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Su = /* @__PURE__ */ new Vt();
function ov(s) {
  Kt._getMatrix(Su, Kt.workingColorSpace, s);
  const t = `mat3( ${Su.elements.map((e) => e.toFixed(4))} )`;
  switch (Kt.getTransfer(s)) {
    case Gr:
      return [t, "LinearTransferOETF"];
    case re:
      return [t, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [t, "LinearTransferOETF"];
  }
}
function bu(s, t, e) {
  const n = s.getShaderParameter(t, s.COMPILE_STATUS), i = s.getShaderInfoLog(t).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return e.toUpperCase() + `

` + i + `

` + av(s.getShaderSource(t), a);
  } else
    return i;
}
function cv(s, t) {
  const e = ov(t);
  return [
    `vec4 ${s}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}"
  ].join(`
`);
}
function lv(s, t) {
  let e;
  switch (t) {
    case ef:
      e = "Linear";
      break;
    case nf:
      e = "Reinhard";
      break;
    case sf:
      e = "Cineon";
      break;
    case rf:
      e = "ACESFilmic";
      break;
    case of:
      e = "AgX";
      break;
    case cf:
      e = "Neutral";
      break;
    case af:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const ya = /* @__PURE__ */ new R();
function hv() {
  Kt.getLuminanceCoefficients(ya);
  const s = ya.x.toFixed(4), t = ya.y.toFixed(4), e = ya.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}"
  ].join(`
`);
}
function uv(s) {
  return [
    s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(fr).join(`
`);
}
function dv(s) {
  const t = [];
  for (const e in s) {
    const n = s[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function fv(s, t) {
  const e = {}, n = s.getProgramParameter(t, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(t, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), e[a] = {
      type: r.type,
      location: s.getAttribLocation(t, a),
      locationSize: o
    };
  }
  return e;
}
function fr(s) {
  return s !== "";
}
function wu(s, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Eu(s, t) {
  return s.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const pv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function El(s) {
  return s.replace(pv, gv);
}
const mv = /* @__PURE__ */ new Map();
function gv(s, t) {
  let e = Xt[t];
  if (e === void 0) {
    const n = mv.get(t);
    if (n !== void 0)
      e = Xt[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else
      throw new Error("Can not resolve #include <" + t + ">");
  }
  return El(e);
}
const _v = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Tu(s) {
  return s.replace(_v, xv);
}
function xv(s, t, e, n) {
  let i = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Au(s) {
  let t = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? t += `
#define HIGH_PRECISION` : s.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function vv(s) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Ol ? t = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Bl ? t = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === kn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function yv(s) {
  let t = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case ui:
      case wi:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case Hs:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Mv(s) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case wi:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Sv(s) {
  let t = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Vr:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Qd:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case tf:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function bv(s) {
  const t = s.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: n, maxMip: e };
}
function wv(s, t, e, n) {
  const i = s.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const c = vv(e), l = yv(e), h = Mv(e), u = Sv(e), d = bv(e), f = uv(e), m = dv(r), _ = i.createProgram();
  let g, p, y = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (g = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m
  ].filter(fr).join(`
`), g.length > 0 && (g += `
`), p = [
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m
  ].filter(fr).join(`
`), p.length > 0 && (p += `
`)) : (g = [
    Au(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m,
    e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    e.batching ? "#define USE_BATCHING" : "",
    e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
    e.instancing ? "#define USE_INSTANCING" : "",
    e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.map ? "#define USE_MAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + h : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    e.mapUv ? "#define MAP_UV " + e.mapUv : "",
    e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
    e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
    e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
    e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
    e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
    e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
    e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "",
    e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
    e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
    e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "",
    e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
    e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "",
    e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "",
    e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "",
    e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "",
    e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "",
    e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "",
    e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
    e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "",
    e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "",
    e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "",
    e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
    //
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.skinning ? "#define USE_SKINNING" : "",
    e.morphTargets ? "#define USE_MORPHTARGETS" : "",
    e.morphNormals && e.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    e.morphColors ? "#define USE_MORPHCOLORS" : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "",
    e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + c : "",
    e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "#ifdef USE_INSTANCING_MORPH",
    "	uniform sampler2D morphTexture;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(fr).join(`
`), p = [
    Au(e),
    "#define SHADER_TYPE " + e.shaderType,
    "#define SHADER_NAME " + e.shaderName,
    m,
    e.useFog && e.fog ? "#define USE_FOG" : "",
    e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
    e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    e.map ? "#define USE_MAP" : "",
    e.matcap ? "#define USE_MATCAP" : "",
    e.envMap ? "#define USE_ENVMAP" : "",
    e.envMap ? "#define " + l : "",
    e.envMap ? "#define " + h : "",
    e.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
    e.lightMap ? "#define USE_LIGHTMAP" : "",
    e.aoMap ? "#define USE_AOMAP" : "",
    e.bumpMap ? "#define USE_BUMPMAP" : "",
    e.normalMap ? "#define USE_NORMALMAP" : "",
    e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    e.anisotropy ? "#define USE_ANISOTROPY" : "",
    e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    e.clearcoat ? "#define USE_CLEARCOAT" : "",
    e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    e.dispersion ? "#define USE_DISPERSION" : "",
    e.iridescence ? "#define USE_IRIDESCENCE" : "",
    e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    e.specularMap ? "#define USE_SPECULARMAP" : "",
    e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    e.metalnessMap ? "#define USE_METALNESSMAP" : "",
    e.alphaMap ? "#define USE_ALPHAMAP" : "",
    e.alphaTest ? "#define USE_ALPHATEST" : "",
    e.alphaHash ? "#define USE_ALPHAHASH" : "",
    e.sheen ? "#define USE_SHEEN" : "",
    e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    e.transmission ? "#define USE_TRANSMISSION" : "",
    e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
    e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "",
    e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    e.vertexUv1s ? "#define USE_UV1" : "",
    e.vertexUv2s ? "#define USE_UV2" : "",
    e.vertexUv3s ? "#define USE_UV3" : "",
    e.pointsUvs ? "#define USE_POINTS_UV" : "",
    e.gradientMap ? "#define USE_GRADIENTMAP" : "",
    e.flatShading ? "#define FLAT_SHADED" : "",
    e.doubleSided ? "#define DOUBLE_SIDED" : "",
    e.flipSided ? "#define FLIP_SIDED" : "",
    e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    e.shadowMapEnabled ? "#define " + c : "",
    e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
    e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    e.toneMapping !== Xn ? "#define TONE_MAPPING" : "",
    e.toneMapping !== Xn ? Xt.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    e.toneMapping !== Xn ? lv("toneMapping", e.toneMapping) : "",
    e.dithering ? "#define DITHERING" : "",
    e.opaque ? "#define OPAQUE" : "",
    Xt.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    cv("linearToOutputTexel", e.outputColorSpace),
    hv(),
    e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
    `
`
  ].filter(fr).join(`
`)), a = El(a), a = wu(a, e), a = Eu(a, e), o = El(o), o = wu(o, e), o = Eu(o, e), a = Tu(a), o = Tu(o), e.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, g = [
    f,
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + g, p = [
    "#define varying in",
    e.glslVersion === bl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    e.glslVersion === bl ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + p);
  const x = y + g + a, v = y + p + o, E = Mu(i, i.VERTEX_SHADER, x), b = Mu(i, i.FRAGMENT_SHADER, v);
  i.attachShader(_, E), i.attachShader(_, b), e.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, e.index0AttributeName) : e.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function C(I) {
    if (s.debug.checkShaderErrors) {
      const O = i.getProgramInfoLog(_).trim(), N = i.getShaderInfoLog(E).trim(), U = i.getShaderInfoLog(b).trim();
      let q = !0, V = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (q = !1, typeof s.debug.onShaderError == "function")
          s.debug.onShaderError(i, _, E, b);
        else {
          const j = bu(i, E, "vertex"), G = bu(i, b, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + I.name + `
Material Type: ` + I.type + `

Program Info Log: ` + O + `
` + j + `
` + G
          );
        }
      else O !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", O) : (N === "" || U === "") && (V = !1);
      V && (I.diagnostics = {
        runnable: q,
        programLog: O,
        vertexShader: {
          log: N,
          prefix: g
        },
        fragmentShader: {
          log: U,
          prefix: p
        }
      });
    }
    i.deleteShader(E), i.deleteShader(b), A = new Ka(i, _), S = fv(i, _);
  }
  let A;
  this.getUniforms = function() {
    return A === void 0 && C(this), A;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && C(this), S;
  };
  let M = e.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return M === !1 && (M = i.getProgramParameter(_, sv)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = rv++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = E, this.fragmentShader = b, this;
}
let Ev = 0;
class Tv {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(i) === !1 && (a.add(i), i.usedTimes++), a.has(r) === !1 && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new Av(t), e.set(t, n)), n;
  }
}
class Av {
  constructor(t) {
    this.id = Ev++, this.code = t, this.usedTimes = 0;
  }
}
function Cv(s, t, e, n, i, r, a) {
  const o = new tc(), c = new Tv(), l = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let f = i.precision;
  const m = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function _(S) {
    return l.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function g(S, M, I, O, N) {
    const U = O.fog, q = N.geometry, V = S.isMeshStandardMaterial ? O.environment : null, j = (S.isMeshStandardMaterial ? e : t).get(S.envMap || V), G = j && j.mapping === Hs ? j.image.height : null, st = m[S.type];
    S.precision !== null && (f = i.getMaxPrecision(S.precision), f !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", f, "instead."));
    const dt = q.morphAttributes.position || q.morphAttributes.normal || q.morphAttributes.color, Z = dt !== void 0 ? dt.length : 0;
    let ot = 0;
    q.morphAttributes.position !== void 0 && (ot = 1), q.morphAttributes.normal !== void 0 && (ot = 2), q.morphAttributes.color !== void 0 && (ot = 3);
    let Rt, D, k, H;
    if (st) {
      const se = Xe[st];
      Rt = se.vertexShader, D = se.fragmentShader;
    } else
      Rt = S.vertexShader, D = S.fragmentShader, c.update(S), k = c.getVertexShaderID(S), H = c.getFragmentShaderID(S);
    const X = s.getRenderTarget(), Q = s.state.buffers.depth.getReversed(), at = N.isInstancedMesh === !0, ct = N.isBatchedMesh === !0, Ut = !!S.map, J = !!S.matcap, lt = !!j, L = !!S.aoMap, wt = !!S.lightMap, ht = !!S.bumpMap, Et = !!S.normalMap, mt = !!S.displacementMap, Ot = !!S.emissiveMap, St = !!S.metalnessMap, P = !!S.roughnessMap, w = S.anisotropy > 0, W = S.clearcoat > 0, tt = S.dispersion > 0, rt = S.iridescence > 0, et = S.sheen > 0, Pt = S.transmission > 0, _t = w && !!S.anisotropyMap, bt = W && !!S.clearcoatMap, Jt = W && !!S.clearcoatNormalMap, ut = W && !!S.clearcoatRoughnessMap, Tt = rt && !!S.iridescenceMap, Bt = rt && !!S.iridescenceThicknessMap, zt = et && !!S.sheenColorMap, At = et && !!S.sheenRoughnessMap, jt = !!S.specularMap, $t = !!S.specularColorMap, oe = !!S.specularIntensityMap, F = Pt && !!S.transmissionMap, xt = Pt && !!S.thicknessMap, K = !!S.gradientMap, it = !!S.alphaMap, Mt = S.alphaTest > 0, vt = !!S.alphaHash, Gt = !!S.extensions;
    let pe = Xn;
    S.toneMapped && (X === null || X.isXRRenderTarget === !0) && (pe = s.toneMapping);
    const Fe = {
      shaderID: st,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: Rt,
      fragmentShader: D,
      defines: S.defines,
      customVertexShaderID: k,
      customFragmentShaderID: H,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: f,
      batching: ct,
      batchingColor: ct && N._colorsTexture !== null,
      instancing: at,
      instancingColor: at && N.instanceColor !== null,
      instancingMorph: at && N.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace: X === null ? s.outputColorSpace : X.isXRRenderTarget === !0 ? X.texture.colorSpace : os,
      alphaToCoverage: !!S.alphaToCoverage,
      map: Ut,
      matcap: J,
      envMap: lt,
      envMapMode: lt && j.mapping,
      envMapCubeUVHeight: G,
      aoMap: L,
      lightMap: wt,
      bumpMap: ht,
      normalMap: Et,
      displacementMap: d && mt,
      emissiveMap: Ot,
      normalMapObjectSpace: Et && S.normalMapType === mf,
      normalMapTangentSpace: Et && S.normalMapType === Ti,
      metalnessMap: St,
      roughnessMap: P,
      anisotropy: w,
      anisotropyMap: _t,
      clearcoat: W,
      clearcoatMap: bt,
      clearcoatNormalMap: Jt,
      clearcoatRoughnessMap: ut,
      dispersion: tt,
      iridescence: rt,
      iridescenceMap: Tt,
      iridescenceThicknessMap: Bt,
      sheen: et,
      sheenColorMap: zt,
      sheenRoughnessMap: At,
      specularMap: jt,
      specularColorMap: $t,
      specularIntensityMap: oe,
      transmission: Pt,
      transmissionMap: F,
      thicknessMap: xt,
      gradientMap: K,
      opaque: S.transparent === !1 && S.blending === Ki && S.alphaToCoverage === !1,
      alphaMap: it,
      alphaTest: Mt,
      alphaHash: vt,
      combine: S.combine,
      //
      mapUv: Ut && _(S.map.channel),
      aoMapUv: L && _(S.aoMap.channel),
      lightMapUv: wt && _(S.lightMap.channel),
      bumpMapUv: ht && _(S.bumpMap.channel),
      normalMapUv: Et && _(S.normalMap.channel),
      displacementMapUv: mt && _(S.displacementMap.channel),
      emissiveMapUv: Ot && _(S.emissiveMap.channel),
      metalnessMapUv: St && _(S.metalnessMap.channel),
      roughnessMapUv: P && _(S.roughnessMap.channel),
      anisotropyMapUv: _t && _(S.anisotropyMap.channel),
      clearcoatMapUv: bt && _(S.clearcoatMap.channel),
      clearcoatNormalMapUv: Jt && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ut && _(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Tt && _(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: Bt && _(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: zt && _(S.sheenColorMap.channel),
      sheenRoughnessMapUv: At && _(S.sheenRoughnessMap.channel),
      specularMapUv: jt && _(S.specularMap.channel),
      specularColorMapUv: $t && _(S.specularColorMap.channel),
      specularIntensityMapUv: oe && _(S.specularIntensityMap.channel),
      transmissionMapUv: F && _(S.transmissionMap.channel),
      thicknessMapUv: xt && _(S.thicknessMap.channel),
      alphaMapUv: it && _(S.alphaMap.channel),
      //
      vertexTangents: !!q.attributes.tangent && (Et || w),
      vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!q.attributes.color && q.attributes.color.itemSize === 4,
      pointsUvs: N.isPoints === !0 && !!q.attributes.uv && (Ut || it),
      fog: !!U,
      useFog: S.fog === !0,
      fogExp2: !!U && U.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reverseDepthBuffer: Q,
      skinning: N.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: Z,
      morphTextureStride: ot,
      numDirLights: M.directional.length,
      numPointLights: M.point.length,
      numSpotLights: M.spot.length,
      numSpotLightMaps: M.spotLightMap.length,
      numRectAreaLights: M.rectArea.length,
      numHemiLights: M.hemi.length,
      numDirLightShadows: M.directionalShadowMap.length,
      numPointLightShadows: M.pointShadowMap.length,
      numSpotLightShadows: M.spotShadowMap.length,
      numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps,
      numLightProbes: M.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: s.shadowMap.enabled && I.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: pe,
      decodeVideoTexture: Ut && S.map.isVideoTexture === !0 && Kt.getTransfer(S.map.colorSpace) === re,
      decodeVideoTextureEmissive: Ot && S.emissiveMap.isVideoTexture === !0 && Kt.getTransfer(S.emissiveMap.colorSpace) === re,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === gn,
      flipSided: S.side === Ue,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionClipCullDistance: Gt && S.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: (Gt && S.extensions.multiDraw === !0 || ct) && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey()
    };
    return Fe.vertexUv1s = l.has(1), Fe.vertexUv2s = l.has(2), Fe.vertexUv3s = l.has(3), l.clear(), Fe;
  }
  function p(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const I in S.defines)
        M.push(I), M.push(S.defines[I]);
    return S.isRawShaderMaterial === !1 && (y(M, S), x(M, S), M.push(s.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function y(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function x(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function v(S) {
    const M = m[S.type];
    let I;
    if (M) {
      const O = Xe[M];
      I = ec.clone(O.uniforms);
    } else
      I = S.uniforms;
    return I;
  }
  function E(S, M) {
    let I;
    for (let O = 0, N = h.length; O < N; O++) {
      const U = h[O];
      if (U.cacheKey === M) {
        I = U, ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && (I = new wv(s, M, S, r), h.push(I)), I;
  }
  function b(S) {
    if (--S.usedTimes === 0) {
      const M = h.indexOf(S);
      h[M] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function C(S) {
    c.remove(S);
  }
  function A() {
    c.dispose();
  }
  return {
    getParameters: g,
    getProgramCacheKey: p,
    getUniforms: v,
    acquireProgram: E,
    releaseProgram: b,
    releaseShaderCache: C,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: h,
    dispose: A
  };
}
function Rv() {
  let s = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return s.has(a);
  }
  function e(a) {
    let o = s.get(a);
    return o === void 0 && (o = {}, s.set(a, o)), o;
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, c) {
    s.get(a)[o] = c;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    has: t,
    get: e,
    remove: n,
    update: i,
    dispose: r
  };
}
function Pv(s, t) {
  return s.groupOrder !== t.groupOrder ? s.groupOrder - t.groupOrder : s.renderOrder !== t.renderOrder ? s.renderOrder - t.renderOrder : s.material.id !== t.material.id ? s.material.id - t.material.id : s.z !== t.z ? s.z - t.z : s.id - t.id;
}
function Cu(s, t) {
  return s.groupOrder !== t.groupOrder ? s.groupOrder - t.groupOrder : s.renderOrder !== t.renderOrder ? s.renderOrder - t.renderOrder : s.z !== t.z ? t.z - s.z : s.id - t.id;
}
function Ru() {
  const s = [];
  let t = 0;
  const e = [], n = [], i = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, f, m, _, g) {
    let p = s[t];
    return p === void 0 ? (p = {
      id: u.id,
      object: u,
      geometry: d,
      material: f,
      groupOrder: m,
      renderOrder: u.renderOrder,
      z: _,
      group: g
    }, s[t] = p) : (p.id = u.id, p.object = u, p.geometry = d, p.material = f, p.groupOrder = m, p.renderOrder = u.renderOrder, p.z = _, p.group = g), t++, p;
  }
  function o(u, d, f, m, _, g) {
    const p = a(u, d, f, m, _, g);
    f.transmission > 0 ? n.push(p) : f.transparent === !0 ? i.push(p) : e.push(p);
  }
  function c(u, d, f, m, _, g) {
    const p = a(u, d, f, m, _, g);
    f.transmission > 0 ? n.unshift(p) : f.transparent === !0 ? i.unshift(p) : e.unshift(p);
  }
  function l(u, d) {
    e.length > 1 && e.sort(u || Pv), n.length > 1 && n.sort(d || Cu), i.length > 1 && i.sort(d || Cu);
  }
  function h() {
    for (let u = t, d = s.length; u < d; u++) {
      const f = s[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Iv() {
  let s = /* @__PURE__ */ new WeakMap();
  function t(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new Ru(), s.set(n, [a])) : i >= r.length ? (a = new Ru(), r.push(a)) : a = r[i], a;
  }
  function e() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: t,
    dispose: e
  };
}
function Lv() {
  const s = {};
  return {
    get: function(t) {
      if (s[t.id] !== void 0)
        return s[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            direction: new R(),
            color: new gt()
          };
          break;
        case "SpotLight":
          e = {
            position: new R(),
            direction: new R(),
            color: new gt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          e = {
            position: new R(),
            color: new gt(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          e = {
            direction: new R(),
            skyColor: new gt(),
            groundColor: new gt()
          };
          break;
        case "RectAreaLight":
          e = {
            color: new gt(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return s[t.id] = e, e;
    }
  };
}
function Dv() {
  const s = {};
  return {
    get: function(t) {
      if (s[t.id] !== void 0)
        return s[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new nt()
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new nt()
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new nt(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return s[t.id] = e, e;
    }
  };
}
let Uv = 0;
function Nv(s, t) {
  return (t.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Fv(s) {
  const t = new Lv(), e = Dv(), n = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let l = 0; l < 9; l++) n.probe.push(new R());
  const i = new R(), r = new Ft(), a = new Ft();
  function o(l) {
    let h = 0, u = 0, d = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let f = 0, m = 0, _ = 0, g = 0, p = 0, y = 0, x = 0, v = 0, E = 0, b = 0, C = 0;
    l.sort(Nv);
    for (let S = 0, M = l.length; S < M; S++) {
      const I = l[S], O = I.color, N = I.intensity, U = I.distance, q = I.shadow && I.shadow.map ? I.shadow.map.texture : null;
      if (I.isAmbientLight)
        h += O.r * N, u += O.g * N, d += O.b * N;
      else if (I.isLightProbe) {
        for (let V = 0; V < 9; V++)
          n.probe[V].addScaledVector(I.sh.coefficients[V], N);
        C++;
      } else if (I.isDirectionalLight) {
        const V = t.get(I);
        if (V.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow) {
          const j = I.shadow, G = e.get(I);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, n.directionalShadow[f] = G, n.directionalShadowMap[f] = q, n.directionalShadowMatrix[f] = I.shadow.matrix, y++;
        }
        n.directional[f] = V, f++;
      } else if (I.isSpotLight) {
        const V = t.get(I);
        V.position.setFromMatrixPosition(I.matrixWorld), V.color.copy(O).multiplyScalar(N), V.distance = U, V.coneCos = Math.cos(I.angle), V.penumbraCos = Math.cos(I.angle * (1 - I.penumbra)), V.decay = I.decay, n.spot[_] = V;
        const j = I.shadow;
        if (I.map && (n.spotLightMap[E] = I.map, E++, j.updateMatrices(I), I.castShadow && b++), n.spotLightMatrix[_] = j.matrix, I.castShadow) {
          const G = e.get(I);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, n.spotShadow[_] = G, n.spotShadowMap[_] = q, v++;
        }
        _++;
      } else if (I.isRectAreaLight) {
        const V = t.get(I);
        V.color.copy(O).multiplyScalar(N), V.halfWidth.set(I.width * 0.5, 0, 0), V.halfHeight.set(0, I.height * 0.5, 0), n.rectArea[g] = V, g++;
      } else if (I.isPointLight) {
        const V = t.get(I);
        if (V.color.copy(I.color).multiplyScalar(I.intensity), V.distance = I.distance, V.decay = I.decay, I.castShadow) {
          const j = I.shadow, G = e.get(I);
          G.shadowIntensity = j.intensity, G.shadowBias = j.bias, G.shadowNormalBias = j.normalBias, G.shadowRadius = j.radius, G.shadowMapSize = j.mapSize, G.shadowCameraNear = j.camera.near, G.shadowCameraFar = j.camera.far, n.pointShadow[m] = G, n.pointShadowMap[m] = q, n.pointShadowMatrix[m] = I.shadow.matrix, x++;
        }
        n.point[m] = V, m++;
      } else if (I.isHemisphereLight) {
        const V = t.get(I);
        V.skyColor.copy(I.color).multiplyScalar(N), V.groundColor.copy(I.groundColor).multiplyScalar(N), n.hemi[p] = V, p++;
      }
    }
    g > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = pt.LTC_FLOAT_1, n.rectAreaLTC2 = pt.LTC_FLOAT_2) : (n.rectAreaLTC1 = pt.LTC_HALF_1, n.rectAreaLTC2 = pt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const A = n.hash;
    (A.directionalLength !== f || A.pointLength !== m || A.spotLength !== _ || A.rectAreaLength !== g || A.hemiLength !== p || A.numDirectionalShadows !== y || A.numPointShadows !== x || A.numSpotShadows !== v || A.numSpotMaps !== E || A.numLightProbes !== C) && (n.directional.length = f, n.spot.length = _, n.rectArea.length = g, n.point.length = m, n.hemi.length = p, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = x, n.pointShadowMap.length = x, n.spotShadow.length = v, n.spotShadowMap.length = v, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = x, n.spotLightMatrix.length = v + E - b, n.spotLightMap.length = E, n.numSpotLightShadowsWithMaps = b, n.numLightProbes = C, A.directionalLength = f, A.pointLength = m, A.spotLength = _, A.rectAreaLength = g, A.hemiLength = p, A.numDirectionalShadows = y, A.numPointShadows = x, A.numSpotShadows = v, A.numSpotMaps = E, A.numLightProbes = C, n.version = Uv++);
  }
  function c(l, h) {
    let u = 0, d = 0, f = 0, m = 0, _ = 0;
    const g = h.matrixWorldInverse;
    for (let p = 0, y = l.length; p < y; p++) {
      const x = l[p];
      if (x.isDirectionalLight) {
        const v = n.directional[u];
        v.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), v.direction.sub(i), v.direction.transformDirection(g), u++;
      } else if (x.isSpotLight) {
        const v = n.spot[f];
        v.position.setFromMatrixPosition(x.matrixWorld), v.position.applyMatrix4(g), v.direction.setFromMatrixPosition(x.matrixWorld), i.setFromMatrixPosition(x.target.matrixWorld), v.direction.sub(i), v.direction.transformDirection(g), f++;
      } else if (x.isRectAreaLight) {
        const v = n.rectArea[m];
        v.position.setFromMatrixPosition(x.matrixWorld), v.position.applyMatrix4(g), a.identity(), r.copy(x.matrixWorld), r.premultiply(g), a.extractRotation(r), v.halfWidth.set(x.width * 0.5, 0, 0), v.halfHeight.set(0, x.height * 0.5, 0), v.halfWidth.applyMatrix4(a), v.halfHeight.applyMatrix4(a), m++;
      } else if (x.isPointLight) {
        const v = n.point[d];
        v.position.setFromMatrixPosition(x.matrixWorld), v.position.applyMatrix4(g), d++;
      } else if (x.isHemisphereLight) {
        const v = n.hemi[_];
        v.direction.setFromMatrixPosition(x.matrixWorld), v.direction.transformDirection(g), _++;
      }
    }
  }
  return {
    setup: o,
    setupView: c,
    state: n
  };
}
function Pu(s) {
  const t = new Fv(s), e = [], n = [];
  function i(h) {
    l.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function c(h) {
    t.setupView(e, h);
  }
  const l = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {}
  };
  return {
    init: i,
    state: l,
    setupLights: o,
    setupLightsView: c,
    pushLight: r,
    pushShadow: a
  };
}
function Ov(s) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(i, r = 0) {
    const a = t.get(i);
    let o;
    return a === void 0 ? (o = new Pu(s), t.set(i, [o])) : r >= a.length ? (o = new Pu(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: n
  };
}
class sh extends ke {
  static get type() {
    return "MeshDepthMaterial";
  }
  constructor(t) {
    super(), this.isMeshDepthMaterial = !0, this.depthPacking = ff, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class rh extends ke {
  static get type() {
    return "MeshDistanceMaterial";
  }
  constructor(t) {
    super(), this.isMeshDistanceMaterial = !0, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const Bv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, zv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function kv(s, t, e) {
  let n = new Xr();
  const i = new nt(), r = new nt(), a = new Zt(), o = new sh({ depthPacking: pf }), c = new rh(), l = {}, h = e.maxTextureSize, u = { [Cn]: Ue, [Ue]: Cn, [gn]: gn }, d = new vn({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new nt() },
      radius: { value: 4 }
    },
    vertexShader: Bv,
    fragmentShader: zv
  }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const m = new Yt();
  m.setAttribute(
    "position",
    new ae(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const _ = new qt(m, d), g = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Ol;
  let p = this.type;
  this.render = function(b, C, A) {
    if (g.enabled === !1 || g.autoUpdate === !1 && g.needsUpdate === !1 || b.length === 0) return;
    const S = s.getRenderTarget(), M = s.getActiveCubeFace(), I = s.getActiveMipmapLevel(), O = s.state;
    O.setBlending(li), O.buffers.color.setClear(1, 1, 1, 1), O.buffers.depth.setTest(!0), O.setScissorTest(!1);
    const N = p !== kn && this.type === kn, U = p === kn && this.type !== kn;
    for (let q = 0, V = b.length; q < V; q++) {
      const j = b[q], G = j.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === !1 && G.needsUpdate === !1) continue;
      i.copy(G.mapSize);
      const st = G.getFrameExtents();
      if (i.multiply(st), r.copy(G.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / st.x), i.x = r.x * st.x, G.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / st.y), i.y = r.y * st.y, G.mapSize.y = r.y)), G.map === null || N === !0 || U === !0) {
        const Z = this.type !== kn ? { minFilter: Ne, magFilter: Ne } : {};
        G.map !== null && G.map.dispose(), G.map = new Rn(i.x, i.y, Z), G.map.texture.name = j.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(G.map), s.clear();
      const dt = G.getViewportCount();
      for (let Z = 0; Z < dt; Z++) {
        const ot = G.getViewport(Z);
        a.set(
          r.x * ot.x,
          r.y * ot.y,
          r.x * ot.z,
          r.y * ot.w
        ), O.viewport(a), G.updateMatrices(j, Z), n = G.getFrustum(), v(C, A, G.camera, j, this.type);
      }
      G.isPointLightShadow !== !0 && this.type === kn && y(G, A), G.needsUpdate = !1;
    }
    p = this.type, g.needsUpdate = !1, s.setRenderTarget(S, M, I);
  };
  function y(b, C) {
    const A = t.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, f.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = !0, f.needsUpdate = !0), b.mapPass === null && (b.mapPass = new Rn(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, s.setRenderTarget(b.mapPass), s.clear(), s.renderBufferDirect(C, null, A, d, _, null), f.uniforms.shadow_pass.value = b.mapPass.texture, f.uniforms.resolution.value = b.mapSize, f.uniforms.radius.value = b.radius, s.setRenderTarget(b.map), s.clear(), s.renderBufferDirect(C, null, A, f, _, null);
  }
  function x(b, C, A, S) {
    let M = null;
    const I = A.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (I !== void 0)
      M = I;
    else if (M = A.isPointLight === !0 ? c : o, s.localClippingEnabled && C.clipShadows === !0 && Array.isArray(C.clippingPlanes) && C.clippingPlanes.length !== 0 || C.displacementMap && C.displacementScale !== 0 || C.alphaMap && C.alphaTest > 0 || C.map && C.alphaTest > 0) {
      const O = M.uuid, N = C.uuid;
      let U = l[O];
      U === void 0 && (U = {}, l[O] = U);
      let q = U[N];
      q === void 0 && (q = M.clone(), U[N] = q, C.addEventListener("dispose", E)), M = q;
    }
    if (M.visible = C.visible, M.wireframe = C.wireframe, S === kn ? M.side = C.shadowSide !== null ? C.shadowSide : C.side : M.side = C.shadowSide !== null ? C.shadowSide : u[C.side], M.alphaMap = C.alphaMap, M.alphaTest = C.alphaTest, M.map = C.map, M.clipShadows = C.clipShadows, M.clippingPlanes = C.clippingPlanes, M.clipIntersection = C.clipIntersection, M.displacementMap = C.displacementMap, M.displacementScale = C.displacementScale, M.displacementBias = C.displacementBias, M.wireframeLinewidth = C.wireframeLinewidth, M.linewidth = C.linewidth, A.isPointLight === !0 && M.isMeshDistanceMaterial === !0) {
      const O = s.properties.get(M);
      O.light = A;
    }
    return M;
  }
  function v(b, C, A, S, M) {
    if (b.visible === !1) return;
    if (b.layers.test(C.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && M === kn) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, b.matrixWorld);
      const N = t.update(b), U = b.material;
      if (Array.isArray(U)) {
        const q = N.groups;
        for (let V = 0, j = q.length; V < j; V++) {
          const G = q[V], st = U[G.materialIndex];
          if (st && st.visible) {
            const dt = x(b, st, S, M);
            b.onBeforeShadow(s, b, C, A, N, dt, G), s.renderBufferDirect(A, null, N, dt, b, G), b.onAfterShadow(s, b, C, A, N, dt, G);
          }
        }
      } else if (U.visible) {
        const q = x(b, U, S, M);
        b.onBeforeShadow(s, b, C, A, N, q, null), s.renderBufferDirect(A, null, N, q, b, null), b.onAfterShadow(s, b, C, A, N, q, null);
      }
    }
    const O = b.children;
    for (let N = 0, U = O.length; N < U; N++)
      v(O[N], C, A, S, M);
  }
  function E(b) {
    b.target.removeEventListener("dispose", E);
    for (const A in l) {
      const S = l[A], M = b.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const Vv = {
  [so]: ro,
  [ao]: lo,
  [oo]: ho,
  [es]: co,
  [ro]: so,
  [lo]: ao,
  [ho]: oo,
  [co]: es
};
function Hv(s, t) {
  function e() {
    let F = !1;
    const xt = new Zt();
    let K = null;
    const it = new Zt(0, 0, 0, 0);
    return {
      setMask: function(Mt) {
        K !== Mt && !F && (s.colorMask(Mt, Mt, Mt, Mt), K = Mt);
      },
      setLocked: function(Mt) {
        F = Mt;
      },
      setClear: function(Mt, vt, Gt, pe, Fe) {
        Fe === !0 && (Mt *= pe, vt *= pe, Gt *= pe), xt.set(Mt, vt, Gt, pe), it.equals(xt) === !1 && (s.clearColor(Mt, vt, Gt, pe), it.copy(xt));
      },
      reset: function() {
        F = !1, K = null, it.set(-1, 0, 0, 0);
      }
    };
  }
  function n() {
    let F = !1, xt = !1, K = null, it = null, Mt = null;
    return {
      setReversed: function(vt) {
        if (xt !== vt) {
          const Gt = t.get("EXT_clip_control");
          xt ? Gt.clipControlEXT(Gt.LOWER_LEFT_EXT, Gt.ZERO_TO_ONE_EXT) : Gt.clipControlEXT(Gt.LOWER_LEFT_EXT, Gt.NEGATIVE_ONE_TO_ONE_EXT);
          const pe = Mt;
          Mt = null, this.setClear(pe);
        }
        xt = vt;
      },
      getReversed: function() {
        return xt;
      },
      setTest: function(vt) {
        vt ? X(s.DEPTH_TEST) : Q(s.DEPTH_TEST);
      },
      setMask: function(vt) {
        K !== vt && !F && (s.depthMask(vt), K = vt);
      },
      setFunc: function(vt) {
        if (xt && (vt = Vv[vt]), it !== vt) {
          switch (vt) {
            case so:
              s.depthFunc(s.NEVER);
              break;
            case ro:
              s.depthFunc(s.ALWAYS);
              break;
            case ao:
              s.depthFunc(s.LESS);
              break;
            case es:
              s.depthFunc(s.LEQUAL);
              break;
            case oo:
              s.depthFunc(s.EQUAL);
              break;
            case co:
              s.depthFunc(s.GEQUAL);
              break;
            case lo:
              s.depthFunc(s.GREATER);
              break;
            case ho:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          it = vt;
        }
      },
      setLocked: function(vt) {
        F = vt;
      },
      setClear: function(vt) {
        Mt !== vt && (xt && (vt = 1 - vt), s.clearDepth(vt), Mt = vt);
      },
      reset: function() {
        F = !1, K = null, it = null, Mt = null, xt = !1;
      }
    };
  }
  function i() {
    let F = !1, xt = null, K = null, it = null, Mt = null, vt = null, Gt = null, pe = null, Fe = null;
    return {
      setTest: function(se) {
        F || (se ? X(s.STENCIL_TEST) : Q(s.STENCIL_TEST));
      },
      setMask: function(se) {
        xt !== se && !F && (s.stencilMask(se), xt = se);
      },
      setFunc: function(se, yn, Kn) {
        (K !== se || it !== yn || Mt !== Kn) && (s.stencilFunc(se, yn, Kn), K = se, it = yn, Mt = Kn);
      },
      setOp: function(se, yn, Kn) {
        (vt !== se || Gt !== yn || pe !== Kn) && (s.stencilOp(se, yn, Kn), vt = se, Gt = yn, pe = Kn);
      },
      setLocked: function(se) {
        F = se;
      },
      setClear: function(se) {
        Fe !== se && (s.clearStencil(se), Fe = se);
      },
      reset: function() {
        F = !1, xt = null, K = null, it = null, Mt = null, vt = null, Gt = null, pe = null, Fe = null;
      }
    };
  }
  const r = new e(), a = new n(), o = new i(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = !1, g = null, p = null, y = null, x = null, v = null, E = null, b = null, C = new gt(0, 0, 0), A = 0, S = !1, M = null, I = null, O = null, N = null, U = null;
  const q = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1, j = 0;
  const G = s.getParameter(s.VERSION);
  G.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(G)[1]), V = j >= 1) : G.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(G)[1]), V = j >= 2);
  let st = null, dt = {};
  const Z = s.getParameter(s.SCISSOR_BOX), ot = s.getParameter(s.VIEWPORT), Rt = new Zt().fromArray(Z), D = new Zt().fromArray(ot);
  function k(F, xt, K, it) {
    const Mt = new Uint8Array(4), vt = s.createTexture();
    s.bindTexture(F, vt), s.texParameteri(F, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(F, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Gt = 0; Gt < K; Gt++)
      F === s.TEXTURE_3D || F === s.TEXTURE_2D_ARRAY ? s.texImage3D(xt, 0, s.RGBA, 1, 1, it, 0, s.RGBA, s.UNSIGNED_BYTE, Mt) : s.texImage2D(xt + Gt, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, Mt);
    return vt;
  }
  const H = {};
  H[s.TEXTURE_2D] = k(s.TEXTURE_2D, s.TEXTURE_2D, 1), H[s.TEXTURE_CUBE_MAP] = k(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), H[s.TEXTURE_2D_ARRAY] = k(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), H[s.TEXTURE_3D] = k(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), X(s.DEPTH_TEST), a.setFunc(es), ht(!1), Et(gl), X(s.CULL_FACE), L(li);
  function X(F) {
    h[F] !== !0 && (s.enable(F), h[F] = !0);
  }
  function Q(F) {
    h[F] !== !1 && (s.disable(F), h[F] = !1);
  }
  function at(F, xt) {
    return u[F] !== xt ? (s.bindFramebuffer(F, xt), u[F] = xt, F === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = xt), F === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = xt), !0) : !1;
  }
  function ct(F, xt) {
    let K = f, it = !1;
    if (F) {
      K = d.get(xt), K === void 0 && (K = [], d.set(xt, K));
      const Mt = F.textures;
      if (K.length !== Mt.length || K[0] !== s.COLOR_ATTACHMENT0) {
        for (let vt = 0, Gt = Mt.length; vt < Gt; vt++)
          K[vt] = s.COLOR_ATTACHMENT0 + vt;
        K.length = Mt.length, it = !0;
      }
    } else
      K[0] !== s.BACK && (K[0] = s.BACK, it = !0);
    it && s.drawBuffers(K);
  }
  function Ut(F) {
    return m !== F ? (s.useProgram(F), m = F, !0) : !1;
  }
  const J = {
    [bi]: s.FUNC_ADD,
    [Fd]: s.FUNC_SUBTRACT,
    [Od]: s.FUNC_REVERSE_SUBTRACT
  };
  J[Bd] = s.MIN, J[zd] = s.MAX;
  const lt = {
    [kd]: s.ZERO,
    [Vd]: s.ONE,
    [Hd]: s.SRC_COLOR,
    [no]: s.SRC_ALPHA,
    [$d]: s.SRC_ALPHA_SATURATE,
    [qd]: s.DST_COLOR,
    [Wd]: s.DST_ALPHA,
    [Gd]: s.ONE_MINUS_SRC_COLOR,
    [io]: s.ONE_MINUS_SRC_ALPHA,
    [Yd]: s.ONE_MINUS_DST_COLOR,
    [Xd]: s.ONE_MINUS_DST_ALPHA,
    [Zd]: s.CONSTANT_COLOR,
    [Jd]: s.ONE_MINUS_CONSTANT_COLOR,
    [Kd]: s.CONSTANT_ALPHA,
    [jd]: s.ONE_MINUS_CONSTANT_ALPHA
  };
  function L(F, xt, K, it, Mt, vt, Gt, pe, Fe, se) {
    if (F === li) {
      _ === !0 && (Q(s.BLEND), _ = !1);
      return;
    }
    if (_ === !1 && (X(s.BLEND), _ = !0), F !== Nd) {
      if (F !== g || se !== S) {
        if ((p !== bi || v !== bi) && (s.blendEquation(s.FUNC_ADD), p = bi, v = bi), se)
          switch (F) {
            case Ki:
              s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case xl:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case vl:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case yl:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", F);
              break;
          }
        else
          switch (F) {
            case Ki:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
              break;
            case xl:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case vl:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case yl:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", F);
              break;
          }
        y = null, x = null, E = null, b = null, C.set(0, 0, 0), A = 0, g = F, S = se;
      }
      return;
    }
    Mt = Mt || xt, vt = vt || K, Gt = Gt || it, (xt !== p || Mt !== v) && (s.blendEquationSeparate(J[xt], J[Mt]), p = xt, v = Mt), (K !== y || it !== x || vt !== E || Gt !== b) && (s.blendFuncSeparate(lt[K], lt[it], lt[vt], lt[Gt]), y = K, x = it, E = vt, b = Gt), (pe.equals(C) === !1 || Fe !== A) && (s.blendColor(pe.r, pe.g, pe.b, Fe), C.copy(pe), A = Fe), g = F, S = !1;
  }
  function wt(F, xt) {
    F.side === gn ? Q(s.CULL_FACE) : X(s.CULL_FACE);
    let K = F.side === Ue;
    xt && (K = !K), ht(K), F.blending === Ki && F.transparent === !1 ? L(li) : L(F.blending, F.blendEquation, F.blendSrc, F.blendDst, F.blendEquationAlpha, F.blendSrcAlpha, F.blendDstAlpha, F.blendColor, F.blendAlpha, F.premultipliedAlpha), a.setFunc(F.depthFunc), a.setTest(F.depthTest), a.setMask(F.depthWrite), r.setMask(F.colorWrite);
    const it = F.stencilWrite;
    o.setTest(it), it && (o.setMask(F.stencilWriteMask), o.setFunc(F.stencilFunc, F.stencilRef, F.stencilFuncMask), o.setOp(F.stencilFail, F.stencilZFail, F.stencilZPass)), Ot(F.polygonOffset, F.polygonOffsetFactor, F.polygonOffsetUnits), F.alphaToCoverage === !0 ? X(s.SAMPLE_ALPHA_TO_COVERAGE) : Q(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ht(F) {
    M !== F && (F ? s.frontFace(s.CW) : s.frontFace(s.CCW), M = F);
  }
  function Et(F) {
    F !== Dd ? (X(s.CULL_FACE), F !== I && (F === gl ? s.cullFace(s.BACK) : F === Ud ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Q(s.CULL_FACE), I = F;
  }
  function mt(F) {
    F !== O && (V && s.lineWidth(F), O = F);
  }
  function Ot(F, xt, K) {
    F ? (X(s.POLYGON_OFFSET_FILL), (N !== xt || U !== K) && (s.polygonOffset(xt, K), N = xt, U = K)) : Q(s.POLYGON_OFFSET_FILL);
  }
  function St(F) {
    F ? X(s.SCISSOR_TEST) : Q(s.SCISSOR_TEST);
  }
  function P(F) {
    F === void 0 && (F = s.TEXTURE0 + q - 1), st !== F && (s.activeTexture(F), st = F);
  }
  function w(F, xt, K) {
    K === void 0 && (st === null ? K = s.TEXTURE0 + q - 1 : K = st);
    let it = dt[K];
    it === void 0 && (it = { type: void 0, texture: void 0 }, dt[K] = it), (it.type !== F || it.texture !== xt) && (st !== K && (s.activeTexture(K), st = K), s.bindTexture(F, xt || H[F]), it.type = F, it.texture = xt);
  }
  function W() {
    const F = dt[st];
    F !== void 0 && F.type !== void 0 && (s.bindTexture(F.type, null), F.type = void 0, F.texture = void 0);
  }
  function tt() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function rt() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function et() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Pt() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function _t() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function bt() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Jt() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function ut() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Tt() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function Bt() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (F) {
      console.error("THREE.WebGLState:", F);
    }
  }
  function zt(F) {
    Rt.equals(F) === !1 && (s.scissor(F.x, F.y, F.z, F.w), Rt.copy(F));
  }
  function At(F) {
    D.equals(F) === !1 && (s.viewport(F.x, F.y, F.z, F.w), D.copy(F));
  }
  function jt(F, xt) {
    let K = l.get(xt);
    K === void 0 && (K = /* @__PURE__ */ new WeakMap(), l.set(xt, K));
    let it = K.get(F);
    it === void 0 && (it = s.getUniformBlockIndex(xt, F.name), K.set(F, it));
  }
  function $t(F, xt) {
    const it = l.get(xt).get(F);
    c.get(xt) !== it && (s.uniformBlockBinding(xt, it, F.__bindingPointIndex), c.set(xt, it));
  }
  function oe() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), a.setReversed(!1), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, st = null, dt = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = !1, g = null, p = null, y = null, x = null, v = null, E = null, b = null, C = new gt(0, 0, 0), A = 0, S = !1, M = null, I = null, O = null, N = null, U = null, Rt.set(0, 0, s.canvas.width, s.canvas.height), D.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return {
    buffers: {
      color: r,
      depth: a,
      stencil: o
    },
    enable: X,
    disable: Q,
    bindFramebuffer: at,
    drawBuffers: ct,
    useProgram: Ut,
    setBlending: L,
    setMaterial: wt,
    setFlipSided: ht,
    setCullFace: Et,
    setLineWidth: mt,
    setPolygonOffset: Ot,
    setScissorTest: St,
    activeTexture: P,
    bindTexture: w,
    unbindTexture: W,
    compressedTexImage2D: tt,
    compressedTexImage3D: rt,
    texImage2D: Tt,
    texImage3D: Bt,
    updateUBOMapping: jt,
    uniformBlockBinding: $t,
    texStorage2D: Jt,
    texStorage3D: ut,
    texSubImage2D: et,
    texSubImage3D: Pt,
    compressedTexSubImage2D: _t,
    compressedTexSubImage3D: bt,
    scissor: zt,
    viewport: At,
    reset: oe
  };
}
function Gv(s, t) {
  const e = s.image && s.image.width ? s.image.width / s.image.height : 1;
  return e > t ? (s.repeat.x = 1, s.repeat.y = e / t, s.offset.x = 0, s.offset.y = (1 - s.repeat.y) / 2) : (s.repeat.x = t / e, s.repeat.y = 1, s.offset.x = (1 - s.repeat.x) / 2, s.offset.y = 0), s;
}
function Wv(s, t) {
  const e = s.image && s.image.width ? s.image.width / s.image.height : 1;
  return e > t ? (s.repeat.x = t / e, s.repeat.y = 1, s.offset.x = (1 - s.repeat.x) / 2, s.offset.y = 0) : (s.repeat.x = 1, s.repeat.y = e / t, s.offset.x = 0, s.offset.y = (1 - s.repeat.y) / 2), s;
}
function Xv(s) {
  return s.repeat.x = 1, s.repeat.y = 1, s.offset.x = 0, s.offset.y = 0, s;
}
function Tl(s, t, e, n) {
  const i = qv(n);
  switch (e) {
    // https://registry.khronos.org/OpenGL-Refpages/es3.0/html/glTexImage2D.xhtml
    case Gl:
      return s * t;
    case Xl:
      return s * t;
    case ql:
      return s * t * 2;
    case Zo:
      return s * t / i.components * i.byteLength;
    case Hr:
      return s * t / i.components * i.byteLength;
    case Yl:
      return s * t * 2 / i.components * i.byteLength;
    case Jo:
      return s * t * 2 / i.components * i.byteLength;
    case Wl:
      return s * t * 3 / i.components * i.byteLength;
    case $e:
      return s * t * 4 / i.components * i.byteLength;
    case Ko:
      return s * t * 4 / i.components * i.byteLength;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    case _r:
    case xr:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case vr:
    case yr:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    case fo:
    case mo:
      return Math.max(s, 16) * Math.max(t, 8) / 4;
    case uo:
    case po:
      return Math.max(s, 8) * Math.max(t, 8) / 2;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_etc/
    case go:
    case _o:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case xo:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/WEBGL_compressed_texture_astc/
    case vo:
      return Math.floor((s + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case yo:
      return Math.floor((s + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Mo:
      return Math.floor((s + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case So:
      return Math.floor((s + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case bo:
      return Math.floor((s + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case wo:
      return Math.floor((s + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case Eo:
      return Math.floor((s + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case To:
      return Math.floor((s + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case Ao:
      return Math.floor((s + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case Co:
      return Math.floor((s + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case Ro:
      return Math.floor((s + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case Po:
      return Math.floor((s + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case Io:
      return Math.floor((s + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case Lo:
      return Math.floor((s + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_bptc/
    case Mr:
    case Do:
    case Uo:
      return Math.ceil(s / 4) * Math.ceil(t / 4) * 16;
    // https://registry.khronos.org/webgl/extensions/EXT_texture_compression_rgtc/
    case $l:
    case No:
      return Math.ceil(s / 4) * Math.ceil(t / 4) * 8;
    case Fo:
    case Oo:
      return Math.ceil(s / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(
    `Unable to determine texture byte length for ${e} format.`
  );
}
function qv(s) {
  switch (s) {
    case Zn:
    case kl:
      return { byteLength: 1, components: 1 };
    case Os:
    case Vl:
    case Gs:
      return { byteLength: 2, components: 1 };
    case Yo:
    case $o:
      return { byteLength: 2, components: 4 };
    case di:
    case qo:
    case tn:
      return { byteLength: 4, components: 1 };
    case Hl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
const Yv = {
  contain: Gv,
  cover: Wv,
  fill: Xv,
  getByteLength: Tl
};
function $v(s, t, e, n, i, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), l = new nt(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function m(P, w) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(P, w)
    ) : Lr("canvas");
  }
  function _(P, w, W) {
    let tt = 1;
    const rt = St(P);
    if ((rt.width > W || rt.height > W) && (tt = W / Math.max(rt.width, rt.height)), tt < 1)
      if (typeof HTMLImageElement < "u" && P instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && P instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && P instanceof ImageBitmap || typeof VideoFrame < "u" && P instanceof VideoFrame) {
        const et = Math.floor(tt * rt.width), Pt = Math.floor(tt * rt.height);
        u === void 0 && (u = m(et, Pt));
        const _t = w ? m(et, Pt) : u;
        return _t.width = et, _t.height = Pt, _t.getContext("2d").drawImage(P, 0, 0, et, Pt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + rt.width + "x" + rt.height + ") to (" + et + "x" + Pt + ")."), _t;
      } else
        return "data" in P && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + rt.width + "x" + rt.height + ")."), P;
    return P;
  }
  function g(P) {
    return P.generateMipmaps;
  }
  function p(P) {
    s.generateMipmap(P);
  }
  function y(P) {
    return P.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : P.isWebGL3DRenderTarget ? s.TEXTURE_3D : P.isWebGLArrayRenderTarget || P.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function x(P, w, W, tt, rt = !1) {
    if (P !== null) {
      if (s[P] !== void 0) return s[P];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + P + "'");
    }
    let et = w;
    if (w === s.RED && (W === s.FLOAT && (et = s.R32F), W === s.HALF_FLOAT && (et = s.R16F), W === s.UNSIGNED_BYTE && (et = s.R8)), w === s.RED_INTEGER && (W === s.UNSIGNED_BYTE && (et = s.R8UI), W === s.UNSIGNED_SHORT && (et = s.R16UI), W === s.UNSIGNED_INT && (et = s.R32UI), W === s.BYTE && (et = s.R8I), W === s.SHORT && (et = s.R16I), W === s.INT && (et = s.R32I)), w === s.RG && (W === s.FLOAT && (et = s.RG32F), W === s.HALF_FLOAT && (et = s.RG16F), W === s.UNSIGNED_BYTE && (et = s.RG8)), w === s.RG_INTEGER && (W === s.UNSIGNED_BYTE && (et = s.RG8UI), W === s.UNSIGNED_SHORT && (et = s.RG16UI), W === s.UNSIGNED_INT && (et = s.RG32UI), W === s.BYTE && (et = s.RG8I), W === s.SHORT && (et = s.RG16I), W === s.INT && (et = s.RG32I)), w === s.RGB_INTEGER && (W === s.UNSIGNED_BYTE && (et = s.RGB8UI), W === s.UNSIGNED_SHORT && (et = s.RGB16UI), W === s.UNSIGNED_INT && (et = s.RGB32UI), W === s.BYTE && (et = s.RGB8I), W === s.SHORT && (et = s.RGB16I), W === s.INT && (et = s.RGB32I)), w === s.RGBA_INTEGER && (W === s.UNSIGNED_BYTE && (et = s.RGBA8UI), W === s.UNSIGNED_SHORT && (et = s.RGBA16UI), W === s.UNSIGNED_INT && (et = s.RGBA32UI), W === s.BYTE && (et = s.RGBA8I), W === s.SHORT && (et = s.RGBA16I), W === s.INT && (et = s.RGBA32I)), w === s.RGB && W === s.UNSIGNED_INT_5_9_9_9_REV && (et = s.RGB9_E5), w === s.RGBA) {
      const Pt = rt ? Gr : Kt.getTransfer(tt);
      W === s.FLOAT && (et = s.RGBA32F), W === s.HALF_FLOAT && (et = s.RGBA16F), W === s.UNSIGNED_BYTE && (et = Pt === re ? s.SRGB8_ALPHA8 : s.RGBA8), W === s.UNSIGNED_SHORT_4_4_4_4 && (et = s.RGBA4), W === s.UNSIGNED_SHORT_5_5_5_1 && (et = s.RGB5_A1);
    }
    return (et === s.R16F || et === s.R32F || et === s.RG16F || et === s.RG32F || et === s.RGBA16F || et === s.RGBA32F) && t.get("EXT_color_buffer_float"), et;
  }
  function v(P, w) {
    let W;
    return P ? w === null || w === di || w === is ? W = s.DEPTH24_STENCIL8 : w === tn ? W = s.DEPTH32F_STENCIL8 : w === Os && (W = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : w === null || w === di || w === is ? W = s.DEPTH_COMPONENT24 : w === tn ? W = s.DEPTH_COMPONENT32F : w === Os && (W = s.DEPTH_COMPONENT16), W;
  }
  function E(P, w) {
    return g(P) === !0 || P.isFramebufferTexture && P.minFilter !== Ne && P.minFilter !== be ? Math.log2(Math.max(w.width, w.height)) + 1 : P.mipmaps !== void 0 && P.mipmaps.length > 0 ? P.mipmaps.length : P.isCompressedTexture && Array.isArray(P.image) ? w.mipmaps.length : 1;
  }
  function b(P) {
    const w = P.target;
    w.removeEventListener("dispose", b), A(w), w.isVideoTexture && h.delete(w);
  }
  function C(P) {
    const w = P.target;
    w.removeEventListener("dispose", C), M(w);
  }
  function A(P) {
    const w = n.get(P);
    if (w.__webglInit === void 0) return;
    const W = P.source, tt = d.get(W);
    if (tt) {
      const rt = tt[w.__cacheKey];
      rt.usedTimes--, rt.usedTimes === 0 && S(P), Object.keys(tt).length === 0 && d.delete(W);
    }
    n.remove(P);
  }
  function S(P) {
    const w = n.get(P);
    s.deleteTexture(w.__webglTexture);
    const W = P.source, tt = d.get(W);
    delete tt[w.__cacheKey], a.memory.textures--;
  }
  function M(P) {
    const w = n.get(P);
    if (P.depthTexture && (P.depthTexture.dispose(), n.remove(P.depthTexture)), P.isWebGLCubeRenderTarget)
      for (let tt = 0; tt < 6; tt++) {
        if (Array.isArray(w.__webglFramebuffer[tt]))
          for (let rt = 0; rt < w.__webglFramebuffer[tt].length; rt++) s.deleteFramebuffer(w.__webglFramebuffer[tt][rt]);
        else
          s.deleteFramebuffer(w.__webglFramebuffer[tt]);
        w.__webglDepthbuffer && s.deleteRenderbuffer(w.__webglDepthbuffer[tt]);
      }
    else {
      if (Array.isArray(w.__webglFramebuffer))
        for (let tt = 0; tt < w.__webglFramebuffer.length; tt++) s.deleteFramebuffer(w.__webglFramebuffer[tt]);
      else
        s.deleteFramebuffer(w.__webglFramebuffer);
      if (w.__webglDepthbuffer && s.deleteRenderbuffer(w.__webglDepthbuffer), w.__webglMultisampledFramebuffer && s.deleteFramebuffer(w.__webglMultisampledFramebuffer), w.__webglColorRenderbuffer)
        for (let tt = 0; tt < w.__webglColorRenderbuffer.length; tt++)
          w.__webglColorRenderbuffer[tt] && s.deleteRenderbuffer(w.__webglColorRenderbuffer[tt]);
      w.__webglDepthRenderbuffer && s.deleteRenderbuffer(w.__webglDepthRenderbuffer);
    }
    const W = P.textures;
    for (let tt = 0, rt = W.length; tt < rt; tt++) {
      const et = n.get(W[tt]);
      et.__webglTexture && (s.deleteTexture(et.__webglTexture), a.memory.textures--), n.remove(W[tt]);
    }
    n.remove(P);
  }
  let I = 0;
  function O() {
    I = 0;
  }
  function N() {
    const P = I;
    return P >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + P + " texture units while this GPU supports only " + i.maxTextures), I += 1, P;
  }
  function U(P) {
    const w = [];
    return w.push(P.wrapS), w.push(P.wrapT), w.push(P.wrapR || 0), w.push(P.magFilter), w.push(P.minFilter), w.push(P.anisotropy), w.push(P.internalFormat), w.push(P.format), w.push(P.type), w.push(P.generateMipmaps), w.push(P.premultiplyAlpha), w.push(P.flipY), w.push(P.unpackAlignment), w.push(P.colorSpace), w.join();
  }
  function q(P, w) {
    const W = n.get(P);
    if (P.isVideoTexture && mt(P), P.isRenderTargetTexture === !1 && P.version > 0 && W.__version !== P.version) {
      const tt = P.image;
      if (tt === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (tt.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        D(W, P, w);
        return;
      }
    }
    e.bindTexture(s.TEXTURE_2D, W.__webglTexture, s.TEXTURE0 + w);
  }
  function V(P, w) {
    const W = n.get(P);
    if (P.version > 0 && W.__version !== P.version) {
      D(W, P, w);
      return;
    }
    e.bindTexture(s.TEXTURE_2D_ARRAY, W.__webglTexture, s.TEXTURE0 + w);
  }
  function j(P, w) {
    const W = n.get(P);
    if (P.version > 0 && W.__version !== P.version) {
      D(W, P, w);
      return;
    }
    e.bindTexture(s.TEXTURE_3D, W.__webglTexture, s.TEXTURE0 + w);
  }
  function G(P, w) {
    const W = n.get(P);
    if (P.version > 0 && W.__version !== P.version) {
      k(W, P, w);
      return;
    }
    e.bindTexture(s.TEXTURE_CUBE_MAP, W.__webglTexture, s.TEXTURE0 + w);
  }
  const st = {
    [ns]: s.REPEAT,
    [_n]: s.CLAMP_TO_EDGE,
    [Ar]: s.MIRRORED_REPEAT
  }, dt = {
    [Ne]: s.NEAREST,
    [zl]: s.NEAREST_MIPMAP_NEAREST,
    [Ps]: s.NEAREST_MIPMAP_LINEAR,
    [be]: s.LINEAR,
    [gr]: s.LINEAR_MIPMAP_NEAREST,
    [An]: s.LINEAR_MIPMAP_LINEAR
  }, Z = {
    [gf]: s.NEVER,
    [Sf]: s.ALWAYS,
    [_f]: s.LESS,
    [Jl]: s.LEQUAL,
    [xf]: s.EQUAL,
    [Mf]: s.GEQUAL,
    [vf]: s.GREATER,
    [yf]: s.NOTEQUAL
  };
  function ot(P, w) {
    if (w.type === tn && t.has("OES_texture_float_linear") === !1 && (w.magFilter === be || w.magFilter === gr || w.magFilter === Ps || w.magFilter === An || w.minFilter === be || w.minFilter === gr || w.minFilter === Ps || w.minFilter === An) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(P, s.TEXTURE_WRAP_S, st[w.wrapS]), s.texParameteri(P, s.TEXTURE_WRAP_T, st[w.wrapT]), (P === s.TEXTURE_3D || P === s.TEXTURE_2D_ARRAY) && s.texParameteri(P, s.TEXTURE_WRAP_R, st[w.wrapR]), s.texParameteri(P, s.TEXTURE_MAG_FILTER, dt[w.magFilter]), s.texParameteri(P, s.TEXTURE_MIN_FILTER, dt[w.minFilter]), w.compareFunction && (s.texParameteri(P, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(P, s.TEXTURE_COMPARE_FUNC, Z[w.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
      if (w.magFilter === Ne || w.minFilter !== Ps && w.minFilter !== An || w.type === tn && t.has("OES_texture_float_linear") === !1) return;
      if (w.anisotropy > 1 || n.get(w).__currentAnisotropy) {
        const W = t.get("EXT_texture_filter_anisotropic");
        s.texParameterf(P, W.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(w.anisotropy, i.getMaxAnisotropy())), n.get(w).__currentAnisotropy = w.anisotropy;
      }
    }
  }
  function Rt(P, w) {
    let W = !1;
    P.__webglInit === void 0 && (P.__webglInit = !0, w.addEventListener("dispose", b));
    const tt = w.source;
    let rt = d.get(tt);
    rt === void 0 && (rt = {}, d.set(tt, rt));
    const et = U(w);
    if (et !== P.__cacheKey) {
      rt[et] === void 0 && (rt[et] = {
        texture: s.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, W = !0), rt[et].usedTimes++;
      const Pt = rt[P.__cacheKey];
      Pt !== void 0 && (rt[P.__cacheKey].usedTimes--, Pt.usedTimes === 0 && S(w)), P.__cacheKey = et, P.__webglTexture = rt[et].texture;
    }
    return W;
  }
  function D(P, w, W) {
    let tt = s.TEXTURE_2D;
    (w.isDataArrayTexture || w.isCompressedArrayTexture) && (tt = s.TEXTURE_2D_ARRAY), w.isData3DTexture && (tt = s.TEXTURE_3D);
    const rt = Rt(P, w), et = w.source;
    e.bindTexture(tt, P.__webglTexture, s.TEXTURE0 + W);
    const Pt = n.get(et);
    if (et.version !== Pt.__version || rt === !0) {
      e.activeTexture(s.TEXTURE0 + W);
      const _t = Kt.getPrimaries(Kt.workingColorSpace), bt = w.colorSpace === ai ? null : Kt.getPrimaries(w.colorSpace), Jt = w.colorSpace === ai || _t === bt ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, w.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, w.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, w.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Jt);
      let ut = _(w.image, !1, i.maxTextureSize);
      ut = Ot(w, ut);
      const Tt = r.convert(w.format, w.colorSpace), Bt = r.convert(w.type);
      let zt = x(w.internalFormat, Tt, Bt, w.colorSpace, w.isVideoTexture);
      ot(tt, w);
      let At;
      const jt = w.mipmaps, $t = w.isVideoTexture !== !0, oe = Pt.__version === void 0 || rt === !0, F = et.dataReady, xt = E(w, ut);
      if (w.isDepthTexture)
        zt = v(w.format === ss, w.type), oe && ($t ? e.texStorage2D(s.TEXTURE_2D, 1, zt, ut.width, ut.height) : e.texImage2D(s.TEXTURE_2D, 0, zt, ut.width, ut.height, 0, Tt, Bt, null));
      else if (w.isDataTexture)
        if (jt.length > 0) {
          $t && oe && e.texStorage2D(s.TEXTURE_2D, xt, zt, jt[0].width, jt[0].height);
          for (let K = 0, it = jt.length; K < it; K++)
            At = jt[K], $t ? F && e.texSubImage2D(s.TEXTURE_2D, K, 0, 0, At.width, At.height, Tt, Bt, At.data) : e.texImage2D(s.TEXTURE_2D, K, zt, At.width, At.height, 0, Tt, Bt, At.data);
          w.generateMipmaps = !1;
        } else
          $t ? (oe && e.texStorage2D(s.TEXTURE_2D, xt, zt, ut.width, ut.height), F && e.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ut.width, ut.height, Tt, Bt, ut.data)) : e.texImage2D(s.TEXTURE_2D, 0, zt, ut.width, ut.height, 0, Tt, Bt, ut.data);
      else if (w.isCompressedTexture)
        if (w.isCompressedArrayTexture) {
          $t && oe && e.texStorage3D(s.TEXTURE_2D_ARRAY, xt, zt, jt[0].width, jt[0].height, ut.depth);
          for (let K = 0, it = jt.length; K < it; K++)
            if (At = jt[K], w.format !== $e)
              if (Tt !== null)
                if ($t) {
                  if (F)
                    if (w.layerUpdates.size > 0) {
                      const Mt = Tl(At.width, At.height, w.format, w.type);
                      for (const vt of w.layerUpdates) {
                        const Gt = At.data.subarray(
                          vt * Mt / At.data.BYTES_PER_ELEMENT,
                          (vt + 1) * Mt / At.data.BYTES_PER_ELEMENT
                        );
                        e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, K, 0, 0, vt, At.width, At.height, 1, Tt, Gt);
                      }
                      w.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, K, 0, 0, 0, At.width, At.height, ut.depth, Tt, At.data);
                } else
                  e.compressedTexImage3D(s.TEXTURE_2D_ARRAY, K, zt, At.width, At.height, ut.depth, 0, At.data, 0, 0);
              else
                console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
            else
              $t ? F && e.texSubImage3D(s.TEXTURE_2D_ARRAY, K, 0, 0, 0, At.width, At.height, ut.depth, Tt, Bt, At.data) : e.texImage3D(s.TEXTURE_2D_ARRAY, K, zt, At.width, At.height, ut.depth, 0, Tt, Bt, At.data);
        } else {
          $t && oe && e.texStorage2D(s.TEXTURE_2D, xt, zt, jt[0].width, jt[0].height);
          for (let K = 0, it = jt.length; K < it; K++)
            At = jt[K], w.format !== $e ? Tt !== null ? $t ? F && e.compressedTexSubImage2D(s.TEXTURE_2D, K, 0, 0, At.width, At.height, Tt, At.data) : e.compressedTexImage2D(s.TEXTURE_2D, K, zt, At.width, At.height, 0, At.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : $t ? F && e.texSubImage2D(s.TEXTURE_2D, K, 0, 0, At.width, At.height, Tt, Bt, At.data) : e.texImage2D(s.TEXTURE_2D, K, zt, At.width, At.height, 0, Tt, Bt, At.data);
        }
      else if (w.isDataArrayTexture)
        if ($t) {
          if (oe && e.texStorage3D(s.TEXTURE_2D_ARRAY, xt, zt, ut.width, ut.height, ut.depth), F)
            if (w.layerUpdates.size > 0) {
              const K = Tl(ut.width, ut.height, w.format, w.type);
              for (const it of w.layerUpdates) {
                const Mt = ut.data.subarray(
                  it * K / ut.data.BYTES_PER_ELEMENT,
                  (it + 1) * K / ut.data.BYTES_PER_ELEMENT
                );
                e.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, it, ut.width, ut.height, 1, Tt, Bt, Mt);
              }
              w.clearLayerUpdates();
            } else
              e.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, ut.width, ut.height, ut.depth, Tt, Bt, ut.data);
        } else
          e.texImage3D(s.TEXTURE_2D_ARRAY, 0, zt, ut.width, ut.height, ut.depth, 0, Tt, Bt, ut.data);
      else if (w.isData3DTexture)
        $t ? (oe && e.texStorage3D(s.TEXTURE_3D, xt, zt, ut.width, ut.height, ut.depth), F && e.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, ut.width, ut.height, ut.depth, Tt, Bt, ut.data)) : e.texImage3D(s.TEXTURE_3D, 0, zt, ut.width, ut.height, ut.depth, 0, Tt, Bt, ut.data);
      else if (w.isFramebufferTexture) {
        if (oe)
          if ($t)
            e.texStorage2D(s.TEXTURE_2D, xt, zt, ut.width, ut.height);
          else {
            let K = ut.width, it = ut.height;
            for (let Mt = 0; Mt < xt; Mt++)
              e.texImage2D(s.TEXTURE_2D, Mt, zt, K, it, 0, Tt, Bt, null), K >>= 1, it >>= 1;
          }
      } else if (jt.length > 0) {
        if ($t && oe) {
          const K = St(jt[0]);
          e.texStorage2D(s.TEXTURE_2D, xt, zt, K.width, K.height);
        }
        for (let K = 0, it = jt.length; K < it; K++)
          At = jt[K], $t ? F && e.texSubImage2D(s.TEXTURE_2D, K, 0, 0, Tt, Bt, At) : e.texImage2D(s.TEXTURE_2D, K, zt, Tt, Bt, At);
        w.generateMipmaps = !1;
      } else if ($t) {
        if (oe) {
          const K = St(ut);
          e.texStorage2D(s.TEXTURE_2D, xt, zt, K.width, K.height);
        }
        F && e.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Tt, Bt, ut);
      } else
        e.texImage2D(s.TEXTURE_2D, 0, zt, Tt, Bt, ut);
      g(w) && p(tt), Pt.__version = et.version, w.onUpdate && w.onUpdate(w);
    }
    P.__version = w.version;
  }
  function k(P, w, W) {
    if (w.image.length !== 6) return;
    const tt = Rt(P, w), rt = w.source;
    e.bindTexture(s.TEXTURE_CUBE_MAP, P.__webglTexture, s.TEXTURE0 + W);
    const et = n.get(rt);
    if (rt.version !== et.__version || tt === !0) {
      e.activeTexture(s.TEXTURE0 + W);
      const Pt = Kt.getPrimaries(Kt.workingColorSpace), _t = w.colorSpace === ai ? null : Kt.getPrimaries(w.colorSpace), bt = w.colorSpace === ai || Pt === _t ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, w.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, w.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, w.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, bt);
      const Jt = w.isCompressedTexture || w.image[0].isCompressedTexture, ut = w.image[0] && w.image[0].isDataTexture, Tt = [];
      for (let it = 0; it < 6; it++)
        !Jt && !ut ? Tt[it] = _(w.image[it], !0, i.maxCubemapSize) : Tt[it] = ut ? w.image[it].image : w.image[it], Tt[it] = Ot(w, Tt[it]);
      const Bt = Tt[0], zt = r.convert(w.format, w.colorSpace), At = r.convert(w.type), jt = x(w.internalFormat, zt, At, w.colorSpace), $t = w.isVideoTexture !== !0, oe = et.__version === void 0 || tt === !0, F = rt.dataReady;
      let xt = E(w, Bt);
      ot(s.TEXTURE_CUBE_MAP, w);
      let K;
      if (Jt) {
        $t && oe && e.texStorage2D(s.TEXTURE_CUBE_MAP, xt, jt, Bt.width, Bt.height);
        for (let it = 0; it < 6; it++) {
          K = Tt[it].mipmaps;
          for (let Mt = 0; Mt < K.length; Mt++) {
            const vt = K[Mt];
            w.format !== $e ? zt !== null ? $t ? F && e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt, 0, 0, vt.width, vt.height, zt, vt.data) : e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt, jt, vt.width, vt.height, 0, vt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : $t ? F && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt, 0, 0, vt.width, vt.height, zt, At, vt.data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt, jt, vt.width, vt.height, 0, zt, At, vt.data);
          }
        }
      } else {
        if (K = w.mipmaps, $t && oe) {
          K.length > 0 && xt++;
          const it = St(Tt[0]);
          e.texStorage2D(s.TEXTURE_CUBE_MAP, xt, jt, it.width, it.height);
        }
        for (let it = 0; it < 6; it++)
          if (ut) {
            $t ? F && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0, 0, 0, Tt[it].width, Tt[it].height, zt, At, Tt[it].data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0, jt, Tt[it].width, Tt[it].height, 0, zt, At, Tt[it].data);
            for (let Mt = 0; Mt < K.length; Mt++) {
              const Gt = K[Mt].image[it].image;
              $t ? F && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt + 1, 0, 0, Gt.width, Gt.height, zt, At, Gt.data) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt + 1, jt, Gt.width, Gt.height, 0, zt, At, Gt.data);
            }
          } else {
            $t ? F && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0, 0, 0, zt, At, Tt[it]) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, 0, jt, zt, At, Tt[it]);
            for (let Mt = 0; Mt < K.length; Mt++) {
              const vt = K[Mt];
              $t ? F && e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt + 1, 0, 0, zt, At, vt.image[it]) : e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + it, Mt + 1, jt, zt, At, vt.image[it]);
            }
          }
      }
      g(w) && p(s.TEXTURE_CUBE_MAP), et.__version = rt.version, w.onUpdate && w.onUpdate(w);
    }
    P.__version = w.version;
  }
  function H(P, w, W, tt, rt, et) {
    const Pt = r.convert(W.format, W.colorSpace), _t = r.convert(W.type), bt = x(W.internalFormat, Pt, _t, W.colorSpace), Jt = n.get(w), ut = n.get(W);
    if (ut.__renderTarget = w, !Jt.__hasExternalTextures) {
      const Tt = Math.max(1, w.width >> et), Bt = Math.max(1, w.height >> et);
      rt === s.TEXTURE_3D || rt === s.TEXTURE_2D_ARRAY ? e.texImage3D(rt, et, bt, Tt, Bt, w.depth, 0, Pt, _t, null) : e.texImage2D(rt, et, bt, Tt, Bt, 0, Pt, _t, null);
    }
    e.bindFramebuffer(s.FRAMEBUFFER, P), Et(w) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, tt, rt, ut.__webglTexture, 0, ht(w)) : (rt === s.TEXTURE_2D || rt >= s.TEXTURE_CUBE_MAP_POSITIVE_X && rt <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, tt, rt, ut.__webglTexture, et), e.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function X(P, w, W) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, P), w.depthBuffer) {
      const tt = w.depthTexture, rt = tt && tt.isDepthTexture ? tt.type : null, et = v(w.stencilBuffer, rt), Pt = w.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, _t = ht(w);
      Et(w) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, _t, et, w.width, w.height) : W ? s.renderbufferStorageMultisample(s.RENDERBUFFER, _t, et, w.width, w.height) : s.renderbufferStorage(s.RENDERBUFFER, et, w.width, w.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, Pt, s.RENDERBUFFER, P);
    } else {
      const tt = w.textures;
      for (let rt = 0; rt < tt.length; rt++) {
        const et = tt[rt], Pt = r.convert(et.format, et.colorSpace), _t = r.convert(et.type), bt = x(et.internalFormat, Pt, _t, et.colorSpace), Jt = ht(w);
        W && Et(w) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Jt, bt, w.width, w.height) : Et(w) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Jt, bt, w.width, w.height) : s.renderbufferStorage(s.RENDERBUFFER, bt, w.width, w.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Q(P, w) {
    if (w && w.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(s.FRAMEBUFFER, P), !(w.depthTexture && w.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const tt = n.get(w.depthTexture);
    tt.__renderTarget = w, (!tt.__webglTexture || w.depthTexture.image.width !== w.width || w.depthTexture.image.height !== w.height) && (w.depthTexture.image.width = w.width, w.depthTexture.image.height = w.height, w.depthTexture.needsUpdate = !0), q(w.depthTexture, 0);
    const rt = tt.__webglTexture, et = ht(w);
    if (w.depthTexture.format === ji)
      Et(w) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, rt, 0, et) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, rt, 0);
    else if (w.depthTexture.format === ss)
      Et(w) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, rt, 0, et) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, rt, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function at(P) {
    const w = n.get(P), W = P.isWebGLCubeRenderTarget === !0;
    if (w.__boundDepthTexture !== P.depthTexture) {
      const tt = P.depthTexture;
      if (w.__depthDisposeCallback && w.__depthDisposeCallback(), tt) {
        const rt = () => {
          delete w.__boundDepthTexture, delete w.__depthDisposeCallback, tt.removeEventListener("dispose", rt);
        };
        tt.addEventListener("dispose", rt), w.__depthDisposeCallback = rt;
      }
      w.__boundDepthTexture = tt;
    }
    if (P.depthTexture && !w.__autoAllocateDepthBuffer) {
      if (W) throw new Error("target.depthTexture not supported in Cube render targets");
      Q(w.__webglFramebuffer, P);
    } else if (W) {
      w.__webglDepthbuffer = [];
      for (let tt = 0; tt < 6; tt++)
        if (e.bindFramebuffer(s.FRAMEBUFFER, w.__webglFramebuffer[tt]), w.__webglDepthbuffer[tt] === void 0)
          w.__webglDepthbuffer[tt] = s.createRenderbuffer(), X(w.__webglDepthbuffer[tt], P, !1);
        else {
          const rt = P.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, et = w.__webglDepthbuffer[tt];
          s.bindRenderbuffer(s.RENDERBUFFER, et), s.framebufferRenderbuffer(s.FRAMEBUFFER, rt, s.RENDERBUFFER, et);
        }
    } else if (e.bindFramebuffer(s.FRAMEBUFFER, w.__webglFramebuffer), w.__webglDepthbuffer === void 0)
      w.__webglDepthbuffer = s.createRenderbuffer(), X(w.__webglDepthbuffer, P, !1);
    else {
      const tt = P.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, rt = w.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, rt), s.framebufferRenderbuffer(s.FRAMEBUFFER, tt, s.RENDERBUFFER, rt);
    }
    e.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ct(P, w, W) {
    const tt = n.get(P);
    w !== void 0 && H(tt.__webglFramebuffer, P, P.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), W !== void 0 && at(P);
  }
  function Ut(P) {
    const w = P.texture, W = n.get(P), tt = n.get(w);
    P.addEventListener("dispose", C);
    const rt = P.textures, et = P.isWebGLCubeRenderTarget === !0, Pt = rt.length > 1;
    if (Pt || (tt.__webglTexture === void 0 && (tt.__webglTexture = s.createTexture()), tt.__version = w.version, a.memory.textures++), et) {
      W.__webglFramebuffer = [];
      for (let _t = 0; _t < 6; _t++)
        if (w.mipmaps && w.mipmaps.length > 0) {
          W.__webglFramebuffer[_t] = [];
          for (let bt = 0; bt < w.mipmaps.length; bt++)
            W.__webglFramebuffer[_t][bt] = s.createFramebuffer();
        } else
          W.__webglFramebuffer[_t] = s.createFramebuffer();
    } else {
      if (w.mipmaps && w.mipmaps.length > 0) {
        W.__webglFramebuffer = [];
        for (let _t = 0; _t < w.mipmaps.length; _t++)
          W.__webglFramebuffer[_t] = s.createFramebuffer();
      } else
        W.__webglFramebuffer = s.createFramebuffer();
      if (Pt)
        for (let _t = 0, bt = rt.length; _t < bt; _t++) {
          const Jt = n.get(rt[_t]);
          Jt.__webglTexture === void 0 && (Jt.__webglTexture = s.createTexture(), a.memory.textures++);
        }
      if (P.samples > 0 && Et(P) === !1) {
        W.__webglMultisampledFramebuffer = s.createFramebuffer(), W.__webglColorRenderbuffer = [], e.bindFramebuffer(s.FRAMEBUFFER, W.__webglMultisampledFramebuffer);
        for (let _t = 0; _t < rt.length; _t++) {
          const bt = rt[_t];
          W.__webglColorRenderbuffer[_t] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, W.__webglColorRenderbuffer[_t]);
          const Jt = r.convert(bt.format, bt.colorSpace), ut = r.convert(bt.type), Tt = x(bt.internalFormat, Jt, ut, bt.colorSpace, P.isXRRenderTarget === !0), Bt = ht(P);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Bt, Tt, P.width, P.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + _t, s.RENDERBUFFER, W.__webglColorRenderbuffer[_t]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), P.depthBuffer && (W.__webglDepthRenderbuffer = s.createRenderbuffer(), X(W.__webglDepthRenderbuffer, P, !0)), e.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (et) {
      e.bindTexture(s.TEXTURE_CUBE_MAP, tt.__webglTexture), ot(s.TEXTURE_CUBE_MAP, w);
      for (let _t = 0; _t < 6; _t++)
        if (w.mipmaps && w.mipmaps.length > 0)
          for (let bt = 0; bt < w.mipmaps.length; bt++)
            H(W.__webglFramebuffer[_t][bt], P, w, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + _t, bt);
        else
          H(W.__webglFramebuffer[_t], P, w, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + _t, 0);
      g(w) && p(s.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (Pt) {
      for (let _t = 0, bt = rt.length; _t < bt; _t++) {
        const Jt = rt[_t], ut = n.get(Jt);
        e.bindTexture(s.TEXTURE_2D, ut.__webglTexture), ot(s.TEXTURE_2D, Jt), H(W.__webglFramebuffer, P, Jt, s.COLOR_ATTACHMENT0 + _t, s.TEXTURE_2D, 0), g(Jt) && p(s.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let _t = s.TEXTURE_2D;
      if ((P.isWebGL3DRenderTarget || P.isWebGLArrayRenderTarget) && (_t = P.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), e.bindTexture(_t, tt.__webglTexture), ot(_t, w), w.mipmaps && w.mipmaps.length > 0)
        for (let bt = 0; bt < w.mipmaps.length; bt++)
          H(W.__webglFramebuffer[bt], P, w, s.COLOR_ATTACHMENT0, _t, bt);
      else
        H(W.__webglFramebuffer, P, w, s.COLOR_ATTACHMENT0, _t, 0);
      g(w) && p(_t), e.unbindTexture();
    }
    P.depthBuffer && at(P);
  }
  function J(P) {
    const w = P.textures;
    for (let W = 0, tt = w.length; W < tt; W++) {
      const rt = w[W];
      if (g(rt)) {
        const et = y(P), Pt = n.get(rt).__webglTexture;
        e.bindTexture(et, Pt), p(et), e.unbindTexture();
      }
    }
  }
  const lt = [], L = [];
  function wt(P) {
    if (P.samples > 0) {
      if (Et(P) === !1) {
        const w = P.textures, W = P.width, tt = P.height;
        let rt = s.COLOR_BUFFER_BIT;
        const et = P.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Pt = n.get(P), _t = w.length > 1;
        if (_t)
          for (let bt = 0; bt < w.length; bt++)
            e.bindFramebuffer(s.FRAMEBUFFER, Pt.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + bt, s.RENDERBUFFER, null), e.bindFramebuffer(s.FRAMEBUFFER, Pt.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + bt, s.TEXTURE_2D, null, 0);
        e.bindFramebuffer(s.READ_FRAMEBUFFER, Pt.__webglMultisampledFramebuffer), e.bindFramebuffer(s.DRAW_FRAMEBUFFER, Pt.__webglFramebuffer);
        for (let bt = 0; bt < w.length; bt++) {
          if (P.resolveDepthBuffer && (P.depthBuffer && (rt |= s.DEPTH_BUFFER_BIT), P.stencilBuffer && P.resolveStencilBuffer && (rt |= s.STENCIL_BUFFER_BIT)), _t) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, Pt.__webglColorRenderbuffer[bt]);
            const Jt = n.get(w[bt]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Jt, 0);
          }
          s.blitFramebuffer(0, 0, W, tt, 0, 0, W, tt, rt, s.NEAREST), c === !0 && (lt.length = 0, L.length = 0, lt.push(s.COLOR_ATTACHMENT0 + bt), P.depthBuffer && P.resolveDepthBuffer === !1 && (lt.push(et), L.push(et), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, L)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, lt));
        }
        if (e.bindFramebuffer(s.READ_FRAMEBUFFER, null), e.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), _t)
          for (let bt = 0; bt < w.length; bt++) {
            e.bindFramebuffer(s.FRAMEBUFFER, Pt.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + bt, s.RENDERBUFFER, Pt.__webglColorRenderbuffer[bt]);
            const Jt = n.get(w[bt]).__webglTexture;
            e.bindFramebuffer(s.FRAMEBUFFER, Pt.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + bt, s.TEXTURE_2D, Jt, 0);
          }
        e.bindFramebuffer(s.DRAW_FRAMEBUFFER, Pt.__webglMultisampledFramebuffer);
      } else if (P.depthBuffer && P.resolveDepthBuffer === !1 && c) {
        const w = P.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [w]);
      }
    }
  }
  function ht(P) {
    return Math.min(i.maxSamples, P.samples);
  }
  function Et(P) {
    const w = n.get(P);
    return P.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && w.__useRenderToTexture !== !1;
  }
  function mt(P) {
    const w = a.render.frame;
    h.get(P) !== w && (h.set(P, w), P.update());
  }
  function Ot(P, w) {
    const W = P.colorSpace, tt = P.format, rt = P.type;
    return P.isCompressedTexture === !0 || P.isVideoTexture === !0 || W !== os && W !== ai && (Kt.getTransfer(W) === re ? (tt !== $e || rt !== Zn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", W)), w;
  }
  function St(P) {
    return typeof HTMLImageElement < "u" && P instanceof HTMLImageElement ? (l.width = P.naturalWidth || P.width, l.height = P.naturalHeight || P.height) : typeof VideoFrame < "u" && P instanceof VideoFrame ? (l.width = P.displayWidth, l.height = P.displayHeight) : (l.width = P.width, l.height = P.height), l;
  }
  this.allocateTextureUnit = N, this.resetTextureUnits = O, this.setTexture2D = q, this.setTexture2DArray = V, this.setTexture3D = j, this.setTextureCube = G, this.rebindTextures = ct, this.setupRenderTarget = Ut, this.updateRenderTargetMipmap = J, this.updateMultisampleRenderTarget = wt, this.setupDepthRenderbuffer = at, this.setupFrameBufferTexture = H, this.useMultisampledRTT = Et;
}
function Ff(s, t) {
  function e(n, i = ai) {
    let r;
    const a = Kt.getTransfer(i);
    if (n === Zn) return s.UNSIGNED_BYTE;
    if (n === Yo) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === $o) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === Hl) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === kl) return s.BYTE;
    if (n === Vl) return s.SHORT;
    if (n === Os) return s.UNSIGNED_SHORT;
    if (n === qo) return s.INT;
    if (n === di) return s.UNSIGNED_INT;
    if (n === tn) return s.FLOAT;
    if (n === Gs) return s.HALF_FLOAT;
    if (n === Gl) return s.ALPHA;
    if (n === Wl) return s.RGB;
    if (n === $e) return s.RGBA;
    if (n === Xl) return s.LUMINANCE;
    if (n === ql) return s.LUMINANCE_ALPHA;
    if (n === ji) return s.DEPTH_COMPONENT;
    if (n === ss) return s.DEPTH_STENCIL;
    if (n === Zo) return s.RED;
    if (n === Hr) return s.RED_INTEGER;
    if (n === Yl) return s.RG;
    if (n === Jo) return s.RG_INTEGER;
    if (n === Ko) return s.RGBA_INTEGER;
    if (n === _r || n === xr || n === vr || n === yr)
      if (a === re)
        if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
          if (n === _r) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === xr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === vr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === yr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
        if (n === _r) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === xr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === vr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === yr) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (n === uo || n === fo || n === po || n === mo)
      if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
        if (n === uo) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === fo) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === po) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === mo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (n === go || n === _o || n === xo)
      if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
        if (n === go || n === _o) return a === re ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === xo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (n === vo || n === yo || n === Mo || n === So || n === bo || n === wo || n === Eo || n === To || n === Ao || n === Co || n === Ro || n === Po || n === Io || n === Lo)
      if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
        if (n === vo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === yo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Mo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === So) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === bo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === wo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === Eo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === To) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === Ao) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === Co) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ro) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Po) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Io) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Lo) return a === re ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (n === Mr || n === Do || n === Uo)
      if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
        if (n === Mr) return a === re ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === Do) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Uo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (n === $l || n === No || n === Fo || n === Oo)
      if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
        if (n === Mr) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === No) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Fo) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Oo) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return n === is ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: e };
}
class Of extends Re {
  constructor(t = []) {
    super(), this.isArrayCamera = !0, this.cameras = t;
  }
}
class an extends Qt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Zv = { type: "move" };
class Jc {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new an(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new an(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new an(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e)
        for (const n of t.hand.values())
          this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(t, e, n) {
    let i = null, r = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (l && t.hand) {
        a = !0;
        for (const _ of t.hand.values()) {
          const g = e.getJointPose(_, n), p = this._getHandJoint(l, _);
          g !== null && (p.matrix.fromArray(g.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = !0, p.jointRadius = g.radius), p.visible = g !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, m = 5e-3;
        l.inputState.pinching && d > f + m ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: t.handedness,
          target: this
        })) : !l.inputState.pinching && d <= f - m && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: t.handedness,
          target: this
        }));
      } else
        c !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (c.matrix.fromArray(r.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(r.linearVelocity)) : c.hasLinearVelocity = !1, r.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(r.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (i = e.getPose(t.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1, i.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Zv)));
    }
    return o !== null && (o.visible = i !== null), c !== null && (c.visible = r !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new an();
      n.matrixAutoUpdate = !1, n.visible = !1, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const Jv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Kv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class jv {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const i = new _e(), r = t.properties.get(i);
      r.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new vn({
        vertexShader: Jv,
        fragmentShader: Kv,
        uniforms: {
          depthColor: { value: this.texture },
          depthWidth: { value: e.z },
          depthHeight: { value: e.w }
        }
      });
      this.mesh = new qt(new Pn(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Qv extends Jn {
  constructor(t, e) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", c = 1, l = null, h = null, u = null, d = null, f = null, m = null;
    const _ = new jv(), g = e.getContextAttributes();
    let p = null, y = null;
    const x = [], v = [], E = new nt();
    let b = null;
    const C = new Re();
    C.viewport = new Zt();
    const A = new Re();
    A.viewport = new Zt();
    const S = [C, A], M = new Of();
    let I = null, O = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(D) {
      let k = x[D];
      return k === void 0 && (k = new Jc(), x[D] = k), k.getTargetRaySpace();
    }, this.getControllerGrip = function(D) {
      let k = x[D];
      return k === void 0 && (k = new Jc(), x[D] = k), k.getGripSpace();
    }, this.getHand = function(D) {
      let k = x[D];
      return k === void 0 && (k = new Jc(), x[D] = k), k.getHandSpace();
    };
    function N(D) {
      const k = v.indexOf(D.inputSource);
      if (k === -1)
        return;
      const H = x[k];
      H !== void 0 && (H.update(D.inputSource, D.frame, l || a), H.dispatchEvent({ type: D.type, data: D.inputSource }));
    }
    function U() {
      i.removeEventListener("select", N), i.removeEventListener("selectstart", N), i.removeEventListener("selectend", N), i.removeEventListener("squeeze", N), i.removeEventListener("squeezestart", N), i.removeEventListener("squeezeend", N), i.removeEventListener("end", U), i.removeEventListener("inputsourceschange", q);
      for (let D = 0; D < x.length; D++) {
        const k = v[D];
        k !== null && (v[D] = null, x[D].disconnect(k));
      }
      I = null, O = null, _.reset(), t.setRenderTarget(p), f = null, d = null, u = null, i = null, y = null, Rt.stop(), n.isPresenting = !1, t.setPixelRatio(b), t.setSize(E.width, E.height, !1), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(D) {
      r = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(D) {
      o = D, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(D) {
      l = D;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return m;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(D) {
      if (i = D, i !== null) {
        if (p = t.getRenderTarget(), i.addEventListener("select", N), i.addEventListener("selectstart", N), i.addEventListener("selectend", N), i.addEventListener("squeeze", N), i.addEventListener("squeezestart", N), i.addEventListener("squeezeend", N), i.addEventListener("end", U), i.addEventListener("inputsourceschange", q), g.xrCompatible !== !0 && await e.makeXRCompatible(), b = t.getPixelRatio(), t.getSize(E), i.renderState.layers === void 0) {
          const k = {
            antialias: g.antialias,
            alpha: !0,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: r
          };
          f = new XRWebGLLayer(i, e, k), i.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, !1), y = new Rn(
            f.framebufferWidth,
            f.framebufferHeight,
            {
              format: $e,
              type: Zn,
              colorSpace: t.outputColorSpace,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let k = null, H = null, X = null;
          g.depth && (X = g.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, k = g.stencil ? ss : ji, H = g.stencil ? is : di);
          const Q = {
            colorFormat: e.RGBA8,
            depthFormat: X,
            scaleFactor: r
          };
          u = new XRWebGLBinding(i, e), d = u.createProjectionLayer(Q), i.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, !1), y = new Rn(
            d.textureWidth,
            d.textureHeight,
            {
              format: $e,
              type: Zn,
              depthTexture: new ih(d.textureWidth, d.textureHeight, H, void 0, void 0, void 0, void 0, void 0, void 0, k),
              stencilBuffer: g.stencil,
              colorSpace: t.outputColorSpace,
              samples: g.antialias ? 4 : 0,
              resolveDepthBuffer: d.ignoreDepthValues === !1
            }
          );
        }
        y.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await i.requestReferenceSpace(o), Rt.setContext(i), Rt.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null)
        return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function q(D) {
      for (let k = 0; k < D.removed.length; k++) {
        const H = D.removed[k], X = v.indexOf(H);
        X >= 0 && (v[X] = null, x[X].disconnect(H));
      }
      for (let k = 0; k < D.added.length; k++) {
        const H = D.added[k];
        let X = v.indexOf(H);
        if (X === -1) {
          for (let at = 0; at < x.length; at++)
            if (at >= v.length) {
              v.push(H), X = at;
              break;
            } else if (v[at] === null) {
              v[at] = H, X = at;
              break;
            }
          if (X === -1) break;
        }
        const Q = x[X];
        Q && Q.connect(H);
      }
    }
    const V = new R(), j = new R();
    function G(D, k, H) {
      V.setFromMatrixPosition(k.matrixWorld), j.setFromMatrixPosition(H.matrixWorld);
      const X = V.distanceTo(j), Q = k.projectionMatrix.elements, at = H.projectionMatrix.elements, ct = Q[14] / (Q[10] - 1), Ut = Q[14] / (Q[10] + 1), J = (Q[9] + 1) / Q[5], lt = (Q[9] - 1) / Q[5], L = (Q[8] - 1) / Q[0], wt = (at[8] + 1) / at[0], ht = ct * L, Et = ct * wt, mt = X / (-L + wt), Ot = mt * -L;
      if (k.matrixWorld.decompose(D.position, D.quaternion, D.scale), D.translateX(Ot), D.translateZ(mt), D.matrixWorld.compose(D.position, D.quaternion, D.scale), D.matrixWorldInverse.copy(D.matrixWorld).invert(), Q[10] === -1)
        D.projectionMatrix.copy(k.projectionMatrix), D.projectionMatrixInverse.copy(k.projectionMatrixInverse);
      else {
        const St = ct + mt, P = Ut + mt, w = ht - Ot, W = Et + (X - Ot), tt = J * Ut / P * St, rt = lt * Ut / P * St;
        D.projectionMatrix.makePerspective(w, W, tt, rt, St, P), D.projectionMatrixInverse.copy(D.projectionMatrix).invert();
      }
    }
    function st(D, k) {
      k === null ? D.matrixWorld.copy(D.matrix) : D.matrixWorld.multiplyMatrices(k.matrixWorld, D.matrix), D.matrixWorldInverse.copy(D.matrixWorld).invert();
    }
    this.updateCamera = function(D) {
      if (i === null) return;
      let k = D.near, H = D.far;
      _.texture !== null && (_.depthNear > 0 && (k = _.depthNear), _.depthFar > 0 && (H = _.depthFar)), M.near = A.near = C.near = k, M.far = A.far = C.far = H, (I !== M.near || O !== M.far) && (i.updateRenderState({
        depthNear: M.near,
        depthFar: M.far
      }), I = M.near, O = M.far), C.layers.mask = D.layers.mask | 2, A.layers.mask = D.layers.mask | 4, M.layers.mask = C.layers.mask | A.layers.mask;
      const X = D.parent, Q = M.cameras;
      st(M, X);
      for (let at = 0; at < Q.length; at++)
        st(Q[at], X);
      Q.length === 2 ? G(M, C, A) : M.projectionMatrix.copy(C.projectionMatrix), dt(D, M, X);
    };
    function dt(D, k, H) {
      H === null ? D.matrix.copy(k.matrixWorld) : (D.matrix.copy(H.matrixWorld), D.matrix.invert(), D.matrix.multiply(k.matrixWorld)), D.matrix.decompose(D.position, D.quaternion, D.scale), D.updateMatrixWorld(!0), D.projectionMatrix.copy(k.projectionMatrix), D.projectionMatrixInverse.copy(k.projectionMatrixInverse), D.isPerspectiveCamera && (D.fov = Bs * 2 * Math.atan(1 / D.projectionMatrix.elements[5]), D.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && f === null))
        return c;
    }, this.setFoveation = function(D) {
      c = D, d !== null && (d.fixedFoveation = D), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = D);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let Z = null;
    function ot(D, k) {
      if (h = k.getViewerPose(l || a), m = k, h !== null) {
        const H = h.views;
        f !== null && (t.setRenderTargetFramebuffer(y, f.framebuffer), t.setRenderTarget(y));
        let X = !1;
        H.length !== M.cameras.length && (M.cameras.length = 0, X = !0);
        for (let at = 0; at < H.length; at++) {
          const ct = H[at];
          let Ut = null;
          if (f !== null)
            Ut = f.getViewport(ct);
          else {
            const lt = u.getViewSubImage(d, ct);
            Ut = lt.viewport, at === 0 && (t.setRenderTargetTextures(
              y,
              lt.colorTexture,
              d.ignoreDepthValues ? void 0 : lt.depthStencilTexture
            ), t.setRenderTarget(y));
          }
          let J = S[at];
          J === void 0 && (J = new Re(), J.layers.enable(at), J.viewport = new Zt(), S[at] = J), J.matrix.fromArray(ct.transform.matrix), J.matrix.decompose(J.position, J.quaternion, J.scale), J.projectionMatrix.fromArray(ct.projectionMatrix), J.projectionMatrixInverse.copy(J.projectionMatrix).invert(), J.viewport.set(Ut.x, Ut.y, Ut.width, Ut.height), at === 0 && (M.matrix.copy(J.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), X === !0 && M.cameras.push(J);
        }
        const Q = i.enabledFeatures;
        if (Q && Q.includes("depth-sensing")) {
          const at = u.getDepthInformation(H[0]);
          at && at.isValid && at.texture && _.init(t, at, i.renderState);
        }
      }
      for (let H = 0; H < x.length; H++) {
        const X = v[H], Q = x[H];
        X !== null && Q !== void 0 && Q.update(X, k, l || a);
      }
      Z && Z(D, k), k.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: k }), m = null;
    }
    const Rt = new If();
    Rt.setAnimationLoop(ot), this.setAnimationLoop = function(D) {
      Z = D;
    }, this.dispose = function() {
    };
  }
}
const Ni = /* @__PURE__ */ new hn(), ty = /* @__PURE__ */ new Ft();
function ey(s, t) {
  function e(g, p) {
    g.matrixAutoUpdate === !0 && g.updateMatrix(), p.value.copy(g.matrix);
  }
  function n(g, p) {
    p.color.getRGB(g.fogColor.value, Cf(s)), p.isFog ? (g.fogNear.value = p.near, g.fogFar.value = p.far) : p.isFogExp2 && (g.fogDensity.value = p.density);
  }
  function i(g, p, y, x, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(g, p) : p.isMeshToonMaterial ? (r(g, p), u(g, p)) : p.isMeshPhongMaterial ? (r(g, p), h(g, p)) : p.isMeshStandardMaterial ? (r(g, p), d(g, p), p.isMeshPhysicalMaterial && f(g, p, v)) : p.isMeshMatcapMaterial ? (r(g, p), m(g, p)) : p.isMeshDepthMaterial ? r(g, p) : p.isMeshDistanceMaterial ? (r(g, p), _(g, p)) : p.isMeshNormalMaterial ? r(g, p) : p.isLineBasicMaterial ? (a(g, p), p.isLineDashedMaterial && o(g, p)) : p.isPointsMaterial ? c(g, p, y, x) : p.isSpriteMaterial ? l(g, p) : p.isShadowMaterial ? (g.color.value.copy(p.color), g.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(g, p) {
    g.opacity.value = p.opacity, p.color && g.diffuse.value.copy(p.color), p.emissive && g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.bumpMap && (g.bumpMap.value = p.bumpMap, e(p.bumpMap, g.bumpMapTransform), g.bumpScale.value = p.bumpScale, p.side === Ue && (g.bumpScale.value *= -1)), p.normalMap && (g.normalMap.value = p.normalMap, e(p.normalMap, g.normalMapTransform), g.normalScale.value.copy(p.normalScale), p.side === Ue && g.normalScale.value.negate()), p.displacementMap && (g.displacementMap.value = p.displacementMap, e(p.displacementMap, g.displacementMapTransform), g.displacementScale.value = p.displacementScale, g.displacementBias.value = p.displacementBias), p.emissiveMap && (g.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, g.emissiveMapTransform)), p.specularMap && (g.specularMap.value = p.specularMap, e(p.specularMap, g.specularMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
    const y = t.get(p), x = y.envMap, v = y.envMapRotation;
    x && (g.envMap.value = x, Ni.copy(v), Ni.x *= -1, Ni.y *= -1, Ni.z *= -1, x.isCubeTexture && x.isRenderTargetTexture === !1 && (Ni.y *= -1, Ni.z *= -1), g.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(Ni)), g.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, g.reflectivity.value = p.reflectivity, g.ior.value = p.ior, g.refractionRatio.value = p.refractionRatio), p.lightMap && (g.lightMap.value = p.lightMap, g.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, g.lightMapTransform)), p.aoMap && (g.aoMap.value = p.aoMap, g.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, g.aoMapTransform));
  }
  function a(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, p.map && (g.map.value = p.map, e(p.map, g.mapTransform));
  }
  function o(g, p) {
    g.dashSize.value = p.dashSize, g.totalSize.value = p.dashSize + p.gapSize, g.scale.value = p.scale;
  }
  function c(g, p, y, x) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.size.value = p.size * y, g.scale.value = x * 0.5, p.map && (g.map.value = p.map, e(p.map, g.uvTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function l(g, p) {
    g.diffuse.value.copy(p.color), g.opacity.value = p.opacity, g.rotation.value = p.rotation, p.map && (g.map.value = p.map, e(p.map, g.mapTransform)), p.alphaMap && (g.alphaMap.value = p.alphaMap, e(p.alphaMap, g.alphaMapTransform)), p.alphaTest > 0 && (g.alphaTest.value = p.alphaTest);
  }
  function h(g, p) {
    g.specular.value.copy(p.specular), g.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(g, p) {
    p.gradientMap && (g.gradientMap.value = p.gradientMap);
  }
  function d(g, p) {
    g.metalness.value = p.metalness, p.metalnessMap && (g.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, g.metalnessMapTransform)), g.roughness.value = p.roughness, p.roughnessMap && (g.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, g.roughnessMapTransform)), p.envMap && (g.envMapIntensity.value = p.envMapIntensity);
  }
  function f(g, p, y) {
    g.ior.value = p.ior, p.sheen > 0 && (g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), g.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (g.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, g.sheenColorMapTransform)), p.sheenRoughnessMap && (g.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, g.sheenRoughnessMapTransform))), p.clearcoat > 0 && (g.clearcoat.value = p.clearcoat, g.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (g.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, g.clearcoatMapTransform)), p.clearcoatRoughnessMap && (g.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, g.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (g.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, g.clearcoatNormalMapTransform), g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === Ue && g.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (g.dispersion.value = p.dispersion), p.iridescence > 0 && (g.iridescence.value = p.iridescence, g.iridescenceIOR.value = p.iridescenceIOR, g.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], g.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (g.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, g.iridescenceMapTransform)), p.iridescenceThicknessMap && (g.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, g.iridescenceThicknessMapTransform))), p.transmission > 0 && (g.transmission.value = p.transmission, g.transmissionSamplerMap.value = y.texture, g.transmissionSamplerSize.value.set(y.width, y.height), p.transmissionMap && (g.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, g.transmissionMapTransform)), g.thickness.value = p.thickness, p.thicknessMap && (g.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, g.thicknessMapTransform)), g.attenuationDistance.value = p.attenuationDistance, g.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (g.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (g.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, g.anisotropyMapTransform))), g.specularIntensity.value = p.specularIntensity, g.specularColor.value.copy(p.specularColor), p.specularColorMap && (g.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, g.specularColorMapTransform)), p.specularIntensityMap && (g.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, g.specularIntensityMapTransform));
  }
  function m(g, p) {
    p.matcap && (g.matcap.value = p.matcap);
  }
  function _(g, p) {
    const y = t.get(p).light;
    g.referencePosition.value.setFromMatrixPosition(y.matrixWorld), g.nearDistance.value = y.shadow.camera.near, g.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: i
  };
}
function ny(s, t, e, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(y, x) {
    const v = x.program;
    n.uniformBlockBinding(y, v);
  }
  function l(y, x) {
    let v = i[y.id];
    v === void 0 && (m(y), v = h(y), i[y.id] = v, y.addEventListener("dispose", g));
    const E = x.program;
    n.updateUBOMapping(y, E);
    const b = t.render.frame;
    r[y.id] !== b && (d(y), r[y.id] = b);
  }
  function h(y) {
    const x = u();
    y.__bindingPointIndex = x;
    const v = s.createBuffer(), E = y.__size, b = y.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, v), s.bufferData(s.UNIFORM_BUFFER, E, b), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, x, v), v;
  }
  function u() {
    for (let y = 0; y < o; y++)
      if (a.indexOf(y) === -1)
        return a.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const x = i[y.id], v = y.uniforms, E = y.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, x);
    for (let b = 0, C = v.length; b < C; b++) {
      const A = Array.isArray(v[b]) ? v[b] : [v[b]];
      for (let S = 0, M = A.length; S < M; S++) {
        const I = A[S];
        if (f(I, b, S, E) === !0) {
          const O = I.__offset, N = Array.isArray(I.value) ? I.value : [I.value];
          let U = 0;
          for (let q = 0; q < N.length; q++) {
            const V = N[q], j = _(V);
            typeof V == "number" || typeof V == "boolean" ? (I.__data[0] = V, s.bufferSubData(s.UNIFORM_BUFFER, O + U, I.__data)) : V.isMatrix3 ? (I.__data[0] = V.elements[0], I.__data[1] = V.elements[1], I.__data[2] = V.elements[2], I.__data[3] = 0, I.__data[4] = V.elements[3], I.__data[5] = V.elements[4], I.__data[6] = V.elements[5], I.__data[7] = 0, I.__data[8] = V.elements[6], I.__data[9] = V.elements[7], I.__data[10] = V.elements[8], I.__data[11] = 0) : (V.toArray(I.__data, U), U += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, O, I.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function f(y, x, v, E) {
    const b = y.value, C = x + "_" + v;
    if (E[C] === void 0)
      return typeof b == "number" || typeof b == "boolean" ? E[C] = b : E[C] = b.clone(), !0;
    {
      const A = E[C];
      if (typeof b == "number" || typeof b == "boolean") {
        if (A !== b)
          return E[C] = b, !0;
      } else if (A.equals(b) === !1)
        return A.copy(b), !0;
    }
    return !1;
  }
  function m(y) {
    const x = y.uniforms;
    let v = 0;
    const E = 16;
    for (let C = 0, A = x.length; C < A; C++) {
      const S = Array.isArray(x[C]) ? x[C] : [x[C]];
      for (let M = 0, I = S.length; M < I; M++) {
        const O = S[M], N = Array.isArray(O.value) ? O.value : [O.value];
        for (let U = 0, q = N.length; U < q; U++) {
          const V = N[U], j = _(V), G = v % E, st = G % j.boundary, dt = G + st;
          v += st, dt !== 0 && E - dt < j.storage && (v += E - dt), O.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), O.__offset = v, v += j.storage;
        }
      }
    }
    const b = v % E;
    return b > 0 && (v += E - b), y.__size = v, y.__cache = {}, this;
  }
  function _(y) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" || typeof y == "boolean" ? (x.boundary = 4, x.storage = 4) : y.isVector2 ? (x.boundary = 8, x.storage = 8) : y.isVector3 || y.isColor ? (x.boundary = 16, x.storage = 12) : y.isVector4 ? (x.boundary = 16, x.storage = 16) : y.isMatrix3 ? (x.boundary = 48, x.storage = 48) : y.isMatrix4 ? (x.boundary = 64, x.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), x;
  }
  function g(y) {
    const x = y.target;
    x.removeEventListener("dispose", g);
    const v = a.indexOf(x.__bindingPointIndex);
    a.splice(v, 1), s.deleteBuffer(i[x.id]), delete i[x.id], delete r[x.id];
  }
  function p() {
    for (const y in i)
      s.deleteBuffer(i[y]);
    a = [], i = {}, r = {};
  }
  return {
    bind: c,
    update: l,
    dispose: p
  };
}
class Bf {
  constructor(t = {}) {
    const {
      canvas: e = wf(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reverseDepthBuffer: d = !1
    } = t;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
        throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else
      f = a;
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let g = null, p = null;
    const y = [], x = [];
    this.domElement = e, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Se, this.toneMapping = Xn, this.toneMappingExposure = 1;
    const v = this;
    let E = !1, b = 0, C = 0, A = null, S = -1, M = null;
    const I = new Zt(), O = new Zt();
    let N = null;
    const U = new gt(0);
    let q = 0, V = e.width, j = e.height, G = 1, st = null, dt = null;
    const Z = new Zt(0, 0, V, j), ot = new Zt(0, 0, V, j);
    let Rt = !1;
    const D = new Xr();
    let k = !1, H = !1;
    const X = new Ft(), Q = new Ft(), at = new R(), ct = new Zt(), Ut = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    let J = !1;
    function lt() {
      return A === null ? G : 1;
    }
    let L = n;
    function wt(T, B) {
      return e.getContext(T, B);
    }
    try {
      const T = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in e && e.setAttribute("data-engine", "three.js r170"), e.addEventListener("webglcontextlost", it, !1), e.addEventListener("webglcontextrestored", Mt, !1), e.addEventListener("webglcontextcreationerror", vt, !1), L === null) {
        const B = "webgl2";
        if (L = wt(B, T), L === null)
          throw wt(B) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (T) {
      throw console.error("THREE.WebGLRenderer: " + T.message), T;
    }
    let ht, Et, mt, Ot, St, P, w, W, tt, rt, et, Pt, _t, bt, Jt, ut, Tt, Bt, zt, At, jt, $t, oe, F;
    function xt() {
      ht = new cx(L), ht.init(), $t = new Ff(L, ht), Et = new nx(L, ht, t, $t), mt = new Hv(L, ht), Et.reverseDepthBuffer && d && mt.buffers.depth.setReversed(!0), Ot = new ux(L), St = new Rv(), P = new $v(L, ht, mt, St, Et, $t, Ot), w = new sx(v), W = new ox(v), tt = new xg(L), oe = new tx(L, tt), rt = new lx(L, tt, Ot, oe), et = new fx(L, rt, tt, Ot), zt = new dx(L, Et, P), ut = new ix(St), Pt = new Cv(v, w, W, ht, Et, oe, ut), _t = new ey(v, St), bt = new Iv(), Jt = new Ov(ht), Bt = new Q_(v, w, W, mt, et, f, c), Tt = new kv(v, et, Et), F = new ny(L, Ot, Et, mt), At = new ex(L, ht, Ot), jt = new hx(L, ht, Ot), Ot.programs = Pt.programs, v.capabilities = Et, v.extensions = ht, v.properties = St, v.renderLists = bt, v.shadowMap = Tt, v.state = mt, v.info = Ot;
    }
    xt();
    const K = new Qv(v, L);
    this.xr = K, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const T = ht.get("WEBGL_lose_context");
      T && T.loseContext();
    }, this.forceContextRestore = function() {
      const T = ht.get("WEBGL_lose_context");
      T && T.restoreContext();
    }, this.getPixelRatio = function() {
      return G;
    }, this.setPixelRatio = function(T) {
      T !== void 0 && (G = T, this.setSize(V, j, !1));
    }, this.getSize = function(T) {
      return T.set(V, j);
    }, this.setSize = function(T, B, Y = !0) {
      if (K.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      V = T, j = B, e.width = Math.floor(T * G), e.height = Math.floor(B * G), Y === !0 && (e.style.width = T + "px", e.style.height = B + "px"), this.setViewport(0, 0, T, B);
    }, this.getDrawingBufferSize = function(T) {
      return T.set(V * G, j * G).floor();
    }, this.setDrawingBufferSize = function(T, B, Y) {
      V = T, j = B, G = Y, e.width = Math.floor(T * Y), e.height = Math.floor(B * Y), this.setViewport(0, 0, T, B);
    }, this.getCurrentViewport = function(T) {
      return T.copy(I);
    }, this.getViewport = function(T) {
      return T.copy(Z);
    }, this.setViewport = function(T, B, Y, $) {
      T.isVector4 ? Z.set(T.x, T.y, T.z, T.w) : Z.set(T, B, Y, $), mt.viewport(I.copy(Z).multiplyScalar(G).round());
    }, this.getScissor = function(T) {
      return T.copy(ot);
    }, this.setScissor = function(T, B, Y, $) {
      T.isVector4 ? ot.set(T.x, T.y, T.z, T.w) : ot.set(T, B, Y, $), mt.scissor(O.copy(ot).multiplyScalar(G).round());
    }, this.getScissorTest = function() {
      return Rt;
    }, this.setScissorTest = function(T) {
      mt.setScissorTest(Rt = T);
    }, this.setOpaqueSort = function(T) {
      st = T;
    }, this.setTransparentSort = function(T) {
      dt = T;
    }, this.getClearColor = function(T) {
      return T.copy(Bt.getClearColor());
    }, this.setClearColor = function() {
      Bt.setClearColor.apply(Bt, arguments);
    }, this.getClearAlpha = function() {
      return Bt.getClearAlpha();
    }, this.setClearAlpha = function() {
      Bt.setClearAlpha.apply(Bt, arguments);
    }, this.clear = function(T = !0, B = !0, Y = !0) {
      let $ = 0;
      if (T) {
        let z = !1;
        if (A !== null) {
          const ft = A.texture.format;
          z = ft === Ko || ft === Jo || ft === Hr;
        }
        if (z) {
          const ft = A.texture.type, yt = ft === Zn || ft === di || ft === Os || ft === is || ft === Yo || ft === $o, It = Bt.getClearColor(), Lt = Bt.getClearAlpha(), kt = It.r, Wt = It.g, Dt = It.b;
          yt ? (m[0] = kt, m[1] = Wt, m[2] = Dt, m[3] = Lt, L.clearBufferuiv(L.COLOR, 0, m)) : (_[0] = kt, _[1] = Wt, _[2] = Dt, _[3] = Lt, L.clearBufferiv(L.COLOR, 0, _));
        } else
          $ |= L.COLOR_BUFFER_BIT;
      }
      B && ($ |= L.DEPTH_BUFFER_BIT), Y && ($ |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), L.clear($);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", it, !1), e.removeEventListener("webglcontextrestored", Mt, !1), e.removeEventListener("webglcontextcreationerror", vt, !1), bt.dispose(), Jt.dispose(), St.dispose(), w.dispose(), W.dispose(), et.dispose(), oe.dispose(), F.dispose(), Pt.dispose(), K.dispose(), K.removeEventListener("sessionstart", Dh), K.removeEventListener("sessionend", Uh), Ri.stop();
    };
    function it(T) {
      T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), E = !0;
    }
    function Mt() {
      console.log("THREE.WebGLRenderer: Context Restored."), E = !1;
      const T = Ot.autoReset, B = Tt.enabled, Y = Tt.autoUpdate, $ = Tt.needsUpdate, z = Tt.type;
      xt(), Ot.autoReset = T, Tt.enabled = B, Tt.autoUpdate = Y, Tt.needsUpdate = $, Tt.type = z;
    }
    function vt(T) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
    }
    function Gt(T) {
      const B = T.target;
      B.removeEventListener("dispose", Gt), pe(B);
    }
    function pe(T) {
      Fe(T), St.remove(T);
    }
    function Fe(T) {
      const B = St.get(T).programs;
      B !== void 0 && (B.forEach(function(Y) {
        Pt.releaseProgram(Y);
      }), T.isShaderMaterial && Pt.releaseShaderCache(T));
    }
    this.renderBufferDirect = function(T, B, Y, $, z, ft) {
      B === null && (B = Ut);
      const yt = z.isMesh && z.matrixWorld.determinant() < 0, It = kp(T, B, Y, $, z);
      mt.setMaterial($, yt);
      let Lt = Y.index, kt = 1;
      if ($.wireframe === !0) {
        if (Lt = rt.getWireframeAttribute(Y), Lt === void 0) return;
        kt = 2;
      }
      const Wt = Y.drawRange, Dt = Y.attributes.position;
      let ee = Wt.start * kt, ce = (Wt.start + Wt.count) * kt;
      ft !== null && (ee = Math.max(ee, ft.start * kt), ce = Math.min(ce, (ft.start + ft.count) * kt)), Lt !== null ? (ee = Math.max(ee, 0), ce = Math.min(ce, Lt.count)) : Dt != null && (ee = Math.max(ee, 0), ce = Math.min(ce, Dt.count));
      const le = ce - ee;
      if (le < 0 || le === 1 / 0) return;
      oe.setup(z, $, It, Y, Lt);
      let Je, ne = At;
      if (Lt !== null && (Je = tt.get(Lt), ne = jt, ne.setIndex(Je)), z.isMesh)
        $.wireframe === !0 ? (mt.setLineWidth($.wireframeLinewidth * lt()), ne.setMode(L.LINES)) : ne.setMode(L.TRIANGLES);
      else if (z.isLine) {
        let Nt = $.linewidth;
        Nt === void 0 && (Nt = 1), mt.setLineWidth(Nt * lt()), z.isLineSegments ? ne.setMode(L.LINES) : z.isLineLoop ? ne.setMode(L.LINE_LOOP) : ne.setMode(L.LINE_STRIP);
      } else z.isPoints ? ne.setMode(L.POINTS) : z.isSprite && ne.setMode(L.TRIANGLES);
      if (z.isBatchedMesh)
        if (z._multiDrawInstances !== null)
          ne.renderMultiDrawInstances(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount, z._multiDrawInstances);
        else if (ht.get("WEBGL_multi_draw"))
          ne.renderMultiDraw(z._multiDrawStarts, z._multiDrawCounts, z._multiDrawCount);
        else {
          const Nt = z._multiDrawStarts, jn = z._multiDrawCounts, ie = z._multiDrawCount, Mn = Lt ? tt.get(Lt).bytesPerElement : 1, hs = St.get($).currentProgram.getUniforms();
          for (let nn = 0; nn < ie; nn++)
            hs.setValue(L, "_gl_DrawID", nn), ne.render(Nt[nn] / Mn, jn[nn]);
        }
      else if (z.isInstancedMesh)
        ne.renderInstances(ee, le, z.count);
      else if (Y.isInstancedBufferGeometry) {
        const Nt = Y._maxInstanceCount !== void 0 ? Y._maxInstanceCount : 1 / 0, jn = Math.min(Y.instanceCount, Nt);
        ne.renderInstances(ee, le, jn);
      } else
        ne.render(ee, le);
    };
    function se(T, B, Y) {
      T.transparent === !0 && T.side === gn && T.forceSinglePass === !1 ? (T.side = Ue, T.needsUpdate = !0, ta(T, B, Y), T.side = Cn, T.needsUpdate = !0, ta(T, B, Y), T.side = gn) : ta(T, B, Y);
    }
    this.compile = function(T, B, Y = null) {
      Y === null && (Y = T), p = Jt.get(Y), p.init(B), x.push(p), Y.traverseVisible(function(z) {
        z.isLight && z.layers.test(B.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), T !== Y && T.traverseVisible(function(z) {
        z.isLight && z.layers.test(B.layers) && (p.pushLight(z), z.castShadow && p.pushShadow(z));
      }), p.setupLights();
      const $ = /* @__PURE__ */ new Set();
      return T.traverse(function(z) {
        if (!(z.isMesh || z.isPoints || z.isLine || z.isSprite))
          return;
        const ft = z.material;
        if (ft)
          if (Array.isArray(ft))
            for (let yt = 0; yt < ft.length; yt++) {
              const It = ft[yt];
              se(It, Y, z), $.add(It);
            }
          else
            se(ft, Y, z), $.add(ft);
      }), x.pop(), p = null, $;
    }, this.compileAsync = function(T, B, Y = null) {
      const $ = this.compile(T, B, Y);
      return new Promise((z) => {
        function ft() {
          if ($.forEach(function(yt) {
            St.get(yt).currentProgram.isReady() && $.delete(yt);
          }), $.size === 0) {
            z(T);
            return;
          }
          setTimeout(ft, 10);
        }
        ht.get("KHR_parallel_shader_compile") !== null ? ft() : setTimeout(ft, 10);
      });
    };
    let yn = null;
    function Kn(T) {
      yn && yn(T);
    }
    function Dh() {
      Ri.stop();
    }
    function Uh() {
      Ri.start();
    }
    const Ri = new If();
    Ri.setAnimationLoop(Kn), typeof self < "u" && Ri.setContext(self), this.setAnimationLoop = function(T) {
      yn = T, K.setAnimationLoop(T), T === null ? Ri.stop() : Ri.start();
    }, K.addEventListener("sessionstart", Dh), K.addEventListener("sessionend", Uh), this.render = function(T, B) {
      if (B !== void 0 && B.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (E === !0) return;
      if (T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(), B.parent === null && B.matrixWorldAutoUpdate === !0 && B.updateMatrixWorld(), K.enabled === !0 && K.isPresenting === !0 && (K.cameraAutoUpdate === !0 && K.updateCamera(B), B = K.getCamera()), T.isScene === !0 && T.onBeforeRender(v, T, B, A), p = Jt.get(T, x.length), p.init(B), x.push(p), Q.multiplyMatrices(B.projectionMatrix, B.matrixWorldInverse), D.setFromProjectionMatrix(Q), H = this.localClippingEnabled, k = ut.init(this.clippingPlanes, H), g = bt.get(T, y.length), g.init(), y.push(g), K.enabled === !0 && K.isPresenting === !0) {
        const ft = v.xr.getDepthSensingMesh();
        ft !== null && bc(ft, B, -1 / 0, v.sortObjects);
      }
      bc(T, B, 0, v.sortObjects), g.finish(), v.sortObjects === !0 && g.sort(st, dt), J = K.enabled === !1 || K.isPresenting === !1 || K.hasDepthSensing() === !1, J && Bt.addToRenderList(g, T), this.info.render.frame++, k === !0 && ut.beginShadows();
      const Y = p.state.shadowsArray;
      Tt.render(Y, T, B), k === !0 && ut.endShadows(), this.info.autoReset === !0 && this.info.reset();
      const $ = g.opaque, z = g.transmissive;
      if (p.setupLights(), B.isArrayCamera) {
        const ft = B.cameras;
        if (z.length > 0)
          for (let yt = 0, It = ft.length; yt < It; yt++) {
            const Lt = ft[yt];
            Fh($, z, T, Lt);
          }
        J && Bt.render(T);
        for (let yt = 0, It = ft.length; yt < It; yt++) {
          const Lt = ft[yt];
          Nh(g, T, Lt, Lt.viewport);
        }
      } else
        z.length > 0 && Fh($, z, T, B), J && Bt.render(T), Nh(g, T, B);
      A !== null && (P.updateMultisampleRenderTarget(A), P.updateRenderTargetMipmap(A)), T.isScene === !0 && T.onAfterRender(v, T, B), oe.resetDefaultState(), S = -1, M = null, x.pop(), x.length > 0 ? (p = x[x.length - 1], k === !0 && ut.setGlobalState(v.clippingPlanes, p.state.camera)) : p = null, y.pop(), y.length > 0 ? g = y[y.length - 1] : g = null;
    };
    function bc(T, B, Y, $) {
      if (T.visible === !1) return;
      if (T.layers.test(B.layers)) {
        if (T.isGroup)
          Y = T.renderOrder;
        else if (T.isLOD)
          T.autoUpdate === !0 && T.update(B);
        else if (T.isLight)
          p.pushLight(T), T.castShadow && p.pushShadow(T);
        else if (T.isSprite) {
          if (!T.frustumCulled || D.intersectsSprite(T)) {
            $ && ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);
            const yt = et.update(T), It = T.material;
            It.visible && g.push(T, yt, It, Y, ct.z, null);
          }
        } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || D.intersectsObject(T))) {
          const yt = et.update(T), It = T.material;
          if ($ && (T.boundingSphere !== void 0 ? (T.boundingSphere === null && T.computeBoundingSphere(), ct.copy(T.boundingSphere.center)) : (yt.boundingSphere === null && yt.computeBoundingSphere(), ct.copy(yt.boundingSphere.center)), ct.applyMatrix4(T.matrixWorld).applyMatrix4(Q)), Array.isArray(It)) {
            const Lt = yt.groups;
            for (let kt = 0, Wt = Lt.length; kt < Wt; kt++) {
              const Dt = Lt[kt], ee = It[Dt.materialIndex];
              ee && ee.visible && g.push(T, yt, ee, Y, ct.z, Dt);
            }
          } else It.visible && g.push(T, yt, It, Y, ct.z, null);
        }
      }
      const ft = T.children;
      for (let yt = 0, It = ft.length; yt < It; yt++)
        bc(ft[yt], B, Y, $);
    }
    function Nh(T, B, Y, $) {
      const z = T.opaque, ft = T.transmissive, yt = T.transparent;
      p.setupLightsView(Y), k === !0 && ut.setGlobalState(v.clippingPlanes, Y), $ && mt.viewport(I.copy($)), z.length > 0 && Qr(z, B, Y), ft.length > 0 && Qr(ft, B, Y), yt.length > 0 && Qr(yt, B, Y), mt.buffers.depth.setTest(!0), mt.buffers.depth.setMask(!0), mt.buffers.color.setMask(!0), mt.setPolygonOffset(!1);
    }
    function Fh(T, B, Y, $) {
      if ((Y.isScene === !0 ? Y.overrideMaterial : null) !== null)
        return;
      p.state.transmissionRenderTarget[$.id] === void 0 && (p.state.transmissionRenderTarget[$.id] = new Rn(1, 1, {
        generateMipmaps: !0,
        type: ht.has("EXT_color_buffer_half_float") || ht.has("EXT_color_buffer_float") ? Gs : Zn,
        minFilter: An,
        samples: 4,
        stencilBuffer: r,
        resolveDepthBuffer: !1,
        resolveStencilBuffer: !1,
        colorSpace: Kt.workingColorSpace
      }));
      const ft = p.state.transmissionRenderTarget[$.id], yt = $.viewport || I;
      ft.setSize(yt.z, yt.w);
      const It = v.getRenderTarget();
      v.setRenderTarget(ft), v.getClearColor(U), q = v.getClearAlpha(), q < 1 && v.setClearColor(16777215, 0.5), v.clear(), J && Bt.render(Y);
      const Lt = v.toneMapping;
      v.toneMapping = Xn;
      const kt = $.viewport;
      if ($.viewport !== void 0 && ($.viewport = void 0), p.setupLightsView($), k === !0 && ut.setGlobalState(v.clippingPlanes, $), Qr(T, Y, $), P.updateMultisampleRenderTarget(ft), P.updateRenderTargetMipmap(ft), ht.has("WEBGL_multisampled_render_to_texture") === !1) {
        let Wt = !1;
        for (let Dt = 0, ee = B.length; Dt < ee; Dt++) {
          const ce = B[Dt], le = ce.object, Je = ce.geometry, ne = ce.material, Nt = ce.group;
          if (ne.side === gn && le.layers.test($.layers)) {
            const jn = ne.side;
            ne.side = Ue, ne.needsUpdate = !0, Oh(le, Y, $, Je, ne, Nt), ne.side = jn, ne.needsUpdate = !0, Wt = !0;
          }
        }
        Wt === !0 && (P.updateMultisampleRenderTarget(ft), P.updateRenderTargetMipmap(ft));
      }
      v.setRenderTarget(It), v.setClearColor(U, q), kt !== void 0 && ($.viewport = kt), v.toneMapping = Lt;
    }
    function Qr(T, B, Y) {
      const $ = B.isScene === !0 ? B.overrideMaterial : null;
      for (let z = 0, ft = T.length; z < ft; z++) {
        const yt = T[z], It = yt.object, Lt = yt.geometry, kt = $ === null ? yt.material : $, Wt = yt.group;
        It.layers.test(Y.layers) && Oh(It, B, Y, Lt, kt, Wt);
      }
    }
    function Oh(T, B, Y, $, z, ft) {
      T.onBeforeRender(v, B, Y, $, z, ft), T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse, T.matrixWorld), T.normalMatrix.getNormalMatrix(T.modelViewMatrix), z.onBeforeRender(v, B, Y, $, T, ft), z.transparent === !0 && z.side === gn && z.forceSinglePass === !1 ? (z.side = Ue, z.needsUpdate = !0, v.renderBufferDirect(Y, B, $, z, T, ft), z.side = Cn, z.needsUpdate = !0, v.renderBufferDirect(Y, B, $, z, T, ft), z.side = gn) : v.renderBufferDirect(Y, B, $, z, T, ft), T.onAfterRender(v, B, Y, $, z, ft);
    }
    function ta(T, B, Y) {
      B.isScene !== !0 && (B = Ut);
      const $ = St.get(T), z = p.state.lights, ft = p.state.shadowsArray, yt = z.state.version, It = Pt.getParameters(T, z.state, ft, B, Y), Lt = Pt.getProgramCacheKey(It);
      let kt = $.programs;
      $.environment = T.isMeshStandardMaterial ? B.environment : null, $.fog = B.fog, $.envMap = (T.isMeshStandardMaterial ? W : w).get(T.envMap || $.environment), $.envMapRotation = $.environment !== null && T.envMap === null ? B.environmentRotation : T.envMapRotation, kt === void 0 && (T.addEventListener("dispose", Gt), kt = /* @__PURE__ */ new Map(), $.programs = kt);
      let Wt = kt.get(Lt);
      if (Wt !== void 0) {
        if ($.currentProgram === Wt && $.lightsStateVersion === yt)
          return zh(T, It), Wt;
      } else
        It.uniforms = Pt.getUniforms(T), T.onBeforeCompile(It, v), Wt = Pt.acquireProgram(It, Lt), kt.set(Lt, Wt), $.uniforms = It.uniforms;
      const Dt = $.uniforms;
      return (!T.isShaderMaterial && !T.isRawShaderMaterial || T.clipping === !0) && (Dt.clippingPlanes = ut.uniform), zh(T, It), $.needsLights = Hp(T), $.lightsStateVersion = yt, $.needsLights && (Dt.ambientLightColor.value = z.state.ambient, Dt.lightProbe.value = z.state.probe, Dt.directionalLights.value = z.state.directional, Dt.directionalLightShadows.value = z.state.directionalShadow, Dt.spotLights.value = z.state.spot, Dt.spotLightShadows.value = z.state.spotShadow, Dt.rectAreaLights.value = z.state.rectArea, Dt.ltc_1.value = z.state.rectAreaLTC1, Dt.ltc_2.value = z.state.rectAreaLTC2, Dt.pointLights.value = z.state.point, Dt.pointLightShadows.value = z.state.pointShadow, Dt.hemisphereLights.value = z.state.hemi, Dt.directionalShadowMap.value = z.state.directionalShadowMap, Dt.directionalShadowMatrix.value = z.state.directionalShadowMatrix, Dt.spotShadowMap.value = z.state.spotShadowMap, Dt.spotLightMatrix.value = z.state.spotLightMatrix, Dt.spotLightMap.value = z.state.spotLightMap, Dt.pointShadowMap.value = z.state.pointShadowMap, Dt.pointShadowMatrix.value = z.state.pointShadowMatrix), $.currentProgram = Wt, $.uniformsList = null, Wt;
    }
    function Bh(T) {
      if (T.uniformsList === null) {
        const B = T.currentProgram.getUniforms();
        T.uniformsList = Ka.seqWithValue(B.seq, T.uniforms);
      }
      return T.uniformsList;
    }
    function zh(T, B) {
      const Y = St.get(T);
      Y.outputColorSpace = B.outputColorSpace, Y.batching = B.batching, Y.batchingColor = B.batchingColor, Y.instancing = B.instancing, Y.instancingColor = B.instancingColor, Y.instancingMorph = B.instancingMorph, Y.skinning = B.skinning, Y.morphTargets = B.morphTargets, Y.morphNormals = B.morphNormals, Y.morphColors = B.morphColors, Y.morphTargetsCount = B.morphTargetsCount, Y.numClippingPlanes = B.numClippingPlanes, Y.numIntersection = B.numClipIntersection, Y.vertexAlphas = B.vertexAlphas, Y.vertexTangents = B.vertexTangents, Y.toneMapping = B.toneMapping;
    }
    function kp(T, B, Y, $, z) {
      B.isScene !== !0 && (B = Ut), P.resetTextureUnits();
      const ft = B.fog, yt = $.isMeshStandardMaterial ? B.environment : null, It = A === null ? v.outputColorSpace : A.isXRRenderTarget === !0 ? A.texture.colorSpace : os, Lt = ($.isMeshStandardMaterial ? W : w).get($.envMap || yt), kt = $.vertexColors === !0 && !!Y.attributes.color && Y.attributes.color.itemSize === 4, Wt = !!Y.attributes.tangent && (!!$.normalMap || $.anisotropy > 0), Dt = !!Y.morphAttributes.position, ee = !!Y.morphAttributes.normal, ce = !!Y.morphAttributes.color;
      let le = Xn;
      $.toneMapped && (A === null || A.isXRRenderTarget === !0) && (le = v.toneMapping);
      const Je = Y.morphAttributes.position || Y.morphAttributes.normal || Y.morphAttributes.color, ne = Je !== void 0 ? Je.length : 0, Nt = St.get($), jn = p.state.lights;
      if (k === !0 && (H === !0 || T !== M)) {
        const un = T === M && $.id === S;
        ut.setState($, T, un);
      }
      let ie = !1;
      $.version === Nt.__version ? (Nt.needsLights && Nt.lightsStateVersion !== jn.state.version || Nt.outputColorSpace !== It || z.isBatchedMesh && Nt.batching === !1 || !z.isBatchedMesh && Nt.batching === !0 || z.isBatchedMesh && Nt.batchingColor === !0 && z.colorTexture === null || z.isBatchedMesh && Nt.batchingColor === !1 && z.colorTexture !== null || z.isInstancedMesh && Nt.instancing === !1 || !z.isInstancedMesh && Nt.instancing === !0 || z.isSkinnedMesh && Nt.skinning === !1 || !z.isSkinnedMesh && Nt.skinning === !0 || z.isInstancedMesh && Nt.instancingColor === !0 && z.instanceColor === null || z.isInstancedMesh && Nt.instancingColor === !1 && z.instanceColor !== null || z.isInstancedMesh && Nt.instancingMorph === !0 && z.morphTexture === null || z.isInstancedMesh && Nt.instancingMorph === !1 && z.morphTexture !== null || Nt.envMap !== Lt || $.fog === !0 && Nt.fog !== ft || Nt.numClippingPlanes !== void 0 && (Nt.numClippingPlanes !== ut.numPlanes || Nt.numIntersection !== ut.numIntersection) || Nt.vertexAlphas !== kt || Nt.vertexTangents !== Wt || Nt.morphTargets !== Dt || Nt.morphNormals !== ee || Nt.morphColors !== ce || Nt.toneMapping !== le || Nt.morphTargetsCount !== ne) && (ie = !0) : (ie = !0, Nt.__version = $.version);
      let Mn = Nt.currentProgram;
      ie === !0 && (Mn = ta($, B, z));
      let hs = !1, nn = !1, $s = !1;
      const he = Mn.getUniforms(), Un = Nt.uniforms;
      if (mt.useProgram(Mn.program) && (hs = !0, nn = !0, $s = !0), $.id !== S && (S = $.id, nn = !0), hs || M !== T) {
        mt.buffers.depth.getReversed() ? (X.copy(T.projectionMatrix), Gm(X), Wm(X), he.setValue(L, "projectionMatrix", X)) : he.setValue(L, "projectionMatrix", T.projectionMatrix), he.setValue(L, "viewMatrix", T.matrixWorldInverse);
        const pi = he.map.cameraPosition;
        pi !== void 0 && pi.setValue(L, at.setFromMatrixPosition(T.matrixWorld)), Et.logarithmicDepthBuffer && he.setValue(
          L,
          "logDepthBufFC",
          2 / (Math.log(T.far + 1) / Math.LN2)
        ), ($.isMeshPhongMaterial || $.isMeshToonMaterial || $.isMeshLambertMaterial || $.isMeshBasicMaterial || $.isMeshStandardMaterial || $.isShaderMaterial) && he.setValue(L, "isOrthographic", T.isOrthographicCamera === !0), M !== T && (M = T, nn = !0, $s = !0);
      }
      if (z.isSkinnedMesh) {
        he.setOptional(L, z, "bindMatrix"), he.setOptional(L, z, "bindMatrixInverse");
        const un = z.skeleton;
        un && (un.boneTexture === null && un.computeBoneTexture(), he.setValue(L, "boneTexture", un.boneTexture, P));
      }
      z.isBatchedMesh && (he.setOptional(L, z, "batchingTexture"), he.setValue(L, "batchingTexture", z._matricesTexture, P), he.setOptional(L, z, "batchingIdTexture"), he.setValue(L, "batchingIdTexture", z._indirectTexture, P), he.setOptional(L, z, "batchingColorTexture"), z._colorsTexture !== null && he.setValue(L, "batchingColorTexture", z._colorsTexture, P));
      const Zs = Y.morphAttributes;
      if ((Zs.position !== void 0 || Zs.normal !== void 0 || Zs.color !== void 0) && zt.update(z, Y, Mn), (nn || Nt.receiveShadow !== z.receiveShadow) && (Nt.receiveShadow = z.receiveShadow, he.setValue(L, "receiveShadow", z.receiveShadow)), $.isMeshGouraudMaterial && $.envMap !== null && (Un.envMap.value = Lt, Un.flipEnvMap.value = Lt.isCubeTexture && Lt.isRenderTargetTexture === !1 ? -1 : 1), $.isMeshStandardMaterial && $.envMap === null && B.environment !== null && (Un.envMapIntensity.value = B.environmentIntensity), nn && (he.setValue(L, "toneMappingExposure", v.toneMappingExposure), Nt.needsLights && Vp(Un, $s), ft && $.fog === !0 && _t.refreshFogUniforms(Un, ft), _t.refreshMaterialUniforms(Un, $, G, j, p.state.transmissionRenderTarget[T.id]), Ka.upload(L, Bh(Nt), Un, P)), $.isShaderMaterial && $.uniformsNeedUpdate === !0 && (Ka.upload(L, Bh(Nt), Un, P), $.uniformsNeedUpdate = !1), $.isSpriteMaterial && he.setValue(L, "center", z.center), he.setValue(L, "modelViewMatrix", z.modelViewMatrix), he.setValue(L, "normalMatrix", z.normalMatrix), he.setValue(L, "modelMatrix", z.matrixWorld), $.isShaderMaterial || $.isRawShaderMaterial) {
        const un = $.uniformsGroups;
        for (let pi = 0, mi = un.length; pi < mi; pi++) {
          const kh = un[pi];
          F.update(kh, Mn), F.bind(kh, Mn);
        }
      }
      return Mn;
    }
    function Vp(T, B) {
      T.ambientLightColor.needsUpdate = B, T.lightProbe.needsUpdate = B, T.directionalLights.needsUpdate = B, T.directionalLightShadows.needsUpdate = B, T.pointLights.needsUpdate = B, T.pointLightShadows.needsUpdate = B, T.spotLights.needsUpdate = B, T.spotLightShadows.needsUpdate = B, T.rectAreaLights.needsUpdate = B, T.hemisphereLights.needsUpdate = B;
    }
    function Hp(T) {
      return T.isMeshLambertMaterial || T.isMeshToonMaterial || T.isMeshPhongMaterial || T.isMeshStandardMaterial || T.isShadowMaterial || T.isShaderMaterial && T.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return C;
    }, this.getRenderTarget = function() {
      return A;
    }, this.setRenderTargetTextures = function(T, B, Y) {
      St.get(T.texture).__webglTexture = B, St.get(T.depthTexture).__webglTexture = Y;
      const $ = St.get(T);
      $.__hasExternalTextures = !0, $.__autoAllocateDepthBuffer = Y === void 0, $.__autoAllocateDepthBuffer || ht.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), $.__useRenderToTexture = !1);
    }, this.setRenderTargetFramebuffer = function(T, B) {
      const Y = St.get(T);
      Y.__webglFramebuffer = B, Y.__useDefaultFramebuffer = B === void 0;
    }, this.setRenderTarget = function(T, B = 0, Y = 0) {
      A = T, b = B, C = Y;
      let $ = !0, z = null, ft = !1, yt = !1;
      if (T) {
        const Lt = St.get(T);
        if (Lt.__useDefaultFramebuffer !== void 0)
          mt.bindFramebuffer(L.FRAMEBUFFER, null), $ = !1;
        else if (Lt.__webglFramebuffer === void 0)
          P.setupRenderTarget(T);
        else if (Lt.__hasExternalTextures)
          P.rebindTextures(T, St.get(T.texture).__webglTexture, St.get(T.depthTexture).__webglTexture);
        else if (T.depthBuffer) {
          const Dt = T.depthTexture;
          if (Lt.__boundDepthTexture !== Dt) {
            if (Dt !== null && St.has(Dt) && (T.width !== Dt.image.width || T.height !== Dt.image.height))
              throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            P.setupDepthRenderbuffer(T);
          }
        }
        const kt = T.texture;
        (kt.isData3DTexture || kt.isDataArrayTexture || kt.isCompressedArrayTexture) && (yt = !0);
        const Wt = St.get(T).__webglFramebuffer;
        T.isWebGLCubeRenderTarget ? (Array.isArray(Wt[B]) ? z = Wt[B][Y] : z = Wt[B], ft = !0) : T.samples > 0 && P.useMultisampledRTT(T) === !1 ? z = St.get(T).__webglMultisampledFramebuffer : Array.isArray(Wt) ? z = Wt[Y] : z = Wt, I.copy(T.viewport), O.copy(T.scissor), N = T.scissorTest;
      } else
        I.copy(Z).multiplyScalar(G).floor(), O.copy(ot).multiplyScalar(G).floor(), N = Rt;
      if (mt.bindFramebuffer(L.FRAMEBUFFER, z) && $ && mt.drawBuffers(T, z), mt.viewport(I), mt.scissor(O), mt.setScissorTest(N), ft) {
        const Lt = St.get(T.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + B, Lt.__webglTexture, Y);
      } else if (yt) {
        const Lt = St.get(T.texture), kt = B || 0;
        L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, Lt.__webglTexture, Y || 0, kt);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(T, B, Y, $, z, ft, yt) {
      if (!(T && T.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let It = St.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && yt !== void 0 && (It = It[yt]), It) {
        mt.bindFramebuffer(L.FRAMEBUFFER, It);
        try {
          const Lt = T.texture, kt = Lt.format, Wt = Lt.type;
          if (!Et.textureFormatReadable(kt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Et.textureTypeReadable(Wt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          B >= 0 && B <= T.width - $ && Y >= 0 && Y <= T.height - z && L.readPixels(B, Y, $, z, $t.convert(kt), $t.convert(Wt), ft);
        } finally {
          const Lt = A !== null ? St.get(A).__webglFramebuffer : null;
          mt.bindFramebuffer(L.FRAMEBUFFER, Lt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(T, B, Y, $, z, ft, yt) {
      if (!(T && T.isWebGLRenderTarget))
        throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let It = St.get(T).__webglFramebuffer;
      if (T.isWebGLCubeRenderTarget && yt !== void 0 && (It = It[yt]), It) {
        const Lt = T.texture, kt = Lt.format, Wt = Lt.type;
        if (!Et.textureFormatReadable(kt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Et.textureTypeReadable(Wt))
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (B >= 0 && B <= T.width - $ && Y >= 0 && Y <= T.height - z) {
          mt.bindFramebuffer(L.FRAMEBUFFER, It);
          const Dt = L.createBuffer();
          L.bindBuffer(L.PIXEL_PACK_BUFFER, Dt), L.bufferData(L.PIXEL_PACK_BUFFER, ft.byteLength, L.STREAM_READ), L.readPixels(B, Y, $, z, $t.convert(kt), $t.convert(Wt), 0);
          const ee = A !== null ? St.get(A).__webglFramebuffer : null;
          mt.bindFramebuffer(L.FRAMEBUFFER, ee);
          const ce = L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return L.flush(), await Hm(L, ce, 4), L.bindBuffer(L.PIXEL_PACK_BUFFER, Dt), L.getBufferSubData(L.PIXEL_PACK_BUFFER, 0, ft), L.deleteBuffer(Dt), L.deleteSync(ce), ft;
        } else
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(T, B = null, Y = 0) {
      T.isTexture !== !0 && (ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."), B = arguments[0] || null, T = arguments[1]);
      const $ = Math.pow(2, -Y), z = Math.floor(T.image.width * $), ft = Math.floor(T.image.height * $), yt = B !== null ? B.x : 0, It = B !== null ? B.y : 0;
      P.setTexture2D(T, 0), L.copyTexSubImage2D(L.TEXTURE_2D, Y, 0, 0, yt, It, z, ft), mt.unbindTexture();
    }, this.copyTextureToTexture = function(T, B, Y = null, $ = null, z = 0) {
      T.isTexture !== !0 && (ur("WebGLRenderer: copyTextureToTexture function signature has changed."), $ = arguments[0] || null, T = arguments[1], B = arguments[2], z = arguments[3] || 0, Y = null);
      let ft, yt, It, Lt, kt, Wt, Dt, ee, ce;
      const le = T.isCompressedTexture ? T.mipmaps[z] : T.image;
      Y !== null ? (ft = Y.max.x - Y.min.x, yt = Y.max.y - Y.min.y, It = Y.isBox3 ? Y.max.z - Y.min.z : 1, Lt = Y.min.x, kt = Y.min.y, Wt = Y.isBox3 ? Y.min.z : 0) : (ft = le.width, yt = le.height, It = le.depth || 1, Lt = 0, kt = 0, Wt = 0), $ !== null ? (Dt = $.x, ee = $.y, ce = $.z) : (Dt = 0, ee = 0, ce = 0);
      const Je = $t.convert(B.format), ne = $t.convert(B.type);
      let Nt;
      B.isData3DTexture ? (P.setTexture3D(B, 0), Nt = L.TEXTURE_3D) : B.isDataArrayTexture || B.isCompressedArrayTexture ? (P.setTexture2DArray(B, 0), Nt = L.TEXTURE_2D_ARRAY) : (P.setTexture2D(B, 0), Nt = L.TEXTURE_2D), L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, B.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, B.unpackAlignment);
      const jn = L.getParameter(L.UNPACK_ROW_LENGTH), ie = L.getParameter(L.UNPACK_IMAGE_HEIGHT), Mn = L.getParameter(L.UNPACK_SKIP_PIXELS), hs = L.getParameter(L.UNPACK_SKIP_ROWS), nn = L.getParameter(L.UNPACK_SKIP_IMAGES);
      L.pixelStorei(L.UNPACK_ROW_LENGTH, le.width), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, le.height), L.pixelStorei(L.UNPACK_SKIP_PIXELS, Lt), L.pixelStorei(L.UNPACK_SKIP_ROWS, kt), L.pixelStorei(L.UNPACK_SKIP_IMAGES, Wt);
      const $s = T.isDataArrayTexture || T.isData3DTexture, he = B.isDataArrayTexture || B.isData3DTexture;
      if (T.isRenderTargetTexture || T.isDepthTexture) {
        const Un = St.get(T), Zs = St.get(B), un = St.get(Un.__renderTarget), pi = St.get(Zs.__renderTarget);
        mt.bindFramebuffer(L.READ_FRAMEBUFFER, un.__webglFramebuffer), mt.bindFramebuffer(L.DRAW_FRAMEBUFFER, pi.__webglFramebuffer);
        for (let mi = 0; mi < It; mi++)
          $s && L.framebufferTextureLayer(L.READ_FRAMEBUFFER, L.COLOR_ATTACHMENT0, St.get(T).__webglTexture, z, Wt + mi), T.isDepthTexture ? (he && L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER, L.COLOR_ATTACHMENT0, St.get(B).__webglTexture, z, ce + mi), L.blitFramebuffer(Lt, kt, ft, yt, Dt, ee, ft, yt, L.DEPTH_BUFFER_BIT, L.NEAREST)) : he ? L.copyTexSubImage3D(Nt, z, Dt, ee, ce + mi, Lt, kt, ft, yt) : L.copyTexSubImage2D(Nt, z, Dt, ee, ce + mi, Lt, kt, ft, yt);
        mt.bindFramebuffer(L.READ_FRAMEBUFFER, null), mt.bindFramebuffer(L.DRAW_FRAMEBUFFER, null);
      } else
        he ? T.isDataTexture || T.isData3DTexture ? L.texSubImage3D(Nt, z, Dt, ee, ce, ft, yt, It, Je, ne, le.data) : B.isCompressedArrayTexture ? L.compressedTexSubImage3D(Nt, z, Dt, ee, ce, ft, yt, It, Je, le.data) : L.texSubImage3D(Nt, z, Dt, ee, ce, ft, yt, It, Je, ne, le) : T.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, z, Dt, ee, ft, yt, Je, ne, le.data) : T.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, z, Dt, ee, le.width, le.height, Je, le.data) : L.texSubImage2D(L.TEXTURE_2D, z, Dt, ee, ft, yt, Je, ne, le);
      L.pixelStorei(L.UNPACK_ROW_LENGTH, jn), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, ie), L.pixelStorei(L.UNPACK_SKIP_PIXELS, Mn), L.pixelStorei(L.UNPACK_SKIP_ROWS, hs), L.pixelStorei(L.UNPACK_SKIP_IMAGES, nn), z === 0 && B.generateMipmaps && L.generateMipmap(Nt), mt.unbindTexture();
    }, this.copyTextureToTexture3D = function(T, B, Y = null, $ = null, z = 0) {
      return T.isTexture !== !0 && (ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."), Y = arguments[0] || null, $ = arguments[1] || null, T = arguments[2], B = arguments[3], z = arguments[4] || 0), ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(T, B, Y, $, z);
    }, this.initRenderTarget = function(T) {
      St.get(T).__webglFramebuffer === void 0 && P.setupRenderTarget(T);
    }, this.initTexture = function(T) {
      T.isCubeTexture ? P.setTextureCube(T, 0) : T.isData3DTexture ? P.setTexture3D(T, 0) : T.isDataArrayTexture || T.isCompressedArrayTexture ? P.setTexture2DArray(T, 0) : P.setTexture2D(T, 0), mt.unbindTexture();
    }, this.resetState = function() {
      b = 0, C = 0, A = null, mt.reset(), oe.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Gn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorspace = Kt._getDrawingBufferColorSpace(t), e.unpackColorSpace = Kt._getUnpackColorSpace();
  }
}
class rc {
  constructor(t, e = 25e-5) {
    this.isFogExp2 = !0, this.name = "", this.color = new gt(t), this.density = e;
  }
  clone() {
    return new rc(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density
    };
  }
}
class ac {
  constructor(t, e = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new gt(t), this.near = e, this.far = n;
  }
  clone() {
    return new ac(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class ah extends Qt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new hn(), this.environmentIntensity = 1, this.environmentRotation = new hn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class oc {
  constructor(t, e) {
    this.isInterleavedBuffer = !0, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = Pr, this.updateRanges = [], this.version = 0, this.uuid = cn();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[t + i] = e.array[n + i];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = cn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
      uuid: this.uuid,
      buffer: this.array.buffer._uuid,
      type: this.array.constructor.name,
      stride: this.stride
    };
  }
}
const He = /* @__PURE__ */ new R();
class on {
  constructor(t, e, n, i = !1) {
    this.isInterleavedBufferAttribute = !0, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      He.fromBufferAttribute(this, e), He.applyMatrix4(t), this.setXYZ(e, He.x, He.y, He.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      He.fromBufferAttribute(this, e), He.applyNormalMatrix(t), this.setXYZ(e, He.x, He.y, He.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      He.fromBufferAttribute(this, e), He.transformDirection(t), this.setXYZ(e, He.x, He.y, He.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = Ye(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Ht(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  setX(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = Ht(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = Ye(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array), i = Ht(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this;
  }
  setXYZW(t, e, n, i, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Ht(e, this.array), n = Ht(n, this.array), i = Ht(i, this.array), r = Ht(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = i, this.data.array[t + 3] = r, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[i + r]);
      }
      return new ae(new this.array.constructor(e), this.itemSize, this.normalized);
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new on(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++)
          e.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized
      };
    } else
      return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), {
        isInterleavedBufferAttribute: !0,
        itemSize: this.itemSize,
        data: this.data.uuid,
        offset: this.offset,
        normalized: this.normalized
      };
  }
}
class oh extends ke {
  static get type() {
    return "SpriteMaterial";
  }
  constructor(t) {
    super(), this.isSpriteMaterial = !0, this.color = new gt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = !0, this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let ws;
const tr = /* @__PURE__ */ new R(), Es = /* @__PURE__ */ new R(), Ts = /* @__PURE__ */ new R(), As = /* @__PURE__ */ new nt(), er = /* @__PURE__ */ new nt(), zf = /* @__PURE__ */ new Ft(), Ma = /* @__PURE__ */ new R(), nr = /* @__PURE__ */ new R(), Sa = /* @__PURE__ */ new R(), Iu = /* @__PURE__ */ new nt(), Kc = /* @__PURE__ */ new nt(), Lu = /* @__PURE__ */ new nt();
class kf extends Qt {
  constructor(t = new oh()) {
    if (super(), this.isSprite = !0, this.type = "Sprite", ws === void 0) {
      ws = new Yt();
      const e = new Float32Array([
        -0.5,
        -0.5,
        0,
        0,
        0,
        0.5,
        -0.5,
        0,
        1,
        0,
        0.5,
        0.5,
        0,
        1,
        1,
        -0.5,
        0.5,
        0,
        0,
        1
      ]), n = new oc(e, 5);
      ws.setIndex([0, 1, 2, 0, 2, 3]), ws.setAttribute("position", new on(n, 3, 0, !1)), ws.setAttribute("uv", new on(n, 2, 3, !1));
    }
    this.geometry = ws, this.material = t, this.center = new nt(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Es.setFromMatrixScale(this.matrixWorld), zf.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Ts.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === !1 && Es.multiplyScalar(-Ts.z);
    const n = this.material.rotation;
    let i, r;
    n !== 0 && (r = Math.cos(n), i = Math.sin(n));
    const a = this.center;
    ba(Ma.set(-0.5, -0.5, 0), Ts, a, Es, i, r), ba(nr.set(0.5, -0.5, 0), Ts, a, Es, i, r), ba(Sa.set(0.5, 0.5, 0), Ts, a, Es, i, r), Iu.set(0, 0), Kc.set(1, 0), Lu.set(1, 1);
    let o = t.ray.intersectTriangle(Ma, nr, Sa, !1, tr);
    if (o === null && (ba(nr.set(-0.5, 0.5, 0), Ts, a, Es, i, r), Kc.set(0, 1), o = t.ray.intersectTriangle(Ma, Sa, nr, !1, tr), o === null))
      return;
    const c = t.ray.origin.distanceTo(tr);
    c < t.near || c > t.far || e.push({
      distance: c,
      point: tr.clone(),
      uv: Qe.getInterpolation(tr, Ma, nr, Sa, Iu, Kc, Lu, new nt()),
      face: null,
      object: this
    });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function ba(s, t, e, n, i, r) {
  As.subVectors(s, e).addScalar(0.5).multiply(n), i !== void 0 ? (er.x = r * As.x - i * As.y, er.y = i * As.x + r * As.y) : er.copy(As), s.copy(t), s.x += er.x, s.y += er.y, s.applyMatrix4(zf);
}
const wa = /* @__PURE__ */ new R(), Du = /* @__PURE__ */ new R();
class Vf extends Qt {
  constructor() {
    super(), this._currentLevel = 0, this.type = "LOD", Object.defineProperties(this, {
      levels: {
        enumerable: !0,
        value: []
      },
      isLOD: {
        value: !0
      }
    }), this.autoUpdate = !0;
  }
  copy(t) {
    super.copy(t, !1);
    const e = t.levels;
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      this.addLevel(r.object.clone(), r.distance, r.hysteresis);
    }
    return this.autoUpdate = t.autoUpdate, this;
  }
  addLevel(t, e = 0, n = 0) {
    e = Math.abs(e);
    const i = this.levels;
    let r;
    for (r = 0; r < i.length && !(e < i[r].distance); r++)
      ;
    return i.splice(r, 0, { distance: e, hysteresis: n, object: t }), this.add(t), this;
  }
  removeLevel(t) {
    const e = this.levels;
    for (let n = 0; n < e.length; n++)
      if (e[n].distance === t) {
        const i = e.splice(n, 1);
        return this.remove(i[0].object), !0;
      }
    return !1;
  }
  getCurrentLevel() {
    return this._currentLevel;
  }
  getObjectForDistance(t) {
    const e = this.levels;
    if (e.length > 0) {
      let n, i;
      for (n = 1, i = e.length; n < i; n++) {
        let r = e[n].distance;
        if (e[n].object.visible && (r -= r * e[n].hysteresis), t < r)
          break;
      }
      return e[n - 1].object;
    }
    return null;
  }
  raycast(t, e) {
    if (this.levels.length > 0) {
      wa.setFromMatrixPosition(this.matrixWorld);
      const i = t.ray.origin.distanceTo(wa);
      this.getObjectForDistance(i).raycast(t, e);
    }
  }
  update(t) {
    const e = this.levels;
    if (e.length > 1) {
      wa.setFromMatrixPosition(t.matrixWorld), Du.setFromMatrixPosition(this.matrixWorld);
      const n = wa.distanceTo(Du) / t.zoom;
      e[0].object.visible = !0;
      let i, r;
      for (i = 1, r = e.length; i < r; i++) {
        let a = e[i].distance;
        if (e[i].object.visible && (a -= a * e[i].hysteresis), n >= a)
          e[i - 1].object.visible = !1, e[i].object.visible = !0;
        else
          break;
      }
      for (this._currentLevel = i - 1; i < r; i++)
        e[i].object.visible = !1;
    }
  }
  toJSON(t) {
    const e = super.toJSON(t);
    this.autoUpdate === !1 && (e.object.autoUpdate = !1), e.object.levels = [];
    const n = this.levels;
    for (let i = 0, r = n.length; i < r; i++) {
      const a = n[i];
      e.object.levels.push({
        object: a.object.uuid,
        distance: a.distance,
        hysteresis: a.hysteresis
      });
    }
    return e;
  }
}
const Uu = /* @__PURE__ */ new R(), Nu = /* @__PURE__ */ new Zt(), Fu = /* @__PURE__ */ new Zt(), iy = /* @__PURE__ */ new R(), Ou = /* @__PURE__ */ new Ft(), Ea = /* @__PURE__ */ new R(), jc = /* @__PURE__ */ new Pe(), Bu = /* @__PURE__ */ new Ft(), Qc = /* @__PURE__ */ new Ws();
class Hf extends qt {
  constructor(t, e) {
    super(t, e), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = Ml, this.bindMatrix = new Ft(), this.bindMatrixInverse = new Ft(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const t = this.geometry;
    this.boundingBox === null && (this.boundingBox = new we()), this.boundingBox.makeEmpty();
    const e = t.getAttribute("position");
    for (let n = 0; n < e.count; n++)
      this.getVertexPosition(n, Ea), this.boundingBox.expandByPoint(Ea);
  }
  computeBoundingSphere() {
    const t = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Pe()), this.boundingSphere.makeEmpty();
    const e = t.getAttribute("position");
    for (let n = 0; n < e.count; n++)
      this.getVertexPosition(n, Ea), this.boundingSphere.expandByPoint(Ea);
  }
  copy(t, e) {
    return super.copy(t, e), this.bindMode = t.bindMode, this.bindMatrix.copy(t.bindMatrix), this.bindMatrixInverse.copy(t.bindMatrixInverse), this.skeleton = t.skeleton, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  raycast(t, e) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), jc.copy(this.boundingSphere), jc.applyMatrix4(i), t.ray.intersectsSphere(jc) !== !1 && (Bu.copy(i).invert(), Qc.copy(t.ray).applyMatrix4(Bu), !(this.boundingBox !== null && Qc.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(t, e, Qc)));
  }
  getVertexPosition(t, e) {
    return super.getVertexPosition(t, e), this.applyBoneTransform(t, e), e;
  }
  bind(t, e) {
    this.skeleton = t, e === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.copy(e).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const t = new Zt(), e = this.geometry.attributes.skinWeight;
    for (let n = 0, i = e.count; n < i; n++) {
      t.fromBufferAttribute(e, n);
      const r = 1 / t.manhattanLength();
      r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1, 0, 0, 0), e.setXYZW(n, t.x, t.y, t.z, t.w);
    }
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.bindMode === Ml ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === lf ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(t, e) {
    const n = this.skeleton, i = this.geometry;
    Nu.fromBufferAttribute(i.attributes.skinIndex, t), Fu.fromBufferAttribute(i.attributes.skinWeight, t), Uu.copy(e).applyMatrix4(this.bindMatrix), e.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Fu.getComponent(r);
      if (a !== 0) {
        const o = Nu.getComponent(r);
        Ou.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), e.addScaledVector(iy.copy(Uu).applyMatrix4(Ou), a);
      }
    }
    return e.applyMatrix4(this.bindMatrixInverse);
  }
}
class ch extends Qt {
  constructor() {
    super(), this.isBone = !0, this.type = "Bone";
  }
}
class qn extends _e {
  constructor(t = null, e = 1, n = 1, i, r, a, o, c, l = Ne, h = Ne, u, d) {
    super(null, a, o, c, l, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: t, width: e, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
const zu = /* @__PURE__ */ new Ft(), sy = /* @__PURE__ */ new Ft();
class cc {
  constructor(t = [], e = []) {
    this.uuid = cn(), this.bones = t.slice(0), this.boneInverses = e, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const t = this.bones, e = this.boneInverses;
    if (this.boneMatrices = new Float32Array(t.length * 16), e.length === 0)
      this.calculateInverses();
    else if (t.length !== e.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Ft());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = new Ft();
      this.bones[t] && n.copy(this.bones[t].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t];
      n && n.matrixWorld.copy(this.boneInverses[t]).invert();
    }
    for (let t = 0, e = this.bones.length; t < e; t++) {
      const n = this.bones[t];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const t = this.bones, e = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let r = 0, a = t.length; r < a; r++) {
      const o = t[r] ? t[r].matrixWorld : sy;
      zu.multiplyMatrices(o, e[r]), zu.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new cc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let t = Math.sqrt(this.bones.length * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const e = new Float32Array(t * t * 4);
    e.set(this.boneMatrices);
    const n = new qn(e, t, t, $e, tn);
    return n.needsUpdate = !0, this.boneMatrices = e, this.boneTexture = n, this;
  }
  getBoneByName(t) {
    for (let e = 0, n = this.bones.length; e < n; e++) {
      const i = this.bones[e];
      if (i.name === t)
        return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(t, e) {
    this.uuid = t.uuid;
    for (let n = 0, i = t.bones.length; n < i; n++) {
      const r = t.bones[n];
      let a = e[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new ch()), this.bones.push(a), this.boneInverses.push(new Ft().fromArray(t.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON"
      },
      bones: [],
      boneInverses: []
    };
    t.uuid = this.uuid;
    const e = this.bones, n = this.boneInverses;
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      t.bones.push(a.uuid);
      const o = n[i];
      t.boneInverses.push(o.toArray());
    }
    return t;
  }
}
class ks extends ae {
  constructor(t, e, n, i = 1) {
    super(t, e, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.meshPerAttribute = this.meshPerAttribute, t.isInstancedBufferAttribute = !0, t;
  }
}
const Cs = /* @__PURE__ */ new Ft(), ku = /* @__PURE__ */ new Ft(), Ta = [], Vu = /* @__PURE__ */ new we(), ry = /* @__PURE__ */ new Ft(), ir = /* @__PURE__ */ new qt(), sr = /* @__PURE__ */ new Pe();
class Gf extends qt {
  constructor(t, e, n) {
    super(t, e), this.isInstancedMesh = !0, this.instanceMatrix = new ks(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++)
      this.setMatrixAt(i, ry);
  }
  computeBoundingBox() {
    const t = this.geometry, e = this.count;
    this.boundingBox === null && (this.boundingBox = new we()), t.boundingBox === null && t.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Cs), Vu.copy(t.boundingBox).applyMatrix4(Cs), this.boundingBox.union(Vu);
  }
  computeBoundingSphere() {
    const t = this.geometry, e = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Pe()), t.boundingSphere === null && t.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < e; n++)
      this.getMatrixAt(n, Cs), sr.copy(t.boundingSphere).applyMatrix4(Cs), this.boundingSphere.union(sr);
  }
  copy(t, e) {
    return super.copy(t, e), this.instanceMatrix.copy(t.instanceMatrix), t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()), t.instanceColor !== null && (this.instanceColor = t.instanceColor.clone()), this.count = t.count, t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()), t.boundingSphere !== null && (this.boundingSphere = t.boundingSphere.clone()), this;
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = t * r + 1;
    for (let o = 0; o < n.length; o++)
      n[o] = i[a + o];
  }
  raycast(t, e) {
    const n = this.matrixWorld, i = this.count;
    if (ir.geometry = this.geometry, ir.material = this.material, ir.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), sr.copy(this.boundingSphere), sr.applyMatrix4(n), t.ray.intersectsSphere(sr) !== !1))
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, Cs), ku.multiplyMatrices(n, Cs), ir.matrixWorld = ku, ir.raycast(t, Ta);
        for (let a = 0, o = Ta.length; a < o; a++) {
          const c = Ta[a];
          c.instanceId = r, c.object = this, e.push(c);
        }
        Ta.length = 0;
      }
  }
  setColorAt(t, e) {
    this.instanceColor === null && (this.instanceColor = new ks(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), e.toArray(this.instanceColor.array, t * 3);
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new qn(new Float32Array(i * this.count), i, this.count, Zo, tn));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let l = 0; l < n.length; l++)
      a += n[l];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, c = i * t;
    r[c] = o, r.set(n, c + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
function tl(s, t) {
  return s - t;
}
function ay(s, t) {
  return s.z - t.z;
}
function oy(s, t) {
  return t.z - s.z;
}
class cy {
  constructor() {
    this.index = 0, this.pool = [], this.list = [];
  }
  push(t, e, n, i) {
    const r = this.pool, a = this.list;
    this.index >= r.length && r.push({
      start: -1,
      count: -1,
      z: -1,
      index: -1
    });
    const o = r[this.index];
    a.push(o), this.index++, o.start = t, o.count = e, o.z = n, o.index = i;
  }
  reset() {
    this.list.length = 0, this.index = 0;
  }
}
const Ke = /* @__PURE__ */ new Ft(), ly = /* @__PURE__ */ new gt(1, 1, 1), el = /* @__PURE__ */ new Xr(), Aa = /* @__PURE__ */ new we(), Fi = /* @__PURE__ */ new Pe(), rr = /* @__PURE__ */ new R(), Hu = /* @__PURE__ */ new R(), hy = /* @__PURE__ */ new R(), nl = /* @__PURE__ */ new cy(), ze = /* @__PURE__ */ new qt(), Ca = [];
function uy(s, t, e = 0) {
  const n = t.itemSize;
  if (s.isInterleavedBufferAttribute || s.array.constructor !== t.array.constructor) {
    const i = s.count;
    for (let r = 0; r < i; r++)
      for (let a = 0; a < n; a++)
        t.setComponent(r + e, a, s.getComponent(r, a));
  } else
    t.array.set(s.array, e * n);
  t.needsUpdate = !0;
}
function Oi(s, t) {
  if (s.constructor !== t.constructor) {
    const e = Math.min(s.length, t.length);
    for (let n = 0; n < e; n++)
      t[n] = s[n];
  } else {
    const e = Math.min(s.length, t.length);
    t.set(new s.constructor(s.buffer, 0, e));
  }
}
class Wf extends qt {
  get maxInstanceCount() {
    return this._maxInstanceCount;
  }
  get instanceCount() {
    return this._instanceInfo.length - this._availableInstanceIds.length;
  }
  get unusedVertexCount() {
    return this._maxVertexCount - this._nextVertexStart;
  }
  get unusedIndexCount() {
    return this._maxIndexCount - this._nextIndexStart;
  }
  constructor(t, e, n = e * 2, i) {
    super(new Yt(), i), this.isBatchedMesh = !0, this.perObjectFrustumCulled = !0, this.sortObjects = !0, this.boundingBox = null, this.boundingSphere = null, this.customSort = null, this._instanceInfo = [], this._geometryInfo = [], this._availableInstanceIds = [], this._availableGeometryIds = [], this._nextIndexStart = 0, this._nextVertexStart = 0, this._geometryCount = 0, this._visibilityChanged = !0, this._geometryInitialized = !1, this._maxInstanceCount = t, this._maxVertexCount = e, this._maxIndexCount = n, this._multiDrawCounts = new Int32Array(t), this._multiDrawStarts = new Int32Array(t), this._multiDrawCount = 0, this._multiDrawInstances = null, this._matricesTexture = null, this._indirectTexture = null, this._colorsTexture = null, this._initMatricesTexture(), this._initIndirectTexture();
  }
  _initMatricesTexture() {
    let t = Math.sqrt(this._maxInstanceCount * 4);
    t = Math.ceil(t / 4) * 4, t = Math.max(t, 4);
    const e = new Float32Array(t * t * 4), n = new qn(e, t, t, $e, tn);
    this._matricesTexture = n;
  }
  _initIndirectTexture() {
    let t = Math.sqrt(this._maxInstanceCount);
    t = Math.ceil(t);
    const e = new Uint32Array(t * t), n = new qn(e, t, t, Hr, di);
    this._indirectTexture = n;
  }
  _initColorsTexture() {
    let t = Math.sqrt(this._maxInstanceCount);
    t = Math.ceil(t);
    const e = new Float32Array(t * t * 4).fill(1), n = new qn(e, t, t, $e, tn);
    n.colorSpace = Kt.workingColorSpace, this._colorsTexture = n;
  }
  _initializeGeometry(t) {
    const e = this.geometry, n = this._maxVertexCount, i = this._maxIndexCount;
    if (this._geometryInitialized === !1) {
      for (const r in t.attributes) {
        const a = t.getAttribute(r), { array: o, itemSize: c, normalized: l } = a, h = new o.constructor(n * c), u = new ae(h, c, l);
        e.setAttribute(r, u);
      }
      if (t.getIndex() !== null) {
        const r = n > 65535 ? new Uint32Array(i) : new Uint16Array(i);
        e.setIndex(new ae(r, 1));
      }
      this._geometryInitialized = !0;
    }
  }
  // Make sure the geometry is compatible with the existing combined geometry attributes
  _validateGeometry(t) {
    const e = this.geometry;
    if (!!t.getIndex() != !!e.getIndex())
      throw new Error('BatchedMesh: All geometries must consistently have "index".');
    for (const n in e.attributes) {
      if (!t.hasAttribute(n))
        throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);
      const i = t.getAttribute(n), r = e.getAttribute(n);
      if (i.itemSize !== r.itemSize || i.normalized !== r.normalized)
        throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.");
    }
  }
  setCustomSort(t) {
    return this.customSort = t, this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new we());
    const t = this.boundingBox, e = this._instanceInfo;
    t.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) {
      if (e[n].active === !1) continue;
      const r = e[n].geometryIndex;
      this.getMatrixAt(n, Ke), this.getBoundingBoxAt(r, Aa).applyMatrix4(Ke), t.union(Aa);
    }
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pe());
    const t = this.boundingSphere, e = this._instanceInfo;
    t.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) {
      if (e[n].active === !1) continue;
      const r = e[n].geometryIndex;
      this.getMatrixAt(n, Ke), this.getBoundingSphereAt(r, Fi).applyMatrix4(Ke), t.union(Fi);
    }
  }
  addInstance(t) {
    if (this._instanceInfo.length >= this.maxInstanceCount && this._availableInstanceIds.length === 0)
      throw new Error("BatchedMesh: Maximum item count reached.");
    const n = {
      visible: !0,
      active: !0,
      geometryIndex: t
    };
    let i = null;
    this._availableInstanceIds.length > 0 ? (this._availableInstanceIds.sort(tl), i = this._availableInstanceIds.shift(), this._instanceInfo[i] = n) : (i = this._instanceInfo.length, this._instanceInfo.push(n));
    const r = this._matricesTexture;
    Ke.identity().toArray(r.image.data, i * 16), r.needsUpdate = !0;
    const a = this._colorsTexture;
    return a && (ly.toArray(a.image.data, i * 4), a.needsUpdate = !0), this._visibilityChanged = !0, i;
  }
  addGeometry(t, e = -1, n = -1) {
    this._initializeGeometry(t), this._validateGeometry(t);
    const i = {
      // geometry information
      vertexStart: -1,
      vertexCount: -1,
      reservedVertexCount: -1,
      indexStart: -1,
      indexCount: -1,
      reservedIndexCount: -1,
      // draw range information
      start: -1,
      count: -1,
      // state
      boundingBox: null,
      boundingSphere: null,
      active: !0
    }, r = this._geometryInfo;
    i.vertexStart = this._nextVertexStart, i.reservedVertexCount = e === -1 ? t.getAttribute("position").count : e;
    const a = t.getIndex();
    if (a !== null && (i.indexStart = this._nextIndexStart, i.reservedIndexCount = n === -1 ? a.count : n), i.indexStart !== -1 && i.indexStart + i.reservedIndexCount > this._maxIndexCount || i.vertexStart + i.reservedVertexCount > this._maxVertexCount)
      throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");
    let c;
    return this._availableGeometryIds.length > 0 ? (this._availableGeometryIds.sort(tl), c = this._availableGeometryIds.shift(), r[c] = i) : (c = this._geometryCount, this._geometryCount++, r.push(i)), this.setGeometryAt(c, t), this._nextIndexStart = i.indexStart + i.reservedIndexCount, this._nextVertexStart = i.vertexStart + i.reservedVertexCount, c;
  }
  setGeometryAt(t, e) {
    if (t >= this._geometryCount)
      throw new Error("BatchedMesh: Maximum geometry count reached.");
    this._validateGeometry(e);
    const n = this.geometry, i = n.getIndex() !== null, r = n.getIndex(), a = e.getIndex(), o = this._geometryInfo[t];
    if (i && a.count > o.reservedIndexCount || e.attributes.position.count > o.reservedVertexCount)
      throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");
    const c = o.vertexStart, l = o.reservedVertexCount;
    o.vertexCount = e.getAttribute("position").count;
    for (const h in n.attributes) {
      const u = e.getAttribute(h), d = n.getAttribute(h);
      uy(u, d, c);
      const f = u.itemSize;
      for (let m = u.count, _ = l; m < _; m++) {
        const g = c + m;
        for (let p = 0; p < f; p++)
          d.setComponent(g, p, 0);
      }
      d.needsUpdate = !0, d.addUpdateRange(c * f, l * f);
    }
    if (i) {
      const h = o.indexStart, u = o.reservedIndexCount;
      o.indexCount = e.getIndex().count;
      for (let d = 0; d < a.count; d++)
        r.setX(h + d, c + a.getX(d));
      for (let d = a.count, f = u; d < f; d++)
        r.setX(h + d, c);
      r.needsUpdate = !0, r.addUpdateRange(h, o.reservedIndexCount);
    }
    return o.start = i ? o.indexStart : o.vertexStart, o.count = i ? o.indexCount : o.vertexCount, o.boundingBox = null, e.boundingBox !== null && (o.boundingBox = e.boundingBox.clone()), o.boundingSphere = null, e.boundingSphere !== null && (o.boundingSphere = e.boundingSphere.clone()), this._visibilityChanged = !0, t;
  }
  deleteGeometry(t) {
    const e = this._geometryInfo;
    if (t >= e.length || e[t].active === !1)
      return this;
    const n = this._instanceInfo;
    for (let i = 0, r = n.length; i < r; i++)
      n[i].geometryIndex === t && this.deleteInstance(i);
    return e[t].active = !1, this._availableGeometryIds.push(t), this._visibilityChanged = !0, this;
  }
  deleteInstance(t) {
    const e = this._instanceInfo;
    return t >= e.length || e[t].active === !1 ? this : (e[t].active = !1, this._availableInstanceIds.push(t), this._visibilityChanged = !0, this);
  }
  optimize() {
    let t = 0, e = 0;
    const n = this._geometryInfo, i = n.map((a, o) => o).sort((a, o) => n[a].vertexStart - n[o].vertexStart), r = this.geometry;
    for (let a = 0, o = n.length; a < o; a++) {
      const c = i[a], l = n[c];
      if (l.active !== !1) {
        if (r.index !== null) {
          if (l.indexStart !== e) {
            const { indexStart: h, vertexStart: u, reservedIndexCount: d } = l, f = r.index, m = f.array, _ = t - u;
            for (let g = h; g < h + d; g++)
              m[g] = m[g] + _;
            f.array.copyWithin(e, h, h + d), f.addUpdateRange(e, d), l.indexStart = e;
          }
          e += l.reservedIndexCount;
        }
        if (l.vertexStart !== t) {
          const { vertexStart: h, reservedVertexCount: u } = l, d = r.attributes;
          for (const f in d) {
            const m = d[f], { array: _, itemSize: g } = m;
            _.copyWithin(t * g, h * g, (h + u) * g), m.addUpdateRange(t * g, u * g);
          }
          l.vertexStart = t;
        }
        t += l.reservedVertexCount, l.start = r.index ? l.indexStart : l.vertexStart, this._nextIndexStart = r.index ? l.indexStart + l.reservedIndexCount : 0, this._nextVertexStart = l.vertexStart + l.reservedVertexCount;
      }
    }
    return this;
  }
  // get bounding box and compute it if it doesn't exist
  getBoundingBoxAt(t, e) {
    if (t >= this._geometryCount)
      return null;
    const n = this.geometry, i = this._geometryInfo[t];
    if (i.boundingBox === null) {
      const r = new we(), a = n.index, o = n.attributes.position;
      for (let c = i.start, l = i.start + i.count; c < l; c++) {
        let h = c;
        a && (h = a.getX(h)), r.expandByPoint(rr.fromBufferAttribute(o, h));
      }
      i.boundingBox = r;
    }
    return e.copy(i.boundingBox), e;
  }
  // get bounding sphere and compute it if it doesn't exist
  getBoundingSphereAt(t, e) {
    if (t >= this._geometryCount)
      return null;
    const n = this.geometry, i = this._geometryInfo[t];
    if (i.boundingSphere === null) {
      const r = new Pe();
      this.getBoundingBoxAt(t, Aa), Aa.getCenter(r.center);
      const a = n.index, o = n.attributes.position;
      let c = 0;
      for (let l = i.start, h = i.start + i.count; l < h; l++) {
        let u = l;
        a && (u = a.getX(u)), rr.fromBufferAttribute(o, u), c = Math.max(c, r.center.distanceToSquared(rr));
      }
      r.radius = Math.sqrt(c), i.boundingSphere = r;
    }
    return e.copy(i.boundingSphere), e;
  }
  setMatrixAt(t, e) {
    const n = this._instanceInfo, i = this._matricesTexture, r = this._matricesTexture.image.data;
    return t >= n.length || n[t].active === !1 ? this : (e.toArray(r, t * 16), i.needsUpdate = !0, this);
  }
  getMatrixAt(t, e) {
    const n = this._instanceInfo, i = this._matricesTexture.image.data;
    return t >= n.length || n[t].active === !1 ? null : e.fromArray(i, t * 16);
  }
  setColorAt(t, e) {
    this._colorsTexture === null && this._initColorsTexture();
    const n = this._colorsTexture, i = this._colorsTexture.image.data, r = this._instanceInfo;
    return t >= r.length || r[t].active === !1 ? this : (e.toArray(i, t * 4), n.needsUpdate = !0, this);
  }
  getColorAt(t, e) {
    const n = this._colorsTexture.image.data, i = this._instanceInfo;
    return t >= i.length || i[t].active === !1 ? null : e.fromArray(n, t * 4);
  }
  setVisibleAt(t, e) {
    const n = this._instanceInfo;
    return t >= n.length || n[t].active === !1 || n[t].visible === e ? this : (n[t].visible = e, this._visibilityChanged = !0, this);
  }
  getVisibleAt(t) {
    const e = this._instanceInfo;
    return t >= e.length || e[t].active === !1 ? !1 : e[t].visible;
  }
  setGeometryIdAt(t, e) {
    const n = this._instanceInfo, i = this._geometryInfo;
    return t >= n.length || n[t].active === !1 || e >= i.length || i[e].active === !1 ? null : (n[t].geometryIndex = e, this);
  }
  getGeometryIdAt(t) {
    const e = this._instanceInfo;
    return t >= e.length || e[t].active === !1 ? -1 : e[t].geometryIndex;
  }
  getGeometryRangeAt(t, e = {}) {
    if (t < 0 || t >= this._geometryCount)
      return null;
    const n = this._geometryInfo[t];
    return e.vertexStart = n.vertexStart, e.vertexCount = n.vertexCount, e.reservedVertexCount = n.reservedVertexCount, e.indexStart = n.indexStart, e.indexCount = n.indexCount, e.reservedIndexCount = n.reservedIndexCount, e.start = n.start, e.count = n.count, e;
  }
  setInstanceCount(t) {
    const e = this._availableInstanceIds, n = this._instanceInfo;
    for (e.sort(tl); e[e.length - 1] === n.length; )
      n.pop(), e.pop();
    if (t < n.length)
      throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);
    const i = new Int32Array(t), r = new Int32Array(t);
    Oi(this._multiDrawCounts, i), Oi(this._multiDrawStarts, r), this._multiDrawCounts = i, this._multiDrawStarts = r, this._maxInstanceCount = t;
    const a = this._indirectTexture, o = this._matricesTexture, c = this._colorsTexture;
    a.dispose(), this._initIndirectTexture(), Oi(a.image.data, this._indirectTexture.image.data), o.dispose(), this._initMatricesTexture(), Oi(o.image.data, this._matricesTexture.image.data), c && (c.dispose(), this._initColorsTexture(), Oi(c.image.data, this._colorsTexture.image.data));
  }
  setGeometrySize(t, e) {
    const n = [...this._geometryInfo].filter((o) => o.active);
    if (Math.max(...n.map((o) => o.vertexStart + o.reservedVertexCount)) > t)
      throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);
    if (this.geometry.index && Math.max(...n.map((c) => c.indexStart + c.reservedIndexCount)) > e)
      throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);
    const r = this.geometry;
    r.dispose(), this._maxVertexCount = t, this._maxIndexCount = e, this._geometryInitialized && (this._geometryInitialized = !1, this.geometry = new Yt(), this._initializeGeometry(r));
    const a = this.geometry;
    r.index && Oi(r.index.array, a.index.array);
    for (const o in r.attributes)
      Oi(r.attributes[o].array, a.attributes[o].array);
  }
  raycast(t, e) {
    const n = this._instanceInfo, i = this._geometryInfo, r = this.matrixWorld, a = this.geometry;
    ze.material = this.material, ze.geometry.index = a.index, ze.geometry.attributes = a.attributes, ze.geometry.boundingBox === null && (ze.geometry.boundingBox = new we()), ze.geometry.boundingSphere === null && (ze.geometry.boundingSphere = new Pe());
    for (let o = 0, c = n.length; o < c; o++) {
      if (!n[o].visible || !n[o].active)
        continue;
      const l = n[o].geometryIndex, h = i[l];
      ze.geometry.setDrawRange(h.start, h.count), this.getMatrixAt(o, ze.matrixWorld).premultiply(r), this.getBoundingBoxAt(l, ze.geometry.boundingBox), this.getBoundingSphereAt(l, ze.geometry.boundingSphere), ze.raycast(t, Ca);
      for (let u = 0, d = Ca.length; u < d; u++) {
        const f = Ca[u];
        f.object = this, f.batchId = o, e.push(f);
      }
      Ca.length = 0;
    }
    ze.material = null, ze.geometry.index = null, ze.geometry.attributes = {}, ze.geometry.setDrawRange(0, 1 / 0);
  }
  copy(t) {
    return super.copy(t), this.geometry = t.geometry.clone(), this.perObjectFrustumCulled = t.perObjectFrustumCulled, this.sortObjects = t.sortObjects, this.boundingBox = t.boundingBox !== null ? t.boundingBox.clone() : null, this.boundingSphere = t.boundingSphere !== null ? t.boundingSphere.clone() : null, this._geometryInfo = t._geometryInfo.map((e) => ({
      ...e,
      boundingBox: e.boundingBox !== null ? e.boundingBox.clone() : null,
      boundingSphere: e.boundingSphere !== null ? e.boundingSphere.clone() : null
    })), this._instanceInfo = t._instanceInfo.map((e) => ({ ...e })), this._maxInstanceCount = t._maxInstanceCount, this._maxVertexCount = t._maxVertexCount, this._maxIndexCount = t._maxIndexCount, this._geometryInitialized = t._geometryInitialized, this._geometryCount = t._geometryCount, this._multiDrawCounts = t._multiDrawCounts.slice(), this._multiDrawStarts = t._multiDrawStarts.slice(), this._matricesTexture = t._matricesTexture.clone(), this._matricesTexture.image.data = this._matricesTexture.image.data.slice(), this._colorsTexture !== null && (this._colorsTexture = t._colorsTexture.clone(), this._colorsTexture.image.data = this._colorsTexture.image.data.slice()), this;
  }
  dispose() {
    return this.geometry.dispose(), this._matricesTexture.dispose(), this._matricesTexture = null, this._indirectTexture.dispose(), this._indirectTexture = null, this._colorsTexture !== null && (this._colorsTexture.dispose(), this._colorsTexture = null), this;
  }
  onBeforeRender(t, e, n, i, r) {
    if (!this._visibilityChanged && !this.perObjectFrustumCulled && !this.sortObjects)
      return;
    const a = i.getIndex(), o = a === null ? 1 : a.array.BYTES_PER_ELEMENT, c = this._instanceInfo, l = this._multiDrawStarts, h = this._multiDrawCounts, u = this._geometryInfo, d = this.perObjectFrustumCulled, f = this._indirectTexture, m = f.image.data;
    d && (Ke.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse).multiply(this.matrixWorld), el.setFromProjectionMatrix(
      Ke,
      t.coordinateSystem
    ));
    let _ = 0;
    if (this.sortObjects) {
      Ke.copy(this.matrixWorld).invert(), rr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Ke), Hu.set(0, 0, -1).transformDirection(n.matrixWorld).transformDirection(Ke);
      for (let y = 0, x = c.length; y < x; y++)
        if (c[y].visible && c[y].active) {
          const v = c[y].geometryIndex;
          this.getMatrixAt(y, Ke), this.getBoundingSphereAt(v, Fi).applyMatrix4(Ke);
          let E = !1;
          if (d && (E = !el.intersectsSphere(Fi)), !E) {
            const b = u[v], C = hy.subVectors(Fi.center, rr).dot(Hu);
            nl.push(b.start, b.count, C, y);
          }
        }
      const g = nl.list, p = this.customSort;
      p === null ? g.sort(r.transparent ? oy : ay) : p.call(this, g, n);
      for (let y = 0, x = g.length; y < x; y++) {
        const v = g[y];
        l[_] = v.start * o, h[_] = v.count, m[_] = v.index, _++;
      }
      nl.reset();
    } else
      for (let g = 0, p = c.length; g < p; g++)
        if (c[g].visible && c[g].active) {
          const y = c[g].geometryIndex;
          let x = !1;
          if (d && (this.getMatrixAt(g, Ke), this.getBoundingSphereAt(y, Fi).applyMatrix4(Ke), x = !el.intersectsSphere(Fi)), !x) {
            const v = u[y];
            l[_] = v.start * o, h[_] = v.count, m[_] = g, _++;
          }
        }
    f.needsUpdate = !0, this._multiDrawCount = _, this._visibilityChanged = !1;
  }
  onBeforeShadow(t, e, n, i, r, a) {
    this.onBeforeRender(t, null, i, r, a);
  }
}
class Ve extends ke {
  static get type() {
    return "LineBasicMaterial";
  }
  constructor(t) {
    super(), this.isLineBasicMaterial = !0, this.color = new gt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const zo = /* @__PURE__ */ new R(), ko = /* @__PURE__ */ new R(), Gu = /* @__PURE__ */ new Ft(), ar = /* @__PURE__ */ new Ws(), Ra = /* @__PURE__ */ new Pe(), il = /* @__PURE__ */ new R(), Wu = /* @__PURE__ */ new R();
class Ei extends Qt {
  constructor(t = new Yt(), e = new Ve()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let i = 1, r = e.count; i < r; i++)
        zo.fromBufferAttribute(e, i - 1), ko.fromBufferAttribute(e, i), n[i] = n[i - 1], n[i] += zo.distanceTo(ko);
      t.setAttribute("lineDistance", new Ct(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ra.copy(n.boundingSphere), Ra.applyMatrix4(i), Ra.radius += r, t.ray.intersectsSphere(Ra) === !1) return;
    Gu.copy(i).invert(), ar.copy(t.ray).applyMatrix4(Gu);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const f = Math.max(0, a.start), m = Math.min(h.count, a.start + a.count);
      for (let _ = f, g = m - 1; _ < g; _ += l) {
        const p = h.getX(_), y = h.getX(_ + 1), x = Pa(this, t, ar, c, p, y);
        x && e.push(x);
      }
      if (this.isLineLoop) {
        const _ = h.getX(m - 1), g = h.getX(f), p = Pa(this, t, ar, c, _, g);
        p && e.push(p);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(d.count, a.start + a.count);
      for (let _ = f, g = m - 1; _ < g; _ += l) {
        const p = Pa(this, t, ar, c, _, _ + 1);
        p && e.push(p);
      }
      if (this.isLineLoop) {
        const _ = Pa(this, t, ar, c, m - 1, f);
        _ && e.push(_);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Pa(s, t, e, n, i, r) {
  const a = s.geometry.attributes.position;
  if (zo.fromBufferAttribute(a, i), ko.fromBufferAttribute(a, r), e.distanceSqToSegment(zo, ko, il, Wu) > n) return;
  il.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(il);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      // What do we want? intersection point on the ray or on the segment??
      // point: raycaster.ray.at( distance ),
      point: Wu.clone().applyMatrix4(s.matrixWorld),
      index: i,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s
    };
}
const Xu = /* @__PURE__ */ new R(), qu = /* @__PURE__ */ new R();
class In extends Ei {
  constructor(t, e) {
    super(t, e), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let i = 0, r = e.count; i < r; i += 2)
        Xu.fromBufferAttribute(e, i), qu.fromBufferAttribute(e, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + Xu.distanceTo(qu);
      t.setAttribute("lineDistance", new Ct(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Xf extends Ei {
  constructor(t, e) {
    super(t, e), this.isLineLoop = !0, this.type = "LineLoop";
  }
}
class lh extends ke {
  static get type() {
    return "PointsMaterial";
  }
  constructor(t) {
    super(), this.isPointsMaterial = !0, this.color = new gt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Yu = /* @__PURE__ */ new Ft(), Al = /* @__PURE__ */ new Ws(), Ia = /* @__PURE__ */ new Pe(), La = /* @__PURE__ */ new R();
class qf extends Qt {
  constructor(t = new Yt(), e = new lh()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, i = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ia.copy(n.boundingSphere), Ia.applyMatrix4(i), Ia.radius += r, t.ray.intersectsSphere(Ia) === !1) return;
    Yu.copy(i).invert(), Al.copy(t.ray).applyMatrix4(Yu);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = n.index, u = n.attributes.position;
    if (l !== null) {
      const d = Math.max(0, a.start), f = Math.min(l.count, a.start + a.count);
      for (let m = d, _ = f; m < _; m++) {
        const g = l.getX(m);
        La.fromBufferAttribute(u, g), $u(La, g, c, i, t, e, this);
      }
    } else {
      const d = Math.max(0, a.start), f = Math.min(u.count, a.start + a.count);
      for (let m = d, _ = f; m < _; m++)
        La.fromBufferAttribute(u, m), $u(La, m, c, i, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const i = e[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function $u(s, t, e, n, i, r, a) {
  const o = Al.distanceSqToPoint(s);
  if (o < e) {
    const c = new R();
    Al.closestPointToPoint(s, c), c.applyMatrix4(n);
    const l = i.ray.origin.distanceTo(c);
    if (l < i.near || l > i.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a
    });
  }
}
class dy extends _e {
  constructor(t, e, n, i, r, a, o, c, l) {
    super(t, e, n, i, r, a, o, c, l), this.isVideoTexture = !0, this.minFilter = a !== void 0 ? a : be, this.magFilter = r !== void 0 ? r : be, this.generateMipmaps = !1;
    const h = this;
    function u() {
      h.needsUpdate = !0, t.requestVideoFrameCallback(u);
    }
    "requestVideoFrameCallback" in t && t.requestVideoFrameCallback(u);
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    const t = this.image;
    "requestVideoFrameCallback" in t === !1 && t.readyState >= t.HAVE_CURRENT_DATA && (this.needsUpdate = !0);
  }
}
class fy extends _e {
  constructor(t, e) {
    super({ width: t, height: e }), this.isFramebufferTexture = !0, this.magFilter = Ne, this.minFilter = Ne, this.generateMipmaps = !1, this.needsUpdate = !0;
  }
}
class lc extends _e {
  constructor(t, e, n, i, r, a, o, c, l, h, u, d) {
    super(null, a, o, c, l, h, i, r, u, d), this.isCompressedTexture = !0, this.image = { width: e, height: n }, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class py extends lc {
  constructor(t, e, n, i, r, a) {
    super(t, e, n, r, a), this.isCompressedArrayTexture = !0, this.image.depth = i, this.wrapR = _n, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class my extends lc {
  constructor(t, e, n) {
    super(void 0, t[0].width, t[0].height, e, n, ui), this.isCompressedCubeTexture = !0, this.isCubeTexture = !0, this.image = t;
  }
}
class qr extends _e {
  constructor(t, e, n, i, r, a, o, c, l) {
    super(t, e, n, i, r, a, o, c, l), this.isCanvasTexture = !0, this.needsUpdate = !0;
  }
}
class Ln {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  // Get sequence of points using getPoint( t )
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return e;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPointAt(n / t));
    return e;
  }
  // Get total curve arc length
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n, i = this.getPoint(0), r = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      n = this.getPoint(a / t), r += n.distanceTo(i), e.push(r), i = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let i = 0;
    const r = n.length;
    let a;
    e ? a = e : a = t * n[r - 1];
    let o = 0, c = r - 1, l;
    for (; o <= c; )
      if (i = Math.floor(o + (c - o) / 2), l = n[i] - a, l < 0)
        o = i + 1;
      else if (l > 0)
        c = i - 1;
      else {
        c = i;
        break;
      }
    if (i = c, n[i] === a)
      return i / (r - 1);
    const h = n[i], d = n[i + 1] - h, f = (a - h) / d;
    return (i + f) / (r - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(t, e) {
    let i = t - 1e-4, r = t + 1e-4;
    i < 0 && (i = 0), r > 1 && (r = 1);
    const a = this.getPoint(i), o = this.getPoint(r), c = e || (a.isVector2 ? new nt() : new R());
    return c.copy(o).sub(a).normalize(), c;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new R(), i = [], r = [], a = [], o = new R(), c = new Ft();
    for (let f = 0; f <= t; f++) {
      const m = f / t;
      i[f] = this.getTangentAt(m, new R());
    }
    r[0] = new R(), a[0] = new R();
    let l = Number.MAX_VALUE;
    const h = Math.abs(i[0].x), u = Math.abs(i[0].y), d = Math.abs(i[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), o.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], o), a[0].crossVectors(i[0], r[0]);
    for (let f = 1; f <= t; f++) {
      if (r[f] = r[f - 1].clone(), a[f] = a[f - 1].clone(), o.crossVectors(i[f - 1], i[f]), o.length() > Number.EPSILON) {
        o.normalize();
        const m = Math.acos(ge(i[f - 1].dot(i[f]), -1, 1));
        r[f].applyMatrix4(c.makeRotationAxis(o, m));
      }
      a[f].crossVectors(i[f], r[f]);
    }
    if (e === !0) {
      let f = Math.acos(ge(r[0].dot(r[t]), -1, 1));
      f /= t, i[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f);
      for (let m = 1; m <= t; m++)
        r[m].applyMatrix4(c.makeRotationAxis(i[m], f * m)), a[m].crossVectors(i[m], r[m]);
    }
    return {
      tangents: i,
      normals: r,
      binormals: a
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class hc extends Ln {
  constructor(t = 0, e = 0, n = 1, i = 1, r = 0, a = Math.PI * 2, o = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = c;
  }
  getPoint(t, e = new nt()) {
    const n = e, i = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += i;
    for (; r > i; ) r -= i;
    r < Number.EPSILON && (a ? r = 0 : r = i), this.aClockwise === !0 && !a && (r === i ? r = -i : r = r - i);
    const o = this.aStartAngle + t * r;
    let c = this.aX + this.xRadius * Math.cos(o), l = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, f = l - this.aY;
      c = d * h - f * u + this.aX, l = d * u + f * h + this.aY;
    }
    return n.set(c, l);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Yf extends hc {
  constructor(t, e, n, i, r, a) {
    super(t, e, n, n, i, r, a), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function hh() {
  let s = 0, t = 0, e = 0, n = 0;
  function i(r, a, o, c) {
    s = r, t = o, e = -3 * r + 3 * a - 2 * o - c, n = 2 * r - 2 * a + o + c;
  }
  return {
    initCatmullRom: function(r, a, o, c, l) {
      i(a, o, l * (o - r), l * (c - a));
    },
    initNonuniformCatmullRom: function(r, a, o, c, l, h, u) {
      let d = (a - r) / l - (o - r) / (l + h) + (o - a) / h, f = (o - a) / h - (c - a) / (h + u) + (c - o) / u;
      d *= h, f *= h, i(a, o, d, f);
    },
    calc: function(r) {
      const a = r * r, o = a * r;
      return s + t * r + e * a + n * o;
    }
  };
}
const Da = /* @__PURE__ */ new R(), sl = /* @__PURE__ */ new hh(), rl = /* @__PURE__ */ new hh(), al = /* @__PURE__ */ new hh();
class uh extends Ln {
  constructor(t = [], e = !1, n = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = i;
  }
  getPoint(t, e = new R()) {
    const n = e, i = this.points, r = i.length, a = (r - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a), c = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : c === 0 && o === r - 1 && (o = r - 2, c = 1);
    let l, h;
    this.closed || o > 0 ? l = i[(o - 1) % r] : (Da.subVectors(i[0], i[1]).add(i[0]), l = Da);
    const u = i[o % r], d = i[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = i[(o + 2) % r] : (Da.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), h = Da), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let m = Math.pow(l.distanceToSquared(u), f), _ = Math.pow(u.distanceToSquared(d), f), g = Math.pow(d.distanceToSquared(h), f);
      _ < 1e-4 && (_ = 1), m < 1e-4 && (m = _), g < 1e-4 && (g = _), sl.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, m, _, g), rl.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, m, _, g), al.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, m, _, g);
    } else this.curveType === "catmullrom" && (sl.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), rl.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), al.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      sl.calc(c),
      rl.calc(c),
      al.calc(c)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new R().fromArray(i));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function Zu(s, t, e, n, i) {
  const r = (n - t) * 0.5, a = (i - e) * 0.5, o = s * s, c = s * o;
  return (2 * e - 2 * n + r + a) * c + (-3 * e + 3 * n - 2 * r - a) * o + r * s + e;
}
function gy(s, t) {
  const e = 1 - s;
  return e * e * t;
}
function _y(s, t) {
  return 2 * (1 - s) * s * t;
}
function xy(s, t) {
  return s * s * t;
}
function br(s, t, e, n) {
  return gy(s, t) + _y(s, e) + xy(s, n);
}
function vy(s, t) {
  const e = 1 - s;
  return e * e * e * t;
}
function yy(s, t) {
  const e = 1 - s;
  return 3 * e * e * s * t;
}
function My(s, t) {
  return 3 * (1 - s) * s * s * t;
}
function Sy(s, t) {
  return s * s * s * t;
}
function wr(s, t, e, n, i) {
  return vy(s, t) + yy(s, e) + My(s, n) + Sy(s, i);
}
class dh extends Ln {
  constructor(t = new nt(), e = new nt(), n = new nt(), i = new nt()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new nt()) {
    const n = e, i = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(
      wr(t, i.x, r.x, a.x, o.x),
      wr(t, i.y, r.y, a.y, o.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class $f extends Ln {
  constructor(t = new R(), e = new R(), n = new R(), i = new R()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = i;
  }
  getPoint(t, e = new R()) {
    const n = e, i = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(
      wr(t, i.x, r.x, a.x, o.x),
      wr(t, i.y, r.y, a.y, o.y),
      wr(t, i.z, r.z, a.z, o.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class fh extends Ln {
  constructor(t = new nt(), e = new nt()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new nt()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new nt()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class Zf extends Ln {
  constructor(t = new R(), e = new R()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new R()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new R()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class ph extends Ln {
  constructor(t = new nt(), e = new nt(), n = new nt()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new nt()) {
    const n = e, i = this.v0, r = this.v1, a = this.v2;
    return n.set(
      br(t, i.x, r.x, a.x),
      br(t, i.y, r.y, a.y)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class uc extends Ln {
  constructor(t = new R(), e = new R(), n = new R()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new R()) {
    const n = e, i = this.v0, r = this.v1, a = this.v2;
    return n.set(
      br(t, i.x, r.x, a.x),
      br(t, i.y, r.y, a.y),
      br(t, i.z, r.z, a.z)
    ), n;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class mh extends Ln {
  constructor(t = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new nt()) {
    const n = e, i = this.points, r = (i.length - 1) * t, a = Math.floor(r), o = r - a, c = i[a === 0 ? a : a - 1], l = i[a], h = i[a > i.length - 2 ? i.length - 1 : a + 1], u = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return n.set(
      Zu(o, c.x, l.x, h.x, u.x),
      Zu(o, c.y, l.y, h.y, u.y)
    ), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const i = this.points[e];
      t.points.push(i.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const i = t.points[e];
      this.points.push(new nt().fromArray(i));
    }
    return this;
  }
}
var Vo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Yf,
  CatmullRomCurve3: uh,
  CubicBezierCurve: dh,
  CubicBezierCurve3: $f,
  EllipseCurve: hc,
  LineCurve: fh,
  LineCurve3: Zf,
  QuadraticBezierCurve: ph,
  QuadraticBezierCurve3: uc,
  SplineCurve: mh
});
class Jf extends Ln {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new Vo[n](e, t));
    }
    return this;
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(t, e) {
    const n = t * this.getLength(), i = this.getCurveLengths();
    let r = 0;
    for (; r < i.length; ) {
      if (i[r] >= n) {
        const a = i[r] - n, o = this.curves[r], c = o.getLength(), l = c === 0 ? 0 : 1 - a / c;
        return o.getPointAt(l, e);
      }
      r++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, i = this.curves.length; n < i; n++)
      e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++)
      e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let i = 0, r = this.curves; i < r.length; i++) {
      const a = r[i], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, c = a.getPoints(o);
      for (let l = 0; l < c.length; l++) {
        const h = c[l];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const i = this.curves[e];
      t.curves.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const i = t.curves[e];
      this.curves.push(new Vo[i.type]().fromJSON(i));
    }
    return this;
  }
}
class Dr extends Jf {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new nt(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++)
      this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new fh(this.currentPoint.clone(), new nt(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    const r = new ph(
      this.currentPoint.clone(),
      new nt(t, e),
      new nt(n, i)
    );
    return this.curves.push(r), this.currentPoint.set(n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, a) {
    const o = new dh(
      this.currentPoint.clone(),
      new nt(t, e),
      new nt(n, i),
      new nt(r, a)
    );
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new mh(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, i, r, a) {
    const o = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      t + o,
      e + c,
      n,
      i,
      r,
      a
    ), this;
  }
  absarc(t, e, n, i, r, a) {
    return this.absellipse(t, e, n, n, i, r, a), this;
  }
  ellipse(t, e, n, i, r, a, o, c) {
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + l, e + h, n, i, r, a, o, c), this;
  }
  absellipse(t, e, n, i, r, a, o, c) {
    const l = new hc(t, e, n, i, r, a, o, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class qs extends Yt {
  constructor(t = [new nt(0, -0.5), new nt(0.5, 0), new nt(0, 0.5)], e = 12, n = 0, i = Math.PI * 2) {
    super(), this.type = "LatheGeometry", this.parameters = {
      points: t,
      segments: e,
      phiStart: n,
      phiLength: i
    }, e = Math.floor(e), i = ge(i, 0, Math.PI * 2);
    const r = [], a = [], o = [], c = [], l = [], h = 1 / e, u = new R(), d = new nt(), f = new R(), m = new R(), _ = new R();
    let g = 0, p = 0;
    for (let y = 0; y <= t.length - 1; y++)
      switch (y) {
        case 0:
          g = t[y + 1].x - t[y].x, p = t[y + 1].y - t[y].y, f.x = p * 1, f.y = -g, f.z = p * 0, _.copy(f), f.normalize(), c.push(f.x, f.y, f.z);
          break;
        case t.length - 1:
          c.push(_.x, _.y, _.z);
          break;
        default:
          g = t[y + 1].x - t[y].x, p = t[y + 1].y - t[y].y, f.x = p * 1, f.y = -g, f.z = p * 0, m.copy(f), f.x += _.x, f.y += _.y, f.z += _.z, f.normalize(), c.push(f.x, f.y, f.z), _.copy(m);
      }
    for (let y = 0; y <= e; y++) {
      const x = n + y * h * i, v = Math.sin(x), E = Math.cos(x);
      for (let b = 0; b <= t.length - 1; b++) {
        u.x = t[b].x * v, u.y = t[b].y, u.z = t[b].x * E, a.push(u.x, u.y, u.z), d.x = y / e, d.y = b / (t.length - 1), o.push(d.x, d.y);
        const C = c[3 * b + 0] * v, A = c[3 * b + 1], S = c[3 * b + 0] * E;
        l.push(C, A, S);
      }
    }
    for (let y = 0; y < e; y++)
      for (let x = 0; x < t.length - 1; x++) {
        const v = x + y * t.length, E = v, b = v + t.length, C = v + t.length + 1, A = v + 1;
        r.push(E, b, A), r.push(C, A, b);
      }
    this.setIndex(r), this.setAttribute("position", new Ct(a, 3)), this.setAttribute("uv", new Ct(o, 2)), this.setAttribute("normal", new Ct(l, 3));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new qs(t.points, t.segments, t.phiStart, t.phiLength);
  }
}
class dc extends qs {
  constructor(t = 1, e = 1, n = 4, i = 8) {
    const r = new Dr();
    r.absarc(0, -e / 2, t, Math.PI * 1.5, 0), r.absarc(0, e / 2, t, 0, Math.PI * 0.5), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = {
      radius: t,
      length: e,
      capSegments: n,
      radialSegments: i
    };
  }
  static fromJSON(t) {
    return new dc(t.radius, t.length, t.capSegments, t.radialSegments);
  }
}
class fc extends Yt {
  constructor(t = 1, e = 32, n = 0, i = Math.PI * 2) {
    super(), this.type = "CircleGeometry", this.parameters = {
      radius: t,
      segments: e,
      thetaStart: n,
      thetaLength: i
    }, e = Math.max(3, e);
    const r = [], a = [], o = [], c = [], l = new R(), h = new nt();
    a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5);
    for (let u = 0, d = 3; u <= e; u++, d += 3) {
      const f = n + u / e * i;
      l.x = t * Math.cos(f), l.y = t * Math.sin(f), a.push(l.x, l.y, l.z), o.push(0, 0, 1), h.x = (a[d] / t + 1) / 2, h.y = (a[d + 1] / t + 1) / 2, c.push(h.x, h.y);
    }
    for (let u = 1; u <= e; u++)
      r.push(u, u + 1, 0);
    this.setIndex(r), this.setAttribute("position", new Ct(a, 3)), this.setAttribute("normal", new Ct(o, 3)), this.setAttribute("uv", new Ct(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new fc(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class Wn extends Yt {
  constructor(t = 1, e = 1, n = 1, i = 32, r = 1, a = !1, o = 0, c = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = {
      radiusTop: t,
      radiusBottom: e,
      height: n,
      radialSegments: i,
      heightSegments: r,
      openEnded: a,
      thetaStart: o,
      thetaLength: c
    };
    const l = this;
    i = Math.floor(i), r = Math.floor(r);
    const h = [], u = [], d = [], f = [];
    let m = 0;
    const _ = [], g = n / 2;
    let p = 0;
    y(), a === !1 && (t > 0 && x(!0), e > 0 && x(!1)), this.setIndex(h), this.setAttribute("position", new Ct(u, 3)), this.setAttribute("normal", new Ct(d, 3)), this.setAttribute("uv", new Ct(f, 2));
    function y() {
      const v = new R(), E = new R();
      let b = 0;
      const C = (e - t) / n;
      for (let A = 0; A <= r; A++) {
        const S = [], M = A / r, I = M * (e - t) + t;
        for (let O = 0; O <= i; O++) {
          const N = O / i, U = N * c + o, q = Math.sin(U), V = Math.cos(U);
          E.x = I * q, E.y = -M * n + g, E.z = I * V, u.push(E.x, E.y, E.z), v.set(q, C, V).normalize(), d.push(v.x, v.y, v.z), f.push(N, 1 - M), S.push(m++);
        }
        _.push(S);
      }
      for (let A = 0; A < i; A++)
        for (let S = 0; S < r; S++) {
          const M = _[S][A], I = _[S + 1][A], O = _[S + 1][A + 1], N = _[S][A + 1];
          (t > 0 || S !== 0) && (h.push(M, I, N), b += 3), (e > 0 || S !== r - 1) && (h.push(I, O, N), b += 3);
        }
      l.addGroup(p, b, 0), p += b;
    }
    function x(v) {
      const E = m, b = new nt(), C = new R();
      let A = 0;
      const S = v === !0 ? t : e, M = v === !0 ? 1 : -1;
      for (let O = 1; O <= i; O++)
        u.push(0, g * M, 0), d.push(0, M, 0), f.push(0.5, 0.5), m++;
      const I = m;
      for (let O = 0; O <= i; O++) {
        const U = O / i * c + o, q = Math.cos(U), V = Math.sin(U);
        C.x = S * V, C.y = g * M, C.z = S * q, u.push(C.x, C.y, C.z), d.push(0, M, 0), b.x = q * 0.5 + 0.5, b.y = V * 0.5 * M + 0.5, f.push(b.x, b.y), m++;
      }
      for (let O = 0; O < i; O++) {
        const N = E + O, U = I + O;
        v === !0 ? h.push(U, U + 1, N) : h.push(U + 1, U, N), A += 3;
      }
      l.addGroup(p, A, v === !0 ? 1 : 2), p += A;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Wn(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Yr extends Wn {
  constructor(t = 1, e = 1, n = 32, i = 1, r = !1, a = 0, o = Math.PI * 2) {
    super(0, t, e, n, i, r, a, o), this.type = "ConeGeometry", this.parameters = {
      radius: t,
      height: e,
      radialSegments: n,
      heightSegments: i,
      openEnded: r,
      thetaStart: a,
      thetaLength: o
    };
  }
  static fromJSON(t) {
    return new Yr(t.radius, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
class Ai extends Yt {
  constructor(t = [], e = [], n = 1, i = 0) {
    super(), this.type = "PolyhedronGeometry", this.parameters = {
      vertices: t,
      indices: e,
      radius: n,
      detail: i
    };
    const r = [], a = [];
    o(i), l(n), h(), this.setAttribute("position", new Ct(r, 3)), this.setAttribute("normal", new Ct(r.slice(), 3)), this.setAttribute("uv", new Ct(a, 2)), i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function o(y) {
      const x = new R(), v = new R(), E = new R();
      for (let b = 0; b < e.length; b += 3)
        f(e[b + 0], x), f(e[b + 1], v), f(e[b + 2], E), c(x, v, E, y);
    }
    function c(y, x, v, E) {
      const b = E + 1, C = [];
      for (let A = 0; A <= b; A++) {
        C[A] = [];
        const S = y.clone().lerp(v, A / b), M = x.clone().lerp(v, A / b), I = b - A;
        for (let O = 0; O <= I; O++)
          O === 0 && A === b ? C[A][O] = S : C[A][O] = S.clone().lerp(M, O / I);
      }
      for (let A = 0; A < b; A++)
        for (let S = 0; S < 2 * (b - A) - 1; S++) {
          const M = Math.floor(S / 2);
          S % 2 === 0 ? (d(C[A][M + 1]), d(C[A + 1][M]), d(C[A][M])) : (d(C[A][M + 1]), d(C[A + 1][M + 1]), d(C[A + 1][M]));
        }
    }
    function l(y) {
      const x = new R();
      for (let v = 0; v < r.length; v += 3)
        x.x = r[v + 0], x.y = r[v + 1], x.z = r[v + 2], x.normalize().multiplyScalar(y), r[v + 0] = x.x, r[v + 1] = x.y, r[v + 2] = x.z;
    }
    function h() {
      const y = new R();
      for (let x = 0; x < r.length; x += 3) {
        y.x = r[x + 0], y.y = r[x + 1], y.z = r[x + 2];
        const v = g(y) / 2 / Math.PI + 0.5, E = p(y) / Math.PI + 0.5;
        a.push(v, 1 - E);
      }
      m(), u();
    }
    function u() {
      for (let y = 0; y < a.length; y += 6) {
        const x = a[y + 0], v = a[y + 2], E = a[y + 4], b = Math.max(x, v, E), C = Math.min(x, v, E);
        b > 0.9 && C < 0.1 && (x < 0.2 && (a[y + 0] += 1), v < 0.2 && (a[y + 2] += 1), E < 0.2 && (a[y + 4] += 1));
      }
    }
    function d(y) {
      r.push(y.x, y.y, y.z);
    }
    function f(y, x) {
      const v = y * 3;
      x.x = t[v + 0], x.y = t[v + 1], x.z = t[v + 2];
    }
    function m() {
      const y = new R(), x = new R(), v = new R(), E = new R(), b = new nt(), C = new nt(), A = new nt();
      for (let S = 0, M = 0; S < r.length; S += 9, M += 6) {
        y.set(r[S + 0], r[S + 1], r[S + 2]), x.set(r[S + 3], r[S + 4], r[S + 5]), v.set(r[S + 6], r[S + 7], r[S + 8]), b.set(a[M + 0], a[M + 1]), C.set(a[M + 2], a[M + 3]), A.set(a[M + 4], a[M + 5]), E.copy(y).add(x).add(v).divideScalar(3);
        const I = g(E);
        _(b, M + 0, y, I), _(C, M + 2, x, I), _(A, M + 4, v, I);
      }
    }
    function _(y, x, v, E) {
      E < 0 && y.x === 1 && (a[x] = y.x - 1), v.x === 0 && v.z === 0 && (a[x] = E / 2 / Math.PI + 0.5);
    }
    function g(y) {
      return Math.atan2(y.z, -y.x);
    }
    function p(y) {
      return Math.atan2(-y.y, Math.sqrt(y.x * y.x + y.z * y.z));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ai(t.vertices, t.indices, t.radius, t.details);
  }
}
class pc extends Ai {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = 1 / n, r = [
      // (±1, ±1, ±1)
      -1,
      -1,
      -1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      1,
      1,
      -1,
      1,
      1,
      1,
      // (0, ±1/φ, ±φ)
      0,
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      // (±1/φ, ±φ, 0)
      -i,
      -n,
      0,
      -i,
      n,
      0,
      i,
      -n,
      0,
      i,
      n,
      0,
      // (±φ, 0, ±1/φ)
      -n,
      0,
      -i,
      n,
      0,
      -i,
      -n,
      0,
      i,
      n,
      0,
      i
    ], a = [
      3,
      11,
      7,
      3,
      7,
      15,
      3,
      15,
      13,
      7,
      19,
      17,
      7,
      17,
      6,
      7,
      6,
      15,
      17,
      4,
      8,
      17,
      8,
      10,
      17,
      10,
      6,
      8,
      0,
      16,
      8,
      16,
      2,
      8,
      2,
      10,
      0,
      12,
      1,
      0,
      1,
      18,
      0,
      18,
      16,
      6,
      10,
      2,
      6,
      2,
      13,
      6,
      13,
      15,
      2,
      16,
      18,
      2,
      18,
      3,
      2,
      3,
      13,
      18,
      1,
      9,
      18,
      9,
      11,
      18,
      11,
      3,
      4,
      14,
      12,
      4,
      12,
      0,
      4,
      0,
      8,
      11,
      9,
      5,
      11,
      5,
      19,
      11,
      19,
      7,
      19,
      5,
      14,
      19,
      14,
      4,
      19,
      4,
      17,
      1,
      12,
      14,
      1,
      14,
      5,
      1,
      5,
      9
    ];
    super(r, a, t, e), this.type = "DodecahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new pc(t.radius, t.detail);
  }
}
const Ua = /* @__PURE__ */ new R(), Na = /* @__PURE__ */ new R(), ol = /* @__PURE__ */ new R(), Fa = /* @__PURE__ */ new Qe();
class gh extends Yt {
  constructor(t = null, e = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = {
      geometry: t,
      thresholdAngle: e
    }, t !== null) {
      const i = Math.pow(10, 4), r = Math.cos(Qi * e), a = t.getIndex(), o = t.getAttribute("position"), c = a ? a.count : o.count, l = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let m = 0; m < c; m += 3) {
        a ? (l[0] = a.getX(m), l[1] = a.getX(m + 1), l[2] = a.getX(m + 2)) : (l[0] = m, l[1] = m + 1, l[2] = m + 2);
        const { a: _, b: g, c: p } = Fa;
        if (_.fromBufferAttribute(o, l[0]), g.fromBufferAttribute(o, l[1]), p.fromBufferAttribute(o, l[2]), Fa.getNormal(ol), u[0] = `${Math.round(_.x * i)},${Math.round(_.y * i)},${Math.round(_.z * i)}`, u[1] = `${Math.round(g.x * i)},${Math.round(g.y * i)},${Math.round(g.z * i)}`, u[2] = `${Math.round(p.x * i)},${Math.round(p.y * i)},${Math.round(p.z * i)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0]))
          for (let y = 0; y < 3; y++) {
            const x = (y + 1) % 3, v = u[y], E = u[x], b = Fa[h[y]], C = Fa[h[x]], A = `${v}_${E}`, S = `${E}_${v}`;
            S in d && d[S] ? (ol.dot(d[S].normal) <= r && (f.push(b.x, b.y, b.z), f.push(C.x, C.y, C.z)), d[S] = null) : A in d || (d[A] = {
              index0: l[y],
              index1: l[x],
              normal: ol.clone()
            });
          }
      }
      for (const m in d)
        if (d[m]) {
          const { index0: _, index1: g } = d[m];
          Ua.fromBufferAttribute(o, _), Na.fromBufferAttribute(o, g), f.push(Ua.x, Ua.y, Ua.z), f.push(Na.x, Na.y, Na.z);
        }
      this.setAttribute("position", new Ct(f, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
class Yn extends Dr {
  constructor(t) {
    super(t), this.uuid = cn(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, i = this.holes.length; n < i; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(t) {
    return {
      shape: this.getPoints(t),
      holes: this.getPointsHoles(t)
    };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const i = this.holes[e];
      t.holes.push(i.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const i = t.holes[e];
      this.holes.push(new Dr().fromJSON(i));
    }
    return this;
  }
}
const by = {
  triangulate: function(s, t, e = 2) {
    const n = t && t.length, i = n ? t[0] * e : s.length;
    let r = Kf(s, 0, i, e, !0);
    const a = [];
    if (!r || r.next === r.prev) return a;
    let o, c, l, h, u, d, f;
    if (n && (r = Cy(s, t, r, e)), s.length > 80 * e) {
      o = l = s[0], c = h = s[1];
      for (let m = e; m < i; m += e)
        u = s[m], d = s[m + 1], u < o && (o = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      f = Math.max(l - o, h - c), f = f !== 0 ? 32767 / f : 0;
    }
    return Ur(r, a, e, o, c, f, 0), a;
  }
};
function Kf(s, t, e, n, i) {
  let r, a;
  if (i === zy(s, t, e, n) > 0)
    for (r = t; r < e; r += n) a = Ju(r, s[r], s[r + 1], a);
  else
    for (r = e - n; r >= t; r -= n) a = Ju(r, s[r], s[r + 1], a);
  return a && mc(a, a.next) && (Fr(a), a = a.next), a;
}
function rs(s, t) {
  if (!s) return s;
  t || (t = s);
  let e = s, n;
  do
    if (n = !1, !e.steiner && (mc(e, e.next) || fe(e.prev, e, e.next) === 0)) {
      if (Fr(e), e = t = e.prev, e === e.next) break;
      n = !0;
    } else
      e = e.next;
  while (n || e !== t);
  return t;
}
function Ur(s, t, e, n, i, r, a) {
  if (!s) return;
  !a && r && Dy(s, n, i, r);
  let o = s, c, l;
  for (; s.prev !== s.next; ) {
    if (c = s.prev, l = s.next, r ? Ey(s, n, i, r) : wy(s)) {
      t.push(c.i / e | 0), t.push(s.i / e | 0), t.push(l.i / e | 0), Fr(s), s = l.next, o = l.next;
      continue;
    }
    if (s = l, s === o) {
      a ? a === 1 ? (s = Ty(rs(s), t, e), Ur(s, t, e, n, i, r, 2)) : a === 2 && Ay(s, t, e, n, i, r) : Ur(rs(s), t, e, n, i, r, 1);
      break;
    }
  }
}
function wy(s) {
  const t = s.prev, e = s, n = s.next;
  if (fe(t, e, n) >= 0) return !1;
  const i = t.x, r = e.x, a = n.x, o = t.y, c = e.y, l = n.y, h = i < r ? i < a ? i : a : r < a ? r : a, u = o < c ? o < l ? o : l : c < l ? c : l, d = i > r ? i > a ? i : a : r > a ? r : a, f = o > c ? o > l ? o : l : c > l ? c : l;
  let m = n.next;
  for (; m !== t; ) {
    if (m.x >= h && m.x <= d && m.y >= u && m.y <= f && Ds(i, o, r, c, a, l, m.x, m.y) && fe(m.prev, m, m.next) >= 0) return !1;
    m = m.next;
  }
  return !0;
}
function Ey(s, t, e, n) {
  const i = s.prev, r = s, a = s.next;
  if (fe(i, r, a) >= 0) return !1;
  const o = i.x, c = r.x, l = a.x, h = i.y, u = r.y, d = a.y, f = o < c ? o < l ? o : l : c < l ? c : l, m = h < u ? h < d ? h : d : u < d ? u : d, _ = o > c ? o > l ? o : l : c > l ? c : l, g = h > u ? h > d ? h : d : u > d ? u : d, p = Cl(f, m, t, e, n), y = Cl(_, g, t, e, n);
  let x = s.prevZ, v = s.nextZ;
  for (; x && x.z >= p && v && v.z <= y; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== a && Ds(o, h, c, u, l, d, x.x, x.y) && fe(x.prev, x, x.next) >= 0 || (x = x.prevZ, v.x >= f && v.x <= _ && v.y >= m && v.y <= g && v !== i && v !== a && Ds(o, h, c, u, l, d, v.x, v.y) && fe(v.prev, v, v.next) >= 0)) return !1;
    v = v.nextZ;
  }
  for (; x && x.z >= p; ) {
    if (x.x >= f && x.x <= _ && x.y >= m && x.y <= g && x !== i && x !== a && Ds(o, h, c, u, l, d, x.x, x.y) && fe(x.prev, x, x.next) >= 0) return !1;
    x = x.prevZ;
  }
  for (; v && v.z <= y; ) {
    if (v.x >= f && v.x <= _ && v.y >= m && v.y <= g && v !== i && v !== a && Ds(o, h, c, u, l, d, v.x, v.y) && fe(v.prev, v, v.next) >= 0) return !1;
    v = v.nextZ;
  }
  return !0;
}
function Ty(s, t, e) {
  let n = s;
  do {
    const i = n.prev, r = n.next.next;
    !mc(i, r) && jf(i, n, n.next, r) && Nr(i, r) && Nr(r, i) && (t.push(i.i / e | 0), t.push(n.i / e | 0), t.push(r.i / e | 0), Fr(n), Fr(n.next), n = s = r), n = n.next;
  } while (n !== s);
  return rs(n);
}
function Ay(s, t, e, n, i, r) {
  let a = s;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && Fy(a, o)) {
        let c = Qf(a, o);
        a = rs(a, a.next), c = rs(c, c.next), Ur(a, t, e, n, i, r, 0), Ur(c, t, e, n, i, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== s);
}
function Cy(s, t, e, n) {
  const i = [];
  let r, a, o, c, l;
  for (r = 0, a = t.length; r < a; r++)
    o = t[r] * n, c = r < a - 1 ? t[r + 1] * n : s.length, l = Kf(s, o, c, n, !1), l === l.next && (l.steiner = !0), i.push(Ny(l));
  for (i.sort(Ry), r = 0; r < i.length; r++)
    e = Py(i[r], e);
  return e;
}
function Ry(s, t) {
  return s.x - t.x;
}
function Py(s, t) {
  const e = Iy(s, t);
  if (!e)
    return t;
  const n = Qf(e, s);
  return rs(n, n.next), rs(e, e.next);
}
function Iy(s, t) {
  let e = t, n = -1 / 0, i;
  const r = s.x, a = s.y;
  do {
    if (a <= e.y && a >= e.next.y && e.next.y !== e.y) {
      const d = e.x + (a - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= r && d > n && (n = d, i = e.x < e.next.x ? e : e.next, d === r))
        return i;
    }
    e = e.next;
  } while (e !== t);
  if (!i) return null;
  const o = i, c = i.x, l = i.y;
  let h = 1 / 0, u;
  e = i;
  do
    r >= e.x && e.x >= c && r !== e.x && Ds(a < l ? r : n, a, c, l, a < l ? n : r, a, e.x, e.y) && (u = Math.abs(a - e.y) / (r - e.x), Nr(e, s) && (u < h || u === h && (e.x > i.x || e.x === i.x && Ly(i, e))) && (i = e, h = u)), e = e.next;
  while (e !== o);
  return i;
}
function Ly(s, t) {
  return fe(s.prev, s, t.prev) < 0 && fe(t.next, s, s.next) < 0;
}
function Dy(s, t, e, n) {
  let i = s;
  do
    i.z === 0 && (i.z = Cl(i.x, i.y, t, e, n)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== s);
  i.prevZ.nextZ = null, i.prevZ = null, Uy(i);
}
function Uy(s) {
  let t, e, n, i, r, a, o, c, l = 1;
  do {
    for (e = s, s = null, r = null, a = 0; e; ) {
      for (a++, n = e, o = 0, t = 0; t < l && (o++, n = n.nextZ, !!n); t++)
        ;
      for (c = l; o > 0 || c > 0 && n; )
        o !== 0 && (c === 0 || !n || e.z <= n.z) ? (i = e, e = e.nextZ, o--) : (i = n, n = n.nextZ, c--), r ? r.nextZ = i : s = i, i.prevZ = r, r = i;
      e = n;
    }
    r.nextZ = null, l *= 2;
  } while (a > 1);
  return s;
}
function Cl(s, t, e, n, i) {
  return s = (s - e) * i | 0, t = (t - n) * i | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, s | t << 1;
}
function Ny(s) {
  let t = s, e = s;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== s);
  return e;
}
function Ds(s, t, e, n, i, r, a, o) {
  return (i - a) * (t - o) >= (s - a) * (r - o) && (s - a) * (n - o) >= (e - a) * (t - o) && (e - a) * (r - o) >= (i - a) * (n - o);
}
function Fy(s, t) {
  return s.next.i !== t.i && s.prev.i !== t.i && !Oy(s, t) && // dones't intersect other edges
  (Nr(s, t) && Nr(t, s) && By(s, t) && // locally visible
  (fe(s.prev, s, t.prev) || fe(s, t.prev, t)) || // does not create opposite-facing sectors
  mc(s, t) && fe(s.prev, s, s.next) > 0 && fe(t.prev, t, t.next) > 0);
}
function fe(s, t, e) {
  return (t.y - s.y) * (e.x - t.x) - (t.x - s.x) * (e.y - t.y);
}
function mc(s, t) {
  return s.x === t.x && s.y === t.y;
}
function jf(s, t, e, n) {
  const i = Ba(fe(s, t, e)), r = Ba(fe(s, t, n)), a = Ba(fe(e, n, s)), o = Ba(fe(e, n, t));
  return !!(i !== r && a !== o || i === 0 && Oa(s, e, t) || r === 0 && Oa(s, n, t) || a === 0 && Oa(e, s, n) || o === 0 && Oa(e, t, n));
}
function Oa(s, t, e) {
  return t.x <= Math.max(s.x, e.x) && t.x >= Math.min(s.x, e.x) && t.y <= Math.max(s.y, e.y) && t.y >= Math.min(s.y, e.y);
}
function Ba(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0;
}
function Oy(s, t) {
  let e = s;
  do {
    if (e.i !== s.i && e.next.i !== s.i && e.i !== t.i && e.next.i !== t.i && jf(e, e.next, s, t)) return !0;
    e = e.next;
  } while (e !== s);
  return !1;
}
function Nr(s, t) {
  return fe(s.prev, s, s.next) < 0 ? fe(s, t, s.next) >= 0 && fe(s, s.prev, t) >= 0 : fe(s, t, s.prev) < 0 || fe(s, s.next, t) < 0;
}
function By(s, t) {
  let e = s, n = !1;
  const i = (s.x + t.x) / 2, r = (s.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && i < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== s);
  return n;
}
function Qf(s, t) {
  const e = new Rl(s.i, s.x, s.y), n = new Rl(t.i, t.x, t.y), i = s.next, r = t.prev;
  return s.next = t, t.prev = s, e.next = i, i.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n;
}
function Ju(s, t, e, n) {
  const i = new Rl(s, t, e);
  return n ? (i.next = n.next, i.prev = n, n.next.prev = i, n.next = i) : (i.prev = i, i.next = i), i;
}
function Fr(s) {
  s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ);
}
function Rl(s, t, e) {
  this.i = s, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function zy(s, t, e, n) {
  let i = 0;
  for (let r = t, a = e - n; r < e; r += n)
    i += (s[a] - s[r]) * (s[r + 1] + s[a + 1]), a = r;
  return i;
}
class $n {
  // calculate area of the contour polygon
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let i = e - 1, r = 0; r < e; i = r++)
      n += t[i].x * t[r].y - t[r].x * t[i].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return $n.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [], i = [], r = [];
    Ku(t), ju(n, t);
    let a = t.length;
    e.forEach(Ku);
    for (let c = 0; c < e.length; c++)
      i.push(a), a += e[c].length, ju(n, e[c]);
    const o = by.triangulate(n, i);
    for (let c = 0; c < o.length; c += 3)
      r.push(o.slice(c, c + 3));
    return r;
  }
}
function Ku(s) {
  const t = s.length;
  t > 2 && s[t - 1].equals(s[0]) && s.pop();
}
function ju(s, t) {
  for (let e = 0; e < t.length; e++)
    s.push(t[e].x), s.push(t[e].y);
}
class Ys extends Yt {
  constructor(t = new Yn([new nt(0.5, 0.5), new nt(-0.5, 0.5), new nt(-0.5, -0.5), new nt(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: t,
      options: e
    }, t = Array.isArray(t) ? t : [t];
    const n = this, i = [], r = [];
    for (let o = 0, c = t.length; o < c; o++) {
      const l = t[o];
      a(l);
    }
    this.setAttribute("position", new Ct(i, 3)), this.setAttribute("uv", new Ct(r, 2)), this.computeVertexNormals();
    function a(o) {
      const c = [], l = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let d = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0, f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, m = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1, _ = e.bevelOffset !== void 0 ? e.bevelOffset : 0, g = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const p = e.extrudePath, y = e.UVGenerator !== void 0 ? e.UVGenerator : ky;
      let x, v = !1, E, b, C, A;
      p && (x = p.getSpacedPoints(h), v = !0, d = !1, E = p.computeFrenetFrames(h, !1), b = new R(), C = new R(), A = new R()), d || (g = 0, f = 0, m = 0, _ = 0);
      const S = o.extractPoints(l);
      let M = S.shape;
      const I = S.holes;
      if (!$n.isClockWise(M)) {
        M = M.reverse();
        for (let J = 0, lt = I.length; J < lt; J++) {
          const L = I[J];
          $n.isClockWise(L) && (I[J] = L.reverse());
        }
      }
      const N = $n.triangulateShape(M, I), U = M;
      for (let J = 0, lt = I.length; J < lt; J++) {
        const L = I[J];
        M = M.concat(L);
      }
      function q(J, lt, L) {
        return lt || console.error("THREE.ExtrudeGeometry: vec does not exist"), J.clone().addScaledVector(lt, L);
      }
      const V = M.length, j = N.length;
      function G(J, lt, L) {
        let wt, ht, Et;
        const mt = J.x - lt.x, Ot = J.y - lt.y, St = L.x - J.x, P = L.y - J.y, w = mt * mt + Ot * Ot, W = mt * P - Ot * St;
        if (Math.abs(W) > Number.EPSILON) {
          const tt = Math.sqrt(w), rt = Math.sqrt(St * St + P * P), et = lt.x - Ot / tt, Pt = lt.y + mt / tt, _t = L.x - P / rt, bt = L.y + St / rt, Jt = ((_t - et) * P - (bt - Pt) * St) / (mt * P - Ot * St);
          wt = et + mt * Jt - J.x, ht = Pt + Ot * Jt - J.y;
          const ut = wt * wt + ht * ht;
          if (ut <= 2)
            return new nt(wt, ht);
          Et = Math.sqrt(ut / 2);
        } else {
          let tt = !1;
          mt > Number.EPSILON ? St > Number.EPSILON && (tt = !0) : mt < -Number.EPSILON ? St < -Number.EPSILON && (tt = !0) : Math.sign(Ot) === Math.sign(P) && (tt = !0), tt ? (wt = -Ot, ht = mt, Et = Math.sqrt(w)) : (wt = mt, ht = Ot, Et = Math.sqrt(w / 2));
        }
        return new nt(wt / Et, ht / Et);
      }
      const st = [];
      for (let J = 0, lt = U.length, L = lt - 1, wt = J + 1; J < lt; J++, L++, wt++)
        L === lt && (L = 0), wt === lt && (wt = 0), st[J] = G(U[J], U[L], U[wt]);
      const dt = [];
      let Z, ot = st.concat();
      for (let J = 0, lt = I.length; J < lt; J++) {
        const L = I[J];
        Z = [];
        for (let wt = 0, ht = L.length, Et = ht - 1, mt = wt + 1; wt < ht; wt++, Et++, mt++)
          Et === ht && (Et = 0), mt === ht && (mt = 0), Z[wt] = G(L[wt], L[Et], L[mt]);
        dt.push(Z), ot = ot.concat(Z);
      }
      for (let J = 0; J < g; J++) {
        const lt = J / g, L = f * Math.cos(lt * Math.PI / 2), wt = m * Math.sin(lt * Math.PI / 2) + _;
        for (let ht = 0, Et = U.length; ht < Et; ht++) {
          const mt = q(U[ht], st[ht], wt);
          X(mt.x, mt.y, -L);
        }
        for (let ht = 0, Et = I.length; ht < Et; ht++) {
          const mt = I[ht];
          Z = dt[ht];
          for (let Ot = 0, St = mt.length; Ot < St; Ot++) {
            const P = q(mt[Ot], Z[Ot], wt);
            X(P.x, P.y, -L);
          }
        }
      }
      const Rt = m + _;
      for (let J = 0; J < V; J++) {
        const lt = d ? q(M[J], ot[J], Rt) : M[J];
        v ? (C.copy(E.normals[0]).multiplyScalar(lt.x), b.copy(E.binormals[0]).multiplyScalar(lt.y), A.copy(x[0]).add(C).add(b), X(A.x, A.y, A.z)) : X(lt.x, lt.y, 0);
      }
      for (let J = 1; J <= h; J++)
        for (let lt = 0; lt < V; lt++) {
          const L = d ? q(M[lt], ot[lt], Rt) : M[lt];
          v ? (C.copy(E.normals[J]).multiplyScalar(L.x), b.copy(E.binormals[J]).multiplyScalar(L.y), A.copy(x[J]).add(C).add(b), X(A.x, A.y, A.z)) : X(L.x, L.y, u / h * J);
        }
      for (let J = g - 1; J >= 0; J--) {
        const lt = J / g, L = f * Math.cos(lt * Math.PI / 2), wt = m * Math.sin(lt * Math.PI / 2) + _;
        for (let ht = 0, Et = U.length; ht < Et; ht++) {
          const mt = q(U[ht], st[ht], wt);
          X(mt.x, mt.y, u + L);
        }
        for (let ht = 0, Et = I.length; ht < Et; ht++) {
          const mt = I[ht];
          Z = dt[ht];
          for (let Ot = 0, St = mt.length; Ot < St; Ot++) {
            const P = q(mt[Ot], Z[Ot], wt);
            v ? X(P.x, P.y + x[h - 1].y, x[h - 1].x + L) : X(P.x, P.y, u + L);
          }
        }
      }
      D(), k();
      function D() {
        const J = i.length / 3;
        if (d) {
          let lt = 0, L = V * lt;
          for (let wt = 0; wt < j; wt++) {
            const ht = N[wt];
            Q(ht[2] + L, ht[1] + L, ht[0] + L);
          }
          lt = h + g * 2, L = V * lt;
          for (let wt = 0; wt < j; wt++) {
            const ht = N[wt];
            Q(ht[0] + L, ht[1] + L, ht[2] + L);
          }
        } else {
          for (let lt = 0; lt < j; lt++) {
            const L = N[lt];
            Q(L[2], L[1], L[0]);
          }
          for (let lt = 0; lt < j; lt++) {
            const L = N[lt];
            Q(L[0] + V * h, L[1] + V * h, L[2] + V * h);
          }
        }
        n.addGroup(J, i.length / 3 - J, 0);
      }
      function k() {
        const J = i.length / 3;
        let lt = 0;
        H(U, lt), lt += U.length;
        for (let L = 0, wt = I.length; L < wt; L++) {
          const ht = I[L];
          H(ht, lt), lt += ht.length;
        }
        n.addGroup(J, i.length / 3 - J, 1);
      }
      function H(J, lt) {
        let L = J.length;
        for (; --L >= 0; ) {
          const wt = L;
          let ht = L - 1;
          ht < 0 && (ht = J.length - 1);
          for (let Et = 0, mt = h + g * 2; Et < mt; Et++) {
            const Ot = V * Et, St = V * (Et + 1), P = lt + wt + Ot, w = lt + ht + Ot, W = lt + ht + St, tt = lt + wt + St;
            at(P, w, W, tt);
          }
        }
      }
      function X(J, lt, L) {
        c.push(J), c.push(lt), c.push(L);
      }
      function Q(J, lt, L) {
        ct(J), ct(lt), ct(L);
        const wt = i.length / 3, ht = y.generateTopUV(n, i, wt - 3, wt - 2, wt - 1);
        Ut(ht[0]), Ut(ht[1]), Ut(ht[2]);
      }
      function at(J, lt, L, wt) {
        ct(J), ct(lt), ct(wt), ct(lt), ct(L), ct(wt);
        const ht = i.length / 3, Et = y.generateSideWallUV(n, i, ht - 6, ht - 3, ht - 2, ht - 1);
        Ut(Et[0]), Ut(Et[1]), Ut(Et[3]), Ut(Et[1]), Ut(Et[2]), Ut(Et[3]);
      }
      function ct(J) {
        i.push(c[J * 3 + 0]), i.push(c[J * 3 + 1]), i.push(c[J * 3 + 2]);
      }
      function Ut(J) {
        r.push(J.x), r.push(J.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return Vy(e, n, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let r = 0, a = t.shapes.length; r < a; r++) {
      const o = e[t.shapes[r]];
      n.push(o);
    }
    const i = t.options.extrudePath;
    return i !== void 0 && (t.options.extrudePath = new Vo[i.type]().fromJSON(i)), new Ys(n, t.options);
  }
}
const ky = {
  generateTopUV: function(s, t, e, n, i) {
    const r = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], c = t[n * 3 + 1], l = t[i * 3], h = t[i * 3 + 1];
    return [
      new nt(r, a),
      new nt(o, c),
      new nt(l, h)
    ];
  },
  generateSideWallUV: function(s, t, e, n, i, r) {
    const a = t[e * 3], o = t[e * 3 + 1], c = t[e * 3 + 2], l = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], d = t[i * 3], f = t[i * 3 + 1], m = t[i * 3 + 2], _ = t[r * 3], g = t[r * 3 + 1], p = t[r * 3 + 2];
    return Math.abs(o - h) < Math.abs(a - l) ? [
      new nt(a, 1 - c),
      new nt(l, 1 - u),
      new nt(d, 1 - m),
      new nt(_, 1 - p)
    ] : [
      new nt(o, 1 - c),
      new nt(h, 1 - u),
      new nt(f, 1 - m),
      new nt(g, 1 - p)
    ];
  }
};
function Vy(s, t, e) {
  if (e.shapes = [], Array.isArray(s))
    for (let n = 0, i = s.length; n < i; n++) {
      const r = s[n];
      e.shapes.push(r.uuid);
    }
  else
    e.shapes.push(s.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class gc extends Ai {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2, i = [
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      0,
      0,
      -1,
      n,
      0,
      1,
      n,
      0,
      -1,
      -n,
      0,
      1,
      -n,
      n,
      0,
      -1,
      n,
      0,
      1,
      -n,
      0,
      -1,
      -n,
      0,
      1
    ], r = [
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    ];
    super(i, r, t, e), this.type = "IcosahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new gc(t.radius, t.detail);
  }
}
class $r extends Ai {
  constructor(t = 1, e = 0) {
    const n = [
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1,
      0,
      0,
      0,
      1,
      0,
      0,
      -1
    ], i = [
      0,
      2,
      4,
      0,
      4,
      3,
      0,
      3,
      5,
      0,
      5,
      2,
      1,
      2,
      5,
      1,
      5,
      3,
      1,
      3,
      4,
      1,
      4,
      2
    ];
    super(n, i, t, e), this.type = "OctahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new $r(t.radius, t.detail);
  }
}
class _c extends Yt {
  constructor(t = 0.5, e = 1, n = 32, i = 1, r = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = {
      innerRadius: t,
      outerRadius: e,
      thetaSegments: n,
      phiSegments: i,
      thetaStart: r,
      thetaLength: a
    }, n = Math.max(3, n), i = Math.max(1, i);
    const o = [], c = [], l = [], h = [];
    let u = t;
    const d = (e - t) / i, f = new R(), m = new nt();
    for (let _ = 0; _ <= i; _++) {
      for (let g = 0; g <= n; g++) {
        const p = r + g / n * a;
        f.x = u * Math.cos(p), f.y = u * Math.sin(p), c.push(f.x, f.y, f.z), l.push(0, 0, 1), m.x = (f.x / e + 1) / 2, m.y = (f.y / e + 1) / 2, h.push(m.x, m.y);
      }
      u += d;
    }
    for (let _ = 0; _ < i; _++) {
      const g = _ * (n + 1);
      for (let p = 0; p < n; p++) {
        const y = p + g, x = y, v = y + n + 1, E = y + n + 2, b = y + 1;
        o.push(x, v, b), o.push(v, E, b);
      }
    }
    this.setIndex(o), this.setAttribute("position", new Ct(c, 3)), this.setAttribute("normal", new Ct(l, 3)), this.setAttribute("uv", new Ct(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new _c(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}
class Zr extends Yt {
  constructor(t = new Yn([new nt(0, 0.5), new nt(-0.5, -0.5), new nt(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = {
      shapes: t,
      curveSegments: e
    };
    const n = [], i = [], r = [], a = [];
    let o = 0, c = 0;
    if (Array.isArray(t) === !1)
      l(t);
    else
      for (let h = 0; h < t.length; h++)
        l(t[h]), this.addGroup(o, c, h), o += c, c = 0;
    this.setIndex(n), this.setAttribute("position", new Ct(i, 3)), this.setAttribute("normal", new Ct(r, 3)), this.setAttribute("uv", new Ct(a, 2));
    function l(h) {
      const u = i.length / 3, d = h.extractPoints(e);
      let f = d.shape;
      const m = d.holes;
      $n.isClockWise(f) === !1 && (f = f.reverse());
      for (let g = 0, p = m.length; g < p; g++) {
        const y = m[g];
        $n.isClockWise(y) === !0 && (m[g] = y.reverse());
      }
      const _ = $n.triangulateShape(f, m);
      for (let g = 0, p = m.length; g < p; g++) {
        const y = m[g];
        f = f.concat(y);
      }
      for (let g = 0, p = f.length; g < p; g++) {
        const y = f[g];
        i.push(y.x, y.y, 0), r.push(0, 0, 1), a.push(y.x, y.y);
      }
      for (let g = 0, p = _.length; g < p; g++) {
        const y = _[g], x = y[0] + u, v = y[1] + u, E = y[2] + u;
        n.push(x, v, E), c += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes;
    return Hy(e, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let i = 0, r = t.shapes.length; i < r; i++) {
      const a = e[t.shapes[i]];
      n.push(a);
    }
    return new Zr(n, t.curveSegments);
  }
}
function Hy(s, t) {
  if (t.shapes = [], Array.isArray(s))
    for (let e = 0, n = s.length; e < n; e++) {
      const i = s[e];
      t.shapes.push(i.uuid);
    }
  else
    t.shapes.push(s.uuid);
  return t;
}
class as extends Yt {
  constructor(t = 1, e = 32, n = 16, i = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: t,
      widthSegments: e,
      heightSegments: n,
      phiStart: i,
      phiLength: r,
      thetaStart: a,
      thetaLength: o
    }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const h = [], u = new R(), d = new R(), f = [], m = [], _ = [], g = [];
    for (let p = 0; p <= n; p++) {
      const y = [], x = p / n;
      let v = 0;
      p === 0 && a === 0 ? v = 0.5 / e : p === n && c === Math.PI && (v = -0.5 / e);
      for (let E = 0; E <= e; E++) {
        const b = E / e;
        u.x = -t * Math.cos(i + b * r) * Math.sin(a + x * o), u.y = t * Math.cos(a + x * o), u.z = t * Math.sin(i + b * r) * Math.sin(a + x * o), m.push(u.x, u.y, u.z), d.copy(u).normalize(), _.push(d.x, d.y, d.z), g.push(b + v, 1 - x), y.push(l++);
      }
      h.push(y);
    }
    for (let p = 0; p < n; p++)
      for (let y = 0; y < e; y++) {
        const x = h[p][y + 1], v = h[p][y], E = h[p + 1][y], b = h[p + 1][y + 1];
        (p !== 0 || a > 0) && f.push(x, v, b), (p !== n - 1 || c < Math.PI) && f.push(v, E, b);
      }
    this.setIndex(f), this.setAttribute("position", new Ct(m, 3)), this.setAttribute("normal", new Ct(_, 3)), this.setAttribute("uv", new Ct(g, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new as(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class xc extends Ai {
  constructor(t = 1, e = 0) {
    const n = [
      1,
      1,
      1,
      -1,
      -1,
      1,
      -1,
      1,
      -1,
      1,
      -1,
      -1
    ], i = [
      2,
      1,
      0,
      0,
      3,
      2,
      1,
      3,
      0,
      2,
      3,
      1
    ];
    super(n, i, t, e), this.type = "TetrahedronGeometry", this.parameters = {
      radius: t,
      detail: e
    };
  }
  static fromJSON(t) {
    return new xc(t.radius, t.detail);
  }
}
class Vs extends Yt {
  constructor(t = 1, e = 0.4, n = 12, i = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = {
      radius: t,
      tube: e,
      radialSegments: n,
      tubularSegments: i,
      arc: r
    }, n = Math.floor(n), i = Math.floor(i);
    const a = [], o = [], c = [], l = [], h = new R(), u = new R(), d = new R();
    for (let f = 0; f <= n; f++)
      for (let m = 0; m <= i; m++) {
        const _ = m / i * r, g = f / n * Math.PI * 2;
        u.x = (t + e * Math.cos(g)) * Math.cos(_), u.y = (t + e * Math.cos(g)) * Math.sin(_), u.z = e * Math.sin(g), o.push(u.x, u.y, u.z), h.x = t * Math.cos(_), h.y = t * Math.sin(_), d.subVectors(u, h).normalize(), c.push(d.x, d.y, d.z), l.push(m / i), l.push(f / n);
      }
    for (let f = 1; f <= n; f++)
      for (let m = 1; m <= i; m++) {
        const _ = (i + 1) * f + m - 1, g = (i + 1) * (f - 1) + m - 1, p = (i + 1) * (f - 1) + m, y = (i + 1) * f + m;
        a.push(_, g, y), a.push(g, p, y);
      }
    this.setIndex(a), this.setAttribute("position", new Ct(o, 3)), this.setAttribute("normal", new Ct(c, 3)), this.setAttribute("uv", new Ct(l, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Vs(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class vc extends Yt {
  constructor(t = 1, e = 0.4, n = 64, i = 8, r = 2, a = 3) {
    super(), this.type = "TorusKnotGeometry", this.parameters = {
      radius: t,
      tube: e,
      tubularSegments: n,
      radialSegments: i,
      p: r,
      q: a
    }, n = Math.floor(n), i = Math.floor(i);
    const o = [], c = [], l = [], h = [], u = new R(), d = new R(), f = new R(), m = new R(), _ = new R(), g = new R(), p = new R();
    for (let x = 0; x <= n; ++x) {
      const v = x / n * r * Math.PI * 2;
      y(v, r, a, t, f), y(v + 0.01, r, a, t, m), g.subVectors(m, f), p.addVectors(m, f), _.crossVectors(g, p), p.crossVectors(_, g), _.normalize(), p.normalize();
      for (let E = 0; E <= i; ++E) {
        const b = E / i * Math.PI * 2, C = -e * Math.cos(b), A = e * Math.sin(b);
        u.x = f.x + (C * p.x + A * _.x), u.y = f.y + (C * p.y + A * _.y), u.z = f.z + (C * p.z + A * _.z), c.push(u.x, u.y, u.z), d.subVectors(u, f).normalize(), l.push(d.x, d.y, d.z), h.push(x / n), h.push(E / i);
      }
    }
    for (let x = 1; x <= n; x++)
      for (let v = 1; v <= i; v++) {
        const E = (i + 1) * (x - 1) + (v - 1), b = (i + 1) * x + (v - 1), C = (i + 1) * x + v, A = (i + 1) * (x - 1) + v;
        o.push(E, b, A), o.push(b, C, A);
      }
    this.setIndex(o), this.setAttribute("position", new Ct(c, 3)), this.setAttribute("normal", new Ct(l, 3)), this.setAttribute("uv", new Ct(h, 2));
    function y(x, v, E, b, C) {
      const A = Math.cos(x), S = Math.sin(x), M = E / v * x, I = Math.cos(M);
      C.x = b * (2 + I) * 0.5 * A, C.y = b * (2 + I) * S * 0.5, C.z = b * Math.sin(M) * 0.5;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new vc(t.radius, t.tube, t.tubularSegments, t.radialSegments, t.p, t.q);
  }
}
class Jr extends Yt {
  constructor(t = new uc(new R(-1, -1, 0), new R(-1, 1, 0), new R(1, 1, 0)), e = 64, n = 1, i = 8, r = !1) {
    super(), this.type = "TubeGeometry", this.parameters = {
      path: t,
      tubularSegments: e,
      radius: n,
      radialSegments: i,
      closed: r
    };
    const a = t.computeFrenetFrames(e, r);
    this.tangents = a.tangents, this.normals = a.normals, this.binormals = a.binormals;
    const o = new R(), c = new R(), l = new nt();
    let h = new R();
    const u = [], d = [], f = [], m = [];
    _(), this.setIndex(m), this.setAttribute("position", new Ct(u, 3)), this.setAttribute("normal", new Ct(d, 3)), this.setAttribute("uv", new Ct(f, 2));
    function _() {
      for (let x = 0; x < e; x++)
        g(x);
      g(r === !1 ? e : 0), y(), p();
    }
    function g(x) {
      h = t.getPointAt(x / e, h);
      const v = a.normals[x], E = a.binormals[x];
      for (let b = 0; b <= i; b++) {
        const C = b / i * Math.PI * 2, A = Math.sin(C), S = -Math.cos(C);
        c.x = S * v.x + A * E.x, c.y = S * v.y + A * E.y, c.z = S * v.z + A * E.z, c.normalize(), d.push(c.x, c.y, c.z), o.x = h.x + n * c.x, o.y = h.y + n * c.y, o.z = h.z + n * c.z, u.push(o.x, o.y, o.z);
      }
    }
    function p() {
      for (let x = 1; x <= e; x++)
        for (let v = 1; v <= i; v++) {
          const E = (i + 1) * (x - 1) + (v - 1), b = (i + 1) * x + (v - 1), C = (i + 1) * x + v, A = (i + 1) * (x - 1) + v;
          m.push(E, b, A), m.push(b, C, A);
        }
    }
    function y() {
      for (let x = 0; x <= e; x++)
        for (let v = 0; v <= i; v++)
          l.x = x / e, l.y = v / i, f.push(l.x, l.y);
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.path = this.parameters.path.toJSON(), t;
  }
  static fromJSON(t) {
    return new Jr(
      new Vo[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed
    );
  }
}
class yc extends Yt {
  constructor(t = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = {
      geometry: t
    }, t !== null) {
      const e = [], n = /* @__PURE__ */ new Set(), i = new R(), r = new R();
      if (t.index !== null) {
        const a = t.attributes.position, o = t.index;
        let c = t.groups;
        c.length === 0 && (c = [{ start: 0, count: o.count, materialIndex: 0 }]);
        for (let l = 0, h = c.length; l < h; ++l) {
          const u = c[l], d = u.start, f = u.count;
          for (let m = d, _ = d + f; m < _; m += 3)
            for (let g = 0; g < 3; g++) {
              const p = o.getX(m + g), y = o.getX(m + (g + 1) % 3);
              i.fromBufferAttribute(a, p), r.fromBufferAttribute(a, y), Qu(i, r, n) === !0 && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
        }
      } else {
        const a = t.attributes.position;
        for (let o = 0, c = a.count / 3; o < c; o++)
          for (let l = 0; l < 3; l++) {
            const h = 3 * o + l, u = 3 * o + (l + 1) % 3;
            i.fromBufferAttribute(a, h), r.fromBufferAttribute(a, u), Qu(i, r, n) === !0 && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
      }
      this.setAttribute("position", new Ct(e, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
function Qu(s, t, e) {
  const n = `${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`, i = `${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;
  return e.has(n) === !0 || e.has(i) === !0 ? !1 : (e.add(n), e.add(i), !0);
}
var td = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BoxGeometry: ln,
  CapsuleGeometry: dc,
  CircleGeometry: fc,
  ConeGeometry: Yr,
  CylinderGeometry: Wn,
  DodecahedronGeometry: pc,
  EdgesGeometry: gh,
  ExtrudeGeometry: Ys,
  IcosahedronGeometry: gc,
  LatheGeometry: qs,
  OctahedronGeometry: $r,
  PlaneGeometry: Pn,
  PolyhedronGeometry: Ai,
  RingGeometry: _c,
  ShapeGeometry: Zr,
  SphereGeometry: as,
  TetrahedronGeometry: xc,
  TorusGeometry: Vs,
  TorusKnotGeometry: vc,
  TubeGeometry: Jr,
  WireframeGeometry: yc
});
class tp extends ke {
  static get type() {
    return "ShadowMaterial";
  }
  constructor(t) {
    super(), this.isShadowMaterial = !0, this.color = new gt(0), this.transparent = !0, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.fog = t.fog, this;
  }
}
class ep extends vn {
  static get type() {
    return "RawShaderMaterial";
  }
  constructor(t) {
    super(t), this.isRawShaderMaterial = !0;
  }
}
class _h extends ke {
  static get type() {
    return "MeshStandardMaterial";
  }
  constructor(t) {
    super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.color = new gt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new gt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class np extends _h {
  static get type() {
    return "MeshPhysicalMaterial";
  }
  constructor(t) {
    super(), this.isMeshPhysicalMaterial = !0, this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new nt(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", {
      get: function() {
        return ge(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
      },
      set: function(e) {
        this.ior = (1 + 0.4 * e) / (1 - 0.4 * e);
      }
    }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new gt(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new gt(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new gt(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(t);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(t) {
    this._anisotropy > 0 != t > 0 && this.version++, this._anisotropy = t;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(t) {
    this._clearcoat > 0 != t > 0 && this.version++, this._clearcoat = t;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(t) {
    this._iridescence > 0 != t > 0 && this.version++, this._iridescence = t;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(t) {
    this._dispersion > 0 != t > 0 && this.version++, this._dispersion = t;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(t) {
    this._sheen > 0 != t > 0 && this.version++, this._sheen = t;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(t) {
    this._transmission > 0 != t > 0 && this.version++, this._transmission = t;
  }
  copy(t) {
    return super.copy(t), this.defines = {
      STANDARD: "",
      PHYSICAL: ""
    }, this.anisotropy = t.anisotropy, this.anisotropyRotation = t.anisotropyRotation, this.anisotropyMap = t.anisotropyMap, this.clearcoat = t.clearcoat, this.clearcoatMap = t.clearcoatMap, this.clearcoatRoughness = t.clearcoatRoughness, this.clearcoatRoughnessMap = t.clearcoatRoughnessMap, this.clearcoatNormalMap = t.clearcoatNormalMap, this.clearcoatNormalScale.copy(t.clearcoatNormalScale), this.dispersion = t.dispersion, this.ior = t.ior, this.iridescence = t.iridescence, this.iridescenceMap = t.iridescenceMap, this.iridescenceIOR = t.iridescenceIOR, this.iridescenceThicknessRange = [...t.iridescenceThicknessRange], this.iridescenceThicknessMap = t.iridescenceThicknessMap, this.sheen = t.sheen, this.sheenColor.copy(t.sheenColor), this.sheenColorMap = t.sheenColorMap, this.sheenRoughness = t.sheenRoughness, this.sheenRoughnessMap = t.sheenRoughnessMap, this.transmission = t.transmission, this.transmissionMap = t.transmissionMap, this.thickness = t.thickness, this.thicknessMap = t.thicknessMap, this.attenuationDistance = t.attenuationDistance, this.attenuationColor.copy(t.attenuationColor), this.specularIntensity = t.specularIntensity, this.specularIntensityMap = t.specularIntensityMap, this.specularColor.copy(t.specularColor), this.specularColorMap = t.specularColorMap, this;
  }
}
class ip extends ke {
  static get type() {
    return "MeshPhongMaterial";
  }
  constructor(t) {
    super(), this.isMeshPhongMaterial = !0, this.color = new gt(16777215), this.specular = new gt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new gt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.combine = Vr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class sp extends ke {
  static get type() {
    return "MeshToonMaterial";
  }
  constructor(t) {
    super(), this.isMeshToonMaterial = !0, this.defines = { TOON: "" }, this.color = new gt(16777215), this.map = null, this.gradientMap = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new gt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.gradientMap = t.gradientMap, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
class rp extends ke {
  static get type() {
    return "MeshNormalMaterial";
  }
  constructor(t) {
    super(), this.isMeshNormalMaterial = !0, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.flatShading = !1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.flatShading = t.flatShading, this;
  }
}
class We extends ke {
  static get type() {
    return "MeshLambertMaterial";
  }
  constructor(t) {
    super(), this.isMeshLambertMaterial = !0, this.color = new gt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new gt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new hn(), this.combine = Vr, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class ap extends ke {
  static get type() {
    return "MeshMatcapMaterial";
  }
  constructor(t) {
    super(), this.isMeshMatcapMaterial = !0, this.defines = { MATCAP: "" }, this.color = new gt(16777215), this.matcap = null, this.map = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ti, this.normalScale = new nt(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.alphaMap = null, this.flatShading = !1, this.fog = !0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { MATCAP: "" }, this.color.copy(t.color), this.matcap = t.matcap, this.map = t.map, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.alphaMap = t.alphaMap, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class op extends Ve {
  static get type() {
    return "LineDashedMaterial";
  }
  constructor(t) {
    super(), this.isLineDashedMaterial = !0, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  }
}
function Ji(s, t, e) {
  return !s || // let 'undefined' and 'null' pass
  !e && s.constructor === t ? s : typeof t.BYTES_PER_ELEMENT == "number" ? new t(s) : Array.prototype.slice.call(s);
}
function cp(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function lp(s) {
  function t(i, r) {
    return s[i] - s[r];
  }
  const e = s.length, n = new Array(e);
  for (let i = 0; i !== e; ++i) n[i] = i;
  return n.sort(t), n;
}
function Pl(s, t, e) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = e[r] * t;
    for (let c = 0; c !== t; ++c)
      i[a++] = s[o + c];
  }
  return i;
}
function xh(s, t, e, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; )
    r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        a = r[n], a !== void 0 && (t.push(r.time), e.push.apply(e, a)), r = s[i++];
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        a = r[n], a !== void 0 && (t.push(r.time), a.toArray(e, e.length)), r = s[i++];
      while (r !== void 0);
    else
      do
        a = r[n], a !== void 0 && (t.push(r.time), e.push(a)), r = s[i++];
      while (r !== void 0);
}
function Gy(s, t, e, n, i = 30) {
  const r = s.clone();
  r.name = t;
  const a = [];
  for (let c = 0; c < r.tracks.length; ++c) {
    const l = r.tracks[c], h = l.getValueSize(), u = [], d = [];
    for (let f = 0; f < l.times.length; ++f) {
      const m = l.times[f] * i;
      if (!(m < e || m >= n)) {
        u.push(l.times[f]);
        for (let _ = 0; _ < h; ++_)
          d.push(l.values[f * h + _]);
      }
    }
    u.length !== 0 && (l.times = Ji(u, l.times.constructor), l.values = Ji(d, l.values.constructor), a.push(l));
  }
  r.tracks = a;
  let o = 1 / 0;
  for (let c = 0; c < r.tracks.length; ++c)
    o > r.tracks[c].times[0] && (o = r.tracks[c].times[0]);
  for (let c = 0; c < r.tracks.length; ++c)
    r.tracks[c].shift(-1 * o);
  return r.resetDuration(), r;
}
function Wy(s, t = 0, e = s, n = 30) {
  n <= 0 && (n = 30);
  const i = e.tracks.length, r = t / n;
  for (let a = 0; a < i; ++a) {
    const o = e.tracks[a], c = o.ValueTypeName;
    if (c === "bool" || c === "string") continue;
    const l = s.tracks.find(function(p) {
      return p.name === o.name && p.ValueTypeName === c;
    });
    if (l === void 0) continue;
    let h = 0;
    const u = o.getValueSize();
    o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (h = u / 3);
    let d = 0;
    const f = l.getValueSize();
    l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline && (d = f / 3);
    const m = o.times.length - 1;
    let _;
    if (r <= o.times[0]) {
      const p = h, y = u - h;
      _ = o.values.slice(p, y);
    } else if (r >= o.times[m]) {
      const p = m * u + h, y = p + u - h;
      _ = o.values.slice(p, y);
    } else {
      const p = o.createInterpolant(), y = h, x = u - h;
      p.evaluate(r), _ = p.resultBuffer.slice(y, x);
    }
    c === "quaternion" && new Ze().fromArray(_).normalize().conjugate().toArray(_);
    const g = l.times.length;
    for (let p = 0; p < g; ++p) {
      const y = p * f + d;
      if (c === "quaternion")
        Ze.multiplyQuaternionsFlat(
          l.values,
          y,
          _,
          0,
          l.values,
          y
        );
      else {
        const x = f - d * 2;
        for (let v = 0; v < x; ++v)
          l.values[y + v] -= _[v];
      }
    }
  }
  return s.blendMode = Zl, s;
}
const Xy = {
  convertArray: Ji,
  isTypedArray: cp,
  getKeyframeOrder: lp,
  sortedArray: Pl,
  flattenJSON: xh,
  subclip: Gy,
  makeClipAdditive: Wy
};
class Kr {
  constructor(t, e, n, i) {
    this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(t) {
    const e = this.parameterPositions;
    let n = this._cachedIndex, i = e[n], r = e[n - 1];
    t: {
      e: {
        let a;
        n: {
          i: if (!(t < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (t < r) break i;
                return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = e[++n], t < i)
                break e;
            }
            a = e.length;
            break n;
          }
          if (!(t >= r)) {
            const o = e[1];
            t < o && (n = 2, r = o);
            for (let c = n - 2; ; ) {
              if (r === void 0)
                return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === c) break;
              if (i = r, r = e[--n - 1], t >= r)
                break e;
            }
            a = n, n = 0;
            break n;
          }
          break t;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          t < e[o] ? a = o : n = o + 1;
        }
        if (i = e[n], r = e[n - 1], r === void 0)
          return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0)
          return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, t, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(t) {
    const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t * i;
    for (let a = 0; a !== i; ++a)
      e[a] = n[r + a];
    return e;
  }
  // Template methods for derived classes:
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class hp extends Kr {
  constructor(t, e, n, i) {
    super(t, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
      endingStart: Yi,
      endingEnd: Yi
    };
  }
  intervalChanged_(t, e, n) {
    const i = this.parameterPositions;
    let r = t - 2, a = t + 1, o = i[r], c = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case $i:
          r = t, o = 2 * e - n;
          break;
        case Rr:
          r = i.length - 2, o = e + i[r] - i[r + 1];
          break;
        default:
          r = t, o = n;
      }
    if (c === void 0)
      switch (this.getSettings_().endingEnd) {
        case $i:
          a = t, c = 2 * n - e;
          break;
        case Rr:
          a = 1, c = n + i[1] - i[0];
          break;
        default:
          a = t - 1, c = e;
      }
    const l = (n - e) * 0.5, h = this.valueSize;
    this._weightPrev = l / (e - o), this._weightNext = l / (c - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, l = c - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, f = this._weightNext, m = (n - e) / (i - e), _ = m * m, g = _ * m, p = -d * g + 2 * d * _ - d * m, y = (1 + d) * g + (-1.5 - 2 * d) * _ + (-0.5 + d) * m + 1, x = (-1 - f) * g + (1.5 + f) * _ + 0.5 * m, v = f * g - f * _;
    for (let E = 0; E !== o; ++E)
      r[E] = p * a[h + E] + y * a[l + E] + x * a[c + E] + v * a[u + E];
    return r;
  }
}
class vh extends Kr {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, l = c - o, h = (n - e) / (i - e), u = 1 - h;
    for (let d = 0; d !== o; ++d)
      r[d] = a[l + d] * u + a[c + d] * h;
    return r;
  }
}
class up extends Kr {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t) {
    return this.copySampleValue_(t - 1);
  }
}
class Dn {
  constructor(t, e, n, i) {
    if (t === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
    this.name = t, this.times = Ji(e, this.TimeBufferType), this.values = Ji(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  // Serialization (in static context, because of constructor invocation
  // and automatic invocation of .toJSON):
  static toJSON(t) {
    const e = t.constructor;
    let n;
    if (e.toJSON !== this.toJSON)
      n = e.toJSON(t);
    else {
      n = {
        name: t.name,
        times: Ji(t.times, Array),
        values: Ji(t.values, Array)
      };
      const i = t.getInterpolation();
      i !== t.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = t.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(t) {
    return new up(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodLinear(t) {
    return new vh(this.times, this.values, this.getValueSize(), t);
  }
  InterpolantFactoryMethodSmooth(t) {
    return new hp(this.times, this.values, this.getValueSize(), t);
  }
  setInterpolation(t) {
    let e;
    switch (t) {
      case Cr:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case Bo:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case Ja:
        e = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (e === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0)
        if (t !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else
          throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Cr;
      case this.InterpolantFactoryMethodLinear:
        return Bo;
      case this.InterpolantFactoryMethodSmooth:
        return Ja;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  // move all keyframes either forwards or backwards in time
  shift(t) {
    if (t !== 0) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] += t;
    }
    return this;
  }
  // scale all keyframe times by a factor (useful for frame <-> seconds conversions)
  scale(t) {
    if (t !== 1) {
      const e = this.times;
      for (let n = 0, i = e.length; n !== i; ++n)
        e[n] *= t;
    }
    return this;
  }
  // removes keyframes before and after animation without changing any values within the range [startTime, endTime].
  // IMPORTANT: We do not shift around keys to the start of the track time, because for interpolated keys this will change their values
  trim(t, e) {
    const n = this.times, i = n.length;
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < t; )
      ++r;
    for (; a !== -1 && n[a] > e; )
      --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  // ensure we do not get a GarbageInGarbageOut situation, make sure tracks are at least minimally viable
  validate() {
    let t = !0;
    const e = this.getValueSize();
    e - Math.floor(e) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t = !1);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), t = !1);
    let a = null;
    for (let o = 0; o !== r; o++) {
      const c = n[o];
      if (typeof c == "number" && isNaN(c)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c), t = !1;
        break;
      }
      if (a !== null && a > c) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a), t = !1;
        break;
      }
      a = c;
    }
    if (i !== void 0 && cp(i))
      for (let o = 0, c = i.length; o !== c; ++o) {
        const l = i[o];
        if (isNaN(l)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l), t = !1;
          break;
        }
      }
    return t;
  }
  // removes equivalent sequential keys as common in morph target sequences
  // (0,0,0,0,1,1,1,0,0,0,0,0,0,0) --> (0,0,1,1,0,0)
  optimize() {
    const t = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Ja, r = t.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let c = !1;
      const l = t[o], h = t[o + 1];
      if (l !== h && (o !== 1 || l !== t[0]))
        if (i)
          c = !0;
        else {
          const u = o * n, d = u - n, f = u + n;
          for (let m = 0; m !== n; ++m) {
            const _ = e[u + m];
            if (_ !== e[d + m] || _ !== e[f + m]) {
              c = !0;
              break;
            }
          }
        }
      if (c) {
        if (o !== a) {
          t[a] = t[o];
          const u = o * n, d = a * n;
          for (let f = 0; f !== n; ++f)
            e[d + f] = e[u + f];
        }
        ++a;
      }
    }
    if (r > 0) {
      t[a] = t[r];
      for (let o = r * n, c = a * n, l = 0; l !== n; ++l)
        e[c + l] = e[o + l];
      ++a;
    }
    return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * n)) : (this.times = t, this.values = e), this;
  }
  clone() {
    const t = this.times.slice(), e = this.values.slice(), n = this.constructor, i = new n(this.name, t, e);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Dn.prototype.TimeBufferType = Float32Array;
Dn.prototype.ValueBufferType = Float32Array;
Dn.prototype.DefaultInterpolation = Bo;
class cs extends Dn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, n) {
    super(t, e, n);
  }
}
cs.prototype.ValueTypeName = "bool";
cs.prototype.ValueBufferType = Array;
cs.prototype.DefaultInterpolation = Cr;
cs.prototype.InterpolantFactoryMethodLinear = void 0;
cs.prototype.InterpolantFactoryMethodSmooth = void 0;
class yh extends Dn {
}
yh.prototype.ValueTypeName = "color";
class Or extends Dn {
}
Or.prototype.ValueTypeName = "number";
class dp extends Kr {
  constructor(t, e, n, i) {
    super(t, e, n, i);
  }
  interpolate_(t, e, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = (n - e) / (i - e);
    let l = t * o;
    for (let h = l + o; l !== h; l += 4)
      Ze.slerpFlat(r, 0, a, l - o, a, l, c);
    return r;
  }
}
class jr extends Dn {
  InterpolantFactoryMethodLinear(t) {
    return new dp(this.times, this.values, this.getValueSize(), t);
  }
}
jr.prototype.ValueTypeName = "quaternion";
jr.prototype.InterpolantFactoryMethodSmooth = void 0;
class ls extends Dn {
  // No interpolation parameter because only InterpolateDiscrete is valid.
  constructor(t, e, n) {
    super(t, e, n);
  }
}
ls.prototype.ValueTypeName = "string";
ls.prototype.ValueBufferType = Array;
ls.prototype.DefaultInterpolation = Cr;
ls.prototype.InterpolantFactoryMethodLinear = void 0;
ls.prototype.InterpolantFactoryMethodSmooth = void 0;
class Br extends Dn {
}
Br.prototype.ValueTypeName = "vector";
class zr {
  constructor(t = "", e = -1, n = [], i = jo) {
    this.name = t, this.tracks = n, this.duration = e, this.blendMode = i, this.uuid = cn(), this.duration < 0 && this.resetDuration();
  }
  static parse(t) {
    const e = [], n = t.tracks, i = 1 / (t.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a)
      e.push(Yy(n[a]).scale(i));
    const r = new this(t.name, t.duration, e, t.blendMode);
    return r.uuid = t.uuid, r;
  }
  static toJSON(t) {
    const e = [], n = t.tracks, i = {
      name: t.name,
      duration: t.duration,
      tracks: e,
      uuid: t.uuid,
      blendMode: t.blendMode
    };
    for (let r = 0, a = n.length; r !== a; ++r)
      e.push(Dn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(t, e, n, i) {
    const r = e.length, a = [];
    for (let o = 0; o < r; o++) {
      let c = [], l = [];
      c.push(
        (o + r - 1) % r,
        o,
        (o + 1) % r
      ), l.push(0, 1, 0);
      const h = lp(c);
      c = Pl(c, 1, h), l = Pl(l, 1, h), !i && c[0] === 0 && (c.push(r), l.push(l[0])), a.push(
        new Or(
          ".morphTargetInfluences[" + e[o].name + "]",
          c,
          l
        ).scale(1 / n)
      );
    }
    return new this(t, -1, a);
  }
  static findByName(t, e) {
    let n = t;
    if (!Array.isArray(t)) {
      const i = t;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++)
      if (n[i].name === e)
        return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(t, e, n) {
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, c = t.length; o < c; o++) {
      const l = t[o], h = l.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(l);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], e, n));
    return a;
  }
  // parse the animation.hierarchy format
  static parseAnimation(t, e) {
    if (!t)
      return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, f, m, _) {
      if (f.length !== 0) {
        const g = [], p = [];
        xh(f, g, p, m), g.length !== 0 && _.push(new u(d, g, p));
      }
    }, i = [], r = t.name || "default", a = t.fps || 30, o = t.blendMode;
    let c = t.length || -1;
    const l = t.hierarchy || [];
    for (let u = 0; u < l.length; u++) {
      const d = l[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let m;
          for (m = 0; m < d.length; m++)
            if (d[m].morphTargets)
              for (let _ = 0; _ < d[m].morphTargets.length; _++)
                f[d[m].morphTargets[_]] = -1;
          for (const _ in f) {
            const g = [], p = [];
            for (let y = 0; y !== d[m].morphTargets.length; ++y) {
              const x = d[m];
              g.push(x.time), p.push(x.morphTarget === _ ? 1 : 0);
            }
            i.push(new Or(".morphTargetInfluence[" + _ + "]", g, p));
          }
          c = f.length * a;
        } else {
          const f = ".bones[" + e[u].name + "]";
          n(
            Br,
            f + ".position",
            d,
            "pos",
            i
          ), n(
            jr,
            f + ".quaternion",
            d,
            "rot",
            i
          ), n(
            Br,
            f + ".scale",
            d,
            "scl",
            i
          );
        }
    }
    return i.length === 0 ? null : new this(r, c, i, o);
  }
  resetDuration() {
    const t = this.tracks;
    let e = 0;
    for (let n = 0, i = t.length; n !== i; ++n) {
      const r = this.tracks[n];
      e = Math.max(e, r.times[r.times.length - 1]);
    }
    return this.duration = e, this;
  }
  trim() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].trim(0, this.duration);
    return this;
  }
  validate() {
    let t = !0;
    for (let e = 0; e < this.tracks.length; e++)
      t = t && this.tracks[e].validate();
    return t;
  }
  optimize() {
    for (let t = 0; t < this.tracks.length; t++)
      this.tracks[t].optimize();
    return this;
  }
  clone() {
    const t = [];
    for (let e = 0; e < this.tracks.length; e++)
      t.push(this.tracks[e].clone());
    return new this.constructor(this.name, this.duration, t, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function qy(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Or;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Br;
    case "color":
      return yh;
    case "quaternion":
      return jr;
    case "bool":
    case "boolean":
      return cs;
    case "string":
      return ls;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Yy(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const t = qy(s.type);
  if (s.times === void 0) {
    const e = [], n = [];
    xh(s.keys, e, n, "value"), s.times = e, s.values = n;
  }
  return t.parse !== void 0 ? t.parse(s) : new t(s.name, s.times, s.values, s.interpolation);
}
const ci = {
  enabled: !1,
  files: {},
  add: function(s, t) {
    this.enabled !== !1 && (this.files[s] = t);
  },
  get: function(s) {
    if (this.enabled !== !1)
      return this.files[s];
  },
  remove: function(s) {
    delete this.files[s];
  },
  clear: function() {
    this.files = {};
  }
};
class Mh {
  constructor(t, e, n) {
    const i = this;
    let r = !1, a = 0, o = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = n, this.itemStart = function(h) {
      o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), r = !0;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = !1, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const f = l[u], m = l[u + 1];
        if (f.global && (f.lastIndex = 0), f.test(h))
          return m;
      }
      return null;
    };
  }
}
const fp = /* @__PURE__ */ new Mh();
class en {
  constructor(t) {
    this.manager = t !== void 0 ? t : fp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(t, e) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(t, i, e, r);
    });
  }
  parse() {
  }
  setCrossOrigin(t) {
    return this.crossOrigin = t, this;
  }
  setWithCredentials(t) {
    return this.withCredentials = t, this;
  }
  setPath(t) {
    return this.path = t, this;
  }
  setResourcePath(t) {
    return this.resourcePath = t, this;
  }
  setRequestHeader(t) {
    return this.requestHeader = t, this;
  }
}
en.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const si = {};
class $y extends Error {
  constructor(t, e) {
    super(t), this.response = e;
  }
}
class fi extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = ci.get(t);
    if (r !== void 0)
      return this.manager.itemStart(t), setTimeout(() => {
        e && e(r), this.manager.itemEnd(t);
      }, 0), r;
    if (si[t] !== void 0) {
      si[t].push({
        onLoad: e,
        onProgress: n,
        onError: i
      });
      return;
    }
    si[t] = [], si[t].push({
      onLoad: e,
      onProgress: n,
      onError: i
    });
    const a = new Request(t, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), o = this.mimeType, c = this.responseType;
    fetch(a).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const h = si[t], u = l.body.getReader(), d = l.headers.get("X-File-Size") || l.headers.get("Content-Length"), f = d ? parseInt(d) : 0, m = f !== 0;
        let _ = 0;
        const g = new ReadableStream({
          start(p) {
            y();
            function y() {
              u.read().then(({ done: x, value: v }) => {
                if (x)
                  p.close();
                else {
                  _ += v.byteLength;
                  const E = new ProgressEvent("progress", { lengthComputable: m, loaded: _, total: f });
                  for (let b = 0, C = h.length; b < C; b++) {
                    const A = h[b];
                    A.onProgress && A.onProgress(E);
                  }
                  p.enqueue(v), y();
                }
              }, (x) => {
                p.error(x);
              });
            }
          }
        });
        return new Response(g);
      } else
        throw new $y(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return l.json();
        default:
          if (o === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, f = new TextDecoder(d);
            return l.arrayBuffer().then((m) => f.decode(m));
          }
      }
    }).then((l) => {
      ci.add(t, l);
      const h = si[t];
      delete si[t];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onLoad && f.onLoad(l);
      }
    }).catch((l) => {
      const h = si[t];
      if (h === void 0)
        throw this.manager.itemError(t), l;
      delete si[t];
      for (let u = 0, d = h.length; u < d; u++) {
        const f = h[u];
        f.onError && f.onError(l);
      }
      this.manager.itemError(t);
    }).finally(() => {
      this.manager.itemEnd(t);
    }), this.manager.itemStart(t);
  }
  setResponseType(t) {
    return this.responseType = t, this;
  }
  setMimeType(t) {
    return this.mimeType = t, this;
  }
}
class Zy extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, a = new fi(this.manager);
    a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(o) {
      try {
        e(r.parse(JSON.parse(o)));
      } catch (c) {
        i ? i(c) : console.error(c), r.manager.itemError(t);
      }
    }, n, i);
  }
  parse(t) {
    const e = [];
    for (let n = 0; n < t.length; n++) {
      const i = zr.parse(t[n]);
      e.push(i);
    }
    return e;
  }
}
class Jy extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, a = [], o = new lc(), c = new fi(this.manager);
    c.setPath(this.path), c.setResponseType("arraybuffer"), c.setRequestHeader(this.requestHeader), c.setWithCredentials(r.withCredentials);
    let l = 0;
    function h(u) {
      c.load(t[u], function(d) {
        const f = r.parse(d, !0);
        a[u] = {
          width: f.width,
          height: f.height,
          format: f.format,
          mipmaps: f.mipmaps
        }, l += 1, l === 6 && (f.mipmapCount === 1 && (o.minFilter = be), o.image = a, o.format = f.format, o.needsUpdate = !0, e && e(o));
      }, n, i);
    }
    if (Array.isArray(t))
      for (let u = 0, d = t.length; u < d; ++u)
        h(u);
    else
      c.load(t, function(u) {
        const d = r.parse(u, !0);
        if (d.isCubemap) {
          const f = d.mipmaps.length / d.mipmapCount;
          for (let m = 0; m < f; m++) {
            a[m] = { mipmaps: [] };
            for (let _ = 0; _ < d.mipmapCount; _++)
              a[m].mipmaps.push(d.mipmaps[m * d.mipmapCount + _]), a[m].format = d.format, a[m].width = d.width, a[m].height = d.height;
          }
          o.image = a;
        } else
          o.image.width = d.width, o.image.height = d.height, o.mipmaps = d.mipmaps;
        d.mipmapCount === 1 && (o.minFilter = be), o.format = d.format, o.needsUpdate = !0, e && e(o);
      }, n, i);
    return o;
  }
}
class kr extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, a = ci.get(t);
    if (a !== void 0)
      return r.manager.itemStart(t), setTimeout(function() {
        e && e(a), r.manager.itemEnd(t);
      }, 0), a;
    const o = Lr("img");
    function c() {
      h(), ci.add(t, this), e && e(this), r.manager.itemEnd(t);
    }
    function l(u) {
      h(), i && i(u), r.manager.itemError(t), r.manager.itemEnd(t);
    }
    function h() {
      o.removeEventListener("load", c, !1), o.removeEventListener("error", l, !1);
    }
    return o.addEventListener("load", c, !1), o.addEventListener("error", l, !1), t.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o;
  }
}
class Ky extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new Wr();
    r.colorSpace = Se;
    const a = new kr(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function c(l) {
      a.load(t[l], function(h) {
        r.images[l] = h, o++, o === 6 && (r.needsUpdate = !0, e && e(r));
      }, void 0, i);
    }
    for (let l = 0; l < t.length; ++l)
      c(l);
    return r;
  }
}
class jy extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, a = new qn(), o = new fi(this.manager);
    return o.setResponseType("arraybuffer"), o.setRequestHeader(this.requestHeader), o.setPath(this.path), o.setWithCredentials(r.withCredentials), o.load(t, function(c) {
      let l;
      try {
        l = r.parse(c);
      } catch (h) {
        if (i !== void 0)
          i(h);
        else {
          console.error(h);
          return;
        }
      }
      l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width, a.image.height = l.height, a.image.data = l.data), a.wrapS = l.wrapS !== void 0 ? l.wrapS : _n, a.wrapT = l.wrapT !== void 0 ? l.wrapT : _n, a.magFilter = l.magFilter !== void 0 ? l.magFilter : be, a.minFilter = l.minFilter !== void 0 ? l.minFilter : be, a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1, l.colorSpace !== void 0 && (a.colorSpace = l.colorSpace), l.flipY !== void 0 && (a.flipY = l.flipY), l.format !== void 0 && (a.format = l.format), l.type !== void 0 && (a.type = l.type), l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps, a.minFilter = An), l.mipmapCount === 1 && (a.minFilter = be), l.generateMipmaps !== void 0 && (a.generateMipmaps = l.generateMipmaps), a.needsUpdate = !0, e && e(a, l);
    }, n, i), a;
  }
}
class Qy extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = new _e(), a = new kr(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(t, function(o) {
      r.image = o, r.needsUpdate = !0, e !== void 0 && e(r);
    }, n, i), r;
  }
}
class Ci extends Qt {
  constructor(t, e = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new gt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
class Sh extends Ci {
  constructor(t, e, n) {
    super(t, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(Qt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new gt(e);
  }
  copy(t, e) {
    return super.copy(t, e), this.groundColor.copy(t.groundColor), this;
  }
}
const cl = /* @__PURE__ */ new Ft(), ed = /* @__PURE__ */ new R(), nd = /* @__PURE__ */ new R();
class bh {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new nt(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ft(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Xr(), this._frameExtents = new nt(1, 1), this._viewportCount = 1, this._viewports = [
      new Zt(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    ed.setFromMatrixPosition(t.matrixWorld), e.position.copy(ed), nd.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(nd), e.updateMatrixWorld(), cl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(cl), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(cl);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t;
  }
}
class tM extends bh {
  constructor() {
    super(new Re(50, 1, 0.5, 500)), this.isSpotLightShadow = !0, this.focus = 1;
  }
  updateMatrices(t) {
    const e = this.camera, n = Bs * 2 * t.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = t.distance || e.far;
    (n !== e.fov || i !== e.aspect || r !== e.far) && (e.fov = n, e.aspect = i, e.far = r, e.updateProjectionMatrix()), super.updateMatrices(t);
  }
  copy(t) {
    return super.copy(t), this.focus = t.focus, this;
  }
}
class pp extends Ci {
  constructor(t, e, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(t, e), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(Qt.DEFAULT_UP), this.updateMatrix(), this.target = new Qt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new tM();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
const id = /* @__PURE__ */ new Ft(), or = /* @__PURE__ */ new R(), ll = /* @__PURE__ */ new R();
class eM extends bh {
  constructor() {
    super(new Re(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new nt(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new Zt(2, 1, 1, 1),
      // negative X
      new Zt(0, 1, 1, 1),
      // positive Z
      new Zt(3, 1, 1, 1),
      // negative Z
      new Zt(1, 1, 1, 1),
      // positive Y
      new Zt(3, 0, 1, 1),
      // negative Y
      new Zt(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(t, e = 0) {
    const n = this.camera, i = this.matrix, r = t.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), or.setFromMatrixPosition(t.matrixWorld), n.position.copy(or), ll.copy(n.position), ll.add(this._cubeDirections[e]), n.up.copy(this._cubeUps[e]), n.lookAt(ll), n.updateMatrixWorld(), i.makeTranslation(-or.x, -or.y, -or.z), id.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(id);
  }
}
class mp extends Ci {
  constructor(t, e, n = 0, i = 2) {
    super(t, e), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new eM();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return super.copy(t, e), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this;
  }
}
class nM extends bh {
  constructor() {
    super(new ic(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = !0;
  }
}
class Ho extends Ci {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(Qt.DEFAULT_UP), this.updateMatrix(), this.target = new Qt(), this.shadow = new nM();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class gp extends Ci {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class _p extends Ci {
  constructor(t, e, n = 10, i = 10) {
    super(t, e), this.isRectAreaLight = !0, this.type = "RectAreaLight", this.width = n, this.height = i;
  }
  get power() {
    return this.intensity * this.width * this.height * Math.PI;
  }
  set power(t) {
    this.intensity = t / (this.width * this.height * Math.PI);
  }
  copy(t) {
    return super.copy(t), this.width = t.width, this.height = t.height, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.width = this.width, e.object.height = this.height, e;
  }
}
class xp {
  constructor() {
    this.isSphericalHarmonics3 = !0, this.coefficients = [];
    for (let t = 0; t < 9; t++)
      this.coefficients.push(new R());
  }
  set(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].copy(t[e]);
    return this;
  }
  zero() {
    for (let t = 0; t < 9; t++)
      this.coefficients[t].set(0, 0, 0);
    return this;
  }
  // get the radiance in the direction of the normal
  // target is a Vector3
  getAt(t, e) {
    const n = t.x, i = t.y, r = t.z, a = this.coefficients;
    return e.copy(a[0]).multiplyScalar(0.282095), e.addScaledVector(a[1], 0.488603 * i), e.addScaledVector(a[2], 0.488603 * r), e.addScaledVector(a[3], 0.488603 * n), e.addScaledVector(a[4], 1.092548 * (n * i)), e.addScaledVector(a[5], 1.092548 * (i * r)), e.addScaledVector(a[6], 0.315392 * (3 * r * r - 1)), e.addScaledVector(a[7], 1.092548 * (n * r)), e.addScaledVector(a[8], 0.546274 * (n * n - i * i)), e;
  }
  // get the irradiance (radiance convolved with cosine lobe) in the direction of the normal
  // target is a Vector3
  // https://graphics.stanford.edu/papers/envmap/envmap.pdf
  getIrradianceAt(t, e) {
    const n = t.x, i = t.y, r = t.z, a = this.coefficients;
    return e.copy(a[0]).multiplyScalar(0.886227), e.addScaledVector(a[1], 2 * 0.511664 * i), e.addScaledVector(a[2], 2 * 0.511664 * r), e.addScaledVector(a[3], 2 * 0.511664 * n), e.addScaledVector(a[4], 2 * 0.429043 * n * i), e.addScaledVector(a[5], 2 * 0.429043 * i * r), e.addScaledVector(a[6], 0.743125 * r * r - 0.247708), e.addScaledVector(a[7], 2 * 0.429043 * n * r), e.addScaledVector(a[8], 0.429043 * (n * n - i * i)), e;
  }
  add(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].add(t.coefficients[e]);
    return this;
  }
  addScaledSH(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].addScaledVector(t.coefficients[n], e);
    return this;
  }
  scale(t) {
    for (let e = 0; e < 9; e++)
      this.coefficients[e].multiplyScalar(t);
    return this;
  }
  lerp(t, e) {
    for (let n = 0; n < 9; n++)
      this.coefficients[n].lerp(t.coefficients[n], e);
    return this;
  }
  equals(t) {
    for (let e = 0; e < 9; e++)
      if (!this.coefficients[e].equals(t.coefficients[e]))
        return !1;
    return !0;
  }
  copy(t) {
    return this.set(t.coefficients);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  fromArray(t, e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].fromArray(t, e + i * 3);
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.coefficients;
    for (let i = 0; i < 9; i++)
      n[i].toArray(t, e + i * 3);
    return t;
  }
  // evaluate the basis functions
  // shBasis is an Array[ 9 ]
  static getBasisAt(t, e) {
    const n = t.x, i = t.y, r = t.z;
    e[0] = 0.282095, e[1] = 0.488603 * i, e[2] = 0.488603 * r, e[3] = 0.488603 * n, e[4] = 1.092548 * n * i, e[5] = 1.092548 * i * r, e[6] = 0.315392 * (3 * r * r - 1), e[7] = 1.092548 * n * r, e[8] = 0.546274 * (n * n - i * i);
  }
}
class vp extends Ci {
  constructor(t = new xp(), e = 1) {
    super(void 0, e), this.isLightProbe = !0, this.sh = t;
  }
  copy(t) {
    return super.copy(t), this.sh.copy(t.sh), this;
  }
  fromJSON(t) {
    return this.intensity = t.intensity, this.sh.fromArray(t.sh), this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.sh = this.sh.toArray(), e;
  }
}
class Mc extends en {
  constructor(t) {
    super(t), this.textures = {};
  }
  load(t, e, n, i) {
    const r = this, a = new fi(r.manager);
    a.setPath(r.path), a.setRequestHeader(r.requestHeader), a.setWithCredentials(r.withCredentials), a.load(t, function(o) {
      try {
        e(r.parse(JSON.parse(o)));
      } catch (c) {
        i ? i(c) : console.error(c), r.manager.itemError(t);
      }
    }, n, i);
  }
  parse(t) {
    const e = this.textures;
    function n(r) {
      return e[r] === void 0 && console.warn("THREE.MaterialLoader: Undefined texture", r), e[r];
    }
    const i = this.createMaterialFromType(t.type);
    if (t.uuid !== void 0 && (i.uuid = t.uuid), t.name !== void 0 && (i.name = t.name), t.color !== void 0 && i.color !== void 0 && i.color.setHex(t.color), t.roughness !== void 0 && (i.roughness = t.roughness), t.metalness !== void 0 && (i.metalness = t.metalness), t.sheen !== void 0 && (i.sheen = t.sheen), t.sheenColor !== void 0 && (i.sheenColor = new gt().setHex(t.sheenColor)), t.sheenRoughness !== void 0 && (i.sheenRoughness = t.sheenRoughness), t.emissive !== void 0 && i.emissive !== void 0 && i.emissive.setHex(t.emissive), t.specular !== void 0 && i.specular !== void 0 && i.specular.setHex(t.specular), t.specularIntensity !== void 0 && (i.specularIntensity = t.specularIntensity), t.specularColor !== void 0 && i.specularColor !== void 0 && i.specularColor.setHex(t.specularColor), t.shininess !== void 0 && (i.shininess = t.shininess), t.clearcoat !== void 0 && (i.clearcoat = t.clearcoat), t.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = t.clearcoatRoughness), t.dispersion !== void 0 && (i.dispersion = t.dispersion), t.iridescence !== void 0 && (i.iridescence = t.iridescence), t.iridescenceIOR !== void 0 && (i.iridescenceIOR = t.iridescenceIOR), t.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = t.iridescenceThicknessRange), t.transmission !== void 0 && (i.transmission = t.transmission), t.thickness !== void 0 && (i.thickness = t.thickness), t.attenuationDistance !== void 0 && (i.attenuationDistance = t.attenuationDistance), t.attenuationColor !== void 0 && i.attenuationColor !== void 0 && i.attenuationColor.setHex(t.attenuationColor), t.anisotropy !== void 0 && (i.anisotropy = t.anisotropy), t.anisotropyRotation !== void 0 && (i.anisotropyRotation = t.anisotropyRotation), t.fog !== void 0 && (i.fog = t.fog), t.flatShading !== void 0 && (i.flatShading = t.flatShading), t.blending !== void 0 && (i.blending = t.blending), t.combine !== void 0 && (i.combine = t.combine), t.side !== void 0 && (i.side = t.side), t.shadowSide !== void 0 && (i.shadowSide = t.shadowSide), t.opacity !== void 0 && (i.opacity = t.opacity), t.transparent !== void 0 && (i.transparent = t.transparent), t.alphaTest !== void 0 && (i.alphaTest = t.alphaTest), t.alphaHash !== void 0 && (i.alphaHash = t.alphaHash), t.depthFunc !== void 0 && (i.depthFunc = t.depthFunc), t.depthTest !== void 0 && (i.depthTest = t.depthTest), t.depthWrite !== void 0 && (i.depthWrite = t.depthWrite), t.colorWrite !== void 0 && (i.colorWrite = t.colorWrite), t.blendSrc !== void 0 && (i.blendSrc = t.blendSrc), t.blendDst !== void 0 && (i.blendDst = t.blendDst), t.blendEquation !== void 0 && (i.blendEquation = t.blendEquation), t.blendSrcAlpha !== void 0 && (i.blendSrcAlpha = t.blendSrcAlpha), t.blendDstAlpha !== void 0 && (i.blendDstAlpha = t.blendDstAlpha), t.blendEquationAlpha !== void 0 && (i.blendEquationAlpha = t.blendEquationAlpha), t.blendColor !== void 0 && i.blendColor !== void 0 && i.blendColor.setHex(t.blendColor), t.blendAlpha !== void 0 && (i.blendAlpha = t.blendAlpha), t.stencilWriteMask !== void 0 && (i.stencilWriteMask = t.stencilWriteMask), t.stencilFunc !== void 0 && (i.stencilFunc = t.stencilFunc), t.stencilRef !== void 0 && (i.stencilRef = t.stencilRef), t.stencilFuncMask !== void 0 && (i.stencilFuncMask = t.stencilFuncMask), t.stencilFail !== void 0 && (i.stencilFail = t.stencilFail), t.stencilZFail !== void 0 && (i.stencilZFail = t.stencilZFail), t.stencilZPass !== void 0 && (i.stencilZPass = t.stencilZPass), t.stencilWrite !== void 0 && (i.stencilWrite = t.stencilWrite), t.wireframe !== void 0 && (i.wireframe = t.wireframe), t.wireframeLinewidth !== void 0 && (i.wireframeLinewidth = t.wireframeLinewidth), t.wireframeLinecap !== void 0 && (i.wireframeLinecap = t.wireframeLinecap), t.wireframeLinejoin !== void 0 && (i.wireframeLinejoin = t.wireframeLinejoin), t.rotation !== void 0 && (i.rotation = t.rotation), t.linewidth !== void 0 && (i.linewidth = t.linewidth), t.dashSize !== void 0 && (i.dashSize = t.dashSize), t.gapSize !== void 0 && (i.gapSize = t.gapSize), t.scale !== void 0 && (i.scale = t.scale), t.polygonOffset !== void 0 && (i.polygonOffset = t.polygonOffset), t.polygonOffsetFactor !== void 0 && (i.polygonOffsetFactor = t.polygonOffsetFactor), t.polygonOffsetUnits !== void 0 && (i.polygonOffsetUnits = t.polygonOffsetUnits), t.dithering !== void 0 && (i.dithering = t.dithering), t.alphaToCoverage !== void 0 && (i.alphaToCoverage = t.alphaToCoverage), t.premultipliedAlpha !== void 0 && (i.premultipliedAlpha = t.premultipliedAlpha), t.forceSinglePass !== void 0 && (i.forceSinglePass = t.forceSinglePass), t.visible !== void 0 && (i.visible = t.visible), t.toneMapped !== void 0 && (i.toneMapped = t.toneMapped), t.userData !== void 0 && (i.userData = t.userData), t.vertexColors !== void 0 && (typeof t.vertexColors == "number" ? i.vertexColors = t.vertexColors > 0 : i.vertexColors = t.vertexColors), t.uniforms !== void 0)
      for (const r in t.uniforms) {
        const a = t.uniforms[r];
        switch (i.uniforms[r] = {}, a.type) {
          case "t":
            i.uniforms[r].value = n(a.value);
            break;
          case "c":
            i.uniforms[r].value = new gt().setHex(a.value);
            break;
          case "v2":
            i.uniforms[r].value = new nt().fromArray(a.value);
            break;
          case "v3":
            i.uniforms[r].value = new R().fromArray(a.value);
            break;
          case "v4":
            i.uniforms[r].value = new Zt().fromArray(a.value);
            break;
          case "m3":
            i.uniforms[r].value = new Vt().fromArray(a.value);
            break;
          case "m4":
            i.uniforms[r].value = new Ft().fromArray(a.value);
            break;
          default:
            i.uniforms[r].value = a.value;
        }
      }
    if (t.defines !== void 0 && (i.defines = t.defines), t.vertexShader !== void 0 && (i.vertexShader = t.vertexShader), t.fragmentShader !== void 0 && (i.fragmentShader = t.fragmentShader), t.glslVersion !== void 0 && (i.glslVersion = t.glslVersion), t.extensions !== void 0)
      for (const r in t.extensions)
        i.extensions[r] = t.extensions[r];
    if (t.lights !== void 0 && (i.lights = t.lights), t.clipping !== void 0 && (i.clipping = t.clipping), t.size !== void 0 && (i.size = t.size), t.sizeAttenuation !== void 0 && (i.sizeAttenuation = t.sizeAttenuation), t.map !== void 0 && (i.map = n(t.map)), t.matcap !== void 0 && (i.matcap = n(t.matcap)), t.alphaMap !== void 0 && (i.alphaMap = n(t.alphaMap)), t.bumpMap !== void 0 && (i.bumpMap = n(t.bumpMap)), t.bumpScale !== void 0 && (i.bumpScale = t.bumpScale), t.normalMap !== void 0 && (i.normalMap = n(t.normalMap)), t.normalMapType !== void 0 && (i.normalMapType = t.normalMapType), t.normalScale !== void 0) {
      let r = t.normalScale;
      Array.isArray(r) === !1 && (r = [r, r]), i.normalScale = new nt().fromArray(r);
    }
    return t.displacementMap !== void 0 && (i.displacementMap = n(t.displacementMap)), t.displacementScale !== void 0 && (i.displacementScale = t.displacementScale), t.displacementBias !== void 0 && (i.displacementBias = t.displacementBias), t.roughnessMap !== void 0 && (i.roughnessMap = n(t.roughnessMap)), t.metalnessMap !== void 0 && (i.metalnessMap = n(t.metalnessMap)), t.emissiveMap !== void 0 && (i.emissiveMap = n(t.emissiveMap)), t.emissiveIntensity !== void 0 && (i.emissiveIntensity = t.emissiveIntensity), t.specularMap !== void 0 && (i.specularMap = n(t.specularMap)), t.specularIntensityMap !== void 0 && (i.specularIntensityMap = n(t.specularIntensityMap)), t.specularColorMap !== void 0 && (i.specularColorMap = n(t.specularColorMap)), t.envMap !== void 0 && (i.envMap = n(t.envMap)), t.envMapRotation !== void 0 && i.envMapRotation.fromArray(t.envMapRotation), t.envMapIntensity !== void 0 && (i.envMapIntensity = t.envMapIntensity), t.reflectivity !== void 0 && (i.reflectivity = t.reflectivity), t.refractionRatio !== void 0 && (i.refractionRatio = t.refractionRatio), t.lightMap !== void 0 && (i.lightMap = n(t.lightMap)), t.lightMapIntensity !== void 0 && (i.lightMapIntensity = t.lightMapIntensity), t.aoMap !== void 0 && (i.aoMap = n(t.aoMap)), t.aoMapIntensity !== void 0 && (i.aoMapIntensity = t.aoMapIntensity), t.gradientMap !== void 0 && (i.gradientMap = n(t.gradientMap)), t.clearcoatMap !== void 0 && (i.clearcoatMap = n(t.clearcoatMap)), t.clearcoatRoughnessMap !== void 0 && (i.clearcoatRoughnessMap = n(t.clearcoatRoughnessMap)), t.clearcoatNormalMap !== void 0 && (i.clearcoatNormalMap = n(t.clearcoatNormalMap)), t.clearcoatNormalScale !== void 0 && (i.clearcoatNormalScale = new nt().fromArray(t.clearcoatNormalScale)), t.iridescenceMap !== void 0 && (i.iridescenceMap = n(t.iridescenceMap)), t.iridescenceThicknessMap !== void 0 && (i.iridescenceThicknessMap = n(t.iridescenceThicknessMap)), t.transmissionMap !== void 0 && (i.transmissionMap = n(t.transmissionMap)), t.thicknessMap !== void 0 && (i.thicknessMap = n(t.thicknessMap)), t.anisotropyMap !== void 0 && (i.anisotropyMap = n(t.anisotropyMap)), t.sheenColorMap !== void 0 && (i.sheenColorMap = n(t.sheenColorMap)), t.sheenRoughnessMap !== void 0 && (i.sheenRoughnessMap = n(t.sheenRoughnessMap)), i;
  }
  setTextures(t) {
    return this.textures = t, this;
  }
  createMaterialFromType(t) {
    return Mc.createMaterialFromType(t);
  }
  static createMaterialFromType(t) {
    const e = {
      ShadowMaterial: tp,
      SpriteMaterial: oh,
      RawShaderMaterial: ep,
      ShaderMaterial: vn,
      PointsMaterial: lh,
      MeshPhysicalMaterial: np,
      MeshStandardMaterial: _h,
      MeshPhongMaterial: ip,
      MeshToonMaterial: sp,
      MeshNormalMaterial: rp,
      MeshLambertMaterial: We,
      MeshDepthMaterial: sh,
      MeshDistanceMaterial: rh,
      MeshBasicMaterial: xn,
      MeshMatcapMaterial: ap,
      LineDashedMaterial: op,
      LineBasicMaterial: Ve,
      Material: ke
    };
    return new e[t]();
  }
}
class Il {
  static decodeText(t) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u")
      return new TextDecoder().decode(t);
    let e = "";
    for (let n = 0, i = t.length; n < i; n++)
      e += String.fromCharCode(t[n]);
    try {
      return decodeURIComponent(escape(e));
    } catch {
      return e;
    }
  }
  static extractUrlBase(t) {
    const e = t.lastIndexOf("/");
    return e === -1 ? "./" : t.slice(0, e + 1);
  }
  static resolveURL(t, e) {
    return typeof t != "string" || t === "" ? "" : (/^https?:\/\//i.test(e) && /^\//.test(t) && (e = e.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(t) || /^data:.*,.*$/i.test(t) || /^blob:.*$/i.test(t) ? t : e + t);
  }
}
class wh extends Yt {
  constructor() {
    super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(t) {
    return super.copy(t), this.instanceCount = t.instanceCount, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.instanceCount = this.instanceCount, t.isInstancedBufferGeometry = !0, t;
  }
}
class yp extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, a = new fi(r.manager);
    a.setPath(r.path), a.setRequestHeader(r.requestHeader), a.setWithCredentials(r.withCredentials), a.load(t, function(o) {
      try {
        e(r.parse(JSON.parse(o)));
      } catch (c) {
        i ? i(c) : console.error(c), r.manager.itemError(t);
      }
    }, n, i);
  }
  parse(t) {
    const e = {}, n = {};
    function i(f, m) {
      if (e[m] !== void 0) return e[m];
      const g = f.interleavedBuffers[m], p = r(f, g.buffer), y = Is(g.type, p), x = new oc(y, g.stride);
      return x.uuid = g.uuid, e[m] = x, x;
    }
    function r(f, m) {
      if (n[m] !== void 0) return n[m];
      const g = f.arrayBuffers[m], p = new Uint32Array(g).buffer;
      return n[m] = p, p;
    }
    const a = t.isInstancedBufferGeometry ? new wh() : new Yt(), o = t.data.index;
    if (o !== void 0) {
      const f = Is(o.type, o.array);
      a.setIndex(new ae(f, 1));
    }
    const c = t.data.attributes;
    for (const f in c) {
      const m = c[f];
      let _;
      if (m.isInterleavedBufferAttribute) {
        const g = i(t.data, m.data);
        _ = new on(g, m.itemSize, m.offset, m.normalized);
      } else {
        const g = Is(m.type, m.array), p = m.isInstancedBufferAttribute ? ks : ae;
        _ = new p(g, m.itemSize, m.normalized);
      }
      m.name !== void 0 && (_.name = m.name), m.usage !== void 0 && _.setUsage(m.usage), a.setAttribute(f, _);
    }
    const l = t.data.morphAttributes;
    if (l)
      for (const f in l) {
        const m = l[f], _ = [];
        for (let g = 0, p = m.length; g < p; g++) {
          const y = m[g];
          let x;
          if (y.isInterleavedBufferAttribute) {
            const v = i(t.data, y.data);
            x = new on(v, y.itemSize, y.offset, y.normalized);
          } else {
            const v = Is(y.type, y.array);
            x = new ae(v, y.itemSize, y.normalized);
          }
          y.name !== void 0 && (x.name = y.name), _.push(x);
        }
        a.morphAttributes[f] = _;
      }
    t.data.morphTargetsRelative && (a.morphTargetsRelative = !0);
    const u = t.data.groups || t.data.drawcalls || t.data.offsets;
    if (u !== void 0)
      for (let f = 0, m = u.length; f !== m; ++f) {
        const _ = u[f];
        a.addGroup(_.start, _.count, _.materialIndex);
      }
    const d = t.data.boundingSphere;
    if (d !== void 0) {
      const f = new R();
      d.center !== void 0 && f.fromArray(d.center), a.boundingSphere = new Pe(f, d.radius);
    }
    return t.name && (a.name = t.name), t.userData && (a.userData = t.userData), a;
  }
}
class iM extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, a = this.path === "" ? Il.extractUrlBase(t) : this.path;
    this.resourcePath = this.resourcePath || a;
    const o = new fi(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(t, function(c) {
      let l = null;
      try {
        l = JSON.parse(c);
      } catch (u) {
        i !== void 0 && i(u), console.error("THREE:ObjectLoader: Can't parse " + t + ".", u.message);
        return;
      }
      const h = l.metadata;
      if (h === void 0 || h.type === void 0 || h.type.toLowerCase() === "geometry") {
        i !== void 0 && i(new Error("THREE.ObjectLoader: Can't load " + t)), console.error("THREE.ObjectLoader: Can't load " + t);
        return;
      }
      r.parse(l, e);
    }, n, i);
  }
  async loadAsync(t, e) {
    const n = this, i = this.path === "" ? Il.extractUrlBase(t) : this.path;
    this.resourcePath = this.resourcePath || i;
    const r = new fi(this.manager);
    r.setPath(this.path), r.setRequestHeader(this.requestHeader), r.setWithCredentials(this.withCredentials);
    const a = await r.loadAsync(t, e), o = JSON.parse(a), c = o.metadata;
    if (c === void 0 || c.type === void 0 || c.type.toLowerCase() === "geometry")
      throw new Error("THREE.ObjectLoader: Can't load " + t);
    return await n.parseAsync(o);
  }
  parse(t, e) {
    const n = this.parseAnimations(t.animations), i = this.parseShapes(t.shapes), r = this.parseGeometries(t.geometries, i), a = this.parseImages(t.images, function() {
      e !== void 0 && e(l);
    }), o = this.parseTextures(t.textures, a), c = this.parseMaterials(t.materials, o), l = this.parseObject(t.object, r, c, o, n), h = this.parseSkeletons(t.skeletons, l);
    if (this.bindSkeletons(l, h), this.bindLightTargets(l), e !== void 0) {
      let u = !1;
      for (const d in a)
        if (a[d].data instanceof HTMLImageElement) {
          u = !0;
          break;
        }
      u === !1 && e(l);
    }
    return l;
  }
  async parseAsync(t) {
    const e = this.parseAnimations(t.animations), n = this.parseShapes(t.shapes), i = this.parseGeometries(t.geometries, n), r = await this.parseImagesAsync(t.images), a = this.parseTextures(t.textures, r), o = this.parseMaterials(t.materials, a), c = this.parseObject(t.object, i, o, a, e), l = this.parseSkeletons(t.skeletons, c);
    return this.bindSkeletons(c, l), this.bindLightTargets(c), c;
  }
  parseShapes(t) {
    const e = {};
    if (t !== void 0)
      for (let n = 0, i = t.length; n < i; n++) {
        const r = new Yn().fromJSON(t[n]);
        e[r.uuid] = r;
      }
    return e;
  }
  parseSkeletons(t, e) {
    const n = {}, i = {};
    if (e.traverse(function(r) {
      r.isBone && (i[r.uuid] = r);
    }), t !== void 0)
      for (let r = 0, a = t.length; r < a; r++) {
        const o = new cc().fromJSON(t[r], i);
        n[o.uuid] = o;
      }
    return n;
  }
  parseGeometries(t, e) {
    const n = {};
    if (t !== void 0) {
      const i = new yp();
      for (let r = 0, a = t.length; r < a; r++) {
        let o;
        const c = t[r];
        switch (c.type) {
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            o = i.parse(c);
            break;
          default:
            c.type in td ? o = td[c.type].fromJSON(c, e) : console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`);
        }
        o.uuid = c.uuid, c.name !== void 0 && (o.name = c.name), c.userData !== void 0 && (o.userData = c.userData), n[c.uuid] = o;
      }
    }
    return n;
  }
  parseMaterials(t, e) {
    const n = {}, i = {};
    if (t !== void 0) {
      const r = new Mc();
      r.setTextures(e);
      for (let a = 0, o = t.length; a < o; a++) {
        const c = t[a];
        n[c.uuid] === void 0 && (n[c.uuid] = r.parse(c)), i[c.uuid] = n[c.uuid];
      }
    }
    return i;
  }
  parseAnimations(t) {
    const e = {};
    if (t !== void 0)
      for (let n = 0; n < t.length; n++) {
        const i = t[n], r = zr.parse(i);
        e[r.uuid] = r;
      }
    return e;
  }
  parseImages(t, e) {
    const n = this, i = {};
    let r;
    function a(c) {
      return n.manager.itemStart(c), r.load(c, function() {
        n.manager.itemEnd(c);
      }, void 0, function() {
        n.manager.itemError(c), n.manager.itemEnd(c);
      });
    }
    function o(c) {
      if (typeof c == "string") {
        const l = c, h = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(l) ? l : n.resourcePath + l;
        return a(h);
      } else
        return c.data ? {
          data: Is(c.type, c.data),
          width: c.width,
          height: c.height
        } : null;
    }
    if (t !== void 0 && t.length > 0) {
      const c = new Mh(e);
      r = new kr(c), r.setCrossOrigin(this.crossOrigin);
      for (let l = 0, h = t.length; l < h; l++) {
        const u = t[l], d = u.url;
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m], p = o(g);
            p !== null && (p instanceof HTMLImageElement ? f.push(p) : f.push(new qn(p.data, p.width, p.height)));
          }
          i[u.uuid] = new Zi(f);
        } else {
          const f = o(u.url);
          i[u.uuid] = new Zi(f);
        }
      }
    }
    return i;
  }
  async parseImagesAsync(t) {
    const e = this, n = {};
    let i;
    async function r(a) {
      if (typeof a == "string") {
        const o = a, c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(o) ? o : e.resourcePath + o;
        return await i.loadAsync(c);
      } else
        return a.data ? {
          data: Is(a.type, a.data),
          width: a.width,
          height: a.height
        } : null;
    }
    if (t !== void 0 && t.length > 0) {
      i = new kr(this.manager), i.setCrossOrigin(this.crossOrigin);
      for (let a = 0, o = t.length; a < o; a++) {
        const c = t[a], l = c.url;
        if (Array.isArray(l)) {
          const h = [];
          for (let u = 0, d = l.length; u < d; u++) {
            const f = l[u], m = await r(f);
            m !== null && (m instanceof HTMLImageElement ? h.push(m) : h.push(new qn(m.data, m.width, m.height)));
          }
          n[c.uuid] = new Zi(h);
        } else {
          const h = await r(c.url);
          n[c.uuid] = new Zi(h);
        }
      }
    }
    return n;
  }
  parseTextures(t, e) {
    function n(r, a) {
      return typeof r == "number" ? r : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", r), a[r]);
    }
    const i = {};
    if (t !== void 0)
      for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        o.image === void 0 && console.warn('THREE.ObjectLoader: No "image" specified for', o.uuid), e[o.image] === void 0 && console.warn("THREE.ObjectLoader: Undefined image", o.image);
        const c = e[o.image], l = c.data;
        let h;
        Array.isArray(l) ? (h = new Wr(), l.length === 6 && (h.needsUpdate = !0)) : (l && l.data ? h = new qn() : h = new _e(), l && (h.needsUpdate = !0)), h.source = c, h.uuid = o.uuid, o.name !== void 0 && (h.name = o.name), o.mapping !== void 0 && (h.mapping = n(o.mapping, sM)), o.channel !== void 0 && (h.channel = o.channel), o.offset !== void 0 && h.offset.fromArray(o.offset), o.repeat !== void 0 && h.repeat.fromArray(o.repeat), o.center !== void 0 && h.center.fromArray(o.center), o.rotation !== void 0 && (h.rotation = o.rotation), o.wrap !== void 0 && (h.wrapS = n(o.wrap[0], sd), h.wrapT = n(o.wrap[1], sd)), o.format !== void 0 && (h.format = o.format), o.internalFormat !== void 0 && (h.internalFormat = o.internalFormat), o.type !== void 0 && (h.type = o.type), o.colorSpace !== void 0 && (h.colorSpace = o.colorSpace), o.minFilter !== void 0 && (h.minFilter = n(o.minFilter, rd)), o.magFilter !== void 0 && (h.magFilter = n(o.magFilter, rd)), o.anisotropy !== void 0 && (h.anisotropy = o.anisotropy), o.flipY !== void 0 && (h.flipY = o.flipY), o.generateMipmaps !== void 0 && (h.generateMipmaps = o.generateMipmaps), o.premultiplyAlpha !== void 0 && (h.premultiplyAlpha = o.premultiplyAlpha), o.unpackAlignment !== void 0 && (h.unpackAlignment = o.unpackAlignment), o.compareFunction !== void 0 && (h.compareFunction = o.compareFunction), o.userData !== void 0 && (h.userData = o.userData), i[o.uuid] = h;
      }
    return i;
  }
  parseObject(t, e, n, i, r) {
    let a;
    function o(d) {
      return e[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined geometry", d), e[d];
    }
    function c(d) {
      if (d !== void 0) {
        if (Array.isArray(d)) {
          const f = [];
          for (let m = 0, _ = d.length; m < _; m++) {
            const g = d[m];
            n[g] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", g), f.push(n[g]);
          }
          return f;
        }
        return n[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined material", d), n[d];
      }
    }
    function l(d) {
      return i[d] === void 0 && console.warn("THREE.ObjectLoader: Undefined texture", d), i[d];
    }
    let h, u;
    switch (t.type) {
      case "Scene":
        a = new ah(), t.background !== void 0 && (Number.isInteger(t.background) ? a.background = new gt(t.background) : a.background = l(t.background)), t.environment !== void 0 && (a.environment = l(t.environment)), t.fog !== void 0 && (t.fog.type === "Fog" ? a.fog = new ac(t.fog.color, t.fog.near, t.fog.far) : t.fog.type === "FogExp2" && (a.fog = new rc(t.fog.color, t.fog.density)), t.fog.name !== "" && (a.fog.name = t.fog.name)), t.backgroundBlurriness !== void 0 && (a.backgroundBlurriness = t.backgroundBlurriness), t.backgroundIntensity !== void 0 && (a.backgroundIntensity = t.backgroundIntensity), t.backgroundRotation !== void 0 && a.backgroundRotation.fromArray(t.backgroundRotation), t.environmentIntensity !== void 0 && (a.environmentIntensity = t.environmentIntensity), t.environmentRotation !== void 0 && a.environmentRotation.fromArray(t.environmentRotation);
        break;
      case "PerspectiveCamera":
        a = new Re(t.fov, t.aspect, t.near, t.far), t.focus !== void 0 && (a.focus = t.focus), t.zoom !== void 0 && (a.zoom = t.zoom), t.filmGauge !== void 0 && (a.filmGauge = t.filmGauge), t.filmOffset !== void 0 && (a.filmOffset = t.filmOffset), t.view !== void 0 && (a.view = Object.assign({}, t.view));
        break;
      case "OrthographicCamera":
        a = new ic(t.left, t.right, t.top, t.bottom, t.near, t.far), t.zoom !== void 0 && (a.zoom = t.zoom), t.view !== void 0 && (a.view = Object.assign({}, t.view));
        break;
      case "AmbientLight":
        a = new gp(t.color, t.intensity);
        break;
      case "DirectionalLight":
        a = new Ho(t.color, t.intensity), a.target = t.target || "";
        break;
      case "PointLight":
        a = new mp(t.color, t.intensity, t.distance, t.decay);
        break;
      case "RectAreaLight":
        a = new _p(t.color, t.intensity, t.width, t.height);
        break;
      case "SpotLight":
        a = new pp(t.color, t.intensity, t.distance, t.angle, t.penumbra, t.decay), a.target = t.target || "";
        break;
      case "HemisphereLight":
        a = new Sh(t.color, t.groundColor, t.intensity);
        break;
      case "LightProbe":
        a = new vp().fromJSON(t);
        break;
      case "SkinnedMesh":
        h = o(t.geometry), u = c(t.material), a = new Hf(h, u), t.bindMode !== void 0 && (a.bindMode = t.bindMode), t.bindMatrix !== void 0 && a.bindMatrix.fromArray(t.bindMatrix), t.skeleton !== void 0 && (a.skeleton = t.skeleton);
        break;
      case "Mesh":
        h = o(t.geometry), u = c(t.material), a = new qt(h, u);
        break;
      case "InstancedMesh":
        h = o(t.geometry), u = c(t.material);
        const d = t.count, f = t.instanceMatrix, m = t.instanceColor;
        a = new Gf(h, u, d), a.instanceMatrix = new ks(new Float32Array(f.array), 16), m !== void 0 && (a.instanceColor = new ks(new Float32Array(m.array), m.itemSize));
        break;
      case "BatchedMesh":
        h = o(t.geometry), u = c(t.material), a = new Wf(t.maxInstanceCount, t.maxVertexCount, t.maxIndexCount, u), a.geometry = h, a.perObjectFrustumCulled = t.perObjectFrustumCulled, a.sortObjects = t.sortObjects, a._drawRanges = t.drawRanges, a._reservedRanges = t.reservedRanges, a._visibility = t.visibility, a._active = t.active, a._bounds = t.bounds.map((_) => {
          const g = new we();
          g.min.fromArray(_.boxMin), g.max.fromArray(_.boxMax);
          const p = new Pe();
          return p.radius = _.sphereRadius, p.center.fromArray(_.sphereCenter), {
            boxInitialized: _.boxInitialized,
            box: g,
            sphereInitialized: _.sphereInitialized,
            sphere: p
          };
        }), a._maxInstanceCount = t.maxInstanceCount, a._maxVertexCount = t.maxVertexCount, a._maxIndexCount = t.maxIndexCount, a._geometryInitialized = t.geometryInitialized, a._geometryCount = t.geometryCount, a._matricesTexture = l(t.matricesTexture.uuid), t.colorsTexture !== void 0 && (a._colorsTexture = l(t.colorsTexture.uuid));
        break;
      case "LOD":
        a = new Vf();
        break;
      case "Line":
        a = new Ei(o(t.geometry), c(t.material));
        break;
      case "LineLoop":
        a = new Xf(o(t.geometry), c(t.material));
        break;
      case "LineSegments":
        a = new In(o(t.geometry), c(t.material));
        break;
      case "PointCloud":
      case "Points":
        a = new qf(o(t.geometry), c(t.material));
        break;
      case "Sprite":
        a = new kf(c(t.material));
        break;
      case "Group":
        a = new an();
        break;
      case "Bone":
        a = new ch();
        break;
      default:
        a = new Qt();
    }
    if (a.uuid = t.uuid, t.name !== void 0 && (a.name = t.name), t.matrix !== void 0 ? (a.matrix.fromArray(t.matrix), t.matrixAutoUpdate !== void 0 && (a.matrixAutoUpdate = t.matrixAutoUpdate), a.matrixAutoUpdate && a.matrix.decompose(a.position, a.quaternion, a.scale)) : (t.position !== void 0 && a.position.fromArray(t.position), t.rotation !== void 0 && a.rotation.fromArray(t.rotation), t.quaternion !== void 0 && a.quaternion.fromArray(t.quaternion), t.scale !== void 0 && a.scale.fromArray(t.scale)), t.up !== void 0 && a.up.fromArray(t.up), t.castShadow !== void 0 && (a.castShadow = t.castShadow), t.receiveShadow !== void 0 && (a.receiveShadow = t.receiveShadow), t.shadow && (t.shadow.intensity !== void 0 && (a.shadow.intensity = t.shadow.intensity), t.shadow.bias !== void 0 && (a.shadow.bias = t.shadow.bias), t.shadow.normalBias !== void 0 && (a.shadow.normalBias = t.shadow.normalBias), t.shadow.radius !== void 0 && (a.shadow.radius = t.shadow.radius), t.shadow.mapSize !== void 0 && a.shadow.mapSize.fromArray(t.shadow.mapSize), t.shadow.camera !== void 0 && (a.shadow.camera = this.parseObject(t.shadow.camera))), t.visible !== void 0 && (a.visible = t.visible), t.frustumCulled !== void 0 && (a.frustumCulled = t.frustumCulled), t.renderOrder !== void 0 && (a.renderOrder = t.renderOrder), t.userData !== void 0 && (a.userData = t.userData), t.layers !== void 0 && (a.layers.mask = t.layers), t.children !== void 0) {
      const d = t.children;
      for (let f = 0; f < d.length; f++)
        a.add(this.parseObject(d[f], e, n, i, r));
    }
    if (t.animations !== void 0) {
      const d = t.animations;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        a.animations.push(r[m]);
      }
    }
    if (t.type === "LOD") {
      t.autoUpdate !== void 0 && (a.autoUpdate = t.autoUpdate);
      const d = t.levels;
      for (let f = 0; f < d.length; f++) {
        const m = d[f], _ = a.getObjectByProperty("uuid", m.object);
        _ !== void 0 && a.addLevel(_, m.distance, m.hysteresis);
      }
    }
    return a;
  }
  bindSkeletons(t, e) {
    Object.keys(e).length !== 0 && t.traverse(function(n) {
      if (n.isSkinnedMesh === !0 && n.skeleton !== void 0) {
        const i = e[n.skeleton];
        i === void 0 ? console.warn("THREE.ObjectLoader: No skeleton found with UUID:", n.skeleton) : n.bind(i, n.bindMatrix);
      }
    });
  }
  bindLightTargets(t) {
    t.traverse(function(e) {
      if (e.isDirectionalLight || e.isSpotLight) {
        const n = e.target, i = t.getObjectByProperty("uuid", n);
        i !== void 0 ? e.target = i : e.target = new Qt();
      }
    });
  }
}
const sM = {
  UVMapping: Xo,
  CubeReflectionMapping: ui,
  CubeRefractionMapping: wi,
  EquirectangularReflectionMapping: Er,
  EquirectangularRefractionMapping: Tr,
  CubeUVReflectionMapping: Hs
}, sd = {
  RepeatWrapping: ns,
  ClampToEdgeWrapping: _n,
  MirroredRepeatWrapping: Ar
}, rd = {
  NearestFilter: Ne,
  NearestMipmapNearestFilter: zl,
  NearestMipmapLinearFilter: Ps,
  LinearFilter: be,
  LinearMipmapNearestFilter: gr,
  LinearMipmapLinearFilter: An
};
class rM extends en {
  constructor(t) {
    super(t), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(t) {
    return this.options = t, this;
  }
  load(t, e, n, i) {
    t === void 0 && (t = ""), this.path !== void 0 && (t = this.path + t), t = this.manager.resolveURL(t);
    const r = this, a = ci.get(t);
    if (a !== void 0) {
      if (r.manager.itemStart(t), a.then) {
        a.then((l) => {
          e && e(l), r.manager.itemEnd(t);
        }).catch((l) => {
          i && i(l);
        });
        return;
      }
      return setTimeout(function() {
        e && e(a), r.manager.itemEnd(t);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const c = fetch(t, o).then(function(l) {
      return l.blob();
    }).then(function(l) {
      return createImageBitmap(l, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(l) {
      return ci.add(t, l), e && e(l), r.manager.itemEnd(t), l;
    }).catch(function(l) {
      i && i(l), ci.remove(t), r.manager.itemError(t), r.manager.itemEnd(t);
    });
    ci.add(t, c), r.manager.itemStart(t);
  }
}
let za;
class Eh {
  static getContext() {
    return za === void 0 && (za = new (window.AudioContext || window.webkitAudioContext)()), za;
  }
  static setContext(t) {
    za = t;
  }
}
class aM extends en {
  constructor(t) {
    super(t);
  }
  load(t, e, n, i) {
    const r = this, a = new fi(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(t, function(c) {
      try {
        const l = c.slice(0);
        Eh.getContext().decodeAudioData(l, function(u) {
          e(u);
        }).catch(o);
      } catch (l) {
        o(l);
      }
    }, n, i);
    function o(c) {
      i ? i(c) : console.error(c), r.manager.itemError(t);
    }
  }
}
const ad = /* @__PURE__ */ new Ft(), od = /* @__PURE__ */ new Ft(), Bi = /* @__PURE__ */ new Ft();
class oM {
  constructor() {
    this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new Re(), this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Re(), this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1, this._cache = {
      focus: null,
      fov: null,
      aspect: null,
      near: null,
      far: null,
      zoom: null,
      eyeSep: null
    };
  }
  update(t) {
    const e = this._cache;
    if (e.focus !== t.focus || e.fov !== t.fov || e.aspect !== t.aspect * this.aspect || e.near !== t.near || e.far !== t.far || e.zoom !== t.zoom || e.eyeSep !== this.eyeSep) {
      e.focus = t.focus, e.fov = t.fov, e.aspect = t.aspect * this.aspect, e.near = t.near, e.far = t.far, e.zoom = t.zoom, e.eyeSep = this.eyeSep, Bi.copy(t.projectionMatrix);
      const i = e.eyeSep / 2, r = i * e.near / e.focus, a = e.near * Math.tan(Qi * e.fov * 0.5) / e.zoom;
      let o, c;
      od.elements[12] = -i, ad.elements[12] = i, o = -a * e.aspect + r, c = a * e.aspect + r, Bi.elements[0] = 2 * e.near / (c - o), Bi.elements[8] = (c + o) / (c - o), this.cameraL.projectionMatrix.copy(Bi), o = -a * e.aspect - r, c = a * e.aspect - r, Bi.elements[0] = 2 * e.near / (c - o), Bi.elements[8] = (c + o) / (c - o), this.cameraR.projectionMatrix.copy(Bi);
    }
    this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(od), this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(ad);
  }
}
class Mp {
  constructor(t = !0) {
    this.autoStart = t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = cd(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let t = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const e = cd();
      t = (e - this.oldTime) / 1e3, this.oldTime = e, this.elapsedTime += t;
    }
    return t;
  }
}
function cd() {
  return performance.now();
}
const zi = /* @__PURE__ */ new R(), ld = /* @__PURE__ */ new Ze(), cM = /* @__PURE__ */ new R(), ki = /* @__PURE__ */ new R();
class lM extends Qt {
  constructor() {
    super(), this.type = "AudioListener", this.context = Eh.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Mp();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(t) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t);
    const e = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(zi, ld, cM), ki.set(0, 0, -1).applyQuaternion(ld), e.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      e.positionX.linearRampToValueAtTime(zi.x, i), e.positionY.linearRampToValueAtTime(zi.y, i), e.positionZ.linearRampToValueAtTime(zi.z, i), e.forwardX.linearRampToValueAtTime(ki.x, i), e.forwardY.linearRampToValueAtTime(ki.y, i), e.forwardZ.linearRampToValueAtTime(ki.z, i), e.upX.linearRampToValueAtTime(n.x, i), e.upY.linearRampToValueAtTime(n.y, i), e.upZ.linearRampToValueAtTime(n.z, i);
    } else
      e.setPosition(zi.x, zi.y, zi.z), e.setOrientation(ki.x, ki.y, ki.z, n.x, n.y, n.z);
  }
}
class Sp extends Qt {
  constructor(t) {
    super(), this.type = "Audio", this.listener = t, this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.detune = 0, this.loop = !1, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = !1, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this;
  }
  setMediaElementSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(t), this.connect(), this;
  }
  setMediaStreamSource(t) {
    return this.hasPlaybackControl = !1, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(t), this.connect(), this;
  }
  setBuffer(t) {
    return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(t = 0) {
    if (this.isPlaying === !0) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + t;
    const e = this.context.createBufferSource();
    return e.buffer = this.buffer, e.loop = this.loop, e.loopStart = this.loopStart, e.loopEnd = this.loopEnd, e.onended = this.onEnded.bind(this), e.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = !0, this.source = e, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === !0 && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === !0 && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = !1), this;
  }
  stop(t = 0) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + t), this.source.onended = null), this.isPlaying = !1, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let t = 1, e = this.filters.length; t < e; t++)
        this.filters[t - 1].connect(this.filters[t]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else
      this.source.connect(this.getOutput());
    return this._connected = !0, this;
  }
  disconnect() {
    if (this._connected !== !1) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let t = 1, e = this.filters.length; t < e; t++)
          this.filters[t - 1].disconnect(this.filters[t]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else
        this.source.disconnect(this.getOutput());
      return this._connected = !1, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(t) {
    return t || (t = []), this._connected === !0 ? (this.disconnect(), this.filters = t.slice(), this.connect()) : this.filters = t.slice(), this;
  }
  setDetune(t) {
    return this.detune = t, this.isPlaying === !0 && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(t) {
    return this.setFilters(t ? [t] : []);
  }
  setPlaybackRate(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = t, this.isPlaying === !0 && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = !1;
  }
  getLoop() {
    return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop;
  }
  setLoop(t) {
    if (this.hasPlaybackControl === !1) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = t, this.isPlaying === !0 && (this.source.loop = this.loop), this;
  }
  setLoopStart(t) {
    return this.loopStart = t, this;
  }
  setLoopEnd(t) {
    return this.loopEnd = t, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(t) {
    return this.gain.gain.setTargetAtTime(t, this.context.currentTime, 0.01), this;
  }
}
const Vi = /* @__PURE__ */ new R(), hd = /* @__PURE__ */ new Ze(), hM = /* @__PURE__ */ new R(), Hi = /* @__PURE__ */ new R();
class uM extends Sp {
  constructor(t) {
    super(t), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(t) {
    return this.panner.refDistance = t, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(t) {
    return this.panner.rolloffFactor = t, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(t) {
    return this.panner.distanceModel = t, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(t) {
    return this.panner.maxDistance = t, this;
  }
  setDirectionalCone(t, e, n) {
    return this.panner.coneInnerAngle = t, this.panner.coneOuterAngle = e, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(t) {
    if (super.updateMatrixWorld(t), this.hasPlaybackControl === !0 && this.isPlaying === !1) return;
    this.matrixWorld.decompose(Vi, hd, hM), Hi.set(0, 0, 1).applyQuaternion(hd);
    const e = this.panner;
    if (e.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      e.positionX.linearRampToValueAtTime(Vi.x, n), e.positionY.linearRampToValueAtTime(Vi.y, n), e.positionZ.linearRampToValueAtTime(Vi.z, n), e.orientationX.linearRampToValueAtTime(Hi.x, n), e.orientationY.linearRampToValueAtTime(Hi.y, n), e.orientationZ.linearRampToValueAtTime(Hi.z, n);
    } else
      e.setPosition(Vi.x, Vi.y, Vi.z), e.setOrientation(Hi.x, Hi.y, Hi.z);
  }
}
class dM {
  constructor(t, e = 2048) {
    this.analyser = t.context.createAnalyser(), this.analyser.fftSize = e, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser);
  }
  getFrequencyData() {
    return this.analyser.getByteFrequencyData(this.data), this.data;
  }
  getAverageFrequency() {
    let t = 0;
    const e = this.getFrequencyData();
    for (let n = 0; n < e.length; n++)
      t += e[n];
    return t / e.length;
  }
}
class bp {
  constructor(t, e, n) {
    this.binding = t, this.valueSize = n;
    let i, r, a;
    switch (e) {
      case "quaternion":
        i = this._slerp, r = this._slerpAdditive, a = this._setAdditiveIdentityQuaternion, this.buffer = new Float64Array(n * 6), this._workIndex = 5;
        break;
      case "string":
      case "bool":
        i = this._select, r = this._select, a = this._setAdditiveIdentityOther, this.buffer = new Array(n * 5);
        break;
      default:
        i = this._lerp, r = this._lerpAdditive, a = this._setAdditiveIdentityNumeric, this.buffer = new Float64Array(n * 5);
    }
    this._mixBufferRegion = i, this._mixBufferRegionAdditive = r, this._setIdentity = a, this._origIndex = 3, this._addIndex = 4, this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, this.useCount = 0, this.referenceCount = 0;
  }
  // accumulate data in the 'incoming' region into 'accu<i>'
  accumulate(t, e) {
    const n = this.buffer, i = this.valueSize, r = t * i + i;
    let a = this.cumulativeWeight;
    if (a === 0) {
      for (let o = 0; o !== i; ++o)
        n[r + o] = n[o];
      a = e;
    } else {
      a += e;
      const o = e / a;
      this._mixBufferRegion(n, r, 0, o, i);
    }
    this.cumulativeWeight = a;
  }
  // accumulate data in the 'incoming' region into 'add'
  accumulateAdditive(t) {
    const e = this.buffer, n = this.valueSize, i = n * this._addIndex;
    this.cumulativeWeightAdditive === 0 && this._setIdentity(), this._mixBufferRegionAdditive(e, i, 0, t, n), this.cumulativeWeightAdditive += t;
  }
  // apply the state of 'accu<i>' to the binding when accus differ
  apply(t) {
    const e = this.valueSize, n = this.buffer, i = t * e + e, r = this.cumulativeWeight, a = this.cumulativeWeightAdditive, o = this.binding;
    if (this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0, r < 1) {
      const c = e * this._origIndex;
      this._mixBufferRegion(
        n,
        i,
        c,
        1 - r,
        e
      );
    }
    a > 0 && this._mixBufferRegionAdditive(n, i, this._addIndex * e, 1, e);
    for (let c = e, l = e + e; c !== l; ++c)
      if (n[c] !== n[c + e]) {
        o.setValue(n, i);
        break;
      }
  }
  // remember the state of the bound property and copy it to both accus
  saveOriginalState() {
    const t = this.binding, e = this.buffer, n = this.valueSize, i = n * this._origIndex;
    t.getValue(e, i);
    for (let r = n, a = i; r !== a; ++r)
      e[r] = e[i + r % n];
    this._setIdentity(), this.cumulativeWeight = 0, this.cumulativeWeightAdditive = 0;
  }
  // apply the state previously taken via 'saveOriginalState' to the binding
  restoreOriginalState() {
    const t = this.valueSize * 3;
    this.binding.setValue(this.buffer, t);
  }
  _setAdditiveIdentityNumeric() {
    const t = this._addIndex * this.valueSize, e = t + this.valueSize;
    for (let n = t; n < e; n++)
      this.buffer[n] = 0;
  }
  _setAdditiveIdentityQuaternion() {
    this._setAdditiveIdentityNumeric(), this.buffer[this._addIndex * this.valueSize + 3] = 1;
  }
  _setAdditiveIdentityOther() {
    const t = this._origIndex * this.valueSize, e = this._addIndex * this.valueSize;
    for (let n = 0; n < this.valueSize; n++)
      this.buffer[e + n] = this.buffer[t + n];
  }
  // mix functions
  _select(t, e, n, i, r) {
    if (i >= 0.5)
      for (let a = 0; a !== r; ++a)
        t[e + a] = t[n + a];
  }
  _slerp(t, e, n, i) {
    Ze.slerpFlat(t, e, t, e, t, n, i);
  }
  _slerpAdditive(t, e, n, i, r) {
    const a = this._workIndex * r;
    Ze.multiplyQuaternionsFlat(t, a, t, e, t, n), Ze.slerpFlat(t, e, t, e, t, a, i);
  }
  _lerp(t, e, n, i, r) {
    const a = 1 - i;
    for (let o = 0; o !== r; ++o) {
      const c = e + o;
      t[c] = t[c] * a + t[n + o] * i;
    }
  }
  _lerpAdditive(t, e, n, i, r) {
    for (let a = 0; a !== r; ++a) {
      const o = e + a;
      t[o] = t[o] + t[n + a] * i;
    }
  }
}
const Th = "\\[\\]\\.:\\/", fM = new RegExp("[" + Th + "]", "g"), Ah = "[^" + Th + "]", pM = "[^" + Th.replace("\\.", "") + "]", mM = /* @__PURE__ */ /((?:WC+[\/:])*)/.source.replace("WC", Ah), gM = /* @__PURE__ */ /(WCOD+)?/.source.replace("WCOD", pM), _M = /* @__PURE__ */ /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Ah), xM = /* @__PURE__ */ /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Ah), vM = new RegExp(
  "^" + mM + gM + _M + xM + "$"
), yM = ["material", "materials", "bones", "map"];
class MM {
  constructor(t, e, n) {
    const i = n || te.parseTrackName(e);
    this._targetGroup = t, this._bindings = t.subscribe_(e, i);
  }
  getValue(t, e) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(t, e);
  }
  setValue(t, e) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(t, e);
  }
  bind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].bind();
  }
  unbind() {
    const t = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, n = t.length; e !== n; ++e)
      t[e].unbind();
  }
}
class te {
  constructor(t, e, n) {
    this.path = e, this.parsedPath = n || te.parseTrackName(e), this.node = te.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(t, e, n) {
    return t && t.isAnimationObjectGroup ? new te.Composite(t, e, n) : new te(t, e, n);
  }
  /**
   * Replaces spaces with underscores and removes unsupported characters from
   * node names, to ensure compatibility with parseTrackName().
   *
   * @param {string} name Node name to be sanitized.
   * @return {string}
   */
  static sanitizeNodeName(t) {
    return t.replace(/\s/g, "_").replace(fM, "");
  }
  static parseTrackName(t) {
    const e = vM.exec(t);
    if (e === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + t);
    const n = {
      // directoryName: matches[ 1 ], // (tschw) currently unused
      nodeName: e[2],
      objectName: e[3],
      objectIndex: e[4],
      propertyName: e[5],
      // required
      propertyIndex: e[6]
    }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      yM.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t);
    return n;
  }
  static findNode(t, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === t.name || e === t.uuid)
      return t;
    if (t.skeleton) {
      const n = t.skeleton.getBoneByName(e);
      if (n !== void 0)
        return n;
    }
    if (t.children) {
      const n = function(r) {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
          if (o.name === e || o.uuid === e)
            return o;
          const c = n(o.children);
          if (c) return c;
        }
        return null;
      }, i = n(t.children);
      if (i)
        return i;
    }
    return null;
  }
  // these are used to "bind" a nonexistent property
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  // Getters
  _getValue_direct(t, e) {
    t[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      t[e++] = n[i];
  }
  _getValue_arrayElement(t, e) {
    t[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(t, e) {
    this.resolvedProperty.toArray(t, e);
  }
  // Direct
  _setValue_direct(t, e) {
    this.targetObject[this.propertyName] = t[e];
  }
  _setValue_direct_setNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
    this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // EntireArray
  _setValue_array(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = t[e++];
  }
  _setValue_array_setNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = t[e++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i)
      n[i] = t[e++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // ArrayElement
  _setValue_arrayElement(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e];
  }
  _setValue_arrayElement_setNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  // HasToFromArray
  _setValue_fromArray(t, e) {
    this.resolvedProperty.fromArray(t, e);
  }
  _setValue_fromArray_setNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
    this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _getValue_unbound(t, e) {
    this.bind(), this.getValue(t, e);
  }
  _setValue_unbound(t, e) {
    this.bind(), this.setValue(t, e);
  }
  // create getter / setter pair for a property in the scene graph
  bind() {
    let t = this.node;
    const e = this.parsedPath, n = e.objectName, i = e.propertyName;
    let r = e.propertyIndex;
    if (t || (t = te.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let l = e.objectIndex;
      switch (n) {
        case "materials":
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          t = t.material.materials;
          break;
        case "bones":
          if (!t.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          t = t.skeleton.bones;
          for (let h = 0; h < t.length; h++)
            if (t[h].name === l) {
              l = h;
              break;
            }
          break;
        case "map":
          if ("map" in t) {
            t = t.map;
            break;
          }
          if (!t.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!t.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          t = t.material.map;
          break;
        default:
          if (t[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          t = t[n];
      }
      if (l !== void 0) {
        if (t[l] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
          return;
        }
        t = t[l];
      }
    }
    const a = t[i];
    if (a === void 0) {
      const l = e.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", t);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = t, t.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : t.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let c = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!t.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!t.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        t.morphTargetDictionary[r] !== void 0 && (r = t.morphTargetDictionary[r]);
      }
      c = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
te.Composite = MM;
te.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3
};
te.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2
};
te.prototype.GetterByBindingType = [
  te.prototype._getValue_direct,
  te.prototype._getValue_array,
  te.prototype._getValue_arrayElement,
  te.prototype._getValue_toArray
];
te.prototype.SetterByBindingTypeAndVersioning = [
  [
    // Direct
    te.prototype._setValue_direct,
    te.prototype._setValue_direct_setNeedsUpdate,
    te.prototype._setValue_direct_setMatrixWorldNeedsUpdate
  ],
  [
    // EntireArray
    te.prototype._setValue_array,
    te.prototype._setValue_array_setNeedsUpdate,
    te.prototype._setValue_array_setMatrixWorldNeedsUpdate
  ],
  [
    // ArrayElement
    te.prototype._setValue_arrayElement,
    te.prototype._setValue_arrayElement_setNeedsUpdate,
    te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
  ],
  [
    // HasToFromArray
    te.prototype._setValue_fromArray,
    te.prototype._setValue_fromArray_setNeedsUpdate,
    te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
  ]
];
class SM {
  constructor() {
    this.isAnimationObjectGroup = !0, this.uuid = cn(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
    const t = {};
    this._indicesByUUID = t;
    for (let n = 0, i = arguments.length; n !== i; ++n)
      t[arguments[n].uuid] = n;
    this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
    const e = this;
    this.stats = {
      objects: {
        get total() {
          return e._objects.length;
        },
        get inUse() {
          return this.total - e.nCachedObjects_;
        }
      },
      get bindingsPerObject() {
        return e._bindings.length;
      }
    };
  }
  add() {
    const t = this._objects, e = this._indicesByUUID, n = this._paths, i = this._parsedPaths, r = this._bindings, a = r.length;
    let o, c = t.length, l = this.nCachedObjects_;
    for (let h = 0, u = arguments.length; h !== u; ++h) {
      const d = arguments[h], f = d.uuid;
      let m = e[f];
      if (m === void 0) {
        m = c++, e[f] = m, t.push(d);
        for (let _ = 0, g = a; _ !== g; ++_)
          r[_].push(new te(d, n[_], i[_]));
      } else if (m < l) {
        o = t[m];
        const _ = --l, g = t[_];
        e[g.uuid] = m, t[m] = g, e[f] = _, t[_] = d;
        for (let p = 0, y = a; p !== y; ++p) {
          const x = r[p], v = x[_];
          let E = x[m];
          x[m] = v, E === void 0 && (E = new te(d, n[p], i[p])), x[_] = E;
        }
      } else t[m] !== o && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
    }
    this.nCachedObjects_ = l;
  }
  remove() {
    const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
    let r = this.nCachedObjects_;
    for (let a = 0, o = arguments.length; a !== o; ++a) {
      const c = arguments[a], l = c.uuid, h = e[l];
      if (h !== void 0 && h >= r) {
        const u = r++, d = t[u];
        e[d.uuid] = h, t[h] = d, e[l] = u, t[u] = c;
        for (let f = 0, m = i; f !== m; ++f) {
          const _ = n[f], g = _[u], p = _[h];
          _[h] = g, _[u] = p;
        }
      }
    }
    this.nCachedObjects_ = r;
  }
  // remove & forget
  uncache() {
    const t = this._objects, e = this._indicesByUUID, n = this._bindings, i = n.length;
    let r = this.nCachedObjects_, a = t.length;
    for (let o = 0, c = arguments.length; o !== c; ++o) {
      const l = arguments[o], h = l.uuid, u = e[h];
      if (u !== void 0)
        if (delete e[h], u < r) {
          const d = --r, f = t[d], m = --a, _ = t[m];
          e[f.uuid] = u, t[u] = f, e[_.uuid] = d, t[d] = _, t.pop();
          for (let g = 0, p = i; g !== p; ++g) {
            const y = n[g], x = y[d], v = y[m];
            y[u] = x, y[d] = v, y.pop();
          }
        } else {
          const d = --a, f = t[d];
          d > 0 && (e[f.uuid] = u), t[u] = f, t.pop();
          for (let m = 0, _ = i; m !== _; ++m) {
            const g = n[m];
            g[u] = g[d], g.pop();
          }
        }
    }
    this.nCachedObjects_ = r;
  }
  // Internal interface used by befriended PropertyBinding.Composite:
  subscribe_(t, e) {
    const n = this._bindingsIndicesByPath;
    let i = n[t];
    const r = this._bindings;
    if (i !== void 0) return r[i];
    const a = this._paths, o = this._parsedPaths, c = this._objects, l = c.length, h = this.nCachedObjects_, u = new Array(l);
    i = r.length, n[t] = i, a.push(t), o.push(e), r.push(u);
    for (let d = h, f = c.length; d !== f; ++d) {
      const m = c[d];
      u[d] = new te(m, t, e);
    }
    return u;
  }
  unsubscribe_(t) {
    const e = this._bindingsIndicesByPath, n = e[t];
    if (n !== void 0) {
      const i = this._paths, r = this._parsedPaths, a = this._bindings, o = a.length - 1, c = a[o], l = t[o];
      e[l] = n, a[n] = c, a.pop(), r[n] = r[o], r.pop(), i[n] = i[o], i.pop();
    }
  }
}
class wp {
  constructor(t, e, n = null, i = e.blendMode) {
    this._mixer = t, this._clip = e, this._localRoot = n, this.blendMode = i;
    const r = e.tracks, a = r.length, o = new Array(a), c = {
      endingStart: Yi,
      endingEnd: Yi
    };
    for (let l = 0; l !== a; ++l) {
      const h = r[l].createInterpolant(null);
      o[l] = h, h.settings = c;
    }
    this._interpolantSettings = c, this._interpolants = o, this._propertyBindings = new Array(a), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = uf, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0;
  }
  // State & Scheduling
  play() {
    return this._mixer._activateAction(this), this;
  }
  stop() {
    return this._mixer._deactivateAction(this), this.reset();
  }
  reset() {
    return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping();
  }
  isRunning() {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  }
  // return true when play has been called
  isScheduled() {
    return this._mixer._isActiveAction(this);
  }
  startAt(t) {
    return this._startTime = t, this;
  }
  setLoop(t, e) {
    return this.loop = t, this.repetitions = e, this;
  }
  // Weight
  // set the weight stopping any scheduled fading
  // although .enabled = false yields an effective weight of zero, this
  // method does *not* change .enabled, because it would be confusing
  setEffectiveWeight(t) {
    return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading();
  }
  // return the weight considering fading and .enabled
  getEffectiveWeight() {
    return this._effectiveWeight;
  }
  fadeIn(t) {
    return this._scheduleFading(t, 0, 1);
  }
  fadeOut(t) {
    return this._scheduleFading(t, 1, 0);
  }
  crossFadeFrom(t, e, n) {
    if (t.fadeOut(e), this.fadeIn(e), n) {
      const i = this._clip.duration, r = t._clip.duration, a = r / i, o = i / r;
      t.warp(1, a, e), this.warp(o, 1, e);
    }
    return this;
  }
  crossFadeTo(t, e, n) {
    return t.crossFadeFrom(this, e, n);
  }
  stopFading() {
    const t = this._weightInterpolant;
    return t !== null && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Time Scale Control
  // set the time scale stopping any scheduled warping
  // although .paused = true yields an effective time scale of zero, this
  // method does *not* change .paused, because it would be confusing
  setEffectiveTimeScale(t) {
    return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping();
  }
  // return the time scale considering warping and .paused
  getEffectiveTimeScale() {
    return this._effectiveTimeScale;
  }
  setDuration(t) {
    return this.timeScale = this._clip.duration / t, this.stopWarping();
  }
  syncWith(t) {
    return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping();
  }
  halt(t) {
    return this.warp(this._effectiveTimeScale, 0, t);
  }
  warp(t, e, n) {
    const i = this._mixer, r = i.time, a = this.timeScale;
    let o = this._timeScaleInterpolant;
    o === null && (o = i._lendControlInterpolant(), this._timeScaleInterpolant = o);
    const c = o.parameterPositions, l = o.sampleValues;
    return c[0] = r, c[1] = r + n, l[0] = t / a, l[1] = e / a, this;
  }
  stopWarping() {
    const t = this._timeScaleInterpolant;
    return t !== null && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this;
  }
  // Object Accessors
  getMixer() {
    return this._mixer;
  }
  getClip() {
    return this._clip;
  }
  getRoot() {
    return this._localRoot || this._mixer._root;
  }
  // Interna
  _update(t, e, n, i) {
    if (!this.enabled) {
      this._updateWeight(t);
      return;
    }
    const r = this._startTime;
    if (r !== null) {
      const c = (t - r) * n;
      c < 0 || n === 0 ? e = 0 : (this._startTime = null, e = n * c);
    }
    e *= this._updateTimeScale(t);
    const a = this._updateTime(e), o = this._updateWeight(t);
    if (o > 0) {
      const c = this._interpolants, l = this._propertyBindings;
      switch (this.blendMode) {
        case Zl:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulateAdditive(o);
          break;
        case jo:
        default:
          for (let h = 0, u = c.length; h !== u; ++h)
            c[h].evaluate(a), l[h].accumulate(i, o);
      }
    }
  }
  _updateWeight(t) {
    let e = 0;
    if (this.enabled) {
      e = this.weight;
      const n = this._weightInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopFading(), i === 0 && (this.enabled = !1));
      }
    }
    return this._effectiveWeight = e, e;
  }
  _updateTimeScale(t) {
    let e = 0;
    if (!this.paused) {
      e = this.timeScale;
      const n = this._timeScaleInterpolant;
      if (n !== null) {
        const i = n.evaluate(t)[0];
        e *= i, t > n.parameterPositions[1] && (this.stopWarping(), e === 0 ? this.paused = !0 : this.timeScale = e);
      }
    }
    return this._effectiveTimeScale = e, e;
  }
  _updateTime(t) {
    const e = this._clip.duration, n = this.loop;
    let i = this.time + t, r = this._loopCount;
    const a = n === df;
    if (t === 0)
      return r === -1 ? i : a && (r & 1) === 1 ? e - i : i;
    if (n === hf) {
      r === -1 && (this._loopCount = 0, this._setEndings(!0, !0, !1));
      t: {
        if (i >= e)
          i = e;
        else if (i < 0)
          i = 0;
        else {
          this.time = i;
          break t;
        }
        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, this.time = i, this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: t < 0 ? -1 : 1
        });
      }
    } else {
      if (r === -1 && (t >= 0 ? (r = 0, this._setEndings(!0, this.repetitions === 0, a)) : this._setEndings(this.repetitions === 0, !0, a)), i >= e || i < 0) {
        const o = Math.floor(i / e);
        i -= e * o, r += Math.abs(o);
        const c = this.repetitions - r;
        if (c <= 0)
          this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, i = t > 0 ? e : 0, this.time = i, this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: t > 0 ? 1 : -1
          });
        else {
          if (c === 1) {
            const l = t < 0;
            this._setEndings(l, !l, a);
          } else
            this._setEndings(!1, !1, a);
          this._loopCount = r, this.time = i, this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: o
          });
        }
      } else
        this.time = i;
      if (a && (r & 1) === 1)
        return e - i;
    }
    return i;
  }
  _setEndings(t, e, n) {
    const i = this._interpolantSettings;
    n ? (i.endingStart = $i, i.endingEnd = $i) : (t ? i.endingStart = this.zeroSlopeAtStart ? $i : Yi : i.endingStart = Rr, e ? i.endingEnd = this.zeroSlopeAtEnd ? $i : Yi : i.endingEnd = Rr);
  }
  _scheduleFading(t, e, n) {
    const i = this._mixer, r = i.time;
    let a = this._weightInterpolant;
    a === null && (a = i._lendControlInterpolant(), this._weightInterpolant = a);
    const o = a.parameterPositions, c = a.sampleValues;
    return o[0] = r, c[0] = e, o[1] = r + t, c[1] = n, this;
  }
}
const bM = new Float32Array(1);
class wM extends Jn {
  constructor(t) {
    super(), this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1;
  }
  _bindAction(t, e) {
    const n = t._localRoot || this._root, i = t._clip.tracks, r = i.length, a = t._propertyBindings, o = t._interpolants, c = n.uuid, l = this._bindingsByRootAndName;
    let h = l[c];
    h === void 0 && (h = {}, l[c] = h);
    for (let u = 0; u !== r; ++u) {
      const d = i[u], f = d.name;
      let m = h[f];
      if (m !== void 0)
        ++m.referenceCount, a[u] = m;
      else {
        if (m = a[u], m !== void 0) {
          m._cacheIndex === null && (++m.referenceCount, this._addInactiveBinding(m, c, f));
          continue;
        }
        const _ = e && e._propertyBindings[u].binding.parsedPath;
        m = new bp(
          te.create(n, f, _),
          d.ValueTypeName,
          d.getValueSize()
        ), ++m.referenceCount, this._addInactiveBinding(m, c, f), a[u] = m;
      }
      o[u].resultBuffer = m.buffer;
    }
  }
  _activateAction(t) {
    if (!this._isActiveAction(t)) {
      if (t._cacheIndex === null) {
        const n = (t._localRoot || this._root).uuid, i = t._clip.uuid, r = this._actionsByClip[i];
        this._bindAction(
          t,
          r && r.knownActions[0]
        ), this._addInactiveAction(t, i, n);
      }
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = e[n];
        r.useCount++ === 0 && (this._lendBinding(r), r.saveOriginalState());
      }
      this._lendAction(t);
    }
  }
  _deactivateAction(t) {
    if (this._isActiveAction(t)) {
      const e = t._propertyBindings;
      for (let n = 0, i = e.length; n !== i; ++n) {
        const r = e[n];
        --r.useCount === 0 && (r.restoreOriginalState(), this._takeBackBinding(r));
      }
      this._takeBackAction(t);
    }
  }
  // Memory manager
  _initMemoryManager() {
    this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
    const t = this;
    this.stats = {
      actions: {
        get total() {
          return t._actions.length;
        },
        get inUse() {
          return t._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return t._bindings.length;
        },
        get inUse() {
          return t._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return t._controlInterpolants.length;
        },
        get inUse() {
          return t._nActiveControlInterpolants;
        }
      }
    };
  }
  // Memory management for AnimationAction objects
  _isActiveAction(t) {
    const e = t._cacheIndex;
    return e !== null && e < this._nActiveActions;
  }
  _addInactiveAction(t, e, n) {
    const i = this._actions, r = this._actionsByClip;
    let a = r[e];
    if (a === void 0)
      a = {
        knownActions: [t],
        actionByRoot: {}
      }, t._byClipCacheIndex = 0, r[e] = a;
    else {
      const o = a.knownActions;
      t._byClipCacheIndex = o.length, o.push(t);
    }
    t._cacheIndex = i.length, i.push(t), a.actionByRoot[n] = t;
  }
  _removeInactiveAction(t) {
    const e = this._actions, n = e[e.length - 1], i = t._cacheIndex;
    n._cacheIndex = i, e[i] = n, e.pop(), t._cacheIndex = null;
    const r = t._clip.uuid, a = this._actionsByClip, o = a[r], c = o.knownActions, l = c[c.length - 1], h = t._byClipCacheIndex;
    l._byClipCacheIndex = h, c[h] = l, c.pop(), t._byClipCacheIndex = null;
    const u = o.actionByRoot, d = (t._localRoot || this._root).uuid;
    delete u[d], c.length === 0 && delete a[r], this._removeInactiveBindingsForAction(t);
  }
  _removeInactiveBindingsForAction(t) {
    const e = t._propertyBindings;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = e[n];
      --r.referenceCount === 0 && this._removeInactiveBinding(r);
    }
  }
  _lendAction(t) {
    const e = this._actions, n = t._cacheIndex, i = this._nActiveActions++, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  _takeBackAction(t) {
    const e = this._actions, n = t._cacheIndex, i = --this._nActiveActions, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  // Memory management for PropertyMixer objects
  _addInactiveBinding(t, e, n) {
    const i = this._bindingsByRootAndName, r = this._bindings;
    let a = i[e];
    a === void 0 && (a = {}, i[e] = a), a[n] = t, t._cacheIndex = r.length, r.push(t);
  }
  _removeInactiveBinding(t) {
    const e = this._bindings, n = t.binding, i = n.rootNode.uuid, r = n.path, a = this._bindingsByRootAndName, o = a[i], c = e[e.length - 1], l = t._cacheIndex;
    c._cacheIndex = l, e[l] = c, e.pop(), delete o[r], Object.keys(o).length === 0 && delete a[i];
  }
  _lendBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = this._nActiveBindings++, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  _takeBackBinding(t) {
    const e = this._bindings, n = t._cacheIndex, i = --this._nActiveBindings, r = e[i];
    t._cacheIndex = i, e[i] = t, r._cacheIndex = n, e[n] = r;
  }
  // Memory management of Interpolants for weight and time scale
  _lendControlInterpolant() {
    const t = this._controlInterpolants, e = this._nActiveControlInterpolants++;
    let n = t[e];
    return n === void 0 && (n = new vh(
      new Float32Array(2),
      new Float32Array(2),
      1,
      bM
    ), n.__cacheIndex = e, t[e] = n), n;
  }
  _takeBackControlInterpolant(t) {
    const e = this._controlInterpolants, n = t.__cacheIndex, i = --this._nActiveControlInterpolants, r = e[i];
    t.__cacheIndex = i, e[i] = t, r.__cacheIndex = n, e[n] = r;
  }
  // return an action for a clip optionally using a custom root target
  // object (this method allocates a lot of dynamic memory in case a
  // previously unknown clip/root combination is specified)
  clipAction(t, e, n) {
    const i = e || this._root, r = i.uuid;
    let a = typeof t == "string" ? zr.findByName(i, t) : t;
    const o = a !== null ? a.uuid : t, c = this._actionsByClip[o];
    let l = null;
    if (n === void 0 && (a !== null ? n = a.blendMode : n = jo), c !== void 0) {
      const u = c.actionByRoot[r];
      if (u !== void 0 && u.blendMode === n)
        return u;
      l = c.knownActions[0], a === null && (a = l._clip);
    }
    if (a === null) return null;
    const h = new wp(this, a, e, n);
    return this._bindAction(h, l), this._addInactiveAction(h, o, r), h;
  }
  // get an existing action
  existingAction(t, e) {
    const n = e || this._root, i = n.uuid, r = typeof t == "string" ? zr.findByName(n, t) : t, a = r ? r.uuid : t, o = this._actionsByClip[a];
    return o !== void 0 && o.actionByRoot[i] || null;
  }
  // deactivates all previously scheduled actions
  stopAllAction() {
    const t = this._actions, e = this._nActiveActions;
    for (let n = e - 1; n >= 0; --n)
      t[n].stop();
    return this;
  }
  // advance the time and update apply the animation
  update(t) {
    t *= this.timeScale;
    const e = this._actions, n = this._nActiveActions, i = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1;
    for (let l = 0; l !== n; ++l)
      e[l]._update(i, t, r, a);
    const o = this._bindings, c = this._nActiveBindings;
    for (let l = 0; l !== c; ++l)
      o[l].apply(a);
    return this;
  }
  // Allows you to seek to a specific time in an animation.
  setTime(t) {
    this.time = 0;
    for (let e = 0; e < this._actions.length; e++)
      this._actions[e].time = 0;
    return this.update(t);
  }
  // return this mixer's root target object
  getRoot() {
    return this._root;
  }
  // free all resources specific to a particular clip
  uncacheClip(t) {
    const e = this._actions, n = t.uuid, i = this._actionsByClip, r = i[n];
    if (r !== void 0) {
      const a = r.knownActions;
      for (let o = 0, c = a.length; o !== c; ++o) {
        const l = a[o];
        this._deactivateAction(l);
        const h = l._cacheIndex, u = e[e.length - 1];
        l._cacheIndex = null, l._byClipCacheIndex = null, u._cacheIndex = h, e[h] = u, e.pop(), this._removeInactiveBindingsForAction(l);
      }
      delete i[n];
    }
  }
  // free all resources specific to a particular root target object
  uncacheRoot(t) {
    const e = t.uuid, n = this._actionsByClip;
    for (const a in n) {
      const o = n[a].actionByRoot, c = o[e];
      c !== void 0 && (this._deactivateAction(c), this._removeInactiveAction(c));
    }
    const i = this._bindingsByRootAndName, r = i[e];
    if (r !== void 0)
      for (const a in r) {
        const o = r[a];
        o.restoreOriginalState(), this._removeInactiveBinding(o);
      }
  }
  // remove a targeted clip from the cache
  uncacheAction(t, e) {
    const n = this.existingAction(t, e);
    n !== null && (this._deactivateAction(n), this._removeInactiveAction(n));
  }
}
class Ch {
  constructor(t) {
    this.value = t;
  }
  clone() {
    return new Ch(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
let EM = 0;
class TM extends Jn {
  constructor() {
    super(), this.isUniformsGroup = !0, Object.defineProperty(this, "id", { value: EM++ }), this.name = "", this.usage = Pr, this.uniforms = [];
  }
  add(t) {
    return this.uniforms.push(t), this;
  }
  remove(t) {
    const e = this.uniforms.indexOf(t);
    return e !== -1 && this.uniforms.splice(e, 1), this;
  }
  setName(t) {
    return this.name = t, this;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this;
  }
  copy(t) {
    this.name = t.name, this.usage = t.usage;
    const e = t.uniforms;
    this.uniforms.length = 0;
    for (let n = 0, i = e.length; n < i; n++) {
      const r = Array.isArray(e[n]) ? e[n] : [e[n]];
      for (let a = 0; a < r.length; a++)
        this.uniforms.push(r[a].clone());
    }
    return this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Go extends oc {
  constructor(t, e, n = 1) {
    super(t, e), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n;
  }
  copy(t) {
    return super.copy(t), this.meshPerAttribute = t.meshPerAttribute, this;
  }
  clone(t) {
    const e = super.clone(t);
    return e.meshPerAttribute = this.meshPerAttribute, e;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.isInstancedInterleavedBuffer = !0, e.meshPerAttribute = this.meshPerAttribute, e;
  }
}
class AM {
  constructor(t, e, n, i, r) {
    this.isGLBufferAttribute = !0, this.name = "", this.buffer = t, this.type = e, this.itemSize = n, this.elementSize = i, this.count = r, this.version = 0;
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setBuffer(t) {
    return this.buffer = t, this;
  }
  setType(t, e) {
    return this.type = t, this.elementSize = e, this;
  }
  setItemSize(t) {
    return this.itemSize = t, this;
  }
  setCount(t) {
    return this.count = t, this;
  }
}
const ud = /* @__PURE__ */ new Ft();
class Ep {
  constructor(t, e, n = 0, i = 1 / 0) {
    this.ray = new Ws(t, e), this.near = n, this.far = i, this.camera = null, this.layers = new tc(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return ud.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(ud), this;
  }
  intersectObject(t, e = !0, n = []) {
    return Ll(t, this, n, e), n.sort(dd), n;
  }
  intersectObjects(t, e = !0, n = []) {
    for (let i = 0, r = t.length; i < r; i++)
      Ll(t[i], this, n, e);
    return n.sort(dd), n;
  }
}
function dd(s, t) {
  return s.distance - t.distance;
}
function Ll(s, t, e, n) {
  let i = !0;
  if (s.layers.test(t.layers) && s.raycast(t, e) === !1 && (i = !1), i === !0 && n === !0) {
    const r = s.children;
    for (let a = 0, o = r.length; a < o; a++)
      Ll(r[a], t, e, !0);
  }
}
class CM {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ge(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class RM {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.theta = e, this.y = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.theta = e, this.y = n, this;
  }
  copy(t) {
    return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + n * n), this.theta = Math.atan2(t, n), this.y = e, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Rh {
  constructor(t, e, n, i) {
    Rh.prototype.isMatrix2 = !0, this.elements = [
      1,
      0,
      0,
      1
    ], t !== void 0 && this.set(t, e, n, i);
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      1
    ), this;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 4; n++)
      this.elements[n] = t[n + e];
    return this;
  }
  set(t, e, n, i) {
    const r = this.elements;
    return r[0] = t, r[2] = e, r[1] = n, r[3] = i, this;
  }
}
const fd = /* @__PURE__ */ new nt();
class PM {
  constructor(t = new nt(1 / 0, 1 / 0), e = new nt(-1 / 0, -1 / 0)) {
    this.isBox2 = !0, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++)
      this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = fd.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y;
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y)
    );
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y;
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, fd).distanceTo(t);
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const pd = /* @__PURE__ */ new R(), ka = /* @__PURE__ */ new R();
class Tp {
  constructor(t = new R(), e = new R()) {
    this.start = t, this.end = e;
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    pd.subVectors(t, this.start), ka.subVectors(this.end, this.start);
    const n = ka.dot(ka);
    let r = ka.dot(pd) / n;
    return e && (r = ge(r, 0, 1)), r;
  }
  closestPointToPoint(t, e, n) {
    const i = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(i).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const md = /* @__PURE__ */ new R();
class IM extends Qt {
  constructor(t, e) {
    super(), this.light = t, this.matrixAutoUpdate = !1, this.color = e, this.type = "SpotLightHelper";
    const n = new Yt(), i = [
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      -1,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      0,
      0,
      0,
      0,
      -1,
      1
    ];
    for (let a = 0, o = 1, c = 32; a < c; a++, o++) {
      const l = a / c * Math.PI * 2, h = o / c * Math.PI * 2;
      i.push(
        Math.cos(l),
        Math.sin(l),
        1,
        Math.cos(h),
        Math.sin(h),
        1
      );
    }
    n.setAttribute("position", new Ct(i, 3));
    const r = new Ve({ fog: !1, toneMapped: !1 });
    this.cone = new In(n, r), this.add(this.cone), this.update();
  }
  dispose() {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), this.parent ? (this.parent.updateWorldMatrix(!0), this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)) : this.matrix.copy(this.light.matrixWorld), this.matrixWorld.copy(this.light.matrixWorld);
    const t = this.light.distance ? this.light.distance : 1e3, e = t * Math.tan(this.light.angle);
    this.cone.scale.set(e, e, t), md.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(md), this.color !== void 0 ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color);
  }
}
const Si = /* @__PURE__ */ new R(), Va = /* @__PURE__ */ new Ft(), hl = /* @__PURE__ */ new Ft();
class LM extends In {
  constructor(t) {
    const e = Ap(t), n = new Yt(), i = [], r = [], a = new gt(0, 0, 1), o = new gt(0, 1, 0);
    for (let l = 0; l < e.length; l++) {
      const h = e[l];
      h.parent && h.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b));
    }
    n.setAttribute("position", new Ct(i, 3)), n.setAttribute("color", new Ct(r, 3));
    const c = new Ve({ vertexColors: !0, depthTest: !1, depthWrite: !1, toneMapped: !1, transparent: !0 });
    super(n, c), this.isSkeletonHelper = !0, this.type = "SkeletonHelper", this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
  }
  updateMatrixWorld(t) {
    const e = this.bones, n = this.geometry, i = n.getAttribute("position");
    hl.copy(this.root.matrixWorld).invert();
    for (let r = 0, a = 0; r < e.length; r++) {
      const o = e[r];
      o.parent && o.parent.isBone && (Va.multiplyMatrices(hl, o.matrixWorld), Si.setFromMatrixPosition(Va), i.setXYZ(a, Si.x, Si.y, Si.z), Va.multiplyMatrices(hl, o.parent.matrixWorld), Si.setFromMatrixPosition(Va), i.setXYZ(a + 1, Si.x, Si.y, Si.z), a += 2);
    }
    n.getAttribute("position").needsUpdate = !0, super.updateMatrixWorld(t);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function Ap(s) {
  const t = [];
  s.isBone === !0 && t.push(s);
  for (let e = 0; e < s.children.length; e++)
    t.push.apply(t, Ap(s.children[e]));
  return t;
}
class DM extends qt {
  constructor(t, e, n) {
    const i = new as(e, 4, 2), r = new xn({ wireframe: !0, fog: !1, toneMapped: !1 });
    super(i, r), this.light = t, this.color = n, this.type = "PointLightHelper", this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update();
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.color !== void 0 ? this.material.color.set(this.color) : this.material.color.copy(this.light.color);
  }
}
const UM = /* @__PURE__ */ new R(), gd = /* @__PURE__ */ new gt(), _d = /* @__PURE__ */ new gt();
class NM extends Qt {
  constructor(t, e, n) {
    super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "HemisphereLightHelper";
    const i = new $r(e);
    i.rotateY(Math.PI * 0.5), this.material = new xn({ wireframe: !0, fog: !1, toneMapped: !1 }), this.color === void 0 && (this.material.vertexColors = !0);
    const r = i.getAttribute("position"), a = new Float32Array(r.count * 3);
    i.setAttribute("color", new ae(a, 3)), this.add(new qt(i, this.material)), this.update();
  }
  dispose() {
    this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
  update() {
    const t = this.children[0];
    if (this.color !== void 0)
      this.material.color.set(this.color);
    else {
      const e = t.geometry.getAttribute("color");
      gd.copy(this.light.color), _d.copy(this.light.groundColor);
      for (let n = 0, i = e.count; n < i; n++) {
        const r = n < i / 2 ? gd : _d;
        e.setXYZ(n, r.r, r.g, r.b);
      }
      e.needsUpdate = !0;
    }
    this.light.updateWorldMatrix(!0, !1), t.lookAt(UM.setFromMatrixPosition(this.light.matrixWorld).negate());
  }
}
class FM extends In {
  constructor(t = 10, e = 10, n = 4473924, i = 8947848) {
    n = new gt(n), i = new gt(i);
    const r = e / 2, a = t / e, o = t / 2, c = [], l = [];
    for (let d = 0, f = 0, m = -o; d <= e; d++, m += a) {
      c.push(-o, 0, m, o, 0, m), c.push(m, 0, -o, m, 0, o);
      const _ = d === r ? n : i;
      _.toArray(l, f), f += 3, _.toArray(l, f), f += 3, _.toArray(l, f), f += 3, _.toArray(l, f), f += 3;
    }
    const h = new Yt();
    h.setAttribute("position", new Ct(c, 3)), h.setAttribute("color", new Ct(l, 3));
    const u = new Ve({ vertexColors: !0, toneMapped: !1 });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class OM extends In {
  constructor(t = 10, e = 16, n = 8, i = 64, r = 4473924, a = 8947848) {
    r = new gt(r), a = new gt(a);
    const o = [], c = [];
    if (e > 1)
      for (let u = 0; u < e; u++) {
        const d = u / e * (Math.PI * 2), f = Math.sin(d) * t, m = Math.cos(d) * t;
        o.push(0, 0, 0), o.push(f, 0, m);
        const _ = u & 1 ? r : a;
        c.push(_.r, _.g, _.b), c.push(_.r, _.g, _.b);
      }
    for (let u = 0; u < n; u++) {
      const d = u & 1 ? r : a, f = t - t / n * u;
      for (let m = 0; m < i; m++) {
        let _ = m / i * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f;
        o.push(g, 0, p), c.push(d.r, d.g, d.b), _ = (m + 1) / i * (Math.PI * 2), g = Math.sin(_) * f, p = Math.cos(_) * f, o.push(g, 0, p), c.push(d.r, d.g, d.b);
      }
    }
    const l = new Yt();
    l.setAttribute("position", new Ct(o, 3)), l.setAttribute("color", new Ct(c, 3));
    const h = new Ve({ vertexColors: !0, toneMapped: !1 });
    super(l, h), this.type = "PolarGridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const xd = /* @__PURE__ */ new R(), Ha = /* @__PURE__ */ new R(), vd = /* @__PURE__ */ new R();
class BM extends Qt {
  constructor(t, e, n) {
    super(), this.light = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = n, this.type = "DirectionalLightHelper", e === void 0 && (e = 1);
    let i = new Yt();
    i.setAttribute("position", new Ct([
      -e,
      e,
      0,
      e,
      e,
      0,
      e,
      -e,
      0,
      -e,
      -e,
      0,
      -e,
      e,
      0
    ], 3));
    const r = new Ve({ fog: !1, toneMapped: !1 });
    this.lightPlane = new Ei(i, r), this.add(this.lightPlane), i = new Yt(), i.setAttribute("position", new Ct([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new Ei(i, r), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(!0, !1), this.light.target.updateWorldMatrix(!0, !1), xd.setFromMatrixPosition(this.light.matrixWorld), Ha.setFromMatrixPosition(this.light.target.matrixWorld), vd.subVectors(Ha, xd), this.lightPlane.lookAt(Ha), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Ha), this.targetLine.scale.z = vd.length();
  }
}
const Ga = /* @__PURE__ */ new R(), me = /* @__PURE__ */ new nc();
class zM extends In {
  constructor(t) {
    const e = new Yt(), n = new Ve({ color: 16777215, vertexColors: !0, toneMapped: !1 }), i = [], r = [], a = {};
    o("n1", "n2"), o("n2", "n4"), o("n4", "n3"), o("n3", "n1"), o("f1", "f2"), o("f2", "f4"), o("f4", "f3"), o("f3", "f1"), o("n1", "f1"), o("n2", "f2"), o("n3", "f3"), o("n4", "f4"), o("p", "n1"), o("p", "n2"), o("p", "n3"), o("p", "n4"), o("u1", "u2"), o("u2", "u3"), o("u3", "u1"), o("c", "t"), o("p", "c"), o("cn1", "cn2"), o("cn3", "cn4"), o("cf1", "cf2"), o("cf3", "cf4");
    function o(m, _) {
      c(m), c(_);
    }
    function c(m) {
      i.push(0, 0, 0), r.push(0, 0, 0), a[m] === void 0 && (a[m] = []), a[m].push(i.length / 3 - 1);
    }
    e.setAttribute("position", new Ct(i, 3)), e.setAttribute("color", new Ct(r, 3)), super(e, n), this.type = "CameraHelper", this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = a, this.update();
    const l = new gt(16755200), h = new gt(16711680), u = new gt(43775), d = new gt(16777215), f = new gt(3355443);
    this.setColors(l, h, u, d, f);
  }
  setColors(t, e, n, i, r) {
    const o = this.geometry.getAttribute("color");
    o.setXYZ(0, t.r, t.g, t.b), o.setXYZ(1, t.r, t.g, t.b), o.setXYZ(2, t.r, t.g, t.b), o.setXYZ(3, t.r, t.g, t.b), o.setXYZ(4, t.r, t.g, t.b), o.setXYZ(5, t.r, t.g, t.b), o.setXYZ(6, t.r, t.g, t.b), o.setXYZ(7, t.r, t.g, t.b), o.setXYZ(8, t.r, t.g, t.b), o.setXYZ(9, t.r, t.g, t.b), o.setXYZ(10, t.r, t.g, t.b), o.setXYZ(11, t.r, t.g, t.b), o.setXYZ(12, t.r, t.g, t.b), o.setXYZ(13, t.r, t.g, t.b), o.setXYZ(14, t.r, t.g, t.b), o.setXYZ(15, t.r, t.g, t.b), o.setXYZ(16, t.r, t.g, t.b), o.setXYZ(17, t.r, t.g, t.b), o.setXYZ(18, t.r, t.g, t.b), o.setXYZ(19, t.r, t.g, t.b), o.setXYZ(20, t.r, t.g, t.b), o.setXYZ(21, t.r, t.g, t.b), o.setXYZ(22, t.r, t.g, t.b), o.setXYZ(23, t.r, t.g, t.b), o.setXYZ(24, e.r, e.g, e.b), o.setXYZ(25, e.r, e.g, e.b), o.setXYZ(26, e.r, e.g, e.b), o.setXYZ(27, e.r, e.g, e.b), o.setXYZ(28, e.r, e.g, e.b), o.setXYZ(29, e.r, e.g, e.b), o.setXYZ(30, e.r, e.g, e.b), o.setXYZ(31, e.r, e.g, e.b), o.setXYZ(32, n.r, n.g, n.b), o.setXYZ(33, n.r, n.g, n.b), o.setXYZ(34, n.r, n.g, n.b), o.setXYZ(35, n.r, n.g, n.b), o.setXYZ(36, n.r, n.g, n.b), o.setXYZ(37, n.r, n.g, n.b), o.setXYZ(38, i.r, i.g, i.b), o.setXYZ(39, i.r, i.g, i.b), o.setXYZ(40, r.r, r.g, r.b), o.setXYZ(41, r.r, r.g, r.b), o.setXYZ(42, r.r, r.g, r.b), o.setXYZ(43, r.r, r.g, r.b), o.setXYZ(44, r.r, r.g, r.b), o.setXYZ(45, r.r, r.g, r.b), o.setXYZ(46, r.r, r.g, r.b), o.setXYZ(47, r.r, r.g, r.b), o.setXYZ(48, r.r, r.g, r.b), o.setXYZ(49, r.r, r.g, r.b), o.needsUpdate = !0;
  }
  update() {
    const t = this.geometry, e = this.pointMap, n = 1, i = 1;
    me.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse), xe("c", e, t, me, 0, 0, -1), xe("t", e, t, me, 0, 0, 1), xe("n1", e, t, me, -n, -i, -1), xe("n2", e, t, me, n, -i, -1), xe("n3", e, t, me, -n, i, -1), xe("n4", e, t, me, n, i, -1), xe("f1", e, t, me, -n, -i, 1), xe("f2", e, t, me, n, -i, 1), xe("f3", e, t, me, -n, i, 1), xe("f4", e, t, me, n, i, 1), xe("u1", e, t, me, n * 0.7, i * 1.1, -1), xe("u2", e, t, me, -n * 0.7, i * 1.1, -1), xe("u3", e, t, me, 0, i * 2, -1), xe("cf1", e, t, me, -n, 0, 1), xe("cf2", e, t, me, n, 0, 1), xe("cf3", e, t, me, 0, -i, 1), xe("cf4", e, t, me, 0, i, 1), xe("cn1", e, t, me, -n, 0, -1), xe("cn2", e, t, me, n, 0, -1), xe("cn3", e, t, me, 0, -i, -1), xe("cn4", e, t, me, 0, i, -1), t.getAttribute("position").needsUpdate = !0;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function xe(s, t, e, n, i, r, a) {
  Ga.set(i, r, a).unproject(n);
  const o = t[s];
  if (o !== void 0) {
    const c = e.getAttribute("position");
    for (let l = 0, h = o.length; l < h; l++)
      c.setXYZ(o[l], Ga.x, Ga.y, Ga.z);
  }
}
const Wa = /* @__PURE__ */ new we();
class kM extends In {
  constructor(t, e = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = new Float32Array(24), r = new Yt();
    r.setIndex(new ae(n, 1)), r.setAttribute("position", new ae(i, 3)), super(r, new Ve({ color: e, toneMapped: !1 })), this.object = t, this.type = "BoxHelper", this.matrixAutoUpdate = !1, this.update();
  }
  update(t) {
    if (t !== void 0 && console.warn("THREE.BoxHelper: .update() has no longer arguments."), this.object !== void 0 && Wa.setFromObject(this.object), Wa.isEmpty()) return;
    const e = Wa.min, n = Wa.max, i = this.geometry.attributes.position, r = i.array;
    r[0] = n.x, r[1] = n.y, r[2] = n.z, r[3] = e.x, r[4] = n.y, r[5] = n.z, r[6] = e.x, r[7] = e.y, r[8] = n.z, r[9] = n.x, r[10] = e.y, r[11] = n.z, r[12] = n.x, r[13] = n.y, r[14] = e.z, r[15] = e.x, r[16] = n.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = n.x, r[22] = e.y, r[23] = e.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere();
  }
  setFromObject(t) {
    return this.object = t, this.update(), this;
  }
  copy(t, e) {
    return super.copy(t, e), this.object = t.object, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class VM extends In {
  constructor(t, e = 16776960) {
    const n = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]), i = [1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], r = new Yt();
    r.setIndex(new ae(n, 1)), r.setAttribute("position", new Ct(i, 3)), super(r, new Ve({ color: e, toneMapped: !1 })), this.box = t, this.type = "Box3Helper", this.geometry.computeBoundingSphere();
  }
  updateMatrixWorld(t) {
    const e = this.box;
    e.isEmpty() || (e.getCenter(this.position), e.getSize(this.scale), this.scale.multiplyScalar(0.5), super.updateMatrixWorld(t));
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class HM extends Ei {
  constructor(t, e = 1, n = 16776960) {
    const i = n, r = [1, -1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], a = new Yt();
    a.setAttribute("position", new Ct(r, 3)), a.computeBoundingSphere(), super(a, new Ve({ color: i, toneMapped: !1 })), this.type = "PlaneHelper", this.plane = t, this.size = e;
    const o = [1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], c = new Yt();
    c.setAttribute("position", new Ct(o, 3)), c.computeBoundingSphere(), this.add(new qt(c, new xn({ color: i, opacity: 0.2, transparent: !0, depthWrite: !1, toneMapped: !1 })));
  }
  updateMatrixWorld(t) {
    this.position.set(0, 0, 0), this.scale.set(0.5 * this.size, 0.5 * this.size, 1), this.lookAt(this.plane.normal), this.translateZ(-this.plane.constant), super.updateMatrixWorld(t);
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose(), this.children[0].geometry.dispose(), this.children[0].material.dispose();
  }
}
const yd = /* @__PURE__ */ new R();
let Xa, ul;
class GM extends Qt {
  // dir is assumed to be normalized
  constructor(t = new R(0, 0, 1), e = new R(0, 0, 0), n = 1, i = 16776960, r = n * 0.2, a = r * 0.2) {
    super(), this.type = "ArrowHelper", Xa === void 0 && (Xa = new Yt(), Xa.setAttribute("position", new Ct([0, 0, 0, 0, 1, 0], 3)), ul = new Wn(0, 0.5, 1, 5, 1), ul.translate(0, -0.5, 0)), this.position.copy(e), this.line = new Ei(Xa, new Ve({ color: i, toneMapped: !1 })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new qt(ul, new xn({ color: i, toneMapped: !1 })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(n, r, a);
  }
  setDirection(t) {
    if (t.y > 0.99999)
      this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999)
      this.quaternion.set(1, 0, 0, 0);
    else {
      yd.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(yd, e);
    }
  }
  setLength(t, e = t * 0.2, n = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
  }
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return super.copy(t, !1), this.line.copy(t.line), this.cone.copy(t.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class WM extends In {
  constructor(t = 1) {
    const e = [
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      0,
      0,
      t
    ], n = [
      1,
      0,
      0,
      1,
      0.6,
      0,
      0,
      1,
      0,
      0.6,
      1,
      0,
      0,
      0,
      1,
      0,
      0.6,
      1
    ], i = new Yt();
    i.setAttribute("position", new Ct(e, 3)), i.setAttribute("color", new Ct(n, 3));
    const r = new Ve({ vertexColors: !0, toneMapped: !1 });
    super(i, r), this.type = "AxesHelper";
  }
  setColors(t, e, n) {
    const i = new gt(), r = this.geometry.attributes.color.array;
    return i.set(t), i.toArray(r, 0), i.toArray(r, 3), i.set(e), i.toArray(r, 6), i.toArray(r, 9), i.set(n), i.toArray(r, 12), i.toArray(r, 15), this.geometry.attributes.color.needsUpdate = !0, this;
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class XM {
  constructor() {
    this.type = "ShapePath", this.color = new gt(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(t, e) {
    return this.currentPath = new Dr(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e), this;
  }
  lineTo(t, e) {
    return this.currentPath.lineTo(t, e), this;
  }
  quadraticCurveTo(t, e, n, i) {
    return this.currentPath.quadraticCurveTo(t, e, n, i), this;
  }
  bezierCurveTo(t, e, n, i, r, a) {
    return this.currentPath.bezierCurveTo(t, e, n, i, r, a), this;
  }
  splineThru(t) {
    return this.currentPath.splineThru(t), this;
  }
  toShapes(t) {
    function e(p) {
      const y = [];
      for (let x = 0, v = p.length; x < v; x++) {
        const E = p[x], b = new Yn();
        b.curves = E.curves, y.push(b);
      }
      return y;
    }
    function n(p, y) {
      const x = y.length;
      let v = !1;
      for (let E = x - 1, b = 0; b < x; E = b++) {
        let C = y[E], A = y[b], S = A.x - C.x, M = A.y - C.y;
        if (Math.abs(M) > Number.EPSILON) {
          if (M < 0 && (C = y[b], S = -S, A = y[E], M = -M), p.y < C.y || p.y > A.y) continue;
          if (p.y === C.y) {
            if (p.x === C.x) return !0;
          } else {
            const I = M * (p.x - C.x) - S * (p.y - C.y);
            if (I === 0) return !0;
            if (I < 0) continue;
            v = !v;
          }
        } else {
          if (p.y !== C.y) continue;
          if (A.x <= p.x && p.x <= C.x || C.x <= p.x && p.x <= A.x) return !0;
        }
      }
      return v;
    }
    const i = $n.isClockWise, r = this.subPaths;
    if (r.length === 0) return [];
    let a, o, c;
    const l = [];
    if (r.length === 1)
      return o = r[0], c = new Yn(), c.curves = o.curves, l.push(c), l;
    let h = !i(r[0].getPoints());
    h = t ? !h : h;
    const u = [], d = [];
    let f = [], m = 0, _;
    d[m] = void 0, f[m] = [];
    for (let p = 0, y = r.length; p < y; p++)
      o = r[p], _ = o.getPoints(), a = i(_), a = t ? !a : a, a ? (!h && d[m] && m++, d[m] = { s: new Yn(), p: _ }, d[m].s.curves = o.curves, h && m++, f[m] = []) : f[m].push({ h: o, p: _[0] });
    if (!d[0]) return e(r);
    if (d.length > 1) {
      let p = !1, y = 0;
      for (let x = 0, v = d.length; x < v; x++)
        u[x] = [];
      for (let x = 0, v = d.length; x < v; x++) {
        const E = f[x];
        for (let b = 0; b < E.length; b++) {
          const C = E[b];
          let A = !0;
          for (let S = 0; S < d.length; S++)
            n(C.p, d[S].p) && (x !== S && y++, A ? (A = !1, u[S].push(C)) : p = !0);
          A && u[x].push(C);
        }
      }
      y > 0 && p === !1 && (f = u);
    }
    let g;
    for (let p = 0, y = d.length; p < y; p++) {
      c = d[p].s, l.push(c), g = f[p];
      for (let x = 0, v = g.length; x < v; x++)
        c.holes.push(g[x].h);
    }
    return l;
  }
}
class qM extends Jn {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
class YM extends Rn {
  // @deprecated, r162
  constructor(t = 1, e = 1, n = 1, i = {}) {
    console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'), super(t, e, { ...i, count: n }), this.isWebGLMultipleRenderTargets = !0;
  }
  get texture() {
    return this.textures;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: "170"
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "170");
const Cp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACESFilmicToneMapping: rf,
  AddEquation: bi,
  AddOperation: tf,
  AdditiveAnimationBlendMode: Zl,
  AdditiveBlending: xl,
  AgXToneMapping: of,
  AlphaFormat: Gl,
  AlwaysCompare: Sf,
  AlwaysDepth: ro,
  AlwaysStencilFunc: Sl,
  AmbientLight: gp,
  AnimationAction: wp,
  AnimationClip: zr,
  AnimationLoader: Zy,
  AnimationMixer: wM,
  AnimationObjectGroup: SM,
  AnimationUtils: Xy,
  ArcCurve: Yf,
  ArrayCamera: Of,
  ArrowHelper: GM,
  AttachedBindMode: Ml,
  Audio: Sp,
  AudioAnalyser: dM,
  AudioContext: Eh,
  AudioListener: lM,
  AudioLoader: aM,
  AxesHelper: WM,
  BackSide: Ue,
  BasicDepthPacking: ff,
  BasicShadowMap: _l,
  BatchedMesh: Wf,
  Bone: ch,
  BooleanKeyframeTrack: cs,
  Box2: PM,
  Box3: we,
  Box3Helper: VM,
  BoxGeometry: ln,
  BoxHelper: kM,
  BufferAttribute: ae,
  BufferGeometry: Yt,
  BufferGeometryLoader: yp,
  ByteType: kl,
  Cache: ci,
  Camera: nc,
  CameraHelper: zM,
  CanvasTexture: qr,
  CapsuleGeometry: dc,
  CatmullRomCurve3: uh,
  CineonToneMapping: sf,
  CircleGeometry: fc,
  ClampToEdgeWrapping: _n,
  Clock: Mp,
  Color: gt,
  ColorKeyframeTrack: yh,
  ColorManagement: Kt,
  CompressedArrayTexture: py,
  CompressedCubeTexture: my,
  CompressedTexture: lc,
  CompressedTextureLoader: Jy,
  ConeGeometry: Yr,
  ConstantAlphaFactor: Kd,
  ConstantColorFactor: Zd,
  Controls: qM,
  CubeCamera: Rf,
  CubeReflectionMapping: ui,
  CubeRefractionMapping: wi,
  CubeTexture: Wr,
  CubeTextureLoader: Ky,
  CubeUVReflectionMapping: Hs,
  CubicBezierCurve: dh,
  CubicBezierCurve3: $f,
  CubicInterpolant: hp,
  CullFaceBack: gl,
  CullFaceFront: Ud,
  CullFaceFrontBack: Xp,
  CullFaceNone: Dd,
  Curve: Ln,
  CurvePath: Jf,
  CustomBlending: Nd,
  CustomToneMapping: af,
  CylinderGeometry: Wn,
  Cylindrical: RM,
  Data3DTexture: Ql,
  DataArrayTexture: Qo,
  DataTexture: qn,
  DataTextureLoader: jy,
  DataUtils: sg,
  DecrementStencilOp: rm,
  DecrementWrapStencilOp: om,
  DefaultLoadingManager: fp,
  DepthFormat: ji,
  DepthStencilFormat: ss,
  DepthTexture: ih,
  DetachedBindMode: lf,
  DirectionalLight: Ho,
  DirectionalLightHelper: BM,
  DiscreteInterpolant: up,
  DodecahedronGeometry: pc,
  DoubleSide: gn,
  DstAlphaFactor: Wd,
  DstColorFactor: qd,
  DynamicCopyUsage: Sm,
  DynamicDrawUsage: gm,
  DynamicReadUsage: vm,
  EdgesGeometry: gh,
  EllipseCurve: hc,
  EqualCompare: xf,
  EqualDepth: oo,
  EqualStencilFunc: um,
  EquirectangularReflectionMapping: Er,
  EquirectangularRefractionMapping: Tr,
  Euler: hn,
  EventDispatcher: Jn,
  ExtrudeGeometry: Ys,
  FileLoader: fi,
  Float16BufferAttribute: hg,
  Float32BufferAttribute: Ct,
  FloatType: tn,
  Fog: ac,
  FogExp2: rc,
  FramebufferTexture: fy,
  FrontSide: Cn,
  Frustum: Xr,
  GLBufferAttribute: AM,
  GLSL1: wm,
  GLSL3: bl,
  GreaterCompare: vf,
  GreaterDepth: lo,
  GreaterEqualCompare: Mf,
  GreaterEqualDepth: co,
  GreaterEqualStencilFunc: mm,
  GreaterStencilFunc: fm,
  GridHelper: FM,
  Group: an,
  HalfFloatType: Gs,
  HemisphereLight: Sh,
  HemisphereLightHelper: NM,
  IcosahedronGeometry: gc,
  ImageBitmapLoader: rM,
  ImageLoader: kr,
  ImageUtils: Ef,
  IncrementStencilOp: sm,
  IncrementWrapStencilOp: am,
  InstancedBufferAttribute: ks,
  InstancedBufferGeometry: wh,
  InstancedInterleavedBuffer: Go,
  InstancedMesh: Gf,
  Int16BufferAttribute: cg,
  Int32BufferAttribute: lg,
  Int8BufferAttribute: rg,
  IntType: qo,
  InterleavedBuffer: oc,
  InterleavedBufferAttribute: on,
  Interpolant: Kr,
  InterpolateDiscrete: Cr,
  InterpolateLinear: Bo,
  InterpolateSmooth: Ja,
  InvertStencilOp: cm,
  KeepStencilOp: Gi,
  KeyframeTrack: Dn,
  LOD: Vf,
  LatheGeometry: qs,
  Layers: tc,
  LessCompare: _f,
  LessDepth: ao,
  LessEqualCompare: Jl,
  LessEqualDepth: es,
  LessEqualStencilFunc: dm,
  LessStencilFunc: hm,
  Light: Ci,
  LightProbe: vp,
  Line: Ei,
  Line3: Tp,
  LineBasicMaterial: Ve,
  LineCurve: fh,
  LineCurve3: Zf,
  LineDashedMaterial: op,
  LineLoop: Xf,
  LineSegments: In,
  LinearFilter: be,
  LinearInterpolant: vh,
  LinearMipMapLinearFilter: Zp,
  LinearMipMapNearestFilter: $p,
  LinearMipmapLinearFilter: An,
  LinearMipmapNearestFilter: gr,
  LinearSRGBColorSpace: os,
  LinearToneMapping: ef,
  LinearTransfer: Gr,
  Loader: en,
  LoaderUtils: Il,
  LoadingManager: Mh,
  LoopOnce: hf,
  LoopPingPong: df,
  LoopRepeat: uf,
  LuminanceAlphaFormat: ql,
  LuminanceFormat: Xl,
  MOUSE: Gp,
  Material: ke,
  MaterialLoader: Mc,
  MathUtils: jl,
  Matrix2: Rh,
  Matrix3: Vt,
  Matrix4: Ft,
  MaxEquation: zd,
  Mesh: qt,
  MeshBasicMaterial: xn,
  MeshDepthMaterial: sh,
  MeshDistanceMaterial: rh,
  MeshLambertMaterial: We,
  MeshMatcapMaterial: ap,
  MeshNormalMaterial: rp,
  MeshPhongMaterial: ip,
  MeshPhysicalMaterial: np,
  MeshStandardMaterial: _h,
  MeshToonMaterial: sp,
  MinEquation: Bd,
  MirroredRepeatWrapping: Ar,
  MixOperation: Qd,
  MultiplyBlending: yl,
  MultiplyOperation: Vr,
  NearestFilter: Ne,
  NearestMipMapLinearFilter: Yp,
  NearestMipMapNearestFilter: qp,
  NearestMipmapLinearFilter: Ps,
  NearestMipmapNearestFilter: zl,
  NeutralToneMapping: cf,
  NeverCompare: gf,
  NeverDepth: so,
  NeverStencilFunc: lm,
  NoBlending: li,
  NoColorSpace: ai,
  NoToneMapping: Xn,
  NormalAnimationBlendMode: jo,
  NormalBlending: Ki,
  NotEqualCompare: yf,
  NotEqualDepth: ho,
  NotEqualStencilFunc: pm,
  NumberKeyframeTrack: Or,
  Object3D: Qt,
  ObjectLoader: iM,
  ObjectSpaceNormalMap: mf,
  OctahedronGeometry: $r,
  OneFactor: Vd,
  OneMinusConstantAlphaFactor: jd,
  OneMinusConstantColorFactor: Jd,
  OneMinusDstAlphaFactor: Xd,
  OneMinusDstColorFactor: Yd,
  OneMinusSrcAlphaFactor: io,
  OneMinusSrcColorFactor: Gd,
  OrthographicCamera: ic,
  PCFShadowMap: Ol,
  PCFSoftShadowMap: Bl,
  PMREMGenerator: wl,
  Path: Dr,
  PerspectiveCamera: Re,
  Plane: Vn,
  PlaneGeometry: Pn,
  PlaneHelper: HM,
  PointLight: mp,
  PointLightHelper: DM,
  Points: qf,
  PointsMaterial: lh,
  PolarGridHelper: OM,
  PolyhedronGeometry: Ai,
  PositionalAudio: uM,
  PropertyBinding: te,
  PropertyMixer: bp,
  QuadraticBezierCurve: ph,
  QuadraticBezierCurve3: uc,
  Quaternion: Ze,
  QuaternionKeyframeTrack: jr,
  QuaternionLinearInterpolant: dp,
  RED_GREEN_RGTC2_Format: Fo,
  RED_RGTC1_Format: $l,
  REVISION: "170",
  RGBADepthPacking: pf,
  RGBAFormat: $e,
  RGBAIntegerFormat: Ko,
  RGBA_ASTC_10x10_Format: Po,
  RGBA_ASTC_10x5_Format: Ao,
  RGBA_ASTC_10x6_Format: Co,
  RGBA_ASTC_10x8_Format: Ro,
  RGBA_ASTC_12x10_Format: Io,
  RGBA_ASTC_12x12_Format: Lo,
  RGBA_ASTC_4x4_Format: vo,
  RGBA_ASTC_5x4_Format: yo,
  RGBA_ASTC_5x5_Format: Mo,
  RGBA_ASTC_6x5_Format: So,
  RGBA_ASTC_6x6_Format: bo,
  RGBA_ASTC_8x5_Format: wo,
  RGBA_ASTC_8x6_Format: Eo,
  RGBA_ASTC_8x8_Format: To,
  RGBA_BPTC_Format: Mr,
  RGBA_ETC2_EAC_Format: xo,
  RGBA_PVRTC_2BPPV1_Format: mo,
  RGBA_PVRTC_4BPPV1_Format: po,
  RGBA_S3TC_DXT1_Format: xr,
  RGBA_S3TC_DXT3_Format: vr,
  RGBA_S3TC_DXT5_Format: yr,
  RGBDepthPacking: tm,
  RGBFormat: Wl,
  RGBIntegerFormat: Jp,
  RGB_BPTC_SIGNED_Format: Do,
  RGB_BPTC_UNSIGNED_Format: Uo,
  RGB_ETC1_Format: go,
  RGB_ETC2_Format: _o,
  RGB_PVRTC_2BPPV1_Format: fo,
  RGB_PVRTC_4BPPV1_Format: uo,
  RGB_S3TC_DXT1_Format: _r,
  RGDepthPacking: em,
  RGFormat: Yl,
  RGIntegerFormat: Jo,
  RawShaderMaterial: ep,
  Ray: Ws,
  Raycaster: Ep,
  RectAreaLight: _p,
  RedFormat: Zo,
  RedIntegerFormat: Hr,
  ReinhardToneMapping: nf,
  RenderTarget: Tf,
  RepeatWrapping: ns,
  ReplaceStencilOp: im,
  ReverseSubtractEquation: Od,
  RingGeometry: _c,
  SIGNED_RED_GREEN_RGTC2_Format: Oo,
  SIGNED_RED_RGTC1_Format: No,
  SRGBColorSpace: Se,
  SRGBTransfer: re,
  Scene: ah,
  ShaderChunk: Xt,
  ShaderLib: Xe,
  ShaderMaterial: vn,
  ShadowMaterial: tp,
  Shape: Yn,
  ShapeGeometry: Zr,
  ShapePath: XM,
  ShapeUtils: $n,
  ShortType: Vl,
  Skeleton: cc,
  SkeletonHelper: LM,
  SkinnedMesh: Hf,
  Source: Zi,
  Sphere: Pe,
  SphereGeometry: as,
  Spherical: CM,
  SphericalHarmonics3: xp,
  SplineCurve: mh,
  SpotLight: pp,
  SpotLightHelper: IM,
  Sprite: kf,
  SpriteMaterial: oh,
  SrcAlphaFactor: no,
  SrcAlphaSaturateFactor: $d,
  SrcColorFactor: Hd,
  StaticCopyUsage: Mm,
  StaticDrawUsage: Pr,
  StaticReadUsage: xm,
  StereoCamera: oM,
  StreamCopyUsage: bm,
  StreamDrawUsage: _m,
  StreamReadUsage: ym,
  StringKeyframeTrack: ls,
  SubtractEquation: Fd,
  SubtractiveBlending: vl,
  TOUCH: Wp,
  TangentSpaceNormalMap: Ti,
  TetrahedronGeometry: xc,
  Texture: _e,
  TextureLoader: Qy,
  TextureUtils: Yv,
  TorusGeometry: Vs,
  TorusKnotGeometry: vc,
  Triangle: Qe,
  TriangleFanDrawMode: Qp,
  TriangleStripDrawMode: jp,
  TrianglesDrawMode: Kp,
  TubeGeometry: Jr,
  UVMapping: Xo,
  Uint16BufferAttribute: th,
  Uint32BufferAttribute: eh,
  Uint8BufferAttribute: ag,
  Uint8ClampedBufferAttribute: og,
  Uniform: Ch,
  UniformsGroup: TM,
  UniformsLib: pt,
  UniformsUtils: ec,
  UnsignedByteType: Zn,
  UnsignedInt248Type: is,
  UnsignedInt5999Type: Hl,
  UnsignedIntType: di,
  UnsignedShort4444Type: Yo,
  UnsignedShort5551Type: $o,
  UnsignedShortType: Os,
  VSMShadowMap: kn,
  Vector2: nt,
  Vector3: R,
  Vector4: Zt,
  VectorKeyframeTrack: Br,
  VideoTexture: dy,
  WebGL3DRenderTarget: $m,
  WebGLArrayRenderTarget: Ym,
  WebGLCoordinateSystem: Gn,
  WebGLCubeRenderTarget: Pf,
  WebGLMultipleRenderTargets: YM,
  WebGLRenderTarget: Rn,
  WebGLRenderer: Bf,
  WebGLUtils: Ff,
  WebGPUCoordinateSystem: Ir,
  WireframeGeometry: yc,
  WrapAroundEnding: Rr,
  ZeroCurvatureEnding: Yi,
  ZeroFactor: kd,
  ZeroSlopeEnding: $i,
  ZeroStencilOp: nm,
  createCanvasElement: wf
}, Symbol.toStringTag, { value: "Module" })), Md = new we(), qa = new R();
class Ph extends wh {
  constructor() {
    super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry";
    const t = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], n = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(n), this.setAttribute("position", new Ct(t, 3)), this.setAttribute("uv", new Ct(e, 2));
  }
  applyMatrix4(t) {
    const e = this.attributes.instanceStart, n = this.attributes.instanceEnd;
    return e !== void 0 && (e.applyMatrix4(t), n.applyMatrix4(t), e.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new Go(e, 6, 1);
    return this.setAttribute("instanceStart", new on(n, 3, 0)), this.setAttribute("instanceEnd", new on(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(t) {
    let e;
    t instanceof Float32Array ? e = t : Array.isArray(t) && (e = new Float32Array(t));
    const n = new Go(e, 6, 1);
    return this.setAttribute("instanceColorStart", new on(n, 3, 0)), this.setAttribute("instanceColorEnd", new on(n, 3, 3)), this;
  }
  fromWireframeGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromEdgesGeometry(t) {
    return this.setPositions(t.attributes.position.array), this;
  }
  fromMesh(t) {
    return this.fromWireframeGeometry(new yc(t.geometry)), this;
  }
  fromLineSegments(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new we());
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    t !== void 0 && e !== void 0 && (this.boundingBox.setFromBufferAttribute(t), Md.setFromBufferAttribute(e), this.boundingBox.union(Md));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pe()), this.boundingBox === null && this.computeBoundingBox();
    const t = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    if (t !== void 0 && e !== void 0) {
      const n = this.boundingSphere.center;
      this.boundingBox.getCenter(n);
      let i = 0;
      for (let r = 0, a = t.count; r < a; r++)
        qa.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(qa)), qa.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(qa));
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
  applyMatrix(t) {
    return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(t);
  }
}
pt.line = {
  worldUnits: { value: 1 },
  linewidth: { value: 1 },
  resolution: { value: new nt(1, 1) },
  dashOffset: { value: 0 },
  dashScale: { value: 1 },
  dashSize: { value: 1 },
  gapSize: { value: 1 }
  // todo FIX - maybe change to totalSize
};
Xe.line = {
  uniforms: ec.merge([
    pt.common,
    pt.fog,
    pt.line
  ]),
  vertexShader: (
    /* glsl */
    `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`
  ),
  fragmentShader: (
    /* glsl */
    `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`
  )
};
class Ih extends vn {
  static get type() {
    return "LineMaterial";
  }
  constructor(t) {
    super({
      uniforms: ec.clone(Xe.line.uniforms),
      vertexShader: Xe.line.vertexShader,
      fragmentShader: Xe.line.fragmentShader,
      clipping: !0
      // required for clipping support
    }), this.isLineMaterial = !0, this.setValues(t);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(t) {
    this.uniforms.diffuse.value = t;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(t) {
    t === !0 ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(t) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = t);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(t) {
    t === !0 !== this.dashed && (this.needsUpdate = !0), t === !0 ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(t) {
    this.uniforms.dashScale.value = t;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(t) {
    this.uniforms.dashSize.value = t;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(t) {
    this.uniforms.dashOffset.value = t;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(t) {
    this.uniforms.gapSize.value = t;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(t) {
    this.uniforms && (this.uniforms.opacity.value = t);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(t) {
    this.uniforms.resolution.value.copy(t);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(t) {
    this.defines && (t === !0 !== this.alphaToCoverage && (this.needsUpdate = !0), t === !0 ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
}
const dl = new Zt(), Sd = new R(), bd = new R(), Ie = new Zt(), Le = new Zt(), Nn = new Zt(), fl = new R(), pl = new Ft(), De = new Tp(), wd = new R(), Ya = new we(), $a = new Pe(), Fn = new Zt();
let Hn, ts;
function Ed(s, t, e) {
  return Fn.set(0, 0, -t, 1).applyMatrix4(s.projectionMatrix), Fn.multiplyScalar(1 / Fn.w), Fn.x = ts / e.width, Fn.y = ts / e.height, Fn.applyMatrix4(s.projectionMatrixInverse), Fn.multiplyScalar(1 / Fn.w), Math.abs(Math.max(Fn.x, Fn.y));
}
function $M(s, t) {
  const e = s.matrixWorld, n = s.geometry, i = n.attributes.instanceStart, r = n.attributes.instanceEnd, a = Math.min(n.instanceCount, i.count);
  for (let o = 0, c = a; o < c; o++) {
    De.start.fromBufferAttribute(i, o), De.end.fromBufferAttribute(r, o), De.applyMatrix4(e);
    const l = new R(), h = new R();
    Hn.distanceSqToSegment(De.start, De.end, h, l), h.distanceTo(l) < ts * 0.5 && t.push({
      point: h,
      pointOnLine: l,
      distance: Hn.origin.distanceTo(h),
      object: s,
      face: null,
      faceIndex: o,
      uv: null,
      uv1: null
    });
  }
}
function ZM(s, t, e) {
  const n = t.projectionMatrix, r = s.material.resolution, a = s.matrixWorld, o = s.geometry, c = o.attributes.instanceStart, l = o.attributes.instanceEnd, h = Math.min(o.instanceCount, c.count), u = -t.near;
  Hn.at(1, Nn), Nn.w = 1, Nn.applyMatrix4(t.matrixWorldInverse), Nn.applyMatrix4(n), Nn.multiplyScalar(1 / Nn.w), Nn.x *= r.x / 2, Nn.y *= r.y / 2, Nn.z = 0, fl.copy(Nn), pl.multiplyMatrices(t.matrixWorldInverse, a);
  for (let d = 0, f = h; d < f; d++) {
    if (Ie.fromBufferAttribute(c, d), Le.fromBufferAttribute(l, d), Ie.w = 1, Le.w = 1, Ie.applyMatrix4(pl), Le.applyMatrix4(pl), Ie.z > u && Le.z > u)
      continue;
    if (Ie.z > u) {
      const x = Ie.z - Le.z, v = (Ie.z - u) / x;
      Ie.lerp(Le, v);
    } else if (Le.z > u) {
      const x = Le.z - Ie.z, v = (Le.z - u) / x;
      Le.lerp(Ie, v);
    }
    Ie.applyMatrix4(n), Le.applyMatrix4(n), Ie.multiplyScalar(1 / Ie.w), Le.multiplyScalar(1 / Le.w), Ie.x *= r.x / 2, Ie.y *= r.y / 2, Le.x *= r.x / 2, Le.y *= r.y / 2, De.start.copy(Ie), De.start.z = 0, De.end.copy(Le), De.end.z = 0;
    const _ = De.closestPointToPointParameter(fl, !0);
    De.at(_, wd);
    const g = jl.lerp(Ie.z, Le.z, _), p = g >= -1 && g <= 1, y = fl.distanceTo(wd) < ts * 0.5;
    if (p && y) {
      De.start.fromBufferAttribute(c, d), De.end.fromBufferAttribute(l, d), De.start.applyMatrix4(a), De.end.applyMatrix4(a);
      const x = new R(), v = new R();
      Hn.distanceSqToSegment(De.start, De.end, v, x), e.push({
        point: v,
        pointOnLine: x,
        distance: Hn.origin.distanceTo(v),
        object: s,
        face: null,
        faceIndex: d,
        uv: null,
        uv1: null
      });
    }
  }
}
class Rp extends qt {
  constructor(t = new Ph(), e = new Ih({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLineSegments2 = !0, this.type = "LineSegments2";
  }
  // for backwards-compatibility, but could be a method of LineSegmentsGeometry...
  computeLineDistances() {
    const t = this.geometry, e = t.attributes.instanceStart, n = t.attributes.instanceEnd, i = new Float32Array(2 * e.count);
    for (let a = 0, o = 0, c = e.count; a < c; a++, o += 2)
      Sd.fromBufferAttribute(e, a), bd.fromBufferAttribute(n, a), i[o] = o === 0 ? 0 : i[o - 1], i[o + 1] = i[o] + Sd.distanceTo(bd);
    const r = new Go(i, 2, 1);
    return t.setAttribute("instanceDistanceStart", new on(r, 1, 0)), t.setAttribute("instanceDistanceEnd", new on(r, 1, 1)), this;
  }
  raycast(t, e) {
    const n = this.material.worldUnits, i = t.camera;
    i === null && !n && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
    const r = t.params.Line2 !== void 0 && t.params.Line2.threshold || 0;
    Hn = t.ray;
    const a = this.matrixWorld, o = this.geometry, c = this.material;
    ts = c.linewidth + r, o.boundingSphere === null && o.computeBoundingSphere(), $a.copy(o.boundingSphere).applyMatrix4(a);
    let l;
    if (n)
      l = ts * 0.5;
    else {
      const u = Math.max(i.near, $a.distanceToPoint(Hn.origin));
      l = Ed(i, u, c.resolution);
    }
    if ($a.radius += l, Hn.intersectsSphere($a) === !1)
      return;
    o.boundingBox === null && o.computeBoundingBox(), Ya.copy(o.boundingBox).applyMatrix4(a);
    let h;
    if (n)
      h = ts * 0.5;
    else {
      const u = Math.max(i.near, Ya.distanceToPoint(Hn.origin));
      h = Ed(i, u, c.resolution);
    }
    Ya.expandByScalar(h), Hn.intersectsBox(Ya) !== !1 && (n ? $M(this, e) : ZM(this, i, e));
  }
  onBeforeRender(t) {
    const e = this.material.uniforms;
    e && e.resolution && (t.getViewport(dl), this.material.uniforms.resolution.value.set(dl.z, dl.w));
  }
}
class Sc extends Ph {
  constructor() {
    super(), this.isLineGeometry = !0, this.type = "LineGeometry";
  }
  setPositions(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let i = 0; i < e; i += 3)
      n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
    return super.setPositions(n), this;
  }
  setColors(t) {
    const e = t.length - 3, n = new Float32Array(2 * e);
    for (let i = 0; i < e; i += 3)
      n[2 * i] = t[i], n[2 * i + 1] = t[i + 1], n[2 * i + 2] = t[i + 2], n[2 * i + 3] = t[i + 3], n[2 * i + 4] = t[i + 4], n[2 * i + 5] = t[i + 5];
    return super.setColors(n), this;
  }
  fromLine(t) {
    const e = t.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
}
class Pp extends Rp {
  constructor(t = new Sc(), e = new Ih({ color: Math.random() * 16777215 })) {
    super(t, e), this.isLine2 = !0, this.type = "Line2";
  }
}
const Ip = {
  name: "dark",
  desk: "#0A0D12",
  deskLine: "#121821",
  mat: "#101823",
  matGrid: "#1A2431",
  matGridMajor: "#243142",
  cover: "#0F1B2A",
  coverEdge: "#5B6879",
  paper: "#172435",
  paperEdge: "#22324A",
  paperGrid: "rgba(226,232,240,0.055)",
  ink: "#E2E8F0",
  inkSoft: "#AEB9C7",
  rule: "#45505E",
  accent: "#A7DAED",
  warm: "#F2C38B",
  red: "#F08A8A",
  fill: "#263850",
  hatch: "#C9D4E0"
}, JM = {
  name: "light",
  desk: "#C9D2DC",
  deskLine: "#BAC4CF",
  mat: "#DDE4EB",
  matGrid: "#C5CFDA",
  matGridMajor: "#AEBBC9",
  cover: "#1C2E45",
  coverEdge: "#3B4C61",
  paper: "#EEF3F8",
  paperEdge: "#D7DEE6",
  paperGrid: "rgba(28,46,69,0.07)",
  ink: "#16243A",
  inkSoft: "#4A5B70",
  rule: "#9AA8B8",
  accent: "#1F6E93",
  warm: "#B5651D",
  red: "#B23A3A",
  fill: "#F6F9FC",
  hatch: "#3A4E68"
};
let ja = Ip;
const KM = /* @__PURE__ */ new Set();
function ue() {
  return ja;
}
function ml(s) {
  ja = s === "light" ? JM : Ip, document.documentElement.dataset.dtTheme = ja.name;
  for (const t of KM) t(ja);
}
const de = {
  sans: '"SUIT Variable", "Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", system-ui, sans-serif',
  serif: '"Nanum Myeongjo", "AppleMyungjo", "Noto Serif KR", "Batang", serif',
  mono: '"Space Mono", ui-monospace, "SF Mono", "Menlo", "Consolas", monospace',
  hand: '"Nanum Pen Script", "Nanum Pen", "Gaegu", "Apple SD Gothic Neo", "Noto Sans KR", cursive'
}, Lp = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set(), Dl = new nt(1, 1);
function jM(s, t) {
  Dl.set(s, t);
  for (const e of Lp) e.resolution.copy(Dl);
}
function Lh(s, t = 1.6, e = {}) {
  const n = new Ih({ color: new gt(s), linewidth: t, worldUnits: !1, transparent: e.opacity !== void 0, opacity: e.opacity ?? 1, dashed: !!e.dashed, dashSize: e.dashSize ?? 0.4, gapSize: e.gapSize ?? 0.3 });
  return n.resolution.copy(Dl), Lp.add(n), n;
}
function Up({ color: s, hatch: t = !0 } = {}) {
  const e = ue(), n = new We({ color: new gt(s ?? e.fill) });
  return n.userData.uniforms = {
    uInk: { value: new gt(e.hatch) },
    uSpacing: { value: 9 },
    uHatch: { value: t ? 1 : 0 }
  }, n.onBeforeCompile = (i) => {
    Object.assign(i.uniforms, n.userData.uniforms), i.fragmentShader = i.fragmentShader.replace("#include <common>", `#include <common>
uniform vec3 uInk; uniform float uSpacing; uniform float uHatch;`).replace(
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
        #include <opaque_fragment>`
    );
  }, n.customProgramCacheKey = () => "dt-ink", Dp.add(n), n;
}
function pr(s, { opacity: t = 0.9 } = {}) {
  return new xn({ color: new gt(s ?? ue().accent), transparent: t < 1, opacity: t, toneMapped: !1 });
}
function Wo(s, { color: t, width: e = 1.6, threshold: n = 28 } = {}) {
  const i = new gh(s, n), r = new Ph().fromEdgesGeometry(i);
  i.dispose();
  const a = new Rp(r, Lh(t ?? ue().ink, e));
  return a.userData.isOutline = !0, a;
}
function Td(s, t = {}) {
  const e = new qt(s, t.glow ? pr(t.glow, t) : Up(t));
  return e.castShadow = t.shadow !== !1, e.receiveShadow = !t.glow, t.outline !== !1 && e.add(Wo(s, { color: t.lineColor, width: t.lineWidth })), e;
}
function QM() {
  const s = ue();
  for (const t of Dp) t.userData.uniforms.uInk.value.set(s.hatch);
}
const Ul = [];
function Us(s, t = {}) {
  window.parent && window.parent !== window && window.parent.postMessage({ source: "dorms-textbook", type: s, ...t }, "*");
}
function Qa(s, t, e) {
  if (typeof s != "string" || !/^[a-z0-9_-]{1,40}$/i.test(s)) throw new Error(`기록 이름은 영문·숫자·_-로 40자 이내여야 해요: ${s}`);
  const n = typeof t == "string" ? t.slice(0, 2e3) : JSON.stringify(t ?? null).slice(0, 2e3);
  Us("record", { key: s, value: n, page: e });
}
function Tn(s) {
  const t = String(s && s.message ? s.message : s).slice(0, 500);
  Ul.push(t), window.__dt && (window.__dt.errors = Ul.slice(-20)), Us("error", { message: t }), console.error("[도름스 교과서]", t);
}
function tS() {
  return Ul.slice();
}
function Ad(s, t, e, n, i) {
  const r = document.createElement("canvas");
  r.width = r.height = s;
  const a = r.getContext("2d");
  a.fillStyle = i, a.fillRect(0, 0, s, s);
  const o = s / t;
  for (let l = 0; l <= t; l++)
    a.strokeStyle = l % 5 === 0 ? n : e, a.lineWidth = l % 5 === 0 ? 2.5 : 1.2, a.beginPath(), a.moveTo(l * o, 0), a.lineTo(l * o, s), a.stroke(), a.beginPath(), a.moveTo(0, l * o), a.lineTo(s, l * o), a.stroke();
  const c = new qr(r);
  return c.colorSpace = Se, c.anisotropy = 4, c;
}
function Cd() {
  const s = ue(), t = document.createElement("canvas");
  t.width = 1024, t.height = 1024;
  const e = t.getContext("2d");
  e.fillStyle = s.desk, e.fillRect(0, 0, 1024, 1024);
  for (let i = 0; i < 260; i++) {
    e.strokeStyle = `rgba(255,255,255,${8e-3 + Math.random() * 0.018})`, e.lineWidth = 1 + Math.random() * 2;
    const r = Math.random() * 1024;
    e.beginPath(), e.moveTo(0, r), e.bezierCurveTo(300, r + 6, 700, r - 6, 1024, r + 2), e.stroke();
  }
  const n = new qr(t);
  return n.colorSpace = Se, n.wrapS = n.wrapT = ns, n.repeat.set(3, 3), n;
}
function eS(s) {
  const t = document.createElement("canvas");
  t.className = "dt-canvas", t.setAttribute("aria-hidden", "true"), s.append(t);
  const e = (navigator.hardwareConcurrency ?? 8) <= 4 || matchMedia("(max-width: 700px)").matches, n = new Bf({ canvas: t, antialias: !0, preserveDrawingBuffer: !0, powerPreference: "default" });
  n.outputColorSpace = Se, n.toneMapping = Xn, n.shadowMap.enabled = !0, n.shadowMap.type = Bl;
  const i = new ah(), r = new Re(32, 1, 1, 600), a = new R(0, 2, 1), o = new Sh(14674162, 658964, 1.5);
  i.add(o);
  const c = new Ho(16773599, 3.2);
  c.position.set(-38, 64, -30), c.castShadow = !0, c.shadow.mapSize.set(e ? 1024 : 2048, e ? 1024 : 2048), Object.assign(c.shadow.camera, { left: -40, right: 40, top: 32, bottom: -32, near: 10, far: 180 }), c.shadow.bias = -6e-4, c.shadow.normalBias = 0.04, c.shadow.radius = 4, i.add(c, c.target);
  const l = new Ho(12375018, 0.35);
  l.position.set(30, 30, 40), i.add(l);
  const h = new We({ map: Cd() }), u = new qt(new Pn(260, 200), h);
  u.rotation.x = -Math.PI / 2, u.receiveShadow = !0, i.add(u);
  const d = ue(), f = Ad(2048, 70, d.matGrid, d.matGridMajor, d.mat), m = new qt(new ln(76, 0.12, 54), new We({ map: f }));
  m.position.set(0, 0.06, 2), m.receiveShadow = !0, i.add(m);
  const _ = new an(), g = new xn({ colorWrite: !1, depthWrite: !1 });
  for (let U = 0; U < 2; U++) {
    const q = new qt(new ln(1.6, 0.3, 140), g);
    q.position.set(-14 + U * 34, 40, -10), q.castShadow = !0, _.add(q);
  }
  i.add(_);
  let p = !0, y = !1, x = !1, v = !0;
  const E = /* @__PURE__ */ new Set(), b = { frames: 0, slow: 0 };
  function C() {
    const U = s.getBoundingClientRect(), q = Math.max(1, Math.round(U.width)), V = Math.max(1, Math.round(U.height)), j = Math.min(window.devicePixelRatio || 1, e ? 1.5 : 2);
    n.setPixelRatio(j), n.setSize(q, V, !1), jM(q * j, V * j), r.aspect = q / V, r.updateProjectionMatrix(), N.onResize && N.onResize(q, V), M();
  }
  function A() {
    var V;
    if (y = !1, x || !v) return;
    const U = performance.now() / 1e3;
    let q = !1;
    for (const j of E)
      try {
        j(U) === !0 ? q = !0 : E.delete(j);
      } catch (G) {
        E.delete(j), Tn(G);
      }
    if (p || q) {
      p = !1, r.lookAt(a);
      const j = performance.now();
      n.render(i, r);
      const G = performance.now() - j;
      b.frames++, G > 28 && b.slow++, b.frames > 20 && b.slow / b.frames > 0.5 && n.shadowMap.type !== _l && (n.shadowMap.type = _l, c.shadow.mapSize.set(1024, 1024), (V = c.shadow.map) == null || V.dispose(), c.shadow.map = null, n.setPixelRatio(1), b.lowPower = !0), N.afterRender && N.afterRender(), window.__dt && (window.__dt.perf = { ...b, lastFrameMs: Math.round(G * 10) / 10 });
    }
    q && S();
  }
  function S() {
    !y && !x && (y = !0, requestAnimationFrame(A));
  }
  function M() {
    p = !0, S();
  }
  const I = new ResizeObserver(C);
  I.observe(s), document.addEventListener("visibilitychange", () => {
    v = !document.hidden, v && M();
  });
  const O = () => document.documentElement.dataset.dtStill === "1" || matchMedia("(prefers-reduced-motion: reduce)").matches, N = {
    THREE: Cp,
    renderer: n,
    scene: i,
    camera: r,
    target: a,
    canvas: t,
    sun: c,
    request: M,
    animate(U) {
      E.add(U), S();
    },
    /** tween: calls fn(t in 0..1 eased) for seconds; resolves when done. */
    tween(U, q, V = (j) => 1 - Math.pow(1 - j, 3)) {
      if (O() || U <= 0)
        return q(1), M(), Promise.resolve();
      const j = performance.now() / 1e3;
      return new Promise((G) => {
        N.animate((st) => {
          const dt = Math.min(1, (st - j) / U);
          return q(V(dt)), dt >= 1 ? (G(), !1) : !0;
        });
      });
    },
    moveCamera(U, q, V = 1.4) {
      const j = r.position.clone(), G = a.clone(), st = new R(...U), dt = new R(...q), Z = (ot) => ot < 0.5 ? 4 * ot * ot * ot : 1 - Math.pow(-2 * ot + 2, 3) / 2;
      return N.tween(V, (ot) => {
        r.position.lerpVectors(j, st, ot), a.lerpVectors(G, dt, ot);
      }, Z);
    },
    repaint() {
      const U = ue();
      h.map.dispose(), h.map = Cd(), h.needsUpdate = !0, m.material.map.dispose(), m.material.map = Ad(2048, 70, U.matGrid, U.matGridMajor, U.mat), m.material.needsUpdate = !0, o.color.set(U.name === "light" ? 16777215 : 14674162), o.intensity = U.name === "light" ? 1.6 : 1.5, M();
    },
    reduceMotion: O,
    lowEnd: e,
    perf: b,
    destroy() {
      x = !0, I.disconnect(), n.dispose();
    }
  };
  return C(), N;
}
const Ce = 1536, qe = 2048, Me = 380, fn = 1010, nS = 84, Rd = 268;
function iS(s, t) {
  const e = parseInt(s.slice(1), 16);
  return `rgba(${e >> 16 & 255},${e >> 8 & 255},${e & 255},${t})`;
}
function sS(s) {
  const t = [], e = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let n = 0;
  for (const i of String(s).matchAll(e)) {
    i.index > n && t.push({ t: s.slice(n, i.index), s: "n" });
    const r = i[0];
    t.push(r.startsWith("**") ? { t: r.slice(2, -2), s: "b" } : { t: r.slice(1, -1), s: "a" }), n = i.index + r.length;
  }
  return n < s.length && t.push({ t: s.slice(n), s: "n" }), t;
}
function Np(s, t, e = de.sans, n = 500) {
  return `${s === "b" ? 800 : s === "a" ? 750 : n} ${t}px ${e}`;
}
function rS(s, t, e, n, i, r) {
  const a = [];
  let o = [], c = 0;
  const l = () => {
    a.push(o), o = [], c = 0;
  };
  for (const h of sS(t)) {
    const u = h.t.split(/(\s+)/);
    for (const d of u) {
      if (!d) continue;
      if (/\n/.test(d)) {
        l();
        continue;
      }
      s.font = Np(h.s, n, i, r);
      const f = s.measureText(d).width;
      if (/^\s+$/.test(d)) {
        o.length && (o.push({ ...h, t: " ", w: f }), c += f);
        continue;
      }
      if (c + f > e && o.length) {
        for (; o.length && o[o.length - 1].t === " "; ) c -= o.pop().w;
        l();
      }
      if (f > e) {
        let m = "";
        for (const _ of d)
          s.measureText(m + _).width > e && m ? (o.push({ ...h, t: m, w: s.measureText(m).width }), l(), m = _) : m += _;
        if (m) {
          const _ = s.measureText(m).width;
          o.push({ ...h, t: m, w: _ }), c += _;
        }
      } else
        o.push({ ...h, t: d, w: f }), c += f;
    }
  }
  return o.length && l(), a;
}
function mn(s, t, e, n, i, { size: r = 40, lh: a = 1.6, color: o, base: c = de.sans, weight: l = 500, align: h = "left" } = {}) {
  const u = ue(), d = rS(s, t, i, r, c, l);
  let f = n;
  for (const m of d) {
    const _ = m.reduce((p, y) => p + y.w, 0);
    let g = h === "center" ? e + (i - _) / 2 : e;
    for (const p of m)
      s.font = Np(p.s, r, c, l), s.fillStyle = p.s === "a" ? u.accent : o ?? u.ink, s.fillText(p.t, g, f + r), g += p.w;
    f += r * a;
  }
  return f;
}
function Fp(s, t) {
  const e = ue();
  s.fillStyle = e.paper, s.fillRect(0, 0, Ce, qe);
  const n = t === "left" ? s.createLinearGradient(Ce, 0, Ce - 220, 0) : s.createLinearGradient(0, 0, 220, 0);
  n.addColorStop(0, "rgba(0,0,0,0.32)"), n.addColorStop(1, "rgba(0,0,0,0)"), s.fillStyle = n, s.fillRect(0, 0, Ce, qe), s.strokeStyle = e.paperGrid, s.lineWidth = 2;
  for (let a = 48; a < Ce; a += 48)
    s.beginPath(), s.moveTo(a, 0), s.lineTo(a, qe), s.stroke();
  for (let a = 48; a < qe; a += 48)
    s.beginPath(), s.moveTo(0, a), s.lineTo(Ce, a), s.stroke();
  s.strokeStyle = iS(e.ink, 0.55), s.lineWidth = 4;
  const i = 70, r = 54;
  for (const [a, o, c, l] of [[i, i, 1, 1], [Ce - i, i, -1, 1], [i, qe - i, 1, -1], [Ce - i, qe - i, -1, -1]])
    s.beginPath(), s.moveTo(a + c * r, o), s.lineTo(a, o), s.lineTo(a, o + l * r), s.stroke();
}
function Op(s, t, e) {
  const n = ue();
  s.font = `700 26px ${de.mono}`, s.fillStyle = n.inkSoft;
  const i = `${t.subject ?? ""}${t.unitName ? "  ·  " + t.unitName : ""}`.toUpperCase();
  if (e === "left") s.fillText(i, Me, 128);
  else {
    const r = s.measureText(t.title).width;
    s.font = `600 26px ${de.sans}`, s.fillText(t.title, Ce - 140 - Math.min(r, 900), 128);
  }
}
function Bp(s, t, e) {
  const n = ue();
  s.font = `700 30px ${de.mono}`, s.fillStyle = n.inkSoft;
  const i = String(t).padStart(2, "0");
  s.fillText(i, e === "left" ? 120 : Ce - 160, qe - 110);
}
function aS(s, t, e, n, i) {
  const r = ue();
  s.lineWidth = 4, s.strokeStyle = i ? r.accent : r.inkSoft, s.strokeRect(t, e, n, n), i === "picked" && (s.strokeStyle = r.accent, s.lineWidth = 7, s.beginPath(), s.moveTo(t + n * 0.18, e + n * 0.55), s.lineTo(t + n * 0.42, e + n * 0.8), s.lineTo(t + n * 0.86, e + n * 0.2), s.stroke());
}
function oS(s, t, e, n, i) {
  var d;
  const r = ue(), a = s.getContext("2d");
  Fp(a, "left"), Op(a, t, "left");
  const o = [];
  let c = 196;
  a.font = `800 26px ${de.mono}`, a.fillStyle = r.red, a.fillText(`${e.kicker ?? `${String(t.lessonNo ?? 1).padStart(2, "0")}-${String(n + 1).padStart(2, "0")}`}`, Me, c + 26), c += 52, c = mn(a, e.title, Me, c, fn, { size: 92, lh: 1.2, weight: 800 }) + 22;
  for (const f of e.body ?? []) c = mn(a, f, Me, c, fn, { size: 44, lh: 1.55 }) + 20;
  if (e.equation) {
    c += 10;
    const f = c, m = mn(a, e.equation.main, Me + 36, c + 30, fn - 72, { size: 62, lh: 1.3, base: de.serif, weight: 700, align: "center" }), _ = e.equation.note ? mn(a, e.equation.note, Me + 36, m + 4, fn - 72, { size: 28, lh: 1.5, color: r.inkSoft, align: "center" }) : m;
    a.strokeStyle = r.rule, a.lineWidth = 3, a.strokeRect(Me, f, fn, _ - f + 26), c = _ + 56;
  }
  if ((d = e.keywords) != null && d.length) {
    a.font = `800 28px ${de.mono}`, a.fillStyle = r.red, a.fillText("핵심 낱말", Me, c + 24), c += 46;
    for (const [f, m] of e.keywords) {
      a.font = `800 38px ${de.sans}`, a.fillStyle = r.ink;
      const _ = a.measureText(f).width;
      a.fillText(f, Me, c + 38), c = mn(a, m, Me + Math.min(_ + 26, 340), c, fn - Math.min(_ + 26, 340), { size: 37, lh: 1.45, color: r.inkSoft }) + 8;
    }
    c += 28;
  }
  const l = (f, m) => {
    if (a.font = `800 28px ${de.mono}`, a.fillStyle = r.red, a.fillText(m === "predict" ? "예측" : "확인", Me, c + 24), c += 46, c = mn(a, f.prompt ?? f.question, Me, c, fn, { size: 44, lh: 1.45, weight: 700 }) + 12, f.choices.forEach((_, g) => {
      const p = m === "predict" ? i.picked === g : i.checkPicked === g, y = c;
      aS(a, Me + 4, c + 10, 44, p ? "picked" : null);
      const x = mn(a, _, Me + 76, c, fn - 76, { size: 42, lh: 1.42, color: p ? r.ink : r.inkSoft });
      o.push({ id: `${m}:${g}`, x: Me - 10, y: y - 6, w: fn + 20, h: Math.max(64, x - y + 12) }), c = x + 10;
    }), m === "check" && i.checkResult) {
      const _ = i.checkResult === "good";
      c = mn(a, _ ? f.right ?? "맞았어요." : f.wrong ?? "다시 생각해 봐요. 그림 쪽을 다시 움직여 봐도 좋아요.", Me + 70, c, fn - 70, { size: 32, lh: 1.5, color: _ ? r.accent : r.warm }) + 8;
    }
    c += 24;
  };
  e.predict && l(e.predict, "predict"), e.check && l(e.check, "check");
  let h = null;
  if (e.flap) {
    const m = Math.min(Math.max(c + 12, 1300), qe - 230 - 300);
    h = { x: Me - 20, y: m, w: fn + 40, h: 300 }, a.font = `800 24px ${de.mono}`, a.fillStyle = r.red, a.fillText("왜 그럴까", Me, m + 40), mn(a, e.flap.answer, Me, m + 60, fn, { size: 37, lh: 1.45 }), o.push({ id: "flap", ...h });
  }
  let u = 420;
  a.save(), a.translate(nS, 0);
  for (const f of i.margin ?? e.margin ?? []) u = mn(a, f, 0, u, Rd, { size: 44, lh: 1.2, base: de.hand, weight: 600, color: r.accent }) + 8;
  if (e.challenge) {
    const f = qe - 560;
    a.font = `800 28px ${de.mono}`, a.fillStyle = r.red, a.fillText(i.challengeDone ? "도전 완료" : "도전", 0, f), mn(a, e.challenge, 0, f + 16, Rd, { size: 38, lh: 1.3, color: r.inkSoft, base: de.hand, weight: 600 });
  }
  return a.restore(), Bp(a, n * 2 + 2, "left"), { regions: o, flapRect: h };
}
function cS(s, t, e, n, i) {
  const r = ue(), a = s.getContext("2d");
  Fp(a, "right"), Op(a, t, "right");
  const o = qe - 330;
  e.caption && (a.font = `italic 600 34px ${de.sans}`, a.fillStyle = r.inkSoft, a.fillText(`그림 ${n + 1}  ${e.caption}`.slice(0, 60), 170, o)), e.task && mn(a, e.task, 170, o + 22, Ce - 360, { size: 44, lh: 1.4, weight: 700 }), i.stamped && (a.save(), a.translate(Ce - 300, 300), a.rotate(-0.16), a.strokeStyle = r.accent, a.lineWidth = 8, a.beginPath(), a.arc(0, 0, 120, 0, Math.PI * 2), a.stroke(), a.lineWidth = 3, a.beginPath(), a.arc(0, 0, 100, 0, Math.PI * 2), a.stroke(), a.font = `800 40px ${de.sans}`, a.fillStyle = r.accent, a.textAlign = "center", a.fillText("참 잘했어요", 0, 14), a.font = `700 20px ${de.mono}`, a.fillText("DORMS", 0, 52), a.restore()), Bp(a, n * 2 + 3, "right");
}
function lS(s, t) {
  const e = ue(), n = s.getContext("2d"), i = s.width, r = s.height;
  n.fillStyle = e.paperEdge, n.fillRect(0, 0, i, r), n.strokeStyle = e.accent, n.setLineDash([14, 10]), n.lineWidth = 4, n.strokeRect(10, 10, i - 20, r - 20), n.setLineDash([]), n.font = `800 26px ${de.mono}`, n.fillStyle = e.red, n.fillText("왜 그럴까?", 50, 70), n.font = `800 52px ${de.sans}`, n.fillStyle = e.ink, n.fillText(t.flap.label ?? "날개를 들춰 답을 확인해요", 50, 150), n.font = `500 30px ${de.sans}`, n.fillStyle = e.inkSoft, n.fillText(t.predict ? "예측을 먼저 하고 들춰 보세요." : "생각을 정리한 뒤 들춰 보세요.", 50, 205), n.font = `500 40px ${de.hand}`, n.fillStyle = e.accent, n.fillText("여기를 들춰요", i - 330, 95), n.strokeStyle = e.accent, n.lineWidth = 4, n.beginPath(), n.moveTo(i - 150, 120), n.lineTo(i - 90, 200), n.moveTo(i - 90, 200), n.lineTo(i - 128, 194), n.moveTo(i - 90, 200), n.lineTo(i - 96, 162), n.stroke();
}
const ye = 21, Xi = 28, Nl = 0.12, to = 0.35, hS = 1.2, mr = Nl + to + hS, zp = 2.9;
function cr(s) {
  const t = new qr(s);
  return t.colorSpace = Se, t.anisotropy = 8, t.generateMipmaps = !0, t.minFilter = An, t;
}
function Ns(s = Ce, t = qe) {
  const e = document.createElement("canvas");
  return e.width = s, e.height = t, e;
}
function eo(s) {
  return 0.32 * Math.sin(Math.PI * s / ye) - 0.95 * Math.exp(-s / 1.25);
}
function Pd(s) {
  const t = new Pn(ye, Xi, 56, 1);
  t.rotateX(-Math.PI / 2);
  const e = t.attributes.position;
  for (let n = 0; n < e.count; n++) {
    const i = e.getX(n), r = s === "left" ? ye / 2 - i : i + ye / 2;
    e.setX(n, s === "left" ? -r : r), e.setY(n, mr + eo(r));
  }
  return t.computeVertexNormals(), t;
}
function uS(s) {
  const { scene: t } = s, e = new an();
  t.add(e);
  const n = ue(), i = new We({ color: n.cover }), r = new qt(new ln(ye * 2 + 1.2, to, Xi + 1.2), i);
  r.position.set(0, Nl + to / 2, 0), r.castShadow = r.receiveShadow = !0, r.add(Wo(r.geometry, { color: n.coverEdge, width: 1.2 })), e.add(r);
  const a = new We({ color: n.paperEdge, emissive: new gt(n.paperEdge), emissiveIntensity: 0.35 });
  for (const A of [-1, 1]) {
    const S = new Yn(), M = Nl + to;
    S.moveTo(0, M);
    for (let N = 0; N <= 40; N++) {
      const U = ye * N / 40;
      S.lineTo(U, mr + eo(U) - 0.04);
    }
    S.lineTo(ye, M), S.lineTo(0, M);
    const I = new Ys(S, { depth: Xi - 0.3, bevelEnabled: !1, curveSegments: 1 });
    I.translate(0, 0, -27.7 / 2), A < 0 && I.scale(-1, 1, 1);
    const O = new qt(I, a);
    O.castShadow = O.receiveShadow = !0, O.add(Wo(I, { color: n.rule, width: 1, threshold: 40 })), e.add(O);
  }
  const o = Ns(), c = Ns(), l = cr(o), h = cr(c), u = new We({ map: l }), d = new We({ map: h }), f = new qt(Pd("left"), u), m = new qt(Pd("right"), d);
  f.receiveShadow = m.receiveShadow = !0, f.userData.side = "left", m.userData.side = "right", e.add(f, m);
  const _ = new an();
  _.position.set(ye / 2, mr + 0.12, 0), e.add(_);
  let g = null;
  function p(A, S) {
    if (g && (e.remove(g.pivot), g.mesh.geometry.dispose(), g.mesh.material.map.dispose(), g = null), !A) return null;
    const M = A.w / Ce * ye, I = A.h / qe * Xi, O = -ye + A.x / Ce * ye, N = -Xi / 2 + A.y / qe * Xi, U = new an(), q = ye - A.x / Ce * ye - M / 2;
    U.position.set(O + M / 2, mr + eo(Math.max(q, 4)) + 0.05, N + I);
    const V = new Pn(M, I);
    V.rotateX(-Math.PI / 2), V.translate(0, 0, -I / 2);
    const j = cr(S), G = new qt(V, new We({ map: j, side: Cn }));
    G.castShadow = !0, G.receiveShadow = !0, G.userData.isFlap = !0;
    const st = new qt(V, new We({ color: ue().paperEdge, side: Ue }));
    return G.add(st), U.add(G), e.add(U), g = { pivot: U, mesh: G, open: !1 }, g;
  }
  function y(A) {
    if (!g) return Promise.resolve();
    const S = g.pivot.rotation.x, M = A ? zp : 0;
    return g.open = A, s.tween(0.6, (I) => {
      g.pivot.rotation.x = S + (M - S) * I;
    });
  }
  const x = new Pn(ye, Xi, 40, 1);
  x.rotateX(-Math.PI / 2), x.translate(ye / 2, 0, 0);
  const v = x.attributes.position.array.slice();
  function E(A, S) {
    const M = A.attributes.position;
    for (let I = 0; I < M.count; I++) {
      const O = v[I * 3], N = 0.55 * Math.sin(S) * (O / ye), U = S + N;
      M.setX(I, O * Math.cos(U)), M.setY(I, mr + 0.08 + O * Math.sin(U) + eo(O) * Math.cos(S) * 0.6), M.setZ(I, v[I * 3 + 2]);
    }
    M.needsUpdate = !0, A.computeVertexNormals();
  }
  async function b(A, S, M, I = 0.95) {
    const O = x.clone(), N = cr(S), U = cr(M);
    U.wrapS = ns, U.repeat.x = -1, U.offset.x = 1;
    const q = new qt(O, new We({ map: N, side: Cn })), V = new qt(O, new We({ map: U, side: Ue }));
    q.castShadow = V.castShadow = !0, e.add(q, V);
    const j = A > 0 ? 0 : Math.PI, G = A > 0 ? Math.PI : 0;
    E(O, j), await s.tween(I, (st) => E(O, j + (G - j) * st), (st) => st < 0.5 ? 2 * st * st : 1 - Math.pow(-2 * st + 2, 2) / 2), e.remove(q, V), O.dispose(), N.dispose(), U.dispose(), q.material.dispose(), V.material.dispose(), s.request();
  }
  function C() {
    const A = ue();
    i.color.set(A.cover), a.color.set(A.paperEdge);
  }
  return {
    group: e,
    stage: _,
    left: f,
    right: m,
    leftCanvas: o,
    rightCanvas: c,
    refresh(A) {
      (A === "left" ? l : h).needsUpdate = !0, s.request();
    },
    setFlap: p,
    openFlap: y,
    get flap() {
      return g;
    },
    turn: b,
    repaint: C,
    /** canvas pixel under a ray hit on a page */
    pixelOf(A) {
      return { x: A.uv.x * Ce, y: (1 - A.uv.y) * qe };
    }
  };
}
const Za = { objects: 300, samples: 1500, surfaceGrid: 96 };
function Fl(s, t = 3) {
  if (!Number.isFinite(s)) return "정의되지 않음";
  const e = Number(s.toFixed(t));
  return (Object.is(e, -0) ? 0 : e).toLocaleString("ko-KR", { maximumFractionDigits: t });
}
function zn(s) {
  const t = ue();
  return { accent: t.accent, ink: t.ink, soft: t.inkSoft, warm: t.warm, red: t.red, fill: t.fill }[s] ?? s;
}
function ri(s) {
  return Array.isArray(s) ? new R(s[0], s[1] ?? 0, s[2] ?? 0) : new R(s.x, s.y ?? 0, s.z ?? 0);
}
function lr(s, { color: t = "accent", width: e = 2.6, dashed: n = !1, opacity: i } = {}) {
  const r = new Sc();
  r.setPositions(s.flatMap((o) => [o.x, o.y, o.z]));
  const a = new Pp(r, Lh(zn(t), e, { dashed: n, opacity: i, dashSize: 0.35, gapSize: 0.25 }));
  return n && a.computeLineDistances(), a;
}
function hr(s, t) {
  s.geometry.dispose();
  const e = new Sc();
  e.setPositions(t.flatMap((n) => [n.x, n.y, n.z])), s.geometry = e, s.material.dashed && s.computeLineDistances();
}
function dS(s) {
  var x, v;
  const t = ue(), e = 1024, n = Math.round(1024 * (s.height / s.width)), i = document.createElement("canvas");
  i.width = e, i.height = n;
  const r = i.getContext("2d");
  r.fillStyle = t.paper, r.fillRect(0, 0, e, n);
  const a = 70, o = (e - a * 2) / (s.x[1] - s.x[0]), c = (n - a * 2) / (s.y[1] - s.y[0]), l = (E) => a + (E - s.x[0]) * o, h = (E) => n - a - (E - s.y[0]) * c, u = (E) => {
    const b = E / 8, C = Math.pow(10, Math.floor(Math.log10(b))), A = b / C;
    return (A < 1.5 ? 1 : A < 3.5 ? 2 : A < 7.5 ? 5 : 10) * C;
  }, d = ((x = s.step) == null ? void 0 : x[0]) ?? u(s.x[1] - s.x[0]), f = ((v = s.step) == null ? void 0 : v[1]) ?? u(s.y[1] - s.y[0]);
  r.strokeStyle = t.paperGrid.replace(/[\d.]+\)$/, "0.12)"), r.lineWidth = 2;
  for (let E = Math.ceil(s.x[0] / d) * d; E <= s.x[1] + 1e-9; E += d)
    r.beginPath(), r.moveTo(l(E), a), r.lineTo(l(E), n - a), r.stroke();
  for (let E = Math.ceil(s.y[0] / f) * f; E <= s.y[1] + 1e-9; E += f)
    r.beginPath(), r.moveTo(a, h(E)), r.lineTo(e - a, h(E)), r.stroke();
  r.strokeStyle = t.inkSoft, r.lineWidth = 4, s.x[0] <= 0 && s.x[1] >= 0 && (r.beginPath(), r.moveTo(l(0), a - 10), r.lineTo(l(0), n - a + 10), r.stroke()), s.y[0] <= 0 && s.y[1] >= 0 && (r.beginPath(), r.moveTo(a - 10, h(0)), r.lineTo(e - a + 10, h(0)), r.stroke()), r.font = `700 28px ${de.mono}`, r.fillStyle = t.inkSoft, r.textAlign = "center";
  const m = Math.min(Math.max(0, s.y[0]), s.y[1]);
  for (let E = Math.ceil(s.x[0] / d) * d; E <= s.x[1] + 1e-9; E += d) Math.abs(E) > 1e-9 && r.fillText(Fl(E), l(E), h(m) + 40);
  r.textAlign = "right";
  const _ = Math.min(Math.max(0, s.x[0]), s.x[1]);
  for (let E = Math.ceil(s.y[0] / f) * f; E <= s.y[1] + 1e-9; E += f) Math.abs(E) > 1e-9 && r.fillText(Fl(E), l(_) - 14, h(E) + 10);
  s.title && (r.textAlign = "left", r.font = `800 34px ${de.sans}`, r.fillStyle = t.ink, r.fillText(s.title, a, 50)), r.strokeStyle = t.ink, r.lineWidth = 5;
  const g = 40, p = 16;
  for (const [E, b, C, A] of [[p, p, 1, 1], [e - p, p, -1, 1], [p, n - p, 1, -1], [e - p, n - p, -1, -1]])
    r.beginPath(), r.moveTo(E + C * g, b), r.lineTo(E, b), r.lineTo(E, b + A * g), r.stroke();
  const y = new qr(i);
  return y.colorSpace = Se, y.anisotropy = 8, { texture: y, pad: a / e };
}
function fS(s) {
  const { world: t, book: e, ui: n, spreadIndex: i } = s, r = e.stage, a = [], o = [], c = [];
  let l = 0;
  function h(y, x) {
    if (++l > Za.objects) throw new Error(`그림 쪽 부품이 너무 많아요(최대 ${Za.objects}개).`);
    return x && y.position.copy(ri(x)), r.add(y), t.request(), y;
  }
  const u = (y, x = {}) => h(Td(y, x), x.at), d = {
    THREE: Cp,
    fmt: Fl,
    stage: r,
    palette: ue,
    /** any geometry drawn in ink: { at:[x,y,z], color, glow, outline:false, shadow:false } */
    ink: (y, x) => u(y, x),
    box: (y, x, v, E = {}) => {
      const b = new ln(y, x, v);
      return b.translate(0, x / 2, 0), u(b, E);
    },
    cylinder: (y, x, v, E = {}) => {
      const b = new Wn(y, x, v, E.segments ?? 48, 1, !!E.open);
      return b.translate(0, v / 2, 0), u(b, { ...E, outline: E.outline ?? !0 });
    },
    sphere: (y, x = {}) => {
      const v = new as(y, 40, 24);
      return v.translate(0, y, 0), u(v, { ...x, outline: !1 });
    },
    cone: (y, x, v = {}) => {
      const E = new Yr(y, x, 40);
      return E.translate(0, x / 2, 0), u(E, v);
    },
    torus: (y, x, v = {}) => u(new Vs(y, x, 20, 64), { ...v, outline: !1 }),
    tube(y, x = 0.15, v = {}) {
      const E = new uh(y.map(ri));
      return u(new Jr(E, Math.min(400, y.length * 8), x, 10, !1), { ...v, outline: !1 });
    },
    lathe(y, x = {}) {
      return u(new qs(y.map(([v, E]) => new nt(v, E)), 48), { ...x, outline: !1 });
    },
    extrude(y, x, v = {}) {
      const E = new Yn(y.map(([C, A]) => new nt(C, A))), b = new Ys(E, { depth: x, bevelEnabled: !1 });
      return u(b, v);
    },
    /** glowing line in space (energy path, ray, vector) */
    line(y, x = {}) {
      const v = h(lr(y.map(ri), x));
      return { update(E) {
        hr(v, E.map(ri)), t.request();
      }, set visible(E) {
        v.visible = E, t.request();
      } };
    },
    /** a glass with a glowing fill; .level = 0..1 animates the fill */
    jar({ at: y = [0, 0, 0], radius: x = 1, height: v = 3, color: E = "accent", level: b = 0 } = {}) {
      const C = new an(), A = new qt(new Wn(x, x, v, 40, 1, !0), new We({ color: zn("fill"), transparent: !0, opacity: 0.18, side: gn, depthWrite: !1 }));
      A.position.y = v / 2;
      for (const O of [0, v]) {
        const N = new qt(new Vs(x, 0.035, 6, 48), new xn({ color: zn("ink") }));
        N.rotation.x = Math.PI / 2, N.position.y = O - v / 2, A.add(N);
      }
      for (const O of [-1, 1]) {
        const N = new qt(new Wn(0.03, 0.03, v, 6), new xn({ color: zn("ink") }));
        N.position.x = O * x, A.add(N), N.userData.silhouette = !0;
      }
      const S = new Wn(x * 0.9, x * 0.9, 1, 32);
      S.translate(0, 0.5, 0);
      const M = new qt(S, pr(zn(E), { opacity: 0.85 }));
      M.scale.y = Math.max(1e-3, b * v * 0.95), C.add(A, M), h(C, y);
      let I = b;
      return {
        group: C,
        get level() {
          return I;
        },
        set level(O) {
          const N = I, U = Math.min(1, Math.max(0, O));
          I = U, t.tween(0.6, (q) => {
            M.scale.y = Math.max(1e-3, (N + (U - N) * q) * v * 0.95);
          });
        }
      };
    },
    /** an arc of light travelling from a to b (energy moving between stores) */
    flow(y, x, { color: v = "accent", height: E = 2.5, seconds: b = 1.2 } = {}) {
      const C = ri(y), A = ri(x), S = C.clone().add(A).multiplyScalar(0.5);
      S.y += E;
      const I = new uc(C, S, A).getPoints(48), O = h(lr(I.slice(0, 2), { color: v, width: 6 }));
      return t.tween(b, (N) => {
        const U = Math.max(2, Math.round(N * I.length));
        hr(O, I.slice(Math.max(0, U - 18), U));
      }).then(() => {
        r.remove(O), t.request();
      });
    },
    /** standing graph card: { at:[x,z], width, height, x:[a,b], y:[c,d], title } */
    board(y = {}) {
      const x = { at: [0, -4], width: 15, height: 10, x: [-5, 5], y: [-3, 3], ...y }, v = new an(), { texture: E, pad: b } = dS(x), C = new ln(x.width, x.height, 0.12), A = new We({ map: E }), S = Up({ hatch: !1 }), M = new qt(C, [S, S, S, S, A, S]);
      M.position.y = x.height / 2 + 0.6, M.castShadow = !0, M.receiveShadow = !0, M.add(Wo(C, { color: zn("ink"), width: 1.4 })), v.add(M);
      for (const Z of [-1, 1]) {
        const ot = Td(new ln(1.6, 0.6, 1.4), {});
        ot.position.set(Z * (x.width / 2 - 1.4), 0.3, 0), v.add(ot);
      }
      v.position.set(x.at[0], 0, x.at[1]), x.turn && (v.rotation.y = x.turn), h(v);
      const I = x.width * (1 - b * 2), O = x.height - x.width * b * 2, N = (Z) => -I / 2 + (Z - x.x[0]) / (x.x[1] - x.x[0]) * I, U = (Z) => 0.6 + x.height / 2 - O / 2 + (Z - x.y[0]) / (x.y[1] - x.y[0]) * O, q = 0.1, V = (Z, ot, Rt = q) => new R(N(Z), U(ot), Rt), j = (Z) => Number.isFinite(Z) && Z >= x.y[0] - 1e-9 && Z <= x.y[1] + 1e-9, G = (Z, ot, Rt, D) => {
        const k = [];
        for (let H = 0; H <= D; H++) {
          const X = ot + (Rt - ot) * H / D, Q = Z(X);
          j(Q) && k.push(V(X, Q));
        }
        return k;
      }, st = (Z, ot) => {
        const Rt = ot.x - Z.x, D = ot.y - Z.y, k = [];
        if (Math.abs(Rt) > 1e-12) for (const Q of x.x) {
          const at = (Q - Z.x) / Rt, ct = Z.y + at * D;
          ct >= x.y[0] - 1e-9 && ct <= x.y[1] + 1e-9 && k.push(at);
        }
        if (Math.abs(D) > 1e-12) for (const Q of x.y) {
          const at = (Q - Z.y) / D, ct = Z.x + at * Rt;
          ct >= x.x[0] - 1e-9 && ct <= x.x[1] + 1e-9 && k.push(at);
        }
        if (k.length < 2) return [V(Z.x, Z.y), V(ot.x, ot.y)];
        const H = Math.min(...k), X = Math.max(...k);
        return [V(Z.x + H * Rt, Z.y + H * D), V(Z.x + X * Rt, Z.y + X * D)];
      }, dt = {
        group: v,
        graph(Z, { color: ot = "accent", width: Rt = 3.2, samples: D = 360, from: k = x.x[0], to: H = x.x[1] } = {}) {
          D = Math.min(Za.samples, Math.max(16, D | 0));
          const X = G(Z, k, H, D);
          if (X.length < 2) throw new Error("그래프가 판 안에 보이지 않아요. x, y 범위를 확인해 주세요.");
          const Q = lr(X, { color: ot, width: Rt });
          M.parent.add(Q);
          const at = lr(X, { color: ot, width: Rt * 3, opacity: 0.18 });
          return M.parent.add(at), t.request(), { update(ct) {
            Z = ct;
            const Ut = G(ct, k, H, D);
            hr(Q, Ut), hr(at, Ut), t.request();
          } };
        },
        line(Z, ot, { color: Rt = "ink", width: D = 2.2, dashed: k = !1, extend: H = !1 } = {}) {
          const X = (at, ct) => H ? st(at, ct) : [V(at.x, at.y), V(ct.x, ct.y)], Q = lr(X(Z, ot), { color: Rt, width: D, dashed: k });
          return M.parent.add(Q), t.request(), { update(at, ct) {
            hr(Q, X(at, ct)), t.request();
          }, set visible(at) {
            Q.visible = at, t.request();
          } };
        },
        secant(Z, ot, Rt, D = {}) {
          const k = dt.line({ x: ot, y: Z(ot) }, { x: ot + Rt, y: Z(ot + Rt) }, { extend: !0, ...D });
          return { update(H, X, Q = Z) {
            Z = Q, k.update({ x: H, y: Z(H) }, { x: H + X, y: Z(H + X) });
          } };
        },
        tangent(Z, ot, { df: Rt, color: D = "warm", dashed: k = !0, width: H = 2.4 } = {}) {
          const X = (at) => Rt ? Rt(at) : (Z(at + 1e-5) - Z(at - 1e-5)) / 2e-5, Q = dt.line({ x: ot, y: Z(ot) }, { x: ot + 1, y: Z(ot) + X(ot) }, { extend: !0, color: D, dashed: k, width: H });
          return { slope: X, update(at) {
            Q.update({ x: at, y: Z(at) }, { x: at + 1, y: Z(at) + X(at) });
          } };
        },
        area(Z, ot, Rt, { g: D = () => 0, color: k = "accent", opacity: H = 0.3, samples: X = 120 } = {}) {
          const Q = (ct, Ut) => {
            const J = [];
            for (let L = 0; L <= X; L++) {
              const wt = ct + (Ut - ct) * L / X;
              J.push(new nt(N(wt), U(Math.min(x.y[1], Math.max(x.y[0], Z(wt))))));
            }
            for (let L = X; L >= 0; L--) {
              const wt = ct + (Ut - ct) * L / X;
              J.push(new nt(N(wt), U(Math.min(x.y[1], Math.max(x.y[0], D(wt))))));
            }
            const lt = new Zr(new Yn(J));
            return lt.translate(0, 0, 0.08), lt;
          }, at = new qt(Q(ot, Rt), pr(zn(k), { opacity: H }));
          return M.parent.add(at), t.request(), { update(ct, Ut, J = Z) {
            Z = J, at.geometry.dispose(), at.geometry = Q(ct, Ut), t.request();
          } };
        },
        point(Z, ot, { color: Rt = "accent", label: D, draggable: k } = {}) {
          const H = new qt(new as(0.26, 20, 14), pr(zn(Rt), { opacity: 1 }));
          H.position.copy(V(Z, ot, 0.3)), M.parent.add(H);
          const X = D ? d.label(D, [0, 0, 0], { tone: "accent" }) : null, Q = {
            x: Z,
            y: ot,
            move(at, ct) {
              Q.x = at, Q.y = ct, H.position.copy(V(at, ct, 0.3)), X && X.attach(H, [0.55, 0.55, 0]), t.request();
            },
            set label(at) {
              X && (X.text = at);
            }
          };
          return Q.move(Z, ot), k && o.push({
            mesh: H,
            plane: () => {
              const at = new R(0, 0, 1).applyQuaternion(M.getWorldQuaternion(new Ze()));
              return new Vn().setFromNormalAndCoplanarPoint(at, M.getWorldPosition(new R()).addScaledVector(at, 0.06));
            },
            drag(at) {
              const ct = M.parent.worldToLocal(at.clone()), Ut = x.x[0] + (ct.x + I / 2) / I * (x.x[1] - x.x[0]), J = x.y[0] + (ct.y - (0.6 + x.height / 2 - O / 2)) / O * (x.y[1] - x.y[0]), [lt, L] = k.constrain ? k.constrain(Ut, J) : [Ut, J];
              Q.move(lt, L);
              try {
                k.onDrag && k.onDrag(lt, L);
              } catch (wt) {
                Tn(wt);
              }
            }
          }), Q;
        },
        label(Z, ot, Rt, D = {}) {
          const k = d.label(Z, [0, 0, 0], D), H = new Qt();
          return H.position.copy(V(ot, Rt, 0.3)), M.parent.add(H), k.attach(H), k;
        }
      };
      return dt;
    },
    /** z = f(x, y) surface lying on the page: { x:[a,b], y:[c,d], size:12, height:4, at:[x,z] } */
    surface(y, { x = [-2, 2], y: v = [-2, 2], size: E = 12, height: b = 4, at: C = [0, 0], grid: A = 28, color: S = "accent" } = {}) {
      A = Math.min(Za.surfaceGrid, Math.max(8, A | 0));
      const M = new Pn(E, E, A, A);
      M.rotateX(-Math.PI / 2);
      const I = M.attributes.position;
      let O = 1 / 0, N = -1 / 0;
      const U = [];
      for (let st = 0; st < I.count; st++) {
        const dt = I.getX(st) / E + 0.5, Z = I.getZ(st) / E + 0.5, ot = y(x[0] + dt * (x[1] - x[0]), v[1] - Z * (v[1] - v[0]));
        U.push(ot), Number.isFinite(ot) && (O = Math.min(O, ot), N = Math.max(N, ot));
      }
      const q = N - O || 1;
      for (let st = 0; st < I.count; st++) I.setY(st, 0.8 + ((Number.isFinite(U[st]) ? U[st] : O) - O) / q * b);
      M.computeVertexNormals();
      const V = new qt(M, pr(zn(S), { opacity: 0.3 }));
      V.material.side = gn, V.material.depthWrite = !1;
      const j = new In(new yc(M), new Ve({ color: zn("ink"), transparent: !0, opacity: 0.28 })), G = new an();
      return G.add(V, j), G.position.set(C[0], 0, C[1]), h(G);
    },
    /** printed tag floating in the scene (crisp HTML text) */
    label(y, x, { tone: v = "note" } = {}) {
      const E = document.createElement("span");
      E.className = `dt-tag is-${v}`, E.textContent = String(y), n.labels.append(E);
      const b = { el: E, obj: null, offset: new R(), pos: ri(x) };
      return c.push(b), t.request(), {
        set text(C) {
          E.textContent = String(C);
        },
        move(C) {
          b.pos = ri(C), b.obj = null, t.request();
        },
        attach(C, A = [0, 0, 0]) {
          b.obj = C, b.offset = ri(A), t.request();
        }
      };
    },
    /** tap an object to run onTap; shows a dashed ring around it while selected */
    tappable(y, { name: x, onTap: v } = {}) {
      return a.push({ obj: y, name: x ?? "그림", onTap: v }), n.addA11yButton(x ?? "그림 누르기", () => d._tap(y)), y;
    },
    /** drag an object along the page: { axis: "x" | "z", min, max, onDrag } */
    drag(y, { axis: x = "x", min: v = -9, max: E = 9, onDrag: b } = {}) {
      return o.push({
        mesh: y,
        plane: () => new Vn(new R(0, 1, 0), -(r.getWorldPosition(new R()).y + 0.5)),
        drag(C) {
          const A = r.worldToLocal(C.clone()), S = Math.min(E, Math.max(v, x === "z" ? A.z : A.x));
          y.position[x] = S, t.request();
          try {
            b && b(S);
          } catch (M) {
            Tn(M);
          }
        }
      }), y;
    },
    slider(y) {
      return n.slider(y);
    },
    readout(y, x = "") {
      return n.readout(y, x);
    },
    margin(y) {
      s.setMargin(Array.isArray(y) ? y.map(String) : [String(y)]);
    },
    complete() {
      s.complete();
    },
    record(y, x) {
      Qa(y, x, i);
    },
    onFrame(y) {
      t.animate((x) => {
        try {
          return y(x) === !0;
        } catch (v) {
          return Tn(v), !1;
        }
      });
    },
    tween(y, x) {
      return t.tween(y, x);
    },
    wait(y) {
      return new Promise((x) => setTimeout(x, t.reduceMotion() ? 0 : y));
    },
    say(y) {
      n.caption(y);
    },
    /** move the camera, in page coordinates: view("page" | "close" | "low" | "spread") or ({ from:[x,y,z], look:[x,y,z] }) */
    view(y, x = 1.4) {
      return s.view(y, x);
    },
    _tap(y) {
      const x = a.find((v) => v.obj === y || f(y, v.obj));
      if (!x) return !1;
      s.select(x.obj);
      try {
        x.onTap && x.onTap();
      } catch (v) {
        Tn(v);
      }
      return !0;
    }
  };
  function f(y, x) {
    for (let v = y; v; v = v.parent) if (v === x) return !0;
    return !1;
  }
  function m(y, x) {
    const v = new R();
    for (const E of c) {
      E.obj ? E.obj.getWorldPosition(v).add(E.offset) : v.copy(E.pos).applyMatrix4(r.matrixWorld), v.project(t.camera);
      const b = (v.x * 0.5 + 0.5) * y, C = (-v.y * 0.5 + 0.5) * x;
      E.el.style.display = v.z > 1 || b < -60 || b > y + 60 || C < -30 || C > x + 30 ? "none" : "", E.el.style.transform = `translate(${b.toFixed(1)}px, ${C.toFixed(1)}px) translate(-50%, -50%)`;
    }
  }
  function _() {
    const y = r.children.slice();
    y.forEach((v) => {
      v.userData.baseScaleY = v.scale.y, v.scale.y = 1e-3;
    });
    const x = 0.6 / Math.max(1, y.length);
    return t.tween(t.reduceMotion() ? 0 : 0.9, (v) => {
      y.forEach((E, b) => {
        const C = Math.min(1, Math.max(0, v * 1.6 - b * x)), A = C <= 0 ? 1e-3 : 1 - Math.pow(1 - C, 3) + Math.sin(C * Math.PI) * 0.08;
        E.scale.y = Math.max(1e-3, E.userData.baseScaleY * A);
      });
    }, (v) => v);
  }
  function g() {
    const y = r.children.slice();
    return t.tween(t.reduceMotion() ? 0 : 0.35, (x) => y.forEach((v) => {
      v.scale.y = Math.max(1e-3, (v.userData.baseScaleY ?? 1) * (1 - x));
    }));
  }
  function p() {
    for (const y of c) y.el.remove();
    c.length = 0, a.length = 0, o.length = 0, r.traverse((y) => {
      y.geometry && y.geometry.dispose();
      const x = y.material;
      x && (Array.isArray(x) ? x : [x]).forEach((v) => {
        v.map && v.map.dispose(), v.dispose();
      });
    }), r.clear(), n.clearControls(), n.resetSceneButtons(), t.request();
  }
  return { S: d, tappables: a, draggables: o, placeLabels: m, rise: _, fold: g, clear: p };
}
const Id = {
  menu: '<path d="M5 7h14M5 12h14M5 17h9" />',
  prev: '<path d="M14.5 6.5 9 12l5.5 5.5" />',
  next: '<path d="M9.5 6.5 15 12l-5.5 5.5" />',
  play: '<path d="M8.5 6.2v11.6L18 12z" fill="currentColor" stroke="none" />',
  pause: '<path d="M9 6.5v11M15 6.5v11" />',
  still: '<circle cx="12" cy="12" r="7.5" /><path d="M9.5 9.5v5M14.5 9.5v5" />',
  contrast: '<circle cx="12" cy="12" r="7.5" /><path d="M12 4.5a7.5 7.5 0 0 1 0 15z" fill="currentColor" stroke="none" />',
  teacher: '<path d="M3.5 9.5 12 5.5l8.5 4-8.5 4z" /><path d="M7 11.5v4c1.5 1.4 3.2 2 5 2s3.5-.6 5-2v-4" /><path d="M20.5 9.5v5" />',
  pages: '<path d="M12 7c-2-1.4-4.6-1.8-7.5-1.5v12c2.9-.3 5.5.1 7.5 1.5 2-1.4 4.6-1.8 7.5-1.5v-12C16.6 5.2 14 5.6 12 7z" /><path d="M12 7v12" />',
  close: '<path d="m7 7 10 10M17 7 7 17" />',
  check: '<path d="m6 12.5 4 4 8-9" />'
};
function On(s, t = 22) {
  const e = Id[s] ?? Id.next;
  return `<svg class="dt-icon" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${e}</svg>`;
}
const pn = (s) => String(s).replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]), En = (s) => String(s ?? "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/`(.+?)`/g, "$1");
function pS(s, t, e) {
  s.insertAdjacentHTML("beforeend", `
    <div class="dt-labels" aria-hidden="true"></div>
    <div class="dt-controls" hidden></div>
    <div class="dt-bar" role="toolbar" aria-label="책 넘기기">
      <button type="button" class="dt-ibtn" data-act="menu" aria-label="목차" aria-expanded="false">${On("menu")}</button>
      <button type="button" class="dt-ibtn" data-act="prev" aria-label="이전 펼침">${On("prev")}</button>
      <button type="button" class="dt-ibtn" data-act="play" aria-label="시연 보기">${On("play")}</button>
      <div class="dt-bar-title" aria-live="polite"><span class="dt-bar-no"></span><span class="dt-bar-text"></span></div>
      <button type="button" class="dt-ibtn" data-act="next" aria-label="다음 펼침">${On("next")}</button>
      <span class="dt-bar-sep" aria-hidden="true"></span>
      <button type="button" class="dt-ibtn dt-only-narrow" data-act="side" aria-label="글 쪽 보기">${On("pages")}</button>
      <button type="button" class="dt-ibtn" data-act="still" aria-label="움직임 멈추기" aria-pressed="false">${On("still")}</button>
      <button type="button" class="dt-ibtn" data-act="theme" aria-label="밝은 책으로 바꾸기">${On("contrast")}</button>
      ${t.teacherNotes ? `<button type="button" class="dt-ibtn" data-act="teacher" aria-label="교사용 안내">${On("teacher")}</button>` : ""}
    </div>
    <nav class="dt-menu" hidden aria-label="목차"><ol></ol></nav>
    <aside class="dt-sheet" hidden aria-label="교사용 안내"><button type="button" class="dt-ibtn dt-sheet-close" aria-label="닫기">${On("close")}</button><div class="dt-sheet-body"></div></aside>
    <main class="dt-a11y dt-sr" aria-label="책 내용 글판"></main>
    <div class="dt-sr" aria-live="polite" data-live></div>`);
  const n = (_) => s.querySelector(_), i = n(".dt-bar"), r = n(".dt-menu"), a = n(".dt-sheet"), o = n(".dt-controls"), c = n(".dt-a11y"), l = n("[data-live]"), h = n(".dt-labels"), u = (_) => i.querySelector(`[data-act="${_}"]`);
  let d = null, f = "";
  t.spreads.forEach((_, g) => {
    const p = document.createElement("li");
    p.innerHTML = `<button type="button"><span class="dt-menu-no">${String(g + 1).padStart(2, "0")}</span><span>${pn(_.title)}</span></button>`, p.querySelector("button").addEventListener("click", () => {
      m(!1), e.go(g);
    }), r.querySelector("ol").append(p);
  });
  function m(_ = r.hidden) {
    r.hidden = !_, u("menu").setAttribute("aria-expanded", String(_));
  }
  return i.addEventListener("click", (_) => {
    const g = _.target.closest("button");
    if (!g) return;
    const p = g.dataset.act;
    if (p === "menu") m();
    else if (p === "prev") e.prev();
    else if (p === "next") e.next();
    else if (p === "play") e.play();
    else if (p === "side") e.side();
    else if (p === "still") {
      const y = g.getAttribute("aria-pressed") !== "true";
      g.setAttribute("aria-pressed", String(y)), e.still(y);
    } else p === "theme" ? e.theme() : p === "teacher" && (a.hidden = !1, a.querySelector(".dt-sheet-body").innerHTML = String(t.teacherNotes).split(/\n{2,}/).map((y) => `<p>${pn(En(y))}</p>`).join(""));
  }), a.querySelector(".dt-sheet-close").addEventListener("click", () => {
    a.hidden = !0;
  }), {
    labels: h,
    setSpread(_, g, p) {
      f = g.title, i.querySelector(".dt-bar-no").textContent = String(_ + 1), i.querySelector(".dt-bar-text").textContent = f, u("prev").disabled = _ === 0, u("next").disabled = _ === p - 1, u("play").hidden = !(g.shots && g.shots.length), [...r.querySelectorAll("li")].forEach((y, x) => y.classList.toggle("is-current", x === _)), l.textContent = `${_ + 1}번째 펼침, ${f}`;
    },
    playing(_) {
      const g = u("play");
      g.innerHTML = On(_ ? "pause" : "play"), g.setAttribute("aria-label", _ ? "시연 멈추기" : "시연 보기");
    },
    sideLabel(_) {
      u("side").setAttribute("aria-label", _ === "left" ? "그림 쪽 보기" : "글 쪽 보기");
    },
    themeLabel(_) {
      u("theme").setAttribute("aria-label", _ === "light" ? "어두운 책으로 바꾸기" : "밝은 책으로 바꾸기");
    },
    caption(_, g = 0) {
      const p = i.querySelector(".dt-bar-text");
      clearTimeout(d), p.textContent = _ || f, i.classList.toggle("is-caption", !!_), l.textContent = _ || "", _ && g && (d = setTimeout(() => {
        p.textContent = f, i.classList.remove("is-caption");
      }, g));
    },
    slider({ label: _ = "값", min: g = 0, max: p = 1, step: y = 0.01, value: x = g, format: v = (b) => String(b), onInput: E } = {}) {
      o.hidden = !1;
      const b = document.createElement("label");
      b.className = "dt-slider", b.innerHTML = `<span class="dt-slider-name">${pn(_)}</span><input type="range"><output class="dt-readout"></output>`;
      const C = b.querySelector("input"), A = b.querySelector("output");
      Object.assign(C, { min: String(g), max: String(p), step: String(y), value: String(x) });
      const S = () => {
        const M = Number(C.value);
        A.textContent = v(M), E && E(M);
      };
      return C.addEventListener("input", S), o.append(b), S(), { get value() {
        return Number(C.value);
      }, set value(M) {
        C.value = String(M), S();
      } };
    },
    readout(_, g) {
      o.hidden = !1;
      const p = document.createElement("div");
      p.className = "dt-meter", p.innerHTML = `<span>${pn(_)}</span><strong>${pn(g)}</strong>`, o.append(p);
      const y = p.querySelector("strong");
      return { set value(x) {
        y.textContent = typeof x == "number" ? x.toLocaleString("ko-KR", { maximumFractionDigits: 3 }) : String(x);
      } };
    },
    clearControls() {
      o.innerHTML = "", o.hidden = !0;
    },
    /** text version of the spread with real buttons for the same actions */
    renderText(_, g, p) {
      var v;
      const y = [];
      y.push(`<h1>${pn(En(_.title))}</h1>`);
      for (const E of _.body ?? []) y.push(`<p>${pn(En(E))}</p>`);
      _.equation && y.push(`<p>식: ${pn(En(_.equation.main))}${_.equation.note ? `, ${pn(En(_.equation.note))}` : ""}</p>`), (v = _.keywords) != null && v.length && y.push(`<dl>${_.keywords.map(([E, b]) => `<dt>${pn(E)}</dt><dd>${pn(En(b))}</dd>`).join("")}</dl>`), c.innerHTML = y.join("");
      const x = (E, b) => {
        const C = document.createElement("fieldset");
        C.innerHTML = `<legend>${b === "predict" ? "예측" : "확인"}: ${pn(En(E.prompt ?? E.question))}</legend>`, E.choices.forEach((A, S) => {
          const M = document.createElement("button");
          M.type = "button", M.textContent = En(A), M.setAttribute("aria-pressed", String((b === "predict" ? g.picked : g.checkPicked) === S)), M.addEventListener("click", () => p.choose(b, S)), C.append(M);
        }), c.append(C);
      };
      if (_.predict && x(_.predict, "predict"), _.check && x(_.check, "check"), _.flap) {
        const E = document.createElement("button");
        if (E.type = "button", E.textContent = g.flapOpen ? "날개 닫기" : "날개를 들춰 답 보기", E.addEventListener("click", () => p.flap()), c.append(E), g.flapOpen) {
          const b = document.createElement("p");
          b.textContent = `답: ${En(_.flap.answer)}`, c.append(b);
        }
      }
      if (_.caption) {
        const E = document.createElement("p");
        E.textContent = `그림: ${En(_.caption)}. ${En(_.task ?? "")}`, c.append(E);
      }
      this._a11yTail = document.createElement("div"), c.append(this._a11yTail);
      for (const [E, b] of this._sceneButtons ?? []) this._appendSceneButton(E, b);
    },
    resetSceneButtons() {
      this._sceneButtons = [], this._a11yTail && (this._a11yTail.innerHTML = "");
    },
    _appendSceneButton(_, g) {
      const p = document.createElement("button");
      p.type = "button", p.textContent = _, p.addEventListener("click", g), this._a11yTail.append(p);
    },
    addA11yButton(_, g) {
      (this._sceneButtons ?? (this._sceneButtons = [])).push([_, g]), this._a11yTail && this._appendSceneButton(_, g);
    },
    announce(_) {
      l.textContent = _;
    }
  };
}
const mS = /^[a-z0-9_-]{1,40}$/i, gS = /^\[?[0-9]{1,2}[^\]\s-]{1,14}-[0-9]{2}-[0-9]{2}(-[0-9]{2})?\]?$/, Ld = 900, Bn = { spreads: 12, choices: 5, titleMax: 40, body: 4 };
function Rs(s, t, e, n) {
  const i = Array.isArray(e) ? e.join(`
`) : e;
  n(typeof i == "string", `${s}의 ${t}는 글이어야 해요.`), typeof i == "string" && (n(i.length <= Ld, `${s}의 ${t}는 ${Ld}자 이내로 써 주세요(지금 ${i.length}자).`), n(!/—/.test(i), `${s}의 ${t}에 긴 줄표가 있어요. 쉼표나 마침표로 바꿔 주세요.`), n(!/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(i), `${s}의 ${t}에 이모지나 그림 문자가 있어요. 글로만 써 주세요.`));
}
function _S(s) {
  const t = [], e = (i, r) => {
    i || t.push(r);
  };
  if (!s || typeof s != "object") return ["book()에 차시 정보를 객체로 넘겨 주세요."];
  if (e(typeof s.title == "string" && s.title.trim().length > 0 && s.title.length <= Bn.titleMax, `title(차시 제목)은 1~${Bn.titleMax}자예요.`), e(typeof s.unitCode == "string" && /^[a-z0-9]+-[a-z0-9]+$/.test(s.unitCode), "unitCode(단원 코드)가 필요해요. get_curriculum 도구로 받은 코드를 그대로 넣어 주세요."), e(Array.isArray(s.standards) && s.standards.length > 0, "standards(성취기준 코드)가 비어 있어요. get_standards 도구로 받은 코드를 넣어 주세요."), Array.isArray(s.standards) && s.standards.forEach((i) => e(typeof i == "string" && gS.test(i), `성취기준 코드 모양이 이상해요: ${i} (예: 12미적Ⅰ-02-01)`)), e(Array.isArray(s.spreads) && s.spreads.length >= 1, "spreads(펼침)가 하나 이상 필요해요."), !Array.isArray(s.spreads)) return t;
  e(s.spreads.length <= Bn.spreads, `펼침은 ${Bn.spreads}개까지예요.`), s.teacherNotes !== void 0 && Rs("교사용 안내", "teacherNotes", s.teacherNotes, e);
  const n = /* @__PURE__ */ new Set();
  return s.spreads.forEach((i, r) => {
    var o;
    const a = `${r + 1}번째 펼침`;
    if (!i || typeof i != "object") {
      t.push(`${a}이 비어 있어요.`);
      return;
    }
    Rs(a, "title", i.title, e), e(typeof i.title == "string" && i.title.length <= Bn.titleMax, `${a}의 title은 ${Bn.titleMax}자 이내예요.`), e(typeof i.scene == "function", `${a}에 scene(S) 함수가 필요해요. 오른쪽 쪽에서 솟아오를 3D 그림을 여기서 만들어요.`), e(!i.body || Array.isArray(i.body) && i.body.length <= Bn.body, `${a}의 body는 문단 배열로, ${Bn.body}개까지예요.`);
    for (const c of i.body ?? []) Rs(a, "body", c, e);
    for (const c of ["caption", "task", "challenge"]) i[c] !== void 0 && Rs(a, c, i[c], e);
    i.equation && e(typeof i.equation.main == "string", `${a}의 equation.main이 필요해요.`), i.keywords && e(Array.isArray(i.keywords) && i.keywords.every((c) => Array.isArray(c) && c.length === 2), `${a}의 keywords는 [["낱말", "뜻"], …] 모양이에요.`);
    for (const c of ["predict", "check"]) {
      const l = i[c];
      l && (Rs(a, `${c}.${c === "predict" ? "prompt" : "question"}`, l.prompt ?? l.question, e), e(Array.isArray(l.choices) && l.choices.length >= 2 && l.choices.length <= Bn.choices, `${a}의 ${c}.choices는 2~${Bn.choices}개예요.`), c === "check" && e(Number.isInteger(l.answer) && l.answer >= 0 && l.answer < (((o = l.choices) == null ? void 0 : o.length) ?? 0), `${a}의 check.answer는 정답 보기의 번호(0부터)예요.`), l.record !== void 0 && (e(mS.test(l.record), `${a}의 ${c}.record 이름은 영문·숫자·_-로 40자 이내예요.`), e(!n.has(l.record), `record 이름 ${l.record}가 겹쳐요.`), n.add(l.record)));
    }
    i.flap && (e(typeof i.flap.answer == "string", `${a}의 flap.answer(날개 속 답)가 필요해요.`), typeof i.flap.answer == "string" && Rs(a, "flap.answer", i.flap.answer, e)), i.shots && (e(Array.isArray(i.shots) && i.shots.length <= 8, `${a}의 shots(시연)는 8개까지예요.`), (i.shots ?? []).forEach((c, l) => {
      e(typeof c.say == "string" && c.say.length <= 60, `${a} 시연 ${l + 1}의 say(자막)는 60자 이내 글이에요.`);
    }));
  }), t;
}
const xS = (s) => String(s).replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
function vS(s, t) {
  const e = typeof t == "string" ? document.querySelector(t) : t || document.getElementById("book") || document.body;
  window.__dt = window.__dt || { version: "2", ready: !1, errors: [], perf: {} };
  const n = _S(s);
  if (n.length)
    return window.__dt.invalid = n, e.innerHTML = `<section class="dt-invalid" role="alert"><h1>차시를 열 수 없어요</h1><ul>${n.map((D) => `<li>${xS(D)}</li>`).join("")}</ul></section>`, Us("invalid", { problems: n }), null;
  const i = new URLSearchParams(location.search), r = i.has("check");
  (r || i.get("still") === "1") && (document.documentElement.dataset.dtStill = "1"), i.get("theme") === "light" ? ml("light") : ml("dark"), e.classList.add("dt-root");
  const a = eS(e), o = uS(a), c = s.spreads, l = c.map(() => ({ picked: null, checkPicked: null, checkResult: null, flapOpen: !1, margin: null, challengeDone: !1, stamped: !1 }));
  let h = Math.min(c.length - 1, Math.max(0, Number(i.get("spread") ?? 0) | 0)), u = !1, d = "right", f = null, m = [], _ = null, g = 0;
  const p = pS(e, s, {
    go: (D) => q(D),
    prev: () => q(h - 1),
    next: () => q(h + 1),
    play: () => g ? j() : V(),
    side: () => {
      d = d === "right" ? "left" : "right", p.sideLabel(d), v(1);
    },
    still: (D) => {
      document.documentElement.dataset.dtStill = D ? "1" : "";
    },
    theme: () => {
      ml(ue().name === "dark" ? "light" : "dark"), p.themeLabel(ue().name), a.repaint(), o.repaint(), QM(), A(h), M(!1);
    }
  });
  function y() {
    return a.camera.aspect < 1.05;
  }
  function x(D, k, H) {
    const X = a.camera, Q = jl.degToRad(X.fov) / 2, at = Math.atan(Math.tan(Q) * X.aspect), ct = Math.atan2(H[1], H[2]), Ut = k * Math.sin(ct) + 2.5 * Math.cos(ct);
    return Math.max(D / 2 / Math.tan(at), Ut / 2 / Math.tan(Q)) * (X.aspect > 1.05 ? 1.1 : 1.02);
  }
  function v(D = 0) {
    const k = a.camera, H = new R(0, 0.62, 0.78).normalize();
    let X, Q, at;
    y() ? (k.fov = 36, Q = ye + 1.4, at = 29, X = new R(d === "right" ? ye / 2 : -ye / 2, 1.4, 1.2)) : (k.fov = 30, Q = ye * 2 + 2.5, at = 28 + 1.5, X = new R(0, 1.4, 1.6)), k.updateProjectionMatrix();
    const ct = x(Q, at, [0, H.y, H.z]), Ut = X.clone().addScaledVector(H, ct);
    return a.moveCamera([Ut.x, Ut.y, Ut.z], [X.x, X.y, X.z], D);
  }
  a.onResize = () => {
    u || v(0);
  };
  const E = () => o.stage.getWorldPosition(new R());
  function b(D, k = 1.4) {
    const H = E(), X = {
      spread: null,
      page: { from: [H.x, 34, H.z + 27], look: [H.x, 3, H.z + 1] },
      close: { from: [H.x + 4, 16, H.z + 17], look: [H.x, 4, H.z - 1] },
      low: { from: [H.x + 16, 7, H.z + 16], look: [H.x, 4, H.z - 1] },
      top: { from: [H.x, 46, H.z + 3], look: [H.x, 0, H.z] }
    };
    if (D === "spread" || D === void 0) return v(k);
    const Q = typeof D == "object" ? { from: [H.x + D.from[0], H.y + D.from[1], H.z + D.from[2]], look: [H.x + D.look[0], H.y + D.look[1], H.z + D.look[2]] } : X[D];
    return Q ? a.moveCamera(Q.from, Q.look, k) : v(k);
  }
  function C(D, k) {
    const H = Ns(Math.round(D.w), Math.round(D.h));
    return lS(H, k), H;
  }
  function A(D, { leftCanvas: k = o.leftCanvas, rightCanvas: H = o.rightCanvas, flap: X = !0 } = {}) {
    const Q = oS(k, s, c[D], D, l[D]);
    if (cS(H, s, c[D], D, l[D]), k === o.leftCanvas && (m = Q.regions, o.refresh("left"), X)) {
      const at = o.setFlap(Q.flapRect, Q.flapRect ? C(Q.flapRect, c[D]) : null);
      at && l[D].flapOpen && (at.pivot.rotation.x = zp);
    }
    return H === o.rightCanvas && o.refresh("right"), Q;
  }
  function S(D) {
    const k = Ns(D.width, D.height);
    return k.getContext("2d").drawImage(D, 0, 0), k;
  }
  function M(D = !0) {
    f && f.clear(), p.resetSceneButtons(), _ = null, f = fS({
      world: a,
      book: o,
      ui: p,
      spreadIndex: h,
      setMargin: (H) => {
        l[h].margin = H, A(h, { flap: !1 });
      },
      complete: () => O(),
      select: (H) => I(H),
      view: b
    });
    const k = c[h];
    p.renderText(k, l[h], { choose: N, flap: U });
    try {
      const H = k.scene(f.S);
      H && typeof H.then == "function" && H.catch(Tn);
    } catch (H) {
      Tn(H);
    }
    return a.afterRender = () => {
      if (!f) return;
      const H = e.getBoundingClientRect();
      f.placeLabels(H.width, H.height);
    }, D ? f.rise() : (a.request(), Promise.resolve());
  }
  function I(D) {
    _ && (o.stage.remove(_), _.geometry.dispose(), _ = null);
    const k = new we().setFromObject(D), H = o.stage.worldToLocal(k.getCenter(new R())), X = k.getSize(new R()), Q = Math.max(X.x, X.z) * 0.62 + 0.6, at = [];
    for (let Ut = 0; Ut <= 64; Ut++) {
      const J = Ut / 64 * Math.PI * 2;
      at.push(H.x + Math.cos(J) * Q, 0.06, H.z + Math.sin(J) * Q);
    }
    const ct = new Sc();
    ct.setPositions(at), _ = new Pp(ct, Lh(ue().ink, 1.6, { dashed: !0, dashSize: 0.5, gapSize: 0.35 })), _.computeLineDistances(), o.stage.add(_), a.request();
  }
  function O() {
    const D = l[h];
    D.stamped || (D.stamped = !0, D.challengeDone = !0, A(h, { flap: !1 }), p.announce("도장을 받았어요."), Us("complete", { spread: h }), c[h].challengeRecord && Qa(c[h].challengeRecord, "done", h));
  }
  function N(D, k) {
    const H = c[h], X = l[h], Q = H[D];
    Q && (D === "predict" ? (X.picked = k, p.caption("")) : (X.checkPicked = k, X.checkResult = k === Q.answer ? "good" : "retry", X.checkResult === "good" && Q.completes !== !1 && O()), Q.record && Qa(Q.record, Q.choices[k], h), A(h, { flap: !1 }), p.renderText(H, X, { choose: N, flap: U }), p.announce(D === "predict" ? `예측: ${Q.choices[k]}` : X.checkResult === "good" ? "맞았어요." : "다시 생각해 봐요."));
  }
  function U() {
    const D = c[h], k = l[h];
    if (D.flap) {
      if (D.predict && k.picked === null && !k.flapOpen) {
        p.caption("먼저 예측을 하나 골라 주세요.", 2600);
        return;
      }
      k.flapOpen = !k.flapOpen, o.openFlap(k.flapOpen), k.flapOpen && D.flap.record && Qa(D.flap.record, "opened", h), p.renderText(D, k, { choose: N, flap: U });
    }
  }
  async function q(D) {
    if (!(u || D < 0 || D >= c.length || D === h)) {
      u = !0, j();
      try {
        if (f && await f.fold(), f && f.clear(), f = null, o.setFlap(null), (D > h ? 1 : -1) > 0) {
          const H = S(o.rightCanvas), X = Ns();
          h = D, A(D, { leftCanvas: X, rightCanvas: o.rightCanvas }), await o.turn(1, H, X, a.reduceMotion() ? 0 : 0.95), A(D);
        } else {
          const H = S(o.leftCanvas), X = Ns();
          h = D, A(D, { leftCanvas: o.leftCanvas, rightCanvas: X }), await o.turn(-1, X, H, a.reduceMotion() ? 0 : 0.95), A(D);
        }
        p.setSpread(h, c[h], c.length), Us("spread", { index: h }), await M(!0);
      } catch (k) {
        Tn(k);
      } finally {
        u = !1;
      }
    }
  }
  async function V() {
    const D = c[h].shots ?? [];
    if (!D.length) return;
    const k = ++g;
    p.playing(!0);
    try {
      for (const H of D) {
        if (k !== g) return;
        p.caption(H.say);
        const X = [];
        H.view && X.push(b(H.view, H.seconds ?? 1.6)), H.run && X.push(Promise.resolve(H.run(f.S))), await Promise.all(X), await new Promise((Q) => setTimeout(Q, a.reduceMotion() ? 300 : H.hold ?? 1800));
      }
    } catch (H) {
      Tn(H);
    }
    k === g && j();
  }
  function j() {
    g && (g = 0, p.playing(!1), p.caption(""), v(1));
  }
  const G = new Ep(), st = new nt();
  let dt = null;
  function Z(D) {
    const k = a.canvas.getBoundingClientRect();
    st.set((D.clientX - k.left) / k.width * 2 - 1, -((D.clientY - k.top) / k.height) * 2 + 1), G.setFromCamera(st, a.camera);
  }
  a.canvas.addEventListener("pointerdown", (D) => {
    if (u || !f) return;
    Z(D);
    const k = f.draggables.map((ct) => ct.mesh), H = k.length ? G.intersectObjects(k, !0)[0] : null;
    if (H && (dt = f.draggables.find((ct) => ct.mesh === H.object || ct.mesh.getObjectById(H.object.id)), dt)) {
      a.canvas.setPointerCapture(D.pointerId), D.preventDefault();
      return;
    }
    const X = f.tappables.map((ct) => ct.obj), Q = X.length ? G.intersectObjects(X, !0)[0] : null;
    if (Q && f.S._tap(Q.object)) return;
    if (o.flap && G.intersectObject(o.flap.mesh, !1)[0]) {
      U();
      return;
    }
    const at = G.intersectObject(o.left, !1)[0];
    if (at) {
      const ct = o.pixelOf(at), Ut = m.find((J) => ct.x >= J.x && ct.x <= J.x + J.w && ct.y >= J.y && ct.y <= J.y + J.h);
      if (Ut) {
        const [J, lt] = Ut.id.split(":");
        J === "flap" ? U() : N(J, Number(lt));
        return;
      }
      y() && d === "right" && (d = "left", p.sideLabel(d), v(1));
    }
  }), a.canvas.addEventListener("pointermove", (D) => {
    if (!dt) {
      if (!f || u) return;
      Z(D);
      const H = [...f.tappables.map((Q) => Q.obj), ...f.draggables.map((Q) => Q.mesh)], X = H.length && G.intersectObjects(H, !0).length || o.flap && G.intersectObject(o.flap.mesh).length;
      a.canvas.style.cursor = X ? "pointer" : "";
      return;
    }
    Z(D);
    const k = new R();
    G.ray.intersectPlane(dt.plane(), k) && dt.drag(k);
  });
  const ot = () => {
    dt = null;
  };
  a.canvas.addEventListener("pointerup", ot), a.canvas.addEventListener("pointercancel", ot), window.addEventListener("keydown", (D) => {
    var k;
    D.target instanceof HTMLInputElement || (D.key === "ArrowRight" ? q(h + 1) : D.key === "ArrowLeft" ? q(h - 1) : D.key === " " && ((k = c[h].shots) != null && k.length) ? (D.preventDefault(), g ? j() : V()) : D.key === "Escape" && j());
  }), window.addEventListener("error", (D) => Tn(D.error || D.message)), window.addEventListener("unhandledrejection", (D) => Tn(D.reason)), A(h), p.setSpread(h, c[h], c.length), p.themeLabel(ue().name), v(0);
  const Rt = M(!r);
  return Object.assign(window.__dt, {
    ready: !0,
    title: s.title,
    unitCode: s.unitCode,
    standards: s.standards.slice(),
    spreads: c.length,
    get errors() {
      return tS();
    },
    /** jump without the page-turn animation (used by the checker) */
    async goTo(D) {
      return D < 0 || D >= c.length ? !1 : (j(), f && f.clear(), f = null, h = D, A(D), p.setSpread(D, c[D], c.length), await M(!1), a.request(), !0);
    },
    capture() {
      return a.renderer.render(a.scene, a.camera), a.canvas.toDataURL("image/jpeg", 0.82);
    },
    pageSize: [Ce, qe]
  }), Rt.then(() => Us("ready", { title: s.title, spreads: c.length })), { go: q };
}
const yS = "2.0.0";
export {
  vS as book,
  Fl as fmt,
  yS as version
};
