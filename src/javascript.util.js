/**
 * Root namespace.
 */
var javascript = function() {
};
/**
 * Namespace.
 */
javascript.util = function() {
};

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 */
javascript.util.OperationNotSupported = function(message) {
  if (message) {
    this.message = message;
  }
};
javascript.util.OperationNotSupported.prototype = new Error();
/**
 * @type {string}
 */
javascript.util.OperationNotSupported.prototype.name = 'OperationNotSupported';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 */
javascript.util.IndexOutOfBoundsException = function(message) {
  if (message) {
    this.message = message;
  }
};
javascript.util.IndexOutOfBoundsException.prototype = new Error();
/**
 * @type {string}
 */
javascript.util.IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 */
javascript.util.NoSuchElementException = function(message) {
  if (message) {
    this.message = message;
  }
};
javascript.util.NoSuchElementException.prototype = new Error();
/**
 * @type {string}
 */
javascript.util.NoSuchElementException.prototype.name = 'NoSuchElementException';
