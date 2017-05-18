# Chapter 1 - CompTIA Network+ in a nutshell

## What is the exam like?

100 questions, 90 minutes to complete. Must get a passing score of 720 on a scale of 100-900. Comprised of multiple choice and performance based questions. Many of the test objectives deal with _real world trouble shooting_.

CompTIA Networking + Domain | Percentage
------------ | -------------
1.0 Network Architecture | 22%
2.0 Network Operations | 20%
3.0 Network Security | 18% 
4.0 Troubleshooting | 24%
5.0 Industry Standards, practices and network theory | 16%


# Chapter 2- Network Models

## The OSI 7-layer model

* __Layer 7 - Application__: this layer refers to the code built into all operating systems that enables network-aware applications. All operating systems have _Application Program Interfaces (APIs)_ that provide a standard way for programmers to enhance or extend an application's capabilities.
* __Layer 6 - Presentation__: this layer translates data from lower levels into a format usable by the application layer and vice versa. 
* __Layer 5 - Session__: this layer connects applications to applications (a session); this layer initiates sessions, accepts incoming sessions and opens and closes existing sessions. 
* __Layer 4 - Transport__: this layer is the assembler/disassembler software, where it breaks up the data into chunks called segments or datagrams. It also initializes requests for packets that weren't received in a good order. 
* __Layer 3 - Network__: At this layer, containers called packets get created and addressed so they can go from one network to another. This is the last layer that deals directly with hardware. ALl the other layers of the OSI seven-layer model work strictly within software. 
   * Routers are found here
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

#### IP - playing with layer 3, the Network Layer

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

## The TCP/IP model
this model consists of four layers:

1. Application
2. Transport
3. Internet: IP addressing occurs here, IP packets are created here, and routers are found here along with the magic used to get IP packets to the next router
4. Link/Network Interface: here resides the cabling, hubs, physical addresses and NICs


### The Link Layer
The TCP/IP model lumps together the OSI model's layers 1 & 2 into a single layer called the _Link Layer/Network Interface_. __Think about the TCP/IP model in packets and frames.__ Any part of the network that deals with complete frames is in the Link layer. The moment the frame information is stripped away from an IP packet, we move out of the link layer and into the Internet layer. 


### The Internet Layer
Aka the "IP packet" layer. Any device or protocol that deals with pure IP packets - getting an IP packet to its destination - sits in this layer. The Internet layer doesn't care about the type of data an IP packet carries, nor does it care if the data gets there in good order or not. 

### Transport Layer
This layer combines features of the OSI Transport & Session layers with a dash of Application layer.

#### Connection-Oriented vs. Connectionless Communication
Everything we do on the internet is split up into Connection-Oriented or Connectionless. The connection-oriented protocol is Transmission Control Protocol (TCP), and the connectionless protocol is _User Datagram Protocol (UDP)_

* TCP example: Post Office Protocol (POP), is used for sending e-mail messages, requires that the client and server verify they have a good connection before a message is sent -- you don't want your e-mail message to be a corrupt mess when it arrives
* UDP example: in Voice over IP (VoIP), the call is made without verifying first whether another device is there -- hence, why you can call someone even if they are offline

#### Segments within Packets
If we strip the IP address from an IP packet, what's left is a chunk of data in another container called the _TCP segment_.

* __TCP Segment__: has fields such as checksum, flags, acknowledgement etc. to ensure that the data gets to its destination in good order. 

__In TCP...__ Data comes from the application layer, then the transport layer breaks that data into chunks, adding port numbers and sequence numbers, creating the TCP segment. The transport layer then hands the TCP segment to the Internet layer, which in turn, creates the IP packet. 

__In UDP...__ UDP does the same as TCP, except since it doesn't care if the receiving computer gets its data, a UDP datagram lacks most of the extra fields found in TCP segments.

### The Application Layer
The TCP/IP _Application Layer_ combines features of the top 3 layers of the OSI model. Every app must know how to initiate, control, and disconnect from a remote system. 

From the TCP/IP's unique port numbering system, each app has a unique number from 1-65535. A well known port is the HTTP, the one that makes web pages work, uses port 80. 




