var fixedrect,movingrect


function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200, 200, 30, 50);
  fixedrect.shapeColor="blue"
  fixedrect.velocityX=5
  movingrect=createSprite(700,200,65,25)
  movingrect.shapeColor="blue"
  movingrect.velocityX=-5
}

function draw() {
  background(0);  
  //movingrect.x=mouseX
  //movingrect.y=mouseY

 
   bounceOff(movingrect,fixedrect)
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2 ){

      object1.velocityX=object1.velocityX*-1
    object2.velocityX=object2.velocityX*-1

    
    }
    if(object1.y-object2.y<object1.height/2+object2.height/2 && 
      object2.y-object1.y<object1.height/2+object2.height/2 ){

        object1.velocityY=object1.velocityY*-1
        object2.velocityY=object2.velocityY*-1
        
      }


}