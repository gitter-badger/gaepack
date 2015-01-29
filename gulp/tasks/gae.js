var gulp = require('gulp');
var shell = require('gulp-shell')

gulp.task('gae', shell.task([
    'GOPATH=`pwd`/appengine:`goapp env GOPATH` goapp serve appengine'
]));
