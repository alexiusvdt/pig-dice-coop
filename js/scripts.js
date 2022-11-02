// business logic

//this only takes 1 input. to add 2 players we'd need two specific constructors or a way to increment where it searches for
// player name
function Player() {
  this.roundScore = 0;
  this.totalScore = 0;
  this.currentId = 0;
  // this.playerName = document.querySelector("form#player-name"); //update when HTML written
}

Player.prototype.playerAddRoundScore = function(score) {
  // score.id = this.assignId();
  this.roundScore += score;
}

Player.prototype.playerResetRoundScore = function() {
  this.roundScore = 0;
}

Player.prototype.playerAddTotalScore = function () {
  this.totalScore += this.roundScore;
}

Player.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function diceRoller() {
  let rollResult = Math.floor(Math.random() * 6)+1;
  if (rollResult !== 1) {
    player1.playerAddRoundScore(rollResult);
    displayResults(rollResult);
  } else {
    player1.playerResetRoundScore();
    displayRolled1(rollResult);
  }
}

function addToTotalScore() {
  player1.playerAddTotalScore();
  player1.playerResetRoundScore();
  displayResults();
}


// ui logic

let player1 = new Player();

//this is what sets up the board
function newGame() {
  event.preventDefault()
  //specify any fields that we want erased prior to new game setup
  let player1 = new Player();
  let roundScore = 0;
}

function displayResults(currentRoll) {
  document.getElementById('current-roll').innerText = currentRoll;
  document.getElementById('round-score').innerText = player1.roundScore;
  document.getElementById('total-score').innerText = player1.totalScore;
}

function displayRolled1(currentRoll) {
  document.getElementById('current-roll').innerText = currentRoll;
  document.getElementById('round-score').innerText = "You rolled 1, next player's turn!"
} 

//this selects the appropriate player
function turn() {}
  
// player1.playerAddScore(roundScore);


window.addEventListener("load", function() {
  document.getElementById('new-game').addEventListener('click', newGame);
  document.getElementById('button-roll').addEventListener('click', diceRoller);
  document.getElementById('button-pass').addEventListener('click', addToTotalScore);
});