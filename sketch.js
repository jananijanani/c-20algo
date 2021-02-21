var mr,fr;
function setup() {
  createCanvas(800,400);
 mr= createSprite(400, 200, 50, 50);
 fr=createSprite(200,200,50,50);
 mr.shapeColor="GREEN";
 fr.shapeColor="GREEN";
}

function draw() {
  background(0);
  mr.x=mouseX;
  mr.y=mouseY;
  if(mr.x-fr.x<fr.width/2+mr.width/2
    && fr.x-mr.x<fr.width/2+mr.width/2
    && mr.y-fr.y<fr.width/2+mr.width/2
    && fr.y-mr.y<fr.width/2+mr.width/2){
    mr.shapeColor="red";
    fr.shapeColor="red";
  }  
  else{
    mr.shapeColor="green";
    fr.shapeColor="green";
  }     
  drawSprites();
}