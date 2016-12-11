/**
 * Gulp file extends to task/
 * comments will improve later
 */

var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var browserSync = require('browser-sync').create();

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'browserify'],
    rename: { 'event-stream': 'es' },
    config: path.join(__dirname, 'package.json'),
    lazy: false 
});
plugins.browserSync = browserSync;
plugins.path = path;


// Check if file is valid if yes then add to pool and loop each to inject plug-ins and gulp
var tasks = fs.readdirSync(path.join(__dirname, 'task')).filter(function(file) {
  return fs.statSync(path.join(__dirname, 'task', file)).isFile();
});

tasks.forEach(function (file) {
  require(path.join(__dirname, 'task', file))(gulp, plugins);
});  

// TODO: Add lint later, for test
gulp.task('build', ['jade', 'scss', 'copy', 'scripts']);
