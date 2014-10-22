goog.provide('javascript.util.OperationNotSupported');

/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 */
javascript.util.OperationNotSupported = function(message) {
  this.message = message || '';
};
javascript.util.OperationNotSupported.prototype = new Error();

/**
 * @type {string}
 */
javascript.util.OperationNotSupported.prototype.name = 'OperationNotSupported';

