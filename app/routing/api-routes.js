// ===============================================================================
// LOAD DATA
// ===============================================================================

var friendsData 	= require('../data/friends.js');
var path 			= require('path');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page.  
	// ---------------------------------------------------------------------------

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// ---------------------------------------------------------------------------

	app.post('/api/friends', function(req, res){ //ASK ABOUT THIS
		//MySQL

	});
}