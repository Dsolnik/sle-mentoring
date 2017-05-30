var express = require('express');
// var app = express();
var router = express.Router();
var fs = require("fs");
var bodyParser = require("body-parser");
crypto = require("crypto");

// need cookieParser middleware before we can do anything with cookies
app.use(express.cookieParser());

router.post('/failure', function(req, res){
  console.log("incorrect password");
  res.end("Failed to login");
});

router.post('/success', function(req, res){
    console.log('successfully logged in');
    res.end("sucessfully logged in");
});


// signin module
router.post('/signin', function(req, res) {

  var usernameSignin = req.body.usernameSignin;
  var passwordSignin = req.body.passwordSignin;
  // FOR STEVEN TO FIX: 
  //  - incorporate usernameSignin
  //  - passwordSignin 

   fs.readFile("./passwords.json", 'utf8', function (err, data) {
     if(err) {
        console.log('Error! ', err);
        return;
     }

     var userdata = JSON.parse(data);
     var salt = userdata.salt;
     var hashToMatch = crypto.createHash('sha1').update(salt + passwordSignin).digest('hex');


    // ?? How can I redirect to /success & /failure?  
    if( hashToMatch === userdata['hash']) {
      // console.log("win");
      // console.log('successfully logged in');
      // res.end("sucessfully logged in");
      res.redirect('/success');
    } else {
      // console.log("incorrect password");
      // res.end("Failed to login");
      res.redirect('/failure');
    }

   });

});


module.exports = router;


