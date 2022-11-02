// business logic

//this only takes 1 input. to add 2 players we'd need two specific constructors or a way to increment where it searches for
// player name
function Player() {
  this.roundScore = 0;
  this.totalScore = 0;
  this.currentId = 0;
  this.active = 1;
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

Player.prototype.playerChangeActive = function() {
  if (this.active === 0) {
    this.active = 1;
  } else {
    this.active = 0;
  }
}

Player.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function currentPlayer() {
  let currentPlayer = document.getElementById('current-player').value;
  return currentPlayer;
}

function diceRoller() {
  let rollResult = Math.floor(Math.random() * 6)+1;
  if (player1.active === 1) {
    if (rollResult !== 1) {
      player1.playerAddRoundScore(rollResult);
      displayResultsP1(rollResult);
    } else {
      player1.playerResetRoundScore();
      displayRolled1P1(rollResult);
      player1.playerChangeActive();
    }
  } else {
    if (rollResult !== 1) {
      player2.playerAddRoundScore(rollResult);
      displayResultsP2(rollResult);
    } else {
      player2.playerResetRoundScore();
      displayRolled1P2(rollResult);
      player1.playerChangeActive();
    }
  }
}

//pushing scores & ending turns
function addToTotalScore() {
  player1.playerAddTotalScore();
  player1.playerResetRoundScore();
  player2.playerAddTotalScore();
  player2.playerResetRoundScore();
  displayResultsP1();
  displayResultsP2();
  player1.playerChangeActive();
}


// UI Logic

let player1 = new Player();
let player2 = new Player();

//this is what sets up the board
function newGame() {
  event.preventDefault()
  //specify any fields that we want erased prior to new game setup
  let player1 = new Player();
  let roundScore = 0;
  let lastPlayer = "player2"
}

function displayResultsP1(currentRoll) {
  document.getElementById('current-roll').innerText = currentRoll;
  document.getElementById('round-score').innerText = player1.roundScore;
  document.getElementById('total-score').innerText = player1.totalScore;
}

function displayResultsP2(currentRoll) {
  document.getElementById('current-roll2').innerText = currentRoll;
  document.getElementById('round-score2').innerText = player2.roundScore;
  document.getElementById('total-score2').innerText = player2.totalScore;
}

function displayRolled1P1(currentRoll) {
  document.getElementById('current-roll').innerText = currentRoll;
  document.getElementById('round-score').innerText = "You rolled 1, next player's turn!"
} 

function displayRolled1P2(currentRoll) {
  document.getElementById('current-roll2').innerText = currentRoll;
  document.getElementById('round-score2').innerText = "You rolled 1, next player's turn!"
} 

//this selects the appropriate player
// function passTurn() {
//   let currentPlayer = document.getElementById('current-player').innerText;;
//   if (currentPlayer === "1") {
//     document.getElementById('current-player').innerText = 2;
//   } else {
//     document.getElementById('current-player').innerText = 1;
//   }
//   let player = lastPlayer
// }





window.addEventListener("load", function() {
  document.getElementById('new-game').addEventListener('click', newGame);
  document.getElementById('button-roll').addEventListener('click', diceRoller);
  document.getElementById('button-pass').addEventListener('click', addToTotalScore);
});