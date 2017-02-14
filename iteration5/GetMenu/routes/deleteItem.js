// Last updated: 2/11/2017
// -- db.getCollection isn't found; maybe depracated?


// Route to get itemID
// Route to add an item
var MongoClient = require('mongodb').MongoClient,
	 assert = require('assert');

// put url into config file
var url = "mongodb://localhost:27017/myproject";

var express = require('express'),
  fs = require("fs"),
  router = express.Router();

// get detail of items
router.delete('/deleteItem', function (req, res) {


	MongoClient.connect(url, function(err, db){
		assert.equal(null, err);
		var col = db.getCollection('items');
		col.remove({ });
		db.close();
	});

	console.log("Deleted all items :)");
   // // First read existing items.
   // fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
   //     data = JSON.parse( data );
   //     delete data["item" + 2];
       
   //     res.end( JSON.stringify(data));
   // });
});

module.exports = router;
