var bullet, wall, thickness;
var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  thickness = random(22,83);

  damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
}

function draw() {
  background("black"); 

    collided(wall,bullet);
    drawSprites();
}

function collided(wall,bullet){
  if(wall.x-bullet.x < (bullet.width + wall.width)/2){

    bullet.velocityX = 0;

    if (damage > 10){
      wall.shapeColor = color("red");
    }

    if (damage < 10){
      wall.shapeColor = color("green");
    }
  }
}