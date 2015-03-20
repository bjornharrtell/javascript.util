goog.provide('javascript.util.Map');


/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Map.html
 *
 * @constructor
 * @export
 */
javascript.util.Map = function() {};


/**
 * Returns the value to which the specified key is mapped, or null if this map
 * contains no mapping for the key.
 * @param {Object} key
 * @return {Object}
 */
javascript.util.Map.prototype.get = goog.abstractMethod;


/**
 * Associates the specified value with the specified key in this map (optional
 * operation).
 * @param {Object} key
 * @param {Object} value
 * @return {Object}
 */
javascript.util.Map.prototype.put = goog.abstractMethod;


/**
 * Returns the number of key-value mappings in this map.
 * @return {number}
 */
javascript.util.Map.prototype.size = goog.abstractMethod;


/**
 * Returns a Collection view of the values contained in this map.
 * @return {javascript.util.Collection}
 */
javascript.util.Map.prototype.values = goog.abstractMethod;

