goog.provide('javascript.util.TreeSet');

goog.require('javascript.util.Collection');
goog.require('javascript.util.NoSuchElementException');
goog.require('javascript.util.OperationNotSupported');
goog.require('javascript.util.SortedSet');



/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/TreeSet.html
 *
 * @extends {javascript.util.SortedSet}
 * @constructor
 * @export
 */
javascript.util.TreeSet = function() {
  this.array_ = [];

  if (arguments[0] instanceof javascript.util.Collection) {
    this.addAll(arguments[0]);
  }
};
goog.inherits(javascript.util.TreeSet, javascript.util.SortedSet);

/**
 * @type {Array}
 * @private
 */
javascript.util.TreeSet.prototype.array_ = null;


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.contains = function(o) {
  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e['compareTo'](o) === 0) {
      return true;
    }
  }
  return false;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.add = function(o) {
  if (this.contains(o)) {
    return false;
  }

  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e['compareTo'](o) === 1) {
      this.array_.splice(i, 0, o);
      return true;
    }
  }

  this.array_.push(o);

  return true;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.addAll = function(c) {
  for (var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.remove = function(e) {
  throw new javascript.util.OperationNotSupported();
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.size = function() {
  return this.array_.length;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.isEmpty = function() {
  return this.array_.length === 0;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.toArray = function() {
  var array = [];

  for (var i = 0, len = this.array_.length; i < len; i++) {
    array.push(this.array_[i]);
  }

  return array;
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.prototype.iterator = function() {
  return new javascript.util.TreeSet.Iterator_(this);
};



/**
 * @extends {javascript.util.Iterator}
 * @param {javascript.util.TreeSet} treeSet
 * @constructor
 * @private
 * @export
 */
javascript.util.TreeSet.Iterator_ = function(treeSet) {
  this.treeSet_ = treeSet;
};


/**
 * @type {javascript.util.TreeSet}
 * @private
 */
javascript.util.TreeSet.Iterator_.prototype.treeSet_ = null;


/**
 * @type {number}
 * @private
 */
javascript.util.TreeSet.Iterator_.prototype.position_ = 0;


/**
 * @override
 * @export
 */
javascript.util.TreeSet.Iterator_.prototype.next = function() {
  if (this.position_ === this.treeSet_.size()) {
    throw new javascript.util.NoSuchElementException();
  }
  return this.treeSet_.array_[this.position_++];
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.Iterator_.prototype.hasNext = function() {
  if (this.position_ < this.treeSet_.size()) {
    return true;
  } else {
    return false;
  }
};


/**
 * @override
 * @export
 */
javascript.util.TreeSet.Iterator_.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};
