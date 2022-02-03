const plusMinusResponses= require('./13.- PlusMinus')

it('should return "0.500000, 0.333333, 0.166667" if array is "[-4, 3, -9, 0, 4, 1]"', () => {
  expect(plusMinusResponses([-4, 3, -9, 0, 4, 1])).toEqual({positives: '0.500000', negatives: '0.333333' , zeros: '0.166667'});
});

it('should return "0.375000, 0.375000, 0.250000" if array is "[1, 2, 3, -1, -2, -3, 0, 0]"', () => {
    expect(plusMinusResponses([1, 2, 3, -1, -2, -3, 0, 0])).toEqual({positives: '0.375000', negatives: '0.375000' , zeros: '0.250000'});
  });
  