var express = require('express');
var app = express();
var fs = require("fs");
var items = require('./items.json');
var bodyParser = require("body-parser");
var crypto = require("crypto")





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


// var crypto = require('crypto');
// var text = 'I love cupcakes'
//   , key = 'abcdeg'
//   , hash;

// hash = crypto.createHmac('sha1', key).update(text).digest('hex');
// console.log(hash);




// Generate Hashed passwords
app.post('/addUserPassword', function(req, res) {

  var username = req.body.username;
  var password = req.body.password;

  // To ensure hash uniqueness - create hash of current timestamp + random number
  var current_date = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  var hash = crypto.createHash('sha1').update(current_date + random).digest('hex');

  var hashedsalt = 
  {
    password: password,
    salt: "s1a2l3t4",
    hash: hash 
  }

  // data = JSON.stringify(data);
  fs.appendFile('passwords.json', JSON.stringify(data));

  console.log("Username: " + username + ", Password: " + password);
  res.end("yes");

})



// list all items
app.get('/listItems', function (req, res) {
  fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
     if(err) {
        console.log('Error! ', err);
        return;
     }
     console.log( data );
     res.end( data );
  });

});


// addItem
app.post('/addItem', function (req, res) {
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
app.get('/:id', function (req, res) {

   // First read existing items.
   fs.readFile( __dirname + "/" + "items.json", 'utf8', function (err, data) {
       items = JSON.parse( data );
       var item = items["item" + req.params.id]
       console.log( item );
       res.end( JSON.stringify(item));
   });
})

// Delete
app.delete('/deleteitem', function (req, res) {

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