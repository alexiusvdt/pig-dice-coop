// import test, { beforeEach } from 'node:test';
import test from 'node:test';
import Player from './../src/player.js';

describe('Player', () => {
  const myPlayer = new Player();

  test('shall create an object Player with the appropriate properties', () => {
    expect(myPlayer.roundScore).toEqual(0);
    expect(myPlayer.totalScore).toEqual(0);
    expect(myPlayer.currentId).toEqual(0);
    expect(myPlayer.active).toEqual(1);
    expect(myPlayer.name).toEqual("");
  });

  test("shall increase the players round score by a given amount", () => {
    myPlayer.playerAddRoundScore(5)
    expect(myPlayer.roundScore).toEqual(5)
  });

  test("shall set the Player.roundScore to zero", () => {
    myPlayer.roundScore = 5
    myPlayer.playerResetRoundScore()
    expect(myPlayer.roundScore).toEqual(0)
  });

  test("shall add the players round score to the total score", () => {
    myPlayer.roundScore = 10
    myPlayer.playerAddTotalScore()
    expect(myPlayer.totalScore).toEqual(10);  
  });

  test("shall change the Player.active property to 1 or 0 ", () => {
    myPlayer.playerChangeActive()
    expect(myPlayer.active).toEqual(0);
    myPlayer.playerChangeActive();
    expect(myPlayer.active).toEqual(1);
  });
});