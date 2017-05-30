
var express = require('express'),
  app = express(),
  fs = require("fs"),
  items = require('./items.json'),
  bodyParser = require("body-parser");

var MongoClient = require('mongodb').MongoClient, 
    assert = require('assert');



// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enables us to use static template files in our app
app.set('view engine', 'ejs');

// loads index.ejs
app.get('/', function (req, res) {
  res.render('index');
});

// GET /style.css etc
app.use(express.static(__dirname + '/public'));



// All route requirements
var addUserPassword = require('./routes/addUserPassword');
var listItems = require('./routes/listItems');
var signin = require('./routes/signin');
var addItem = require('./routes/addItem');
var getID = require('./routes/getID');
var deleteItem = require('./routes/deleteItem');

app.use('/', addUserPassword);
app.use('/', listItems);
app.use('/', signin);
app.use('/', addItem);
app.use('/', getID);
app.use('/', deleteItem);



// Connection URL 
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  var col = db.collection("testCollection");

  col.insert(
    [{a:1, b:1}
    , {a:2, b:2}, {a:3, b:3}
    , {a:4, b:4}
    ], 
    {w:1}, 
    function(err, result) {
      assert.equal(null, err);
      // List the database collections available
      db.listCollections().toArray(function(err, items) {
        assert.equal(null, err);
        db.close();
      });
    });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});