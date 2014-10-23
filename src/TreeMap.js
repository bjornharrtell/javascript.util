goog.provide('javascript.util.TreeMap');

goog.require('javascript.util.ArrayList');
goog.require('javascript.util.Map');
goog.require('javascript.util.SortedMap');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/TreeMap.html
 *
 * @extends {javascript.util.Map}
 * @constructor
 * @export
 */
javascript.util.TreeMap = function() {
  this.array_ = [];
};
javascript.util.TreeMap.prototype = new javascript.util.Map();

/**
 * @type {Array}
 * @private
 */
javascript.util.TreeMap.prototype.array_ = null;

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.get = function(key) {
  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e.key['compareTo'](key) === 0) {
      return e.value;
    }
  }
  return null;
};

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.put = function(key, value) {
  var e = this.get(key);

  if (e) {
    var oldValue = e.value;
    e.value = value;
    return oldValue;
  }

  var newElement = {
    key: key,
    value: value
  };

  for (var i = 0, len = this.array_.length; i < len; i++) {
    e = this.array_[i];
    if (e.key['compareTo'](key) === 1) {
      this.array_.splice(i, 0, newElement);
      return null;
    }
  }

  this.array_.push({
    key: key,
    value: value
  });

  return null;
};

/**
 * @override
 * @export
 */
javascript.util.TreeMap.prototype.values = function() {
  var arrayList = new javascript.util.ArrayList();
  for (var i = 0, len = this.array_.length; i < len; i++) {
    arrayList.add(this.array_[i].value);
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