## EXAM TIPS
* MAC Addresses are also known as _physical Addresses_
* Remember at what layer each encapsulation happens

TCP/IP Model Layer | Data Structure 
------------ | -------------
Link | Frame
Internet | IP packet
Transport | TCP segment/UDP datagram
Application | The data, or payload, starts and ends here


# Chapter 3 - Cabling & Topology 
_topologies_ are ways of connecting computers together

## Wired Networking Topologies

### Bus and Ring
The 1st generation of wired networks used these two topologies:
1. A __bus__ topology uses a single cable (the _bus_) to connect all of the computers in a line. 
    * a network using a bus topology needs termination at each end of the cable to prevent a signal sent from one computer from reflecting at the ends of the cable, which will bring the network down
2. A __ring__ topology connects one computer to the enxt in the same direction in a circle. 
    * a break in the ring network simply breaks the circuit, stopping the data flow


### Star
A __star__ topology uses a central connection box for all the computesr on the network. 
    * had huge benefit over ring + bus topologies; they provided _fault tolerance_, if one of the cables breaks, all of the other computers can still communicate


### Hybrids
Since it was too much of a technical burden to migrate from the 1st gen (bus + ring) topologies to stars, hybrids were born by shrinking the pre-existing 1st gen topologies into a small box, and appling a star topology over it. As a result, _star-ring & star-bus_ topologies were born. 

Any form of networking technology that combines a physical topology with a signaling topology is called a _hybrid_topology_.
* __physical topology__: how the cables physically looked
* __logical topology__: how the signals travel electronically

## Wireless Networking Topologies

### Mesh
In a mesh topology network, every computer connects to every other computer by no more than 2-degrees of separation. 
* __Partially Meshed__: at least 2 machines have redundant connections. Every machine doesn't have to connect to every other machine
* __Fully Meshed__: every computer connects directly to every other computer. 

### Point-to-Multipoint
In a point-to-multipoint network, a single system acts as a common source through which all members of the network converse. Similar to a star topology, except this wireless topology requires an intelligent device in the center, whereas the device in the center of star topology has little more to do than to send a signal down for all connections.

### Point-to-Point
two computer connect directly together with no need for a central device (found in both wired + wireless)


## Cabling and Connectors

### Copper Cabling & Connectors

* __Coaxial Cable__: contains a central conductor wire, surrounded by an insulating material, which is all surrounded by a braided metal shield. Called a 'co-ax'ial cable because the braided metal shield and center wire share a 'common-axis'
  * shields data transmissions from electromagnetic interference (EMI) caused by lights, fans, copy machines and other typical office items. EMI is dangerous because it can be interpreted by a NIC and shutdown a network. 
  * these cables are found today to:
      - connect a cable model to an Internet Service Provider (ISP)
      - connect cable boxes to televisions (lol - circa 2000s), but also use an _F-Connector_ that helps screws for a more secure connection

* __Twisted Pair__: cables that are composed of multiple pairs of wires twisted around each other at specific intervals. The twists reduced interference, called _cross-talk_. Two main types of twisted-pair cabling:
  1. _Shielded Twisted Pair (STP)_: twisted pairs of wires surrounded by shielding to protect them from EMI
  2. _Unshielded Twisted Pair (UTP)_: most common in network cabling today. Simply wrapped in plastic - doesn't provide protection from EMI. 

Category (CAT) ratings are rated in megahertz (MHz), indicating the highest frequency the cable can handle

CAT Rating | Max Frequency | Max Bandwidth | Status with TIA/EIA
------------ | ------------- | ------------ | ------------
CAT 3 | 16 MHz | 4 Mbps | Recognized 
CAT 5 | 100 MHz | 100 Mbps | No longer recognized 
CAT 6 | 250 MHz | 10000 Mbps | Recognized
CAT 6a | 500 MHz | 10000 Mbps | Recognized

### Fiber-Optic Cabling and Connectors
Fiber-optic cable transmits light rather than electrictiy, making it attractive for both high-EMI areas and long-distance transmissions. 

