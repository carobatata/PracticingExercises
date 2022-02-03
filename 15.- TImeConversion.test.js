const timeConversion = require('./15.- TImeConversion')

it('should return "12:01:00" if input is "12:01:00PM"', () => {
  expect(timeConversion("12:01:00PM")).toBe("12:01:00");
});

it('should return "19:05:45" if input is "07:05:45PM"', () => {
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });

it('should return "00:01:00" if input is "12:01:00AM"', () => {
    expect(timeConversion("12:01:00AM")).toBe("00:01:00");
  });

it('should return "04:20:30" if input is "04:20:30AM"', () => {
    expect(timeConversion("04:20:30AM")).toBe("04:20:30");
  });

it('should return "16:20:30" if input is "04:20:30PM"', () => {
    expect(timeConversion("04:20:30PM")).toBe("16:20:30");
  });


