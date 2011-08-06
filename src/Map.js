/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Map.html
 *
 * @interface
 * @export
 */
javascript.util.Map = function() {};

/**
 * Returns the value to which the specified key is mapped, or null if this map
 * contains no mapping for the key.
 *
 * @param {Object}
 *          key
 * @return {?Object}
 * @export
 */
javascript.util.Map.prototype.get = function(key) {};

/**
 * Associates the specified value with the specified key in this map (optional
 * operation).
 *
 * @param {Object}
 *          key
 * @param {Object}
 *          value
 * @return {Object}
 * @export
 */
javascript.util.Map.prototype.put = function(key, value) {};

/**
 * Returns the number of key-value mappings in this map.
 *
 * @return {number}
 * @export
 */
javascript.util.Map.prototype.size = function() {};

/**
 * Returns a Collection view of the values contained in this map.
 *
 * @return {javascript.util.Collection}
 * @export
 */
javascript.util.Map.prototype.values = function() {};
