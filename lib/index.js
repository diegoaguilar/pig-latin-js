import translator from './translate.js';

class PigLatin {
  #str;

  constructor(string) {
    if (typeof string !== 'string') {
      throw new Error('Invalid PigLatin initialization. Must be a string');
    }
    this.#str = string;
  }

  phrase() {
    return this.#str;
  }

  reset(newString) {
    this.#str = newString;
  }

  translate() {
    return this.#str === '' ? null : translator(this.#str);
  }
}

export default PigLatin;
