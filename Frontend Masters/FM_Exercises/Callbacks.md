#Callback Exercises

1. Write a function, `funcCaller`, that takes a `func` (a function) and an `arg` (any data type). The function returns the `func` called with `arg`(as an argument).
	```javascript
	var funcCaller = function(func, arg)  {
		return func(arg);
	};
	```

1. Write a function, `firstVal`, that takes an array, `arr`, and a function, `func`, and calls `func` with the first index of the `arr`, the index # and the whole array.
	```javascript
	var firstVal = function(arr, func) {
		func(arr[0], 0, arr);
	};
	```

1. Change `firstVal` to work not only with arrays but also objects. Since objects are not ordered, you can use any key-value pair on the object.
	```javascript
	firstVal = function(list, func) {
		if(Array.isArray(list)) {
			return func(arr[0], 0, arr);
		} else {
			// for(var k in list) {
			// 	return func(list[k], k, list);
			// }
			var propArr = Object.keys(list);
			func(list[propArr[0]], propArr[0], list);
		}
	}
	```

1. [Extra Credit] Write a function, `once`, (see: http://underscorejs.org/#once) that takes a function and returns a version of that function which can only be called once. [Hint: you need a closure]
  You probably don't want to be able to double charge someone's credit card. Here is an example of how to use it:
  ```javascript
    var chargeCreditCard = function(num, price){
      //charges credit card for a certain price
    };
    var processPaymentOnce = once(chargeCreditCard);
    processPaymentOnce(123456789012, 200);
  ```
