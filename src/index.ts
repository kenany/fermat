import type { BigInteger } from 'bn';
import bn from 'bn';
import isString from 'lodash.isstring';

function nbs(s: string, base?: number): BigInteger {
  return bn.nbi().fromString(s, base || 10);
}

/**
 * Runs Fermat's probabilistic primality test on `n` using base 2.
 *
 * @param n The number to test. Pass a string to test numbers larger than
 *   `Number.MAX_SAFE_INTEGER`.
 * @returns `true` if `n` is probably prime, `false` if `n` is definitely
 *   composite.
 */
export function fermat(n: number | string): boolean {
  const x = isString(n) ? nbs(n) : bn.nbv(n);

  let t = bn.nbv(1);
  const bl = x.bitLength() - 1;
  const Bl = x.byteLength();
  for (let i = bl; i >= 0; --i) {
    t = t.square();
    if (t.byteLength() > Bl) {
      t = t.mod(x);
    }
    if (x.testBit(i)) {
      t = t.shiftLeft(1);
    }
  }
  if (t.compareTo(x) > 0) {
    t = t.mod(x);
  }
  return t.equals(bn.nbv(2));
}
