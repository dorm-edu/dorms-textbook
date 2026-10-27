// Local stand-in for the Vercel deployment of the sim project (static engine + the three functions).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import lesson from "../api/lesson.js";
import check from "../api/check.js";
import harness from "../api/harness.js";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const port = Number(process.env.PORT || 5600);
const types = { ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".html": "text/html; charset=utf-8" };

http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  try {
    let m;
    if ((m = url.pathname.match(/^\/l\/([0-9a-f-]{36})\/lesson\.js$/))) { req.url = `/api/lesson?id=${m[1]}&part=js`; return await lesson(req, res); }
    if ((m = url.pathname.match(/^\/l\/([0-9a-f-]{36})$/))) { req.url = `/api/lesson?id=${m[1]}&part=html${url.search ? "&" + url.search.slice(1) : ""}`; return await lesson(req, res); }
    if (url.pathname === "/api/check") return await check(req, res);
    if (url.pathname === "/api/harness") return await harness(req, res);
    const file = path.join(root, "public", url.pathname === "/" ? "index.html" : url.pathname);
    if (!file.startsWith(path.join(root, "public")) || !fs.existsSync(file)) { res.statusCode = 404; return res.end("not found"); }
    res.setHeader("content-type", types[path.extname(file)] ?? "application/octet-stream");
    res.setHeader("access-control-allow-origin", "*");
    fs.createReadStream(file).pipe(res);
  } catch (e) {
    console.error(e); res.statusCode = 500; res.end(String(e));
  }
}).listen(port, "127.0.0.1", () => console.log(`sim local on http://127.0.0.1:${port}`));
