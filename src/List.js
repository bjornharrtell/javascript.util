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
javascript.util.List = function() {
};
javascript.util.List.prototype = new javascript.util.Collection();

/**
 * Returns the element at the specified position in this list.
 * 
 * @param {number}
 *          index
 * @return {Object}
 * @export
 */
javascript.util.List.prototype.get = function(index) {
};
