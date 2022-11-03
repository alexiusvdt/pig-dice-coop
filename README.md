## TESTS

Describes diceRoller();

test1: it will return a random integer value between 1 and 6
code: diceRoller();
output: 1-6

test6: it will return a round score of 0 if user rolls a 1
code: diceroller();
output: 0

test 7: it will update & return round score of dice roll if !==1
code: diceroller();
output: 2

<!-- test6: when a user rolls a 1, it sets their round score to 0 and prompts to pass turn
code: diceRoller();
output: 0 -->

describes PlayerCreator();

test2: it will create a player object with child object for total score
code: PlayerCreator
output: player1 {..} totalScore{..}


describes PlayerAddScore();

test3: it will take a players score upon ending their round & append to object with a unique ID
code: PlayerAddScore();
output: key value (id) and score


describes PlayerAssignId()

test4: it will increment a counter that acts as an index key for the score pair
code: PlayerAssignId()
output: key value(id)


describes newGame()

test(#whatever): it will reset the player object .
code: newGame()
output: scores = 0 and ids = 0


<!-- describes newGame()

test: it will create a player object & reset 
code: newGame()
code: player1 {} -->


<!-- proposed/future tests -->
<!-- test: it will create a player object with a name element
code: PlayerCreator
output: player1 {..} totalScore {..} -->

<!-- test: it will keep score across multiple rolls of diceRoller()
code: diceroller()
output: total of # rolled so far -->

two player objects, storing name & current score

roll button, save&score button, new game
roll calls diceRoller(), save&score takes current turn total and pushes to score object


Describes 