(function() {

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 */
function IndexOutOfBoundsException(message) {
      this.message = message || '';
};
IndexOutOfBoundsException.prototype = new Error();

/**
 * @type {string}
 */
IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';

javascript.util.IndexOutOfBoundsException = IndexOutOfBoundsException;

})();
