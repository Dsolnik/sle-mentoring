#Functional-Light Programming
Overview:
    * Pure Functions
    * Composition
    * Immutability
    * Closure (IMPORTANT)
    * Recursion
    * List Transformation (map)
    * List Exclusion (filter)
    * List Composition (reduce)
    * List Iteration(forEach)


##Pure Functions (side effects)
In functional programming, we try to remove _as many_ side effects as possible, through means of pure functions.
* Easy solution is to wrap all your impure functions with one pure function -- the _pure function_ only needs to be at the highest level to achieve an elimination of side effects

```javascript
//Example of impure function -- it alters the state of variables outside of the function
function foo(x) {
     y = x * 2;
     z = x * 3;
}

var y, z;
foo(5);

y; // 10
z; // 15

foo(5);
y; // 50
z; // 75


// Example of pure function
function bar(x, y, z) {
    foo(x);
    return [y,z];

    function foo(x) {
         y = y * x;
         z = y * x;
    }
}

bar(5, 2, 3); // [10, 15]
bar(5, 10, 15) ; // [50, 75]
```


##Composition
Taking the output of one function, and making it part of the input of another function. 

* __Composition Utility__
```javascript
function sum(x,y) {
    return x + y;
}

function mult(x,y) {
    return x * y;
}

// example of compositonal functions to take in first two args of first argument
// and combines that with 3rd args
function compose2(fn1, fn2) {
    return function comp(){
        var args = [].slice.call(arguments);
        return fn2(
            fn1(args.shift(), args.shift()),
            args.shift()
        );
    }
}

var multAndSum = compose2(mult,sum);
multAndSum(3,4,5);
```

##Immutability
Immutabiltiy means non-ability to mutate.

* _Misconception #1_: `const` keyword gives you immutables values. __WRONG__, it gives you immutable assignment. Immutable values, are `boolean`, `primitives`, etc...

```javascript
var x = 2;
x++; //allowed

const y = 3; 
y++; // not allowed

const z = [4,5,6];
z = 10;  // not allowed
z[0] = 10; //

// .freeze makes all Properties + Values READ.ONLY; shallow immutability
const w = Object.freeze([4,5,6]);
w = 10; //not allowed
w[0] = 10; //not allowed
```


##Closures
Closure is when a function "remembers" the variables around it even when that function is executed somewhere. 

##Recursion
Recursion occurs when a function calls itself to perform an operation. A recursive function will continue to call itself until a base case is reached. 
* ES6's `...args` arrayifies the variable amount of arguments into a function; allows for easier recursion.

```javascript

//Example of non-recursive 
function sumIter() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

sumIter(3,4,5) //12

//Example of Recursive ES5
function sumRecur() {
    var args = [].slice.call(arguments);
    if(args.length <= 2) {
        return args[0] + args[1];
    }
    return ( 
        args[0] +
        sumRecur.apply(null,args.slice(1))
    );
}

sumRecur(3,4,5); //12

// BEST PRACTICE: ES6 Recursion ftw
function sumRecur(...args) {
    if(args.length <= 2) {
        return args[0] + args[1];
    }
    return (
        args[0] + 
        sumRecur(...args.slice(1))
    );
}

sumRecur(3,4,5); //12
```



##List Transformation (map)
`Array.map()` method can be used to create immutable list transformations

```javascript
function doubleIt(v) {
    return v * 2;
}
[1,2,3,4,5].map(doubleIt);
```

##List Exclusion (filter)
`Array.filter()` method is used to create list exclusions. 

```javascript
function isOdd(v) {return v % 2 == 1; }

[1,2,3,4,5].filter(isOdd); // [1,3,5]
```


## List Composition (reduce)
`.reduce()` iterates through a list performing a transformation on each value.

```javascript
function mult(x,y) {return x * y; }

[1,2,3,4,5].reduce(mult); // 120
```


## List Iteration (forEach)
`Array.forEach()` is used to loop through list items

```javascript
function logValue(v) { console.log(v); }

[1,2,3,4,5].forEach(logValue); // 1 2 3 4 5
```


