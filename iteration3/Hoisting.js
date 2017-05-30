// Hoisting Definition


// 1. returns 'my value', duh
var x = 'my value';

(function() {
	alert(x); 
})();


// 2. This is tricky because the first alert actually returns 'undefined', and the next alert
// returns 'a new' value'. This is because when inside the IIFE, it is declared with a 
// 'var x;', but not yet initialized.
var x = 'my value';

// returns 'my value', duh
(function() {
	alert(x)

	var x = 'a new value';	

	alert(x); 

})();



//3. This is also applicable to functions

(function() {
	newFunction();

	function newFunction() {
		alert('hello world');
	}
})();


// 3b. except this one hoists just the name of newFunction to top, but returns 'undefined'

(function() {
	newFunction();

	var newFunction = function() {
		alert('hello world');
	}
})();
