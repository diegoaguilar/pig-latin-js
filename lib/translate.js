import * as regexes from './regexes.js';

const transformVowelPrefixed = (str) => {
  if (regexes.endsWithY(str)) {
    return str + 'nay';
  } else if (regexes.endsWithConsonant(str)) {
    return str + 'ay';
  } else {
    return str + 'yay';
  }
};

const transformConsonantPrefixed = (str) => {
  return str.slice(1) + str.at(0) + 'ay';
};

const transformMultiConsonantPrefixed = (str) => {
  return regexes.leadingConsonantsToEnd(str) + 'ay';
};

const conditionalCapitalize = (str, translated) => {
  const firstChar = str.at(0);
  if (firstChar === firstChar.toUpperCase()) {
    return translated.at(0).toUpperCase() + translated.slice(1).toLowerCase();
  } else {
    return translated;
  }
};

const wordTransform = (str) => {
  if (regexes.startsWithVowel(str)) {
    return conditionalCapitalize(str, transformVowelPrefixed(str));
  } else if (regexes.startsWithTwoConsonants(str)) {
    return conditionalCapitalize(str, transformMultiConsonantPrefixed(str));
  } else {
    return conditionalCapitalize(str, transformConsonantPrefixed(str));
  }
};

export default (str) => {
  return str.replace(regexes.phrase, wordTransform);
};
