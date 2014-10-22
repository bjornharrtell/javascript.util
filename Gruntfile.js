module.exports = function(grunt) {


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        
        bower: {
    install: {
    }
  },
        
        gjslint: {
            options: {
              flags: [
                '--disable 110' //ignore error code 220 from gjslint
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
                compilerFile: 'lib/closure-compiler/compiler.jar',
                compilerOpts: {
                    compilation_level: 'SIMPLE',
                    externs: ['lib/closurecompiler-externs/*.js'],
                    define: ["'goog.DEBUG=false'"],
                    warning_level: 'verbose',
                    summary_detail_level: 3
                    //output_wrapper: '"(function(){%output%}).call(this);"'
                }
            },
            browser: {
                src: 'src/*.js',
                dest: 'dist/javascript.util.js'
            },
            node: {
                src: 'src/**/*.js',
                dest: 'dist/javascript.util-nodejs.js'
            }
        },
        
        closureDepsWriter: {
            main: {
                options: {
                    closureLibraryPath: 'lib/closure-library',
                    root_with_prefix: '"src ../../../../src"',
                },
                dest: 'deps.js'
            }
        },
    
    });
    
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-closure-tools');
    grunt.loadNpmTasks('grunt-gjslint');
    
    grunt.registerTask('default', ['bower', 'gjslint', 'closureDepsWriter', 'closureCompiler']);
}
