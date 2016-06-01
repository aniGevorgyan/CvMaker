var User = require('./models/user');
var languages = global.config.application.languages;

module.exports = function(app, passport){
	app.get('/:lang(' + languages + ')', function(req, res) {
		global.i18n.setLanguage(req.params.lang);
		
		res.render('index.ejs',{
			language: req.params.lang,
			originalUrl: ''
		});
	});

	app.get('/',function (req, res){
		res.redirect('en/');
	});

	app.get('/:lang(' + languages + ')/login', function(req, res){
		global.i18n.setLanguage(req.params.lang);
		res.render('login.ejs', { 
			message: req.flash('loginMessage'),
			language: req.params.lang,
			originalUrl: 'login'
		});
	});
	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: 'en/login',
		failureFlash: true
	}));

	app.get('/:lang(' + languages + ')/signup', function(req, res){
		res.render('signup.ejs', {
			message: req.flash('signupMessage'),
			language: req.params.lang,
			originalUrl: 'signup'
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: 'en/',
		failureRedirect: 'en/signup',
		failureFlash: true
	}));

	app.get('/profile', isLoggedIn, function(req, res){
		global.i18n.setLanguage(req.params.lang);
		res.render('profile.ejs', {
			user: req.user,
			originalUrl: '/profile'
		});
	});

	app.get('/:lang(' + languages + ')/free', function(req, res){
		global.i18n.setLanguage(req.params.lang);
		res.render('free.ejs', {
			language: req.params.lang,
			originalUrl: 'free'
		});
	});

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { successRedirect: '/profile',
	                                      failureRedirect: '/' }));


	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('en/');
	})
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('en/login');
}