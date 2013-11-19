

/**
 * Expose `newFunction`.
 */

module.exports = newFunction;


/**
 * Wrap a javascript string in a function.
 *
 * @param {String} args
 * @param {String} js
 * @param {Object} options
 *   @param {Boolean} sourceUrl
 * @returns {String}
 */

function newFunction (args, js, options) {
  if (!js) {
    js = args;
    args = '';
  }
  if (typeof js === 'object') {
    options = js;
    js = args;
    args = '';
  }

  options = options || {};

  // from: https://github.com/component/builder.js/blob/master/lib/builder.js#L951
  if (options.sourceUrl) {
    js = JSON.stringify(js + '//@ sourceURL=' + options.sourceUrl);
    js = js.replace(/\\n/g, '\\n\\\n');
    return 'Function("' + args + '",\n' + js + '\n)';
  } else {
    return 'function(' + args + '){\n' + js + '\n}';
  }
}