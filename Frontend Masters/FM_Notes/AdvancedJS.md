#Advanced Javascript
What you will need to know:
* Scopes, Closures
	- Nested Scope
	- Hoisiting
	- This
	- Closure


##Scopes
* For assignment operators (i.e., = ); __LHS__ is the _target_, __RHS__ is the _Source_ 

```javascript
var foo = "bar"; // Global Scope

function bar() { 
    var foo = "baz"; 

    function baz(foo) {
        foo = "bam";
        bam = "yay"
    }
    baz();
}

bar();
foo;    // checks inside local scope of bar() to see if foo exists
bam;    // checks inside 
baz();
```

###Function Declarations, Function Expressions & Block Scope
* A _function declaration_ is when the `function` keyword is the very first work on the line.
* A _function expression_ is when you have `var foo = function()...`; BEST PRACTICE

```javascript
var foo = function bar() {
    var foo = "baz";
    
    function baz(foo) {
        foo = bar;
        foo; // function...
    }
    baz();
};

foo();
bar();  // Error!
```

* A `named function expression` such as `var foo = function bar()...` makes it s.t. bar() only exists within the scope of that function, which is why bar() returns `Error!` 
* When you use an `annonymous function expression` such as `var foo = function() ...`, 3 major negative things happen:
    1. We have no way inside the function to refer it to ourself,i.e., refer to the function within itself
        - Recursion
        - unbinding click handler
    2. Doesn't play well in debugging, since your stack trace will just have a bunch of annoymous functions.
    3. It's self-documenting code

```javascript
var foo;

try {
    foo.length;
}
catch (err) {
    console.log(err); // TypeError
}

console.log(err); // Reference Error
```

* The reason why there is a `Reference Error` is because `err` is within _block scope_ of the try catch.

### Lexical Scope

* _Lexical Scoping_ means compile time scope; compiler decides your scope
* 
