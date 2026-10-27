import json, random, subprocess, re, sys, collections
S=sys.argv[1]; OUT='/Users/shinchang/dorms-textbook/standards'
d=json.load(open(OUT+'/standards.json'))
random.seed(20261026)
bydoc=collections.defaultdict(list)
for o in d: bydoc[o['source']['file']].append(o)
docs=sorted(bydoc)
sample=[]
# 2 per doc (19 docs => 38) + 2 formula
for f in docs: sample+=random.sample(bydoc[f],2)
form=[o for o in d if 'formulaScripts' in o and o not in sample]
sample+=random.sample(form,2)
res=[]
for o in sample:
    f=OUT+'/'+o['source']['file']; p=o['source']['page']
    if 'b16_2022' in f:
        res.append(dict(id=o['id'],page=p,method='visual',text=o['text'])); continue
    t=subprocess.run(['pdftotext','-f',str(p),'-l',str(p+1),f,'-'],capture_output=True,text=True).stdout
    # find the code line and join following lines until blank/next code
    lines=t.split('\n'); i=next((k for k,l in enumerate(lines) if re.match(r'\s*\[?'+re.escape(o.get('printedCode',o['code']))+r'\]',l)),None)
    if i is None: res.append(dict(id=o['id'],page=p,method='pdftotext',ok=False,why='code line not found')); continue
    buf=[re.sub(r'^\s*\[?'+re.escape(o.get('printedCode',o['code']))+r'\]\s*','',lines[i])]
    for l in lines[i+1:]:
        if not l.strip() or re.match(r'\s*\[',l) or re.match(r'\s*\((가|나)\)',l) or l.strip().startswith('<'): break
        buf.append(l.strip())
    joined_space=' '.join(x.strip() for x in buf); joined_none=''.join(x.strip() for x in buf)
    # accept if equals text under either joining at each break: try all combos (<=4 breaks)
    import itertools
    parts=[x.strip() for x in buf]; ok=False; cand=None
    for combo in itertools.product(['',' '],repeat=max(0,len(parts)-1)):
        s=parts[0]+''.join(c+x for c,x in zip(combo,parts[1:]))
        if s==o['text']: ok=True; cand=s; break
    res.append(dict(id=o['id'],page=p,method='pdftotext 재추출 후 줄바꿈 결합 비교',ok=ok,pdf=joined_space,text=o['text']))
json.dump(res,open(S+'/sample40.json','w'),ensure_ascii=False,indent=1)
for r in res: print(r['id'],r['page'],r['method'][:8],r.get('ok'),'' if r.get('ok') else (r.get('pdf') or r.get('why') or r['text'])[:90])
