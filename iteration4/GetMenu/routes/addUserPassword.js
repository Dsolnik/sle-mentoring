// Route to add Username + Password

var express = require('express');
var app = express();
var router = express.Router();
var crypto = require("crypto");
var fs = require("fs");
var bodyParser = require("body-parser");


// Generate Hashed passwords
router.post('/addUserPassword', function(req, res) {


  var salt = "s1a2l3t4";
  var username = req.body.username;
  var password = req.body.password;

  // create salted hash with sha1 encryption
  var hash = crypto.createHash('sha1').update(salt + password).digest('hex');

  var hashedsalt = 
  {
    username: username,
    password: password,
    salt: salt,
    hash: hash 
  };

  // data = JSON.stringify(data);
  fs.appendFile('passwords.json', JSON.stringify(hashedsalt));

  console.log("Username: " + username + ", Password: " + password);
  res.end("yes");

});

module.exports = router;
