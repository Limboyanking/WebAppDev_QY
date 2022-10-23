/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/22
 */

// the html is needing the path
var path = require("path");
let express = require('express');
let router = express.Router();
let usersController = require('../controllers/user');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  res.render('users', {
    path, 
    title: 'Users',
    userName: req.user ? req.user.username : ''
  });
});

router.get('/signup', usersController.renderSignup);
router.post('/signup', usersController.signup);

router.get('/login', usersController.renderLogin);
router.post('/login', usersController.login);

router.get('/signout', usersController.signout);

module.exports = router;
