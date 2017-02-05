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
* _Lexical Scoping_ means compile time scope; compiler decides your scope. Can think of it as Nested Scope Bubbles
* Cheating Lexical Scope: `eval`:
    - The follow code snippet will show how to 'cheat' the default lexical decision of the compiler, by allowing the string `str` to be executed at runtime.
        + IF you use `strict mode` it will allow the `eval` code to have it
```javascript
var bar = "bar";

function foo(str) {
    eval(str); // cheating
    console.log(bar); // 42
}  

foo("var bar = 42;");
```


* `with` keyword is useful for eliminating repetitive object references:
* Problems with `with`:
    - Prone to creating global variables. Look at the variable `d` in the following code snippet to see how it gets sent to the global scope
```javascript
var obj = {
    a: 2,
    b: 3, 
    c: 4
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
    a = b + c;
    d = b - a;
    d = 3; //??
}

obj.d; // undefined
d; // 3 -- oops!
```

* Best Rule-of-Thumb: Don't use `eval` or `with` keywords.


