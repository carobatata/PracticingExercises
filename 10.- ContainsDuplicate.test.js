const containsDuplicate = require('./10.- ContainsDuplicate')

it('should return true if nums = [1,2,3,1] ', () => {
  expect(containsDuplicate([1,2,3,1])).toBe(true);
});

it('should return false if nums = [1,2,3,4] ', () => {
    expect(containsDuplicate([1,2,3,4])).toBe(false);
  });

it('should return true if nums = [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
  });

it('should return false if nums = [0] ', () => {
    expect(containsDuplicate([0])).toBe(false);
  });

it('should return false if nums = [undefined] ', () => {
    expect(containsDuplicate([undefined])).toBe(false);
  });

it('should return false if nums = [1,2,3,-1] ', () => {
    expect(containsDuplicate([1,2,3,-1])).toBe(false);
  });

it('should return false if nums = undefined ', () => {
    expect(containsDuplicate(undefined)).toBe(false);
  });


it('should return false if nums = [] ', () => {
    expect(containsDuplicate([])).toBe(false);
  });



