var car, wall;
var speed, width;

function setup() {
  createCanvas(1600,400);
  
  wall=createSprite(1500,200,60,30);
  console.log(wall)
  wall.shapeColor=("red");
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.shapeColor="white";
  car.velocityX=speed;
  
  
}

function draw() {
  background("black");
  if( wall.x-car.x<car.width+wall.width)  {
car.velocityX=0;
deformation= 0.5*speed*speed;
if(deformation<100){
  car.shapeColor="red";
}
if(deformation>=100 && deformation<180){
  car.shapeColor="yellow";
}
if(deformation>180){
  car.shapeColor="green";
}
  }
    console.log('Wall Sprite in Draw', wall)
    drawSprites(); 
  
}