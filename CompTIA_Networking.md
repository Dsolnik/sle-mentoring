# Chapter 1 - CompTIA Network+ in a nutshell

## What is the exam like?

100 questions, 90 minutes to complete. Must get a passing score of 720 on a scale of 100-900. Comprised of multiple choice and performance based questions. Many of the test objectives deal with _real world trouble shooting_.

CompTIA Networking+ Domain | Percentage
------------ | -------------
1.0 Network Architecture | 22%
2.0 Network Operations | 20%
3.0 Network Security | 18% 
4.0 Troubleshooting | 24%
5.0 Industry Standards, practices and network theory | 16%


# Chapter 2- Network Models

## The OSI 7-layer model

* __Layer 7 - Application__:
* __Layer 6 - Presentation__:
* __Layer 5 - Session__:
* __Layer 4 - Transport__:
* __Layer 3 - Network__: At this layer, containers called packets get created and addressed so they can go from one network to another. This is the last layer that deals directly with hardware. ALl the other layers of the OSI seven-layer model work strictly within software. 
* __Layer 2 - Data Link__: Any device that deals with a MAC address is part of this layer. __The Data Link layer is the _only_ layer that has sublayers: the LLC and MAC.__
    * NIC is found here, although it is argued to be at Layer 1 since it puts the ones and zeroes on the network cable, but the most common approach is that it's at layer 2
* __Layer 1 - Physical__: This layer defines the method of moving data between computers. Anything that moves data from one system to another is apart of the Physical Layer.
    * Cabling, hubs, and switches are found here

### Network Hardware and Layers 1-2

* __Unshielded Twisted Pair (UTP)__: contains four pairs of wires that can transmit and receive data
* __Networking Interface Card (NIC)__:serves as the interface between the PC and the network

#### MAC Addresses

* __Media Access Control (MAC) Address__: inside every NIC, burned onto some type of ROM chip, is a 48-bit unique identifier that is called the MAC address
  * example MAC address `004005-607D49` which is represented as `00-40-05-60-7D-49`
      - the first 6 digits, `00-40-05` represent the number of the NIC manufacturer, referred to as the _Organizationally Unique Identifier_ (OUI); no two manufactureres can share the same OUI
      - the last 6 digits, `60-7D-49`, are the manufacturer's unique serial number for the NIC, referred to as the _device id_
* __Frame__: a container for a chunk of data moving across a network. The NIC creates and sends, as well as receives and reads these frames.

Example Frame:

Recipient's Mac Address | Sender's MAC Address | Type | Data | FCS
------------ | ------------- | ------------ | ------------- | ------------ 


* _Type_: indicates the specific technology of the frame
* _Data_: NICs send and receive binary data through pulses of electricity. NIC doesn't care what's in the data part of the frame, only is concerned about sending it. 
* _FCS_: uses a type of binary math called cyclic redundancy check that the receiving NIC uses to verify that the data arrived intact

#### Into the Central Box aka The Hub
the __hub__ was a dumb device,  essentially just a repeater. WHen it received a frame, it duplicated the original frame and sent a copy to every other system on the network. 

the __switch__ later replaced the hub, which basically filtered traffic by MAC address. Rather than sending all incoming frames to all network devices connected to it, a switch sends the frame only to the recipient MAC address.

#### Two aspects of NICs

Two distinct jobs  a NIC performs to keep this data data moving:
1. __Logical Link Control__: the aspect of the NIC that talks to the system's Operating System. The LLC handles multiple network protocols and provides flow control.
2. __Media Access Control (MAC)__: creates and addresses the frame. It adds the NIC's own MAC address and attaches MAC addresses to the frames. 

### Beyond the Single Wire - Network Software (Layers 3-7)
* __Network Protocol__: creates unique identifiers for each system, and creates a set of communication rules for issues like how to handle data chopped up into multiple packets and how to ensure those packets get from one subnet to another. 

#### TCP/IP

TCP/IP is really several network protocols designed to work together, aka a _protcol suite_. 
TCP stands for _Transmission Control Protocol_, and IP stands for _Internet Protocol_. 

* IP is the primary logical addressing protcol for TCP/IP. it makes sure that a piece of data gets to where it needs to go on the network. It does this by giving each device on the network an __IP Address__, often refered to as the _logical address_ to distinguish itself from the physical address (MAC)
  * IP uses a unique dotted-octet number system, basd on four 8-bit numbers. Each 8-bit number rangers from 0-255, and the 4 numbers are separated by periods. 
  * __No two systems on the same network share the same IP address__
* What makes logical addressing powerful is the __router__, that connects each of the subnets. Routers use the IP address, not the MAC address to foward data. 

In a TCP/IP network, each system has 2 unique identifiers: the MAC and IP address.
* MAC addresses are burned onto the chips of the NIC
* IP addresses are simply stored in the system's software

#### Packets within Frames
For a TCP/IP network to send data successfully, the data must be wrapped up in two distinct containers. The inner container is called a _packet_; 

Example IP Packet:

Destination IP Address | Source IP address | Data
------------ | ------------- | ------------ 

Each IP packet is handed to the NIC, which then encloses the IP packet in a regular frame, creating a _packet within a frame_. 


## EXAM TIPS
* MAC Addresses are also known as _physical Addresses_
