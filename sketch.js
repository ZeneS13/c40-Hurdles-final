var canvas, backgroundImg, playerCount, database,CurrentPos;
var form, player, game,allPlayers,currPlayer;
var gameState = 0; 

var ath1,ath2,ath3,ath4,bg;
var aths = [];
var ath;

var hurdleImg;

var athlete;

var hpos,hpos2,hpos3,hpos4;
var wpos,wpos2,wpos3,wpos4;

//CNates = Coordinates;
var bgImg,ath1Img,ath2Img,ath3Img,ath4Img,athCNates;

var athletes = [];

var hurdles = [];
var hurdles2 =[];
var hurdles3 = [];
var hurdles4 =[];

var hurdlesIndex;

function preload(){
  bgImg = loadImage("background.jpg");
  athCNates = loadJSON('athlete.json');
  ath1Img = loadImage('testSonic.png');

  hurdleImg = loadImage('obstacle.png');
}

function setup(){

database = firebase.database();
canvas = createCanvas(displayWidth,displayHeight);

game = new Game();
game.getState();
game.start(); 

hpos = 440;
wpos = displayWidth*2.5;

hpos2 = 440
wpos2 = displayWidth*3.5;

hpos3 = 440;
wpos3 = displayWidth*4;

hpos4 = 440;
wpos4 = displayWidth*4.5;

hurdlesIndex = 0;
}

function draw(){

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
    console.log("gameStateIs2");
   
  }

  
 
}