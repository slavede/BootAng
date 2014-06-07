// Generated on 2014-05-22 using generator-angular 0.8.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      dist: 'dist',
      distBootAng : 'dist_bootang',
      src : 'src'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.src %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      distBootAng : {
        src : ['<%= yeoman.distBootAng %>/']
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      },
    },

    // Automatically inject Bower components into the app
    bowerInstall: {
      app: {
        src: ['<%= yeoman.src %>/index.html'],
        ignorePath: '<%= yeoman.src %>/'
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    cssmin: {
      distBootAng : {
        options: {
          banner: '/* Bootang minified css file */'
        },
        files: {
          '<%= yeoman.dist %>/bootang.min.css': ['<%= yeoman.src %>/styles/bootang-*.css']
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    // ngmin tries to make the code safe for minification automatically by
    // using the Angular long form for dependency injection. It doesn't work on
    // things like resolve or inject so those have to be done manually.
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      },
      distBootAng : {
        files: [{
          expand: true,
          src: [
            '<%= yeoman.src %>/scripts/directives/*.js',
            '<%= yeoman.src %>/tmp/templates/*.js',
            '<%= yeoman.src %>/scripts/bootang.js'
          ],
          dest: '<%= yeoman.distBootAng %>/tmp'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.src %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.src %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    ngtemplates:  {
      app:        {
        cwd : '<%= yeoman.src %>',
        src:      'views/directives/*.tpl',
        dest:     '<%= yeoman.distBootAng %>/tmp/templates/templates.js',
        options:      {
          bootstrap:  function(module, script) {
            // script = script.replace('app/views/', 'views/');
            return "angular.module('BootAng').run(['$templateCache', function($templateCache) { \n" + script + "}]);";
          },
        }
      }
    },
    less : {
      distBootAng : {
        options: {
          cleancss: true,
        },
        files: {
          '<%= yeoman.dist %>/bootang.min.css': ['<%= yeoman.src %>/less/bootang-main.less']
        }
      }
    },


    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.src %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
      // dist: {
      //   files: {
      //     '<%= yeoman.dist %>/scripts/scripts.js': [
      //       '<%= yeoman.dist %>/scripts/scripts.js'
      //     ]
      //   }
      // }
      distBootAng : {
        files : {
          '<%= yeoman.dist %>/bootang.min.js' : [
            '<%= yeoman.distBootAng %>/tmp/src/scripts/bootang.js',
            '<%= yeoman.distBootAng %>/tmp/templates/*.js',
            '<%= yeoman.distBootAng %>/tmp/src/scripts/directives/*.js',
            
            
            '!<%= yeoman.distBootAng %>/tmp/src/scripts/app.js'
          ]
        }
      }
    },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('buildBootAng', [ // builds bootang.min.js and bootang.min.css
    'clean:distBootAng', // clean dist_bootang/tmp/*
    'clean:dist', // clean dist
    'autoprefixer', // default autoprefixer for css
    'ngtemplates', // take all templates and create .js from them inside tmp/templates (it will be used later for uglify and ngmin)
    'ngmin:distBootAng', // prepare ng files for uglify
    'uglify:distBootAng', // uglify js
    // 'cssmin:distBootAng', // minify css
    'less:distBootAng',
    'clean:distBootAng' // clean dist_bootang/dist/* and dist_bootang/tmp/*
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);


  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-angular-templates');
};
