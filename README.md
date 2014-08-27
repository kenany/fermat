# fermat

Fermat's probabilistic primality test.

## Example

``` javascript
var fermat = require('fermat');

fermat(7);
// => true

fermat(561);
// => true (not actually prime though)
```

## Installation

``` bash
$ npm install fermat
```

## API

``` javascript
var fermat = require('fermat');
```

### `fermat(n)`

Returns `true` if `n` is _probably_ prime. Returns `false` otherwise. `n` can be
either a _Number_ or a _String_.