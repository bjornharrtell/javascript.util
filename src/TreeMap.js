/**
 * @requires SortedMap.js
 * @requires ArrayList.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/TreeMap.html
 * 
 * @implements {javascript.util.Map}
 * @constructor
 * 
 */
javascript.util.TreeMap = function() {
  this.array = [];
};
javascript.util.TreeMap.prototype = new javascript.util.Map;

/**
 * @type {Array}
 * @private
 */
javascript.util.TreeMap.prototype.array = null;

/**
 * @override
 */
javascript.util.TreeMap.prototype.get = function(key) {
  for ( var i = 0, len = this.array.length; i < len; i++) {
    var e = this.array[i];
    if (e.key['compareTo'](key) === 0) {
      return e.value;
    }
  }
  return null;
};

/**
 * @override
 */
javascript.util.TreeMap.prototype.put = function(key, value) {
  var e = this.get(key);

  if (e) {
    var oldValue = e.value;
    e.value = value;
    return oldValue;
  }

  var newElement = {
    key : key,
    value : value
  };

  for ( var i = 0, len = this.array.length; i < len; i++) {
    e = this.array[i];
    if (e.key['compareTo'](key) === 1) {
      this.array.splice(i, 0, newElement);
      return null;
    }
  }

  this.array.push({
    key : key,
    value : value
  });

  return null;
};

/**
 * @override
 */
javascript.util.TreeMap.prototype.values = function() {
  var arrayList = new javascript.util.ArrayList();
  for ( var i = 0, len = this.array.length; i < len; i++) {
    arrayList.add(this.array[i].value);
  }
  return arrayList;
};

/**
 * @override
 */
javascript.util.TreeMap.prototype.size = function() {
  return this.values().size();
};
