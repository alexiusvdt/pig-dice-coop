export default function Player() {
    this.roundScore = 0;
    this.totalScore = 0;
    this.currentId = 0;
    this.active = 1;
    this.name = "";
}

Player.prototype.playerAddRoundScore = function(score) {
  this.roundScore += score;
}

Player.prototype.playerResetRoundScore = function() {
  this.roundScore = 0;
}
