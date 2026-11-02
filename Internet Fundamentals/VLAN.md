---
id: VLAN
aliases: []
tags: []
---

![[Pasted image 20261029233758.png]]

> [!info] VLAN Definition
> A VLAN (Virtual Local Area Network) groups ports on a managed switch such that some of the local traffic must travel through a router

- Create multiple separate broadcast domains on a single set of switches
- Simulate separate LANs without adding additional hardware to create the LANs physically
- Devices in same VLAN can communicate directly via Layer 2 (through the switches)
- To send message to a device on separate VLAN, communication has to go via the Router
  - Router handles sending messages between broadcast domains
- Benefits of VLAN
  - Identify groups of devices whose data should be given priority handling
  - Isolate connections with heavy or unpredictable traffic patterns
  - Isolate groups of devices that rely on legacy protocols incompatible with the majority of the network's traffic
  - Separate groups of users who need special security or network functions
  - Configure temporary networks
  - ***Reduce the cost of networking equipment***

![[Pasted image 20261029234744.png]]

- Can be configured via CLI or web interface
  - VLAN only possible to implement through managed switches whose ports can be partitioned into groups

### 802.1Q Tag

- Switch adds a tag to the Ethernet header that identifies the VLAN ID the transmission belongs to
- Tag travels with transmission until it reaches the switch port connected to target device
- If frame gets routed to a net VLAN, router adds a new tag
- VLANs are invisible to hosts on the network

![[Pasted image 20261029235104.png]]

### Trunking

- Needed for VLANs with multiple switches
- Two types of VLAN ports on a switch that supports them:
  - Access port - connects switch to a host
  - Trunk port - connects switch to a networking device (other switch, router) and manages traffic from multiple VLANs
    - Carries traffic from all other VLANs
- Trunking protocols assign and interpret VLAN tags in Ethernet frames
  - Cisco VTP (VLAN Trunking Protocol) most popular
    - VPT allows changes to a VLAN database on one switch (called the stack master) to be communicated to all other switches in the network

![[Pasted image 20261029235417.png]]
![[Pasted image 20261029235616.png]]

## VLANs and Subnets

- In most cases, VLANs are assigned their own subnet of IP addresses
- The router sees multiple logical LANs connected to a single router port

![[Pasted image 20261029235707.png]]
![[Pasted image 20261029235818.png]]

- Multiple sub-interfaces for the single router port
  - The one port on the router ends up having multiple separate IP addresses

## Types of VLANs

Common VLAN types include the following:
- Default VLAN – typically preconfigured on a switch and initially includes all switch ports
- Native VLAN – receives all untagged frames from untagged ports
  - Same as default VLAN by default
    - Security risk when they are the same, when untagged traffic is able to travel in a VLAN-managed network
    - Native VLAN should be changed to an unused VLAN to protect the network, so the traffic runs into a dead end
- Data VLAN – carries user-generated traffic, such as email, web browsing, or database updates
- Management VLAN – can be used to provide administrative access to a switch
  - Might be the same as default VLAN by default, should be changed to avoid security risk
- Voice VLAN – supports VoIP traffic
- Private VLAN – partitions a VLAN broadcast domain into subdomains
- Two types of secondary VLANs are:
  - Isolated VLAN
    - Can communicate with devices in the primary VLAN
    - Isolated from hosts in the same and in other secondary VLANs
  - Community VLAN
    - Hosts within same community VLAN can communicate directly with each other
    - Cannot communicate with hosts in other community VLANs
  - Some hosts may be connected on a "promiscuous port"
    - Can allow a server/default gateway/etc to communicate into the secondary VLANs

![[Pasted image 20261030000315.png]]

## Dynamic VLAN Assignment

- Device may receive a dynamic VLAN assignment according to:
  - Client device information (MAC address, location)
  - Authentication processes in cooperation with a RADIUS server can be used to distinguish which traffic should be assigned to which VLANs
    - E.g. which VLAN the device should join based on which department they are part of
  - Devices that have not yet authenticated to the network or failed authentication can be placed in quarantine VLAN
    - Can futher break up VLAN based on authentication method/which access point is used
  - All WLAN traffic may be grouped within the same VLAN

## Troubleshoot and Secure VLANs

- Common configuration errors include the following:
  - Incorrect VLAN assignment – can happen due to a variety of situations
    - I.e. device connected to wrong switch port
  - Incorrect port mode – switch ports connected to endpoints should nearly always use access mode
  - VLAN isolation – you can potentially cut off an entire group from the rest of the network
- VLAN hopping occurs when an attacker generates transmissions that appear to belong to a protected VLAN
  - The attacker then crosses VLANs to access sensitive data or inject harmful software
- There are two approaches to VLAN hopping:
  - Double tagging
    - Hacker stacks multiple VLAN tags in a single Ethernet frame
    - First tag (possibly legitimate) is removed by switch
    - Now the second (illegitimate) tag is revealed
    - Switch forwards frame to a restricted VLAN
  - Switch spoofing
    - Attacker connects to a switch and makes it looks like a trunk line
    - Hacker can feed their own VLAN traffic into the port and reach VLANs throughout the network

### Mitigation for VLAN Hopping

- Mitigation efforts to reduce the risk of VLAN hopping include the following:
  - Don’t use the default VLAN
  - Change the native VLAN to an unused VLAN ID
  - Disable auto-trunking on switches that don’t need to support traffic from multiple VLANs
  - On switches that carry traffic from multiple VLANs, configure all ports as access ports unless they are used as trunk ports
  - Specify which VLANs are supported on each trunk instead of accepting a range of all VLANs
  - Use physical security methods such as door locks to restrict access to network equipment
