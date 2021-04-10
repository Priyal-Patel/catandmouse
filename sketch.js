var garden,gardenImage;
var jerry,jerryImage1,jerryImage2,jerryImage3;
var tom,tomImage1,tomImage2,tomImage3;

function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    jerryImage1 = loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImage3 = loadAnimation("images/jerryFour.png")
    tomImage1 = loadAnimation("images/tomOne.png");
    tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImage3 = loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

   jerry = createSprite(200,600);
   jerry.addAnimation("jerryStanding",jerryImage1);
   jerry.scale = 0.15;
   
   tom = createSprite(870,600);
   tom.addAnimation("tomResting",tomImage1);
   tom.scale = 0.2;

   
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomlastimage",tomImage3);
        tom.scale = 0.2;
        tom.x = 300;
        tom.changeAnimation("tomlastimage");
        
        jerry.addAnimation("jerrylastimage",jerryImage3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerrylastimage");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode===LEFT_ARROW){
       tom.velocityX = -5;
       tom.addAnimation("tomMoving",tomImage2);
       tom.changeAnimation("tomMoving");

       jerry.addAnimation("jerryImage2",jerryImg2);
       jerry.changeAnimation("jerryImage2");
   }

}
