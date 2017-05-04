## Port

A **port** is an endpoint of communication in an OS. 
* A port is always associated with an IP address of a host and the protocol type of the communication.
* A port is identified for each address and protocol by a 16-bit number, commonly known as the **port number**


## What is a socket? 

A socket is the pair of an IP Address _AND_ a Port. A socket pair (the 4-tuple consisting of the client IP address, client port number, server IP address, and server port number) that specifies the two endpoints that uniquely identifies each TCP connection in an internet. (TCP-IP Illustrated Volume 1, W. Richard Stevens)



http://beej.us/guide/bgnet/output/html/multipage/index.html 

## What is a file descriptor

A file descriptor is just an integer number that uniquely represents an opened file in operating system.

## some system calls to know

- `socket()`: creates an endpoint for communication and returns a descriptor.
- `connect()`: initiates a connection on a socket
- `listen()`: listen for connections on a socket 
- `accept()`: accept a connection on a socket
