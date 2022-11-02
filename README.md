## TESTS

Describes diceRoller();

test: it will return a random integer value between 1 and 6
code: diceRoller();
output: 1-6

<!-- test: it will keep score across multiple rolls of diceRoller()
code: diceroller()
output: total of # rolled so far -->

describes PlayerCreator();

test: it will create a player object with child object for total score
code: PlayerCreator
output: player1 {..} totalScore{..}


two player objects, storing name & current score

roll button, save&score button, new game
roll calls diceRoller(), save&score takes current turn total and pushes to score object


Describes 