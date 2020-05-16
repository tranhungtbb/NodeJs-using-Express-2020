var express = require('express');
var app = express();
var port = 2000;
app.get('/', function(request, response){
	response.send('Hello word');
})
app.listen(port,function(){
	console.log('Đây là cổng '+ port);
	});