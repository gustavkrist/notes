---
id: "Network Adressing"
aliases: []
tags: []
---
Four addressing methods:
- MAC
  - 48 bits, written as six hexadecimal numbers
  - Embedded on NIC (Network Interface Card)
- Network Layer IP address
  - IPv4 has 32 bits, written as four decimal numbers called octets ($2^{32} \sim 4\text{ billion}$ addresses)
  - IPv6 has 128 bits, written as eight blocks of hexadecimal numbers
- Transport layer port numbers
  - Allows to identify which process is being talked to on an IP
- Application layer FQDNs (fully qualified domain name), computer names, host names
  - Domain name: www.google.com
    - www: host
    - google: domain
    - com: TLD (top level domain)

## MAC Addresses

Two parts:
- First 24 bits are OUI (Organizationally Unique Identifier), or manufacturer-ID
  - Assigned by IEEE
- Last 24 bits is the extension identifier/device ID
  - Manufacturers assign each NIC a unique ID

Used by switches to identify devices on a LAN. Not used for communication on the internet.

## IP Addresses

- Static IP addresses assigned manually by network admin
- Dynamic IP addresses automatically assigned by DHCP server

### IPv4

- 32 bits in four groups of 8 bits (octets).
- Each octet can be 0 to 255
- Some reserved addresses
- All 4 billion almost exhausted

#### Classful addressing:

- Old way
- Five classes, Class A, B, C, D, E
- Dividing line between the network and host portions is determined by the class
- Class A has first octet as network address, remaining for host, for class B, first 2 are network address, for class C the first 3
- Class A, B, C public IP addresses
- IANA recommends IP addresses for private networks
  - 10.0.0.0 through 10.255.255.255 - Class A
  - 172.16.0.0 through 172.31.255.255 - Class B
  - 192.168.0.0 through 192.168.255.255 - Class C
- Range 127.0.0.0-127.255.255.255 used for loopback - allows processes on same device to communicate
  - 127.0.0.1 `localhost`
- All special blocks documented in RTF 6890

##### Drawbacks

- Very restrictive - org can either have very large, large, or very small network

#### Classless addressing

- Allows the dividing line between network and host portions to fall anywhere along the string of binary bits in the address
- Uses CIDR (Classless Interdomain Routing) notation
  - Takes network ID or host's IP address and adds a / at the end followed by number of bits used for the network ID

#### NAT (Network Address Translation)

- Technique for translating between multiple private IP addresses in a network and a single public IP
  - Router sends out packet from local host to the internet with the router's IP address instead
  - Assigns a certain port for the local host on the router so it knows which packet to send back to that host
- PAT (Port Address Translation) is the process of assigning a TCP port number to each ongoing session between a local host and Internet host
- Variations of NAT:
  - SNAT (Source Network Address Translation)
    - Gateway accepts the same public IP to a host each time it makes a request to Internet
    - Usually used for home networks - router has only one public IP
  - DNAT (Dynamic Network Address Translation)
    - Gateway has a pool of public addresses that it can assign freely to a local host when it makes an Internet request
    - Larger organizations might have a set of usable public IPs

![[Pasted image 20261004233401.png]]

### IPv6

- 128 bits written as eight blocks of two hexadecimal numbers separated by colons
- I.e. `2001:0000:0B80:0000:0000:00D3:9C5A:00CC`
- Each block is 16 bits
- Leading zeros in a four character block can be eliminated
- If blocks contain all zeroes, they can be written as double colons
  - Only one set of double colons is used in an address
  - Above example can be written in two ways using this rule:
    - `2001::B80:0000:0000:D3:9C5A:CC`
    - `2001:0000:B80::D3:9C5A:CC` (preferred because has fewest zeroes)
- Terminology:
  - Link (sometimes local link) is any LAN bounded by routers
  - Neighbors: two or more nodes on the same link
  - Dual stacked network is configured to use both IPv4 and IPv6
  - Tunneling is a method used by IPv6 to transport IPv6 packets through or over IPv4 network
    - Takes IPv6 packets and puts them in IPv4 packets
  - Interface ID is the last 64 bits (four blocks) of an IPv6 address, identifies the interface
    - Equivalent to the host portion of IPv4 address

#### Types of addresses

- Unicast address
  - Global address: can be routed (reached) on the Internet
  - Link local address: can be used for communication between neighbors
    - Like a private address in IPv4 world
  - Loopback address: can be used to test an interface and supporting protocol
    - `::1` for IPv6
- Multicast address
  - Delivers packets to all nodes on a network
- Anycast address
  - Can identify multiple destinations with packets delivered to the closest destination

![[Pasted image 20261004234121.png]]

#### IPv6 Autoconfiguration

- IPv6 designed so a computer can autoconfigure its own link local IP address
  - Process called SLAAC (Stateless Address Autoconfiguration)
- Step 1: Computer creates its IPv6 address
  - Uses `FE80::/64` as the first 64 bits (prefix)
  - Last 64 bits generated from network adapter's MAC address
- Step 2: Computer checks for IP address uniqueness on network
- Step 3: Computer asks if a router on the network can provide configuration information
  - This message is called an RS (router solicitation) message

### Ports and Sockets

- Port number assigned to a process that can receive data
  - 16 bit number
  - Ensures data is received by the correct process among multiple processes on same device
- Socket is a host IP and the port number of an application
  - I.e. `192.168.0.1:80`
- Port number divided into three types:
  - Well known ports: 0-1023
  - Registered ports: 1024-49151
  - Dynamic and private ports: 49152-65535
- Need different sockets i.e. for tabbed browsing
  - Google and Wikipedia both reached on port 80
  - Send back Google response to port 50000, Wikipedia response to 50001

![[Pasted image 20261004235314.png]]

