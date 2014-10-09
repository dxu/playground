var gulp = require('gulp')
  , coffee = require('gulp-coffee')
  , gutil  = require('gulp-util')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')

// sample coffee task
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/browserify-uglify-sourcemap.md
// http://viget.com/extend/gulp-browserify-starter-faq
  // TODO: WHY DO THEY USE VINYL-BUFFER????
gulp.task('browserify', function(){


  var bundler = browserify({
    entries: ["./src/sites/site1/scripts/test"],
    debug: true,
    extensions: ['.coffee']
  })

  bundler.transform('coffeeify')

  return bundle = (function(){

    return bundler.bundle()
      .pipe(source('site1-out.js'))
      .pipe(gulp.dest('./dist'))

    // gulp.src('src/sites/site1/scripts/*.coffee')
    //   .pipe(coffee().on('error', gutil.log))
    //   .pipe(browserify())
    //   .pipe(gulp.dest('./dist'));


  })()

});
