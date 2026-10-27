// 엔진 부품 시험 장면(교과 내용 아님). 표준 도형·판·액자·탭·끌기·연출이 제대로 도는지만 본다.
import { book } from "../src/index.js";

book({
  title: "엔진 부품 시험",
  subject: "엔진 시험",
  unitName: "부품 확인",
  unitCode: "hs2-qcttp7",
  standards: ["12미적Ⅰ-02-01"],
  teacherNotes: "엔진 개발용 시험 장면이에요. 수업 내용이 아니에요.",
  spreads: [
    {
      title: "도형과 빛",
      body: ["이 펼침은 선화 도형, 빛나는 병, 빛 줄기가 제대로 그려지는지 보는 시험이에요.", "왼쪽 보기를 누르고 날개를 들춰 보세요."],
      equation: { main: "A = B + C", note: "공식 상자 시험" },
      keywords: [["부품", "그림 쪽에 세우는 3D 물체"], ["날개", "들춰서 답을 보는 쪽지"]],
      predict: { prompt: "병을 누르면 어떻게 될까요?", choices: ["빛이 찬다", "아무 일도 없다"], record: "test_predict" },
      flap: { answer: "병을 누르면 하늘빛이 차오르고 옆 병으로 빛 줄기가 건너가요." },
      challenge: "병 두 개를 모두 채워 보세요.",
      caption: "시험 부품 모음",
      task: "병과 상자를 눌러 보세요.",
      shots: [
        { say: "펼친 책 전체를 봐요.", view: "spread" },
        { say: "그림 쪽을 가까이 봐요.", view: "close" },
        { say: "낮은 쪽에서 봐요.", view: "low" },
      ],
      scene(S) {
        const a = S.jar({ at: [-4, 0, -3], radius: 1.2, height: 3.6, color: "accent" });
        const b = S.jar({ at: [0, 0, -3], radius: 1.2, height: 3.6, color: "warm" });
        let filled = 0;
        const box = S.box(3, 2, 2, { at: [5, 0, 3] });
        const ball = S.sphere(1.1, { at: [-5, 0, 4] });
        S.cylinder(0.9, 0.9, 2.4, { at: [0, 0, 5] });
        S.label("병 A", [-4, 4.4, -3], { tone: "accent" });
        S.label("병 B", [0, 4.4, -3], { tone: "warm" });
        S.tappable(a.group, { name: "병 A 채우기", onTap: () => { a.level = 0.8; S.flow([-4, 3.6, -3], [0, 3.6, -3]); if (++filled >= 2) S.complete(); S.margin(["병 A: 0.8", `채운 병: ${filled}`]); } });
        S.tappable(b.group, { name: "병 B 채우기", onTap: () => { b.level = 0.6; if (++filled >= 2) S.complete(); S.margin(["병 B: 0.6", `채운 병: ${filled}`]); } });
        S.tappable(box, { name: "상자 누르기", onTap: () => S.say("상자를 눌렀어요.") });
        S.drag(ball, { axis: "x", min: -8, max: 8 });
      },
    },
    {
      title: "판과 곡면",
      body: ["세운 판 위의 선, 끌 수 있는 점, 바닥의 곡면 시험이에요."],
      check: { question: "시험 문항이에요. 첫째 보기를 고르세요.", choices: ["첫째", "둘째"], answer: 0, record: "test_check" },
      caption: "판과 곡면",
      task: "판 위의 점을 끌어 보세요.",
      scene(S) {
        const B = S.board({ at: [0, -6], width: 15, height: 9.5, x: [-1, 4], y: [-1, 5], title: "시험 판" });
        const g = (x) => 0.4 * x * x;
        B.graph(g);
        const t = B.tangent(g, 1.5);
        const r = S.readout("점의 x", "1.5");
        B.point(1.5, g(1.5), { label: "P", draggable: { constrain: (x) => { const c = Math.min(3.4, Math.max(-0.8, x)); return [c, g(c)]; }, onDrag: (x) => { t.update(x); r.value = x; } } });
        S.surface((x, y) => Math.sin(x) * Math.cos(y), { x: [-3, 3], y: [-3, 3], size: 9, height: 2.2, at: [0, 6.5] });
      },
    },
  ],
});
