import json, re, sys, collections, glob
S=sys.argv[1]; OUT='/Users/shinchang/dorms-textbook/standards'
sys.path.insert(0,S+'/scripts'); from config import NO_STANDARDS
units=json.load(open(OUT+'/units.json')); U={u['unitCode']:u for u in units}
std=json.load(open(OUT+'/standards.json'))
maps=json.load(open(S+'/final_maps.json'))
anom=json.load(open(S+'/anomalies.json'))
sample=json.load(open(S+'/sample40.json'))
L=[]; w=L.append
# ---- verification
uc_all={u['unitCode'] for u in units}
bad_uc=[(o['id'],c) for o in std for c in o['unitCodes'] if c not in uc_all]
RX=re.compile(r'^(\d{1,2})([가-힣A-Za-zⅠⅡ()]+?)(\d?)(-?)(\d{2})-(\d{2})$')
bad_code=[o['id'] for o in std if not RX.match(o['code'])]
ids=collections.Counter(o['id'] for o in std); dup_id=[k for k,v in ids.items() if v>1]
codes=collections.defaultdict(list)
for o in std: codes[o['code']].append(o)
coll={k:v for k,v in codes.items() if len(v)>1}
LEVELORD={'el':'초등','ms':'중등','hs':'고등','common':'공통(특수교육 등)'}
cov=collections.defaultdict(lambda:[0,0])
unit_std=collections.defaultdict(list)
for o in std:
    for c in o['unitCodes']: unit_std[c].append(o['code'])
for u in units:
    cov[u['school']][1]+=1
    if unit_std.get(u['unitCode']): cov[u['school']][0]+=1
w('# 2022 개정 교육과정 성취기준 · 도름스 단원 매핑 보고서')
w('')
w('작성일 2026-10-26. 산출물: `standards.json`(성취기준), 이 보고서, `PROGRESS.md`. 원문 파일: `sources/raw/`, NCIC 목록: `sources/ncic-catalog.json`.')
w('')
w('## 1. 요약')
w(f'- 성취기준 {len(std):,}개를 고시 원문에서 그대로 옮김(현재 시행본 기준, 19개 별책).')
w(f'- 도름스 단원 {len(units):,}개 중 성취기준이 1개 이상 연결된 단원 {sum(v[0] for v in cov.values()):,}개.')
for k in ('el','ms','hs','common'):
    a,b=cov[k]; w(f'  - {LEVELORD[k]}: {a}/{b} ({a/b*100:.1f}%)')
