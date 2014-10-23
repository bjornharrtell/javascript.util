goog.provide('javascript.util.ArrayList');

goog.require('javascript.util.Collection');
goog.require('javascript.util.IndexOutOfBoundsException');
goog.require('javascript.util.List');
goog.require('javascript.util.NoSuchElementException');
goog.require('javascript.util.OperationNotSupported');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/ArrayList.html
 *
 * @extends {javascript.util.List}
 * @constructor
 * @export
 */
javascript.util.ArrayList = function() {
  this.array_ = [];

  if (arguments[0] instanceof javascript.util.Collection) {
    this.addAll(arguments[0]);
  }
};
javascript.util.ArrayList.prototype = new javascript.util.List();

/**
 * @type {Array}
 * @private
 */
javascript.util.ArrayList.prototype.array_ = null;

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.add = function(e) {
  this.array_.push(e);
  return true;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.addAll = function(c) {
  for (var i = c.iterator(); i.hasNext();) {
    this.add(i.next());
  }
  return true;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.set = function(index, element) {
  var oldElement = this.array_[index];
  this.array_[index] = element;
  return oldElement;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.iterator = function() {
  return new javascript.util.ArrayList.Iterator_(this);
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.get = function(index) {
  if (index < 0 || index >= this.size()) {
    throw new javascript.util.IndexOutOfBoundsException();
  }

  return this.array_[index];
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.isEmpty = function() {
  return this.array_.length === 0;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.size = function() {
  return this.array_.length;
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.prototype.toArray = function() {
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
javascript.util.ArrayList.prototype.remove = function(o) {
  var found = false;

  for (var i = 0, len = this.array_.length; i < len; i++) {
    if (this.array_[i] === o) {
      this.array_.splice(i, 1);
      found = true;
      break;
    }
  }

  return found;
};

/**
 * @extends {javascript.util.Iterator}
 * @param {javascript.util.ArrayList}
 *          arrayList
 * @constructor
 * @private
 * @export
 */
javascript.util.ArrayList.Iterator_ = function(arrayList) {
  this.arrayList_ = arrayList;
};

/**
 * @type {javascript.util.ArrayList}
 * @private
 */
javascript.util.ArrayList.Iterator_.prototype.arrayList_ = null;

/**
 * @type {number}
 * @private
 */
javascript.util.ArrayList.Iterator_.prototype.position_ = 0;

/**
 * @override
 * @export
 */
javascript.util.ArrayList.Iterator_.prototype.next = function() {
  if (this.position_ === this.arrayList_.size()) {
    throw new javascript.util.NoSuchElementException();
  }
  return this.arrayList_.get(this.position_++);
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.Iterator_.prototype.hasNext = function() {
  if (this.position_ < this.arrayList_.size()) {
    return true;
  } else {
    return false;
  }
};

/**
 * @override
 * @export
 */
javascript.util.ArrayList.Iterator_.prototype.remove = function() {
  throw new javascript.util.OperationNotSupported();
};

