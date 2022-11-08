import Player from './../src/player.js';

describe('Player', () => {

  test('should create an object Player with the appropriate properties', () => {
    const player = new Player(0,0,0,1,"James");
      expect(this.roundScore).toEqual(0)
      expect(this.totalScore).toEqual(0)
      expect(this.currentId).toEqual(0)
      expect(this.active).toEqual(0)
      expect(this.name).toEqual("James")
  });
});