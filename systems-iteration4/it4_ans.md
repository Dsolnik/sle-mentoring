## Backups Expanded

1. First check that your script works by downloading your text file.

2. Last iteration we wrote a backup script. Though its possible that we can use this backup script whenever we need to backup our machines, its more likely that we'll have to back up on a routinely basis. Make your script run on a routinely basis i.e. every 5 seconds first. You should be using the `cron` software utility to do this: https://en.wikipedia.org/wiki/Cron

## Explain what happens ..
1. when you run $ls via system calls in bash. 
  - when you run `$ls` in bash, it forks the bash shell and replaces the cloned child with `ls` and executes 

2. when you run $node & via system calls in bash.
  - when you run `$node&` in bash, the shell executes the command in the background in a subshell. the shell doesn't wait for the command to finish, and the return status is 0. 

## Some more C
Read: [How linux creates processes](https://brandonwamboldt.ca/how-linux-creates-processes-1528/)
  1. A process wants to run another process, such as `ls`
  2. the process forks itself using the `fork(2)` syscall 
  3. the forked processes are _exact_ copies of their parent process, and resume execution at the exact same spot. The parent will then go on to do something like `wait(2)` to wait for the child process to complete execution
  4. the child process inherits pipes, file descriptors, state etc from the parent process, but the child process may clean up by closing any unnecessary file descriptors, sockets etc
  5. the child process calls `exec(2)/execve(2)` to replace itself with the target process
    - notes on `exec(2)` syscalls: 
      * they replace the current process with another process. The text, data, and stack of the calling process are overwritten by the new process. 
Read: [Streams] (https://github.com/substack/stream-handbook)
  1. __pipe__: all the different types of streams use `.pipe()` to pair inputs with outputs; `.pipe()` is just a function that takes a readable source stream and hooks the ouput to a detination writeable stream
  2. __readable streams__: Readable streams produce data that can be fed into a writable, transform, or duplex stream by calling .pipe():
  3. __writeable streams__: A writable stream is a stream you can .pipe() to but not from:
  4. __transform__: Transform streams are a certain type of duplex stream (both readable and writable). The distinction is that in Transform streams, the output is in some way calculated from the input.
  5. __duplex__: Duplex streams are readable/writable and both ends of the stream engage in a two-way interaction, sending back and forth messages like a telephone. 
  
Read the Node Streams library

As you read this, copy down the C code and attempt to comment each line of code.

##What are some tasks that meeter needs to achieve?
Write em here so i can line them up correctly with better learning.

# in desc. priority
- optimize/refactor mongoDB schemas
- CSS of web app (lols)
- Ansible/Chef/Docker?...
- migrate away from Parse (eventually)

## My questions for Stevie:
1. Should I be using ansible/chef to help set up my env for each sequential server?
2. Need help with Parse image issue; refer to `#general` channel in MeeteR's Slack
3. ...

