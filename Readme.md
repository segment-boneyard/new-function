
# function-wrap

  Wraps javascript code in a function.

## Install

    npm install function-wrap

## Example

```js
var wrap = require('function-wrap');

wrap('console.log(1);');
// 'function(){\nconsole.log(1);\n}'

wrap('console.log(1);', { args: 'a,b' });
// 'function(a,b){\nconsole.log(1);\n}'

wrap('console.log(1);', { args: 'a,b', sourceUrl: 'add.js' });
// 'Function("a,b",\n"console.log(1);//@ sourceURL=add.js"\n)'
```

## API

### wrap(js, options);

  Wrap a `js` script in a function and return the resulting javascript code. Custom `options`:

```js
{
  "args": "", // the function arguments
  "sourceUrl": null // allows browser source mapping
}
```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```

Copyright (c) 2013 Segment.io &lt;friends@segment.io&gt;
