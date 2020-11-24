// 最終課題を制作しよう

let x, y, vx, vy;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 8;
  vy = 8;
}

function draw(){
  background(0);
  nostroke();
  // BLANK[2] (hint: 作った star 関数を使います)
  star(x,y-50,10,vx*vy);
  star(x+35,y-25,10,vx*vy);
  star(x-35,y-25,10,vx*vy);
  star(x+15,y-30,10,vx*vy);
  star(x-15,y-30,10,vx*vy);
  star(x+8,y-40,10,vx*vy);
  star(x-8,y-40,10,vx*vy);
  star(x+25,y-27,10,vx*vy);
  star(x-25,y-27,10,vx*vy);
  star(x+18,y-10,10,vx*vy);
  star(x-18,y-10,10,vx*vy);
  star(x+27,y-15,10,vx*vy);
  star(x-27,y-15,10,vx*vy);
  star(x+28,y+12,10,vx*vy);
  star(x-28,y+12,10,vx*vy);
  star(x+23,y+2,10,vx*vy);
  star(x-23,y+2,10,vx*vy);
  star(x,y+5,10,vx*vy);
  star(x+14,y+9,10,vx*vy);
  star(x-14,y+9,10,vx*vy);



  x -= 2;
  y += 2;
  // 端の処理パターン (1) 反対側から出てくる
  if(x > width){ x = 0; }
  else if(x < 0){ x = width; }
  if(y > height){ y = 0; }
  if(y < 0){ y = height; }
}

function star(cx, cy, r, angle){
  beginShape();
  for(var i = 0; i < 20; i++){
    var theta = TWO_PI * i * 2 / 5 - HALF_PI + angle;
    // BLANK[1] (hint: angle 分だけ星を回転させるには？)
    var x = cx + cos(theta) * r;
    var y = cy + sin(theta) * r;
    vx = x * cos(theta) + y * sin(theta) + x;
    vy = x * sin(theta) - y * cos(theta) + y;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
