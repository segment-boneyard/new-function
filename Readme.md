
# new-function

  Wrap javascript code in a function.

## Install

    npm install new-function

## Example

```js
var newFunction = require('new-function');

newFunction('console.log(1);');
// 'function(){\nconsole.log(1);\n}'

newFunction('a,b', 'console.log(1);');
// 'function(a,b){\nconsole.log(1);\n}'

newFunction('a,b', 'console.log(1);', { sourceUrl: 'add.js' });
// 'Function("a,b",\n"console.log(1);//@ sourceURL=add.js"\n)'
```

## API

### newFunction([args], js, options);

  Wrap a `js` script in a function and return the resulting javascript code. Custom `options`:

```js
{
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
