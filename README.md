# PigDice

#### By Alex Johnson & Dominic Magic

#### a short code review project for intermediate object-oriented javascript 

## Technologies Used

* HTML
* CSS
* javascript
* Bootstrap

## Description
A quick game of pig dice!

Pig is a simple dice game which in its basic form is playable with just a single die. You win by being the first player to score 100 or more points. You may roll the die as many times as you like, but if you roll a 1, you lose all accumulated points not yet 'banked' this round and your turn is OVER!

The question is: How lucky do you feel? Push your luck!


Check out the live [github pages site](https://alexiusvdt.github.io/pig-dice-coop/);

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

* If you find additional bugs not listed here, please email me at alex.johnson293@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## Additional thanks



## Future implementations

* Alternate rulesets: 
  * Hogshead (players may continue rolling on 1's, but two 1's in a row wipe the ENTIRE score, including banked amounts)
  * BossHog (players that roll two 6's in a row gain 20 points, other players lose 5)
  * PigPlus (players roll 2d6 instead of 1d6)


## License
MIT License

Copyright (c) 2022 Alex Johnson & Dominik Magic

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## TEST for TDD practice 
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


Describes Player
test: create a player object with multiple properties
code new Player
output player {..}, roundScore, totalScore, currentId, active, name



describes PlayerAddScore();

test3: it will take a players score upon ending their round & append to object with a unique ID
code: PlayerAddScore();
output: key value (id) and score


describes PlayerAssignId()

test4: it will increment a counter that acts as an index key for the score pair
code: PlayerAssignId()
output: key value(id)


describes newGame()

test(#whatever): it will reset the player object, set player 1 as active .
code: newGame()
output: scores = 0 and ids = 0, active =1

