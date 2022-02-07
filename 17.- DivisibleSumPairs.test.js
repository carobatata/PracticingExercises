const divisibleSumPairs = require('./17.- DivisibleSumPairs')

it('should return 5 if inputs are grades are n = 6, k = 3  ar = [1, 3, 2, 6, 1, 2]', () => {
  expect(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])).toBe(5);
});

it('should return 3 if inputs are grades are n = 6, k = 5  ar = [1, 2, 3, 4, 5, 6]', () => {
    expect(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])).toBe(3);
  });

it('should return 0 if inputs are grades are n = 6, k = 0  ar = [1, 2, 3, 4, 5, 6]', () => {
expect(divisibleSumPairs(6, 0, [1, 2, 3, 4, 5, 6])).toBe(0);
  });

it('should return 0 if inputs are grades are n = 6, k = 2  ar = [undefined]', () => {
    expect(divisibleSumPairs(6, 2, [undefined])).toBe(0);
      });
