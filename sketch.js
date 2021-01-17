var canvas, backgroundImage;

var database;

var game, form, player;
var gameState = 0;
var playerCount;

var allPlayers;

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
    
}

function draw(){

  if(playerCount === 2){
    game.update(1);

  }

  if(gameState === 1){
    clear();
    game.play();
  }

}

