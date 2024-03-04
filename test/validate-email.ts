import * as func from '../src/validate-email';

describe('validate email', () => {
  const testCases = [
    { text: 'test123@email.com', expected: true },
    { text: 'name@something.', expected: false },
    { text: 'email@not', expected: false },
    { text: 'notvalid', expected: false },
    { text: 'user@', expected: false },
    { text: 'user@email.com', expected: true },
  ];

  for (const testCase of testCases) {
    it(`validate that "${testCase.text}" is${testCase.expected ? '' : ' not'} valid`, () => {
      const output = func.validateEmail(testCase.text);
      expect(output).toBe(testCase.expected);
    });
  }
});
