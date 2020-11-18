// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
    // BLANK[1]
if ((10-i)>5) {
  stroke(255,0,0);
}

else{
  stroke(0,0,255)
}

let x = (10-i)*10 + 10;
ellipse(50,50,x);


}


}
