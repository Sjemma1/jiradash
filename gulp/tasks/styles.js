'use strict';

const gulp       = require('gulp');
const gutil      = require('gulp-util');
const sass       = require('gulp-sass');
const cssnano    = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', () => {

	gulp.src('./src/client/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cssnano())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/client/styles'));

});
