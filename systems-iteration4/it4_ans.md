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
Read: [Streams] (https://github.com/substack/stream-handbook)
Read the Node Streams library

As you read this, copy down the C code and attempt to comment each line of code.

##What are some tasks that meeter needs to achieve?
Write em here so i can line them up correctly with better learning.

