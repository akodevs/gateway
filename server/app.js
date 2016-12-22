/**
 * Setup a server to talk from client to server (nodeJS)
 */
  
// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
global.appGlobals = {};

var express = require('express'),
	config = require('./config/env/'), 
    mongoose = require('mongoose'),
    morgan = require('morgan');
  
mongoose.connect(config.mongo.uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('db just opened..')
}); 


// Populate db with Sample Data 
// if (config.seedDB) { require('./config/seed')(); }

// Setup server
var app = express(),
 	server = require('http').createServer(app);

config.app = app; 
// intialize express server
require('./config/express')(app, config); 
// initialize routs
require('./config/routes')(app);  

// Start server
server.listen(config.port, config.ip, function() { 
	console.log('Express server listening to port %s in %s mode ',config.port, app.get('env'));
});
 
// load the single view file (angular will handle the page changes on the front-end)
app.get('*', function (req, res) {
    res.sendFile(config.root + '/dist/app/index.html'); 
}); 

exports = module.exports = app;
 