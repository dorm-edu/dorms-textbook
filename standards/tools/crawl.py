import json, subprocess, sys, os
W=sys.argv[1]
T=open(W+'/tok').read().strip()
def post(url,data):
    args=['curl','-s','-c',W+'/cj','-b',W+'/cj','-H','X-CSRF-TOKEN: '+T,'-H','X-Requested-With: XMLHttpRequest','-e','https://ncic.re.kr/inv/org/list.do']
    for k,v in data.items(): args+=['--data-urlencode',f'{k}={v}']
    return json.loads(subprocess.run(args+[url],capture_output=True).stdout)
classes=post('https://ncic.re.kr/api/inv/inventoryNodeList.do',dict(type='ogi4',nowTblType='dwn',menuType='1',invDepth='2',degreeCode='1014',isAdmin='0'))
out=[]
for c in classes:
    leaves=post('https://ncic.re.kr/api/inv/inventoryNodeList.do',dict(type='ogi4',nowTblType='dwn',menuType='1',invDepth='3',degreeCode='1014',classCode=c['classCode'],openYear=c['openYear'],openMonth=c['openMonth'],isAdmin='0'))
    for l in leaves:
        f=post('https://ncic.re.kr/api/inv/invFileList.do',dict(invSeq=l.get('ref','0'),invYear=l['openYear'],orgType='ogi4',degreeCode='1014',classCode=l['classCode'],openYear=l['openYear'],openMonth=l['openMonth'],subjectCode=l['subjectCode'],nationCode='',type='dwn'))
        files=[dict(name=x['fileOrg'],attNo=x.get('orgAttNo'),ext=x.get('fileExt')) for x in f['data']['invFiles']]
        out.append(dict(cls=c['title'],subject=l['title'],subjectCode=l['subjectCode'],classCode=l['classCode'],openYear=l['openYear'],openMonth=l['openMonth'],files=files))
        print(c['title'],'|',l['title'],'|',[x['name'] for x in files],flush=True)
json.dump(out,open(W+'/catalog.json','w'),ensure_ascii=False,indent=1)
