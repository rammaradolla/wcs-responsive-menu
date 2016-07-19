module.exports = function(grunt) {
  grunt.initConfig({

    concat : {
      options: {
        separator: '\n\n//------------------------------------------\n',
        banner: '\n\n//------------------------------------------\n'
      },
      dist : {
        src: ['components/scripts/*.js'],
        dest: 'builds/development/js/script.js'
      }
    }, //concat

    bower_concat: {
      all: {
        cssDest: 'builds/development/css/_bower.css',
        dest: 'builds/development/js/_bower.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          src: 'components/sass/style.scss',
          dest:'builds/development/css/style.css'
        }]
      }
    }, //sass

    less: {
      production: {
        files: {
          'builds/development/css/style.css': 'components/less/style.less'
        }
      }
    }, //less

    wiredep: {
      task: {
        src:'builds/development/**/*.html'
      }
    },

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 3000,
          base: 'builds/development',
          livereload:true
        }
      }
    },

    watch: {
      scripts: {
        files: ['builds/development/**/*.html',
          'components/scripts/**/*.js',
          'components/less/**/*.less'],
        tasks: ['concat', 'less:production'],
        options: {
          spawn: false,
          livereload:true
        },
      },
    }


  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-bower-concat');


  grunt.registerTask('default', ['wiredep', 'less', 'concat', 'connect', 'watch']);

}; //wrapper function