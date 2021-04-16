var soldier, soldierImg;
var terrorist, terroristImg;
var gun, gunImg;
var bullet, bulletImg;
var bg, bgImg;
var hostage, hostageImg;
var knife, knifeImg;
var police, policeImg;
var greeting, greetingImg;

function preload(){
  soldierImg = loadImage("Hero Image.png");
  terroristImg = loadImage("Villian Image.png");
  gunImg = loadImage("Gun Image.png");
  bgImg = loadImage("Bg Image.jpg");
  hostageImg = loadImage("Hostage Image.png");
  knifeImg = loadImage("Knife Image.png");
  policeImg = loadImage("Police Group Image.png");
  greetingImg = loadImage("Greeting Image.png");
  bulletImg = loadImage("Bullet Image.png");
}

function setup() {
  createCanvas(1000,800);
  
  terrorist = createSprite(850,700,20,20);
  terrorist.addImage(terroristImg);

  soldier = createSprite(250,700, 20, 20);
  soldier.addImage(soldierImg);

  gun = createSprite(285,700,20,20);
  gun.addImage(gunImg);

  bullet = createSprite(300,690,20,5);
  bullet.addImage(bulletImg);

  hostage = createSprite(820,750,20,20);
  hostage.addImage(hostageImg);

  knife = createSprite(900,690,20,20);
  knife.addImage(knifeImg);
}

function draw() {
  background(bgImg);
  textSize(50);
  fill("black");
  text("Police Shooting Game", 250, 100);
  textSize(25);
  fill("blue");
  text("1.You are a policeman and there is a terrorist infront of you who is holding a hostage.", 50, 200);
  textSize(25);
  fill("blue");
  text("2.Kill the terrorist to save the little boy and get appreciation", 50, 230);

  if(keyDown("space")){
    bullet.velocityX = 100;
    terrorist.destroy();
    knife.destroy();
    gameOver();
    
  }
  drawSprites();
}

function gameOver(){
  police = createSprite(900,700,20,20);
  police.addImage(policeImg);
  greeting = createSprite(900,550,20,20);
  greeting.addImage(greetingImg);
}