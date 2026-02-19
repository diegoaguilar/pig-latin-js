import PigLatin from '../index.js';
import { describe, it, expect } from 'vitest';

const translator = new PigLatin('');

const assertTranslation = (expected) => {
  expect(translator.translate()).toBe(expected);
};

describe('PigLatin translate method tests suite', () => {
  describe('Words which start with vowel', () => {
    it('Translate ask to askay', () => {
      translator.reset('ask');
      assertTranslation('askay');
    });
    it('Translate arroz to arrozay', () => {
      translator.reset('arroz');
      assertTranslation('arrozay');
    });
    it('Translate apple to appleyay', () => {
      translator.reset('apple');
      assertTranslation('appleyay');
    });
    it('Translate oso to osoyay', () => {
      translator.reset('oso');
      assertTranslation('osoyay');
    });
    it('Translate any to anynay', () => {
      translator.reset('any');
      assertTranslation('anynay');
    });
  });

  describe('Words which start with a single consonant', () => {
    it('Translate hello to ellohay', () => {
      translator.reset('hello');
      assertTranslation('ellohay');
    });
    it('Translate world to orldway', () => {
      translator.reset('world');
      assertTranslation('orldway');
    });
    it('Translate michelada to icheladamay', () => {
      translator.reset('michelada');
      assertTranslation('icheladamay');
    });
  });

  describe('Words that start with multiple consonants', () => {
    it('Translate known to ownknay', () => {
      translator.reset('known');
      assertTranslation('ownknay');
    });
    it('Translate special to ecialspay', () => {
      translator.reset('special');
      assertTranslation('ecialspay');
    });
  });
});
