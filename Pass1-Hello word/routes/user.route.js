var express = require('express');
var validate = require('../validate/user.validate');

var userController = require('../controllers/user.controller');

var router = express.Router();

router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.create);
router.post('/create',validate.postUserValidate, userController.createPost);
router.get('/:id', userController.get);


module.exports =router;