var gulp = require('gulp'),
	concat = require("gulp-concat"),
	clean = require("gulp-clean"),
	uglify = require("gulp-uglify"),
	rename = require('gulp-rename');

// 清除aTpl.min.js
gulp.task("cleand", function(){
  return gulp.src(['../clipBoard.min.js'], {read: false}).pipe(clean({force:true}));
});

// 压缩
gulp.task("default", ["cleand"], function() {
	return gulp.src("../src/clipBoard.js")
		.pipe(uglify({
			mangle: true
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest("../"));
});
