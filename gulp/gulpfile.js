var gulp = require('gulp'),
    gutil  = require('gulp-util'),
    coffee = require('gulp-coffee');



// sample coffee task
gulp.task('coffee', function(){
  gulp.src('src/sites/**/*.coffee')
    .pipe(coffee().on('error', gutil.log))
    .pipe(gulp.dest('./dist/'));
});


