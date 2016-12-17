var passport = require('passport');

module.exports = function (app) {

	app.get('./*', function(req, res) {
		res.render(req.params[0]);
	}); 

	//using get function to get any request will be in  this routes (js,css,index). 
	app.get('./*', function(req, res) {
		//render index view
		res.render('./index');
	}); 
}