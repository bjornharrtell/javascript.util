#!/bin/sh
webmake ../lib/browser.js javascript.util.js
java -jar compiler.jar --js javascript.util.js --js_output_file javascript.util.min.js
cat ../license-notice.txt javascript.util.min.js > javascript.util-0.11.0.min.js
