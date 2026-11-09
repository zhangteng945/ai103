#!/usr/bin/env python3
"""星火：文字选择题不能显示含Most Voted/绿框的网页题面截图。
保留原始截图作为私有归档；练习只显示PDF正文里独立的展图，不改答案、不抹去展图颜色。
"""
import json,sys,pathlib
import pymupdf
root=pathlib.Path('/workspace/ai103-redo-work');target=pathlib.Path(sys.argv[1]);version='202611092210'
qs=json.loads((root/'az305-full-candidate.json').read_text());pdf=pymupdf.open('/home/box/Downloads/AZ-305_with_discussion.pdf');result={}
for q in qs:
 if q.get('gradingMode')!='options':continue
 images=[]
 for i,asset in enumerate(q.get('source',{}).get('questionImages',[])):
  page=pdf[asset['page']-1];rect=pymupdf.Rect(asset['bbox'])
  if rect.width<15 or rect.height<15:continue
  name=f"az305/{version}/media/{q['id']}-exhibit-{i}.png";dest=target/'banks'/name;dest.parent.mkdir(parents=True,exist_ok=True)
  page.get_pixmap(matrix=pymupdf.Matrix(2,2),clip=rect,alpha=False).save(dest)
  images.append({'file':name,'page':asset['page']})
 result[q['id']]=images
(target/'question-exhibits.json').write_text(json.dumps(result))
print('独立题目展图',sum(map(len,result.values())))
