/**
 * @requires Collection.js
 */
 
(function() {

var Collection = javascript.util.Collection;

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/List.html
 * 
 * @extends {javascript.util.Collection}
 * @interface
 */
function List() {};
List.prototype = new Collection;

/**
 * Returns the element at the specified position in this list.
 * 
 * @param {number}
 *          index
 * @return {Object}
 */
List.prototype.get = function(index) {};

/**
 * Replaces the element at the specified position in this list with the
 * specified element (optional operation).
 * 
 * @param {number}
 *          index
 * @param {Object}
 *          element to be stored at the specified position
 * @return {Object} the element previously at the specified position
 */
List.prototype.set = function(index, element) {};

/**
 * Returns true if this collection contains no elements.
 * 
 * @return {boolean} true if this collection contains no elements
 */
List.prototype.isEmpty = function() {};

javascript.util.List = List;

})();
