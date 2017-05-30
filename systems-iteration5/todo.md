#Demo to come tomorrow
30 minutes 
going over pgrep, pkill, kill signals 9,15 18,19
demonstrating niceness with time
scp, sftp
Let sle know you can set up machines for him if needed

#Concept
##what is the pgrep command?
##What is niceness?
##Memorize the following signals and give a brief description of each
9:
15:
18:
19:
20:
Which signal is the default when running $kill?

#Practice Task 0 (recorded) -scp/sftp
1. make a file called 1.txt
2. write the words "Hello there" from the command line into the file 1.txt
3. scp this file up to a remote server with the name fileup1.txt
4. use sftp to upload the file again to the server with the name fileup2.txt
5. create a file called filedown.txt
6. sftp this file down into ur local system


#Practice Task 1 (recorded)
Get access to a linux system.
Record yourself accomplishing the following.
1. Open two shells sshd into the same system
2. in shell A be root, in shell B be a regular user
3. in shell B open up vim
4. in shell A find the TTY of the user in shell B (use $w)
5. in shell A kill all processes associated with terminals associated with the TTY of user in Shell B (hint: pkill)

#Practice Task 2 (recorded) - ansible
Download Ansible.
Set up vim on two different machines by using an Ansible playbook

#Practice Task 3 (recorded)
1. run top on your local macbook pro
2. identify the tasks that are using the most CPU power 
3. how many threads are running on your system?
4. explain the different process states

#Practice Task 4
1. find out how much space is left on a remote machine
2. use $dd to create a file of 1 gb 
3. use $tar -cvf with $time and $nice val to slowest settings to get the time it takes to compress a file of that size
4. use $tar -cvf with $time and $nice val to highest settings to get the time it takes to compress this file.
5. find out how much space is left on this machine now
6. clean up

#Practice Task 5
What CPU processor does your computer have?
How many cores are running?
What sorts of programs does this help you run quickly?

