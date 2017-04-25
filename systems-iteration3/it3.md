Write some code in C. You should be able to do this pretty much anywhere and everywhere.


Write a program that calls fork(). After the fork call, you have two processes -- one that is the parent and one that is the child. Th echild should print out HELLO, then the parent should print out world.


Look at the man pages for fork() its pretty much a must to do this.

YOu wont be writing much C expect to understand system calls i.e. fork.

When you're done we're gonna answer your question about the ampersand, &.

The way we do that is by examining the system call wait(). Then make a hypothesis about how wait() is related to the ampersand.


##Second Part
Next we're going to scale out your skills on the systems that RELATES to your  meeter work. Go write a Node, Bash, or Python script that can backup files -- specifically transfer some file on your local system to S3 on AWS.

You'll likely use this if meeter scales out. Note that S3 is probably  one of the cheapest ackup solutions. You can pick your poison on the language, though I suggest Bash or Node just because it'lll be most short term relatable.


Start out by breaking the first problem down incrementally. Just start with a very basic hello world, then move onto forking, then get the forked process to do something. As you approach these problems dont focus on getting everything right, but focus on the things you're interacting with. What is the return value of fork(). What is exit() WHy does this matter? When you read the man pages if youre open to inspiration you should see a lot of connections to things you've worked with before.
