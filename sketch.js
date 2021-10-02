var wall1img,wall2img,wall3img,wall4img,wall5img,wall6img,wall7img,wall8img,wall9img,wall10img,wall11img;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11;

var obstacleimg,obstacle;

var characterimg,character;

var boximg,box;

var support,support2,supportimg,support2img;

var cactus,cactus1,cactus2;

var cactusimg,cactus1img,cactus2img;

var price,priceimg;

var teleporter1,teleporter2;

var teleporter1img,teleporter2img;

var mazetext,mazetextimg;

var gameover,gameoverimg;

var cactusarmy;

var gameState="start";


//var gamestate=0,gamestate=1,gamestate=2,gamestate=3;

var home,homeimg,start,startimg,settings,settingsimg;

var reset,resetimg;

var homebutton,homebuttonimg;

var next,nextimg;

var win,winimg;

var win1,win1img;

var s1,s2,s3;

var border1,border2,border3,border4;
var border1img,border2img,border3img,border4img;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,
w21,w22,w23,w24,w25,w26,w27,w28,w29,w30,w31,w32,w33,w34,w35,w36,w37,w38,w39,w40;
var w1img,w2img,w3img,w4img,w5img,w6img,w7img,w8img,w9img,w10img,w11img,w12img,w13img,w14img,w15img,w16img,w17img,w18img,w19img,w20img,w21img,w22img,w23img,w24img,w25img,w26img,w27img,w28img,w29img,w30img,w31img,w32img,w33img,w34img,w35img,w36img,w37img,w38img,w39img,w40img;
var playerimg,player;
var ball1,ball2;
var ball1img,ball2img;
var price1,price1img;

