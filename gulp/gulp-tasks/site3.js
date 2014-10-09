var gulp = require('gulp')
  , coffee = require('gulp-coffee')
  , gutil  = require('gulp-util')

// sample coffee task
gulp.task('coffee', function(){
  gulp.src('src/sites/**/*.coffee')
    .pipe(coffee().on('error', gutil.log))
    .pipe(gulp.dest('./dist/'));
});
