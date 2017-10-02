var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg', 'You are not logged in');
		res.redirect('/users/login');
	}
}

function ensureLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		req.flash('error_msg', 'You are already logged in');
		res.redirect('/');
	} else {
		return next();	
	}
}

function ensureLoggedInReg(req, res, next){
	if(req.isAuthenticated()){
		req.flash('error_msg', 'You cannot register while logged in');
		res.redirect('/');
	} else {
		return next();
	}
}

module.exports = router;
