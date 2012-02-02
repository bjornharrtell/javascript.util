var javascript = {};
javascript.util = {};
javascript.util.version = '0.9.0';

// assume this script is run in a function with context as first argument
this['javascript'] = javascript;

/**
 * @param {string=}
 *          message Optional message.
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

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 */
javascript.util.IndexOutOfBoundsException = function(message) {
  this.message = message || '';
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
  this.message = message || '';
};
javascript.util.NoSuchElementException.prototype = new Error();
/**
 * @type {string}
 */
javascript.util.NoSuchElementException.prototype.name = 'NoSuchElementException';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 */
javascript.util.EmptyStackException = function(message) {
  this.message = message || '';
};
javascript.util.EmptyStackException.prototype = new Error();
/**
 * @type {string}
 */
javascript.util.EmptyStackException.prototype.name = 'EmptyStackException';
