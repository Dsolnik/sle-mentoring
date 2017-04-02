// Route to list all Items


var express = require('express'),
  // app = express(),
  fs = require("fs"),
  router = express.Router();

// list all items
router.get('/listItems', function (req, res) {
  fs.readFile("./items.json", 'utf8', function (err, data) {
  	// fs.readFile("./" + "items.json", 'utf8', function (err, data) {
     if(err) {
        console.log('Error! ', err);
        return;
     }
     console.log( data );
     res.end( data );
  });

});


module.exports = router;