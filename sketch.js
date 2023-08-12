var trex, trex_running; //add variable for collide image
var ground, groundImage;



function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  // load trex collided image
  
  groundImage = loadImage("ground2.png");
  

 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  

}

function draw() {
  background(180);
  
  console.log(trex.y)
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(ground);
  

  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  
}

