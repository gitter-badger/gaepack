var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var config = require('../config').html;

gulp.task('html', function () {
    gulp.src(config.src)
        .pipe(g.htmlmin(config))
        .pipe(gulp.dest(config.dest));
});

gulp.task('html-dev', function () {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
