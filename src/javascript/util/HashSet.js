goog.provide('javascript.util.HashSet');

goog.require('javascript.util.Collection');
goog.require('javascript.util.Iterator');
goog.require('javascript.util.NoSuchElementException');
goog.require('javascript.util.OperationNotSupported');
goog.require('javascript.util.Set');

goog.scope(function() {

var Collection = javascript.util.Collection;
var NoSuchElementException = javascript.util.NoSuchElementException;
var OperationNotSupported = javascript.util.OperationNotSupported;
var Set = javascript.util.Set;



/**
 * @see http://docs.oracle.com/javase/6/docs/api/java/util/HashSet.html
 *
 * @extends {javascript.util.Set}
 * @constructor
 * @export
 */
javascript.util.HashSet = function() {
  /**
   * @type {Array}
   * @private
  */
  this.array_ = [];

  if (arguments[0] instanceof Collection) {
    this.addAll(arguments[0]);
  }
};
goog.inherits(javascript.util.HashSet, javascript.util.Set);


/**
 * @override
 * @export
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
 * @export
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
 * @export
 */
javascript.util.HashSet.prototype.addAll = function(c) {
  for (var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};


/**
 * @override
 * @export
 */
javascript.util.HashSet.prototype.remove = function(o) {
  throw new javascript.util.OperationNotSupported();
};


/**
 * @override
 * @export
 */
javascript.util.HashSet.prototype.size = function() {
  return this.array_.length;
};


/**
 * @override
 * @export
 */
javascript.util.HashSet.prototype.isEmpty = function() {
  return this.array_.length === 0;
};


/**
 * @override
 * @export
 */
javascript.util.HashSet.prototype.toArray = function() {
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
javascript.util.HashSet.prototype.iterator = function() {
  return new Iterator_(this);
};



/**
 * @extends {javascript.util.Iterator}
 * @param {javascript.util.HashSet} hashSet
 * @constructor
 * @private
 * @export
 */
var Iterator_ = function(hashSet) {
  /**
   * @type {javascript.util.HashSet}
   * @private
   */
  this.hashSet_ = hashSet;
  /**
   * @type {number}
   * @private
   */
  this.position_ = 0;
};


/**
 * @override
 * @export
 */
Iterator_.prototype.next = function() {
  if (this.position_ === this.hashSet_.size()) {
    throw new NoSuchElementException();
  }
  return this.hashSet_.array_[this.position_++];
};


/**
 * @override
 * @export
 */
Iterator_.prototype.hasNext = function() {
  if (this.position_ < this.hashSet_.size()) {
    return true;
  } else {
    return false;
  }
};


/**
 * @override
 * @export
 */
Iterator_.prototype.remove = function() {
  throw new OperationNotSupported();
};

});  // goog.scope

