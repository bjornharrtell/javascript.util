module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        gjslint: {
            options: {
                flags: [
                    '--disable 110'
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
                    //warning_level: 'VERBOSE',
                    //jscomp_off: ['visibility'],
                    closure_entry_point: [
                        'javascript.util.ArrayList',
                        'javascript.util.Arrays',
                        'javascript.util.Collection',
                        'javascript.util.EmptyStackException',
                        'javascript.util.HashMap',
                        'javascript.util.HashSet',
                        'javascript.util.IndexOutOfBoundsException',
                        'javascript.util.Iterator',
                        'javascript.util.List',
                        'javascript.util.Map',
                        'javascript.util.NoSuchElementException',
                        'javascript.util.OperationNotSupported',
                        'javascript.util.Set',
                        'javascript.util.SortedMap',
                        'javascript.util.SortedSet',
                        'javascript.util.Stack',
                        'javascript.util.TreeMap',
                        'javascript.util.TreeSet'
                    ],
                    output_wrapper: '"(function(){%output%}).call(this);"'
                },
                execOpts: {
                    maxBuffer: 999999 * 1024
                },
                TieredCompilation: true
            },
            browser: {
                src: [
                    'src/javascript',
                    'bower_components/closure-library/closure/goog/base.js',
                ],
                dest: 'build/javascript.util.js'
            },
            node: {
                TEMPcompilerOpts: {
                    only_closure_dependencies: false,
                    jscomp_off: ['undefinedNames', 'undefinedVars']
                },
                src: [
                    'src',
                    'bower_components/closure-library/closure/goog/base.js',
                    'src/node.js'
                ],
                dest: 'build/javascript.util-node.js'
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            browser: {
                src: ['license-notice.txt', 'build/javascript.util.js'],
                dest: 'dist/javascript.util.min.js',
            },
            node: {
                src: ['license-notice.txt', 'build/javascript.util-node.js'],
                dest: 'dist/javascript.util-node.min.js',
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

    grunt.registerTask('default', ['gjslint', 'closureDepsWriter']);
    grunt.registerTask('dist', ['default', 'closureCompiler', 'concat', 'jsdoc']);
    grunt.registerTask('publish', ['dist', 'gh-pages']);
}
