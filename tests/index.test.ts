import carmichaels from 'carmichaels';
import { fermat } from 'fermat';
import { describe, expect, it } from 'vitest';
import { primes } from './primes';

// 2 is prime but fails the base-2 test, so skip it.
const oddPrimes = primes.slice(1);

describe('fermat', () => {
  it.each(oddPrimes)('should pass prime %i', (p) => {
    expect(fermat(p)).toBe(true);
  });

  it.each(oddPrimes)('should fail composite %i + 3', (p) => {
    expect(fermat(p + 3)).toBe(false);
  });

  it.each(carmichaels)('should pass Carmichael number %s', (c) => {
    expect(fermat(c)).toBe(true);
  });
});
