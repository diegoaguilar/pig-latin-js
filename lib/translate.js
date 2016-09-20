'use strict';

const regexes = require('./regexes');

const transformVowelPrefixed = (str) => {
  if (regexes.endsWithY(str)) {
    return str + "nay";
  } else if (regexes.endsWithConsonant(str)) {
    return str + "ay";
  } else {
    return str + "yay";
  }
}

const transformConsonantPrefixed = (str) => {
  return str.slice(1) + str[0] + "ay";
}

const transformMultiConsonantPrefixed = (str) => {
  return regexes.leadingConsonantsToEnd(str) + 'ay';
}

const conditionalCapitalize = (str, translated) => {
  let firstChar = str.charAt(0);
  if (firstChar === firstChar.toUpperCase()) {
    return translated[0].toUpperCase() + translated.slice(1).toLowerCase();
  } else {
    return translated;
  }
};

