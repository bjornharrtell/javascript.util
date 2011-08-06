#!/bin/sh
jsbuild full.cfg -u -v -o ../lib -j javascript.util-uncompressed.js
java -jar compiler.jar --summary_detail_level 3 --compilation_level ADVANCED_OPTIMIZATIONS --warning_level=VERBOSE --generate_exports --output_wrapper "(function() {%output%})();" --js ../lib/javascript.util-uncompressed.js --js_output_file ../lib/javascript.util-compressed.js
cat ../license-notice.txt ../lib/javascript.util-compressed.js > ../lib/javascript.util.js
