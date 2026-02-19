const STARTS_WITH_VOWEL = /^[aeiou]/i;
const STARTS_WITH_CONSONANT = /^[b-df-hj-np-tv-z]/i;
const STARTS_WITH_TWO_CONSONANTS = /^[b-df-hj-np-tv-z]{2}/i;
const ENDS_WITH_VOWEL = /[aeiou]$/i;
const ENDS_WITH_CONSONANT = /[b-df-hj-np-tv-z]$/i;
const ENDS_WITH_Y = /y$/i;
const CAPTURE_LEADING_CONSONANTS = /^(?<consonants>[b-df-hj-np-tv-z]{1,})(?<rest>[a-zA-Z]*)/i;
const PHRASE = /\w+/gi;

export const startsWithVowel = (str) => {
  return STARTS_WITH_VOWEL.test(str);
};

export const startsWithConsonant = (str) => {
  return STARTS_WITH_CONSONANT.test(str);
};

export const startsWithTwoConsonants = (str) => {
  return STARTS_WITH_TWO_CONSONANTS.test(str);
};

export const endsWithVowel = (str) => {
  return ENDS_WITH_VOWEL.test(str);
};

export const endsWithConsonant = (str) => {
  return ENDS_WITH_CONSONANT.test(str);
};

export const endsWithY = (str) => {
  return ENDS_WITH_Y.test(str);
};

export const leadingConsonantsToEnd = (str) => {
  return str.replace(CAPTURE_LEADING_CONSONANTS, '$<rest>$<consonants>');
};

export const phrase = PHRASE;
