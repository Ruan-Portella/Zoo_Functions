const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('teste 1', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('teste 2', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(expected);
  });
  it('teste 3', () => {
    const expected = 'The zoo is open';
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(expected);
  });
  it('teste 4', () => {
    const expected = 'The zoo is closed';
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(expected);
  });
  it('teste 5', () => {
    const expected = 'The day must be valid. Example: Monday';
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow(expected);
  });
  it('teste 6', () => {
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(expected);
  });
  it('teste 7', () => {
    const expected = 'The hour should represent a number';
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow(expected);
  });
  it('teste 8', () => {
    const expected = 'The minutes should represent a number';
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow(expected);
  });
  it('teste 9', () => {
    const expected = 'The hour must be between 0 and 12';
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow(expected);
  });
  it('teste 10', () => {
    const expected = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow(expected);
  });
});
