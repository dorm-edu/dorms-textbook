import json, re, sys, glob, difflib
S=sys.argv[1]
std=json.load(open(S+'/raw_standards.json'))
N=len(glob.glob(S+'/ocr16/p*.txt'))
raw=[open(f'{S}/ocr16/p{i}.txt',encoding='utf-8',errors='replace').read() for i in range(1,N+1)]
sq=[re.sub(r'\s+','',p) for p in raw]
def grams(s,n=3): return {s[i:i+n] for i in range(len(s)-n+1)}
PG=[grams(p) for p in sq]
b=[o for o in std if o['doc']=='b16_2022']
for o in b:
    core=o['code'][1:] if o['code'][0]=='9' else o['code'][2:]
    pat=re.compile(r'(^|\n).{0,3}'+re.escape(core)+r'.{0,2}\s')
    hits=[i for i,p in enumerate(raw) if pat.search(p)]
    o['_hits']=hits
# resolve with ordering: first hit that is >= previous resolved page
prev=0
for o in b:
    h=[i for i in o['_hits'] if i>=prev]
    o['_p']=h[0] if h else None
    if o['_p'] is not None: prev=o['_p']
# fill gaps by gram score within neighbors
for idx,o in enumerate(b):
    if o['_p'] is not None: continue
    lo=max([x['_p'] for x in b[:idx] if x['_p'] is not None] or [0])
    hi=min([x['_p'] for x in b[idx+1:] if x['_p'] is not None] or [N-1])
    g=grams(re.sub(r'\s+','',o['text']))
    o['_p']=max(range(lo,hi+1),key=lambda i:len(g&PG[i])); o['_byGram']=True
low=[]
for o in b:
    i=o['_p']; t=re.sub(r'\s+','',o['text']); g=grams(t)
    sc=len(g&PG[i])/max(1,len(g))
    sm=difflib.SequenceMatcher(None,t,sq[i]+(sq[i+1] if i+1<N else ''),autojunk=False)
    cm=sum(x.size for x in sm.get_matching_blocks())/max(1,len(t))
    o['pdfPage']=i+1; o['ocrCharMatch']=round(cm,3); o['ocrCodeHit']=not o.get('_byGram',False)
    if cm<0.8 or o.get('_byGram'): low.append((o['code'],i+1,round(sc,2),round(cm,2),o.get('_byGram',False)))
    for k in ('_hits','_p','_byGram'): o.pop(k,None)
json.dump(std,open(S+'/raw_standards.json','w'),ensure_ascii=False,indent=0)
import statistics
print('b16',len(b),'low',len(low),'median charmatch',statistics.median(o['ocrCharMatch'] for o in b))
for r in low: print(r)
