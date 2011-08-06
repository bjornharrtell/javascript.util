var javascript = function() {};
javascript.util =function() {};

/**
 * @param {string=} message
 * @extends {Error}
 * @constructor
 */
javascript.util.OperationNotSupported = function(message) {
  if (message) {
    this.message = message;
  }
};
javascript.util.OperationNotSupported.prototype = new Error();
javascript.util.OperationNotSupported.prototype.name = 'OperationNotSupported';

/**
 * @param {string=} message
 * @extends {Error}
 * @constructor
 */
javascript.util.IndexOutOfBoundsException = function(message) {
  if (message) {
    this.message = message;
  }
};
javascript.util.IndexOutOfBoundsException.prototype = new Error();
javascript.util.IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';

/**
 * @param {string=} message
 * @extends {Error}
 * @constructor
 */
javascript.util.NoSuchElementException = function(message) {
  if (message) {
    this.message = message;
  }
};

javascript.util.NoSuchElementException.prototype = new Error();
javascript.util.NoSuchElementException.prototype.name = 'NoSuchElementException';

