const removeElement = require('./04.- RemoveElement')

it('should return 2 if array is [3, 2, 2, 3]', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
});

it('should return 5 if array is [0, 1, 2, 2, 3, 0, 4, 2]', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
});

it('should return 8 if value is undefined', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], undefined)).toBe(8);
});

it('should return 8 if value is null', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], null)).toBe(8);
});

it('should return 0 if array is undefined', () => {
  expect(removeElement(undefined, 2)).toBe(0);
});