# [Part 2: eFarmony Functions](id:pt2)
[Back to Home](https://github.com/bgando/JS102)

**You will be placing all your code into the scripts.js file** 

---

### [Animal User](id:profile)

1. Write a function, `AnimalTest`, that has one string parameter, `username`. It returns an object with a username property.

  ```javascript
  function AnimalTest(username) {
    return{
      'username': username
    }
  }
  var testSheep = AnimalTestUser('CottonBall');
  console.log(testSheep); //{ username: 'CottonBall' }
  ```

1. In your `AnimalTestUser` function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, `otherArgs` that is an array of the remaining arguments. Note: the `arguments` keyword is not a true array. Remember, it is an array-like object.

  ```javascript
  function AnimalTestUser(username) {
    otherArgs = [];
    if(arguments.length > 1) {
      for(var i = 1; i < arguments.length; i++){
        otherArgs.push(arguments[i]);
      }
    }
    return {
      'username': username,
      otherArgs: otherArgs
    };
  };

  var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
  console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }
  ```


1. Write a constructor function, `AnimalCreator` that returns a single animal object. The constructor function has 4 parameters: `username`, `species`, `tagline,` and `noises`. The animal object should have at least 5 properties: `username`, `species`, `noises`, `tagline`, and `friends`. The values should all be strings except `noises` and `friends`, which are arrays. 
  
  ```javascript
  function AnimalCreator(username, species, tagline, noises) {
    var animal = {
      'username': username,
      'species': species,
      'tagline': tagline,
      'noises': noises,
      'friends': []
    };
    return animal; 
  }


  var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
  console.log(sheep);
        // { username: 'Cloud', 
        //  species: 'sheep', 
        //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: []
        // }
  ```

1. Write a function, `addFriend` that takes an animal object (like the one returned from the `AnimalCreator` function) and adds another animal object as a friend. 

  ```javascript
  function addFriend(animal, animalFriend) {
    animal.friends.push(animalFriend);
  }



    addFriend(sheep, cow);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: [{username: 'Moo', species: 'cow'...}]
          // }
    addFriend(sheep, llama);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: [{username: 'Moo', species: 'cow'...}, {username: 'Zeny', species: 'llama'...}]
          // }
  ```

1. Change your `addFriend` function to only add the username of the friend, not the whole object.

  ```javascript
    function addFriend(animal, animalFriend) {
      animal.friends.push(animalFriend.username);
    }

    addFriend(sheep, cow);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo']
          // }
    addFriend(sheep, llama);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo', 'Zeny']
          // }
  ```
  
1. Create a `myFarm` collection of at least 3 animal objects. Give them some friends using `addFriend`, too!

  ```javascript 
  var Steven = AnimalCreator("Steven", "Human", "Owner", "hello");
  var Lilly = AnimalCreator("Lilly", "Dog", "White dog", "woof");
  var Bella = AnimalCreator("Bella", "Dog", "Gold dog", "woof");
  var myFarm = [Bella, Lilly, Steven]

  console.log(myFarm) //[{username: 'Cloud'...},{username: 'Zeny'...},{username: 'CottonBall'...}]
  ```
  
1. Create a function, `addMatchesArray`, that takes a farm (array of animal objects) and adds a new property to each animal object called `matches` that is an empty array. Hint: you will need a loop. 

  ```javascript 
  function addMatchesArray(farm) {
    for(animal in farm) {
      myFarm[animal].matches = [];
    }
  }

  addMatchesArray(myFarm); 
  console.log(myFarm[0]); // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo', 'Zeny'],
          //  matches: []
          // }
  ```
  
1. Create a function, `giveMatches`, that takes a farm collection (aka an array of animal objects) that already has a matches property. It selects a name from the `friends` array and adds it to the `matches` array. You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.

  ```javascript 
  function giveMatches(farm) {
    for(animal in farm) {
      addedMatch = farm[Math.round(Math.random() * 2)].username;
      console.log(addedMatch);
      farm[animal].matches.push(addedMatch);
    }
  }

  // to empty all matches
  function dumpMatches(farm) {
      for(animal in farm) {
        farm[animal].matches = [];
    }
  }

  giveMatches(myFarm); 
  console.log(myFarm[0]); // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo', 'Zeny'],
          //  matches: ['Zeny']
          // }
  ```