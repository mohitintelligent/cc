var car;
var wall;
var speed=random(55,90);
var weight=random(400,1500);

function setup() {
  car=createCanvas(50,200,50,50);
  wall=createSprite(1500, 200, 60, hight/2);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  if (car.x-wall.x<(car.width+wall.width)/2){
    
    car.velocityX=0;
    
    var deformation = 0.5*weight*speed*speed/22500;
    
    if(deformation<100){

      car.shapeColor("green");

    }
     if(deformation>100&&deformation<180){
    
       car.shapeColor("yellow");
    
    }
      if(deformation>180){
        car.shapeColor("red");
    }

  }
  drawSprites();
}