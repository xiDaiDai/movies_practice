module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
    	jade:{
    		files: ['views/**'],
      	options: {
          livereload: true
    		}
      },
      js:{
      	files: ['public/js/**','models/**/*.js','schemas/**/*.js'],
      	options: {
          livereload: true
    		}
      }
    },
    nodemon:{
    	dev: {
    		script: 'app.js',
    		options: {
      		args: [],
      		env: {
        		PORT: '3000'
      		},
      nodeArgs: ['--debug'],
      ignore: ['README.md','node_modules/**','.DS_Store'],
      ext: 'js',
      watch: ['app','config'],
      delay: 1000,
      legacyWatch: true
    		}
    	}
    },
    concurrent:{
    	tasks:['nodemon','watch'],
    	options:{
    		logConcurrentOutput:true
    	}
    }
     
  });

  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.option('force',true);
  grunt.registerTask('default', ['concurrent']);



}