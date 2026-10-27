# 도름스 교과서 엔진 v2 사용법

## book(def)
| 칸 | 뜻 |
|---|---|
| title, subject, unitName | 차시 제목(40자), 과목, 단원 이름 |
| unitCode, standards | `get_curriculum`·`get_standards` 로 받은 값 그대로 |
| teacherNotes | 교사용 안내(막대의 교사 단추로 열림) |
| spreads | 펼침 배열(1~12개) |

### 펼침(spread)
`title`, `body:[문단]`(4개까지, `**굵게**`, `` `강조` `` 사용 가능), `equation:{main, note}`, `keywords:[["낱말","뜻"]]`,
`predict:{prompt, choices, record}`, `check:{question, choices, answer(0부터), right, wrong, record}`, `flap:{label, answer, record}`,
`margin:["손글씨 줄"]`, `challenge`, `caption`, `task`, `shots:[{say, view, run(S), hold}]`, `scene(S)`.

## 그림 쪽 도구 S (단위 cm, x -10~10 왼→오, z -13~13 위→아래(학생 쪽), y 위)
| 도구 | 설명 |
|---|---|
| `S.box(w,h,d,{at,color})` · `S.cylinder(rTop,rBottom,h,{at})` · `S.sphere(r,{at})` · `S.cone(r,h,{at})` · `S.torus(r,tube,{at})` | 선화 도형(바닥이 쪽 위). at:[x,y,z] |
| `S.tube(points, r)` · `S.lathe([[x,y]...])` · `S.extrude([[x,y]...], depth)` | 곡선 관·회전체·밀어낸 모양 |
| `S.ink(geometry, {at, glow})` | three.js 도형을 선화로 |
| `S.jar({at, radius, height, color, level})` → `.level = 0~1` | 빛나는 액체 병(값의 양) |
| `S.flow(a, b, {color, height, seconds})` | a→b 로 건너가는 빛 줄기 |
| `S.line(points, {color, width, dashed})` → `.update(points)` | 공간의 빛나는 선 |
| `S.board({at:[x,z], width, height, x:[a,b], y:[c,d], title, turn})` → B | 세워 둔 그래프 판 |
| `B.graph(f)` → `.update(f)` · `B.line(p,q,{extend,dashed})` · `B.secant(f,a,h)` · `B.tangent(f,a)` · `B.area(f,a,b)` · `B.point(x,y,{label, draggable:{constrain, onDrag}})` · `B.label(text,x,y)` | 판 위 수학 |
| `S.surface(f(x,y), {x, y, size, height, at})` | 쪽 위에 눕힌 곡면 |
| `S.label(text, [x,y,z], {tone:"accent"|"warm"|"note"|"num"})` → `.text`, `.move`, `.attach(obj)` | 떠 있는 이름표 |
| `S.tappable(obj, {name, onTap})` | 눌러서 고르기(점선 고리 표시, 글판에도 같은 단추) |
| `S.drag(obj, {axis:"x"|"z", min, max, onDrag})` | 쪽 위에서 끌기 |
| `S.slider({label, min, max, step, value, format, onInput})` · `S.readout(name, value)` | 아래 손잡이·읽기 숫자 |
| `S.margin(["줄", ...])` | 왼쪽 여백 손글씨 계산 바꾸기 |
| `S.complete()` | 도전 달성: 도장 |
| `S.record(key, value)` | 학생 기록(선생님이 고른 저장처로) |
| `S.say(text)` · `S.view("spread"|"page"|"close"|"low"|"top" 또는 {from, look})` | 자막·카메라 |
| `S.onFrame(t => true)` · `S.tween(seconds, t => …)` · `S.wait(ms)` | 움직임 |
| `S.fmt(n)` | 숫자 글자(1,234.5) |
| `S.THREE` | 꼭 필요할 때만 three.js 직접 사용 |

## 확인용
`window.__dt`: `ready`, `invalid`(정의 오류 목록), `errors`, `spreads`, `goTo(i)`, `capture()`.
