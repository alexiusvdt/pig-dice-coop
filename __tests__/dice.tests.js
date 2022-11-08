import Dice from './../src/dice.js';

describe('Dice', () => {
  test('shall return a random integer between 1 and 6', () => {
    let value = dice()
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(7);
  });
});


