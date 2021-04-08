var cat,catImg;
var mouse,mouseImg;
var garden,gardenImg;
var catrun,mouserun,mouse2,mouse3,cat4;
var invisible;
function preload() {
  //load the images here
  gardenImg=loadImage("garden.png");
  catImg=loadImage("cat1.png");
  mouseImg=loadImage("mouse4.png");
  catrun=loadAnimation("cat2.png","cat3.png");
  mouserun=loadAnimation("mouse4.png");
  mouse2=loadAnimation("mouse1.png");
  mouse3=loadAnimation("mouse2.png","mouse3.png");
  cat4=loadAnimation("cat1.png");

}

function setup(){
    createCanvas(800,800);
    //create tom and jerry sprites here
    garden = createSprite(450,450);
    garden.addImage(gardenImg);
    garden.scale=1;

    cat = createSprite(700,700);
    cat.addImage(catImg);
    cat.scale=0.1;

    

    mouse = createSprite(100,700);
    mouse.addImage(mouseImg);
    //mouse.velocityX=3;
    mouse.scale=0.1;
    //mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
    //mouse.debug = true;
}
function draw() {
   background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<=(cat.width - mouse.width)/2){
        cat.x = 700;
        cat.velocityX=0;
        mouse.x=100;
        cat.addAnimation("cat4",cat4);
        cat.changeAnimation("cat4"); 

       }
       keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyDown("LEFT_ARROW")){
   cat.addAnimation("catrun",catrun);
   cat.changeAnimation("catrun");
   cat.velocityX=-3;

}
   if(keyDown("RIGHT_ARROW")){
    mouse.addAnimation("mouse2",mouse2);
    mouse.changeAnimation("mouse2");

   }

}
