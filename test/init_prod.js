global.expect = require('chai').expect;
global.goog = {
    require: function() {}
}
require('../dist/javascript.util-nodejs.js');
