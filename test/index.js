var newFunction = require('..');
var assert = require('assert');

describe('new-function', function () {
  it('should take the "js" overload', function () {
    var fn = newFunction('var a = 1;');
    assert(fn === 'function(){\nvar a = 1;\n}');
  });

  it('should take the "args, js"', function () {
    var fn = newFunction('a,b', 'var a = 1;');
    assert(fn === 'function(a,b){\nvar a = 1;\n}');
  });

  it('should take the "args, js, options"', function () {
    var fn = newFunction('a,b', 'var a = 1;', { sourceUrl: 'add.js'});
    assert(fn === 'Function("a,b",\n"var a = 1;//@ sourceURL=add.js"\n)');
  });

  it('should take the "js, options"', function () {
    var fn = newFunction('var a = 1;', { sourceUrl: 'add.js'});
    assert(fn === 'Function("",\n"var a = 1;//@ sourceURL=add.js"\n)');
  });

  it('should wrap javascript in a function', function () {
    var wrapped = newFunction('process.VAR="test"', { sourceUrl: 'wrap.js'} );
    var fn = eval(wrapped);
    assert(!process.VAR);
    fn.call(this);
    assert(process.VAR === 'test');
  });
});