import Player from './../src/player.js';

describe('Player', () => {

  test('should create an object Player with the appropriate properties', () => {
    const myPlayer = new Player();
    expect(myPlayer.roundScore).toEqual(0);
    expect(myPlayer.totalScore).toEqual(0);
    expect(myPlayer.currentId).toEqual(0);
    expect(myPlayer.active).toEqual(1);
    expect(myPlayer.name).toEqual("");

  });
});

// expect(myPlayer).toEqual(Player,{roundScore: 0, totalScore: 0, currentId: 0, active: 1, name: ""})
