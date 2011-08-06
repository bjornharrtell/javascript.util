#!/bin/sh
jsbuild full.cfg -u -v -o ../lib -j javascript.util.js
java -jar compiler.jar --summary_detail_level 3 --compilation_level ADVANCED_OPTIMIZATIONS --warning_level=VERBOSE --generate_exports --output_wrapper "(function() {%output%})();" --js ../lib/javascript.util.js --js_output_file ../lib/javascript.util-min.js
