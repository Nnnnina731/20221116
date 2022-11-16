var mic
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  mic= new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220);
    textSize(40)
    text("X:"+mouseX+" Y:"+mouseY,50,50)
  push()
  translate(width/2,height/2)
  fill(160,82,45)
  ellipse(-110,-175,90)
  ellipse(110,-175,90)
  fill(139,69,19)
  ellipse(-105,-165,60)
  ellipse(105,-165,60)
  fill(160,82,45)
  ellipse(0,0,400)
  fill(245,222,179)
  ellipse(0,50,100,125)
  fill(0)
  ellipse(-45,-25,40)
  ellipse(45,-25,40)
  fill(0)
  ellipse(0,25,35,40)

 }