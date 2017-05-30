// Route to get itemID
var MongoClient = require('mongodb').MongoClient,
   assert = require('assert');

var url = "mongodb://localhost:27017/myproject";

var express = require('express'),
  // app = express(),
  fs = require("fs"),
  router = express.Router();

// get detail of items
router.get('/:id', function (req, res) {

   // First read existing items.
   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
       items = JSON.parse( data );
       var item = items["item" + req.params.id];
       // console.log( item );
       res.end( JSON.stringify(item));
   });
});

module.exports = router;
