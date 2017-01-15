#Part 1 (Project-oriented)
##Questions to Answer for the Project BEFORE completion (20 words or less)
1. What types of HTTP Requests are there? What are the two most common?
There are various types of HTTP Requests - The important two are POST and GET
Why did you end up using GET instead of POST?
The crucial point is that 

idempotent requests

Use GET if the interaction is more like a question (i.e., it is a safe operation such as a query, read operation, or lookup).

Use POST if:
    The interaction is more like an order, or
    The interaction changes the state of the resource in a way that the user would perceive (e.g., a subscription to a service), or
    The user be held accountable for the results of the interaction

2. How do I link my HTML file to my CSS file, my Javascript file to my HTML webpage?

3. What is an API?
What were some of the APIs used?
The sushi menu is one API.
JQuery uses the XHR API.
The Chrome browser uses the XHR API.
Why is this an application programming interface? It's easier defined as kind of a place to programmatically retrieve data usually by giving different URLs.

4. What is a SPA (Single page application)?
It does this by basically refraining from refreshing the page. This is where AJAX is so important.

5. What is a callback in Javascript? Why are they so fundamental to JS?

6. What is REST?

7. What is JSON?
Serialize data.
//JSON.stringify();
//JSON.parse();

8. What is the separation of presentation and content? How does it apply to HTML/CSS/JS?

##Project Summary
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

#Part 2: (Fundamentals of Javascript)
Watch:
Frontendmasters: From fundamentals to functional js OBJECTS AND ARRAYS section only - credentials given via text -

##Arrays (Memorize Each)
**Motive:** Javascript is a small enough language to easily familiarize and gain proficiency within a couple days. Doing so will speed your dev process up incredibly. 
1. Array.prototype.push() 
2. Array.prototype.pop() 
3. Array.prototype.slice() 
4. Array.prototype.shift() 
5. Array.prototype.unshift() 
6. Array.prototype.length; 

var x = [3,4,5,6];
var obj = {
    "hello" : "There" 
  }
x.push(obj);
x[0], x[1], 

##The language
 * Some call Javascript a functional language, others call it an imperative language, others an object-oriented language. What do these terms mean and which is it?  

* The phrase "functions are first class citizens" is thrown around frequently in JS land. What does this mean?
---

#Part 3: Supplemental
1. What is ES6? ECMAScript? 
2. What does Node.js do?
3. What is the technology that Node.js uses that Google Chrome does as well? 
4. What is Babel? 

#Expansions (for stevie to note)
* Create the endpoint yourself
* Explore MVC
* Separation of presentation and content is challenged by what?
* What happens when you go to the endpoint via a Browser?
