var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingSprite=createSprite(random(10,70),300,20,20);
    movingSprite.shapeColor="white";
    movingSprite.velocityX=3;
    movingSprite.velocityY=3;


    //create box sprite and give velocity
    fixSprite1=createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";
    
     fixSprite2=createSprite(300,590,180,20);
     fixSprite2.shapeColor="gren";
    
      fixSprite3=createSprite(500,590,180,20);
      fixSprite3.shapeColor="blue";
    
     fixSprite4=createSprite(700,590,180,20);
     fixSprite4.shapeColor="yellow";
    
    
}

function draw() {
    background(rgb(10,10,10));
    //create edgeSprite
   if(movingSprite.x<10){
       music.stop()
         movingSprite.velocityX=3
   }else if(movingsprite.x>800){
       music.stop()
         movingSprite.velocityx=-3
   }

    //add condition to check if box touching surface and make it box
    
    if(isTouching(movingSprite,fixSprite4)){
       music.play()
       movingSprite.shaprColor="yellow";
       bounceOff(movingSprite,fixSprite4)
    }
   else if(isTouching(movingSprite,fixSprite3)){
       music.play()
       movingSprite.shaprColor="blue";
       bounceOff(movingSprite,fixSprite3)
   }
    if(isTouching(movingSprite,fixSprite2)){
       music.play()
       movingSprite.shaprColor="green";
       bounceOff(movingSprite,fixSprite2)
       movingSprite.velocityX=0;
       movingSprite.velocityY=0;
    }
       if(isTouching(movingSprite,fixSprite1)){
       music.play()
       movingSprite.shaprColor="red";
       bounceOff(movingSprite,fixSprite1)
       }   
       
        if (movingSprite.y<0){
            music.stop()
            movingSprite.velocityY=3
        }
    
        drawSprites()
}
