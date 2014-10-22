goog.provide('javascript.util.Stack');

goog.require('javascript.util.EmptyStackException');
goog.require('javascript.util.List');

/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Stack.html
 *
 * @constructor
 */
javascript.util.Stack = function() {
  this.array_ = [];
};

/**
 * @type {Array}
 * @private
 */
javascript.util.Stack.prototype.array_ = null;

/**
 * Pushes an item onto the top of this stack.
 * @param {Object} e
 * @return {Object}
 */
javascript.util.Stack.prototype.push = function(e) {
  this.array_.push(e);
  return e;
};

/**
 * Pushes an item onto the top of this stack.
 * @param {Object} e
 * @return {Object}
 */
javascript.util.Stack.prototype.pop = function(e) {
  if (this.array_.length === 0) {
    throw new javascript.util.EmptyStackException();
  }

  return this.array_.pop();
};

/**
 * Looks at the object at the top of this stack without removing it from the
 * stack.
 * @return {Object}
 */
javascript.util.Stack.prototype.peek = function() {
  if (this.array_.length === 0) {
    throw new javascript.util.EmptyStackException();
  }

  return this.array_[this.array_.length - 1];
};

/**
 * Tests if this stack is empty.
 * @return {boolean} true if and only if this stack contains no items; false
 *         otherwise.
 */
javascript.util.Stack.prototype.empty = function() {
  if (this.array_.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * @return {boolean}
 */
javascript.util.Stack.prototype.isEmpty = function() {
  return this.empty();
};

/**
 * Returns the 1-based position where an object is on this stack. If the object
 * o occurs as an item in this stack, this method returns the distance from the
 * top of the stack of the occurrence nearest the top of the stack; the topmost
 * item on the stack is considered to be at distance 1. The equals method is
 * used to compare o to the items in this stack.
 *
 * NOTE: does not currently actually use equals. (=== is used)
 *
 * @param {Object} o
 * @return {number} the 1-based position from the top of the stack where the
 *         object is located; the return value -1 indicates that the object is
 *         not on the stack.
 */
javascript.util.Stack.prototype.search = function(o) {
  return this.array_.indexOf(o);
};

/**
 * @return {number}
 */
javascript.util.Stack.prototype.size = function() {
  return this.array_.length;
};

/**
 * @return {Array}
 */
javascript.util.Stack.prototype.toArray = function() {
  var array = [];

  for (var i = 0, len = this.array_.length; i < len; i++) {
    array.push(this.array_[i]);
  }

  return array;
};

