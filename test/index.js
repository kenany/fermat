var fermat = require('../');
var test = require('tape');

var primes = require('./primes.json');
primes = primes.slice(1);

var carmichaels = require('./carmichaels.json');

test('primes', function(t) {
  t.plan(primes.length);

  primes.forEach(function(p) {
    t.ok(fermat(p), 'prime: ' + p);
  })
});

test('carmichaels', function(t) {
  t.plan(carmichaels.length);

  carmichaels.forEach(function(c) {
    t.ok(fermat(c), 'carmichael: ' + c);
  });
});