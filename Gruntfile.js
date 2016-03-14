/* jshint node:true */
module.exports = function( grunt ) {
	'use strict';

	require( 'load-grunt-tasks' )( grunt );

	var heConfig = {

		// gets the package vars
		pkg: grunt.file.readJSON( 'package.json' ),

		// setting folder templates
		dirs: {
			css: 'stylesheets',
			js: 'javascripts',
			sass: 'stylesheets/sass'
		},

		// uglify to concat and minify
		uglify: {
			dist: {
				options: {
					beautify: true
				},
			    files: {
					'<%= dirs.js %>/main.min.js': [
						'<%= dirs.js %>/src/*.js'
					]
				}
			},
			vendor: {
				options: {
					beautify: true
				},
				files: {
					'<%= dirs.js %>/vendor.min.js': [
						'<%= dirs.js %>/vendor/*.js'
					]
				}
			},
			app: {
				options: {
					//beautify: true
				},
				files: {
					'<%= dirs.js %>/app.min.js': [
						'<%= dirs.js %>/vendor/jquery.validate.min.js',
						'<%= dirs.js %>/src/floating-labels.js',
						'<%= dirs.js %>/src/refills-dropdown.js',
						'<%= dirs.js %>/src/refills-modal.js',
						'<%= dirs.js %>/src/jquery.fancybox-1.3.4.js',
						'<%= dirs.js %>/vendor/isotope.pkgd.min.js',
						'<%= dirs.js %>/vendor/packery-mode.js',
						'<%= dirs.js %>/vendor/jquery.waypoints.js',
						'<%= dirs.js %>/vendor/typed.js',
						'<%= dirs.js %>/vendor/jquery.bxslider.js',
						'<%= dirs.js %>/vendor/jquery.counterup.min.js',
						'<%= dirs.js %>/vendor/jquery.cycle2.js',
						'<%= dirs.js %>/vendor/jquery.cycle2.carousel.js',
						'<%= dirs.js %>/src/jcarousellite_1.0.1.js',
						'<%= dirs.js %>/src/ytplayer.min.js',
						'<%= dirs.js %>/src/site.js',
						'<%= dirs.js %>/src/scroll.js',
						'<%= dirs.js %>/src/parallax.js',
						'<%= dirs.js %>/src/count.js',
						'<%= dirs.js %>/src/grid-mosaic.js',
						'<%= dirs.js %>/src/carousel.js'
					]
				}
			}
		},

		// compile scss/sass files to CSS
		sass: {
			dist: {
				options: {
					style: 'compressed', // compressed
					sourcemap: 'none',
					loadPath: require( 'node-bourbon' ).includePaths
				},
				files: [{
					expand: true,
					cwd: '<%= dirs.sass %>',
					src: ['*.scss'],
					dest: '<%= dirs.css %>',
					ext: '.min.css'
				}]
			}
		},

		watch: {
              sass: {
                    files: [
                          '<%= dirs.sass %>/**'
                    ],
                    tasks: ['sass']
              },
              js: {
                    files: [
                          '<%= dirs.js %>/src/**'
                    ],
                    tasks: ['uglify']
              },
              // <script src="http://localhost:35729/livereload.js?snipver=1"></script>
              livereload: {
                    options: {
                          livereload: true
                    },
                    files: [
                       '_site/*.html'
                    ]
              },
              options: {
                    spawn: false
              }
        }

	};

	// Initialize Grunt Config
	// --------------------------
	grunt.initConfig( heConfig );
	require('time-grunt')(grunt);

	// Register Tasks
	// --------------------------

	// Default Task
	grunt.registerTask( 'default', [
		'sass',
		'uglify'
	] );

	grunt.registerTask( 'w', ['watch'] );

};
