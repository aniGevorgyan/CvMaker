var config = {
	site: {
		port: 8080,
		// url: 'http://localhost:3000',
		title: 'CvMaker',
		language: 'en',
		html: {
			engine: 'ejs',
			minify: true
	 	}
 	},

  application: {
    controllers: {
      default: 'index',
      current: ''
    },
    langs: ['en', 'hy', 'ru'],
    languages: 'en|hy|ru'
  },
};
 
module.exports = config;