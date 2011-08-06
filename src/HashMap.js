/**
 * @requires Map.js
 * @requires ArrayList.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/HashMap.html
 * 
 * @implements {javascript.util.Map}
 * @constructor
 * @export
 */
javascript.util.HashMap = function() {
  this.object = {};
};

/**
 * @type {Object}
 * @private
 */
javascript.util.HashMap.prototype.object = null;

/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.get = function(key) {
  return this.object[key] || null;
};

/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.put = function(key, value) {
  this.object[key] = value;
  return value;
};

/**
 * @override
 * @export
 */
javascript.util.HashMap.prototype.values = function() {
  var arrayList = new javascript.util.ArrayList();
  for ( var key in this.object) {
    if (this.object.hasOwnProperty(key)) {
      arrayList.add(this.object[key]);
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
