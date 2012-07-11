var dispatch = require('dispatch')
,	fs = require('fs');

var exports = module.exports = function(urls){
	return dispatch(exports.tranx(urls));
};

//Convert urls to a dispatch style urls with value as a function
exports.tranx = function(urls){
	var ret_urls = {};

	function _(req, res, next){
		var lists = this.to;
		var contents = '';
		lists.forEach(function(v){
			var s = fs.readFileSync(v, 'utf-8');
			contents += s;
		});
		res.writeHead(200, {
		  'Content-Length': contents.length,
		  'Content-Type': 'text/plain' });
		res.end(contents, 'utf-8');
	};

	Object.keys(urls).forEach(function(k){
		var ctx = {url: k, to: urls[k]};
		ret_urls[k] = function(req, res, next){
			console.log('call this .....');
			_.call(ctx, req, res, next);
		}
	});
	console.log(ret_urls);
	return ret_urls;
}
