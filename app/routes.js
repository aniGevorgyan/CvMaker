var User = require('./models/user');
var languages = global.config.application.languages;
var multer	=	require('multer');

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
		successRedirect: 'en/profile',
		failureRedirect: 'en/login',
		failureFlash: true
	}));

	app.get('/:lang(' + languages + ')/signup', function(req, res){
		global.i18n.setLanguage(req.params.lang);
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

	app.get('/:lang(' + languages + ')/profile', isLoggedIn, function(req, res){
		global.i18n.setLanguage(req.params.lang);
		res.render('profile.ejs', {
			language: req.params.lang,
			user: req.user,
			originalUrl: 'profile'
		});
	});

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', {
			user: req.user,
			originalUrl: 'profile'
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
	});

	var storage	=	multer.diskStorage({
		destination: function (req, file, callback) {
			callback(null, './public/uploads');
		},
		filename: function (req, file, callback) {
			callback(null, file.originalname);
		}
	});

	var upload = multer({ storage : storage}).single('userPhoto');

	app.post('/api/photo',function(req,res){
		upload(req,res,function(err) {
			if(err) {
				return res.end("Error uploading file.");
			}
			// res.end(req.file.path);
			res.end(req.file.path);
			console.log(req.file.path);

		});
	});
};



function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()){
		return next();
	}

	res.redirect('en/login');
}