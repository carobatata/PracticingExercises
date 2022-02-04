const gradingStudents = require('./16.- GradingStudents')

it('should return [75, 67, 40, 33] if grades are [73, 67, 38, 33 ]', () => {
  expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});

it('should return [80, 81, 37, 33] if grades are [80, 81, 37, 33 ]', () => {
  expect(gradingStudents([80, 81, 37, 33])).toEqual([80, 81, 37, 33]);
});

it('should return [24] if grades are [24]', () => {
  expect(gradingStudents([24])).toEqual([24]);
});
