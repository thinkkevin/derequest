# Derequest

De-request could help you forward a request to a list of local files. It is a simple proxy for [Connect](http://github.com/senchalabs/connect) which works on top of [dispatch](http://github.com/caolan/dispatch).

Tip: Please use it before dispatch or connect.static.

### Sample Usage
Use it before dispatch with connect like:

	var path = require('path')
	,	connect = require('connect')
	,	dispatch = require('dispatch')
	,	derequest = require('derequest');

	var _derequestVars = {
		'/javascript/bundled_js.version.js':[
			path.join(__dirname, 'javascript', 'first.js'),
			path.join(__dirname, 'javascript', 'second.js'),
			path.join(__dirname, 'javascript', 'third.js')
		],
		'/styles/bundled_css.version.css':[
			path.join(__dirname, 'styles', 'first.css'),
			path.join(__dirname, 'styles', 'second.css'),
			path.join(__dirname, 'styles', 'third.css')
		]
	};

	var _dispatchVars = {
		'url_pattern_1':function(req, res, next){ ... },
		'url_pattern_2':function(req, res, next){ ... }
	};

	connect.createServer()
		.use(derequest(_derequestVars)))
		.use(dispatch(_dispatchVars))
		.listen(8080);


