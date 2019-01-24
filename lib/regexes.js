'use strict';

const STARTS_WITH_VOWEL = /^[aeiou]/i;
const STARTS_WITH_CONSONANT = /^[b-df-hj-np-tv-z]/i
const STARTS_WITH_TWO_CONSONANTS = /^[b-df-hj-np-tv-z]{2}/i;
const ENDS_WITH_VOWEL = /[aeiou]$/i;
const ENDS_WITH_CONSONANT = /[b-df-hj-np-tv-z]$/i;
const ENDS_WITH_Y = /y$/i;
const CAPTURE_LEADING_CONSONANTS = /^([b-df-hj-np-tv-z]{1,})([a-zA-Z]*)/i;
const PHRASE = /\w+/ig;

module.exports.startsWithVowel = (str) => {
  return STARTS_WITH_VOWEL.test(str);
}

module.exports.startsWithConsonant = (str) => {
  return STARTS_WITH_CONSONANT.test(str);
}

module.exports.startsWithTwoConsonants = (str) => {
  return STARTS_WITH_TWO_CONSONANTS.test(str);
}

module.exports.endsWithVowel = (str) => {
  return ENDS_WITH_VOWEL.test(str);
};

module.exports.endsWithConsonant = (str) => {
  return ENDS_WITH_CONSONANT.test(str);
};

module.exports.endsWithY = (str) => {
  return ENDS_WITH_Y.test(str);
};

module.exports.leadingConsonantsToEnd = (str) => {
  return str.replace(CAPTURE_LEADING_CONSONANTS, '$2$1');
};

module.exports.phrase = PHRASE;
