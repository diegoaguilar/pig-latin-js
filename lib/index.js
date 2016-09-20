'use strict';

const translator = require('./translate');
let str;
class PigLatin {
  constructor(string) {
    if (typeof string !== 'string') {
      throw new Error('Invalid PigLatin initialization. Must be a string');
    }
    str = string;
  }

  phrase() {
    return str;
  }

  reset(newString) {
    str = newString;
  }

  translate() {
    return str === "" ? null : translator(str);
  }
}

module.exports = PigLatin;
