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

  if (arguments[0] instanceof javascript.util.Collection) {
    this.addAll(arguments[0]);
  }
};

javascript.util.ArrayList.prototype = new javascript.util.List;

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
javascript.util.ArrayList.prototype.addAll = function(c) {
  for ( var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};

/**
 * @override
 */
javascript.util.ArrayList.prototype.iterator = function() {
  return new javascript.util.ArrayList.Iterator(this);
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

/**
 * @override
 */
javascript.util.ArrayList.prototype.toArray = function() {
  var array = [];

  for ( var i = 0, len = this.array.length; i < len; i++) {
    array.push(this.array[i]);
  }
  ;

  return array;
};

/**
 * @override
 */
javascript.util.ArrayList.prototype.remove = function(o) {
  var found = false;

  for ( var i = 0, len = this.array.length; i < len; i++) {
    if (this.array[i] === o) {
      this.array.splice(i, 1);
      found = true;
      break;
    }
  }

  return found;
};

/**
 * @implements {javascript.util.Iterator}
 * @param {javascript.util.ArrayList}
 *          arrayList
 * @constructor
 * @private
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
 */
javascript.util.ArrayList.Iterator.prototype.next = function() {
  if (this.position === this.arrayList.size()) {
    throw new javascript.util.NoSuchElementException();
  }
  return this.arrayList.get(this.position++);
};

/**
 * @override
 */
javascript.util.ArrayList.Iterator.prototype.hasNext = function() {
  if (this.position < this.arrayList.size()) {
    return true;
  }
  return false;
};

/**
 * @override
 */
javascript.util.ArrayList.Iterator.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};
