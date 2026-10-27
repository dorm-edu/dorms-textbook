# 도름스 교과서

책상 위에 펼친 3D 책으로 배우는 수업 차시를, 선생님이 자기 AI(Claude Code·Codex·claude.ai)로 만들어 [도름스](https://dorms.school)에 올리는 플랫폼의 공개 부분입니다.

선생님은 교육적 의도와 원하는 제작 방식만 말합니다. AI는 이 레포의 엔진과 하네스(단계별 지시)를 따라 차시를 조립하고, 서버 검사기를 통과하면 바로 선생님 수업 링크가 생깁니다. 학생은 로그인 없이 그 링크로 엽니다.

## 들어 있는 것

| 폴더 | 내용 |
|---|---|
| `engine/` | 3D 책 엔진(three.js). 책·쪽 넘김·도면 선화 화풍·예측·날개·누르기·끌기·시연. AI는 `book({...})` 정의와 그림 쪽 장면만 쓴다 |
| `sim/` | 격리 실행 서버(Vercel). 엔진 서빙, 차시 실행(`/l/<판>`), 실제 크롬 검사기(`/api/check`), 하네스(`sim/harness/`) |
| `standards/` | 2022 개정 교육과정 성취기준(고시 원문 그대로)과 도름스 단원 대응표, 만든 도구 |

연결 프로그램(내 컴퓨터의 Claude Code·Codex 를 도름스 작업실에서 쓰기)은 [dorm-edu/dorms-textbook-bridge](https://github.com/dorm-edu/dorms-textbook-bridge)에 있습니다.

## 쓰는 법 (선생님)

[dorms.school/textbook](https://dorms.school/textbook) 의 "내 AI에 도름스 연결하기"에서 세 길 중 하나를 고르면 됩니다.

1. **claude.ai 에 연결**: 설치 없이 claude.ai 사용자 정의 커넥터에 `https://dorms.school/api/mcp` 를 넣고 도름스 로그인으로 허락
2. **웹에서 바로 연결해 쓰기**: `npx -y github:dorm-edu/dorms-textbook-bridge#v0.1.0` 으로 작업실을 열어 내 Claude Code·Codex 를 그대로 사용
3. **MCP 로 쓰기**: 평소 쓰는 Claude Code·Codex 에 도름스 원격 MCP 를 연결

AI 사용량은 선생님 본인의 구독에서 나갑니다. 도름스는 AI 계정 정보를 받지도 저장하지도 않습니다.

## 개발

```bash
cd engine && npm install && npm run build      # dist/v2 → sim/public/engine/v2 로 복사됨
cd sim && npm install && node dev/local-server.mjs   # 로컬 검사·실행(CHECK_CHROME_PATH 필요)
```

## 기여

엔진·하네스·검사기를 고치고 싶으면 [CONTRIBUTING.md](CONTRIBUTING.md) 를 읽어 주세요. 바뀐 것은 운영자가 검토한 뒤 다음 엔진 판(`/engine/v3/` 처럼)으로 반영되고, 이미 만든 차시는 만들 때의 판을 그대로 씁니다.

## 라이선스

[GNU AGPL-3.0](LICENSE). 이 코드를 고쳐 서비스로 운영하면 고친 코드도 같은 조건으로 공개해야 합니다.
`standards/` 의 성취기준 문장은 교육부 고시(저작권법 제7조 제2호, 보호받지 않는 저작물) 원문입니다.
