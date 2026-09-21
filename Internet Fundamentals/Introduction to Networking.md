---
id: introduction
aliases: []
tags: []
---

## Network models

- **Topology**: How parts of a whole work together.
  - **Physical topology** refers to hardware and how computers, devices, and cables work together
  - **Logical topology** refers to how software controls access to the network

### Peer-to-Peer

- OS of each computer in the network controls access to the network
  - ==No centralized control==
- Computers, called nodes or hosts, form a logical group of computers and users
  - Each computer controls own administration, resources, and security
  - Each computer communicates directly with others
- Pros
  - Simple configuration
  - Less expensive
- Cons
  - Not scalable
  - Not necessarily secure
  - Not practical for large installations

### Client-Server

- A **network server operator (NOS)** controls access to the entire network
- Resources are managed by the server via a centralized database
- Computers are clients that request access from the server

#### Client-server applications

- **Network services** are the resources that a network makes available
  - A client computer requests data or a service from the server (a second computer)

#### Network services and protocols

Two primary internet protocols

- TCP (Transmission Control Protocol)
- IP (Internet Protocol)

Popular client-server applications

- Web service (HTTP(S))
- Email services (STMP, POP3, IMAP4)
- DNS service
- FTP service
- Database service
- Remote access service (telnet, SSH, RDP)

## Network Hardware

### LAN

**LAN (Local Area Network)** is a network contained in a small space (room, building).
Requires specialized compatible hardware on devices to connect.

Often a **switch** is used to create a wired LAN.

When all computers are connected to one switch, its called ==physical star topology==.
![[Pasted image 20260914104848.png]]

LAN can have several switches. **Backbone** is a central circuit that connects the segments of a network.

Hybrid topology combines other topologies.

### Routers

A **router** manages traffic between two or more networks.

Can be used in home LANs to connect the home LAN to the internet.

### MANs and WANs

A **WAN (Wide Area Network)** is a group of LANs that spread over a wide geographical area.

A **MAN (Metropolitan Area Network)** is a group of connected LANs in the same geographical area
- Also known as *campus area network (CAN)*

### Other network types

- PAN (Personal Area Network)
- BAN (Body Area Network)
- SAN (Storage Area Network)
- WLAN (Wireless Local Area Network)

## Network Diagrams

- Graphical representations of a networks devices and connections.
  - May show physical layout, logical topology, IP address reserves, names of major network devices, and types of transmission media
- Provide broad snapshots a network's physical or logical topology
  - Useful for planning where to insert a new switch or determining how particular routers, gateways or firewalls interact

![[Pasted image 20260914113750.png]]

### Network Mapping

Network diagrams often created by **network mapping** - process of discovering and identifying the devices on a network

- Nmap - one of the most popular tools for network mapping
- Zenmap - Nmap's GUI option

### Wiring diagram

![[Pasted image 20260914114446.png]]

Wiring schematic is a graphical representation of a network's wired infrastructure. Shows every wire necessary to interconnect network devices.

### Rack diagram

![[Pasted image 20260914114553.png]]

### Labeling and naming conventions

Can have labels on ports and tags on cables.
Tips for labelling and naming conventions:
- Use names that are as descriptive as possible
- Only include fields that are essential in identifying the device
- Don't overcomplicate the name with useless or redundant information
- Use established naming conventions
- Think big-picture-down-to-details

Additional tips:
- Consider any security risks from details included in the naming convention
- Use color-coded cables and use cable tags to identify each cable's purpose
- Label the ports and jacks that cables connect to
- Where labels won't fit on the device, draw a simple diagram of each device that indicates how each port is used
- Use labels that are durable and are designed to stick to plastic and metal

![[Pasted image 20260914115314.png]]

