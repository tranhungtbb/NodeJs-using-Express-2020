module.exports.postUserValidate= function(request,response,next){
	var errors =[];
	if(!request.body.name){
		errors.push("Name is null!")
	}
	if(!request.body.email){
		errors.push("Email is null!")
	}
	if(errors.length){
		response.render('user/create',{
			errors: errors,
			values: request.body
		});
		return;
	}
	next();
}
