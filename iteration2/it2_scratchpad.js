// January 10, 2016 -- JS scratchpad

// Prototypes...

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


// JavaScript Constructors...


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