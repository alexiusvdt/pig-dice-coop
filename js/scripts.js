// business logic

function PlayerCreator() {
  this.playerScore = {}
  this.currentId = 0;
}



function diceRoller() {
  let result = Math.floor(Math.random() * 6)+1;
  return result
}


// ui logic

//this is what triggers on dice roll
function handleEventSubmission() {
  

}