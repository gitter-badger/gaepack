var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var config = require('../config').scss;

gulp.task('scss', function () {
    gulp.src(config.src)
        .pipe(g.plumber())
        .pipe(g.sass(config))
        .pipe(g.pleeease())
        .pipe(gulp.dest(config.dest));
});

gulp.task('scss-dev', function () {
    gulp.src(config.src)
        .pipe(g.plumber())
        .pipe(g.sass(config))
        .pipe(g.pleeease({minifier: false}))
        .pipe(gulp.dest(config.dest));
});
