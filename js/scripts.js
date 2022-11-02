// business logic

function PlayerCreator() {
  this.playerScore = {}
  this.currentId = 0;
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

//this is what triggers on dice roll
function handleEventSubmission() {
  

}