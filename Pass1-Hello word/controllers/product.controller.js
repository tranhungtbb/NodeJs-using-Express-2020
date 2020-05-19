var db = require('../db');

module.exports.index = function(request, response){
	var page = request.query.page;
	if(!request.query.page){
		page=1;
	}
	var count =8;
	var start = (page-1)*count;
	var end = page*count;
	var sumCount = db.get('products').value();
	response.render('product',{
		products : db.get('products').slice(start,end).value(),
		sum : sumCount.length
	});
}