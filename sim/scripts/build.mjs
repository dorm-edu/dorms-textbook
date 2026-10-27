// Copies the built engine into public/engine/v1 so Vercel serves it from its CDN.
import fs from "node:fs";
import path from "node:path";
const here = path.dirname(new URL(import.meta.url).pathname);
const src = path.join(here, "..", "..", "engine", "dist", "v2");
const dst = path.join(here, "..", "public", "engine", "v2");
fs.mkdirSync(dst, { recursive: true });
for (const f of ["dt-engine.js", "dt-engine.css"]) {
  if (!fs.existsSync(path.join(src, f))) { console.error(`missing ${f}: run the engine build first`); process.exit(1); }
  fs.copyFileSync(path.join(src, f), path.join(dst, f));
}
console.log("engine copied", fs.statSync(path.join(dst, "dt-engine.js")).size);
