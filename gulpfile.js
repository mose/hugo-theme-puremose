var gulp = require('gulp');
var uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util'),
	  minifyCSS = require('gulp-minify-css');

gulp.task('default', function() {
  gulp.src(['assets/*.coffee'])
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('assets/js/scripts.js'));
  gulp.src(['assets/js/jquery.min.js', 'assets/js/jquery.prettysocial.min.js', 'assets/js/rainbow-custom.min.js', 'assets/js/scripts.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
  gulp.src(['assets/css/blog.css', 'assets/css/syntax-highlighter.css', 'assets/css/custom.css'])
    .pipe(concat('all.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css/'));
});
