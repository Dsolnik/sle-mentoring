#eFarmony Data Structures: Arrays as Collections (1/8/2017)

[Back to Home](https://github.com/bgando/JS102)

In this section we will review arrays and learn how to create a collection of animal objects.

**You will be placing all your code into the scripts.js file.** 

---

Create an array.

- Create a variable called `noiseArray` and assign it to an array literal. Place at least one element in the array.
	* `noiseArray = [];`

Using a [native array method](http://www.w3schools.com/jsref/jsref_obj_array.asp)…

- Add a noise to the beginning of the `noiseArray`.
	* `noiseArray.unshift("noise0");
- Add another noise to the end of the `noiseArray`.
	* `noiseArray.push("noise1");


Using Bracket Notation…

- add another noise to the end.
	* noiseArray[2] = "noise2"

Inspect the `noiseArray`

- What is the length?
	* `noiseArray.length // 3`
- What is the last index? How is it different than the length?
	* Since Javascript arrays are zero-based, the last index is 2; the length is 3
- Inspect your handiwork! What does it look like?
	* `inspect(noiseArray) // length 3, indexes from [0-2]


Nest the Array in the Object
- Put the `noiseArray` inside the animal object on the noises property. Your result should look like this:

  `{ username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze'] }`
  
- Congrats! You just made a nested data structure :)  


##### Review
Let's go over some concepts:

- What are the different ways you can add properties and values to arrays? 
- Come up with two ways you can add an element to the end of an array, without knowing the exact length of the array. 

---


### [Animal Collection](id:collection)
A collection is an array of objects. 

- Create a variable called `animals` and set it equal to an empty array
  - Note that this variable is `animals` (plural) while the variable in the Animal User Model of the Object Exercises is `animal` (singular)
- Using any method you prefer, add your `animal` from the Object Exercises to the `animals` array.
- Create a variable called `quackers` and assign it to this example object:
  - `{ username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }`
- Add `quackers` to the `animals` array using a different method than before.
- Inspect your `animals` array to ensure you have two objects inside.
- Create two more animal objects and add them to your `animals` array.  They should have these properties and your choice of values: 
  - username (with a string value) 
  - tagline (with a string value)
  - noises (with an array of values)
- Check the length property of your array. It should give you 4.