import PigLatin from '../index.js';
import { describe, it, expect } from 'vitest';

const translator = new PigLatin('');

const assertTranslation = (expected) => {
  expect(translator.translate()).toBe(expected);
};

describe('PigLatin multiple words, capitalized, punctuation and hyphen cases tests', () => {
  it('Should translate multiple words', () => {
    translator.reset('hello world special michelada');
    assertTranslation('ellohay orldway ecialspay icheladamay');
  });

  it('Should respect capitalized words', () => {
    translator.reset('Bill');
    assertTranslation('Illbay');
    translator.reset('bill Michelada');
    assertTranslation('illbay Icheladamay');
  });

  it('Respect punctuation marks', () => {
    translator.reset('Three things: one, two, three.');
    assertTranslation('Eethray ingsthay: oneyay, otway, eethray.');
    translator.reset('fantastic!');
    assertTranslation('antasticfay!');
  });
});
