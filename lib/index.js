
var defaults = require('defaults');


/**
 * Expose `wrap`.
 */

module.exports = wrap;


/**
 * Wrap a javascript string in a function.
 *
 * @param {String} js
 * @param {Object} options
 *   @param {Boolean} sourceUrl
 *   @param {String}  args
 * @returns {String}
 */

function wrap (js, options) {
  options = defaults(options, { args: '' });
  // from: https://github.com/component/builder.js/blob/master/lib/builder.js#L951
  if (options.sourceUrl) {
    js = JSON.stringify(js + '//@ sourceURL=' + options.sourceUrl);
    js = js.replace(/\\n/g, '\\n\\\n');
    return 'Function("' + options.args + '",\n' + js + '\n)';
  } else {
    return 'function(' + options.args + '){\n' + js + '\n}';
  }
}