goog.provide('javascript.util.Set');

goog.require('javascript.util.Collection');


/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Set.html
 *
 * @extends {javascript.util.Collection}
 * @constructor
 * @export
 */
javascript.util.Set = function() {};
goog.inherits(javascript.util.Set, javascript.util.Collection);


/**
 * Returns true if this set contains the specified element. More formally,
 * returns true if and only if this set contains an element e such that (o==null ?
 * e==null : o.equals(e)).
 * @param {Object} e
 * @return {boolean}
 */
javascript.util.Set.prototype.contains = goog.abstractMethod;
