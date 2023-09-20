'use strict';

const test = require('tape');
const carmichaels = require('carmichaels');
const fermat = require('../');

let primes = require('./primes.json');

primes = primes.slice(1);

test('primes', function(t) {
  t.plan(primes.length);

  primes.forEach(function(p) {
    t.ok(fermat(p), 'prime: ' + p);
  });
});

test('composites', function(t) {
  t.plan(primes.length);

  primes.forEach(function(p) {
    t.notOk(fermat(p + 3), 'composite: ' + p + ' + 3');
  });
});

test('carmichaels', function(t) {
  t.plan(carmichaels.length);

  carmichaels.forEach(function(c) {
    t.ok(fermat(c), 'carmichael: ' + c);
  });
});
