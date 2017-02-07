#Advanced Javascript
What you will need to know:
* Scopes, Closures
	- Nested Scope
	- Hoisiting
	- This
	- Closure


##Scope
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


###IIFE (Immediately Invoked Function Expression)
* IFFE pattern is used to hide scope. This allows developers to create objects in their own scope without polluting the outer scope.
```javascript
var foo = "foo";

(function() {
    
    var foo = "foo2";
    console.log(foo); // "foo2"
})();

console.log(foo); // "foo"
```


###Block Scope of ES6
* `var` declarations attach to the function scope
* `let` declarations attach to the block scope (in between any two pairs of curly braces {} )

###Problems with `let` Keyword
* `let` declarations doesn't hoist

### Hoisting
* __Hoisiting__ is the moving of declarations to the top of the scope during the compiling phase. 
* All LHS stuff happens at compile phase, and all RHS happens at execution phase

```javascript 
var a = b();
var c = d();
a; // ???
c; ///?

// this function expression gets hoisted
function b() {
    return c;
}

// this will not be hoisted 
var d = function() {
    return b();
};
```

* the _function expression_ __WILL NOT__ get hoisted, _but_ the _function declaration_ will.
* Good rule of thumb: the compiler always pulls out the declarations first.

##`this` keyword
* Every function, while it's executing, has a reference to its current execution context called "this". This reference is JavaScript's version of dynamic scope.
* `this` always references an object, not a primitive or boolean.
* In the following example, if we don't incude the `this` keyword, bar will not self-contain itself within each object, and will always return `"bar1"`

```javascript
function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo};
var o3 = { bar: "bar3", foo: foo};

foo();  // "bar1";
o2.foo();   // "bar2"
o3.foo();   // "bar3"
```

* Rules for `this` binding:
    1. __Default Binding Rule__: (t.f. is in reference `strict mode` to the function, not the entire script) If you're in `strict mode` default the `this` keyword to the undefined value. If you are NOT in `strict mode` default the `this` keyword to the global object. This explains why if you don't use `this` keyword on line 2, it will return `bar1` for all 3 invocations of `foo()`.
    2. __Implicit Binding Rule__: States that the object at the callsite, becomes the `this` keyword. This explains why `o2.foo()` and `o3.foo` return `bar2` and `bar3` respectively.
    3. __Explicit Binding Rule__: States that if you use a `.call` or `.apply` at the callsite, both of those functions will take in as their first argument, a `this` binding(aka `this` arg). 
    ```javascript
    function foo() {
        console.log(this.bar);
    }

    var bar = "bar1";
    var obj = { bar: "bar2" };

    foo();  // "bar1"
    foo.call(obj);  // "bar2"
    ```
    4. __Hard Binding Rule__: Methods can be passed around, and the `this` keyword will be a predictable object. In the following snippet, no matter how `foo()` gets called, `orig` will always be called with `obj` for the `this` binding.
    ```javascript
    function foo() {
        console.log(this.bar);
    }

    var obj = { bar: "bar1" };
    var obj2 = { bar: "bar2" };

    var orig = foo;
    foo = function(){ orig.call(obj); };

    foo();  // "bar"
    foo.call(obj2); // ???
    ```

* __Bind Utility (to achieve hard binding)__: takes in two parameters: a function, and an object to hard bind together.
```javascript
function bind(fn, o){
    return function() {
        fn.call(o);
    };
}

function foo() {
    console.log(this.bar);
}

var obj = { bar: "bar1" };
var obj2 = { bar: "bar2" };

var orig = foo;
foo = bind(foo, obj);

foo();  // "bar"
foo.call(obj2); // ???
```

* 1 step better than the one above, you can simply bind your function to `this` keyword, and only pass in the object instead of both the function and the object.
```javascript
if (!Function.prototype.bind2) {
    Function.prototype.bind2 = 
        function(o) {
            var fn = this; // the function!
            return function() {
                return fn.apply(o,arguments);
            };
        };
}

function foo(baz) {
    console.log(this.bar + " " + baz);
}

var obj = { bar: "bar" };
foo = foo.bind2(obj);

foo("baz"); // bar baz
```

* Hardbinding is so useful, Javascript already implemented it within the `Function.prototype` as a `.bind()` method as of ES5. https://frontendmasters.com/courses/advanced-javascript/#v=xbftkozugg&p=1.0000 


###The `new` keyword
* Whenever you use the `new` keyword in front of any function call, it magically turns that function call into a _constructor call_. 
```javascript
function foo() {
    this.baz = "baz";
    console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo();
```

* Whenever you use the `new` keyword, 4 things happen:
    1. A brand new object is created
    2. __*That object gets linked to a different object__
    3. That brand new object, gets bound as the `this` keyword for the purpose of that function call
    4. If that function does not otherwise return anything, it will implicitly insert a `return this`. Reference lines 3-4 from above.
* `new` keyword now gives a new way for `this binding` called hijacking

### Recap on `this binding` (MEMORIZE THIS)
1. __`new` Binding__: Was the function called with `new`?
2. __Explicit Binding__ Was the function called with `call` or `apply` specifying an explicit `this`?
3. __Implicit Binding__ Was the function called via a containing/owning object (context)?
4. __DEFAULT__: global object (except strict mode)

    
##Object-Oriented JS


