/**
 * Gulp Serve
 * Test
 *  - Lint Check
 *  - Approve
 * Build
 *  - Compile SCSS, Main Scripts, Vendor Scripts then Inject
 */
 
 module.exports = function(gulp, plugins) {

    // monitors any changes that restart your (express) server
    gulp.task('run:nodemon', function(cb) {
        var started = false;

        return nodemon({
            script: './server/app.js'
        }).on('start', function() {
            // to avoid nodemon to restart multiple times
            if(!started) {
                cb();
                started = true;
            } 
        })
    });
    
    gulp.task('scripts:main', function() {
        return gulp.src(['./client/assets/js/*.js'])
            .pipe(plugins.uglify())
            .pipe(plugins.concat('main.min.js'))
            .pipe(gulp.dest('./dist/assets/js'))
    }); 

    // Find dependent files from app.js and compile
    gulp.task('scripts:angular-components', function() {
        // Grabs the app.js file
        return plugins.browserify('./client/app/app.js')
            // bundles it and creates a file called main.js
            .bundle()
            .pipe(plugins.source('main-angular-components.js'))
            .pipe(gulp.dest('./dist/assets/js'));
    }); 

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
        return gulp.src(['./client/{app,components}/**/*.jade', './client/*.jade'])
            .pipe(plugins.jade({ pretty: true })) 
            .pipe(gulp.dest('./dist'))
            .pipe(plugins.browserSync.stream());
    });    

    // Test all javascript files
    gulp.task('test:lint', function() {
      return gulp.src('./client/{app,components}/**/*.js')
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'));
    }); 

    // TODO: Add lint later, for test
    gulp.task('build', ['test:lint', 'view:jade', 'styles:scss', 'styles:vendors', 'scripts:angular-components', 'scripts:main']);
 
    gulp.task('browser-sync', ['build', 'run:nodemon'], function() { 
        plugins.browserSync.init(null, {
            proxy: "http://localhost:5000",
            files: ["./dist/**/*.*"],
            browser: "google chrome",
            baseDir: "./dist",
            // The key is the url to match
            // The value is which folder to serve (relative to your current working directory)
            routes: {
                "./bower_components": "bower_components",
                "./node_modules": "node_modules"
            }
            port: 8000,
        });   
    });
 }
