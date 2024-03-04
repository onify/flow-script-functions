import * as func from './slugify';

describe('slugify', () => {
  const testCases = [
    { text: 'Hello World!', expected: 'hello-world' },
    { text: 'Google', expected: 'google' },
    { text: 'Jag är en rejäl påg', expected: 'jag-ar-en-rejal-pag' },
    { text: 'комплекс', expected: '' },
    { text: 'Te$t1n£', expected: 'tet1n' },
  ];

  for (const testCase of testCases) {
    it(`transform "${testCase.text}" to "${testCase.expected}"`, () => {
      const output = func.slugify(testCase.text);
      expect(output).toBe(testCase.expected);
    });
  }
});
