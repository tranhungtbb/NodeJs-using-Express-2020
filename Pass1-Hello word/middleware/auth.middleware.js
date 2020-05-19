var db = require('../db');

module.exports.authMiddleware = function(request, response,next){
	var userId = request.signedCookies.userId;
	if(!userId){
		response.redirect('/auth/login');
	}
	var user = db.get('users').find({id:userId}).value();
	if(!user){
		response.redirect('/auth/login');
	}
	response.locals.user = user;
	next();
}
