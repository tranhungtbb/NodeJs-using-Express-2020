var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(request, response){
	response.render('user',{
		users : db.get('users').value()
	});
}

module.exports.search = function(request, response){
	var key = request.query.q;
	var listUser = db.get('users').filter(function(i){
		return i.name.indexOf(key) !==-1;
	}).value();
	response.render('user',{
		users : listUser
	});
}

module.exports.create = function(request,response){
	response.render('user/create');
}

module.exports.createPost = function(request,response){
	request.body.id = shortid.generate();
	db.get('users').push(request.body).write();
	response.redirect('/user');
}

module.exports.get = function(request,response){
	var id =request.params.id;
	var user = db.get('users').find({id:id}).value();
	response.render('user/a',{
		user: user
	});
}