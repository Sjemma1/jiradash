'use strict';

const gulp       = require('gulp');
const gutil      = require('gulp-util');

gulp.task('fonts', () => {
	gulp.src('./src/client/fonts/*.*')
		.pipe(gulp.dest('./dist/client/fonts'));
});