nounit=[o for o in std if not o['unitCodes']]
w(f'- 단원이 연결되지 않은 성취기준 {len(nounit):,}개(대부분 도름스 단원 목록에 없는 과목: 과학·체육·예술 계열 선택 과목 등). 아래 7절.')
w('')
w('## 2. 출처와 판 선택')
w('- 출처: 국가교육과정정보센터(NCIC) "우리나라 교육과정 > 원문 및 해설서 > 2022 개정 시기". 목록 API로 별책별 PDF·HWP를 받아 `sources/raw/`에 저장(파일명 `b<별책>_<판>.pdf/.hwp`).')
w('- 판 선택 원칙: **2026-10-26 현재 학교에 시행 중인 최신본**.')
w('  - 국가교육위원회 고시 제2024-3호(2024.08.16.) 일부개정 반영본을 사용: 사회(별책7)·음악(12)·영어(14)·중학교 선택 교과(18)·고등학교 교양 교과(19)·예술 계열 선택(22). 나머지는 교육부 고시 제2022-33호 원본.')
w('  - 별책15(바른 생활·슬기로운 생활·즐거운 생활)는 2022-33호 원본 사용. 국가교육위원회 고시 제2026-1호(2026.1.21.)가 "건강한 생활"을 신설하고 성취기준을 고쳤지만, 부칙상 초등 1·2학년 시행이 **2028.3.1.**이라 아직 시행 전. 개정본(`b15_2026`)은 비교용으로만 보관(아래 8절).')
w('  - 특수교육 기본 교육과정은 교육부 고시 제2022-34호 [별책3]의 2024-4호 일부개정 반영본(`b1003_2024`) 사용. 2026-2호 개정본(`b1003_2026`, 건강한 생활 신설)은 비교용 보관. 2026-2호의 시행일은 원문에서 확인하지 못했으나 1~2학년 통합교과 개편이라 별책15와 같은 일정으로 추정됨(추정, 확인 필요).')
w('- 문장 추출: PDF 텍스트는 수식이 빠지고 줄바꿈이 낱말 중간에서 끊겨 원문 그대로 옮기기 어렵다. 그래서 **같은 판 HWP 원본의 문단**에서 성취기준 문장을 뽑았다(문단 안의 강제 줄바꿈은 공백 하나로 결합). 수식은 HWP 수식 개체의 스크립트를 읽어 한 줄 표기로 옮기고 원 스크립트를 `formulaScripts`에 남겼다.')
w('- 쪽: `source.page`는 PDF 파일의 쪽 번호(1부터), `source.printedPage`는 그 쪽에 인쇄된 쪽 번호. 각 성취기준이 성취기준 목록에 처음 나오는 쪽.')
w('- 제2외국어(별책16) PDF는 글자 정보가 없는 스캔 이미지다. 문장은 HWP에서 뽑고, 쪽은 PDF를 OCR(tesseract kor)해 찾았다. `source.check`에 OCR 글자 일치율을 적었다.')
w('')
w('## 3. 검증 결과')
w(f'- (a) standards.json의 모든 unitCode가 units.json에 있음: 위반 {len(bad_uc)}건.')
w(f'- (b) 코드 형식 정규식 `{RX.pattern}` 위반 {len(bad_code)}건. `id`(별책:코드) 중복 {len(dup_id)}건.')
w(f'  - 코드 자체의 중복은 {len(coll)}개 있으며 **모두 고시 원문이 서로 다른 과목에 같은 코드를 붙인 경우**다(오류 아님, `id`로 구별):')
cg=collections.Counter(tuple(sorted({(x['officialSubject'],x['schoolLevel'],x['source']['file'].split('/')[-1]) for x in v})) for v in coll.values())
for k,n in cg.items(): w(f'    - {n}개: '+' ↔ '.join(f'{a}({b}, {c})' for a,b,c in k))
nt=sum(1 for o in std if o['source']['check'].startswith('HWP 원문과 PDF 텍스트 글자 대조 일치'))
w(f'- 전수 대조: HWP에서 뽑은 문장을 같은 판 PDF 텍스트와 공백을 뺀 글자 단위로 대조해 {nt:,}개 일치. 수식 포함 18개는 PDF 화면으로 대조(수식 부분은 PDF 텍스트에 글자가 없음). 띄어쓰기까지 정렬해 비교한 결과 차이는 1건(아래 6절 `12생실03-08`).')
w('- (c) 무작위 표본 40개(별책마다 2개 + 수식 포함 2개, 시드 20261026) 재확인:')
w('')
w('| id | PDF 쪽 | 방법 | 결과 |'); w('|---|---|---|---|')
manual_ok={'b8:12대수03-02','b8:12대수03-03','b8:12대수03-04'}
okn=0
for r in sample:
    if r['method']=='visual': res='일치(쪽 이미지를 직접 읽어 대조)'; meth='PDF 쪽 이미지 판독'; okn+=1
    elif r.get('ok'): res='일치(줄바꿈 결합까지 글자 단위 동일)'; meth='pdftotext 재추출'; okn+=1
    elif r['id'] in manual_ok: res='일치(수식 n·∑은 PDF 텍스트에 없어 쪽 이미지로 확인)'; meth='재추출 + 쪽 이미지'; okn+=1
    else: res='불일치 '+str(r.get('pdf',''))[:40]; meth=r['method']
    w(f"| {r['id']} | {r['page']} | {meth} | {res} |")
w('')
w(f'표본 결과: {okn}/{len(sample)} 일치.')
w('')
w('- (d) 성취기준이 1개 이상 연결된 단원 / 전체 단원(학교급별):')
w(''); w('| 학교급 | 연결 단원 | 전체 단원 | 비율 |'); w('|---|---|---|---|')
for k in ('el','ms','hs','common'):
    a,b=cov[k]; w(f'| {LEVELORD[k]} | {a} | {b} | {a/b*100:.1f}% |')
a=sum(v[0] for v in cov.values()); b=sum(v[1] for v in cov.values()); w(f'| 합계 | {a} | {b} | {a/b*100:.1f}% |')
w('')
# ---- per subject table
w('## 4. 과목별 현황')
w('')
w('`성취기준`: 그 도름스 과목 범위에 해당하는 고시 성취기준 수. `연결`: 성취기준이 1개 이상 연결된 단원 수. `0개 단원`: 연결이 없는 단원.')
w('')
w('| 학교급 | 학년군 | 과목 | 성취기준 | 단원 | 연결 | 0개 단원 |'); w('|---|---|---|---|---|---|---|')
from stage1_scope import scope_of
stdscope=collections.defaultdict(set)
std_by_doc_prefix=collections.defaultdict(set)
for o in std:
    doc=o['source']['file'].split('/')[-1][:-4]
    p=re.match(r'\d{1,2}.+?(?=\d{2}-\d{2}$|-\d{2}-\d{2}$)',o['code']).group(0)
    std_by_doc_prefix[(doc,p)].add(o['id'])
