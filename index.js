var bn = require('bn');
var isString = require('lodash.isstring');

function nbs(s, base) {
  base = base || 10
  var r = bn.nbi();
  return r.fromString(s, base);
}

function fermat(n) {
  n = isString(n)
    ? nbs(n)
    : bn.nbv(n);

  var t = bn.nbv(1);
  var bl = n.bitLength();
  bl--;
  var Bl = n.byteLength();
  for (var i = bl; i >= 0; --i) {
    t = t.square();
    if (t.byteLength() > Bl) {
      t = t.mod(n);
    }
    if (n.testBit(i)) {
      t = t.shiftLeft(1);
    }
  }
  if (t.compareTo(n) > 0) {
    t = t.mod(n);
  }
  return t.equals(bn.nbv(2));
}

module.exports = fermat;