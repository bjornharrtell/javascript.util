goog.provide('javascript.util.OperationNotSupported');


/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.OperationNotSupported = function(message) {
  this.message = message || '';
};
goog.inherits(javascript.util.OperationNotSupported, Error);


/**
 * @type {string}
 */
javascript.util.OperationNotSupported.prototype.name = 'OperationNotSupported';
