/**
 * @requires SortedSet.js
 */

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/TreeSet.html
 * 
 * @implements {javascript.util.SortedSet}
 * @constructor
 */
javascript.util.TreeSet = function() {
  this.array = [];

  if (arguments[0] instanceof javascript.util.Collection) {
    this.addAll(arguments[0]);
  }
};
javascript.util.TreeSet.prototype = new javascript.util.SortedSet;

/**
 * @type {Array}
 * @private
 */
javascript.util.TreeSet.prototype.array = null;

/**
 * @override
 */
javascript.util.TreeSet.prototype.contains = function(o) {
  for ( var i = 0, len = this.array.length; i < len; i++) {
    var e = this.array[i];
    if (e['compareTo'](o) === 0) {
      return true;
    }
  }
  return false;
};

/**
 * @override
 */
javascript.util.TreeSet.prototype.add = function(o) {
  if (this.contains(o)) {
    return false;
  }

  for ( var i = 0, len = this.array.length; i < len; i++) {
    var e = this.array[i];
    if (e['compareTo'](o) === 1) {
      this.array.splice(i, 0, o);
      return true;
    }
  }

  this.array.push(o);

  return true;
};

/**
 * @override
 */
javascript.util.TreeSet.prototype.addAll = function(c) {
  for ( var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};

/**
 * @override
 * @returns {boolean}
 */
javascript.util.TreeSet.prototype.remove = function(o) {
  throw new javascript.util.OperationNotSupported();
};

/**
 * @override
 */
javascript.util.TreeSet.prototype.size = function() {
  return this.array.length;
};

/**
 * @override
 */
javascript.util.TreeSet.prototype.isEmpty = function() {
  return this.array.length === 0;
};

/**
 * @override
 */
javascript.util.TreeSet.prototype.toArray = function() {
  var array = [];

  for ( var i = 0, len = this.array.length; i < len; i++) {
    array.push(this.array[i]);
  }

  return array;
};

/**
 * @override
 */
javascript.util.TreeSet.prototype.iterator = function() {
  return new javascript.util.TreeSet.Iterator(this);
};

/**
 * @implements {javascript.util.Iterator}
 * @param {javascript.util.TreeSet}
 *          treeSet
 * @constructor
 * @private
 */
javascript.util.TreeSet.Iterator = function(treeSet) {
  this.treeSet = treeSet;
};

/**
 * @type {javascript.util.TreeSet}
 * @private
 */
javascript.util.TreeSet.Iterator.prototype.treeSet = null;

/**
 * @type {number}
 * @private
 */
javascript.util.TreeSet.Iterator.prototype.position = 0;

/**
 * @override
 */
javascript.util.TreeSet.Iterator.prototype.next = function() {
  if (this.position === this.treeSet.size()) {
    throw new javascript.util.NoSuchElementException();
  }
  return this.treeSet.array[this.position++];
};

/**
 * @override
 */
javascript.util.TreeSet.Iterator.prototype.hasNext = function() {
  if (this.position < this.treeSet.size()) {
    return true;
  }
  return false;
};

/**
 * @override
 */
javascript.util.TreeSet.Iterator.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};
