var red,blue

function setup() {
  createCanvas(800,400);
red = createSprite(600,350,30,80);
blue = createSprite(600,100,40,90);
red.shapeColor = "red";
blue.shapeColor = "blue";
blue.velocityY = 2;
red.velocityY = -2;
}

function draw() {
  background("black");  

if(red.x - blue.x < red.width/2 + blue.width/2) {
  red.velocityX = red.velocityX * -1;
  blue.velocityX = blue.velocityX * -1;
}
if(red.y - blue.y < red.height/2 + blue.height/2) {
  red.velocityY = red.velocityY * -1;
  blue.velocityY = blue.velocityY * -1;
}


  drawSprites();
}