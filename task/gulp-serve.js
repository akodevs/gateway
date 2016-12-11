/**
 * Gulp Serve
 * Test
 *  - Lint Check
 *  - Approve
 * Build
 *  - Compile SCSS, Main Scripts, Vendor Scripts then Inject
 */
 
 module.exports = function(gulp, plugins) {

 
    gulp.task('scripts:main', function() {
        return gulp.src(['./client/assets/js/*.js']])
            .pipe(plugins.uglify())
            .pipe(concat('main.min.js'))
            .pipe(gulp.dest('./dist/assets/js'))
    }); 

    gulp.task('scripts:angular-components', function() {
    // Grabs the app.js file
    return browserify('./client/app/app.js')
        // bundles it and creates a file called main.js
        .bundle()
        .pipe(plugins.source('main-angular-components.js'))
        .pipe(gulp.dest('./dist/assets/js'));
    })

    // Minify Vendor CSS 
    gulp.task('styles:vendors', function() {
        // get all the main bower files and minify them
        return gulp.src(plugins.mainBowerFiles('**/*.css'))
                .pipe(plugins.rename('vendors.min.css'))
                .pipe(plugins.minifyCss())
                .pipe(gulp.dest('./dist/assets/css'));
    }); 

    // Compile SCSS to CSS
    gulp.task('styles:scss', function() {
        gulp.src('./client/assets/scss/main.scss')
            .pipe(plugins.sass().on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer({ cascade: true }))
            .pipe(plugins.minifyCss())
            .pipe(gulp.dest('./dist/assets/css'))
            .pipe(plugins.browserSync.stream());
    });

    // Compile jade files to html and put it in build and dist folder
    gulp.task('view:jade', function() {
        return gulp.src(['./client/{app,components}/**/*.jade'])
            .pipe(plugins.jade({ pretty: true })) 
            .pipe(gulp.dest('./dist'))
            .pipe(plugins.browserSync.stream());
    });    

    gulp.task('test:lint', function() {
      return gulp.src('./client/{app,components}/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    }); 

    // TODO: Add lint later, for test
    gulp.task('build', ['test:lint', 'view:jade', 'styles:scss', 'styles:vendors', 'scripts:angular-components'], 'scripts:main']);

    gulp.task('browser-sync', ['build'], function() {
        browserSync.init({
            server: {
                baseDir: "./dist",
                // The key is the url to match
                // The value is which folder to serve (relative to your current working directory)
                routes: {
                    "./bower_components": "bower_components",
                    "./node_modules": "node_modules"
                }
            },
            browser:"google chrome"
        });
    })  
 }
