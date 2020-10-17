var bullet, wall, speed, weight, damage, thickness;
var object1, object2;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(400,200,20,10);
  //bullet.shapeColor = color("white");
  wall = createSprite(1500, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);

  thickness = random(22, 83);

  //assigning bullet's random speed and weight 
  speed = random(223, 321);
  weight = random(30, 52);
  bullet.velocityX = speed;
}

function draw() {
  background("white");

  //if bullet hits wall, calculate damage
  if(bulletoof(bullet,wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness)
    if (damage >= 10){
      wall.shapeColor = color(255, 0, 0);

    }
  
    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);

    }
  }

  drawSprites();
}

function bulletoof(object1,object2){
  if(object2.x - object1.x < (object2.width + object1.width)/2){
  return true;
  }
}
