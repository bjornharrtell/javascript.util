/**
 * @requires List.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/ArrayList.html
 *
 * @implements {javascript.util.List}
 * @constructor
 * @export
 */
javascript.util.ArrayList = function() {
  this.array = [];
};
javascript.util.ArrayList.prototype = new javascript.util.List();

/**
 * @type {Array}
 * @private
 */
javascript.util.ArrayList.prototype.array = null;

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.add = function(e) {
  this.array.push(e);
  return true;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.iterator = function() {
  return new javascript.util.ArrayList.Iterator(this);
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.get = function(index) {
  if (index < 0 || index >= this.size()) {
    throw new javascript.util.IndexOutOfBoundsException();
  }

  return this.array[index];
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.isEmpty = function() {
  return this.array.length === 0;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.size = function() {
  return this.array.length;
};

/**
 * @implements {javascript.util.Iterator}
 * @param {javascript.util.ArrayList} arrayList
 * @constructor
 * @private
 * @export
 */
javascript.util.ArrayList.Iterator = function(arrayList) {
  this.arrayList = arrayList;
};

/**
 * @type {javascript.util.ArrayList}
 * @private
 */
javascript.util.ArrayList.Iterator.prototype.arrayList = null;

/**
 * @type {number}
 * @private
 */
javascript.util.ArrayList.Iterator.prototype.position = 0;

/**
 * @override
 * @export
 */
javascript.util.ArrayList.Iterator.prototype.next = function() {
  if (this.position === this.arrayList.size()) {
    throw new javascript.util.NoSuchElementException();
  }
  return this.arrayList.get(this.position++);
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.Iterator.prototype.hasNext = function() {
  if (this.position < this.arrayList.size()) {
    return true;
  }
  return false;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.Iterator.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};
