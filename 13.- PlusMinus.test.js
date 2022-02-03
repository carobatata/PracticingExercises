const plusMinusResponses= require('./13.- PlusMinus')

it('should return "0.500000, 0.333333, 0.166667" if array is "[-4, 3, -9, 0, 4, 1]"', () => {
  expect(plusMinusResponses([-4, 3, -9, 0, 4, 1])).toEqual({positives: '0.500000', negatives: '0.333333' , zeros: '0.166667'});
});

it('should return "0.375000, 0.375000, 0.250000" if array is "[1, 2, 3, -1, -2, -3, 0, 0]"', () => {
    expect(plusMinusResponses([1, 2, 3, -1, -2, -3, 0, 0])).toEqual({positives: '0.375000', negatives: '0.375000' , zeros: '0.250000'});
  });

it('should return "0.000000, 0.000000, 0.000000" if array is undefined"', () => {
    expect(plusMinusResponses(undefined)).toEqual({positives: '0.000000', negatives: '0.000000' , zeros: '0.000000'});
  });
  
it('should return "0.000000, 0.000000, 0.000000" if array is empty"', () => {
    expect(plusMinusResponses([])).toEqual({positives: '0.000000', negatives: '0.000000' , zeros: '0.000000'});
  });

it('should return "1.000000, 0.000000, 0.000000" if array has only positives numbers', () => {
    expect(plusMinusResponses([1, 2, 3, 4])).toEqual({positives: '1.000000', negatives: '0.000000' , zeros: '0.000000'});
  });

it('should return "0.000000, 1.000000, 0.000000" if array has only negatives numbers', () => {
    expect(plusMinusResponses([-1, -2, -3, -4])).toEqual({positives: '0.000000', negatives: '1.000000' , zeros: '0.000000'});
  });

it('should return "0.000000, 0.000000, 1.000000" if array has only zeros', () => {
    expect(plusMinusResponses([0, 0, 0, 0])).toEqual({positives: '0.000000', negatives: '0.000000' , zeros: '1.000000'});
  });