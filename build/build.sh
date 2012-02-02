#!/bin/sh
jsbuild full.cfg -u -v -o ../lib -j javascript.util-uncompressed.js

# closure compiler
# NOTE: Not used ATM since it warns about silly stuff
#java -jar compiler.jar \
#	--summary_detail_level 3 \
#	--compilation_level SIMPLE_OPTIMIZATIONS \
#	--warning_level=VERBOSE \
#	--generate_exports \
#	--externs externs.js \
#	--output_wrapper "(function(exports){%output%})(typeof exports === 'undefined'? this : exports);" \
#	--js ../lib/javascript.util-uncompressed.js \
#	--js_output_file ../lib/javascript.util-compressed.js

uglifyjs -mt -nc -o ../lib/javascript.util-compressed.js ../lib/javascript.util-uncompressed.js

cat ../license-notice.txt ../lib/javascript.util-compressed.js > ../lib/javascript.util.js
