# [eFarmony Data Structures: Objects as Data Models](id:pt1)

In this section we will explore how to represent our eFarmony data as a JavaScript object.

**You will be placing all your code into the scripts.js file.** 

---

###[Animal User Model](id:model) 

This object will be the model of a single animal user. Extra points if you get the pun in the last sentence.

##### Object
An object to hold our data model...

- Create a variable, name it `animal`, and assign it an object literal.
	* `var animal = {};`


With Dot Notation…

- Add a property called `username` and assign it a value.
	* `animal.username = "Bob";`
- Ensure that your `username` property exists in animal by inspecting it in the console.
	* `animal.username;`

With Bracket Notation…

- Add a property called `tagline` and give it a value.
	* `animal['tagline'] = 'hello';`
- Check that your property exists in the animal object by inspecting it in the console.
	* `animal['tagline'];`
- Create a variable called `noises` and assign it an empty array `[]`
	* `var noises = [];`
- Add the `noises` array to your object.
	* `animal["noises"] = noises;`
- Inspect your handiwork! Your object should look something like this:
	* `inspect(animal);`
		``` 
		{ username: 'DaffyDuck', tagline: 'Yippeee!', noises: [] }
		```

##### Loops
- Loop through the properties of your animal object. 
```
for(var key in animal) {
	console.log(animal[key]);
}
```
- Count everytime it loops to keep track of the number of properties on your object.
```
var i = 1;
for(var key in animal) {
	console.log(animal[key]);
	console.log(i++);
}
- Write an if/else statement in your loop:
  -   If the key is `username`, console.log('Hi my name is ' + ___) //fill in with object's username value.
  -   If the key is `tagline`, console.log('I like to say ' + ___) //fill in with object's tagline value.
  ```
  for(var key in animal) {
		if (key === 'username'){
			console.log('Hi my name is ' + animal[key])
		} else if (key === 'tagline') {
			console.log('I like to say ' + animal[key])
		}
	}
	```
-   What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?
```
for(var key in animal) {
	if (key === 'username'){
		'Hi my name is ' + animal[key]
	} else if (key === 'tagline') {
		'I like to say ' + animal[key]
	}
}
```

##### Review
Let's go over some concepts:

- What are the different ways you can add properties and values to objects? 
- Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')?
- What about if the property is a variable, how does that change the syntax?