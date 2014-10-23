goog.provide('javascript.util.SortedSet');

goog.require('javascript.util.Set');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/SortedSet.html
 *
 * @extends {javascript.util.Set}
 * @constructor
 * @export
 */
javascript.util.SortedSet = function() {};
javascript.util.List.prototype = new javascript.util.Set();
