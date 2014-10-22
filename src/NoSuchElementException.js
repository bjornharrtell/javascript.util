goog.provide('javascript.util.NoSuchElementException');

/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 */
javascript.util.NoSuchElementException = function(message) {
  this.message = message || '';
};
javascript.util.NoSuchElementException.prototype = new Error();

/**
 * @type {string}
 */
javascript.util.NoSuchElementException.prototype.name = 'NoSuchElementException';

