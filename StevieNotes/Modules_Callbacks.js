// ***************************
// Hoisting: compiler throws var into global scope unless you use 'let'
// ***************************
//Your code
---
  if (myMood === "happy") {
    var age = 17;
    console.log("yay") 
  } else {
    let ageLet = 15;
    console.log("nay");
  }
----
//compiler
var age;
var myMood;
if (myMood === "happy") {
  age = 17;
  console.log("yay") 
} else {
  var ageLet = 15;
  console.log("nay");
}



var obj = new Object();
var obj = {};

var arr = new Array(); //constructor
var arr = []; //literal

// ***************************
// Basic Module Pattern
// ***************************

var testModule = (function () {
  var privateCounter = 0;
  var publicAPI = {
      incrementCounter: function () {
      return counter++;
    },
 
    resetCounter: function () {
      console.log( "counter value prior to reset: " + counter );
      counter = 0;
    }
    
    getCounter: function(num){
        privateCounter = num;
    }
    setCounter: function(num){
        if (num < 0) return -1;
        else privateCounter = num;
    }
  }
 
  return publicAPI;
 
})(); //IIFE

//Call testModule here.
testModule.incrementCounter();

testModule.resetCounter();

testModule.counter = 3;
testModule.counter = 3;
var myCount = testModule.getCounter();


var myNamespace = (function () {
 
  var myPrivateVar, myPrivateMethod;
 
  // A private counter variable
  myPrivateVar = 0;
 
  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };
 
  return {
 
    // A public variable
    myPublicVar: "foo",
 
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
 
      // Increment our private counter
      myPrivateVar++;
 
      // Call our private method using bar
      myPrivateMethod( bar );
 
    }
  };
 
})();

// ***************************
//callbacks
// ***************************

//write a function that calls a callback after adding two numbers
var callbackAdd = function(a, b){
    var c = a + b;
    
}



var callbackAdd = function(a,b,cb){
    var total = a+b;
    return cb(total);
}

callback(1, 2, function(total){alert(total)});

var onclick = function(selector, data, cb){
    //grab the selector
    cb(data);
}

onclick("btn", function(){
    //send get request to sushi api
    alert("your button was pressed");
});