function preload(){
  //walls
  wall1img = loadImage("Images/Wall1.png");
  wall2img = loadImage("Images/Wall2.png");
  wall3img = loadImage("Images/Wall3.png");
  wall4img = loadImage("Images/Wall4.png");
  wall5img = loadImage("Images/Wall5.png");
  wall6img = loadImage("Images/Wall6.png");
  wall7img = loadImage("Images/Wall7.png");
  wall8img = loadImage("Images/Wall8.png");
  wall9img = loadImage("Images/Wall9.png");
  wall10img = loadImage("Images/Wall10.png");
  wall11img = loadImage("Images/Wall11.png");

  //Obstacle
  obstacleimg = loadImage("Images/OBSTACLE.png");

  //character
  characterimg = loadImage("Images/Character.png");

  //box
  boximg = loadImage("Images/Box.png");

  //support
  supportimg = loadImage("Images/Support.png")
  support2img = loadImage("Images/Support2.png")

  //cactus
  cactusimg = loadImage("Images/Cactus.png")
  cactus1img = loadImage("Images/Cactus - 1.png")
  cactus2img =loadImage("Images/Cactus - 2.png")

  //price
  priceimg =loadImage("Images/Price.png")

  //Teleporters
  teleporter1img = loadImage("Images/Teleporter1.png")
  teleporter2img = loadImage("Images/Teleporter2.png")

  //Maze Text
  mazetextimg = loadImage("Images/Maze Text.png")

  //gameover
  gameoverimg = loadImage("Images/Gameover.png")

  //home
  homeimg = loadImage("Images/Home Page.png")

  //start
  startimg = loadImage("Images/START BUTTON.png")

  //settings
  settingsimg = loadImage("Images/SETTINGS.png")

  //reset
  resetimg = loadImage("Images/Reset Button.png")

  //homebutton
  homebuttonimg = loadImage("Images/Homebutton.png")

  //next
  nextimg = loadImage("Images/NEXT.png")

  //WIN
  winimg = loadImage("Images/WIN PAGE.png")

  //WIN
  win1img = loadImage("Images1/Win1.png")

  //sounds
  s1 = loadSound("Sounds/bg.mp3")
  s2 = loadSound("Sounds/death.mp3")
  s3 = loadSound("Sounds/win.wav")
  

  //player
 playerimg=loadImage("Images1/Player.png")

 //Map border
 border1img=loadImage("Images1/BORDER1.png")
 border2img=loadImage("Images1/BORDER2.png")
 border3img=loadImage("Images1/BORDER1.png")
 border4img=loadImage("Images1/BORDER2.png")
 
 //walls
 w1img=loadImage("Images1/1.png")
 w2img=loadImage("Images1/2.png")
 w3img=loadImage("Images1/3.png")
 w4img=loadImage("Images1/4.png")
 w5img=loadImage("Images1/5.png")
 w6img=loadImage("Images1/6.png")
 w7img=loadImage("Images1/7.png")
 w8img=loadImage("Images1/8.png")
 w9img=loadImage("Images1/9.png")
 w10img=loadImage("Images1/10.png")
 w11img=loadImage("Images1/11.png")
 w12img=loadImage("Images1/12.png")
 w13img=loadImage("Images1/13.png")
 w14img=loadImage("Images1/14.png")
 w15img=loadImage("Images1/15.png")
 w16img=loadImage("Images1/16.png") 
 w17img=loadImage("Images1/17.png")
 w18img=loadImage("Images1/18.png")
 w19img=loadImage("Images1/19.png")
 w20img=loadImage("Images1/20.png") 
 w21img=loadImage("Images1/21.png")
 w22img=loadImage("Images1/22.png")
 w23img=loadImage("Images1/23.png")
 w24img=loadImage("Images1/24.png")
 w25img=loadImage("Images1/25.png")
 w26img=loadImage("Images1/26.png")
 w27img=loadImage("Images1/27.png")
 w28img=loadImage("Images1/28.png")
 w29img=loadImage("Images1/29.png")
 w30img=loadImage("Images1/30.png")
 w31img=loadImage("Images1/31.png")
 w32img=loadImage("Images1/32.png")
 w33img=loadImage("Images1/33.png")
 w34img=loadImage("Images1/34.png")
 w35img=loadImage("Images1/35.png")
 w36img=loadImage("Images1/36.png")
 w37img=loadImage("Images1/37.png")
 w38img=loadImage("Images1/38.png")
 w39img=loadImage("Images1/39.png")
 w40img=loadImage("Images1/40.png")
 ball1img=loadImage("Images1/Ball1.png")
 ball2img=loadImage("Images1/Ball2.png")
 price1img=loadImage("Images1/Price1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //Start
  setStart();

  //LevelOne
  setLevelOne();

  //LevelTwo
  setLevelTwo();

  //end
  setEnd();

    //next
    next=createSprite(750,700)
    next.addImage("next",nextimg);
    next.scale=0.3;
    next.visible=false;
    //win
    win=createSprite(750,300)
    win.addImage("win",winimg);
    win.scale=0.2;
    win.visible=false;

    win1=createSprite(750,300)
    win1.addImage("win1",win1img);
    win1.scale=0.2;
    win1.visible=false;

    
}



function draw() {

  background("CYAN");
  text(mouseX+":"+mouseY,mouseX,mouseY)

  //START Gamestate
  if(gameState==="start"){
    
    startState();
    setLevelOne();
    setLevelTwo();

    
  }

  //LEVEL 1 Gamestate
  if(gameState==="LevelOne"){
	  playLevelOne();
    
  }

  //LEVEL 2 Gamestate
  if(gameState==="LevelTwo"){
    playLevelTwo();
  }


  //END State
  if(gameState === "End"){
    endState();
    setLevelOne();
    setLevelTwo();
  }

  //END2 State
  if(gameState === "End2"){
    end2State();
    setLevelTwo();
  }


  //Win State
  if(gameState === "Win"){
    Win();
    setLevelOne();
    setLevelTwo();
  }

  //Win2 State
  if(gameState === "Win2"){
    Win2();
    setLevelOne();
    setLevelTwo();
  }

  drawSprites();
}

function startState(){


  home.visible=true;
  start.visible=true;
  start.visible=true;
  settings.visible=true;

  if(mousePressedOver(start)){
   gameState="LevelOne";
  }

}

function setStart(){
  
//home
home=createSprite(750,400)
home.addImage("home",homeimg);
home.scale=0.18;
home.visible=false;
//start
start=createSprite(1200,720)
start.addImage("start",startimg);
start.scale=0.15;
start.visible=false;
//setting
settings=createSprite(1450,50)
settings.addImage("settings",settingsimg);
settings.scale=0.15;
settings.visible=false;
}

function setLevelOne(){
     //wall1 
     wall1=createSprite(155,58)
     wall1.addImage("WALL1",wall1img);
     wall1.scale=0.14;
     wall1.visible=false;
   
     //wall2 
     wall2=createSprite(288,223)
     wall2.addImage("WALL2",wall2img);
     wall2.scale=0.15;
     wall2.visible=false;
   
     //wall3
     wall3=createSprite(350,387)
     wall3.addImage("WALL3",wall3img);
     wall3.scale=0.15;
     wall3.visible=false;
   
     //wall4
     wall4=createSprite(397,258)
     wall4.addImage("WALL4",wall4img);
     wall4.scale=0.15;
     wall4.visible=false;
     
      //wall5
      wall5=createSprite(510,120)
      wall5.addImage("WALL5",wall5img);
      wall5.scale=0.15;
      wall5.visible=false;
   
     //wall6
     wall6=createSprite(633,165)
     wall6.addImage("WALL6",wall6img);
     wall6.scale=0.15;
     wall6.visible=false;
   
      //wall7
      wall7=createSprite(554,203)
      wall7.addImage("WALL7",wall7img);
      wall7.scale=0.15;
      wall7.visible=false;
   
     //wall8
     wall8=createSprite(465,309)
     wall8.addImage("WALL8",wall8img);
     wall8.scale=0.15;
     wall8.visible=false;
   
     //wall9
     wall9=createSprite(344,436)
     wall9.addImage("WALL9",wall9img);
     wall9.scale=0.15;
     wall9.visible=false;
   
     //wall10
     wall10=createSprite(221,286)
     wall10.addImage("WALL10",wall10img);
     wall10.scale=0.15;
     wall10.visible=false;
   
     //wall11
     wall11=createSprite(118,125)
     wall11.addImage("WALL11",wall11img);
     wall11.scale=0.15;
     wall11.visible=false;
   
     //OBSTACLE
     obstacle=createSprite(13,91.7)
     obstacle.addImage("Obstale",obstacleimg);
     obstacle.scale=0.22;
     obstacle.visible=false;
   
     //character
     character=createSprite(50,100)
     character.addImage("Character",characterimg)
     character.scale=0.2;
     character.visible=false;
   
     //box
     box=createSprite(100,110)
     box.addImage("Box",boximg)
     box.scale=0.2;
     box.visible=false;
   
     //support
     support=createSprite(240,255)
     support.addImage("Support",supportimg);
     support.scale=0.15;
     support.visible=false;
   
     support2=createSprite(425,160)
     support2.addImage("Support2",support2img);
     support2.scale=0.15;
     support2.visible=false;
   
     //cactus
     cactus1=createSprite(233,238)
     cactus1.addImage("Cactus1",cactus1img);
     cactus1.scale=0.015;
     cactus1.visible=false;
   
     cactus2=createSprite(420,265)
     cactus2.addImage("Cactus2",cactus2img);
     cactus2.scale=0.020;
     cactus2.setCollider("rectangle",0,0,cactus2.width,cactus2.height);
     cactus2.visible=false;
   
     //price
     price=createSprite(612,180)
     price.addImage("Price",priceimg);
     price.scale=0.08;
     price.visible=false;
   
     //Teleporters
     teleporter1=createSprite(430,400)
     teleporter1.addImage("Teleporter1",teleporter1img);
     teleporter1.scale=0.16;
     teleporter1.visible=false;
   
     teleporter2=createSprite(425,140)
     teleporter2.addImage("Teleporter2",teleporter2img);
     teleporter2.scale=0.16;
     teleporter2.visible=false;
   
     //mazetext
     mazetext=createSprite(850,280)
     mazetext.addImage("MazeText",mazetextimg);
     mazetext.scale=0.1;
     mazetext.visible=false;

     cactusarmy=createGroup();
   
     
}

function playLevelOne(){

  
  start.visible=false;
  settings.visible=false;
  home.visible=false;

  
  wall1.visible=true;
  wall2.visible=true;
  wall3.visible=true;
  wall4.visible=true;
  wall5.visible=true;
  wall6.visible=true;
  wall6.visible=true;
  wall7.visible=true;
  wall7.visible=true;
  wall8.visible=true;
  wall9.visible=true;
  wall10.visible=true;
  wall11.visible=true;
  obstacle.visible=true;
  support.visible=true;
  support2.visible=true;
  teleporter1.visible=true;
  teleporter2.visible=true;
  cactus1.visible=true;
  cactus2.visible=true;
  character.visible=true;
  mazetext.visible=true;
  price.visible=true;
  box.visible=true;

//character movement
if (keyDown("left")) {
  
  character.x = character.x-5;
}

if (keyDown("right"))  {

  character.x = character.x +5;
}

if (keyDown("down"))  {
 
  character.y = character.y +5;
}

if (keyDown("up"))  {
  character.y = character.y -2;

}


character.collide(wall1);
character.collide(wall2);
character.collide(wall3);
character.collide(wall4);
character.collide(wall5);
character.collide(wall6);
character.collide(wall7);
character.collide(wall8);
character.collide(wall9);
character.collide(wall10);
character.collide(wall11);
character.collide(obstacle);
character.collide(support2);
character.displace(box);

box.collide(wall11);

box.collide(wall1);
box.collide(wall2);
box.collide(wall3);
box.collide(wall4);
box.collide(wall5);
box.collide(wall6);
box.collide(wall7);
box.collide(wall8);
box.collide(wall9);
box.collide(wall10);
box.collide(obstacle);
cactus2.bounceOff(wall9);
cactus2.bounceOff(support2);
box.velocityY=box.velocityY+2;
cactus2.velocityY=cactus2.velocityY+2;

if(box.isTouching(cactus1)){
  cactus1.destroy();
  support.destroy();
}

if(character.isTouching(teleporter1)){
  character.x=teleporter2.x;
  character.y=teleporter2.y;
}

if(character.isTouching(cactusarmy)){
 gameState="End";
 s2.play()
 s2.setVolume(0.03)
}


if(character.isTouching(cactus1)){
 gameState="End";
 s2.play()
 s2.setVolume(0.03)
}

if(character.isTouching(cactus2)){
  gameState="End";
  s2.play()
  s2.setVolume(0.03)
}

if(character.isTouching(price)){
 gameState="Win";
 s3.play()
 s3.setVolume(0.03)
}

Spawncactus();

}


function Spawncactus(){

  if(frameCount%50===0){
    cactus=createSprite(530,80)
    cactus.addImage("Cactus",cactusimg);
    cactus.scale=0.013;
    cactus.x=Math.round(random(510,540))
    cactus.velocityY=2;
    cactusarmy.add(cactus);
  }
}

function setLevelTwo(){

  createCanvas(windowWidth,windowHeight);

  border1=createSprite(750,50) 
  border1.addImage("border1",border1img);
  border1.scale=0.26;
  
  border2=createSprite(380,410) 
  border2.addImage("border2",border2img);
  border2.scale=0.26;

  border3=createSprite(750,770) 
  border3.addImage("border3",border3img);
  border3.scale=0.26;

   
  border4=createSprite(1120,410) 
  border4.addImage("border4",border4img);
  border4.scale=0.26;


  w1=createSprite(478,410)
  w1.addImage("wall1",w1img);
  w1.scale=0.26;

  w2=createSprite(438,280)
  w2.addImage("wall2",w2img);
  w2.scale=0.26;

  w3=createSprite(565,320)
  w3.addImage("wall3",w3img);
  w3.scale=0.26;

  w4=createSprite(665,320)
  w4.addImage("wall4",w4img);
  w4.scale=0.26;

  w5=createSprite(765,370)
  w5.addImage("wall5",w5img);
  w5.scale=0.26;

  w6=createSprite(845,330)
  w6.addImage("wall6",w6img);
  w6.scale=0.26;

  w7=createSprite(880,430)
  w7.addImage("wall7",w7img);
  w7.scale=0.26;

  w8=createSprite(990,390)
  w8.addImage("wall8",w8img);
  w8.scale=0.26;

  w9=createSprite(1030,420)
  w9.addImage("wall9",w9img);
  w9.scale=0.26;

  w10=createSprite(1070,455)
  w10.addImage("wall10",w10img);
  w10.scale=0.26;

  w11=createSprite(720,510)
  w11.addImage("wall11",w11img);
  w11.scale=0.26;

  w12=createSprite(840,550)
  w12.addImage("wall12",w12img);
  w12.scale=0.26;

  w13=createSprite(960,550)
  w13.addImage("wall13",w13img);
  w13.scale=0.26;

  w14=createSprite(1090,550)
  w14.addImage("wall14",w14img);
  w14.scale=0.26;

  w15=createSprite(982,630)
  w15.addImage("wall15",w15img);
  w15.scale=0.26;

  w16=createSprite(450,480)
  w16.addImage("wall16",w16img);
  w16.scale=0.26;

  w17=createSprite(395,560)
  w17.addImage("wall17",w17img);
  w17.scale=0.26;

  w18=createSprite(450,660)
  w18.addImage("wall18",w18img);
  w18.scale=0.26;

  w19=createSprite(610,740)
  w19.addImage("wall19",w19img);
  w19.scale=0.26;

  w20=createSprite(750,642)
  w20.addImage("wall20",w20img);
  w20.scale=0.26;

  w21=createSprite(600,550)
  w21.addImage("wall21",w21img);
  w21.scale=0.26;

  w22=createSprite(1090,100)
  w22.addImage("wall22",w22img);
  w22.scale=0.26;

  w23=createSprite(690,550)
  w23.addImage("wall23",w23img);
  w23.scale=0.26;

  w24=createSprite(650,600)
  w24.addImage("wall24",w24img);
  w24.scale=0.26;

  w25=createSprite(785,265)
  w25.addImage("wall25",w25img);
  w25.scale=0.26;

  w26=createSprite(770,180)
  w26.addImage("wall26",w26img);
  w26.scale=0.26;

  w27=createSprite(600,180)
  w27.addImage("wall27",w27img);
  w27.scale=0.26;

  w28=createSprite(665,202)
  w28.addImage("wall28",w28img);
  w28.scale=0.26;

  w29=createSprite(930,180)
  w29.addImage("wall29",w29img);
  w29.scale=0.26;

  w30=createSprite(1030,260)
  w30.addImage("wall30",w30img);
  w30.scale=0.26;

  w31=createSprite(740,70)
  w31.addImage("wall31",w31img);
  w31.scale=0.26;
    
  w32=createSprite(410,150)
  w32.addImage("wall32",w32img);
  w32.scale=0.26;
 
  w33=createSprite(570,150)
  w33.addImage("wall33",w33img);
  w33.scale=0.26;
  
  w34=createSprite(900,135)
  w34.addImage("wall34",w34img);
  w34.scale=0.26;

  w35=createSprite(635,145)
  w35.addImage("wall35",w35img);
  w35.scale=0.26;
  
  w36=createSprite(700,155)
  w36.addImage("wall36",w36img);
  w36.scale=0.26;
  
  w37=createSprite(770,145)
  w37.addImage("wall37",w37img);
  w37.scale=0.26;
  
  w38=createSprite(840,650)
  w38.addImage("wall38",w38img);
  w38.scale=0.26;

  w39=createSprite(840,720)
  w39.addImage("wall39",w39img);
  w39.scale=0.26;

  
  w40=createSprite(1030,160)
  w40.addImage("wall40",w40img);
  w40.scale=0.26;

  player=createSprite(420,380)
  player.addImage("player",playerimg);
  player.scale=0.26;

  ball1=createSprite(700,110)
  ball1.addImage("ball1",ball1img);
  ball1.scale=0.26;

  ball2=createSprite(965,300)
  ball2.addImage("ball2",ball2img);
  ball2.scale=0.26;

  price1=createSprite(1090,600)
  price1.addImage("price1",price1img);
  price1.scale=0.26;

  ball1.velocityY=3;
  ball2.velocityY=9;

  border1.visible=false;
  border2.visible=false;
  border3.visible=false;
  border4.visible=false;
  w1.visible=false;
  w2.visible=false;
  w3.visible=false;
  w4.visible=false;
  w5.visible=false;
  w6.visible=false;
  w7.visible=false;
  w8.visible=false;
  w9.visible=false;
  w10.visible=false;
  w11.visible=false;
  w12.visible=false;
  w13.visible=false;
  w14.visible=false;
  w15.visible=false;
  w16.visible=false;
  w17.visible=false;
  w18.visible=false;
  w19.visible=false;
  w20.visible=false;
  w21.visible=false;
  w22.visible=false;
  w23.visible=false;
  w24.visible=false;
  w24.visible=false;
  w25.visible=false;
  w26.visible=false;
  w27.visible=false;
  w28.visible=false;
  w29.visible=false;
  w30.visible=false;
  w31.visible=false;
  w32.visible=false;
  w33.visible=false;
  w34.visible=false;
  w35.visible=false;
  w36.visible=false;
  w37.visible=false;
  w38.visible=false;
  w39.visible=false;
  w40.visible=false;
  player.visible=false;
  price1.visible=false;
  ball1.visible=false;
  ball2.visible=false;
}

function playLevelTwo(){

  if (keyDown("right"))  {
    player.velocityX=6;
    player.velocityY=0;
   }
   if (keyDown("left"))  {
    player.velocityX=-6;
    player.velocityY=0;
   }
   if (keyDown("up"))  {
    player.velocityY=-6;
    player.velocityX=0;
   }
   if (keyDown("down"))  {
    player.velocityY=6;
    player.velocityX=0;
   }
   
   if(player.isTouching(ball1)){
    gameState="End2";
    s2.play()
    s2.setVolume(0.03)
  }

  if(player.isTouching(ball2)){
    gameState="End2";
    s2.play()
    s2.setVolume(0.03)
  }

  if(player.isTouching(price1)){
    gameState="Win2";
    s3.play()
    s3.setVolume(0.03)
  }

   ball1.bounceOff(w31);
   ball1.bounceOff(w36);
   ball2.bounceOff(w8);
   ball2.bounceOff(w29);
   player.bounceOff(w1);
   player.bounceOff(w2);
   player.bounceOff(w3);
   player.bounceOff(w4);
   player.bounceOff(w5);
   player.bounceOff(w6);
   player.bounceOff(w7); 
   player.bounceOff(w8);
   player.bounceOff(w9);
   player.bounceOff(w10); 
   player.bounceOff(w11);
   player.bounceOff(w12);
   player.bounceOff(w13);
   player.bounceOff(w14);
   player.bounceOff(w15);
   player.bounceOff(w16);
   player.bounceOff(w17);
   player.bounceOff(w18);
   player.bounceOff(w19);
   player.bounceOff(w20);
   player.bounceOff(w21);
   player.bounceOff(w22);
   player.bounceOff(w23);
   player.bounceOff(w24);
   player.bounceOff(w25);
   player.bounceOff(w26);
   player.bounceOff(w27); 
   player.bounceOff(w28);
   player.bounceOff(w29);
   player.bounceOff(w30); 
   player.bounceOff(w31);
   player.bounceOff(w32);
   player.bounceOff(w33);
   player.bounceOff(w34);
   player.bounceOff(w35);
   player.bounceOff(w36);
   player.bounceOff(w37);
   player.bounceOff(w38);
   player.bounceOff(w39);
   player.bounceOff(w40);

   player.bounceOff(border1);
   player.bounceOff(border2);
   player.bounceOff(border3);
   player.bounceOff(border4);
 
   border1.visible=true;
   border2.visible=true;
   border3.visible=true;
   border4.visible=true;
   w1.visible=true;
   w2.visible=true;
   w3.visible=true;
   w4.visible=true;
   w5.visible=true;
   w6.visible=true;
   w7.visible=true;
   w8.visible=true;
   w9.visible=true;
   w10.visible=true;
   w11.visible=true;
   w12.visible=true;
   w13.visible=true;
   w14.visible=true;
   w15.visible=true;
   w16.visible=true;
   w17.visible=true;
   w18.visible=true;
   w19.visible=true;
   w20.visible=true;
   w21.visible=true;
   w22.visible=true;
   w23.visible=true;
   w24.visible=true;
   w24.visible=true;
   w25.visible=true;
   w26.visible=true;
   w27.visible=true;
   w28.visible=true;
   w29.visible=true;
   w30.visible=true;
   w31.visible=true;
   w32.visible=true;
   w33.visible=true;
   w34.visible=true;
   w35.visible=true;
   w36.visible=true;
   w37.visible=true;
   w38.visible=true;
   w39.visible=true;
   w40.visible=true;
   player.visible=true;
   price1.visible=true;
   ball1.visible=true;
   ball2.visible=true;
   

}

function setEnd(){

  //gameover
  gameover=createSprite(750,400)
  gameover.addImage("Gameover",gameoverimg);
  gameover.scale=0.15;
  gameover.visible=false;

  //reset
  reset=createSprite(660,590)
  reset.addImage("Reset",resetimg);
  reset.scale=0.1;
  reset.visible=false;
 
  //homebutton
  homebutton=createSprite(800,590)
  homebutton.addImage("Homebutton",homebuttonimg);
  homebutton.scale=0.21;
  homebutton.visible=false;
 
 
}

function endState(){
  
  reset.visible=true;
  gameover.visible=true;
  homebutton.visible=true;
  wall1.visible=false;
  wall2.visible=false;
  wall3.visible=false;
  wall4.visible=false;
  wall5.visible=false;
  wall6.visible=false;
  wall7.visible=false;
  wall8.visible=false;
  wall9.visible=false;
  wall10.visible=false;
  wall11.visible=false;
  box.visible=false;
  cactus.visible=false;
  cactus1.visible=false;
  cactus2.visible=false;
  character.visible=false;
  support.visible=false;
  support2.visible=false;
  price.visible=false;
  obstacle.visible=false;
  teleporter1.visible=false;
  teleporter2.visible=false;
  mazetext.visible=false;
  cactusarmy.destroyEach();

  if(mousePressedOver(reset)){
    gameState = "LevelOne";
    gameover.visible = false;
    reset.visible = false;
    homebutton.visible = false;
  }

  if(mousePressedOver(homebutton)){
    gameState = "start";
    gameover.visible = false;
    reset.visible = false;
    homebutton.visible = false;
  }

}




function end2State(){

  reset.visible=true;
  gameover.visible=true;
  homebutton.visible=true;
  border1.visible=false;
  border2.visible=false;
  border3.visible=false;
  border4.visible=false;
  w1.visible=false;
  w2.visible=false;
  w3.visible=false;
  w4.visible=false;
  w5.visible=false;
  w6.visible=false;
  w7.visible=false;
  w8.visible=false;
  w9.visible=false;
  w10.visible=false;
  w11.visible=false;
  w12.visible=false;
  w13.visible=false;
  w14.visible=false;
  w15.visible=false;
  w16.visible=false;
  w17.visible=false;
  w18.visible=false;
  w19.visible=false;
  w20.visible=false;
  w21.visible=false;
  w22.visible=false;
  w23.visible=false;
  w24.visible=false;
  w24.visible=false;
  w25.visible=false;
  w26.visible=false;
  w27.visible=false;
  w28.visible=false;
  w29.visible=false;
  w30.visible=false;
  w31.visible=false;
  w32.visible=false;
  w33.visible=false;
  w34.visible=false;
  w35.visible=false;
  w36.visible=false;
  w37.visible=false;
  w38.visible=false;
  w39.visible=false;
  w40.visible=false;
  player.visible=false;
  price1.visible=false;
  ball1.visible=false;
  ball2.visible=false;

  if(mousePressedOver(reset)){
    gameState = "LevelTwo";
    gameover.visible = false;
    reset.visible = false;
    homebutton.visible = false;
  }

  if(mousePressedOver(homebutton)){
    gameState = "start";
    gameover.visible = false;
    reset.visible = false;
    homebutton.visible = false;
  }

}
function Win(){

 
 next.visible = true;
 win.visible = true;
 wall1.visible=false;
 wall2.visible=false;
 wall3.visible=false;
 wall4.visible=false;
 wall5.visible=false;
 wall6.visible=false;
 wall7.visible=false;
 wall8.visible=false;
 wall9.visible=false;
 wall10.visible=false;
 wall11.visible=false;
 box.visible=false;
 cactus.visible=false;
 cactus1.visible=false;
 cactus2.visible=false;
 character.visible=false;
 support.visible=false;
 support2.visible=false;
 price.visible=false;
 obstacle.visible=false;
 teleporter1.visible=false;
 teleporter2.visible=false;
 mazetext.visible=false;
 cactusarmy.destroyEach();

 if(mousePressedOver(next)){
   gameState = "LevelTwo";
   next.visible = false;
   win.visible = false;
 }
}

function Win2(){

  win1.visible=true;
  reset.visible=true;
  homebutton.visible=true;
  border1.visible=false;
  border2.visible=false;
  border3.visible=false;
  border4.visible=false;
  w1.visible=false;
  w2.visible=false;
  w3.visible=false;
  w4.visible=false;
  w5.visible=false;
  w6.visible=false;
  w7.visible=false;
  w8.visible=false;
  w9.visible=false;
  w10.visible=false;
  w11.visible=false;
  w12.visible=false;
  w13.visible=false;
  w14.visible=false;
  w15.visible=false;
  w16.visible=false;
  w17.visible=false;
  w18.visible=false;
  w19.visible=false;
  w20.visible=false;
  w21.visible=false;
  w22.visible=false;
  w23.visible=false;
  w24.visible=false;
  w24.visible=false;
  w25.visible=false;
  w26.visible=false;
  w27.visible=false;
  w28.visible=false;
  w29.visible=false;
  w30.visible=false;
  w31.visible=false;
  w32.visible=false;
  w33.visible=false;
  w34.visible=false;
  w35.visible=false;
  w36.visible=false;
  w37.visible=false;
  w38.visible=false;
  w39.visible=false;
  w40.visible=false;
  player.visible=false;
  price1.visible=false;
  ball1.visible=false;
  ball2.visible=false;

  if(mousePressedOver(reset)){
    gameState = "LevelTwo";
    gameover.visible = false;
    reset.visible = false;
    homebutton.visible = false;
    win1.visible=false;
  }

  if(mousePressedOver(homebutton)){
    gameState = "start";
    gameover.visible = false;
    reset.visible = false;
    homebutton.visible = false;
    win1.visible=false;
  }

}
