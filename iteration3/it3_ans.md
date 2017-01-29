#Iteration 3
##Overview of To-Do's:
1. Hook up NodeJS, ExpressJS, with your current application -> Create the API and host it yourself.
1. Memorize the array functions - .forEach, for loop, for of, etc
1. Need to definitely improve basics of HTML/CSS centering, positioning etc (NO BOOTSTRAP YO)
1. Watch Philip Roberts talk
1. Quiz on all array functionalities, Review on basic concepts (iteration3 or iteration4)
1. Node error-first callback pattern
1. Codewars problems

##Questions to Answers
* What is the tradeoff on adding a method on the prototype vs on the actual object itself
	* Methods that inherit via the prototype chain can be changed universally for all instances.
	```javascript
		function Class () {}
	Class.prototype.calc = function (a, b) {
	    return a + b;
	}

	// Create 2 instances:
	var ins1 = new Class(),
	    ins2 = new Class();

	// Test the calc method:
	console.log(ins1.calc(1,1), ins2.calc(1,1));
	// -> 2, 2

	// Change the prototype method
	Class.prototype.calc = function () {
	    var args = Array.prototype.slice.apply(arguments),
	        res = 0, c;

	    while (c = args.shift())
	        res += c;

	    return res; 
	}
	```

// Test the calc method:
console.log(ins1.calc(1,1,1), ins2.calc(1,1,1));
// -> 3, 3
	* Methods that are added to the actual object itself (i.e., inside the constructor), result in poorer performance, and consequently
	a more tedious process if you want to change the methods to each instance of the constructor. 
* What is temporal dependency?
	* Temporal Dependency is when the outcome is influenced by the time that passes between the event and the response.
* How does module.exports work inside Node?
	* Module.exports is a way to modularize and compartmentalize your code. Think like important a package, or a local file


##Homework Questions from Async Videos:
* How does `Async.Waterfall` work?
	* Runs an array of functions in series, each passing their results to the next in the array. However, if any of the functions pass an error to the callback,
	the next function is not executed and the main callback is immediately called with the error. ** think of R's piping feature **
* How about `Async.Parallel`?
	* Runs an array of functions all indepedent of each other, simultaneously. 
* Read on `process.nextTick()` in node and compare
	* process.nextTick() defers the execution of an action till the next pass around the event loop. 

###Questions Steven has for Stevie:
* How does process.nextTick() influence async.waterfall and async.parallel?