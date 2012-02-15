/**
 * @requires Collection.js
 */

var Collection = require('./Collection');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/List.html
 *
 * @extends {javascript.util.Collection}
 * @interface
 */
function List() {};
List.prototype = new Collection;

/**
 * Returns the element at the specified position in this list.
 *
 * @param {number}
 *          index
 * @return {Object}
 */
List.prototype.get = function(index) {};

module.exports = List;
