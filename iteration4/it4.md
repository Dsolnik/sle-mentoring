#Part 1 - Project
So now we understand how to hook up a button to make real network requests. By doing this, we got to explore how APIs on the net work as well as the different types of requests. 
We also got to refactor our code to utilize some of Javascript's most fundamental features.

This iteration we're going to be looking a little bit more into the technicalities behind networks and what really goes on underneath any connection. Then were going to attempt to prettify our project a little.

##Questions to answer before proceeding.
__1. What is a cookie?__
  * small piece of data sent from a website and stored on the user's computer by the user's web browser. There is one for each website, and when you visit a website it's associated cookie is sent to the server. An example of this is your session token, to be able to stay logged in so you don't have to retype your password each time.
   
__2. On Chrome, open up your inspector, hit the Application tab. There you will see the following three crucial items:__
  * Local Storage: locally stores named key/value pairs inside a client's web browser.
  * Session Storage: similar to localStorage, the only difference is while data stored in localStorage has no expiration set, data stored in session storage gets cleared when the page session ends. A page session lasts for as long as the browser is open and survives over page reloads and restores.
  * Cookies: refer to 1
  Poke around and attempt to find out what these things are. Then do some research on them and write them out as done in iteration 3,2,1.
    
__3. What is hashing? (10 words max)__
 * Hashing is an injective transformation function, typically one-way. Used primarily for password security and protection.
   
__4. What is encryption? (10 words max)__
 * process of converting information or data into a code, especially to prevent unauthorized access. It is 2-way.
   
__5. Choose between Google Login or Facebook Login.__
 * Google Login?...
 

------------------------
Watch the following vids -- be ready to get quizzed on it as well as all the past iterations.
https://www.youtube.com/watch?v=8ZtInClXe1Q (How NOT to store passwords):
   1. Don't just store the user's password
   2. Don't encrypt the password: if people have the same password, it'll have the same encryption key...
   3. Don't use hashing: you can Google hashtag and rainbow table to figure out the password from a hash
   4. DO USE, HASH & SALT: similar to a hashing, except it will generate a random long string of characters for each password to be associated with the user resulting in a 'salted hash';...
      
https://www.youtube.com/watch?v=b4b8ktEV4Bg (Hashing Algorithms and Security - Computerphile)
   1. Hashing shouldn't be too slow or too quick.
   2. Avalanche Effect on your hashes. A small change in a bit, should drastically change the entire hash
   3. Avoid Hash collisions, i.e., two documents that have the same hash.


##PROJECT RE-EVALUATED:
Write code that does the following:

1. Start off by taking a password: "password" and the salt: "s1a2l3t4" and writing a JSON object that represents this  and fill in the hash object aka 
```javascript
{
  password: "password",
  salt: "s1a2l3t4",
  hash: <fill this in>
}
```
store this object in any variable on your server

2. Have a form on a website with the fields: username and password
3. Have it send a request to a route: /signin
4. When the right username and password is sent in redirect to "/success" else "/failure"

Additionally: You MAY use any sort of NPM library that lets you do MD5, SHA-1, or SHA-2 Hashes, that being said, MD5 is easiest to use but also the easiest to crack and not used for pw storage currently.

For any extra time (and will leak over into IT5 anyways)
5. Extract your code that handles password management into a separate file
6. Write code that makes it impossible to open the /success write unless you are logged in.

Some things to carefully note:
* How am I sending this request? What method should I use and why does it make sense in this scenario?
* How do I attach the Password and Username to this request?
* We learned a concept above about cookies. Is it possible to use cookies to persist a login session?

##Project Improvements (DEPRECATED READ ABOVE)
1. Implement SSO with the choice in number 5 above.  - Some things to note -- when doing this, only use the tools we've touched on so far. That is, Node, Express, Bootstrap(see point 2), async.js.
if you have the time continue with the other things below.
2. Download Bootstraps Grid System (ONLY THE GRID, no other assets).
3. ATTEMPT to implement GrubHubs fixed header with your button being on the top right. 

#Part 3: JS Tools
1. Do some research on ReactJS, what is the philosophy behind it? 
 * React is all about creating custom, reusable DOM elements and structuring the flow of data throughout the page, from actions taking place (example: user inputs text and pressed "return") to the view being updated. It's meant to provide a way to structure your interactions so that events that update the DOM flow through your components from highest in the DOM tree to lowest, updating the UI as changes happen that modify its state.
2. What is a build system? 


#Part 4: Extra Credit (To Come... more research on networks)

#Part 5: Feedback:
In your answer files PLEASE write down 
1. what was too hard for you: 
 * I struggled with the actual coding part of this iteration:
  * Unsure of what examples to replicate/follow
   * Would be great to see an example done prior (video or just plain code), to see how it's done, then try to do a rendition of the example. 
2. what was too easy for you: n/a
3. What felt just right?: modularizing my express routes
4. Do you feel like you learned something substantial? Are you growing as an engineer? 
 * I learned a great deal on the ideas of Hash + Salt, cookies, and how the browser stores data. I think I am slowly beginning to grow as an engineer. 
5. Any other notes
 * This week wasn't the best week for me in terms of JS self-esteem. I didn't feel like I was accomplishing much with this iteration's coding section. There's still a disconnect between the material and the actual coding; aside from learning the general overview and theory as to what hashing is, I didn't have enough of a build-up/sufficient practice to implement the remainder of what the coding part require. In previous iterations, when I had front-end masters, and did the coding examples alongside with those videos, it helped me a tremendous amount when it was time to implement the coding concepts.
6. A rating 1-10.
 * 6/10

