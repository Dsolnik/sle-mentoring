var express = require('express');
var app = express();
var router = express.Router();
var fs = require("fs");
var bodyParser = require("body-parser");
crypto = require("crypto");


router.post('/failure', function(req, res){
  console.log("incorrect password");
  res.end("Failed to login");
})

router.post('/success', function(req, res){
    console.log('successfully logged in');
    res.end("sucessfully logged in");
})



// signin module
router.post('/signin', function(req, res) {

  var usernameSignin = req.body.usernameSignin;
  var passwordSignin = req.body.passwordSignin;


   fs.readFile("./passwords.json", 'utf8', function (err, data) {
     // if(err) {
     //    console.log('Error! ', err);
     //    return;
     // }
     debugger;
     var userdata = JSON.parse(data);
     var salt = userdata.salt;
     var hashToMatch = crypto.createHash('sha1').update(salt + userdata['password']).digest('hex');
     console.log(hashToMatch, " is of type ", typeof(hashToMatch));
     // console.log(typeof(userdata['password']));
     // console.log(userdata.password);

    // ?? How can I redirect to /success & /failure?  
    if( hashToMatch == userdata['hash']) {
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


