import * as func from '../src/generate-uuid';

describe('Generate UUID', () => {
  const output = func.generateUuid();

  it(`create UUID: ${output}`, () => {
    expect(output).toBeTruthy();
  });
});
