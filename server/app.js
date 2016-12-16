/**
 * Setup a server to talk from client to server (nodeJS)
 */
 
 var express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

// Initialize express, define port and require config file
var app = express(),
    port = process.env.port || 8000,
    config = require('./config');

// connect to DB
// mongoose.connect(config.localDatabase);

// set the static files location /dist/img will be /img for users
app.use(express.static(config.root + './dist'));

// log every request to the console
app.use(morgan('dev'));

// Use a nodeJS body parsing middleware
// Parse incoming request bodies in a middleware before your handlers
// available under req.body property.
app.use(bodyParser.urlencoded({'extended': 'true'}));
// parse application/json
app.use(bodyParser.json()); 
// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 

// override with the X-HTTP-Method-Override header in the request
// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
app.use(methodOverride('X-HTTP-Method-Override'));

// load the single view file (angular will handle the page changes on the front-end)
app.get('*', function (req, res) {
    res.sendFile(config.root + '/dist/app/index.html'); 
});

// listen (start app with node server.js)  
app.listen(port);
console.log("App listening on port " + port);

 