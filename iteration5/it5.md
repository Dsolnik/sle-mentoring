#Part 1 - Project
So iteration 4 was all about understanding basics of security as well as trying to inapply them to HTTP Requests.
This iteration, we expand upon them to finally connect some of the dots and terminology we've been learning before.

Now that we have a good understanding of cookies and redirections. Let's make a login session persist.

We do this by implementing session cookies. We won't implement all of it unless you have the time to do so. Keeping sessions and cookies allow us to persist state between client and server in a web application. Managing state is a very tough and complex topic so expect to struggle to wrap your head around a little bit and when confused ask. This topic doesnt really come easily for most people.


Along the way if you get stuck try watching:
https://www.youtube.com/watch?v=yvviEA1pOXw

------
1. Download MongoDB and connect it to our current application.  
We start off with this as it allows us to store session data server-side and no longer in a file. Read this https://www.npmjs.com/package/mongodb for detailed instructions on how to get MongoDB set up. 

At this point watch the following series:
https://www.youtube.com/watch?v=LEwehYpTxCg&list=PLffUyEIMenSnRVQGxRVphq-HelRrSIdzh
UNTIL and including part 5.

It is very important for you to understand the difference in schema design of a nosql-nonrelational db and that of a sql-relational db

2. Write code that adds a document to MongoDB upon a request to /addDocument
This is to get you acquainted with the MongoDB interface.

3. Read http://stackoverflow.com/questions/16209145/how-to-set-cookie-in-node-js-using-express-framework  

Now set a cookie upon successful authentication. So when someone signs into your "grubhub mini app" they should have a cookie set with the value "hello-im-a-cookie"

4. Make sure that the cookie disappears after the client has completely shut off his /her browser

5. Make the cookie expire after 300 seconds without shutting off the browser.

6. Now upon a user revisiting your page, check for a cookie with the right string, "hello-im-a-cookie" and if the client has this cookie, then redirect them immediately from / to /userHome. If the client does not have the cookie then display the sign in page as usual.

7(Extra). Now generate a random hash value based on a random number generator for every time a user signs into your application. Store THAT inside MongoDB inside a document.

8(Extra). Read up on https://github.com/expressjs/session -- sessions

#Part 2:
Finish up the FEM or REACT stuff and take notes here if incomplete. Those videos are incredibly important and do come down in the pipeline. Prefer REACT or FEM excess stuff.

#Part 3:
Networks:
1. What is a private IP address?
2. What is the loopback address?
3. What are the 7 layers of the OSI model? (memorize this)
4. What private IP address can you most likely expect your router to have?
5. What is the difference between a public and a private IP address?
6. Run $ipconfig -- get your own MAC address write it down here, then write down your IPv4 address and your IPv6 address



#Part Feedback:
In your answer files PLEASE write down:

1. what was too hard for you specific steps:
  * Getting started with MongoDB was pretty difficult for me. There were a lot of moving pieces/in-between steps that I wished were mentioned beforehand. 
2. what was too easy for you: n/a
3. What felt just right?:
  * When Stevie walks me through a trivial example it's EXTREMELY beneficial to me. Especially when it's learning a new topic such as MongoDB. I wish there was more of these starting off each iteration. 
4. Do you feel like you learned something substantial? Are you growing as an engineer? 
5. Any other notes
  * If you worked the assigned problems beforehand and have the solutions readily available, I think it'd be beneficial in helping you deliver/create a more fluid, thoughtful, and comprehensive lesson plan more - that and understand any potential problems or shortcomings I might run into. If there was an 'ideal' solution for me to look at and score against, I'd understand how proficient I am and if i'm on the right track. This would save a lot of time and frustration for the both of us in the long run. 
6. A rating 1-10:
7. did you use any other resources that you found particularly helpful? If so, list them .


