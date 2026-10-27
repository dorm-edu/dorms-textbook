// HMAC between DoRms and this project. Both sides share TEXTBOOK_SIM_SECRET; requests expire after 5 minutes.
import crypto from "node:crypto";

const WINDOW_MS = 5 * 60 * 1000;

function secret() {
  const s = process.env.TEXTBOOK_SIM_SECRET;
  if (!s || s.length < 32) throw new Error("TEXTBOOK_SIM_SECRET missing");
  return s;
}

export function sign(method, pathname, ts = Date.now()) {
  const mac = crypto.createHmac("sha256", secret()).update(`${method.toUpperCase()}\n${pathname}\n${ts}`).digest("hex");
  return { "x-dt-ts": String(ts), "x-dt-sig": mac };
}

export function verify(method, pathname, headers) {
  const ts = Number(headers["x-dt-ts"]);
  const sig = String(headers["x-dt-sig"] || "");
  if (!Number.isFinite(ts) || Math.abs(Date.now() - ts) > WINDOW_MS || !/^[0-9a-f]{64}$/.test(sig)) return false;
  const expect = crypto.createHmac("sha256", secret()).update(`${method.toUpperCase()}\n${pathname}\n${ts}`).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expect, "hex"), Buffer.from(sig, "hex"));
}
