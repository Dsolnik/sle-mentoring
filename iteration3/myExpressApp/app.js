var express = require('express');
var app = express();
var fs = require("fs");
var users = require('./users.json');

// enables us to use static template files in our app
app.set('view engine', 'ejs');

// loads index.ejs
app.get('/', function (req, res) {
  res.render('index');
});

// GET /style.css etc
app.use(express.static(__dirname + '/public'));


// API Stuff?..

// list all users
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});


// adding a user
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

// users['user4'] = user;
// console.log(users)


app.post('/addUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// get detail of users
app.get('/:id', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
   });
})

// Delete
app.delete('/deleteUser', function (req, res) {

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});