var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('default', ['bundle-deps']);

gulp.task('bundle-deps', function() {
  return browserify()
    .require('@blueprintjs/core')
    .exclude('react')
    .bundle()
    .pipe(source('bundle.js')) //the output file name. hacky but is recommended way
    .pipe(gulp.dest('out'));
});
