/**
 * Gulp Serve
 */
 
 module.exports = function(gulp, plugins) {

    // Copy
    gulp.task('copy', ['browserify','scss'], function(){
        gulp.src(['./client/**/*.html', './client/**/*.css'])
    });

    // Compile SCSS to CSS
    gulp.task('scss', function() {
        gulp.src('./client/assets/scss/main.scss')
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(gulp.dest('./client/assets/css'))
    });

 }
