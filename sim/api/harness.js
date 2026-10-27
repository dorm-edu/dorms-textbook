// Serves harness steps to the DoRms MCP server only (signed). The text is the platform's know-how;
// it is handed to a teacher's AI one step at a time.
import fs from "node:fs";
import path from "node:path";
import { verify } from "../lib/sign.js";

const DIR = path.join(process.cwd(), "harness");
const STEPS = new Set(["00-start", "01-intent", "02-design", "03-build", "04-verify", "05-submit", "06-feedback", "api"]);

export default function handler(req, res) {
  const url = new URL(req.url, "http://x");
  if (!verify("GET", url.pathname, req.headers)) { res.statusCode = 401; return res.end("unauthorized"); }
  const step = url.searchParams.get("step") || "00-start";
  if (!STEPS.has(step)) { res.statusCode = 404; return res.end("unknown step"); }
  const origin = process.env.SIM_SELF_ORIGIN || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || req.headers.host}`;
  const text = fs.readFileSync(path.join(DIR, `${step}.md`), "utf8").replaceAll("{{SIM}}", origin);
  res.setHeader("content-type", "text/markdown; charset=utf-8");
  res.setHeader("cache-control", "no-store");
  res.end(text);
}
