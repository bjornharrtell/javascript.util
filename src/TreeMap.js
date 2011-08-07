/**
 * @requires SortedMap.js
 * @requires ArrayList.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/HashMap.html
 * 
 * @implements {javascript.util.Map}
 * @constructor
 * @export
 */
javascript.util.TreeMap = function() {
  this.keys = [];
  this.object = {};
};

/**
 * @type {Array}
 * @private
 */
javascript.util.TreeMap.prototype.keys = null;

/**
 * @type {Object}
 * @private
 */
javascript.util.TreeMap.prototype.object = null;

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.get = function(key) {
  return this.object[key] || null;
};

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.put = function(key, value) {
  this.keys.push(key);
  this.object[key] = value;
  return value;
};

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.values = function() {
  if (this.keys.length > 0) {
    if (this.keys[0].compareTo instanceof Function) {
      this.keys.sort(function(a, b) {
        return a.compareTo(b);
      });
    } else {
      this.keys.sort();
    }
  }

  var arrayList = new javascript.util.ArrayList();
  for ( var i = 0; i < this.keys.length; i++) {
    arrayList.add(this.object[this.keys[i]]);
  }
  return arrayList;
};

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.size = function() {
  return this.values().size();
};
