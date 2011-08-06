/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Iterator.html
 *
 * @interface
 */
javascript.util.Iterator = function() {
};

/**
 * Returns true if the iteration has more elements.
 *
 * @return {boolean}
 */
javascript.util.Iterator.prototype.hasNext = function() {
};

/**
 * Returns the next element in the iteration.
 *
 * @return {Object}
 */
javascript.util.Iterator.prototype.next = function() {
};

/**
 * Removes from the underlying collection the last element returned by the
 * iterator (optional operation).
 */
javascript.util.Iterator.prototype.remove = function() {
};
