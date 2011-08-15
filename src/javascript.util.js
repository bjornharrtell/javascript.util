/**
 * Add part of The Closure Library to enable use of export JSDocs.
 *
 * TODO: Add http://www.apache.org/licenses/LICENSE-2.0 to
 * distribution/attribution.
 */
var goog = {};

/**
 * Builds an object structure for the provided namespace path, ensuring that
 * names that already exist are not overwritten. For example: "a.b.c" -> a =
 * {};a.b={};a.b.c={}; Used by goog.provide and goog.exportSymbol.
 *
 * @param {string}
 *          name name of the object that this file defines.
 * @param {*=}
 *          opt_object the object to expose at the end of the path.
 * @param {Object=}
 *          opt_objectToExportTo The object to add the path to; default is
 *          |goog.global|.
 * @private
 */
goog.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split('.');
  var cur = opt_objectToExportTo || window;

  // Internet Explorer exhibits strange behavior when throwing errors from
  // methods externed in this manner. See the testExportSymbolExceptions in
  // base_test.html for an example.
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }

  // Certain browsers cannot parse code in the form for((a in b); c;);
  // This pattern is produced by the JSCompiler when it collapses the
  // statement above into the conditional loop below. To prevent this from
  // happening, use a for-loop and reserve the init logic as below.

  // Parentheses added to eliminate strict JS warning in Firefox.
  for (var part; parts.length && (part = parts.shift());) {
    if (!parts.length && opt_object !== undefined) {
      // last part and we have an object; use it
      cur[part] = opt_object;
    } else if (cur[part]) {
      cur = cur[part];
    } else {
      cur = cur[part] = {};
    }
  }
};

/**
 * Exposes an unobfuscated global namespace path for the given object. Note that
 * fields of the exported object *will* be obfuscated, unless they are exported
 * in turn via this function or goog.exportProperty
 *
 * <p>
 * Also handy for making public items that are defined in anonymous closures.
 *
 * ex. goog.exportSymbol('Foo', Foo);
 *
 * ex. goog.exportSymbol('public.path.Foo.staticFunction', Foo.staticFunction);
 * public.path.Foo.staticFunction();
 *
 * ex. goog.exportSymbol('public.path.Foo.prototype.myMethod',
 * Foo.prototype.myMethod); new public.path.Foo().myMethod();
 *
 * @param {string}
 *          publicPath Unobfuscated name to export.
 * @param {*}
 *          object Object the name should point to.
 * @param {Object=}
 *          opt_objectToExportTo The object to add the path to; default is
 *          |goog.global|.
 */
goog.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  goog.exportPath_(publicPath, object, opt_objectToExportTo);
};

/**
 * Exports a property unobfuscated into the object's namespace. ex.
 * goog.exportProperty(Foo, 'staticFunction', Foo.staticFunction); ex.
 * goog.exportProperty(Foo.prototype, 'myMethod', Foo.prototype.myMethod);
 *
 * @param {Object}
 *          object Object whose static property is being exported.
 * @param {string}
 *          publicName Unobfuscated name to export.
 * @param {*}
 *          symbol Object the name should point to.
 */
goog.exportProperty = function(object, publicName, symbol) {
  object[publicName] = symbol;
};

var javascript = {};
javascript.util = {};
/**
 * @export
 */
javascript.util.version = '0.7.0';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.OperationNotSupported = function(message) {
  this.message = message || '';
};
javascript.util.OperationNotSupported.prototype = new Error();
/**
 * @type {string}
 * @export
 */
javascript.util.OperationNotSupported.prototype.name = 'OperationNotSupported';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.IndexOutOfBoundsException = function(message) {
  this.message = message || '';
};
javascript.util.IndexOutOfBoundsException.prototype = new Error();
/**
 * @type {string}
 * @export
 */
javascript.util.IndexOutOfBoundsException.prototype.name = 'IndexOutOfBoundsException';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.NoSuchElementException = function(message) {
  this.message = message || '';
};
javascript.util.NoSuchElementException.prototype = new Error();
/**
 * @type {string}
 * @export
 */
javascript.util.NoSuchElementException.prototype.name = 'NoSuchElementException';

/**
 * @param {string=}
 *          message Optional message.
 * @extends {Error}
 * @constructor
 * @export
 */
javascript.util.EmptyStackException = function(message) {
  this.message = message || '';
};
javascript.util.EmptyStackException.prototype = new Error();
/**
 * @type {string}
 * @export
 */
javascript.util.EmptyStackException.prototype.name = 'EmptyStackException';
