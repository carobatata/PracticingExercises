const reverseString = require('./05.- ReverseString')

it('should return ["o","l","l","e","h"] if array is ["h","e","l","l","o"]', () => {
  expect(reverseString(["h","e","l","l","o"])).toStrictEqual(["o","l","l","e","h"]);
});

it('should return ["h","a","n","n","a","H"] if array is ["H","a","n","n","a","h"]', () => {
  expect(reverseString(["H","a","n","n","a","h"])).toStrictEqual(["h","a","n","n","a","H"]);
});
