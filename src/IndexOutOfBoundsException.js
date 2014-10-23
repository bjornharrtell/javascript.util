goog.provide('javascript.util.IndexOutOfBoundsException');

/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.IndexOutOfBoundsException = function(message) {
    this.message = message || '';
};
javascript.util.IndexOutOfBoundsException.prototype = new Error();

/**
 * @type {string}
 */
javascript.util.IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';

