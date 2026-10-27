import json, re, sys, os, glob
S=sys.argv[1]; OUT='/Users/shinchang/dorms-textbook/standards'
sys.path.insert(0,S+'/scripts'); from config import *
units=json.load(open(OUT+'/units.json')); U={u['unitCode']:u for u in units}
std=json.load(open(S+'/std_stage1.json'))
auto=json.load(open(S+'/auto_map.json'))
OFFICIAL={'b5_2022':'교육부 고시 제2022-33호 [별책 5] 국어과 교육과정','b6_2022':'교육부 고시 제2022-33호 [별책 6] 도덕과 교육과정',
 'b7_2024':'교육부 고시 제2022-33호 [별책 7] 사회과 교육과정 (국가교육위원회 고시 제2024-3호 일부개정 포함)','b8_2022':'교육부 고시 제2022-33호 [별책 8] 수학과 교육과정',
 'b9_2022':'교육부 고시 제2022-33호 [별책 9] 과학과 교육과정','b10_2022':'교육부 고시 제2022-33호 [별책 10] 실과(기술·가정)/정보과 교육과정',
 'b11_2022':'교육부 고시 제2022-33호 [별책 11] 체육과 교육과정','b12_2024':'교육부 고시 제2022-33호 [별책 12] 음악과 교육과정 (국가교육위원회 고시 제2024-3호 일부개정 포함)',
 'b13_2022':'교육부 고시 제2022-33호 [별책 13] 미술과 교육과정','b14_2024':'교육부 고시 제2022-33호 [별책 14] 영어과 교육과정 (국가교육위원회 고시 제2024-3호 일부개정 포함)',
 'b15old_2022':'교육부 고시 제2022-33호 [별책 15] 바른 생활, 슬기로운 생활, 즐거운 생활 교육과정','b16_2022':'교육부 고시 제2022-33호 [별책 16] 제2외국어과 교육과정',
 'b17_2022':'교육부 고시 제2022-33호 [별책 17] 한문과 교육과정','b18_2024':'교육부 고시 제2022-33호 [별책 18] 중학교 선택 교과 교육과정 (국가교육위원회 고시 제2024-3호 일부개정 포함)',
 'b19_2024':'교육부 고시 제2022-33호 [별책 19] 고등학교 교양 교과 교육과정 (국가교육위원회 고시 제2024-3호 일부개정 포함)','b20_2022':'교육부 고시 제2022-33호 [별책 20] 과학 계열 선택 과목 교육과정',
 'b21_2022':'교육부 고시 제2022-33호 [별책 21] 체육 계열 선택 과목 교육과정','b22_2024':'교육부 고시 제2022-33호 [별책 22] 예술 계열 선택 과목 교육과정 (국가교육위원회 고시 제2024-3호 일부개정 포함)',
 'b1003_2024':'교육부 고시 제2022-34호 [별책 3] 특수교육 기본 교육과정 (국가교육위원회 고시 제2024-4호 일부개정 포함)'}
# equation scripts (HWP 수식 편집기 스크립트) -> 인쇄 형태를 한 줄로 옮긴 표기
EQ={'div':'÷','times':'×','TIMES':'×','x':'x','y':'y','y=x':'y=x','n':'n','SMALLSUM':'∑','y=x^n':'y=xⁿ','y=x ^{n}':'y=xⁿ',
    'y= {ax+b} over {cx+d}':'y=(ax+b)/(cx+d)','y= sqrt {ax+b} +c':'y=√(ax+b)+c','y=` {k} over {x}':'y=k/x','y= sqrt {kx}':'y=√(kx)','2 TIMES 2':'2×2'}
def render(t):
    eqs=[]
    def f(m):
        s=m.group(1); key=s.strip().strip('`').strip()
        eqs.append(s)
        if key not in EQ: raise SystemExit('unknown eq '+repr(s))
        return EQ[key]
    return re.sub(r'⟦EQ:(.*?)⟧',f,t), eqs
MANUAL={
 'hs3-7k028n':(['12인수02-01','12인수02-02','12인수02-03'],'영역명 일치(텍스트 데이터 처리)',''),
}
# manual additions for HS math leftovers (by unit name within subject)
def code_keys(doc,codes): return [doc+'|'+c for c in codes]
maps={}
for uc,a in auto.items(): maps[uc]=dict(keys=a['keys'],how=a['how'],reason='',mismatch='',confidence='high')
def setm(uc,doc,codes,how,mismatch='',reason='',conf='high'):
    maps[uc]=dict(keys=code_keys(doc,codes),how=how,reason=reason,mismatch=mismatch,confidence=conf)
