/**
 * @requires Iterator.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Collection.html
 *
 * @interface
 * @export
 */
javascript.util.Collection = function() {};

/**
 * Ensures that this collection contains the specified element (optional
 * operation).
 *
 * @param {Object}
 *          o
 * @return {boolean}
 * @export
 */
javascript.util.Collection.prototype.add = function(o) {};

/**
 * Returns true if this collection contains no elements.
 *
 * @return {boolean}
 * @export
 */
javascript.util.Collection.prototype.isEmpty = function() {};

/**
 * Returns an iterator over the elements in this collection.
 *
 * @return {javascript.util.Iterator}
 * @export
 */
javascript.util.Collection.prototype.iterator = function() {};

/**
 * Returns an iterator over the elements in this collection.
 *
 * @return {number}
 * @export
 */
javascript.util.Collection.prototype.size = function() {};
