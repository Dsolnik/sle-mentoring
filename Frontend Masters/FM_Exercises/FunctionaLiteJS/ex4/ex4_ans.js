// code here! :)


// 1. Write two functions, each which return a different number value when called.
function foo() { return 5; }
function bar() { return 10; }

// 2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from (1) and print the result to the console.
function add(x, y) { return x + y; }

// 3. Write an `add2(..)` that takes two functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.
function add2(func1, func2) {
	return add( func1() + func2() );
}


// 4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when it's called.
function foo(x) {
	return function() {
		return x;
	}
}

add2( foo(5), foo(10) );

// 5. Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (map/reduce).
function addn(arrFunc) {
	funcCount = arrFunc.length;
	var sum = 0;
	for (var i = 0; i < funcCount; i++){
		sum = add2( foo(args[i]) + foo(sum) );
	}
	return sum;
}

// with map and reduce
function addn(arr) {
	return arr.slice(1)
		.map(foo)
		.reduce(function(prev, current){
			return function() {
				return add2(prev,current);
			};
		}, arr[0])()
}





// 6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.
var oddEven = [1, 2, 3, 4, 5];



// 7. Filter your array to only have even numbers in it.
function isEven(x) { return x % 2 == 0; }
function isOdd(x) { return !isEven(x); }
oddEven.filter(isEven)

// 8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).
oddEven.filter(isEven).map(foo)


// 9. Bonus: write tests for your functions.

