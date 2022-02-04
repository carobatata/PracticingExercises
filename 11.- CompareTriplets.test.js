const compareTriplets = require('./11.- CompareTriplets')

it('should return [1, 1] if array is "[5, 6, 7][3, 6, 10]"', () => {
  expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
});

it('should return [0, 0] if array is "[1, 1, 1][1, 1, 1]"', () => {
  expect(compareTriplets([1, 1, 1], [1, 1, 1])).toEqual([0, 0]);
});

it('should return [1, 0] if array is "[1, 1, 2][1, 1, 1]"', () => {
  expect(compareTriplets([1, 1, 2], [1, 1, 1])).toEqual([1, 0]);
});
