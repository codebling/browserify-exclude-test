var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['bundle-deps']);

gulp.task('bundle-deps', function() {
  return browserify()
    .require('react-select')
    .exclude('react') //peer dep of react-select
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('out'));
});
