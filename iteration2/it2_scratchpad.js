// January 10, 2016 -- JS scratchpad

// ******************************
// Prototypes...
// ******************************

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

// ******************************
// JavaScript Constructors...
// ******************************

//Constructor
var LivingEntity = function(location){  
    this.x = location.x;
    this.y = location.y;
    this.z = location.z;
};

// To create an object in Javascript, you first must define its constructor function.
var dog = new LivingEntity({  
    x: 5,
    y: 0,
    z: 1
});

//Methods -- THIS IS WRONG! waste of memory
dog.moveWest = function(){
	this.x--;
}

// Instead, we add a single annoynmous function to the prototype chain!
// By doing this, there is only one anonymous function, whose reference is passed around to all 
// LivingEntity objects
LivingEntity.prototype.moveWest = function(){
	this.x--;
}

// ******************************
// Singletons
// ******************************

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
 
    alert("Same instance? " + (instance1 === instance2));  
}

// ******************************
// Frontend Masters: Functions
// ******************************

// arguments keyword returns an array of the arguments passed in
var add = function(a, b){
	console.log(arguments); // logs [a,b]
    return a + b;
};

// to add a function with a dynamic # of parameters!
var add = function(a, b){
	results = 0;
	for(var i = 0; i < arguments.length; i++){
		results += arguments[i];
	}
	
	return results
}

add(1, 2, 3, 4) // returns 10

// *** Looping


// a constructor function with property of 'speak'
function AnimalMaker(name) {
  return { 
    speak: function () { 
      console.log("my name is ", name); 
    } 
  };
};

// how do we loop through the animalNames and create an animal object with each one and store it in farm[]?

function AnimalMaker(name) {
  return { 
    speak: function () { 
      console.log("my name is ", name); 
    },
    name: name
  };
};

var animalNames = ['Sheep', 'Liger', 'Big Bird'];

var farm = [];


// recall 'for(var key in ___)' is for objects...
for(var i = 0; i < animalNames.length; i++ ){
	farm.push(AnimalMaker(animalNames[i]));
	console.log("Sucessfully created ", animalNames[i]);
}



// ******************************
// Frontend Masters: Nesting
// ******************************

var box = {};
box.innerbox = {};

// putting an obect inside an object
box['innerbox'] = {};
box['innerbox']['full'] = true;
// OR can do
box['innerbox'].full = true;

box.innerbox.babyBox = {};
box.innerbox['babyBox'].says = "What's up!?";


// ******************************
// Frontend Masters: Scope
// ******************************


// Child has access to Parent scope; Parent doesn't have access to child scope
var g = 'global'; 

function blender(fruit) { 
  var b = fruit; 
  var y = 'yogurt';
 
  function bs() { 
    alert( b + ' and ' + y + ' makes ' + b + ' swirl'); 
  } 
  bs(); 
} 

blender('blueberry');





































