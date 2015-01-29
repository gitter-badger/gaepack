'use strict';

var gulp = require('gulp');
var g = require('gulp-load-plugins')({lazy: false});
var config = require('../config').watch;

gulp.task("watch", function () {

    g.watch(config.template, function () {
        gulp.start(['template-dev']);
    });

    g.watch(config.html, function () {
        gulp.start(['html-dev']);
    });

    g.watch(config.scss, function () {
        gulp.start(['scss-dev']);
    });

    g.watch(config.js, function () {
        gulp.start(['webpack-dev']);
    });

    g.watch(config.img, function () {
        gulp.start(['img']);
    });
});
