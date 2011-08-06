#!/bin/sh
jsbuild full.cfg -u -v -o ../lib -j javascript.util.js
# Haven't worked out how to use ADVANCED_OPTIMIZATIONS yet
# --generate_exports --compilation_level ADVANCED_OPTIMIZATIONS --output_wrapper "(function() {%output%})();"
java -jar compiler.jar --summary_detail_level 3 --compilation_level ADVANCED_OPTIMIZATIONS --warning_level=VERBOSE --generate_exports --output_wrapper "(function() {%output%})();" --js ../lib/javascript.util.js --js_output_file ../lib/javascript.util-min.js

