/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Iterator.html
 * @interface
 * @export
 */
javascript.util.Iterator = function() {
};

/**
 * Returns true if the iteration has more elements.
 * 
 * @return {boolean}
 * @export
 */
javascript.util.Iterator.prototype.hasNext = function() {
};

/**
 * Returns the next element in the iteration.
 * 
 * @return {Object}
 * @export
 */
javascript.util.Iterator.prototype.next = function() {
};

/**
 * Removes from the underlying collection the last element returned by the
 * iterator (optional operation).
 * @export
 */
javascript.util.Iterator.prototype.remove = function() {
};

