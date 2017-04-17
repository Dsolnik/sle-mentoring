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
    1. Docker - a container allows a developer to package up an application with all it's dependencies and packages; this solves the problem of dependecy hell, for example when changing to a dev server this will mitigate the finger pointing between the sys-admin + the developers.
        - Pros: Scalable, Portable, Deployment, Density (fewer machines), unites Sys-Admins + developers aginst dependency demons, ultimately reduces dev-ops life cycle
    2. Vagrant - takes the idea of a virtual machine and makes it __scriptable__. You can write a fairly simple config file that can set up your virtual web server that has all the dependencies and applications you need. Extremely helpful for deploying tens/hundreds of virtual machines.
    3. Jenkins:
        - listens for new Pull Requests (finished features that are awaiting testing)
        - merges work/feature branches into the mainline (master) branch
        - runs a couple of automated test suites on the code which now includes the work branch
        - creates and seeds a new test database for each run of the test suite, then immediately deletes it
        - reports any failures in the test suite via email and HipChat
        - runs code through a static analysis tool and reports the findings
        - deploys the latest code changes to a QA environment for manual testing
    4. Chef - A configuration automation tool that permit mass configuration changes on servers. Allows you to make changes to many servers at once.
    5. Ansible - Similar to Chef; designed for provisioning servers and actioning code deployments. 
6. Last iteration we learned about CHMOD and what rwxrwxrwx means. Now rwx = 7. Why is that? How do each of these permissions (read, write, execute) correspond to an integer?
    - CHMOD has it s.t., read = 4, write = 2, execute = 1. All other numbers are only sums of the 3 mentioned; so only 4 numerals, 0751, exist:
        - 0 = nothing special
        - 7 = user can read, write, execute
        - 5 = group can write and execute
        - 1 = all others can only execute

# Important Sysadmin and General Tech Stuff
7. MEMORIZE the following regular expression symbols and what they do. `^ $ () . d+ d*`
    - `^`: Match start of string
    - `$`: Match end of string
    - `()`: match enclosed regex and save as subgroup
    - `.`: match any character (except NEWLINE)
    - `d+`: match any decimal digit, same as [0-9]
    - `d*`: match any decimal digita of 0 or more occurences of preceding decimal digital
8. Write a Javascript function that checks whether or not a given string is a valid IP address or not.
    - Valid IP rules are:
        - must have 4 octets
        - only digits are allowed
    - http://www.w3resource.com/javascript/form/ip-address-validation.php 
        ```
        function ValidateIPaddress(ipaddress)   
        {  
         if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(myForm.emailAddr.value))  
          {  
            return (true)  
          }  
        alert("You have entered an invalid IP address!")  
        return (false)  
        }  
        ```
        - `/ .. /`	All regular expressions start and end with forward slashes.
        - `^`	Matches the beginning of the string or line.
        - `25[0-5]`	Matches 250 or 251 or 252 or 253 or 254 or 255.
        - `|`	or
        - `2[0-4][0-9]`	Start with 2, follow a single character between 0-4 and again a single character between 0-9.
        - `|`	or
        - `[01]`
        - `?`	Matches the previous character 0 or 1 time.
        - `[0-9][0-9]`	Matches a single character between 0-9 and again a single character between 0-9.
        - `?`	Matches the previous character 0 or 1 time.
        - `\.`	Matches the character "." literally.
9. Write a custom script that automatically echos the words "HELLO THIS IS A BASH SCRIPT" when ran with the command $ ./scriptname
    - __Need stevie's help?__
    
# Networks
10. Run ping on Google IP address. What does this do? How can it be helpful when figuring out whats going on with a server?\
    - `ping` test is a method of checking if the computer is connected to a network. This is helpful to figure out what's going on with the server, and to determine the latency between two computers. 
11. Run tracert on Googles IP address. How does this utility work? How does this show you how the "INTERNET" is just a series of nodes connected?
    - `tracert OR traceroute` is meant to view the path the packet takes to the destination, meaning to view which routers sit bounces through. IP addresses aren't secret bits of information; they are addresses, and are crucial to send packets. Therefore, we can look at the "INTERNET" as just a series of nodes (IPs) connected 
12. What is a socket? (This is a complex topic) 
    - sockets are a single bi-directional channel of communcation within computing. **Stevie to elaborate**
13. What are the private IP address ranges in IPv4?
    - 24-bit blocks: `10.0.0.0 – 10.255.255.255`
    - 20-bit blocks: `172.16.0.0 – 172.31.255.255`
    - 16-bit blocks: `192.168.0.0 – 192.168.255.255`
14. What is IPv6?
    - IPv6 aka Internet Protocol Version 6 provides the most recent version of identification and location system for computers on networks and routes traffic across the Internet, intended to replace IPv\4







