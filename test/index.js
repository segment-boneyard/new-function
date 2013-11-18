var wrap = require('..');
var assert = require('assert');

describe('function-wrap', function () {
  it('should wrap javascript in a function', function () {
    var wrapped = wrap('process.VAR="test"', { sourceUrl: 'wrap.js'} );
    var fn = eval(wrapped);
    assert(!process.VAR);
    fn.call(this);
    assert(process.VAR === 'test');
  });
});