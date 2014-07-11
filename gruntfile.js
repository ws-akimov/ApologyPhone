'use strict'
/*global module:false*/
module.exports = function(grunt) {

  var cssFilesToInject = [
    'public/lib/bootstrap/dist/css/bootstrap.css',
    'public/lib/bootstrap/dist/css/bootstrap-theme.css',
    'public/lib/allmighty-autocomplete/style/*.css',
    'public/modules/*.css',
    'public/modules/**/*.css'
  ];

  /**
   * Javascript files to inject in order
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * To use client-side CoffeeScript, TypeScript, etc., edit the
   * `sails-linker:devJs` task below for more options.
   */

  var jsFilesToInject = [

    'public/lib/angular/angular.js',
    'public/lib/angular-resource/angular-resource.js', 
    'public/lib/angular-cookies/angular-cookies.js', 
    'public/lib/angular-animate/angular-animate.js', 
    'public/lib/angular-touch/angular-touch.js', 
    'public/lib/angular-sanitize/angular-sanitize.js', 
    'public/lib/angular-ui-router/release/angular-ui-router.js',
    'public/lib/angular-ui-utils/ui-utils.js',
    'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
    'public/lib/allmighty-autocomplete/script/autocomplete.js',
    'public/lib/ng-file-upload/**.js',
    'public/lib/Recorderjs/recorder.js',
    'public/lib/lodash/dist/lodash.js',
    'public/config.js',
    'public/application.js',
    'public/modules/**/*.client.module.js',
    'public/modules/**/*.js'
  ];


  /**
   * Client-side HTML templates are injected using the sources below
   * The ordering of these templates shouldn't matter.
   * (uses Grunt-style wildcard/glob/splat expressions)
   *
   * By default, Sails uses JST templates and precompiles them into
   * functions for you.  If you want to use jade, handlebars, dust, etc.,
   * edit the relevant sections below.
   */

  var templateFilesToInject = [
    'linker/**/*.html'
  ];

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // start a node server
    connect: {
      preview: {
        options: {
          port: 9000,
          base: 'preview'
        }
      },
      optimize: {
        options: {
          port: 3001,
          keepalive: true,
          base: 'production'
        }
      }
    },

    // delete everything from preview or production directories before preview or optimize task
    clean: {
      pre_optimize: {
        src: [
          'production/',
          'archive.zip'
          // '.tmp/**/'
        ]
      },
      post_optimize: {
        src: [
          // 'production/templates/',
          // 'production/scripts.ejs',
          // 'production/head.ejs',
          // 'production/js/',
          // 'production/linker/**/',
          // 'production/styles/',
          // // 'production/linker/templates/',
          // // 'production/linker/styles/',
          // '.tmp/**/',
          // 'production/views/**/*.ejs',
          // 'production/data/**/',
          // 'production/images/**/',
          // 'production/views/mail_templates'
        ]
      }
    },

    ejs_static: {
      views: {
        options: {
          dest: 'production/views/',
          path_to_data: 'dev/data/views.json',
          // path_to_layouts: 'dev/views',
          parent_dirs: false,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      },
      views_partials: {
        options: {
          dest: 'production/views/partials',
          path_to_data: 'dev/data/views_partials.json',
          // path_to_layouts: 'dev/views',
          parent_dirs: false,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      },

      views_partials_corp: {
        options: {
          dest: 'production/views/partials/corp',
          path_to_data: 'dev/data/views_partials_corp.json',
          // path_to_layouts: 'dev/views',
          parent_dirs: false,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      },


      optimize: {
        options: {
          dest: 'production',
          path_to_data: 'dev/data/pages.json',
          // path_to_layouts: 'dev/views',
          index_page: 'layout',
          parent_dirs: true,
          underscores_to_dashes: true,
          file_extension: '.html'
        }
      }
    },
    copy: {
      // preview: {
      //   files: [
      //     {expand: true, cwd: 'dev/', src: ['img/**'], dest: 'preview/'},
      //     {expand: true, cwd: 'dev/', src: ['css/**'], dest: 'preview/'},
      //     {expand: true, cwd: 'dev/', src: ['js/**'], dest: 'preview/'},
      //     {expand: true, cwd: 'dev/', src: ['.ht*'], dest: 'preview/'}
      //   ]
      // },
      optimize: {
        files: [
          {expand: true, cwd: 'public/modules/', src: ['**/views/*.*'], dest: 'production/'},
          {expand: true, cwd: 'public/modules/', src: ['**/views/**/*.*'], dest: 'production/'},
          {expand: true, cwd: 'public/modules/', src: ['**/img/**/*.*'], dest: 'production/'},
          {expand: true, cwd: 'public/modules/', src: ['**/css/**/*.*'], dest: 'production/'},
          {expand: true, cwd: '', src: ['index.html'], dest: 'production/'}


          // {expand: true, cwd: 'dev/linker/styles/fontawesome', src: ['**/*.css'], dest: '.tmp/public/linker/styles/fontawesome/'},
          // {expand: true, cwd: 'dev/linker/styles/corp', src: ['**/*.css'], dest: '.tmp/public/linker/styles/corp/'},
          // {expand: true, cwd: 'dev/linker/styles/css', src: ['**/*.css'], dest: '.tmp/public/linker/styles/css/'},
          // {expand: true, cwd: 'dev/linker/styles/', src: ['**/*.css'], dest: '.tmp/public/linker/styles/'},
          // {expand: true, cwd: 'dev/images/', src: ['**/*.*'], dest: 'production/min/images/'},
          // {expand: true, cwd: 'dev/linker/font/', src: ['**/*.*'], dest: 'production/font'},
          // {expand: true, cwd: 'dev/linker/fonts/', src: ['**/*.*'], dest: 'production/fonts'},

          // {expand: true, cwd: 'dev/linker/styles/fonts', src: ['**/*.css'], dest: '.tmp/public/linker/styles/fonts/'},
          // {expand: true, cwd: 'dev/linker/styles/fontawesome', src: ['**/*.css'], dest: '.tmp/public/linker/styles/fontawesome/'},
          // {expand: false, cwd: 'dev/linker/styles/fontawesome', src: ['**/*.css'], dest: '.tmp/public/linker/styles/fontawesome/'},
          // {expand: true, cwd: 'dev/', src: ['**'], dest: 'production/'}
        ]
      },
      tmp: {
        files: [
          {expand: true, cwd: '.tmp/', src: ['**'], dest: 'production/'}
        ]
      }
    },

    // get the scripts inside scripts.ejs and head.ejs build:js blocks
    // 'useminPrepare': {
    //   html: [
    //     'production/templates/components/global/head.ejs',
    //     'production/templates/components/global/scripts.ejs'
    //   ],
    //   options: {
    //     dest: 'production',
    //     root: 'production'
    //   }
    // },


    // watch: {
    //   preview: {
    //     files: 'dev/**',
    //     tasks: ['refresh_preview'],
    //     options: {
    //       debounceDelay: 250,
    //       livereload: true,
    //       spawn: false
    //     },
    //   },
    // },



    watch: {
      css: {
        files: 'dev/css/**',
        tasks: ['refresh_css'],
        options: {
          debounceDelay: 250,
          livereload: true,
          spawn: false
        },
      },
      js: {
        files: 'dev/js/**',
        tasks: ['refresh_js'],
        options: {
          debounceDelay: 250,
          livereload: true,
          spawn: false
        },
      },
      // img: {
      //   files: 'dev/img/**',
      //   tasks: ['refresh_preview'],
      //   options: {
      //     debounceDelay: 250,
      //     livereload: true,
      //     spawn: false
      //   },
      // },
      // templates: {
      //   files: 'dev/templates/**',
      //   tasks: ['refresh_preview'],
      //   options: {
      //     debounceDelay: 250,
      //     livereload: true,
      //     spawn: false
      //   },
      // },
      // data: {
      //   files: 'dev/data/**',
      //   tasks: ['refresh_preview'],
      //   options: {
      //     debounceDelay: 250,
      //     livereload: true,
      //     spawn: false
      //   },
      // },
      // this matches any files in root dir like .htaccess, robots.txt, etc
      everything_else: {
        files: 'dev/!(css|js)/**',
        tasks: ['refresh_preview'],
        options: {
          debounceDelay: 250,
          livereload: true,
          spawn: false
        },
      },
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'dev/js/site/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    imagemin: {
      production: {
        files: [{
          expand: true,
          cwd: 'production/min/images/',
          src: ['**/*.{png,jpg,gif,jpeg}'],
          dest: 'production/min/images/'
        }]
      }
    },

    // modernizr: {
    //   "devFile" : "remote",
    //   "outputFile" : "dev/js/vendor/modernizr_custom.js",
    //   // add feature tests here
    //   "extra" : {
    //     "shiv" : true,
    //     "load" : true,
    //     "cssclasses" : true,
    //     "cssanimations": true
    //   },
    //   "uglify" : true,
    //   "parseFiles" : false
    // },
    compass: {
      dev: {
        options: {
          sassDir: 'dev/linker/styles',
          cssDir: '.tmp/public/linker/styles',
          generatedImagesDir: '.tmp/public/linker/images/generated',
          imagesDir: 'dev/images',
          javascriptsDir: 'dev/linker/js',
          fontsDir: 'dev/linker/styles/fonts',
          importPath: 'dev/js/bower_components',
          // httpImagesPath: '/dev/images',
          // httpGeneratedImagesPath: '/linker/images/generated',
          // httpFontsPath: '/linker/styles/fonts',
          relativeAssets: false,
          debugInfo: false,
          
        }
      }
    },

    concat: {
      js: {
        src: jsFilesToInject,
        //dest: '.tmp/public/concat/production.js'
         dest: 'production/min/min.js'
      },
      css: {
        src: cssFilesToInject,
        dest: 'production/min/min.css'
      }
    },

    uglify: {
      dist: {
        src: ['.tmp/public/concat/production.js'],
        dest: 'production/min/min.js',
        mangle: false
      },
    },

    cssmin: {
      dist: {
        src: ['.tmp/public/concat/production.css'],
        dest: 'production/min/min.css',
        keepSpecialComments: 0
      }
    },

    // compress: {
    //   main: {
    //     expand: true,
    //     cwd: 'production/',
    //     src: ['**'],
    //     dest: 'production.zip'
    //   }
    // },
    compress: {
      main: {
        options: {
          archive: 'archive.zip'
        },
        files: [     
          {expand: true, cwd: 'production/', src: ['**'], dest: '/'},] // makes all src relative to cwd      
      }
    },


  });

  // discussion @ https://github.com/gruntjs/grunt/issues/975
  //
  // JSHINT
  grunt.registerTask('jshint', [], function () {

    // load plugins for jshint task
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // execute the task
    grunt.task.run(
      'jshint'
    );

  });
  // END JSHINT

  // DEVELOPMENT
  //
  // preview the site during development
  grunt.registerTask('preview', [], function () {

    // load plugins for preview task
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ejs-static');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // execute the task
    grunt.task.run(
      'jshint',
      'clean:preview',
      'modernizr',
      'copy:preview',
      'ejs_static:preview',
      'connect:preview',
      'watch'
    );

  });
  // end preview the site during development

  // refresh preview site when files change
  // necessary tasks are still loaded because of running grunt process (watch), so no need to load plugins
  grunt.registerTask('refresh_css', [
    'copy:preview',
    'ejs_static:preview'
  ]);
  grunt.registerTask('refresh_js', [
    'jshint',
    'copy:preview',
    'ejs_static:preview'
  ]);
  grunt.registerTask('refresh_preview', [
    'copy:preview',
    'ejs_static:preview'
  ]);
  // end refresh preview site when files change
  //
  // END DEVELOPEMENT

  // OPTIMIZE
  //
  // optimize the site for deployment
  grunt.registerTask('optimize', [], function () {

    // load plugins for optimize task
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-ejs-static');
    // grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compress');

    // execute the task
    grunt.task.run(
      //'jshint',
      'clean:pre_optimize',
      // 'modernizr',
      // 'useminPrepare',
      'copy:optimize',
      //'compass:dev',
      'concat',
      // 'uglify',
      //'cssmin',
      // 'filerev',
      // 'usemin',
      //'ejs_static:views',
      //'ejs_static:views_partials',
      //'ejs_static:views_partials_corp',
      //'ejs_static:optimize',
      // 'imagemin:production',
      'clean:post_optimize',
          // 'copy:tmp',
      'compress:main',
      'connect:optimize'
    );

  });
  // END OPTIMIZE

};