Fiber-optic cable has 4 components:
1. The glass fiber itself (the _core_)
2. the _cladding_; the part that makes the light reflect down the fiber 
3. _buffer_ material to give strength
4. the insulating jacket

Fiber-Optic Cable Connectors must be installed in pairs. 
* SC connector (stick and click): straight push in connector
* LC connector: always duplex; both the send and receive cables are attached (has two-pronged head) 
* ST connector (snap and twist): the bayonet-style connectors, have a stic
* FC connector: you screw it into place to eliminate problems with high frequency


    

## EXAM TIPS 
* Make sure you know all of your topologies!
* know all of your cables!
* The Network+ exam is only interested in your knowledte of CAT3, CAT5, CAT 6 and CAT 6a cables
* Need to know Fiber-Optic cable connectors: ST, SC, LC, and FC
* __Concentrate on UTP__ that's where the hardest CompTIA Network+ exam questions come into play. 
    - also review: coax, STP, and fiber-optics



# Chapter 4 - Ethernet Basics 

### History 
the original Ethernet used a single piece of coaxial cable in a bus topology to connect serveral computers, enabling them to transfer data at a rate of up to 3 Mbps :laughing:

## Ethernet Frames
Generic Ethernet Frame:

Preamble | Recipient MAC | Sender MAC | Type | Data | Pad | FCS 
------------ | ------------- | ------------ | ------------ | ------------ | ------------ | ------------

1. __Preamble__: All Ethernet frames begin with a preamble. The preamble is added by the sending NIC. It gives a receiving NIC time to realize a frame is coming and to know exactly where the frame starts.
2. __MAC Addresses__: MAC addresses give each NIC, often referred to as a _node_, a unique address. When a computer sends out a data frame it goes into the hub, the hub repeats an exact copy of that frame.  

__NOTE - How data is sent and received:__ All the other computers on the network listen to the wire and examine the frame to see if it contains their MAC Address. If it does not, they ignore the frame. If a machine sees a frame with its MAC address, it opens the frame and begins processing the data.

__WARNING__ :-1:: There is a _significant_ security risk with Ethernet networks. Network diagnostic programs, called _sniffers_ can order a NIC to run in _promiscuous mode_ -- in this mode, the NIC processes all the frames it sees on the cable, regardless of their MAC addresses. 

3. __Type__: an ethernet frame may carry one of serveral types of data. Tyhe type field helps the receiving computer interpret the frame contents at a very basic level

4. __Data__: the main payload 
5. __Pad__: min size for Ethenert frame is 64 bytes. If the frame has less than that, the sending NIC will add extra data, aka a _pad_ to meet the requirement
6. __Frame Check Sequence (FCS)__: enables Ethernet nodes to recognize when bad things ahppen to good data.

## CSMA/CD
_Carrier sense multiple access/collusion detection_ is used to determine which computer should use a shared cable at a given time. Broken down....

* _Carrier sense_  means that each node using the network examines the cable before sending a data frame. If the cable is "free", the node sends out its frame.
* _Multiple Access_ means that all machines have equal access to the wire. If the line is free any ethenernet node may send a frame. 

_What happens if two machines, listening to the same cable, send a frame simultaneously?_ 

A __collision__ occurs, and both transmissions are lost. When 2 NICs send at the same time, they immediatly know that a collision has occured and both nodes stop transmitting. :star: They then send generate a random number (RNG) to determine how long to wait before trying again. Whichever node generates the lowest random number begins its retransmission first, winning the competition to use the wire first (_lol @ runescape pid system reference_) :star:

* __Collision Domain__: group of nodes that have the capability of sending frames at the same time as each other, resulting in collisions. 

## Early Ethernet Networks
MAC addresses identify each machine on the network. CSAMA/CD determines which machine should have access to the cable, but how do we actually apply it all?

### Bus Ethernet
The original Ethernet networks employed a true bus topology, meaning every computer on a network connected to the same cable, the bus. 

