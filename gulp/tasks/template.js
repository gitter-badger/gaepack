var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var config = require('../config').template;

gulp.task('template', function () {
    gulp.src(config.src)
        .pipe(g.htmlmin(config))
        .pipe(gulp.dest(config.dest));
});

gulp.task('template-dev', function () {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
