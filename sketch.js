var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4,gameObject5,gameObject6

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  movingRect.debug = true;
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green"
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green"
  gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green"
gameObject4=createSprite(400,100,50,50);
gameObject4.shapeColor="green"
gameObject5=createSprite(700,300,50,50);
gameObject5.shapeColor="yellow"
gameObject5.velocityX=3;
gameObject6=createSprite(900,300,50,50);
gameObject6.shapeColor="yellow"
gameObject6.velocityX=-3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(gameObject5,gameObject6)
if (isTouching(movingRect,gameObject4)){
  movingRect.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
}
else{
  movingRect.shapeColor = "green";
  gameObject4.shapeColor = "green";
}
 
  drawSprites();
}
function isTouching(object1,object2){
  //movingrect=object1
  //fixedrect=object2
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}
}
function bounceOff(object1,object2){
  if (isTouching(object1,object2)){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
  else{
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
  }
}
