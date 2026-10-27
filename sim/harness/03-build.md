# 3단계: 만들기

작업 폴더에 파일 두 개를 만든다.

## preview.html (그대로 복사)
```html
<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>미리보기</title><link rel="stylesheet" href="{{SIM}}/engine/v2/dt-engine.css"></head>
<body><div id="book"></div><script type="module" src="./lesson.js"></script></body></html>
```

## lesson.js (이 모양으로)
```js
import { book } from "{{SIM}}/engine/v2/dt-engine.js";

book({
  title: "차시 제목",
  subject: "과목 이름",
  unitName: "단원 이름",
  unitCode: "get_curriculum 으로 받은 단원 코드",
  standards: ["get_standards 로 받은 성취기준 코드"],
  teacherNotes: "교사용 안내(선택)",
  spreads: [
    {
      title: "…", body: ["…"],
      predict: { prompt: "…", choices: ["…", "…"], record: "predict_1" },
      flap: { answer: "…" },
      caption: "그림 설명", task: "학생이 할 일",
      shots: [{ say: "자막", view: "close" }],
      scene(S) { /* 그림 쪽 */ },
    },
  ],
});
```

## 지킬 것
- import 는 **엔진 한 줄만** 쓴다. 다른 주소에서 코드를 불러오지 않는다. fetch·XHR·WebSocket·외부 이미지 주소를 쓰지 않는다(제출하면 실행이 막힌다).
- 파일은 lesson.js 하나, 512KB 이하. 그림이 필요하면 엔진 도형으로 만든다.
- 학생 답을 남기려면 `record: "영문_이름"` 을 붙인다. 이름·연락처 같은 개인정보를 묻지 않는다.
- 도구 전체 설명은 `get_engine_api` 로 받는다.

## 미리보기 띄우기
작업 폴더에서 정적 서버를 띄운다(예: `python3 -m http.server 5520` 또는 `npx -y serve -l 5520`). 브라우저로 `http://localhost:5520/preview.html` 을 연다.
