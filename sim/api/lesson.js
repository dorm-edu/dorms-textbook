import { fetchBundle } from "../lib/bundle.js";
import { FRAME_ANCESTORS } from "../lib/config.js";

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

function csp() {
  return [
    "default-src 'none'",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'none'",
    "media-src 'self' data: blob:",
    "base-uri 'none'",
    "form-action 'none'",
    `frame-ancestors ${FRAME_ANCESTORS.join(" ")}`,
  ].join("; ");
}

export default async function handler(req, res) {
  const url = new URL(req.url, "http://x");
  const id = url.searchParams.get("id") || "";
  const part = url.searchParams.get("part") === "js" ? "js" : "html";
  const got = await fetchBundle(id);
  if (got.status !== 200) {
    res.statusCode = got.status;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.setHeader("cache-control", "no-store");
    return res.end(got.status === 404 ? "차시를 찾을 수 없어요." : "차시를 불러오지 못했어요.");
  }
  // A version id never changes content, so the CDN can keep it for a long time.
  res.setHeader("cache-control", "public, max-age=30, s-maxage=60");
  res.setHeader("x-content-type-options", "nosniff");
  res.setHeader("referrer-policy", "no-referrer");
  if (part === "js") {
    res.setHeader("content-type", "text/javascript; charset=utf-8");
    res.setHeader("access-control-allow-origin", "*");
    return res.end(got.source);
  }
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.setHeader("content-security-policy", csp());
  res.setHeader("permissions-policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
  res.end(`<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(got.title)}</title><link rel="icon" href="data:,"><link rel="stylesheet" href="/engine/v2/dt-engine.css"></head>
<body><div id="book"></div><script type="module" src="/l/${id}/lesson.js"></script></body></html>`);
}
