// Old code
function foo(x) {
	y++;
	z = x * y;
}

var y = 5, z;

foo(20);
z;		// 120

foo(25);
z;		// 175




// new code
function bar(x, y) {
	var z; 
	foo(x);
	return [y, z];

	// var y + z states are altered and hoisted to the top
	function foo(x) {
		y++;
		z = x * y;
	}
}

bar(2,3);// [4, 6]
bar(20,5);  // [6, 120]