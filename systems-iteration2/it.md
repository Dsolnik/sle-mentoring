# Files
1. Watch my video on "everything is a file" in UNIX in a comfortable environment (meant to be easy viewing)
2. What are the different file types? What letter are they represented by in ls -l? (MEMORIZE THESE)
    1. `Regular`: denoted with `r`
    2. `Directory`: denoted with `d`
    3. `Symbolic Link`: denoted with `l`; it's a reference to another file
    4. `Named Pipe`: denoted with `p`; these files/pipes connect the output of one proces to the input of another
    5. `Socket`: denoted with `s`; sockets are special files used for inter-process communication
    6. `Device`: 
        1. Character devices denoted with a `c` provide only a serial stream of input or output 
        2. Block devices are denoted with a `b` and are randomly accessible
    7. `Door`: denoted with a `D`; a door is a special file for inter-process communication between a client and server
3. What is the difference between a hard link and a symbolic link?

# LINUX AND TOOLING
4. Name 5 linux distributions. What do each of these distributions do well and do poorly at?
    1. __Ubuntu__
        - Pros: Solid release cycle based on LTS (Long Term Support) and intermediate releases; user friendly, with lots of “helper” commands
        - Cons: Tends to move quickly and packages can be less stable than others; has unique conventions that don’t translate to other distributions
    2. __Debian__
        - Pros: Very stable and reliable; wide variety of support packages; all-volunteer maintainers; supports large variety of architectures
        - Cons: Very conservative; release cycle can be slow
    3. __Fedora__
        - Pros: Quite cutting-edge – sometimes bleeding-edge; lots of supported software with recent releases
        - Cons: Can be less than stable due to fast-paced package and release updates; generally thought to be Red Hat’s testing distribution
    4. __RHEL and CentOS__
        - Pros: Very stable and reliable; very well supported; used almost everywhere; very traditional layout and management approach
        - Cons: Very long release cycle; packages will be older and generally more difficult to bring to current if required
    5. __Arch Linux__
        - Pros: well documented, which makes configuration a breeze if you take the time to learn it
        - Cons: You have to make everything work yourself
5. Look up the following tools, briefly describe what each of them do. What problem do they solve?
    a. Docker - a container allows a developer to package up an application with all it's dependencies and packages
    b. Vagrant
    c. Jenkins
    d. Chef
    e. Ansible
6. Last iteration we learned about CHMOD and what rwxrwxrwx means. Now rwx = 7. Why is that? How do each of these permissions (read, write, execute) correspond to an integer?

# Important Sysadmin and General Tech Stuff
7. MEMORIZE the following regular expression symbols and what they do. ^ $ () . d+ d*
8. Write a Javascript function that checks whether or not a given string is a valid IP address or not.
9. Write a custom script that automatically echos the words "HELLO THIS IS A BASH SCRIPT" when ran with the command $ ./scriptname

# Networks
10. Run ping on Google IP address. What does this do? How can it be helpful when figuring out whats going on with a server?
11. Run tracert on Googles IP address. How does this utility work? How does this show you how the "INTERNET" is just a series of nodes connected?
12. What is a socket? (This is a complex topic) 
13. What are the private IP address ranges in IPv4?
14. What is IPv6?







