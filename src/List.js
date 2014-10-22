goog.provide('javascript.util.List');

goog.require('javascript.util.Collection');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/List.html
 *
 * @extends {javascript.util.Collection}
 * @interface
 */
javascript.util.List = function() {};

/**
 * Returns the element at the specified position in this list.
 * @param {number} index
 * @return {Object}
 */
javascript.util.List.prototype.get = function(index) {};

/**
 * Replaces the element at the specified position in this list with the
 * specified element (optional operation).
 * @param {number} index
 * @param {Object} e
 * @return {Object}
 */
javascript.util.List.prototype.set = function(index, e) {};

/**
 * Returns true if this collection contains no elements.
 * @return {boolean}
 */
javascript.util.List.prototype.isEmpty = function() {};

