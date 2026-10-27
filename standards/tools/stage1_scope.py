from config import *
def scope_of(u):
    s,b,sub=u['school'],u['band'],u['subject']
    if s=='common':
        if b=='sped': return [('b1003_2024',p) for p in SP_SCOPE[u['unit']]]
        return None
    if sub=='창의적 체험활동': return None
    if s=='hs': return SCOPE_HS.get(sub)
    return SCOPE.get((s,b,sub))
