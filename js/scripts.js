// business logic

function Player() {
  this.roundScore = 0;
  this.totalScore = 0;
  this.currentId = 0;
  this.active = 1;
  this.name = "";
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
  if (player1.totalScore >= 100) {
    winner = player1;
    winGame(winner);
  } else if (player2.totalScore >= 100) {
    winner = player2;
    winGame(winner);
  } else {
  player1.playerChangeActive();
  }
}

function cheat() {
  player2.totalScore = 101;
}


// UI Logic

let player1 = new Player();
let player2 = new Player();

//this is what sets up the board
function newGame() {
  event.preventDefault()
  Object.keys(player1).forEach(function(key) {
    player1[key] = 0
  });
  Object.keys(player2).forEach(function(key) {
    player2[key] = 0
  });
  player1.active = 1
  player1.name = document.querySelector("#player1-name").value;
  player2.name = document.querySelector("#player2-name").value;
  // console.log("players should have names ", player1.name, player2.name)
  displayResultsP1(0);
  displayResultsP2(0);
  document.getElementById('gameboard').removeAttribute("class");
  document.getElementById('winner').setAttribute("class", "-hidden");
}

function winGame(winner) {
document.getElementById("winner-name").innerText = winner.name
// console.log("playerID appended", winner)
document.getElementById("winning-score").innerText = winner.totalScore
document.getElementById('winner').removeAttribute("class")
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


window.addEventListener("load", function() {
  document.getElementById('new-game').addEventListener('click', newGame);
  document.getElementById('button-roll').addEventListener('click', diceRoller);
  document.getElementById('button-pass').addEventListener('click', addToTotalScore);
  document.getElementById('button-cheat').addEventListener('click', cheat)
});