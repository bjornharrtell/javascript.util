javascript.util is a port of selected parts of java.util to JavaScript which
main purpose is to ease porting Java code to JavaScript.

javascript.util can be used in browsers or as a Node JS module.

* TODO: describe "selected parts"
* TODO: generate API docs

Usage
=====

Browsers
--------

Simply include [javascript.util.js](https://github.com/bjornharrtell/javascript.util/releases/download/v0.11.0/javascript.util.js) in your page.

Node JS
-------

Using NPM a trunk version of javascript.util can be installed with the following:

```bash
    npm install git://github.com/bjornharrtell/javascript.util.git
```

A simple code example using javascript.util:

```javascript
	var ArrayList = require("javascript.util").ArrayList;
	var array = new ArrayList();
	array.add(1);
```

Development environment
=======================

Linux or similar is assumed.

Dependencies
------------

* Node JS
* mocha (for tests)
* chai (for tests)
* webmake (for browser build)
* Closure compiler (for browser build)

Unit tests
----------

Can be run at command line using mocha.
