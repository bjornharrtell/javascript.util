goog.provide('javascript.util.NoSuchElementException');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.NoSuchElementException = function(message) {
  this.message = message || '';
};
goog.inherits(javascript.util.NoSuchElementException, Error);


/**
 * @type {string}
 */
javascript.util.NoSuchElementException.prototype.name = 'NoSuchElementException';
});  // goog.scope
