// Prints a page onto a canvas, like typesetting a real book: grid paper, kicker, title, body, equation box,
// key words, prediction boxes, the flap note, margin notes. Returns the canvas and its tappable regions.
import { palette, FONT } from "./tokens.js";

export const PAGE_W = 1536;
export const PAGE_H = 2048;
const COL_X = 380;
const COL_W = 1010;
const MARGIN_X = 84;
const MARGIN_W = 268;

function rgba(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}

/** rich text tokens: **bold**, `accent` */
function tokens(text) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0;
  for (const m of String(text).matchAll(re)) {
    if (m.index > last) out.push({ t: text.slice(last, m.index), s: "n" });
    const raw = m[0];
    out.push(raw.startsWith("**") ? { t: raw.slice(2, -2), s: "b" } : { t: raw.slice(1, -1), s: "a" });
    last = m.index + raw.length;
  }
  if (last < text.length) out.push({ t: text.slice(last), s: "n" });
  return out;
}

function fontFor(style, size, base = FONT.sans, weight = 500) {
  return `${style === "b" ? 800 : style === "a" ? 750 : weight} ${size}px ${base}`;
}

/** wraps rich text to width; Korean breaks between words (keep-all), very long words break by letter. */
function layout(ctx, text, width, size, base, weight) {
  const lines = [];
  let line = [];
  let lineW = 0;
  const push = () => { lines.push(line); line = []; lineW = 0; };
  for (const tok of tokens(text)) {
    const parts = tok.t.split(/(\s+)/);
    for (const part of parts) {
      if (!part) continue;
      if (/\n/.test(part)) { push(); continue; }
      ctx.font = fontFor(tok.s, size, base, weight);
      const w = ctx.measureText(part).width;
      if (/^\s+$/.test(part)) { if (line.length) { line.push({ ...tok, t: " ", w }); lineW += w; } continue; }
      if (lineW + w > width && line.length) {
        while (line.length && line[line.length - 1].t === " ") lineW -= line.pop().w;
        push();
      }
      if (w > width) {
        let chunk = "";
        for (const ch of part) {
          const cw = ctx.measureText(chunk + ch).width;
          if (cw > width && chunk) { line.push({ ...tok, t: chunk, w: ctx.measureText(chunk).width }); push(); chunk = ch; } else chunk += ch;
        }
        if (chunk) { const cw = ctx.measureText(chunk).width; line.push({ ...tok, t: chunk, w: cw }); lineW += cw; }
      } else { line.push({ ...tok, t: part, w }); lineW += w; }
    }
  }
  if (line.length) push();
  return lines;
}

function drawRich(ctx, text, x, y, width, { size = 40, lh = 1.6, color, base = FONT.sans, weight = 500, align = "left" } = {}) {
  const p = palette();
  const lines = layout(ctx, text, width, size, base, weight);
  let yy = y;
  for (const line of lines) {
    const total = line.reduce((s, t) => s + t.w, 0);
    let xx = align === "center" ? x + (width - total) / 2 : x;
    for (const t of line) {
      ctx.font = fontFor(t.s, size, base, weight);
      ctx.fillStyle = t.s === "a" ? p.accent : color ?? p.ink;
      ctx.fillText(t.t, xx, yy + size);
      xx += t.w;
    }
    yy += size * lh;
  }
  return yy;
}

function paperBase(ctx, side) {
  const p = palette();
  ctx.fillStyle = p.paper;
  ctx.fillRect(0, 0, PAGE_W, PAGE_H);
  // gutter shading toward the spine
  const g = side === "left" ? ctx.createLinearGradient(PAGE_W, 0, PAGE_W - 220, 0) : ctx.createLinearGradient(0, 0, 220, 0);
  g.addColorStop(0, "rgba(0,0,0,0.32)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, PAGE_W, PAGE_H);
  ctx.strokeStyle = p.paperGrid;
  ctx.lineWidth = 2;
  for (let x = 48; x < PAGE_W; x += 48) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, PAGE_H); ctx.stroke(); }
  for (let y = 48; y < PAGE_H; y += 48) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(PAGE_W, y); ctx.stroke(); }
  // corner brackets (the book's mark)
  ctx.strokeStyle = rgba(p.ink, 0.55);
  ctx.lineWidth = 4;
  const m = 70, L = 54;
  for (const [cx, cy, dx, dy] of [[m, m, 1, 1], [PAGE_W - m, m, -1, 1], [m, PAGE_H - m, 1, -1], [PAGE_W - m, PAGE_H - m, -1, -1]]) {
    ctx.beginPath(); ctx.moveTo(cx + dx * L, cy); ctx.lineTo(cx, cy); ctx.lineTo(cx, cy + dy * L); ctx.stroke();
  }
}

