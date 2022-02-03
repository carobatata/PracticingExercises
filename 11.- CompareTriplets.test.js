const compareTriplets = require('./11.- CompareTriplets')

it('should return [1, 1] if array is "[5, 6, 7][3, 6, 10]"', () => {
  expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
});
