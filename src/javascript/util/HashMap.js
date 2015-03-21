goog.provide('javascript.util.HashMap');

goog.require('javascript.util.ArrayList');
goog.require('javascript.util.Map');

goog.scope(function() {

var ArrayList = javascript.util.ArrayList;



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/HashMap.html
 *
 * @extends {javascript.util.Map}
 * @constructor
 * @export
 */
javascript.util.HashMap = function() {
  /**
   * @type {Object}
   * @private
  */
  this.object_ = {};
};
goog.inherits(javascript.util.HashMap, javascript.util.Map);


/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.get = function(key) {
  return this.object_[key] || null;
};


/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.put = function(key, value) {
  this.object_[key] = value;
  return value;
};


/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.values = function() {
  var arrayList = new ArrayList();
  for (var key in this.object_) {
    if (this.object_.hasOwnProperty(key)) {
      arrayList.add(this.object_[key]);
    }
  }
  return arrayList;
};


/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.size = function() {
  return this.values().size();
};

});  // goog.scope
