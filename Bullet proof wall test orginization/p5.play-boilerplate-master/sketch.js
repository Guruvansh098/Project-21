var wall,thickness;
var bullet1,bullet2,speed,weight;
function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  speed=random(223,321)
  weight=random(30,52)

  bullet1=createSprite(50,300,50,20)
  bullet2=createSprite(50,200,50,20)
  
 bullet1.shapeColor=("gold") //good
  bullet2.shapeColor=("gold") //bad
 
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=("80,80,80")
bullet1.velocityX= speed;
bullet2.velocityX= speed;

}

function draw() {
  if(bullet1.isTouching(wall)){
  bullet1.velocityX=0
  bullet1.shapeColor=("green") //good
  
  } 
  
  if(bullet2.isTouching(wall)){
    bullet2.velocityX=0
    bullet2.shapeColor=("red") //bad
    
    } 

 
 
  background(255,255,255);  
  drawSprites();
}