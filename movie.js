var request = require('request');
const myVar = require('./env');

function get(movieTitle) {
	request('https://www.googleapis.com/customsearch/v1?key='+myVar.apiKey+'&cx='+myVar.searchId+'&q=' + movieTitle, function(error, response, body) {
		console.log('error:', error);
		console.log('statusCode:', response && response.statusCode);
		console.log(console.log(JSON.parse(body).items[0].snippet));
	});
}

module.exports.get = get;
