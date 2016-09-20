'use strict';

const PigLatin = require('../');
const expect = require('chai').expect;
const translator = new PigLatin('');

const assertTranslation = (expected) => {
  expect(translator.translate()).to.equal(expected);
}

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

  it('Respect puncttuation marks', () => {
    translator.reset('Three things: one, two, three.');
    assertTranslation('Eethray ingsthay: oneyay, otway, eethray.');
    translator.reset('fantastic!');
    assertTranslation('antasticfay!');
  });
});