###Prototypes Explained
* __What is a constructor?__A function that is called with the `new` keyword
* What is a `[[Prototype]]` and where does it come from? It is a linkage from one object to another object. It comes from `object.create` or we can get it indirectly, 
* __How does a `[[Prototype]]` affect an object?__ We can call a property/method on an object reference, and if it can't handle that property/method reference, it delegates up to the prototype chain to a different object.
* __How do we find out where an object's ``[[Prototype]]`` points to (3 ways)?__:
    1. __Dunder Proto__; `__proto__`
    2. __`Object.getPrototypeOf()`__
    3. __`.constructor.prototype`__

##Async Patterns
* _Inversion of Control_: in terms of callbacks, when have a `callback` function -- we are essentially passing off control of the program to a 3rd party API

###Solving Callback Problems
* _Run to Completion Invariant_:  As soon as a function starts executing it's first line of code, we _assume_ that it will finish all those lines of code before any other code runs. 

* __Generators (as of ES6)__ The _Run to Completion Invariant_ is true of all normal functions, but NOT Generators
    - _syntax_ `function * gen() {} `
    - When you call a generator function, it actually constructs an `iterator` to control the operation for the generator.
    - tl;dr a `generator` can _pause_ itself, and an `iterator` can _resume_ it.

```javascript
function* gen() {
    console.log("Hello");
    yield null;
    console.log("World!");
}

var it = gen();
it.next(); //prints "Hello"
it.next(); //prints "World"
```


```javascript
//Synchronous
var run = coroutine(function*(){
    var x = 1 + (yield null);
    var y = 1 + (yield null);
    yield (x + y);
});

run();
run(10);
console.log("Meaning of life: " + run(30).value);
```


```javascript
//Asynchrounous
function coroutine(f) {
    var o = f(); // instantiate the coroutine
    o.next(); // execute until the first yield
    return function(x) {
        o.next(x);
    }
}

function getData(d) {
    setTimeout(function(){ run(d); },1000 );
}

var run = coroutine(function*(){
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var answer = (yield getData(
        "Meaning of life: " + (x + y)
    ));
    console.log(answer);
    // Meaning of life: 42
});

run();
```


##Promises
* Promises are a way to subscribe to the completion of a task. For example, when a function is called, a promise will let you know when the function completes. 
*  __Promises are a great way to un-invert the _Inversion of Control_ and bring the control back to us.__ 

* How jQuery implements promises...
```javascript
var wait = jQuery.Deferred();
var p = wait.promise();

p.done(function(value){
    console.log(value);
});

setTimeout(function(){
    wait.resolve(Math.random());
},1000);

//Example 2
function waitForN(n) {
    var d = $.Deferred();
    setTimeout(d.resolve,n);
    return d.promise();
};

waitForN(1000)
.then(function(){
    console.log("Hello World");
    return waitForN(2000);
})
.then(function(){
    console.log("finally!")
});

//Example 3 - Async Patterns: Native Promise Tasks
function getData(d) {
    return new Promise(function(resolve,reject){
        setTimeout(function(){ resolve(d); }, 1000);
    });
}

var x;

getData(10)
.then(function(num1){
    x = 1 + num1;
    return getData(30);
})
.then(function(num2){
    var y = 1 + num2;
    return getData("Meaning of life: " + (x + y));
})
.then(function(answer){
    console.log(answer);
    //meaning of life: 42
});
```

* __Asynquenece__ are asynchrounous sequences, where _Sequence_ = automatically chained promises.
    - `.gate()` when two or more things happen at the same time, doesn't care when they finish or what order, it will wait until all of them are finished before moving on. _Waiting for everyone to get to the **gate**_

```javascript
// https://github.com/getify/asynquence
ASQ()
.then(function(done){
    setTimeout(done,1000);
})
.gate(
    function(done){
        setTimeout(done,1000);
    },
    function(){
        setTimeout(done,1000);
    }
)
.then(function(){
    console.log("2 seconds passed!");
});


// Example 2
function getData(d) {
    return ASQ(function(done){
        setTimeout(function(){ done(d); },1000);
    });
}

ASQ
.waterfall( //waterfall does things in order, and keeps track of the messages
    function(done){ getData(10).pipe(done); },
    function(done){ getData(30).pipe(done); },
)
.seq(function(num1,num2){
    var x = 1 + num1;
    var y = 1 + num2;
    return getData("Meaning of life: " + (x+y));
})
.val(function(answer){
    console.log(answer);
    // Meaning of life: 42
});

// Example 3: Generator + Sequence tasks
function getData(d) {
    return ASQ(function(done){
        setTimeout(function(){ done(d); },1000);
    });
}

ASQ()
.runner(function*(){
    var x = 1 + (yield getData(10));
    var y = 1 + (yield getData(30));
    var answer = yield (getData(
        "Meaning of life: " + (x + y)
    ));
    return answer;
})
.val(function(answer){
    console.log(answer);
    // Meaning of life: 42
});
```

###Async Patterns Recap
1. __What is _callback hell_? Why do callbacks suffer from _inversion of control_?__ 
Callback hell is inversion of control - it's handing the control to the rest of your program over to some utility and of the trust that that involves, and all the problem that it can introduce (i.e., lack of error-handling, re-tries etc.)
2. __How do you pause a generator? How do you resume it?__ 
You pause a generator with `yield()` and resume it with `next()` on it's iterator.
3. __What is a promise? How does it solve inversion of control issues?__
A promise is a continuation event, and solves the inversion of control issue bc when you give a continuation in, you receive a promise back; giving you back control over your program for step 2
4. __How do we combine generators and promises for flow control?__
It automatically listens for yielded out promises, and restarts the generator for when it completes.