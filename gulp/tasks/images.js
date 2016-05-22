'use strict';

const gulp       = require('gulp');
const gutil      = require('gulp-util');
const imagemin 	 = require('gulp-imagemin');

gulp.task('images', () => {
	gulp.src('./src/client/images/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('./dist/client/images'));
});
