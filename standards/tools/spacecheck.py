"""For each standard (text-PDF docs), align HWP text with PDF page text and compare spacing exactly.
PDF: space -> 'S', newline -> '?' (unknown), else none. HWP: space->'S'. Mismatch if PDF says S and HWP none, or HWP S and PDF none."""
import json, re, sys, unicodedata
S=sys.argv[1]
std=json.load(open(S+'/raw_standards.json'))
cache={}
def pages(doc):
    if doc not in cache: cache[doc]=open(f'{S}/txt/{doc}.raw.txt',encoding='utf-8',errors='replace').read().split('\f')
    return cache[doc]
def tok(s,pdf):
    chars=[];sp=[]
    for ch in s:
        if ch in ' \t　\xa0':
            if chars: sp[-1]= sp[-1] if sp[-1]=='?' else 'S'
        elif ch=='\n':
            if chars: sp[-1]='?'
        else:
            chars.append(ch); sp.append('')
    return ''.join(chars),sp
res={}
for o in std:
    if o['doc'] in ('b16_2022','b15_2026','b1003_2026') or not o.get('pdfPage') or '⟦EQ' in o['text']: continue
    pg=pages(o['doc']); i=o['pdfPage']-1
    hay=pg[i]+('\n'+pg[i+1] if i+1<len(pg) else '')
    hc,hs=tok(hay,True); tc,ts=tok(o['text'],False)
    c0,s0=tok('['+o['printedCode']+']',False) if o.get('printedCode') else ('',[])
    k=hc.find(c0+tc)
    if k<0: k=hc.find(tc); off=k
    else: off=k+len(c0)
    if off<0: res[o['doc']+'|'+o['code']]='notfound'; continue
    bad=[]
    for j in range(len(tc)-1):
        p=hs[off+j]; h=ts[j]
        if p=='?': continue
        if (p=='S')!=(h=='S'): bad.append((j,tc[max(0,j-3):j+4],'pdf' if p=='S' else 'hwp'))
    res[o['doc']+'|'+o['code']]='ok' if not bad else bad
json.dump(res,open(S+'/spacecheck.json','w'),ensure_ascii=False)
from collections import Counter
print(Counter('ok' if v=='ok' else ('notfound' if v=='notfound' else 'spacing') for v in res.values()))
n=0
for k,v in res.items():
    if v not in ('ok',):
        print(k,v); n+=1
        if n>30: break
