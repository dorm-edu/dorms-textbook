"""Minimal HWP5 paragraph extractor with inline equation scripts. Usage: hwpx.py in.hwp out.json"""
import sys, struct, zlib, json, olefile, re
EQED = (ord('e')<<24)|(ord('q')<<16)|(ord('e')<<8)|ord('d')
def recs(data):
    i=0;n=len(data)
    while i+4<=n:
        h=struct.unpack('<I',data[i:i+4])[0]; i+=4
        tag=h&0x3FF; lvl=(h>>10)&0x3FF; size=(h>>20)&0xFFF
        if size==0xFFF: size=struct.unpack('<I',data[i:i+4])[0]; i+=4
        yield tag,lvl,data[i:i+size]; i+=size
def main(src,dst):
    f=olefile.OleFileIO(src)
    comp=bool(struct.unpack('<I',f.openstream('FileHeader').read()[36:40])[0]&1)
    secs=sorted((e for e in f.listdir() if e[0]=='BodyText'),key=lambda e:int(re.search(r'(\d+)',e[-1]).group(1)))
    paras=[]
    for e in secs:
        d=f.openstream('/'.join(e)).read()
        if comp: d=zlib.decompress(d,-15)
        bylvl={}; lastctrl=None
        for tag,lvl,p in recs(d):
            if tag==66:
                para={'raw':b'','ctrls':[]}; paras.append(para); bylvl[lvl]=para
            elif tag==67:
                bylvl[lvl-1]['raw']=p
            elif tag==71:
                cid=struct.unpack('<I',p[:4])[0]; c={'id':cid,'eq':None}
                if (lvl-1) in bylvl: bylvl[lvl-1]['ctrls'].append(c)
                lastctrl=(lvl,c)
            elif tag==88 and lastctrl and lastctrl[0]==lvl-1:
                L=struct.unpack('<H',p[4:6])[0]
                lastctrl[1]['eq']=p[6:6+2*L].decode('utf-16le','replace')
    out=[]
    for para in paras:
        raw=para['raw']; j=0; units=[]; ci=0; text=[]
        buf=bytearray()
        def flush():
            if buf: text.append(bytes(buf).decode('utf-16le','replace')); buf.clear()
        while j+1<len(raw):
            c=struct.unpack('<H',raw[j:j+2])[0]
            if c in (10,13): flush(); text.append('\n'); j+=2
            elif c==9: flush(); text.append('\t'); j+=16
            elif c in (0,24,25,26,27,28,29,30,31): j+=2
            elif c in (1,2,3,11,12,14,15,16,17,18,21,22,23):
                flush()
                cid=struct.unpack('<I',raw[j+2:j+6])[0]
                ctrl=para['ctrls'][ci] if ci<len(para['ctrls']) else None
                ci+=1
                if cid==EQED:
                    if ctrl is None or ctrl['id']!=EQED: text.append('\u27e6EQ:?\u27e7')
                    else: text.append('\u27e6EQ:'+(ctrl['eq'] or '')+'\u27e7')
                j+=16
            elif 4<=c<=23: j+=16
            else: buf+=raw[j:j+2]; j+=2
        flush()
        t=''.join(text)
        out.append(t)
    json.dump(out,open(dst,'w'),ensure_ascii=False)
main(sys.argv[1],sys.argv[2])
