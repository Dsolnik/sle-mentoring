This iteration focuses on using your current knowledge to tie into the linux operating system.
Were going to focus on the fundamentals needed to operate efficiently.

0. What are the 8 sections of the man pages? After this, attempt to use the man pages to  look up any commands I mention.
    A (MAN)ual page is a descriptive help system that sometimes contains procedural help.
    1. User Commands
    2. System Calls
    3. C Library Functions 
    4. Devices and Special Files
    5. File Formats and Conventions
    6. Games et. al. 
    7. Misc
    8. System Admin Tools & Daemons
1. What is the difference between Linux, Unix, POSIX? How are they related?
    POSIX (Portable Operating Systems Interface) is a family of standards, specified by the IEEE, to clarify and make uniform the application programming interfaces provided by Unix-y operating systems. When you write your programs to rely on POSIX standards, you can be pretty sure to be able to port them easily among a large family of UNIX derivatives (including Linux, but not limited to!); if and when you use Linux API that's not standard to POSIX you will have a harder time if and when you want to port that program or library to other UNIX-y systems (e.g., MacOSX) in the future.

    Common things between Linux + Unix. They share:
        - GUI, file, and windows manager
        - Shells (ksh, csh, bash)
        - dev tools (perl, php, python, GNU c/C++)
        - POSIX interface
2. Go to / in your mac computer -- compare the output to / in your Digital Ocean droplet. Do they look alike? Why is this?
    The Root '/' directory of the mac computer is similar to the root directory of the ubuntu server on my DigitalOcean droplet because they are both unix based kernels and share virtual file systems (VFS) which dictates the way the files are organized on the disk. 
3. Where does MongoDB store its configuration files? 
    MongoDB stores it's config files in the following working directory: '/etc/mongod.conf'
4. "Everything in Unix is a file" is a common quote amongst the smart. Go to /proc on your droplet and find out why. Hint use $ps
    Everything in UNIX is a file means that due to the nature of the VFS of UNIX, special files also appear in the VPS, but they aren't actually files. They're special files that represent hardware devices, sysinfo, and other things. This allows you to treat these special files as if they are actual files and run commands such as `cat /proc/cpuinfo` to print this file's contents to the terminal. Remember, `/proc/cpuinfo` isn't actually a text file containing this information. The UNIX kernel and the proc file system are exposing this information to us as a file. This allows us to use familiar tools to view and work with the information. 
5. First navigate to each of these directories and attempt to define what they do. Then deny or confirm your hypothesis with the googs.:
    * /etc: contains the configuration files for the system. All of the files in `/etc` should be text files. 
    * /proc {special dir} this directory does not really exist at all.  
    * /bin: contains essential programs that the system requieres to operate. `/usr/bin` contains applications for the system's users
    * /dev: {special dir} contains devices that are available to the system. 
    * /var: contains files that change as the system is running.
    * /boot: contains boot loader files. 
6. run $ls -la what does rwxrwxrwx stand for?
    rwxrwxrwx, aka value 777, means that there are no restrictions on permissions. Anybody may do anything. This is generally not a desirable setting. 
7. When you run chmod 777 what are you effectively doing? Why do we use the number 7 for max permissions? For whom does each rwx apply to?
    When you run `chmod 777` you are effectively modifying the file access rights to no restrictions on permissions.
8. What is the PATH variable? Put the output of your OWN path variable here. How does it relate to /bin?
    PATH is an environment variable -- it tells the shell which directories to search for executable files in response to commands issues by a user.

    `cat $PATH: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/localgames: no such file or directory`
9. What is apt-get ? (Run this command and try it out)
    `apt-get` is afree package management command line program, that is used to work with Ubuntu's Advanced Packaging Tool (APT) to perform installation of new software packages and removing existing software packages, and upgrading existing softwares.
10. in the context of UNIX what do these characters mean? & (we used this):
    1. $
    2. ~ : this corresponds to the $HOME internal variable, i.e., the home directory. 
    3. / : Filename path seperator; separates the components of a filename
    4. .. : two dots denotes the parent directory
    5. . : one dot denotes the current directory
    6. a dot in front of a filename? : these files are hidden by default.

