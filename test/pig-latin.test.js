import PigLatin from '../index.js';
import { describe, it, expect } from 'vitest';

describe('PigLatin class tests suite', () => {
  it('Should create an instance of PigLatin by providing a string', () => {
    let pig = new PigLatin('michelada');
    expect(pig).toBeTruthy();
  });

  it('Should expose the string through #phrase', () => {
    let pig = new PigLatin('michelada');
    expect(pig.phrase()).toBe('michelada');
  });

  it('Should allow to reset the string through #reset keeping same instance', () => {
    let pig = new PigLatin('michelada');
    pig.reset('elixir');
    expect(pig.phrase()).toBe('elixir');
  });

  it('Should have a #translate method', () => {
    let pig = new PigLatin('michelada');
    expect(pig.translate).toBeDefined();
  });

  it('Should throw an err if no initializing with a string', () => {
    expect(() => {
      new PigLatin(['mi', 'che', 'la', 'da']);
    }).toThrow(Error);
  });
});
