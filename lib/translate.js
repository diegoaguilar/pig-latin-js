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

