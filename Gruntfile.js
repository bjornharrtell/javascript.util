module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        
        gjslint: {
            options: {
                flags: [
                    '--disable 110,222'
                ],
                reporter: {
                    name: 'console'
                }
            },
            all: {
                src: ['src/**/*.js']
            }
        },
        
        jsdoc: {
		    dist : {
			    src: ['src/javascript'], 
			    options: {
			        configure: 'doc/conf.json',
				    destination: 'dist/doc'
			    }
		    }
	    },

        closureCompiler: {
            options: {
                compilerFile: 'bower_components/closure-compiler/compiler.jar',
                compilerOpts: {
                    compilation_level: 'ADVANCED',
                    charset: 'UTF-8',
                    generate_exports: true,
                    manage_closure_dependencies: true,
                    only_closure_dependencies: true,
                    use_types_for_optimization: null,
                    summary_detail_level: 3,
                    "jscomp_error": [
                      "accessControls",
                      "ambiguousFunctionDecl",
                      "checkEventfulObjectDisposal",
                      "checkRegExp",
                      "checkStructDictInheritance",
                      "checkTypes",
                      "checkVars",
                      "const",
                      "constantProperty",
                      "deprecated",
                      "duplicateMessage",
                      "es3",
                      "es5Strict",
                      "externsValidation",
                      "fileoverviewTags",
                      "globalThis",
                      "internetExplorerChecks",
                      "invalidCasts",
                      "misplacedTypeAnnotation",
                      "missingGetCssName",
                      "missingProperties",
                      "missingProvide",
                      "missingRequire",
                      "missingReturn",
                      "newCheckTypes",
                      "nonStandardJsDocs",
                      "suspiciousCode",
                      "strictModuleDepCheck",
                      "typeInvalidation",
                      "undefinedNames",
                      "undefinedVars",
                      "unknownDefines",
                      "uselessCode",
                      "visibility"
                    ],
                    closure_entry_point: [
                        'javascript.util.ArrayList',
                        'javascript.util.Arrays',
                        'javascript.util.HashMap',
                        'javascript.util.HashSet',
                        'javascript.util.Stack',
                        'javascript.util.TreeMap',
                        'javascript.util.TreeSet'
                    ],
                    output_wrapper: '"(function(){%output%})();"'
                }
            },
            browser: {
                src: [
                    'src/javascript',
                    'bower_components/closure-library/closure/goog/base.js',
                ],
                dest: 'build/javascript.util.js'
            }
        },

        concat: {
            browser: {
                src: ['license-notice.txt', 'build/javascript.util.js'],
                dest: 'dist/javascript.util.min.js',
            }
        },

        closureDepsWriter: {
            main: {
                options: {
                    closureLibraryPath: 'bower_components/closure-library',
                    root_with_prefix: '"src ../../../../src"',
                },
                dest: 'deps.js'
            }
        },
        
        'gh-pages': {
            options: {
                base: 'dist'
            },
            src: ['**']
        },
        
    });

    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-gjslint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-gh-pages');

    grunt.registerTask('default', ['closureDepsWriter', 'gjslint']);
    grunt.registerTask('dist', ['default', 'closureCompiler', 'concat', 'jsdoc']);
    grunt.registerTask('publish', ['dist', 'gh-pages']);
}
