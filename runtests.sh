#!/bin/sh
mocha -r test/init.js --recursive
mocha -r test/init_prod.js test/javascript/**/*.js --recursive
