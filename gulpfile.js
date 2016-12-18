/**
 * Gulp file extends to task/
 * comments will improve later
 */

var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var browserify = require('browserify');
var browserSync = require('browser-sync').create();
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    rename: { 'event-stream': 'es' },
    config: path.join(__dirname, 'package.json'),
    lazy: false 
});
plugins.browserSync = browserSync;
plugins.path = path;
plugins.source = source;
plugins.buffer = buffer;
plugins.browserify = browserify;


// Check if file is valid if yes then add to pool and loop each to inject plug-ins and gulp
var tasks = fs.readdirSync(path.join(__dirname, 'task')).filter(function(file) {
  return fs.statSync(path.join(__dirname, 'task', file)).isFile();
});

tasks.forEach(function (file) {
  require(path.join(__dirname, 'task', file))(gulp, plugins);
});  

gulp.task('default', ['browser-sync'], function() {
    gulp.watch("./client/**/*.*", ["build"]);
    gulp.watch(".dist/**/*.*").on('change', browserSync.reload);
});