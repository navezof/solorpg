const rollDie = require('../roll');

describe('Testing rollDie function', () => {
  test('Rolling 1d6 equals 1-6', () => {
    const result = rollDie('1d6');
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(6);
  })
});
