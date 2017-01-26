var express = require('express');
var app = express();
var fs = require("fs");
var items = require('./items.json');
var bodyParser = require("body-parser");


// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// enables us to use static template files in our app
app.set('view engine', 'ejs');

// loads index.ejs
app.get('/', function (err, req, res) {
  if(err) {
    conosle.log('Error!', err);
    return;
  }
  res.render('index');
});

// GET /style.css etc
app.use(express.static(__dirname + '/public'));


// API Stuff?..

// list all itemsls
app.get('/listItems', function (err, req, res) {
  if(err) {
    conosle.log('Error!', err);
    return;
  }
  fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
     console.log( data );
     res.end( data );
  });

});


app.post('/addItem', function (err, req, res) {
  if(err) {
    conosle.log('Error!', err);
    return;
  }
	var itemName = req.body.itemName;
	var Cost = req.body.Cost;
	var data = {
	  "itemName" : itemName,
	  "Cost" : Cost
	  }

	// data = JSON.stringify(data);
	fs.appendFile('items.json', JSON.stringify(data));

	console.log("Item Name = " + itemName + ", cost is " + Cost);
	res.end("yes");

})

// get detail of items
app.get('/:id', function (err, req, res) {
  if(err) {
    conosle.log('Error!', err);
    return;
  }
  // First read existing items.
  fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
     items = JSON.parse( data );
     var item = items["item" + req.params.id]
     console.log( item );
     res.end( JSON.stringify(item));
  });
})

// Delete
app.delete('/deleteitem', function (err, req, res) {
  if(err) {
    conosle.log('Error!', err);
    return;
  }

  // First read existing items.
  fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     delete data["item" + 2];
     
     console.log( data );
     res.end( JSON.stringify(data));
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});