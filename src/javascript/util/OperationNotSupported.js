goog.provide('javascript.util.OperationNotSupported');

goog.scope(function() {



/**
 * @param {string=} message Optional message
 * @extends {Error}
 * @constructor
 */
javascript.util.OperationNotSupported = function(message) {
  this.message = message || '';
};
goog.inherits(javascript.util.OperationNotSupported, Error);


/**
 * @type {string}
 */
javascript.util.OperationNotSupported.prototype.name = 'OperationNotSupported';
});  // goog.scope
