const maxSubArray = require('./02.- MaxSubArray')

it('should return 6 if array is [-2,1,-3,4,-1,2,1,-5,4]', () => {
  expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

it('should return 1 if array is [1]', () => {
  expect(maxSubArray([1])).toBe(1);
});

it('should return 23 if array is [5,4,-1,7,8]', () => {
  expect(maxSubArray([5,4,-1,7,8])).toBe(23);
});

