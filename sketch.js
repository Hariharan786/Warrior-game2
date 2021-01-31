var warrior;
var ground;
var enemy,enemyGroup,enemyRunning;
var warriorImage;
var warrioridle,warriorhurt;
var gameState="play";

function preload(){

   warriorImage=loadAnimation("pcsprites/walk1.png","pcsprites/walk2.png","pcsprites/walk3.png","pcsprites/walk4.png","pcsprites/walk5.png");
   warrioridle=loadAnimation("pcsprites/idle.png");
   enemyRunning=loadAnimation("pcsprites/run.png","pcsprites/run2w.png","pcsprites/run3w.png","pcsprites/run4w.png","pcsprites/run5w.png");
   warriorhurt=loadAnimation("pcsprites/hurt1.png","pcsprites/hurt2.png","pcsprites/hurt3.png","pcsprites/hurt4.png","pcsprites/hurt5last.png");

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    warrior = createSprite(windowWidth/2-200,windowHeight-200,50,40);
    warrior.addAnimation("idle",warrioridle);
    warrior.addAnimation("walking",warriorImage);
    warrior.scale=2;
    
    ground = createSprite(windowWidth/2,windowHeight-50,windowWidth,50);
    ground.visible = false;

    enemyGroup= new Group;
    
    
    
    
    
    
    
}

function draw (){
 background("green");

 if(gameState="play"){

 

    if(keyDown("UP_ARROW")){
        warrior.y= warrior.y-2;
    }

    if(keyDown("DOWN_ARROW")){
        warrior.y= warrior.y+2;
    }
    if(keyWentDown("D")){
        
       warrior.changeAnimation("walking",warriorImage);
    }
    if(keyWentUp("D")){
        warrior.changeAnimation("idle",warrioridle);
    
    }
    
    
    if(keyDown("space")&& enemyGroup.isTouching(warrior)){
        enemyGroup[0].destroy();
    }
    if(enemyGroup.isTouching(warrior)){
        warrior.addAnimation("hurt",warriorhurt);
        warrior.changeAnimation("hurt",warriorhurt);
    }

    enemy.changeAnimation("running",enemyRunning);


    warrior.collide(ground);

    enmeyspawn();
 }
 drawSprites();


}

function enmeyspawn(){
    if(frameCount%30===0){
        enemy = createSprite(windowWidth+20,Math.round(random(windowHeight-1200,windowHeight-10)),50,40);
        
        enemy.velocityX=-3;
        enemy.scale = 1.5;
        enemyGroup.add(enemy);
    }
};

