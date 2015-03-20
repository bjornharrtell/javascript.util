goog.provide('javascript.util.IndexOutOfBoundsException');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.IndexOutOfBoundsException = function(message) {
  this.message = message || '';
};
goog.inherits(javascript.util.IndexOutOfBoundsException, Error);


/**
 * @type {string}
 */
javascript.util.IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';
});  // goog.scope
