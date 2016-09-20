'use strict';

const STARTS_WITH_VOWEL = /^[aeiou]/i;
const STARTS_WITH_CONSONANT = /^[b-df-hj-np-tv-z]{1}/i
const STARTS_WITH_TWO_CONSONANTS = /^[b-df-hj-np-tv-z]{2}/i;
const ENDS_WITH_VOWEL = /[aeiou]$/i;
const ENDS_WITH_CONSONANT = /[b-df-hj-np-tv-z]$/i;
const ENDS_WITH_Y = /y$/i;
const CAPTURE_LEADING_CONSONANTS = /^([b-df-hj-np-tv-z]{1,})([a-zA-Z]*)/i;
const PHRASE = /\w+/ig;
