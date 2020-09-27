var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(0,0,0)
}


function draw() {
  background("white"); 
  car.velocityX=speed
  if (car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<car.width/2+wall.width/2) {
    var d=0.5*weight*speed*speed/22500
    if (d<100){
      car.shapeColor="green"
      car.velocityX=0
    }
    
    else if (d>100&&d<180){
      car.shapeColor="red"
      car.velocityX=0
    }
    else if (d>180){
      car.shapeColor="blue"
      car.velocityX=0
    }
  }
else{
  car.shapeColor = 'grey'
}
  
  
    
  

  drawSprites();
}