const birthdayCakeCandles= require('./12.- BirthdayCakeCandles')

it('should return 2 if array is "[4, 4, 1, 3]"', () => {
  expect(birthdayCakeCandles([4, 4, 1, 3])).toBe(2);
});

it('should return 4 if array is "[4, 4, 4, 4, 1, 3]"', () => {
    expect(birthdayCakeCandles([4, 4, 4, 4, 1, 3])).toBe(4);
  });

it('should return 0 if array is empty', () => {
    expect(birthdayCakeCandles([])).toBe(0);
  });

it('should return 0 if array is undefined', () => {
    expect(birthdayCakeCandles(undefined)).toBe(0);
  });