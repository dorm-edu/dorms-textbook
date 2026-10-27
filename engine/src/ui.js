// HTML layer over the 3D book: control capsule, contents, captions, handles panel, floating tags,
// and a text version of every spread for screen readers and keyboard users.
import { icon } from "./icons.js";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const plain = (s) => String(s ?? "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/`(.+?)`/g, "$1");

export function createUI(root, def, handlers) {
  root.insertAdjacentHTML("beforeend", `
    <div class="dt-labels" aria-hidden="true"></div>
    <div class="dt-controls" hidden></div>
    <div class="dt-bar" role="toolbar" aria-label="책 넘기기">
      <button type="button" class="dt-ibtn" data-act="menu" aria-label="목차" aria-expanded="false">${icon("menu")}</button>
      <button type="button" class="dt-ibtn" data-act="prev" aria-label="이전 펼침">${icon("prev")}</button>
      <button type="button" class="dt-ibtn" data-act="play" aria-label="시연 보기">${icon("play")}</button>
      <div class="dt-bar-title" aria-live="polite"><span class="dt-bar-no"></span><span class="dt-bar-text"></span></div>
      <button type="button" class="dt-ibtn" data-act="next" aria-label="다음 펼침">${icon("next")}</button>
      <span class="dt-bar-sep" aria-hidden="true"></span>
      <button type="button" class="dt-ibtn dt-only-narrow" data-act="side" aria-label="글 쪽 보기">${icon("pages")}</button>
      <button type="button" class="dt-ibtn" data-act="still" aria-label="움직임 멈추기" aria-pressed="false">${icon("still")}</button>
      <button type="button" class="dt-ibtn" data-act="theme" aria-label="밝은 책으로 바꾸기">${icon("contrast")}</button>
      ${def.teacherNotes ? `<button type="button" class="dt-ibtn" data-act="teacher" aria-label="교사용 안내">${icon("teacher")}</button>` : ""}
    </div>
    <nav class="dt-menu" hidden aria-label="목차"><ol></ol></nav>
    <aside class="dt-sheet" hidden aria-label="교사용 안내"><button type="button" class="dt-ibtn dt-sheet-close" aria-label="닫기">${icon("close")}</button><div class="dt-sheet-body"></div></aside>
    <main class="dt-a11y dt-sr" aria-label="책 내용 글판"></main>
    <div class="dt-sr" aria-live="polite" data-live></div>`);
  const $ = (s) => root.querySelector(s);
  const bar = $(".dt-bar"), menu = $(".dt-menu"), sheet = $(".dt-sheet"), controls = $(".dt-controls"), a11y = $(".dt-a11y"), live = $("[data-live]");
  const labels = $(".dt-labels");
  const btn = (a) => bar.querySelector(`[data-act="${a}"]`);
  let captionTimer = null;
  let title = "";

  def.spreads.forEach((s, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<button type="button"><span class="dt-menu-no">${String(i + 1).padStart(2, "0")}</span><span>${esc(s.title)}</span></button>`;
    li.querySelector("button").addEventListener("click", () => { toggleMenu(false); handlers.go(i); });
    menu.querySelector("ol").append(li);
  });
  function toggleMenu(open = menu.hidden) { menu.hidden = !open; btn("menu").setAttribute("aria-expanded", String(open)); }

  bar.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const act = b.dataset.act;
    if (act === "menu") toggleMenu();
    else if (act === "prev") handlers.prev();
    else if (act === "next") handlers.next();
    else if (act === "play") handlers.play();
    else if (act === "side") handlers.side();
    else if (act === "still") { const on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", String(on)); handlers.still(on); }
    else if (act === "theme") handlers.theme();
    else if (act === "teacher") { sheet.hidden = false; sheet.querySelector(".dt-sheet-body").innerHTML = String(def.teacherNotes).split(/\n{2,}/).map((p) => `<p>${esc(plain(p))}</p>`).join(""); }
  });
  sheet.querySelector(".dt-sheet-close").addEventListener("click", () => { sheet.hidden = true; });

  return {
    labels,
    setSpread(i, spread, total) {
      title = spread.title;
      bar.querySelector(".dt-bar-no").textContent = String(i + 1);
      bar.querySelector(".dt-bar-text").textContent = title;
      btn("prev").disabled = i === 0;
      btn("next").disabled = i === total - 1;
      btn("play").hidden = !(spread.shots && spread.shots.length);
      [...menu.querySelectorAll("li")].forEach((li, j) => li.classList.toggle("is-current", j === i));
      live.textContent = `${i + 1}번째 펼침, ${title}`;
    },
    playing(on) { const b = btn("play"); b.innerHTML = icon(on ? "pause" : "play"); b.setAttribute("aria-label", on ? "시연 멈추기" : "시연 보기"); },
    sideLabel(side) { btn("side").setAttribute("aria-label", side === "left" ? "그림 쪽 보기" : "글 쪽 보기"); },
    themeLabel(name) { btn("theme").setAttribute("aria-label", name === "light" ? "어두운 책으로 바꾸기" : "밝은 책으로 바꾸기"); },
    caption(text, ms = 0) {
      const el = bar.querySelector(".dt-bar-text");
      clearTimeout(captionTimer);
      el.textContent = text || title;
      bar.classList.toggle("is-caption", !!text);
      live.textContent = text || "";
      if (text && ms) captionTimer = setTimeout(() => { el.textContent = title; bar.classList.remove("is-caption"); }, ms);
    },
    slider({ label = "값", min = 0, max = 1, step = 0.01, value = min, format = (v) => String(v), onInput } = {}) {
      controls.hidden = false;
      const row = document.createElement("label");
      row.className = "dt-slider";
      row.innerHTML = `<span class="dt-slider-name">${esc(label)}</span><input type="range"><output class="dt-readout"></output>`;
      const input = row.querySelector("input"), out = row.querySelector("output");
      Object.assign(input, { min: String(min), max: String(max), step: String(step), value: String(value) });
      const sync = () => { const v = Number(input.value); out.textContent = format(v); onInput && onInput(v); };
      input.addEventListener("input", sync);
      controls.append(row);
      sync();
      return { get value() { return Number(input.value); }, set value(v) { input.value = String(v); sync(); } };
    },
    readout(name, value) {
      controls.hidden = false;
      const box = document.createElement("div");
      box.className = "dt-meter";
      box.innerHTML = `<span>${esc(name)}</span><strong>${esc(value)}</strong>`;
      controls.append(box);
      const v = box.querySelector("strong");
      return { set value(x) { v.textContent = typeof x === "number" ? x.toLocaleString("ko-KR", { maximumFractionDigits: 3 }) : String(x); } };
    },
    clearControls() { controls.innerHTML = ""; controls.hidden = true; },
    /** text version of the spread with real buttons for the same actions */
    renderText(spread, state, actions) {
      const p = [];
      p.push(`<h1>${esc(plain(spread.title))}</h1>`);
      for (const para of spread.body ?? []) p.push(`<p>${esc(plain(para))}</p>`);
      if (spread.equation) p.push(`<p>식: ${esc(plain(spread.equation.main))}${spread.equation.note ? `, ${esc(plain(spread.equation.note))}` : ""}</p>`);
      if (spread.keywords?.length) p.push(`<dl>${spread.keywords.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(plain(d))}</dd>`).join("")}</dl>`);
      a11y.innerHTML = p.join("");
      const group = (block, kind) => {
        const wrap = document.createElement("fieldset");
        wrap.innerHTML = `<legend>${kind === "predict" ? "예측" : "확인"}: ${esc(plain(block.prompt ?? block.question))}</legend>`;
        block.choices.forEach((c, i) => {
          const b = document.createElement("button"); b.type = "button"; b.textContent = plain(c);
          b.setAttribute("aria-pressed", String((kind === "predict" ? state.picked : state.checkPicked) === i));
          b.addEventListener("click", () => actions.choose(kind, i)); wrap.append(b);
        });
        a11y.append(wrap);
      };
      if (spread.predict) group(spread.predict, "predict");
      if (spread.check) group(spread.check, "check");
      if (spread.flap) {
        const b = document.createElement("button"); b.type = "button"; b.textContent = state.flapOpen ? "날개 닫기" : "날개를 들춰 답 보기";
        b.addEventListener("click", () => actions.flap()); a11y.append(b);
        if (state.flapOpen) { const ans = document.createElement("p"); ans.textContent = `답: ${plain(spread.flap.answer)}`; a11y.append(ans); }
      }
      if (spread.caption) { const c = document.createElement("p"); c.textContent = `그림: ${plain(spread.caption)}. ${plain(spread.task ?? "")}`; a11y.append(c); }
      this._a11yTail = document.createElement("div"); a11y.append(this._a11yTail);
      for (const [label, fn] of this._sceneButtons ?? []) this._appendSceneButton(label, fn);
    },
    resetSceneButtons() { this._sceneButtons = []; if (this._a11yTail) this._a11yTail.innerHTML = ""; },
    _appendSceneButton(label, fn) {
      const b = document.createElement("button"); b.type = "button"; b.textContent = label; b.addEventListener("click", fn); this._a11yTail.append(b);
    },
    addA11yButton(label, fn) {
      (this._sceneButtons ??= []).push([label, fn]);
      if (this._a11yTail) this._appendSceneButton(label, fn);
    },
    announce(text) { live.textContent = text; },
  };
}
