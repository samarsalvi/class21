var fixedrect
var movingrect
var rectangle1, circle1







function setup() {
  createCanvas(1200,800);
  
 fixedrect = createSprite (600,400, 50, 80);
 fixedrect.shapeColor = "green"
 fixedrect.debug = true;

 movingrect = createSprite (400,200, 80, 30);
 movingrect.shapeColor = "green";
 movingrect.debug = true;
 
 rectangle1 = createSprite( 40, 300, 70 ,30);
 rectangle1.shapeColor = "green";
rectangle1.debug = true;

circle1 = createSprite(700, 650, 30, 80);
circle1.shapeColor = "green";
circle1.debug = true;

}

function draw() {
  background(0);  

movingrect.x =World.mouseX;
movingrect.y = World.mouseY;

 if (isTouching(movingrect, circle1)){
  movingrect.shapeColor = "cyan"
  circle1.shapeColor = "purple"


 } 
 else{
  movingrect.shapeColor = "green"
  circle1.shapeColor = "green"
 } 

  drawSprites();
}











