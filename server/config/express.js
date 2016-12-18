'use strict'

/**
 * Setup Express
 * Express is minimalist web framework for NodeJS that provides robust set of features for web and mobile applications
 */

 var express = require('express'),
	session = require('express-session'),
    mongoose = require('mongoose'),
	mongoStore = require('connect-mongo')(session),
    morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	errorHandler = require('errorhandler'),
    bodyParser = require('body-parser');
	//passport = require('passport'); 

module.exports = function(app, config) {
	var env = app.get('env');

	// Configure view engine: set it to path where you can hold your views. Set the view property 
	app.set('views', config.root + './client');
	app.set('view engine', 'html'); 
	// Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
	app.use(cookieParser()); 
	// Use a nodeJS body parsing middleware
	// Parse incoming request bodies in a middleware before your handlers
	// available under req.body property.
	app.use(bodyParser.urlencoded({ extended: true })); 
	// parse application/json
	app.use(bodyParser.json());  
	// Initaliaze passport
	// app.use(passport.initialize());
	// app.use(passport.session()); 

	// Persist sessions with mongoStore
	// We need to enable sessions for passport twitter because its an auth 1.0 strategy
	app.use(session({
		secret: config.secrets.session,
		resave: true,
		saveUninitialized: true, 
		store: new mongoStore({ mongooseConnection: mongoose.connection })
	})); 
 
	// Route to client directory using express static middleware.
	// Tells express anytime request coming that match to file inside client will serve the file 
	app.use(express.static(config.root + './dist'));
	app.set('frontEnd', 'dist');
	// log every request to the console
	app.use(morgan("dev"));
	app.use(errorHandler()); 
}