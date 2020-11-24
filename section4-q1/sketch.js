// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」

let count = 1;
let cycle = 50;


function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  width = 100;
  height = 100;
  size = count;
  ellipse(width / 2, height / 2, size);
}
