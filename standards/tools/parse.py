import json, re, sys, glob, os
S=sys.argv[1]
DASH='-–‐‑−'
CODE=re.compile(r'^\[?(\d{1,2}[^\[\]\s]{1,14}?['+DASH+r']?\d{2}['+DASH+r']\d{2})\]\s*(.*)$', re.S)
AREA=re.compile(r'^\((\d{1,2})\)\s*(\S.{0,60})$')
PUA=re.compile(r'[\U000f0000-\U0010ffff-]')
GRADE=re.compile(r'^\[(초등학교|중학교|고등학교)[^\]]*\]$')
def norm(c):
    for d in DASH[1:]: c=c.replace(d,'-')
    return c
docs=['b5_2022','b6_2022','b7_2024','b8_2022','b9_2022','b10_2022','b11_2022','b12_2024','b13_2022','b14_2024','b15old_2022','b16_2022','b17_2022','b18_2024','b19_2024','b20_2022','b21_2022','b22_2024','b39_2024','b40_2022','b1003_2024','b15_2026','b1003_2026']
out=[];anom=[]
for doc in docs:
    raw=json.load(open(f'{S}/hwptxt/{doc}.json'))
    subj=None; area=None; sub=None; mode=False; instd=False; seen={}; prev=[]; last_std=None; grade=None
    for i,t0 in enumerate(raw):
        t0=t0.replace('\r','').strip()
        if not t0: continue
        pua=bool(PUA.match(t0))
        t=PUA.sub('',t0).strip()
        if not t: continue
        if t.startswith('1. 성격'):
            subj=prev[-1] if prev else None; area=None; sub=None; mode=False; grade=None; instd=False
        if re.match(r'^나\.\s*성취기준$',t): mode=True; instd=True; area=None; sub=None
        if re.match(r'^\d\.\s*교수',t): mode=False; instd=False
        if GRADE.match(t): grade=t[1:-1]; mode=True
        if re.match(r'^\((가|나)\)\s*성취기준\s*(해설|적용)',t): mode=False
        m=AREA.match(t)
        if m and instd and not CODE.match(t) and len(t)<70:
            area=m.group(2).strip(); sub=None; mode=True
        if pua and not CODE.match(t) and len(t)<60:
            sub=t; mode=True
        m=CODE.match(t)
        if m:
            printed=m.group(1); code=norm(printed)
            txt=' '.join(x.strip() for x in m.group(2).split('\n') if x.strip())
            rec=dict(doc=doc,idx=i,code=code,printedCode=printed,text=txt,area=area,subarea=sub,grade=grade,subjHead=subj)
            if not t.startswith('['): rec['note']='원문에 여는 대괄호 누락: '+t[:20]
            if code not in seen:
                if mode:
                    seen[code]=rec; out.append(rec); last_std=rec
                else:
                    seen[code]=None; anom.append(dict(rec,kind='first-occurrence-outside-standards-block'))
            else:
                if mode and seen[code] is not None and seen[code]['text']!=txt:
                    anom.append(dict(rec,kind='duplicate-printed-code-in-standards-block',prevText=seen[code]['text']))
                    pm=re.match(r'^(.*-)(\d{2})$',last_std['code'])
                    inf=pm.group(1)+'%02d'%(int(pm.group(2))+1)
                    if inf not in seen or seen[inf] is None:
                        rec['note']=f'원문 오기 추정: 성취기준 목록에 [{printed}]가 두 번 인쇄됨. 목록 순서상 다음 번호인 {inf}로 기록함'
                        rec['code']=inf; seen[inf]=rec; out.append(rec); last_std=rec
        prev.append(t)
json.dump(out,open(S+'/raw_standards.json','w'),ensure_ascii=False,indent=0)
json.dump(anom,open(S+'/anomalies.json','w'),ensure_ascii=False,indent=0)
from collections import OrderedDict
pm=OrderedDict()
for o in out:
    p=re.match(r'\d{1,2}.+?(?=\d{2}-\d{2}$|-\d{2}-\d{2}$)',o['code']); p=p.group(0) if p else o['code']
    pm.setdefault((o['doc'],p),[0,o['subjHead'],o['grade']]); pm[(o['doc'],p)][0]+=1
for k,v in pm.items(): print(k,v[0],'|',(v[1] or '')[:40],'|',v[2])
print('total',len(out),'anom',len(anom))
for a in anom: print('ANOM',a['doc'],a['kind'],a['printedCode'],a['text'][:50])
