#!/bin/bash
S=$1; P=/Users/shinchang/dorms-textbook/standards/sources/raw/b16_2022.pdf
N=$(pdfinfo $P | awk '/Pages/{print $2}')
for i in $(seq 1 $N); do
  [ -s $S/ocr16/p$i.txt ] && continue
  pdftoppm -f $i -l $i -r 150 -gray -png $P $S/ocr16/img$i
  f=$(ls $S/ocr16/img$i*.png | head -1)
  tesseract "$f" $S/ocr16/p$i -l kor --psm 6 >/dev/null 2>&1
  rm -f "$f"
  echo "page $i done"
done
echo ALLDONE
