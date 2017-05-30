## Part One

1. In C, Write a program that calls fork(). After the fork call, you have two processes -- one that is the parent and one that is the child. The child should print out HELLO, then the parent should print out world. Look at the man pages for fork() its pretty much a must to do this. You wont be writing much C expect to understand system calls i.e. fork.
  - Refer to `hello_v2.c`
    - compile the C code into an outputted executable file named `hello`: `gcc -o hello hello_v2.c`
    - excute the exec `hello` file: `./hello`

3. When you're done we're gonna answer your question about the ampersand, &. The way we do that is by examining the system call wait(). Then make a hypothesis about how wait() is related to the ampersand.
  - The `&` and the system call `wait()` are related because when you fork you create a clone, and it _REPLACES_ the clone; `fork() -> execute`.
    * when you run `ls`, a child bash is cloned off of the original, creating two _SEPERATE_ instances of bash shells, and then the cloned child bash is replaced with the executable `ls`


## Part Two
4. Next we're going to scale out your skills on the systems that RELATES to your MeeteR work. Go write a Node, Bash, or Python script that can backup files -- specifically transfer some file on your local system to S3 on AWS. You'll likely use this if meeter scales out. Note that S3 is probably  one of the cheapest backup solutions. You can pick your poison on the language, though I suggest Bash or Node just because it'lll be most short term relatable.
  - refer to `aws_s3_fileupload.js`
    - Before using the script, you need to obtain your `accessKeyId` & `secretAccessKey` to authenticate into your AWS account: https://console.aws.amazon.com/iam/home?#/security_credential 
    - run command: `node aws_s3_fileupload.js`


Start out by breaking the first problem down incrementally. Just start with a very basic hello world, then move onto forking, then get the forked process to do something. As you approach these problems dont focus on getting everything right, but focus on the things you're interacting with. What is the return value of fork(). What is exit() WHy does this matter? When you read the man pages if youre open to inspiration you should see a lot of connections to things you've worked with before.
