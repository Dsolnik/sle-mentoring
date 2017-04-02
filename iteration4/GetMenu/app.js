
var express = require('express'),
  app = express(),
  fs = require("fs"),
  items = require('./items.json'),
  bodyParser = require("body-parser");
  // crypto = require("crypto");
 

// enables us to use static template files in our app
app.set('view engine', 'ejs');

// loads index.ejs
app.get('/', function (req, res) {
  res.render('index');
});

// GET /style.css etc
app.use(express.static(__dirname + '/public'));


// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route to addUserPassword
var addUserPassword = require('./routes/addUserPassword');
app.use('/', addUserPassword);

// route to list all items
var listItems = require('./routes/listItems');
app.use('/', listItems);

// signin authentication module
var signin = require('./routes/signin');
app.use('/', signin);





// // list all items
// app.get('/listItems', function (req, res) {
//   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
//      if(err) {
//         console.log('Error! ', err);
//         return;
//      }
//      console.log( data );
//      res.end( data );
//   });

// });


// addItem
app.post('/addItem', function (req, res) {
	var itemName = req.body.itemName;
	var Cost = req.body.Cost;
	var data = {
	  "itemName" : itemName,
	  "Cost" : Cost
	  };

	// data = JSON.stringify(data);
	fs.appendFile('items.json', JSON.stringify(data));

	console.log("Item Name = " + itemName + ", cost is " + Cost);
	res.end("yes");
});


// get detail of items
app.get('/:id', function (req, res) {

   // First read existing items.
   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
       items = JSON.parse( data );
       var item = items["item" + req.params.id];
       // console.log( item );
       res.end( JSON.stringify(item));
   });
});

// Delete
app.delete('/deleteitem', function (req, res) {

   // First read existing items.
   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["item" + 2];
       
       res.end( JSON.stringify(data));
   });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});