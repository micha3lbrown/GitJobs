'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');




gulp.task('styles', function() {
	gulp.src('./app/assets/scss/*.scss')
		.pipe(sass({
    		includePaths: ['./node_modules/foundation/scss/']
		}))
	  	.pipe(gulp.dest('./app/build/css/'));
});