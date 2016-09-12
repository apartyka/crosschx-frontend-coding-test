// Require dependencies for the build and local development
const gulp = require('gulp');
const browserify = require('gulp-browserify');
const webserver = require('gulp-webserver');
const sass = require('gulp-sass');

// Define the source and output for gulp
const src = './src';
const app = './build/app';

// Watch js changes. Compiles to build/app/js
gulp.task('js', function() {
  return gulp.src(src + '/js/App.js')
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

// Watch html changes
gulp.task('html', function() {
  gulp.src(app + '/**/*.html');
});

// Watch scss changes. Compiles to build/app/css
gulp.task('css', function() {
    gulp.src(src + '/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(app + '/css'));
});

// Main watch task has the our big three: js, html, scss
gulp.task('watch', function() {
  gulp.watch(src + '/js/**/*.js', ['js']);
  gulp.watch(src + '/scss/**/*.scss', ['css']);
  gulp.watch([app + '/**/*.html'], ['html']);
});

// Our local webserver task
gulp.task('webserver', function() {
  gulp.src(app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

// Main 'gulp' cmd does it all. Magics!
gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
