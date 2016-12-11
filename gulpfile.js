/**
 * Gulp file extends to task/
 * comments will improve later
 */

var gulp = require('gulp');
var path = require('path');
var fileStream = require('fs');
var browserSync = require('browser-sync').create();

var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    rename: { 'event-stream': 'es' },
    config: path.join(__dirname, 'package.json'),
    lazy: false 
});
plugins.browserSync = browserSync;
plugins.path = path;


