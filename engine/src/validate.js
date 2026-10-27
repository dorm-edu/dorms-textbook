// Checks a lesson definition before anything renders. Messages are plain Korean so the teacher's AI can fix them.
const KEY = /^[a-z0-9_-]{1,40}$/i;
const STANDARD = /^\[?[0-9]{1,2}[^\]\s-]{1,14}-[0-9]{2}-[0-9]{2}(-[0-9]{2})?\]?$/;
const TEXT_MAX = 900;
export const LIMITS = { spreads: 12, choices: 5, titleMax: 40, body: 4 };

function textProblems(at, field, v, need) {
  const s = Array.isArray(v) ? v.join("\n") : v;
  need(typeof s === "string", `${at}의 ${field}는 글이어야 해요.`);
  if (typeof s !== "string") return;
  need(s.length <= TEXT_MAX, `${at}의 ${field}는 ${TEXT_MAX}자 이내로 써 주세요(지금 ${s.length}자).`);
  need(!/—/.test(s), `${at}의 ${field}에 긴 줄표가 있어요. 쉼표나 마침표로 바꿔 주세요.`);
  need(!/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(s), `${at}의 ${field}에 이모지나 그림 문자가 있어요. 글로만 써 주세요.`);
}

export function validateLesson(def) {
  const problems = [];
  const need = (ok, msg) => { if (!ok) problems.push(msg); };
  if (!def || typeof def !== "object") return ["book()에 차시 정보를 객체로 넘겨 주세요."];
  need(typeof def.title === "string" && def.title.trim().length > 0 && def.title.length <= LIMITS.titleMax, `title(차시 제목)은 1~${LIMITS.titleMax}자예요.`);
  need(typeof def.unitCode === "string" && /^[a-z0-9]+-[a-z0-9]+$/.test(def.unitCode), "unitCode(단원 코드)가 필요해요. get_curriculum 도구로 받은 코드를 그대로 넣어 주세요.");
  need(Array.isArray(def.standards) && def.standards.length > 0, "standards(성취기준 코드)가 비어 있어요. get_standards 도구로 받은 코드를 넣어 주세요.");
  if (Array.isArray(def.standards)) def.standards.forEach((s) => need(typeof s === "string" && STANDARD.test(s), `성취기준 코드 모양이 이상해요: ${s} (예: 12미적Ⅰ-02-01)`));
  need(Array.isArray(def.spreads) && def.spreads.length >= 1, "spreads(펼침)가 하나 이상 필요해요.");
  if (!Array.isArray(def.spreads)) return problems;
  need(def.spreads.length <= LIMITS.spreads, `펼침은 ${LIMITS.spreads}개까지예요.`);
  if (def.teacherNotes !== undefined) textProblems("교사용 안내", "teacherNotes", def.teacherNotes, need);
  const keys = new Set();
  def.spreads.forEach((s, i) => {
    const at = `${i + 1}번째 펼침`;
    if (!s || typeof s !== "object") { problems.push(`${at}이 비어 있어요.`); return; }
    textProblems(at, "title", s.title, need);
    need(typeof s.title === "string" && s.title.length <= LIMITS.titleMax, `${at}의 title은 ${LIMITS.titleMax}자 이내예요.`);
    need(typeof s.scene === "function", `${at}에 scene(S) 함수가 필요해요. 오른쪽 쪽에서 솟아오를 3D 그림을 여기서 만들어요.`);
    need(!s.body || (Array.isArray(s.body) && s.body.length <= LIMITS.body), `${at}의 body는 문단 배열로, ${LIMITS.body}개까지예요.`);
    for (const para of s.body ?? []) textProblems(at, "body", para, need);
    for (const f of ["caption", "task", "challenge"]) if (s[f] !== undefined) textProblems(at, f, s[f], need);
    if (s.equation) { need(typeof s.equation.main === "string", `${at}의 equation.main이 필요해요.`); }
    if (s.keywords) need(Array.isArray(s.keywords) && s.keywords.every((k) => Array.isArray(k) && k.length === 2), `${at}의 keywords는 [["낱말", "뜻"], …] 모양이에요.`);
    for (const kind of ["predict", "check"]) {
      const b = s[kind];
      if (!b) continue;
      textProblems(at, `${kind}.${kind === "predict" ? "prompt" : "question"}`, b.prompt ?? b.question, need);
      need(Array.isArray(b.choices) && b.choices.length >= 2 && b.choices.length <= LIMITS.choices, `${at}의 ${kind}.choices는 2~${LIMITS.choices}개예요.`);
      if (kind === "check") need(Number.isInteger(b.answer) && b.answer >= 0 && b.answer < (b.choices?.length ?? 0), `${at}의 check.answer는 정답 보기의 번호(0부터)예요.`);
      if (b.record !== undefined) { need(KEY.test(b.record), `${at}의 ${kind}.record 이름은 영문·숫자·_-로 40자 이내예요.`); need(!keys.has(b.record), `record 이름 ${b.record}가 겹쳐요.`); keys.add(b.record); }
    }
    if (s.flap) { need(typeof s.flap.answer === "string", `${at}의 flap.answer(날개 속 답)가 필요해요.`); if (typeof s.flap.answer === "string") textProblems(at, "flap.answer", s.flap.answer, need); }
    if (s.shots) {
      need(Array.isArray(s.shots) && s.shots.length <= 8, `${at}의 shots(시연)는 8개까지예요.`);
      (s.shots ?? []).forEach((sh, j) => { need(typeof sh.say === "string" && sh.say.length <= 60, `${at} 시연 ${j + 1}의 say(자막)는 60자 이내 글이에요.`); });
    }
  });
  return problems;
}
