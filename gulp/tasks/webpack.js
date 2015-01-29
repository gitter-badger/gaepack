var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var config = require('../config');

gulp.task('webpack', function () {
    g.webpack(config.webpack)
        .pipe(gulp.dest(config.js.dest));
});

gulp.task('webpack-dev', function () {
    g.webpack(config.webpackDev)
        .pipe(gulp.dest(config.js.dest));
});
