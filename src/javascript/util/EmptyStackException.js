goog.provide('javascript.util.EmptyStackException');



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.EmptyStackException = function(message) {
  this.message = message || '';
};
javascript.util.EmptyStackException.prototype = new Error();


/**
 * @type {string}
 */
javascript.util.EmptyStackException.prototype.name = 'EmptyStackException';

