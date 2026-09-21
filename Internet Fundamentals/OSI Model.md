---
id: "OSI Model"
aliases: []
tags: []
---

## OSI Model

The **Open Systems Interconnect Model**.

ISO developed model from 1980s. Separates the operations needed for network communication into 7 layers to simplify understanding and research.

![[Pasted image 20260918144915.png]]

- tcp/ip protocols are responsible for getting an application layer protocol from one end to the other
- might need to break message down into smaller messages (TCP or UDP) to pass to the network layer
- Each of the higher layers rely on the layers below

Application, presentation, and session layer are often intertwined and hard to distinguish, all happen at the OS layer typically through API calls to the OS.

### Application Layer

- Describes the interface between two web apps on separate computers.
- The data that is passed between the applications or the utility program and OS is a payload
- Higher layer protocols like HTTP(S) doesn't need to know how to get the data from one computer to the other
  - HTTP(S) job is to know the format of the data

### Presentation Layer

- Includes processes for reformatting, compressing and/or encrypting data
- Does these in a way the receiving application can read

### Session Layer

- Describes how data between applications is synced in case of dropped or corrupt packets

### Transport layer

- Transport application layer payloads between applications
  - TCP
    - Transmission Control Protocols - Checks that data is received by end host, re-sends if not
  - UDP
    - User Datagram Protocol - Does not guarantee delivery by checking whether it is received
  - UDP is quicker if TCP error checking is not required
- Takes data from application layer and adds control information in a header
  - Called **encapsulation**
- Transport layer header addresses receiving application by a port number
- TCP divides large messages into smaller ones called **segments**
- UDP splits messages into **datagrams**

### Network Layer

- Moves messages from one node to another until they reach the destination host
- Routers are network layer devices and some switches also function at network layer
- Uses mainly **IP (Internet Protocol)**
- IP adds network layer header to the segment or datagram
  - Network layer message is called a packet
  - Network layer protocol will divide large packets into smaller packets
    - Process called **fragmentation**

### Data Link Layer

- Used to get data between two devices across a local network
- Basic switches are at this layer
- Interface with physical hardware on the local network
  - Protocols at this layer are programmed into firmware or NIC or other hardware
- Ethernet and WiFi are data link layer protocols
- Also encapsulates data by creating a **frame** which is the entire data link layer message
- Uses **MAC (Media Access Control) addresses** to address other devices
  - Every network adapter has a unique MAC address

### Physical Layer

- Sending actual bits through wire or wireless transmission
  - Wavelengths in air
  - Voltage on copper wire
  - Light via fibre-optic cabling

### PDU (Protocol Data Unit)

Name of group of bits moving from one layer to the next and from one LAN to the next.

![[Pasted image 20260918152612.png]]

![[Pasted image 20260918152723.png]]
