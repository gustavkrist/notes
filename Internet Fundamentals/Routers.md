---
id: Routers
aliases: []
tags: []
---
## Routers and how they work

- Joins two or more networks and passes packets between them
- Consists of processor, OS, memory, and ports
- Can do:
  - Connect dissimilar networks (LANs, WANs)
  - Internet layer 3 and often layer 4 addressing
    - I.e. Ethernet network to WAN network
  - Determine best path for data from point A to B
  - Reroute traffic if first choice path is down but another is available
- Optional functions
  - Filter broadcast transmissions
  - Simple firewall
  - Allow remote connections to network, i.e. VPN
  - Network fault tolerance through redundant components, i.e. power supplies
  - Monitor network traffic
  - Diagnose internal and connectivity problems and trigger alarms

### Router Categories

- Core routers/interior routers
  - Direct data between networks within same autonomous system (AS)
- Edge routers/border routers
  - Connect an AS to an outside network
- Exterior routers
  - Refers to any router outside the organisations AS

![[Pasted image 20261025231205.png]]

### Autonomous System

- Collection of networks under common administration (single org, ISP, sysadmin)
  - Sharing common routing strategy
- ICANN, ISP or administrator assigns a unique AS number to the AS
  - Uniquely distinguishes from other AS around the world
  - Each AS has own set of rules and policies

![[Pasted image 20261025231347.png]]

### Multilayer Switches

- Routers operate at layer 3
- Traditional switches operate at layer 2
- Layer 3 switch is capable of interpreting layer 3 data and works similar to a router
  - Usually faster and cheaper
  - Primary difference is in hardware
- Layer 4 switch
  - AKA content or application switch
  - Enables switch to perform advanced filtering, keep statistics, provide security functions
  - Typically used as part of network backbone

### Routing Tables

- Database with information about where hosts are located and most efficient ways to reach them
  - Used by routers to identify next hop on the way to target host
- Contain IP addresses and network masks to identify a network that a host or other router belongs to

#### Routing Path Types

- Static routing
  - Network administrators configure routing table to direct messages along specific paths
    - E.g. between business and ISP
- Dynamic routing
  - Best paths between networks are created automatically and maintained in a routing table
    - Router can detect problems with failed or congested paths and redirect through a different path

#### `route` command

- Shows the host's routing table
  - `route` in Linux/UNIX system
  - `route print` on Windows
  - `show ip route` on Cisco IOS (on Cisco routers)

#### Routing metrics

- Used by routers to determine best path
- Hop count
- Theoretical bandwidth and actual throughput
- Delay, latency
- Load, or traffic/processing burden
- MTU (maximum transmission unit) or largest IP packet size allowed without fragmentation
- Routing cost, or value assigned to a particular route
- Reliability of potential path
- Topology of a network

### Protocols to determine best paths

- Used by routers to communicate with each other to determine best path
- Rate reliability and priority of routing protocols data based on:
    - Administrative distance (AD) - indicated the protocol's reliability
    - Convergence time - time to recognize best path in the event of change or outage
    - Overhead - burden placed on the underlying network to support the protocol

| Routing Protocol | Type | Algorithm Used |
| --- | --- | --- |
| RIP (Routing Information Protocol) | IGP | Distance-vector |
| RIPv2 (Routing Information Protocol, version 2) | IGP | Distance-vector |
| OSPF (Open Shortest Path First) | IGP | Link-state |
| IS-IS (Intermediate System to Intermediate System) | IGP | Link-state |
| EIGRP (Enhanced Interior Gateway Routing Protocol) | IGP | Advanced distance-vector |
| BGP (Border Gateway Protocol) | EGP | Advanced distance-vector or path vector |

#### IGP (Interior Gateway Protocol)

- Used by core routers and edge routers within AS
- Often grouped by algorithms used to calculate best paths
  - Distance-vector routing protocols - calculate path based on distance to destination
    - Number of hops, latency, etc.
    - Periodically exchange routing tables with nearby routers even without a change in routes
    - Must accept data from neighbors, cant self-asses network conditions 2 or more hops away
      - Routing by rumour limitation
    - Slow, older form because it takes lots of time to calculate
  - Link-state routing protocols
    - Enables communication beyond neighboring routers
    - Routers can independently map the network and determine best path
    - Adapt more quickly to network changes
    - Can be more complex to configure and troubleshoot
    - Require more processing power to build each device's routing table
      - Offset a bit by only sending information when something changes
  - Can also have hybrid routing protocols with elements from both

##### OSPF

- IGP and link-state protocol
- Replacement for RIP
- Supports large networks - no hop limits
- More complex algorithm for determining best paths
- Shared data - maintains database of other routers' links
- Low overhead, fast convergence
  - More memory and CPU power for calculations, but low network bandwidth
- Stable - algorithms prevent routing loops
- Supported by all modern routers from different vendors

##### IS-IS (Intermediate System to Intermediate System)

- IGP and link-state routing protocol
- Uses best-path algorithm like OSPF
- Core routers only (no edge routers)
- Not handcuffed to IPv4 (like OSPF), easy to adapt for IPv6
- Generally proffered to OSPF, more scalable

##### EIGRP (Enhanced Interior Gateway Routing Protocol)

- Initially proprietary to Cisco routers
- Uses advanced distance-vector combining features of link-state protocol
- Fast convergence time and low network overhead
- Easier to configure and less CPU-intensive than OSPF
- Supports multiple protocols and limits unnecessary network between routers

#### EGP (Exterior Gateway Protocols)

##### BGP (Border Gateway Protocol)

- Only current EGP in use, known as the "protocol of the Internet"
- Can span multiple AS
- Used by edge and exterior routers
- Path-vector protocol via BGP-specific messages between routers
- Determines best path based on many different factors
- Can be configured to follow policies avoiding a certain router or preferring a particular route
- Most complex routing protocols

#### ARP Tables and Routing Tables

![[Pasted image 20261025234437.png]]

- Each router has its own routing table
- ARP table tells within a local network, what is the MAC address for each IP address
  - Separate ARP table for each interface

### Forwarding and IP Packet

![[Pasted image 20261025235019.png]]

- Frame is received at a router interface
  - MAC address checked to see if frame is addressed to router interface or is a broadcast
  - Frame header and trailer removed, packet passed up to layer 3
  - Routing table examined for a match with the destination IP address of the packet
  - A match will identify IP address of directly connected next hop interface
  - Next hop IP is only used to look up the MAC address of the next hop interface in the ARP table to construct a frame
  - Packet is placed into a new frame with the MAC address of next hop interface as the destination address
  - Frame is queued on appropriate outgoing interface until it is transmitted
