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
  /**
   * @implements {javascript.util.Iterator}
   * @constructor
   */
  var Iterator = function() {};
  Iterator.prototype.arrayList = this;
  Iterator.prototype.position = 0;
  /**
   * @override
   */
  Iterator.prototype.next = function() {
    if (this.position === this.arrayList.size()) {
      throw new javascript.util.NoSuchElementException();
    }

    return this.arrayList.get(this.position++);
  };
  goog.exportProperty(Iterator.prototype, 'next', Iterator.prototype.next);
  /**
   * @override
   */
  Iterator.prototype.hasNext = function() {
    if (this.position < this.arrayList.size()) {
      return true;
    }
    return false;
  };
  goog
      .exportProperty(Iterator.prototype, 'hasNext', Iterator.prototype.hasNext);
  /**
   * @override
   */
  Iterator.prototype.remove = function() {
    throw new javascript.util.OperationNotSupported();
  };
  goog.exportProperty(Iterator.prototype, 'remove', Iterator.prototype.remove);

  return new Iterator();
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
