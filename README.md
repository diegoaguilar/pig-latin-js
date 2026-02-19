# PigLatin

Famous [PigLatin translator](https://en.wikipedia.org/wiki/Pig_Latin) in JS.

## Requirements

- Node.js >= 24.0.0

## Installation

```bash
npm install
```

## Usage

```javascript
import PigLatin from 'piglatin';

const translator = new PigLatin('hello world');
translator.translate(); // 'ellohay orldway'
```

## API

### `PigLatin`

This is a JS class which should be initialized by providing a string, if no initial argument or not a valid string is provided, an `Error` will be thrown.

```javascript
const translator = new PigLatin('michelada');
```

### `#phrase`

It returns the current instance string.
```javascript
translator.phrase();
// 'michelada'
```

### `#reset`

It resets the current instance string
```javascript
translator.reset('colima');
```

### `#translate`

It transforms the current string according to PigLatin's set of rules.
```javascript
translator.reset('michelada fria');
translator.phrase();
// 'michelada fria'
translator.translate();
// 'icheladamay iafray'
```

## Development

```bash
# Run tests
npm test

# Run tests once
npm run test:run

# Lint
npm run lint

# Fix lint issues
npm run lint:fix
```

## Implementation

The basic translation/classification [rules of translations](https://en.wikipedia.org/wiki/Pig_Latin#Rules) has been implemented with the aid of regular expressions with named capture groups:

```javascript
const CAPTURE_LEADING_CONSONANTS = /^(?<consonants>[b-df-hj-np-tv-z]{1,})(?<rest>[a-zA-Z]*)/i;
```

Also a few word transformations has been done by using regex captures and replacing, particular string transformations has been implemented using core `String` methods like `slice` or `replace`.