grp=collections.OrderedDict()
for u in units: grp.setdefault((u['school'],u['gradeLabel'],u['subject']),[]).append(u)
for (s,g,sub),us in grp.items():
    sc=scope_of(us[0]) if not (s=='common' and us[0]['band']=='sped') else None
    if s=='common' and us[0]['band']=='sped':
        ids=set()
        for u in us:
            for k in scope_of(u) or []: ids|=std_by_doc_prefix[k]
    else: ids=set().union(*[std_by_doc_prefix[k] for k in (sc or [])]) if sc else set()
    con=sum(1 for u in us if unit_std.get(u['unitCode'])); zero=[u['unit'] for u in us if not unit_std.get(u['unitCode'])]
    w(f"| {LEVELORD[s]} | {g} | {sub} | {len(ids)} | {len(us)} | {con} | {', '.join(zero) if zero else '-'} |")
w('')
# ---- no standards
w('## 5. 공식 성취기준이 없는 과목·단원')
for k,v in NO_STANDARDS.items():
    n=sum(1 for u in units if u['subject']==k); w(f'- **{k}** ({n}개 단원): {v}.')
w('- 특수교육 기본 교육과정 "일상생활 활동": 원문(별책3, 목차상 487쪽)은 학교가 자율 편성하는 모듈형 교육과정으로 영역(의사소통·자립생활·신체활동·여가활동·생활적응)과 내용 요소만 제시하고 성취기준 코드를 두지 않음.')
w('')
# ---- mismatch cases
w('## 6. 원문 자체의 특이 사항(오기 등)')
w('- `12스경02-03`(스포츠 행정 및 경영): 성취기준 목록에 `[12스경02-02]`가 두 번 인쇄되어 있음. 해설 순서와 번호 흐름상 두 번째를 `12스경02-03`으로 기록하고 `printedCode`·`note`에 원문 표기를 남김.')
w('- `12연몸02-04`(연기를 위한 몸 훈련): 원문에 여는 대괄호가 빠져 `12연몸02-04]`로 인쇄됨. 코드는 정상 형태로 기록하고 note에 남김.')
w('- `4사01-01`·`4사01-02`(사회 3~4학년): 원문 성취기준 목록이 하이픈 대신 긴 대시(–)로 인쇄됨. 코드는 일반 하이픈으로 정규화하고 `printedCode`에 원문 표기를 남김.')
w('- 해설에만 나오는 잘못된 코드(성취기준 목록에는 없음, 데이터에 넣지 않음): `[12동역-01-01]`·`[12동역-01-02]`(동아시아 역사 기행, 정상은 12동역01-01/02), `[10과탐02-01-03]`(과학탐구실험2, 정상은 10과탐2-01-03), `[12삶종교01-03]`(삶과 종교, 정상은 12삶종01-03).')
w('- `12생실03-11` "…발표할 수있다."는 원문 띄어쓰기 그대로(원문 오기로 보이나 고치지 않음).')
w('- `12생실03-08` "X염색체": HWP 원문은 붙여 씀. PDF 텍스트 추출은 "X 염색체"로 나오는데, 화면상 간격이 좁아 판단이 어려워 HWP 원문을 따름(확인 필요 1건).')
w('- 수식 18개: HWP 수식 개체를 한 줄로 옮김. 예) `y=x^n` → `y=xⁿ`, `{ax+b} over {cx+d}` → `(ax+b)/(cx+d)`, `sqrt {ax+b}` → `√(ax+b)`, `SMALLSUM` → `∑`, `div` → `÷`. 분수·근호는 인쇄본에서 2차원 수식이라 한 줄 표기가 완전히 같지는 않음. 원 스크립트는 `formulaScripts`에.')
w('')
w('## 7. 매핑 판단 기록')
w('')
w('매핑 방식은 세 가지다.')
hows=collections.Counter(m['how'] for m in maps.values())
for k,v in hows.items(): w(f'- {k}: {v}개 단원')
w('')
w('- **영역명 일치**: 단원명이 고시 영역명과 같으면(띄어쓰기·가운뎃점 차이 무시) 그 영역의 성취기준 전부.')
w('- **과목 전체**: 도름스 단원이 "과목 전체" 하나뿐인 과목, 특수교육 기본 교육과정(도름스는 과목 단위 단원) → 그 과목의 성취기준 전부.')
w('- **의미 대응**: 교과서식 단원명(예: "9까지의 수"), 2015 개정식 옛 영역명(예: 사회 "지리 인식"), 표기가 다른 영역명은 단원 내용과 성취기준 문장을 비교해 판단. 교과 묶음별로 나눠 판단하고, 결과를 코드 존재·범위 검사로 확인함.')
w('- 중학교·초등 학년군 성취기준은 고시에 학년 구분이 없다. 중학교 1·2·3학년에 같은 영역명 단원(예: "수와 연산")이 있으면 세 학년 모두 그 영역 성취기준 전체를 받는다.')
w('')
w('### 7-1. 단원명과 고시 구조가 다른 경우(판단 사유)')
w('')
w('| 학교급 | 과목 | 단원 | 연결 수 | 판단 | 사유 |'); w('|---|---|---|---|---|---|')
rows=[]
for uc,m in maps.items():
    u=U[uc]
    if m['how'] in ('영역명 일치','과목 전체(교과 단위)') : continue
    if not (m['mismatch'] or m['confidence'] in ('low','medium') or not m['keys']): continue
    rows.append((u['school'],u['band'],u['subject'],u['unit'],len(m['keys']),m['confidence'],(m['mismatch'] or m['reason']).replace('|','/')))
