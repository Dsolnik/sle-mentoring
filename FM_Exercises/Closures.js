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

var add = function(num) {
	var num1 = num;

	var addToNum1 = function(num2) {
		return num1 + num2;
	};

	return addToNum1;
};

var add5 = add(5);

add5(2);

