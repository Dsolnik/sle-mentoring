# Demo to come tomorrow
30 minutes 
going over pgrep, pkill, kill signals 9,15 18,19
demonstrating niceness with time
scp, sftp
Let sle know you can set up machines for him if needed

# Concept
## what is the pgrep command?
`pgrep` looks through the currently running processes and lists the process IDs which matches the selection criteria. 
## What is niceness?
_Niceness_ derives from the __nice__ program found on unix OSs. It maps a process to a number ranging from [-20, 19], where -20 is the highest priority, and 19 is the lowest priority.
## Memorize the following signals and give a brief description of each
- 2: `SIGINT`: Sends an intterup signal, the same as doing `Ctrl + C`
- 9: `SIGKILL`: If a process gets this signal it must quit immediately and will not perform any clean-up operations
- 15: `SIGTERM`: terminates software 
- 18: `SIGCONT`: continue executing, if stopped
- 19: `SIGSTOP` : Stop executing (can't be caught or ignored)
- 20: `SIGTSTP`: Terminal stop signal
- Which signal is the default when running $kill?
    * The default signal is SIGTERM (-15) which allows the program being killed to catch it and do some cleanup before exiting.

# Practice Task 0 (recorded) -scp/sftp
1. make a file called 1.txt
2. write the words "Hello there" from the command line into the file 1.txt
3. scp this file up to a remote server with the name fileup1.txt
4. use sftp to upload the file again to the server with the name fileup2.txt
5. create a file called filedown.txt
6. sftp this file down into ur local system


# Practice Task 1 (recorded)
Get access to a linux system.
Record yourself accomplishing the following.
1. Open two shells sshd into the same system
2. in shell A be root, in shell B be a regular user
3. in shell B open up vim
4. in shell A find the TTY of the user in shell B (use $w)
5. in shell A kill all processes associated with terminals associated with the TTY of user in Shell B (hint: pkill)

? How do I create a separate user in my machine? I'm currently inside root, and then inside root i login to my username `steven`. But it's still the same login of root when I run `$w`... 


# Practice Task 2 (recorded) - ansible
Download Ansible.
Set up vim on two different machines by using an Ansible playbook

? How am I supposed to get many machines running without biuying a new droplet frmo DO?
Problems:
- configuration problems on macOS (~30 mins). Tried on my server. ran into issues with ssh (~15mins)


# Practice Task 3 (recorded)
1. run top on your local macbook pro
2. identify the tasks that are using the most CPU power : `top -o cpu`
   1. Google Chrome
   2. Terminal
3. how many threads are running on your system? 2244 threads
4. explain the different process states:
   1. 'D' = uninterruptible sleep; sleep state that cannot be interrupted by signal (typically seen when a process is waiting for the disk) 
   2. 'R' = running; process is ready to run and will run whenever it's turn to use the CPU comes
   3. 'S' = sleeping; sleep state that can be interrupted by a signal
   4. 'T' = traced or stopped;  process is stopped by `SIGSTOP` or `SIGTSTP` (typically seen when processes are in the background)
   5. 'Z' = zombie; process is dead, has finished esecution. Only thing left is the structure describing it on the kernel. It's waiting for its parent process to retrieve its exit code, then the parent process finishes it, it will disappear.
   
__NOTES__: good, around ~15 mins. to the point

# Practice Task 4
1. find out how much space is left on a remote machine: `df --human-readable` 
```
root@MeeteR-SysAdminStaging:~# df --human-readable 
Filesystem      Size  Used Avail Use% Mounted on
udev            235M  4.0K  235M   1% /dev
tmpfs            49M  348K   49M   1% /run
/dev/vda1        20G  7.2G   12G  39% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
none            5.0M     0  5.0M   0% /run/lock
none            245M     0  245M   0% /run/shm
none            100M     0  100M   0% /run/user
```

2. use $dd to create a file of 1 gb: `dd if=/dev/zero of=file.txt count=1024 bs=1048576`

3. use $tar -cvf with $time and $nice val to slowest settings to get the time it takes to compress a file of that size
```
root@MeeteR-SysAdminStaging:~# time nice -n -20 tar -cvf file.tar file.txt
file.txt

real	0m2.349s
user	0m0.030s
sys	0m1.732s
```

4. use $tar -cvf with $time and $nice val to highest settings to get the time it takes to compress this file.
```
root@MeeteR-SysAdminStaging:~# time nice -n 19 tar -cvf file.tar file.txt
file.txt

real	0m2.624s
user	0m0.020s
sys	0m1.922s
```
5. find out how much space is left on this machine now
```
root@MeeteR-SysAdminStaging:~# df --human-readable 
Filesystem      Size  Used Avail Use% Mounted on
udev            235M  4.0K  235M   1% /dev
tmpfs            49M  348K   49M   1% /run
/dev/vda1        20G  9.2G  9.4G  50% /
none            4.0K     0  4.0K   0% /sys/fs/cgroup
none            5.0M     0  5.0M   0% /run/lock
none            245M     0  245M   0% /run/shm
none            100M     0  100M   0% /run/user
```

6. clean up

# Practice Task 5
* What CPU processor does your computer have? 2.6 GHz Intel Core i7
* How many cores are running? i7s run 4-cores
* What sorts of programs does this help you run quickly? Processor intensive apps like Photoshop

