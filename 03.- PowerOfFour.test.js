const PowerOfFour = require('./03.- PowerOfFour');

it('should return true if input is 16', () => {
  expect(PowerOfFour(16)).toBe(true);
});

it('should return false if input is 5', () => {
  expect(PowerOfFour(5)).toBe(false);
});

it('should return false if input is 8', () => {
  expect(PowerOfFour(8)).toBe(false);
});

it('should return true if input is 1', () => {
  expect(PowerOfFour(1)).toBe(true);
});

it('should return false if input is undefined', () => {
  expect(PowerOfFour(undefined)).toBe(false);
});

it('should return false if input is null', () => {
  expect(PowerOfFour(null)).toBe(false);
});

it('should return false if input is negative', () => {
  expect(PowerOfFour(-16)).toBe(false);
});