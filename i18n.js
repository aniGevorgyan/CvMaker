'use strict';

var i18n = require('i18n');


module.exports = function(req, res, next) {
    // var lang = req.params.lang || 'en';
    // if(lang == 'ru'){
    //
    // }

    i18n.configure({
        locales:['ru','en'],
        directory: __dirname + '/locales',
        defaultLocale: 'ru',
        extensions:'.json',

        // sets a custom cookie name to parse locale settings from  - defaults to NULL
        cookie: 'lang'
    });


    i18n.init(req, res);
    res.locals.__ = res.__;

    var current_locale = i18n.getLocale();

    return next();
};