var gulp = require('gulp');

gulp.task('build', ['clean'], function () {
    gulp.start(['template-dev', 'html-dev', 'scss-dev', 'img', 'fonts', 'webpack-dev']);
});
