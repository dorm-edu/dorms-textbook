import json, re, sys, os
S=sys.argv[1]; sys.path.insert(0,S+'/scripts')
from config import *
units=json.load(open('/Users/shinchang/dorms-textbook/standards/units.json'))
std=[o for o in json.load(open(S+'/raw_standards.json')) if o['doc'] not in ('b15_2026','b1003_2026')]
def prefix(code): return re.match(r'\d{1,2}.+?(?=\d{2}-\d{2}$|-\d{2}-\d{2}$)',code).group(0)
def nz(s): return re.sub(r'[\s·⋅･∙ㆍ‧.]','',s or '')
heads=json.load(open(S+'/prefix_draft.json'))
headmap={(a,b):c for a,b,c in heads}
for o in std:
    o['prefix']=prefix(o['code'])
    k=(o['doc'],o['prefix'])
    if k in NAME: o['officialSubject'],o['schoolLevel']=NAME[k]
    else:
        o['officialSubject']=headmap[k]; o['schoolLevel']=HS if o['code'].startswith(('10','12')) else (MS if o['code'].startswith('9') else EL)
    o['key']=o['doc']+'|'+o['code']
byscope={}
for o in std: byscope.setdefault((o['doc'],o['prefix']),[]).append(o)
def scope_of(u):
    s,b,sub=u['school'],u['band'],u['subject']
    if s=='common':
        if b=='sped': return [('b1003_2024',p) for p in SP_SCOPE[u['unit']]]
        return None
    if sub=='창의적 체험활동': return None
    if s=='hs': return SCOPE_HS.get(sub)
    return SCOPE.get((s,b,sub))
auto={}; pending={}; nostd={}
for u in units:
    sc=scope_of(u)
    if sc is None:
        nostd[u['unitCode']]=u; continue
    pool=[o for k in sc for o in byscope.get(k,[])]
    if not pool and sc: nostd[u['unitCode']]=u; continue
    if u['school']=='common' and u['band']=='sped' or u['unit']=='과목 전체':
        auto[u['unitCode']]=dict(keys=[o['key'] for o in pool],how='과목 전체(교과 단위)'); continue
    m=[o for o in pool if nz(o['area'])==nz(u['unit'])]
    if m: auto[u['unitCode']]=dict(keys=[o['key'] for o in m],how='영역명 일치'); continue
    pending.setdefault((u['school'],u['band'],u['subject']),[]).append(u)
json.dump(std,open(S+'/std_stage1.json','w'),ensure_ascii=False)
json.dump(auto,open(S+'/auto_map.json','w'),ensure_ascii=False)
print('units',len(units),'auto',len(auto),'nostd',len(nostd),'pending',sum(len(v) for v in pending.values()))
print('nostd subjects',sorted({(u['school'],u['subject']) for u in nostd.values()}))
os.makedirs(S+'/pending',exist_ok=True)
groups={}
for k,us in pending.items():
    sc=scope_of(us[0]); pool=[o for kk in sc for o in byscope.get(kk,[])]
    groups[k]=dict(subject=k,units=[dict(unitCode=u['unitCode'],unit=u['unit']) for u in us],
       otherUnitsAutoMapped=[dict(unitCode=uc,unit=next(x['unit'] for x in units if x['unitCode']==uc),how=a['how']) for uc,a in auto.items() if next(x for x in units if x['unitCode']==uc)['subject']==k[2] and next(x for x in units if x['unitCode']==uc)['band']==k[1]],
       standards=[dict(code=o['code'],officialSubject=o['officialSubject'],area=o['area'],subarea=o.get('subarea'),text=o['text']) for o in pool])
json.dump({'|'.join(k):v for k,v in groups.items()},open(S+'/pending/all.json','w'),ensure_ascii=False,indent=1)
for k,v in pending.items(): print(k,len(v),[u['unit'] for u in v][:8])
