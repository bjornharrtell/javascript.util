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
  this._array = [];
}

/**
 * @private
 * @type {Array}
 */
javascript.util.ArrayList.prototype._array = null;

javascript.util.ArrayList.prototype.add = function(e) {
  this._array.push(e);
  return true;
}

javascript.util.ArrayList.prototype.iterator = function() {
  /**
   * @implements {javascript.util.Iterator}
   * @constructor
   */
  var Iterator = function() { };
  Iterator.prototype.arrayList = this;
  Iterator.prototype.position = 0;
  Iterator.prototype.next = function() {
    if (this.position === this.arrayList.size()) {
      throw new javascript.util.NoSuchElementException();
    }
  
    return this.arrayList.get(this.position++);
  }
  Iterator.prototype.hasNext = function() {
    if (this.position < this.arrayList.size()) {
      return true;
    }
    return false;
  }
  Iterator.prototype.remove = function() {
    new javascript.util.OperationNotSupported();
  }
  
  return new Iterator();
}

javascript.util.ArrayList.prototype.get = function(index) {
  if (index<0 || index >= this.size()) {
    throw new javascript.util.IndexOutOfBoundsException();
  }

  return this._array[index];
}

javascript.util.ArrayList.prototype.isEmpty = function() {
  return this._array.length === 0;
}


javascript.util.ArrayList.prototype.size = function() {
  return this._array.length;
}



