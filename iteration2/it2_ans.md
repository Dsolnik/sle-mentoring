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
A: A pure fucntion doesn't depend on and doesn't modify the states of variables 
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
A: 
	* B/c they don't have any side effect; i.e., it doesn't modify the state of the sytem outside of their scope.
	*  They also simplify and clarify the code: when you call a pure function you just need to focus on the return
value as you already know you didn't break anything elsewhere doing so.


Write code that tests and demonstrates the prototype chain.

Write code that shows that many things in Javascript is an object.

Write some IIFEs.

* What is the prototype chain?
	* Each object has an internal property called prototype, which links to another object. The prototype object has a prototype object of its own, and so on – this is referred to as the **prototype chain**.
* What is a pure function?
	* A pure fucntion doesn't depend on and doesn't modify the states of variables out of its scope
* In Javascript, people frequently say everything is an object. Explain what this means
	* 'Everything is an object', means that, in JavaScript, a function is an object. 
* Does Javascript have block scope? 
	*
* What is an IIFE?
---
#Part 3: Project Expansions
* What is MVC? How does it compare to the idea of separation of presentation and content?
Now read this:
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
Read on the following patterns:
1. Constructor
2. Singleton

Implement the constructor pattern for your project above.

If you have time read a little bit on the module pattern.

#Part 4: Review
Is javascript a functional or object-oriented language?  
What do first-class functions offer to javascript programmers?  

#Part 5: Supplement
What are the five categories of status codes?
* 1xx
* 2xx
* 3xx
* 4xx
* 5xx

Memorize the following status codes:
200
401
403
404
500


