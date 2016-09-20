'use strict';

const regexes = require('./regexes');

const transformConsonantPrefixed = (str) => {
  return str.slice(1) + str[0] + "ay";
}

const transformMultiConsonantPrefixed = (str) => {
  return regexes.leadingConsonantsToEnd(str) + 'ay';
}

