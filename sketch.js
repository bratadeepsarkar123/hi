var car,wall;
var w=random(400,1500);
var s=random(55,90);
var d=5*w*s*s/225000;
function setup() {
  createCanvas(windowWidth,400);
  car=createSprite(25, 200, 50, 50);
  car.shapeColor="white";
 car.velocityX=s;
  

  wall=createSprite((93.75/100)*width,200,60,200);
  wall.shapeColor="pink";

 
}

function draw() {
  background("black");  
 
  
  

  if(wall.x-car.x<=(wall.width+car.width)/2) {
    if(d<100){
      car.shapeColor="green";
      
    }else if(d>100 && d<180){
      car.shapeColor="yellow";
      
    }else if(d>180){
      car.shapeColor="red";
      
    }else{
      car.shapeColor="white";
    }
    car.velocityX=0;
  }


  
  
  
  drawSprites();
}