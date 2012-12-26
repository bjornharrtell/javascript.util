/**
 * @requires Set.js
 */
 
(function() {

var Set = javascript.util.Set;

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/SortedSet.html
 *
 * @extends {javascript.util.Set}
 * @interface
 */
function SortedSet() {};
SortedSet.prototype = new Set;

javascript.util.SortedSet = SortedSet;

})();
