'use strict';

const bn = require('bn');
const isString = require('lodash.isstring');

/**
 * @param {string} s
 * @param {number} base
 */
function nbs(s, base) {
  base = base || 10;
  const r = bn.nbi();
  return r.fromString(s, base);
}

/**
 * @param {number | string} n
 * @returns {boolean}
 */
function fermat(n) {
  n = isString(n)
    ? nbs(n)
    : bn.nbv(n);

  let t = bn.nbv(1);
  let bl = n.bitLength();
  bl--;
  const Bl = n.byteLength();
  for (let i = bl; i >= 0; --i) {
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
