var express = require('express');
var app = express();
require('./system/prototype');

global.config = require('./config');
global.i18n = require('./system/helpers/i18n');

var port = process.env.PORT || global.config.site.port;
var path = require('path');


var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

global.i18n.setLanguage();

app.engine('ejs', require('ejs-locals'));
app.set('view engine', global.config.site.html.engine);

require('./app/routes.js')(app, passport);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);
console.log('Server running on port: ' + port);