nm={(u['subject'],u['unit']):u['unitCode'] for u in units if u['school']=='hs'}
setm(nm[('인공지능 수학','텍스트 데이터의 표현과 분석')],'b8_2022',['12인수02-01','12인수02-02','12인수02-03'],'의미 대응','단원명 "텍스트 데이터의 표현과 분석"은 고시 영역명 "텍스트 데이터 처리"와 다름(같은 영역으로 판단)','고시 영역 (2) 텍스트 데이터 처리의 성취기준 전체')
setm(nm[('인공지능 수학','이미지 데이터의 표현과 분석')],'b8_2022',['12인수03-01','12인수03-02','12인수03-03'],'의미 대응','단원명 "이미지 데이터의 표현과 분석"은 고시 영역명 "이미지 데이터 처리"와 다름(같은 영역으로 판단)','고시 영역 (3) 이미지 데이터 처리의 성취기준 전체')
setm(nm[('수학과제 탐구','수학과제 탐구의 실행')],'b8_2022',['12수과03-01','12수과03-02'],'의미 대응(영역 분할)','고시 영역 "과제 탐구의 실행 및 평가"를 도름스는 "수학과제 탐구의 실행"과 "탐구 결과의 발표와 평가" 두 단원으로 나눔(주제 선정·계획, 탐구 수행을 실행 단원에 배정)','주제 선정·계획 수립, 탐구 수행')
setm(nm[('수학과제 탐구','탐구 결과의 발표와 평가')],'b8_2022',['12수과03-03','12수과03-04'],'의미 대응(영역 분할)','고시 영역 "과제 탐구의 실행 및 평가"를 두 단원으로 나눈 경우(산출물·발표, 반성·평가를 이 단원에 배정)','산출물 발표, 반성·평가')
# agent outputs
key_of={}
for o in std: key_of.setdefault((o['doc'],o['code']),o['key'])
pool_by_subject={}
pend=json.load(open(S+'/pending/all.json'))
for k,v in pend.items(): pool_by_subject[k]={c['code'] for c in v['standards']}
docs_of_scope={}
sys.path.insert(0,S+'/scripts')
from stage1_scope import scope_of
agent_files=sorted(glob.glob(S+'/mapped/g*.json'))
problems=[]
for f in agent_files:
    try: m=json.load(open(f))
    except Exception as e: problems.append(f'{f}: {e}'); continue
    for uc,v in m.items():
        if uc in maps: continue
        u=U.get(uc)
        if not u: problems.append(f'unknown unit {uc}'); continue
        sc=scope_of(u); keys=[]
        for c in v.get('codes',[]):
            ks=[d+'|'+c for d,p in sc if (d,c) in key_of and key_of[(d,c)].split('|')[1].startswith(p) and re.match(re.escape(p)+r'-?\d{2}-\d{2}$',c)]
            if len(ks)!=1: problems.append(f'{uc} {u["subject"]} code {c} resolves {len(ks)}'); continue
            keys+=ks
        maps[uc]=dict(keys=keys,how='의미 대응(단원 내용 판단)',reason=v.get('reason',''),mismatch=v.get('mismatch',''),confidence=v.get('confidence',''))
PAGES={}
def printed_page(doc,page):
    if not page: return None
    if doc not in PAGES:
        if doc=='b16_2022':
            n=len(glob.glob(S+'/ocr16/p*.txt')); PAGES[doc]=[open(f'{S}/ocr16/p{i}.txt',encoding='utf-8',errors='replace').read() for i in range(1,n+1)]
        else: PAGES[doc]=open(f'{S}/txt/{doc}.raw.txt',encoding='utf-8',errors='replace').read().split('\f')
    pg=PAGES[doc]
    if page-1>=len(pg): return None
    lines=[l.strip() for l in pg[page-1].split('\n') if l.strip()]
    for l in lines[:2]+lines[-2:][::-1]:
        if re.fullmatch(r'\d{1,3}',l): return int(l)
    return None
# assemble standards
bykey={o['key']:o for o in std}
unitsOf={}
for uc,m in maps.items():
    for k in m['keys']: unitsOf.setdefault(k,[]).append(uc)
out=[]
for o in std:
    text,eqs=render(o['text'])
    rec=dict(id=o['doc'].split('_')[0]+':'+o['code'],code=o['code'],text=text,schoolLevel=o['schoolLevel'],officialSubject=o['officialSubject'],area=o['area'],
             unitCodes=sorted(set(unitsOf.get(o['key'],[])),key=lambda x:[u['unitCode'] for u in units].index(x)),
             source=dict(file='sources/raw/'+o['doc']+'.pdf',page=o['pdfPage'],printedPage=printed_page(o['doc'],o['pdfPage']),textFrom='sources/raw/'+o['doc']+'.hwp',official=OFFICIAL[o['doc']]))
    if o['doc']=='b16_2022': rec['source']['check']='PDF가 이미지 스캔본이라 HWP 원문에서 문장을 뽑고, 쪽은 OCR 결과로 찾음(OCR 글자 일치율 %.2f)'%o.get('ocrCharMatch',0)
    elif '⟦EQ' in o['text']: rec['source']['check']='수식 포함: HWP 원문과 PDF 화면 대조'
    else: rec['source']['check']='HWP 원문과 PDF 텍스트 글자 대조 일치' if o.get('pdfTextMatch') else 'PDF 텍스트 대조 실패(확인 필요)'
    if o.get('grade'): rec['gradeBand']=o['grade']
    if o.get('subarea'): rec['subarea']=o['subarea']
    if o['printedCode']!=o['code']: rec['printedCode']=o['printedCode']
    notes=[]
    if o.get('note'): notes.append(o['note'])
    if eqs: rec['formulaScripts']=eqs; notes.append('수식은 원문의 수식 개체(HWP 수식 스크립트)를 한 줄 표기로 옮김: '+', '.join(eqs))
    if notes: rec['note']=' / '.join(notes)
    out.append(rec)
json.dump(out,open(OUT+'/standards.json','w'),ensure_ascii=False,indent=1)
json.dump(maps,open(S+'/final_maps.json','w'),ensure_ascii=False,indent=1)
print('standards',len(out),'units mapped',len(maps),'problems',len(problems))
for p in problems[:50]: print(' ',p)
