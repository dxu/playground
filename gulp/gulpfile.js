var gulp = require('gulp'),
    gutil  = require('gulp-util'),
    coffee = require('gulp-coffee');



gulp.task('coffee', function(){
  gulp.src('sites/**/*.coffee')
    .pipe(coffee().on('error', gutil.log))
    .pipe(gulp.dest('./dist/'));
});


