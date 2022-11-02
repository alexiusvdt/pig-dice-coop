// business logic

//this only takes 1 input. to add 2 players we'd need two specific constructors or a way to increment where it searches for
// player name
function Player() {
  this.playerScore = {}
  this.currentId = 0;
  // this.playerName = document.querySelector("form#player-name"); //update when HTML written
}

Player.prototype.playerAddScore = function(score) {
  score.id = this.assignId();
  this.playerScore = score;
}

Player.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function diceRoller(roundScore) {
  let rollResult = Math.floor(Math.random() * 6)+1;
  if (rollResult !== 1) {
    roundScore += rollResult
  } else {
    roundScore = 0
  }
  return roundScore
}



// ui logic

//this is what sets up the board
function newGame() {
  event.preventDefault()
  //specify any fields that we want erased prior to new game setup
  let player1 = new Player();
  let roundScore = 0;
}

//this selects the appropriate player
function turn() {
  
  player1.playerAddScore(roundScore);


window.addEventListener("load", function (){
  document.querySelector("form#dice-roller").addEventListener("submit", diceRoller);
  document.querySelector("form#new-game").addEventListener("submit", newGame);
});
