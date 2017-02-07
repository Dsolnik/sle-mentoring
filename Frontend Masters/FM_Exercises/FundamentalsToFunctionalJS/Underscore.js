// to include in browser

var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js'; document.head.appendChild(script);\

// _.each(), applies a callback function iteratively to each element; don't have to use a loop :D

_.each([1,2,3], function(val,i,list){ 
  console.log(val);
});

var pocketmon = ['Charisaur', 'Bulbazard', 'Twomew'];

var logger = function(val){
  console.log(val);
};

// invoke _.each()
_.each(pocketmon, logger);


// another example of _.each()
function AnimalMaker(name) {
  return {   
    speak: function () { 
      console.log("my name is ", name); 
    } 
  }; 
}; 


var animalNames = ['moo', 'woof', 'meow']; 
var farm = []; 

_.each(animalNames, function(name){
	farm.push(AnimalMaker(name));
});


// _.map(), 
var pocketmon = ['Charisaur', 'Bulbazard', 'Twomew'];

var excitedArr = function(val){
  return val + '!!!';
};

_.map(pocketmon,excitedArr);

// looping with .map()
function AnimalMaker(name) {
  return { 
    speak: function () { 
      console.log("my name is ", name); 
    } 
  };
};

var animalNames = ['moo', 'woof', 'meow']; 

var farm = _.map(animalNames, function (name) {
  return AnimalMaker(name);
});