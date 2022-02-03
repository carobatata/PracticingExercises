const PowerOfFour = require('./03.- PowerOfFour');

it('should return true if input is 16', () => {
  // console.log(expect(sum(3,5)));
  expect(PowerOfFour(16)).toBe(true);
});

it('should return false if input is 5', () => {
  // console.log(expect(sum(3,5)));
  expect(PowerOfFour(5)).toBe(false);
});

it('should return true if input is 1', () => {
  // console.log(expect(sum(3,5)));
  expect(PowerOfFour(1)).toBe(true);
});
