/**
 * @requires List.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/ArrayList.html
 *
 * @implements {javascript.util.List}
 * @constructor
 */
javascript.util.ArrayList = function() {
  this.array = [];
};

/**
 * @type {Array}
 * @private
 */
javascript.util.ArrayList.prototype.array = null;

/**
 * @override
 */
javascript.util.ArrayList.prototype.add = function(e) {
  this.array.push(e);
  return true;
};

/**
 * @override
 */
javascript.util.ArrayList.prototype.iterator = function() {
  /**
   * @implements {javascript.util.Iterator}
   * @constructor
   */
  var Iterator = function() {
  };
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
  /**
   * @override
   */
  Iterator.prototype.hasNext = function() {
    if (this.position < this.arrayList.size()) {
      return true;
    }
    return false;
  };
  /**
   * @override
   */
  Iterator.prototype.remove = function() {
    new javascript.util.OperationNotSupported();
  };

  return new Iterator();
};

/**
 * @override
 */
javascript.util.ArrayList.prototype.get = function(index) {
  if (index < 0 || index >= this.size()) {
    throw new javascript.util.IndexOutOfBoundsException();
  }

  return this.array[index];
};

/**
 * @override
 */
javascript.util.ArrayList.prototype.isEmpty = function() {
  return this.array.length === 0;
};

/**
 * @override
 */
javascript.util.ArrayList.prototype.size = function() {
  return this.array.length;
};
