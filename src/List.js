/**
 * @requires Collection.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/List.html
 * 
 * @extends {javascript.util.Collection}
 * @interface
 * @export
 */
javascript.util.List = function(arg) {};
javascript.util.List.prototype = new javascript.util.Collection();

/**
 * Returns the element at the specified position in this list.
 * 
 * @param {number}
 *          index
 * @return {Object}
 * @export
 */
javascript.util.List.prototype.get = function(index) {};

/**
 * Appends all of the elements in the specified collection to the end of this
 * list, in the order that they are returned by the specified collection's
 * iterator (optional operation).
 * 
 * @param {javascript.util.Collection}
 *          c
 * @return {boolean}
 * @export
 */
javascript.util.List.prototype.addAll = function(c) {};
