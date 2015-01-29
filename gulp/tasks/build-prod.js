var gulp = require('gulp');

gulp.task('build-prod', ['clean'], function () {
    gulp.start(['template', 'html', 'scss', 'img', 'fonts', 'webpack']);
});
