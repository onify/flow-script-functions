import * as func from './slugify';

describe('Slugify', () => {
  const text = 'Hello World!';
  const result = 'hello-world';

  it(`transform ${text} to ${result}`, () => {
    expect(func.slugify(text)).toBe(result);
  });
});