function header(ctx, def, side) {
  const p = palette();
  ctx.font = `700 26px ${FONT.mono}`;
  ctx.fillStyle = p.inkSoft;
  const text = `${def.subject ?? ""}${def.unitName ? "  ·  " + def.unitName : ""}`.toUpperCase();
  if (side === "left") ctx.fillText(text, COL_X, 128);
  else { const w = ctx.measureText(def.title).width; ctx.font = `600 26px ${FONT.sans}`; ctx.fillText(def.title, PAGE_W - 140 - Math.min(w, 900), 128); }
}

function pageNumber(ctx, n, side) {
  const p = palette();
  ctx.font = `700 30px ${FONT.mono}`;
  ctx.fillStyle = p.inkSoft;
  const s = String(n).padStart(2, "0");
  ctx.fillText(s, side === "left" ? 120 : PAGE_W - 160, PAGE_H - 110);
}

function checkbox(ctx, x, y, size, state) {
  const p = palette();
  ctx.lineWidth = 4;
  ctx.strokeStyle = state ? p.accent : p.inkSoft;
  ctx.strokeRect(x, y, size, size);
  if (state === "picked") {
    ctx.strokeStyle = p.accent;
    ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(x + size * 0.18, y + size * 0.55); ctx.lineTo(x + size * 0.42, y + size * 0.8); ctx.lineTo(x + size * 0.86, y + size * 0.2); ctx.stroke();
  }
}

/**
 * Left page. state: { picked, checkPicked, checkResult, flapOpen, margin: [lines], lessonNo }
 * returns { canvas, regions: [{ id, x, y, w, h }], flapRect }
 */
export function printLeft(canvas, def, spread, index, state) {
  const p = palette();
  const ctx = canvas.getContext("2d");
  paperBase(ctx, "left");
  header(ctx, def, "left");
  const regions = [];
  let y = 196;
  ctx.font = `800 26px ${FONT.mono}`;
  ctx.fillStyle = p.red;
  ctx.fillText(`${spread.kicker ?? `${String(def.lessonNo ?? 1).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}`}`, COL_X, y + 26);
  y += 52;
  y = drawRich(ctx, spread.title, COL_X, y, COL_W, { size: 92, lh: 1.2, weight: 800 }) + 22;
  for (const para of spread.body ?? []) y = drawRich(ctx, para, COL_X, y, COL_W, { size: 44, lh: 1.55 }) + 20;
  if (spread.equation) {
    y += 10;
    const top = y;
    const inner = drawRich(ctx, spread.equation.main, COL_X + 36, y + 30, COL_W - 72, { size: 62, lh: 1.3, base: FONT.serif, weight: 700, align: "center" });
    const end = spread.equation.note ? drawRich(ctx, spread.equation.note, COL_X + 36, inner + 4, COL_W - 72, { size: 28, lh: 1.5, color: p.inkSoft, align: "center" }) : inner;
    ctx.strokeStyle = p.rule; ctx.lineWidth = 3;
    ctx.strokeRect(COL_X, top, COL_W, end - top + 26);
    y = end + 56;
  }
  if (spread.keywords?.length) {
    ctx.font = `800 28px ${FONT.mono}`; ctx.fillStyle = p.red; ctx.fillText("핵심 낱말", COL_X, y + 24); y += 46;
    for (const [term, desc] of spread.keywords) {
      ctx.font = `800 38px ${FONT.sans}`; ctx.fillStyle = p.ink;
      const tw = ctx.measureText(term).width;
      ctx.fillText(term, COL_X, y + 38);
      y = drawRich(ctx, desc, COL_X + Math.min(tw + 26, 340), y, COL_W - Math.min(tw + 26, 340), { size: 37, lh: 1.45, color: p.inkSoft }) + 8;
    }
    y += 28;
  }
  const choiceBlock = (block, kind) => {
    ctx.font = `800 28px ${FONT.mono}`; ctx.fillStyle = p.red; ctx.fillText(kind === "predict" ? "예측" : "확인", COL_X, y + 24); y += 46;
    y = drawRich(ctx, block.prompt ?? block.question, COL_X, y, COL_W, { size: 44, lh: 1.45, weight: 700 }) + 12;
    block.choices.forEach((c, i) => {
      const picked = kind === "predict" ? state.picked === i : state.checkPicked === i;
      const top = y;
      checkbox(ctx, COL_X + 4, y + 10, 44, picked ? "picked" : null);
      const end = drawRich(ctx, c, COL_X + 76, y, COL_W - 76, { size: 42, lh: 1.42, color: picked ? p.ink : p.inkSoft });
      regions.push({ id: `${kind}:${i}`, x: COL_X - 10, y: top - 6, w: COL_W + 20, h: Math.max(64, end - top + 12) });
      y = end + 10;
    });
    if (kind === "check" && state.checkResult) {
      const ok = state.checkResult === "good";
      y = drawRich(ctx, ok ? (block.right ?? "맞았어요.") : (block.wrong ?? "다시 생각해 봐요. 그림 쪽을 다시 움직여 봐도 좋아요."), COL_X + 70, y, COL_W - 70, { size: 32, lh: 1.5, color: ok ? p.accent : p.warm }) + 8;
    }
    y += 24;
  };
  if (spread.predict) choiceBlock(spread.predict, "predict");
  if (spread.check) choiceBlock(spread.check, "check");

  let flapRect = null;
  if (spread.flap) {
    const h = 300;
    const top = Math.min(Math.max(y + 12, 1300), PAGE_H - 230 - h);
    flapRect = { x: COL_X - 20, y: top, w: COL_W + 40, h };
    // the answer printed under the flap
    ctx.font = `800 24px ${FONT.mono}`; ctx.fillStyle = p.red; ctx.fillText("왜 그럴까", COL_X, top + 40);
    drawRich(ctx, spread.flap.answer, COL_X, top + 60, COL_W, { size: 37, lh: 1.45 });
    regions.push({ id: "flap", ...flapRect });
  }
  // margin column: handwritten working and the challenge
  let my = 420;
  ctx.save();
  ctx.translate(MARGIN_X, 0);
  for (const line of state.margin ?? spread.margin ?? []) my = drawRich(ctx, line, 0, my, MARGIN_W, { size: 44, lh: 1.2, base: FONT.hand, weight: 600, color: p.accent }) + 8;
  if (spread.challenge) {
    const cy = PAGE_H - 560;
    ctx.font = `800 28px ${FONT.mono}`; ctx.fillStyle = p.red; ctx.fillText(state.challengeDone ? "도전 완료" : "도전", 0, cy);
    drawRich(ctx, spread.challenge, 0, cy + 16, MARGIN_W, { size: 38, lh: 1.3, color: p.inkSoft, base: FONT.hand, weight: 600 });
  }
  ctx.restore();
  pageNumber(ctx, index * 2 + 2, "left");
  return { regions, flapRect };
}

