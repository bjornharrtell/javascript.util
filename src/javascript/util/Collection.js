goog.provide('javascript.util.Collection');

goog.require('javascript.util.Iterator');


/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Collection.html
 *
 * @constructor
 * @export
 */
javascript.util.Collection = function() {};

/**
 * Ensures that this collection contains the specified element (optional
 * operation).
 * @param {Object} e
 * @return {boolean}
 */
javascript.util.Collection.prototype.add = goog.abstractMethod;


/**
 * Appends all of the elements in the specified collection to the end of this
 * list, in the order that they are returned by the specified collection's
 * iterator (optional operation).
 * @param {javascript.util.Collection} c
 * @return {boolean}
 */
javascript.util.Collection.prototype.addAll = goog.abstractMethod;


/**
 * Returns true if this collection contains no elements.
 * @return {boolean}
 */
javascript.util.Collection.prototype.isEmpty = goog.abstractMethod;


/**
 * Returns an iterator over the elements in this collection.
 * @return {javascript.util.Iterator}
 */
javascript.util.Collection.prototype.iterator = goog.abstractMethod;


/**
 * Returns an iterator over the elements in this collection.
 * @return {number}
 */
javascript.util.Collection.prototype.size = goog.abstractMethod;


/**
 * Returns an array containing all of the elements in this collection.
 * @return {Array}
 */
javascript.util.Collection.prototype.toArray = goog.abstractMethod;


/**
 * Removes a single instance of the specified element from this collection if it
 * is present. (optional)
 * @param {Object} e
 * @return {boolean}
 */
javascript.util.Collection.prototype.remove = goog.abstractMethod;
