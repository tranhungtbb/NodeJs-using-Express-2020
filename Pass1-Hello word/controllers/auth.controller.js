var md5 = require('md5');
var db = require('../db');
var cookieParser = require('cookie-parser');

module.exports.login = function(request, response){
	response.render('auth/login');
}
module.exports.postLogin = function(request, response){
	var errors =[];
	var email = request.body.email;
	var password = request.body.password;
	var user = db.get('users').find({email:email}).value();
	console.log(user);
	if(!user){
		errors.push('Không tồn tại người dùng!');
		response.render('auth/login',{
			errors: errors,
			values: request.body
		});
		return;
	}

	var md5Pass = md5(password);
	console.log(md5Pass);
	if(md5Pass !== user.password){
		errors.push('Mật khẩu không đúng');
		response.render('auth/login',{
			errors: errors,
			values: request.body
		});
		return;
	}
	response.cookie('userId',user.id, { signed: true });
	response.redirect('/user');
}
