/* License: MIT.
 * Copyright (C) 2014, 2015, Gil Fink.
 */

'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'ngPrint.js',
            ]
        },
        uglify: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: {
                    'ngPrint.min.js': 'ngPrint.js'
                }
            }
        },
        ngdocs: {
            options: {
                startPage: '/',
                title: false,
                html5Mode: false
            },
            api: {
                src: 'angular-moment.js',
                title: 'angular-moment API Documentation'
            }
        }
    });

    grunt.registerTask('build', [
        'jshint',
        'uglify'
    ]);

    grunt.registerTask('default', ['build']);
};