/** Right page: caption, task line, page number, optional stamp. */
export function printRight(canvas, def, spread, index, state) {
  const p = palette();
  const ctx = canvas.getContext("2d");
  paperBase(ctx, "right");
  header(ctx, def, "right");
  const capY = PAGE_H - 330;
  if (spread.caption) {
    ctx.font = `italic 600 34px ${FONT.sans}`;
    ctx.fillStyle = p.inkSoft;
    ctx.fillText(`그림 ${index + 1}  ${spread.caption}`.slice(0, 60), 170, capY);
  }
  if (spread.task) drawRich(ctx, spread.task, 170, capY + 22, PAGE_W - 360, { size: 44, lh: 1.4, weight: 700 });
  if (state.stamped) {
    ctx.save();
    ctx.translate(PAGE_W - 300, 300);
    ctx.rotate(-0.16);
    ctx.strokeStyle = p.accent; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.arc(0, 0, 120, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(0, 0, 100, 0, Math.PI * 2); ctx.stroke();
    ctx.font = `800 40px ${FONT.sans}`; ctx.fillStyle = p.accent; ctx.textAlign = "center";
    ctx.fillText("참 잘했어요", 0, 14);
    ctx.font = `700 20px ${FONT.mono}`; ctx.fillText("DORMS", 0, 52);
    ctx.restore();
  }
  pageNumber(ctx, index * 2 + 3, "right");
}

/** The flap card that sits on top of the printed answer. */
export function printFlap(canvas, spread) {
  const p = palette();
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  ctx.fillStyle = p.paperEdge;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = p.accent; ctx.setLineDash([14, 10]); ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, w - 20, h - 20);
  ctx.setLineDash([]);
  ctx.font = `800 26px ${FONT.mono}`; ctx.fillStyle = p.red; ctx.fillText("왜 그럴까?", 50, 70);
  ctx.font = `800 52px ${FONT.sans}`; ctx.fillStyle = p.ink;
  ctx.fillText(spread.flap.label ?? "날개를 들춰 답을 확인해요", 50, 150);
  ctx.font = `500 30px ${FONT.sans}`; ctx.fillStyle = p.inkSoft;
  ctx.fillText(spread.predict ? "예측을 먼저 하고 들춰 보세요." : "생각을 정리한 뒤 들춰 보세요.", 50, 205);
  ctx.font = `500 40px ${FONT.hand}`; ctx.fillStyle = p.accent;
  ctx.fillText("여기를 들춰요", w - 330, 95);
  ctx.strokeStyle = p.accent; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(w - 150, 120); ctx.lineTo(w - 90, 200); ctx.moveTo(w - 90, 200); ctx.lineTo(w - 128, 194); ctx.moveTo(w - 90, 200); ctx.lineTo(w - 96, 162); ctx.stroke();
}
