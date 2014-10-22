goog.provide('javascript.util.HashSet');

goog.require('javascript.util.Collection');
goog.require('javascript.util.NoSuchElementException');
goog.require('javascript.util.OperationNotSupported');
goog.require('javascript.util.Set');

/**
 * @see http://docs.oracle.com/javase/6/docs/api/java/util/HashSet.html
 *
 * @implements {javascript.util.Set}
 * @constructor
 */
javascript.util.HashSet = function() {
  this.array = [];

  if (arguments[0] instanceof javascript.util.Collection) {
    this.addAll(arguments[0]);
  }
};

/**
 * @type {Array}
 * @private
 */
javascript.util.HashSet.prototype.array_ = null;

/**
 * @override
 */
javascript.util.HashSet.prototype.contains = function(o) {
  for (var i = 0, len = this.array_.length; i < len; i++) {
    var e = this.array_[i];
    if (e === o) {
      return true;
    }
  }
  return false;
};

/**
 * @override
 */
javascript.util.HashSet.prototype.add = function(o) {
  if (this.contains(o)) {
    return false;
  }

  this.array_.push(o);

  return true;
};

/**
 * @override
 */
javascript.util.HashSet.prototype.addAll = function(c) {
  for (var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};

/**
 * @override
 */
javascript.util.HashSet.prototype.remove = function(o) {
  throw new javascript.util.OperationNotSupported();
};

/**
 * @override
 */
javascript.util.HashSet.prototype.size = function() {
  return this.array_.length;
};

/**
 * @override
 */
javascript.util.HashSet.prototype.isEmpty = function() {
  return this.array_.length === 0;
};

/**
 * @override
 */
javascript.util.HashSet.prototype.toArray = function() {
  var array = [];

  for (var i = 0, len = this.array.length; i < len; i++) {
    array.push(this.array_[i]);
  }

  return array;
};

/**
 * @override
 */
javascript.util.HashSet.prototype.iterator = function() {
  return new javascript.util.HashSet.Iterator_(this);
};

/**
 * @implements {javascript.util.Iterator}
 * @param {javascript.util.HashSet} hashSet
 * @constructor
 * @private
 */
javascript.util.HashSet.Iterator_ = function(hashSet) {
  this.hashSet_ = hashSet;
};

/**
 * @type {javascript.util.HashSet}
 * @private
 */
javascript.util.HashSet.Iterator_.prototype.hashSet_ = null;

/**
 * @type {number}
 * @private
 */
javascript.util.HashSet.Iterator_.prototype.position_ = 0;

/**
 * @override
 */
javascript.util.HashSet.Iterator_.prototype.next = function() {
  if (this.position_ === this.hashSet_.size()) {
    throw new javascript.util.NoSuchElementException();
  }
  return this.hashSet_.array[this.position_++];
};

/**
 * @override
 */
javascript.util.HashSet.Iterator_.prototype.hasNext = function() {
  if (this.position_ < this.hashSet_.size()) {
    return true;
  } else {
    return false;
  }
};

/**
 * @override
 */
javascript.util.HashSet.Iterator_.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};

