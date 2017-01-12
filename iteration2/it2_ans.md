This iteration, as you go through WRITE DOWN as much as you can with code samples.

An easy way to write quick code snippets is to use something like www.codepen.io or just execute right in the browser console.

Save these snippets to later show me what you learned and demonstrated through the code.

For the project, make sure you understand what EVERY line of your code does. Have a motive behind writing each line and understand how it works. 

#Part 0 (Debugging)
https://www.codeschool.com/courses/discover-devtools

You do not have to complete all sections or go through this that rigorously. It's important though that you know what tools are available. It'll help you get a better grasp on the underlying mechanisms of Javascript and get through bugs in your project code. 

#Part 1 (Project-oriented)
##Questions to answer for project prior to completion
1. How are Javascript files loaded? 
2. What is the DOM? 
3. What is AJAX? Explain in as much detail as possible.

##Project Summary (Part 1 should be completed)
Create a web page with a button that says "Get Menu" on it. Upon clicking it,
it should load all the data at a given endpoint by sending an HTTP Request and display it below the button dynamically (that is without refreshing the page).

The endpoint: http://demo3354820.mockable.io/menu/sushi

###Requirements
The project should be submitted within this repository under the directory iteration1
####Folder structure
/index.html
/script.js
/style.css

####Layout
Button should be colored.
Button should be centered into the middle of the page.

####Functionality
The button should send a certain type of request to this API endpoint.
You are limited to the following tools:
* Vanilla Javascript (no transpilers, NO JQUERY)
* CSS
* HTML

No other tools are allowed.


---
#Part 2: (Fundamentals of Javascript) (spend a decent chunk of time on this this week at least 1 hour just reading and writing code that tests concepts)
Watch:
Frontendmasters: From fundamentals to functional js finish functions, nesting, scope.

Read: 
http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

##Functions and JS Fundamentals 
For this section, I want you to write code that tests out and demonstrates the concepts below
Write a pure function. Write a non-pure function. Then explain why this is important in programming.

* What is a Pure function?  
**A**: A pure fucntion doesn't depend on and doesn't modify the states of variables 
out of its scope

```
// *** IMPURE FUNCTION example *** 
var values = { a: 1 };

function impureFunction ( items ) {
  var b = 1;

  items.a = items.a * b + 2;

  return items.a;
}

// Now `values.a` is 3, the impure function modifies it.
var c = impureFunction( values );


// *** PURE FUNCTION example *** 

var values = { a: 1 };

function pureFunction ( a ) {
  var b = 1;

  a = a * b + 2;

  return a;
}

// `values.a` has not been modified, it's still 1
var c = pureFunction( values.a );
```

* Why are Pure functions so important?  
**A**: 
	* B/c they don't have any side effect; i.e., it doesn't modify the state of the sytem outside of their scope.
	* They also simplify and clarify the code: when you call a pure function you just need to focus on the return
value as you already know you didn't break anything elsewhere doing so.


Write code that tests and demonstrates the prototype chain.  
```
function Animal() {}

function Animal(name) {
	// Instance properties can be set on each instance of the class
	this.name = name;
}

// Prototype properties are shared across all instances of the class
// However, they can still be overwritten on a per-instance basis
// with the 'this' keyword.
Animal.prototype.speak = function() {
	console.log("My name is " + this.name);
};

var animal = new Animal('Monty');
animal.speak(); // My name is Monty


// exetending the Animal class to create a Cat class...

function Cat(name) {
	// We want to set the 'this' value inside the called function's scope, instead of
	// this.name being set inside the Animal constructor
	Animal.call(this, name);
}

// Cat.protype will inherit all of Animal's properties
Cat.prototype = new Animal();

var cat = new Cat('Monty');
cat.speak();
```

Write code that shows that many things in Javascript is an object.
```
var myArray = [];
myArray instanceof Object // returns true

var myObject = {};
myObject instanceof Object // returns true

function myFunction() {}
myFunction instanceof Object // returns true
```

Write some IIFEs.

* What is the prototype chain?
	* Each object has an internal property called prototype, which links to another object. The prototype object has a prototype object of its own, and so on – this is referred to as the **prototype chain**. This behaviour allows us to implement inheiritance. 
* What is a pure function?
	* A pure fucntion doesn't depend on and doesn't modify the states of variables out of its scope
* In Javascript, people frequently say everything is an object. Explain what this means
	* 'Everything is an object', means that, in JavaScript, a function is an object. 
* Does Javascript have block scope? 
	* **JavaScript does NOT have block scope**. Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself.
* What is an IIFE?
	* Immediately Invoked Function Expression; a JavaScript function that runs as soon as it is defined. This is used primarly to avoid polluting the global namespace, because all the variables used inside the IIFE (as with any other _normal_ function) are not visible outside its scope.
	
---
#Part 3: Project Expansions
* What is MVC? How does it compare to the idea of separation of presentation and content?
	* MVC stands for Model, View, Controller. An MVC design is essentially an implmentation of seperation of presentation and content (i.e., seperation of concerns), where:
		- Model: represents a listener pattern - when the data changes, it triggers some event
		- View: Represents the UI. It listens to the model events and changes when the model changes. It also implements a listener pattern. When the user does something, like clicking a box, it triggers an event.
		- Controller: Listens to the UI events from the View and calls model methods accordingly.
		
Now read this:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript  
Read on the following patterns:  
1. Constructor  
2. Singleton
	- The Singleton pattern exists because it restricts instantiation of a class to a single object. That means, in the event of an instance already existing, it simply returns a reference to that object.
	
```
var Singleton = (function () {
    var instance;
 
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() {
 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();
    
    // Since instance1 already exists, instance 2 is just a ref. so it will return true
    alert("Same instance? " + (instance1 === instance2));  
}
```

Implement the constructor pattern for your project above.

If you have time read a little bit on the module pattern.

#Part 4: Review
Is javascript a functional or object-oriented language?  
What do first-class functions offer to javascript programmers?  

#Part 5: Supplement
What are the five categories of status codes?
* __1xx__: Informational
* __2xx__: Success
* __3xx__: Redirection
* __4xx__: Client Error
* __5xx__: Server Error

Memorize the following status codes:
__200__: **OK**; standard response for successful HTTP requests
__401__: **Unauthorized**; specifically for when authentication is required and has failed or has not yet been provided
__403__: **Forbidden**; was a valid request, but the server is refusing to respond to it
__404__: **Not Found**; the requested resouce could not be found, but may be available in the future
__500__: **Internal Server Error**; A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.


