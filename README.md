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


describes PlayerAddScore();

test: it will take a players score upon ending their round & append to object with a unique ID
code: PlayerAddScore();
output: key value (id) and score

describes PlayerAssignId()

test: it will increment a counter that acts as an index key for the score pair
code: PlayerAssignId()
output: key value(id)




two player objects, storing name & current score

roll button, save&score button, new game
roll calls diceRoller(), save&score takes current turn total and pushes to score object


Describes 