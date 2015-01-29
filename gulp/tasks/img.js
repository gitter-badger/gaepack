var gulp = require('gulp');
var config = require('../config').img;

gulp.task('img', function () {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});
