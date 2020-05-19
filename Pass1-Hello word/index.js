var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var routeUser = require('./routes/user.route');
var routeAuth = require('./routes/auth.route');
var authMid = require('./middleware/auth.middleware');
var routeProduct = require('./routes/product.route');



var app = express();
var port = 2000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser('wqerqwefadsf'));
app.set('view engine' , 'pug');
app.set('views', './views');

app.get('/', function(request, response){
	response.render('index',{name : 'dinh hung'});
});
app.use('/user',authMid.authMiddleware,routeUser);
app.use('/product',authMid.authMiddleware,routeProduct);
app.use('/auth',routeAuth);
app.listen(port);