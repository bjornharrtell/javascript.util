# javascript.util

javascript.util is a port of selected parts of java.util to JavaScript which
main purpose is to ease porting Java code to JavaScript.

javascript.util can be used in browsers or as a Node JS module.

[![Build Status](https://travis-ci.org/bjornharrtell/javascript.util.svg)](https://travis-ci.org/bjornharrtell/javascript.util)

[API docs](http://bjornharrtell.github.io/javascript.util/doc)

## Usage

### Browsers

Simply include [javascript.util.min.js](https://github.com/bjornharrtell/javascript.util/releases/download/0.12.12/javascript.util.min.js) on your page.

### Node JS

Install latest released version:

```bash
    npm install javascript.util
```

A simple Node JS code example using javascript.util:

```javascript
    require('javascript.util');
    var ArrayList = javascript.util.ArrayList;
    var array = new ArrayList();
    array.add(1);
```

## Development environment

Linux or similar is assumed.

### Dependencies

* Node JS
* mocha (for tests)
* chai (for tests)
* bower (for dependencies)
* grunt (for builds)

### Unit tests

```bash
    npm test
```
