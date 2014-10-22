goog.provide('javascript.util.HashMap');

goog.require('javascript.util.ArrayList');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/HashMap.html
 *
 * @implements {javascript.util.Map}
 * @constructor
 */
javascript.util.HashMap = function() {
  this.object = {};
};

/**
 * @type {Object}
 * @private
 */
javascript.util.HashMap.prototype.object_ = null;

/**
 * @override
 */
javascript.util.HashMap.prototype.get = function(key) {
  return this.object_[key] || null;
};

/**
 * @override
 */
javascript.util.HashMap.prototype.put = function(key, value) {
  this.object_[key] = value;
  return value;
};

/**
 * @override
 */
javascript.util.HashMap.prototype.values = function() {
  var arrayList = new javascript.util.ArrayList();
  for (var key in this.object_) {
    if (this.object_.hasOwnProperty(key)) {
      arrayList.add(this.object_[key]);
    }
  }
  return arrayList;
};

/**
 * @override
 */
javascript.util.HashMap.prototype.size = function() {
  return this.values().size();
};

