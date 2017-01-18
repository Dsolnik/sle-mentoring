// *************
// Closures
// *************

// Creating a closure

var closureAlert = function() {
	var x = 0;
	var alerter = function() {
		alert(++x);
	};
	return alerter;
};

var funcStorer = closureAlert();
var funcStorer2 = closureAlert();

funcStorer() // x = 1
funcStorer() // x = 2 ...

// the reason why x returns as 2 when you run funcStorer() twice, 
// is bc funcStorer is the closure 



// Closure Example
// Returning 1 Function

var add = function(num) {
	var num1 = num;

	var addToNum1 = function(num2) {
		return num1 + num2;
	};

	return addToNum1;
};

var add5 = add(5);

add5(2);


// Closure Objects
// Returning an Object that has 2 functions

function counter() {
	var n = 0;
	return {
		count: function() { return ++n; },
		reset: function() { n = 0; }
	};
};

var myCounter = counter();

myCounter.count() // 1
myCounter.count() // 2
myCounter.count() // 3


// Closure Recipe

function checkScope() {	// create parent function
	var innerVar = "local scope"; // define some variables in the parent's local scope

	function innerFunc() { // define a function inside the parent function; i.e., the child
		return innerVar;
	};
	return innerFunc; // return that function from inside the parent function
};


var test = checkScope(); // Run Parent function and save to variable; this variable will hod whatever that function RETURNS
test(); // Runs the inner function and console logs "local scope"


// Closure Exercises

var nonsense = function(string) {
	var blab = function() {
		alert(string);
	}
	setTimeout(blab, 2000);
};

var nonsense = function(string) {
	var blab = function() {
		alert(string);
	}
	return blab;
};


var lastNameTrier = function(firstName){
   //does stuff

    var innerFunction = function(lastName) { 
        //does stuff
        console.log(firstName, lastName)
    };
    //maybe returns something here

    return innerFunction;
};
var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
firstNameFarmer('Brown'); //logs 'Farmer Brown' 

// ----

var storyWriter = function() {
	story = "";
	return {
		addWords: function(string) {
			story = story + " " + string;
			console.log(story);
		},
		erase: function() {
			story = "";
			console.log(story);
		}
	};
};

let Toaster = (function(){
    //some private methods and properties
    var privateUnplugToaster = function(){
    	console.log("unplugging toaster");
    }

    var temp = 98;

    return {
      //some public methods and properties, etc
      	getTemp: function(){
      		return temp;
      	},
     	setTemp: function(newTemp){
     		temp = newTemp;
     		return temp;
     	},
     	cancelToasting: function(){
     		console.log("cancelling toasting");
     	}
    };
})();



// Module Pattern

var Module = function(){

  var privateProperty = 'foo';

  function privateMethod(args){
    // do something
  };

  return {
    publicProperty: "",
    publicMethod: function(args){
      // do something
    },
    privilegedMethod: function(args){ 
      privateMethod(args); 
    }
  };
};


var Car = function() {
	var gasolinelevel = 10;

	function useGas(amt) {
		if(gasolinelevel - amt < 0) {
			console.log("out of gas :[");	
		} else {
			gasolinelevel -= amt;
		}
	};

	return {
		radioStation: "104.5",
		changeStation: function(station) {
			this.radioStation = station;
		},
		go: function(speed) {
			useGas(speed); 
		}
	};
};

// Module Super Mario Bros


// Requirements:
// Health Bar
// Jump
// Position


var marioBros = (function() {




})();




