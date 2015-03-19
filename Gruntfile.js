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

        closureCompiler: {
            options: {
                compilerFile: 'bower_components/closure-compiler/compiler.jar',
                compilerOpts: {
                    compilation_level: 'ADVANCED',
                    output_wrapper: '"(function(){%output%}).call(this);"'
                },
                execOpts: {
                    maxBuffer: 999999 * 1024
                },
                TieredCompilation: true
            },
            browser: {
                src: ['src/javascript'],
                dest: 'build/javascript.util.js'
            },
            node: {
                TEMPcompilerOpts: {
                    only_closure_dependencies: false,
                },
                src: ['src/javascript', 'src/node.js' ],
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
        }
        
    });

    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-gjslint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['gjslint', 'closureDepsWriter']);
    grunt.registerTask('dist', ['default', 'closureCompiler', 'concat']);
}
