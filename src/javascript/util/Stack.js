goog.provide('javascript.util.Stack');

goog.require('javascript.util.EmptyStackException');
goog.require('javascript.util.List');

goog.scope(function() {

var EmptyStackException = javascript.util.EmptyStackException;


/**
 * @see http://download.oracle.com/javase/6/docs/api/java/util/Stack.html
 *
 * @extends {javascript.util.List}
 * @constructor
 * @export
 */
javascript.util.Stack = function() {
  /**
   * @type {Array}
   * @private
   */
  this.array_ = [];
};
goog.inherits(javascript.util.Stack, javascript.util.List);


/**
 * Pushes an item onto the top of this stack.
 * @param {Object} e
 * @return {Object}
 * @export
 */
javascript.util.Stack.prototype.push = function(e) {
  this.array_.push(e);
  return e;
};


/**
 * Pushes an item onto the top of this stack.
 * @param {Object} e
 * @return {Object}
 * @export
 */
javascript.util.Stack.prototype.pop = function(e) {
  if (this.array_.length === 0) {
    throw new EmptyStackException();
  }

  return this.array_.pop();
};


/**
 * Looks at the object at the top of this stack without removing it from the
 * stack.
 * @return {Object}
 * @export
 */
javascript.util.Stack.prototype.peek = function() {
  if (this.array_.length === 0) {
    throw new EmptyStackException();
  }

  return this.array_[this.array_.length - 1];
};


/**
 * Tests if this stack is empty.
 * @return {boolean} true if and only if this stack contains no items; false
 *         otherwise.
 * @export
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
 * @export
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
 * @export
 */
javascript.util.Stack.prototype.search = function(o) {
  return this.array_.indexOf(o);
};


/**
 * @return {number}
 * @export
 */
javascript.util.Stack.prototype.size = function() {
  return this.array_.length;
};


/**
 * @return {Array}
 * @export
 */
javascript.util.Stack.prototype.toArray = function() {
  var array = [];

  for (var i = 0, len = this.array_.length; i < len; i++) {
    array.push(this.array_[i]);
  }

  return array;
};


});  // goog.scope
