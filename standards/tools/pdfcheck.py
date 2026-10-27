import json, re, sys, unicodedata
S=sys.argv[1]
std=json.load(open(S+'/raw_standards.json'))
pages={}
def load(doc):
    if doc not in pages:
        t=open(f'{S}/txt/{doc}.raw.txt',encoding='utf-8',errors='replace').read()
        pages[doc]=t.split('\f')
    return pages[doc]
EQ=re.compile(r'⟦EQ:.*?⟧')
def squash(s): return re.sub(r'\s+','',unicodedata.normalize('NFKC',s))
res=[];bad=[]
for o in std:
    pg=load(o['doc']); pc=re.escape(o['printedCode'])
    cand=[i for i,p in enumerate(pg) if re.search(r'(^|\n)\s*\[?'+pc+r'\]',p)]
    page=None; ok=False
    segs=[squash(x) for x in EQ.split(o['text']) if squash(x)]
    for i in cand:
        hay=squash(pg[i]+(pg[i+1] if i+1<len(pg) else ''))
        ks=[x for x in (hay.find(squash('['+o['printedCode']+']')),hay.find(squash(o['printedCode']+']'))) if x>=0]
        k=min(ks) if ks else -1
        pos=k; good=k>=0
        for sg in segs:
            j=hay.find(sg,pos)
            if j<0 or j-pos>400: good=False;break
            pos=j+len(sg)
        if good: page=i+1; ok=True; break
    if page is None and cand: page=cand[0]+1
    o['pdfPage']=page; o['pdfTextMatch']=ok
    if not ok: bad.append((o['doc'],o['code'],page,o['text'][:80]))
json.dump(std,open(S+'/raw_standards.json','w'),ensure_ascii=False,indent=0)
print('checked',len(std),'mismatch',len(bad))
for b in bad: print(b)