order={'el':0,'ms':1,'hs':2,'common':3}
for r in sorted(rows,key=lambda r:(order[r[0]],r[1],r[2])):
    w(f'| {LEVELORD[r[0]]} {r[1]} | {r[2]} | {r[3]} | {r[4]} | {r[5]} | {r[6]} |')
w('')
w('### 7-2. 연결 성취기준이 0개인 단원')
w('')
for uc,m in maps.items():
    if not m['keys']:
        u=U[uc]; w(f"- {LEVELORD[u['school']]} {u['band']} {u['subject']} > **{u['unit']}**: {m['mismatch'] or m['reason']}")
w('')
w('### 7-3. 도름스 단원이 없는 공식 과목(성취기준은 데이터에 포함, unitCodes 빈 배열)')
w('')
c=collections.Counter((o['officialSubject'],o['schoolLevel'],o['source']['file'].split('/')[-1]) for o in nounit)
byfile=collections.defaultdict(list)
for (s,l,f),n in c.items(): byfile[f].append(f'{s}({n})')
for f,v in sorted(byfile.items()): w(f'- {f}: '+', '.join(v))
w('')
w('## 8. 2026-1호 개정 통합교과(별책15) 참고')
w('')
diff=open(S+'/diff15.txt').read().splitlines()
w('국가교육위원회 고시 제2026-1호(2026.1.21.) 개정본은 2028.3.1.부터 초등 1·2학년에 시행된다. 현행 48개 성취기준 중 32개는 문장이 그대로이고 16개가 바뀌며, "건강한 생활" 9개가 새로 생긴다. 도름스에 건강한 생활 단원은 없다. 바뀌는 성취기준(현행 → 개정):')
w('')
for l in diff[2:]:
    w('- '+l.replace(' | ',' : ').replace(' => ',' → '))
w('')
w('## 9. 남은 의문·확인 필요')
w('- 특수교육 기본 교육과정 2026-2호 개정본의 시행일 미확인(2024-4호 반영본으로 작성).')
w('- `12생실03-08` "X염색체/X 염색체" 띄어쓰기 1건.')
w('- 의미 대응 매핑 중 confidence가 low인 단원은 교사 검토를 권함(7-1 표의 low 항목). 특히 2015 개정식 영역명 단원(사회 "지리 인식"·"정치"·"역사 일반", 과학 "물질"·"생명" 등)과 통합교과 "학교·봄·여름·가을·겨울·우리나라"는 2022 고시에 대응 구조가 없어 내용으로 맞춘 것이다.')
w('- 다른 학년군·다른 과목으로 옮겨 간 내용(예: 초등 5~6학년 과학 "여러 가지 기체"는 2022에서 3~4학년군 4과15로 이동, 화학 "전기 화학과 이용"·화학 반응의 세계 "화학 반응 속도")은 같은 과목·학년군 안에서만 연결하는 원칙에 따라 0개로 두었다.')
open(OUT+'/mapping-report.md','w').write('\n'.join(L)+'\n')
print('report lines',len(L),'bad_uc',len(bad_uc),'bad_code',bad_code[:5],len(bad_code),'dup_id',len(dup_id),'coll',len(coll),'sample ok',okn)
print(cov)
