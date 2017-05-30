// Route to add an item
var MongoClient = require('mongodb').MongoClient,
	 assert = require('assert');

// put url into config file
var url = "mongodb://localhost:27017/myproject";

var express = require('express'),
  // app = express(),
  // fs = require("fs"),
  router = express.Router();

// addItem
router.post('/addItem', function (req, res) {
	var itemName = req.body.itemName;
	var Cost = req.body.Cost;
	var data = {
	  "itemName" : itemName,
	  "Cost" : Cost
	  };

	// data = JSON.stringify(data);
	// fs.appendFile('items.json', JSON.stringify(data));

	MongoClient.connect(url, function(err, db) {
		assert.equal(null, err);
		var col = db.collection("items");
		col.insert(data);
		db.close();
	});



	console.log("Item Name = " + itemName + ", cost is " + Cost);
	res.end("item added");
});

module.exports = router;
