// Machine check of a submitted lesson in a real headless Chrome (WebGL via SwiftShader).
// Called by DoRms only (signed). No AI involved: errors, layout, every spread renders, canvas not blank.
import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer-core";
import { verify } from "../lib/sign.js";
import { VERSION_ID } from "../lib/config.js";

const VIEWPORTS = [
  { name: "wide", label: "넓은 화면", width: 1280, height: 800, mobile: false },
  { name: "phone", label: "휴대폰", width: 390, height: 844, mobile: true },
];

async function readBody(req) {
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
}

export default async function handler(req, res) {
  const url = new URL(req.url, "http://x");
  if (req.method !== "POST" || !verify("POST", url.pathname, req.headers)) { res.statusCode = 401; return res.end("unauthorized"); }
  const { versionId, shots: wantShots } = await readBody(req);
  if (!VERSION_ID.test(String(versionId))) { res.statusCode = 400; return res.end("bad id"); }
  const origin = process.env.SIM_SELF_ORIGIN || `https://${req.headers.host}`;
  const started = Date.now();
  const problems = [];
  const report = { spreads: 0, viewports: {}, thumbnail: null, shots: wantShots ? [] : undefined };
  let browser;
  try {
    browser = await puppeteer.launch(process.env.CHECK_CHROME_PATH
      ? { executablePath: process.env.CHECK_CHROME_PATH, headless: true, args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"], protocolTimeout: 40000 }
      : { args: chromium.args, executablePath: await chromium.executablePath(), headless: true, protocolTimeout: 40000 });
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.mobile, hasTouch: vp.mobile, deviceScaleFactor: 1 });
      const consoleErrors = [];
      page.on("pageerror", (e) => consoleErrors.push(String(e.message).slice(0, 300)));
      page.on("console", (m) => { if (m.type() !== "error") return; const t = m.text(); consoleErrors.push(/Failed to load resource/i.test(t) ? `불러오지 못한 파일이 있어요(${(m.location()?.url ?? "").slice(0, 120)})` : t.slice(0, 300)); });
      // 선생님 코드가 이 주소 밖으로 나가거나(요청·이동) 다른 화면으로 옮기면 막고 실패로 친다(보안 검토 M5).
      await page.setRequestInterception(true);
      const lessonPath = `/l/${versionId}`;
      page.on("request", (r) => {
        const u = r.url();
        const ok = u.startsWith(origin + "/") || u.startsWith("data:") || u.startsWith("blob:");
        const nav = r.isNavigationRequest() && r.frame() === page.mainFrame();
        if (!ok || (nav && !u.startsWith(origin + lessonPath))) { consoleErrors.push(`막은 요청·이동: ${u.slice(0, 120)}`); r.abort("blockedbyclient").catch(() => {}); return; }
        r.continue().catch(() => {});
      });
      // 검사 표식(?check=1)을 주지 않는다: 학생 화면과 똑같이 연다.
      await page.goto(`${origin}${lessonPath}`, { waitUntil: "load", timeout: 30000 });
      await page.waitForFunction(() => window.__dt && (window.__dt.ready || window.__dt.invalid), { timeout: 30000 }).catch(() => {});
      const state = await page.evaluate(() => ({ ready: !!window.__dt?.ready, invalid: window.__dt?.invalid ?? null, spreads: window.__dt?.spreads ?? 0 }));
      if (state.invalid) { problems.push(...state.invalid.map((m) => `정의 오류: ${m}`)); await page.close(); break; }
      if (!state.ready) { problems.push(`${vp.label}: 30초 안에 책이 열리지 않았어요.`, ...[...new Set(consoleErrors)].slice(0, 6).map((e) => `${vp.label} 오류: ${e}`)); await page.close(); continue; }
      report.spreads = state.spreads;
      const vpReport = [];
      for (let i = 0; i < state.spreads; i++) {
        await page.evaluate((n) => window.__dt.goTo(n), i);
        await new Promise((r) => setTimeout(r, 1400));
        const shot = await page.evaluate(() => {
          const url = window.__dt.capture();
          return url;
        });
        const stats = await page.evaluate(async (src) => {
          const img = new Image(); img.src = src; await img.decode();
          const c = document.createElement("canvas"); c.width = 96; c.height = 64;
          const g = c.getContext("2d"); g.drawImage(img, 0, 0, 96, 64);
          const d = g.getImageData(0, 0, 96, 64).data; let s = 0, s2 = 0, n = d.length / 4;
          for (let k = 0; k < d.length; k += 4) { const l = 0.3 * d[k] + 0.59 * d[k + 1] + 0.11 * d[k + 2]; s += l; s2 += l * l; }
          const mean = s / n; return { mean: Math.round(mean), std: Math.round(Math.sqrt(Math.max(0, s2 / n - mean * mean))) };
        }, shot);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        if (stats.std < 4) problems.push(`${vp.label} ${i + 1}번째 펼침: 화면이 비어 보여요.`);
        if (overflow > 1) problems.push(`${vp.label}: 화면이 옆으로 ${overflow}px 넘쳐요.`);
        vpReport.push({ spread: i, ...stats });
        if (vp.name === "wide" && i === 0) report.thumbnail = shot.length < 400000 ? shot : null;
        // 미리보기 요청이면 펼침마다 줄인 캡처를 돌려준다(웹 대화창 AI 가 화면을 보고 고치게, 2026-10-27).
        if (wantShots && i < 8) {
          const small = await page.evaluate(async (src, w) => {
            const img = new Image(); img.src = src; await img.decode();
            const k = Math.min(1, w / img.width); const c = document.createElement("canvas");
            c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
            c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
            return c.toDataURL("image/jpeg", 0.72);
          }, shot, vp.name === "wide" ? 900 : 390);
          if (small.length < 300000) report.shots.push({ viewport: vp.label, spread: i + 1, image: small });
        }
      }
      const errs = await page.evaluate(() => window.__dt.errors ?? []);
      for (const e of [...new Set([...consoleErrors, ...errs])].slice(0, 12)) problems.push(`${vp.label} 오류: ${e}`);
      report.viewports[vp.name] = vpReport;
      await page.close();
    }
  } catch (e) {
    problems.push(`검사기가 끝까지 돌지 못했어요: ${String(e.message || e).slice(0, 200)}`);
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
  res.setHeader("content-type", "application/json");
  res.setHeader("cache-control", "no-store");
  res.end(JSON.stringify({ ok: problems.length === 0, problems, ms: Date.now() - started, ...report }));
}
