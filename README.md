#PigLatin

Famous PigLatin translator in JS.

## API

### `PigLatin`

This is a JS class which should be initialized by providing a string, if no initial argument or not a valid string is provded, an `Error` will be thrown.

`let translator = new PigLatin('michelada');`

### `#phrase`

It return current's instance string.
```
translator.phrase();
> 'michelada'
```

### `#reset`

It resets the current's instance string

### `#translate`

It transforms the current string according to PigLatin's set of rules.

## Implementation

The basic translation/classification rules of words has been implemented with the aid of regular expressions.
Also a few word transformations has been done by using regex captures and replacing, particular string transformations has been implemented using core `String` methods like `slice` or `replace`.

# Test

Run `npm i; npm test`
