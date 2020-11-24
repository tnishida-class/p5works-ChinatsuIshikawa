// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
  balloon("I love keyakizaka46",0,0);


}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 50;
  fill(0);　　
  rect(0, 0, w + p * 2, h + p * 2);
  triangle(w + p * 2, h + p * 2 + 20, w + p * 2, h + p * 2, w + p * 2 - 20, h + p * 2);
  fill(255);
  text(t, p, h + p);
}
  