### 10BaseT
10BaseT became the most popular network technology in the world -- it uses unshielded twisted-pair (UTP) cabling. Now over 99% of all networks use 10BaseT or one of its newer versions. The biggest differentiator between the 10BaseT hubs are the number of _ports_ (connections) that a single hub provides -- the more ports the more expensive the hub. 

The name 10BaseT broken down 
* the number _10_ refers to the speed: 10Mbps
* _Base_ refers to the signaling type: baseband (_Baseband_ means that the cable only carries 1 type of signal, where as with _broadband_, the cable carries multiple signals or channels)
* The letter _T_ refers to the type of cable used: twisted pair

### UTP
Officially, 10BaseT requires the use of CAT 3 (or higher), two-pair, unshielded twisted-pair (UTP) cables. One pair of wires sends data, while the other receives data from the hub. 

* _RJ-45 Connector_, aka a _crimp_, is a 8 pinned connector for cables enabling voltage on each individual wires, introduced by 10BaseT

### 10BaseFL
* Speed: 10 Mbps
* Signal Type: Baseband
* Distance: 2k meters between node and hub
* Node limit: max 1024 nodes
* Topology: Star-bus, physical star, logical bus
* Cable Type: multiemode fib-optic cabling with ST or SC connectors

### Connecting Ethernet Segments
* You can connect more than two hubs using either:
    1. __Uplink ports__: allows you to connect 2 hubs using a _straight-through_ cable (must be daisy-chained: from one uplink port to one regular port)
    2. __Crossover Cable__: uses a special cable to connect 2 hubs. These don't have to be dasiy-chained
      
* You can also connect Ethernet segments using a bridge

### Bridges 
a _bridge_ acts like a repeater or hub to connect 2 Ethernet networks, but it does filtering and fowarding traffic between those segments based on the MAC addresses of the computers on those segments, preserving bandwidth. 

## Switched Ethernet
Hubs were so and ineffective, so along came switches. Switches are basically hubs except with more smarts -- they act as a telephone operator, and create on-the-fly connections between two devices. What this means is:
* Each port on a switch is in its own collision domain, plus the switch can buffer incoming frames -- meaning 2 connected nodes to a switch can send data at the same time and the switch will handle it w/o any collision :clap:

### Spanning Tree Protocol (STP)
* __Bridging Loops (aka Switching Loops)__: Redundant connections in a network with switches (because you can connect switches together in any fashion)

A switching loop in a network setup would bring the network down. Ethernet standards used the STP to eliminate problems of accidental switch loops using a frame called _Bridge Protocol Data Unit (BDPU)_ to communicate distances and changes on the network. 

## EXAM TIPS
* the terms _frame_ and _packet_ are used interchangeably, especially on the exams.  Remember that packets are associated with data assembled by the IP protocol at layer 3 of the OSI seven-layer model. 
* If you ever run into a situation on a 10BaseT or later network in which none of the computers can get on the network, always check the hub first
* The names of two earlier physical bus versions of Ethernet, 10Base5 and 10Base2 gave the maximum length of the bus
    * __10Base5__ up to 500 meters long
    * __10Base2__ up to 185 meters
* Two terms you might see on hubs and switched and consequently, on exams are MDI and MDIX. a _media dependent interface_ (MDI) is a regular port on a hub or a switch. A _media dependent interface crossover_ (MDIX) is an uplink port.
* Remember the 3 types of copper cables: straight-through vs. crossover vs. rollover.  
    * Straight-through uses the same standard for the RJ-45 on both ends
    * x-over uses 568A on one end and 568B on the other. 
    * A _rollover_ cable has an RJ-45 on one end and a class RS-232 serial port on the other. They're used to connect a laptop or other computers directlry to a Cisco switch or router. 
* One classic difference between a hub and a switch is in the repeating of frames during normal use. Although it's true that switches initially forward all frames, they filter by MAC address in regular use. Hubs never learn and always forward all frames. 
* When presented with a question about _broadcast domains vs. collision domains_: in early pre-switched Ethernet networks, there was no difference between the 2. All broadcast traffic went to all nodes; all nodes connected to the same bus and thus collisions occured. __Switches eliminated collisions among the nodes attached to the switches within a broadcast domain__
    
    
  
    
