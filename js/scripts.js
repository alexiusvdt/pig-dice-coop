// business logic

//this only takes 1 input. to add 2 players we'd need two specific constructors or a way to increment where it searches for
// player name
function PlayerCreator() {
  this.playerScore = {}
  this.currentId = 0;
  this.playerName = document.querySelector("form#player-name"); //update when HTML written
}

PlayerCreator.prototype.playerAddScore = function(score) {
  playerScore.id = this.assignId();
  this.playerScore[score.id] = score;
}

PlayerCreator.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function diceRoller() {
  let result = Math.floor(Math.random() * 6)+1;
  return result
}


// ui logic

//this is what sets up the board
function newGame() {
  event.preventDefault()
  //specify any fields that we want erased prior to new game setup
  let player1 = new PlayerCreator();
  let player2 = new PlayerCreator();
  let activePlayer = player1 //maybe we specify via id?

}


//this is what triggers on dice roll
function handleDiceRoll() {

  let accumulatedPoints = 0;
  let result = diceRoller();
  if (result !== 1) {
    accumulatedPoints =+ result;
  } else {
    accumulatedPoints = 0;
    // printing message of "you lose your score!"
  }

  if (player1 turn) {
    player1.playerScore += accumulatedPoints;
  } else {
    player2.playerScore += accumulatedPoints;
  }
}

window.addEventListener("load", function (){
  document.querySelector("form#dice-roller").addEventListener("submit", handleDiceRoll);
  document.querySelector("form#new-game").addEventListener("submit", newGame);
});
