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
 process of converting information or data into a code, especially to prevent unauthorized access. It is 2-way.
   
__5. Choose between Google Login or Facebook Login.__
 Google Login?...

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

##Project Improvements
1. Implement SSO with the choice in number 5 above.  - Some things to note -- when doing this, only use the tools we've touched on so far. That is, Node, Express, Bootstrap(see point 2), async.js.
if you have the time continue with the other things below.
2. Download Bootstraps Grid System (ONLY THE GRID, no other assets).
3. ATTEMPT to implement GrubHubs fixed header with your button being on the top right. 

#Part 3: JS Tools
1. Do some research on ReactJS, what is the philosophy behind it? 
2. What is a build system? 


#Part 4: Extra Credit (To Come... more research on networks)

#Part 5: Feedback:
If I may do so, in your answer files PLEASE write down 
1. what was too hard for you
2. what was too easy for you. 
3. What felt just right? 
4. Do you feel like you learned something substantial? Are you growing as an engineer? 
5. Any other notes
6. A rating 1-10.

