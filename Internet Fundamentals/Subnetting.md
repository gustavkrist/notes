---
id: Subnetting
aliases: []
tags: []
---
Network segmentation:
- When network is segmented into multiple smaller networks
  - Traffic on one network is separated from another network's traffic
  - Each network gets its own broadcast domain
- Accomplishes:
  - Enhanced security
  - Improved performance
  - Simplified troubleshooting

![[Pasted image 20261026003248.png]]

## Why Subnets?

- Without subnet:
    - Only a single LAN or broadcast domain
    - One router serves as the default gateway for the entire network
  - Subnets allow better network traffic management
  - Each subnet connects to the router on a separate interface

## Subnet Masks

- IPv4 address divided into two parts - network ID and host ID
- Subnet mask used so devices can determine which part of an IP address is the network ID and which is the host ID

> [!example]
> - The number of 1s in the subnet mask determines the number of bits in the IP address belong to the network ID
> - IP address 192.168.123.132 in binary:
>   `11000000.10101000.01111011.10000100`
> - Subnet mask 255.255.255.0 in binary:
>   `11111111.11111111.11111111.00000000`
> - Network ID: 192.168.123.0 in binary:
>   `11000000.10101000.01111011.00000000`
> - Host portion: 0.0.0.132

## Calculating Subnets

### Classful IPv4 addressing

- Class A, B and C
- Class A: first octet (8 bits) is network ID
    - Default subnet mask: `255.0.0.0`
      - `/8` CIDR mask
  - Class B: first two octets (16 bits) is network ID
    - Default subnet mask: `255.255.0.0`
      - `16` CIDR mask
  - Class C: first three octets (24 bits) is network ID
    - Default subnet mask: `255.255.255.0`
      - `/24` CIDR mask
- Subnetting alters the rules of classful IPv4 addressing
- To subnet a network, borrow bits that would represent host information in classful addressing
  - Use those bits instead to represent network information
    - Increase the number of bits available for the network ID (increase number of networks)
    - Reduce number of bits available for identifying hosts (decrease number of hosts per network)

## Subnetting

| Binary Representation | Host/Network Bits |
| --- | --- |
| 11000000.10101000.00001010.00000000 | NNNNNNNN.NNNNNNNN.NNNNNNNN.HHHHHHHH |

We borrow two host bits to create subnets

| Binary Representation | Host/Network Bits |
| --- | --- |
| 11000000.10101000.00001010.00000000 | NNNNNNNN.NNNNNNNN.NNNNNNNN.SSHHHHHH |

We have $2^{S}$ subnets and $2^{H}$ hosts

Think about:
- How many subnets do we need
- How many hosts do we need per subnet

2 of the addresses in the subnet are unusable
- Subnet address - host bits all set to 0
- Broadcast address - host bits all set to 1

### Subnetting Example (Class C)

> [!example]
> - Burrow 2 bits for subnets
>   - 4 subnets
>   - 64 addresses
>   - 2 reserved -> 62 host usable addresses
>
> | Subnet # | Subnet ID | Broadcast ID | Host Range |
> | --- | --- | --- | --- |
> | 0 | 192.168.10.0 | 192.168.10.63 | .1 - .62 |
> | 1 | 192.168.10.64 | 192.168.10.127 | .65 - .126 |
> | 2 | 192.168.10.128 | 192.168.10.191 | .129 - .190 |
> | 3 | 192.168.10.192 | 192.168.10.255 | .193 - .254 |
>
> Subnet mask is `/26` for `255.255.255.192`

### Using Subnet Mask to Extract Subnet Address

| Packet Address | 192.168.10.71   | 11000000.10101000.00000101.010 | 00111 |
| Subnet Mask    | 255.255.255.224 | 11111111.11111111.11111111.111 | 00000 |
| Subnet Address | 192.168.10.64   | 11000000.10101000.00000101.010 | 00000 |

Router ANDs the subnet mask with packet address to determine the subnet address

### VLSM (Variable Length Subnet Mask)

- Can further divide subnets into smaller and smaller grouping until each subnet is the size of the necessary amount of usable addresses
  - "Subnetting a subnet"
- To create VLSM:
  - Create largest subnet first
    - Ensures all subnets fall on valid boundaries/starting addresses
  - Create next one
  - So on and so on

![[Pasted image 20261029230905.png]]


| Subnet | Included hosts | Number of hosts | Subnet size |
| ---    | ---            | ---             | ---         |
| 1      | Sales          | 120             | 128         |
| 2      | Accounting     | 58              | 64          |
| 3      | HR             | 25              | 32          |
| 4      | IT             | 6               | 8           |
| 5      | Executives     | 5               | 8           |
| 6      | WAN link       | 2               | 4           |
| 7      | WAN link       | 2               | 4           |

- Start with largest subnet first and go down in order of size
- I.e. /25 must start on addresses x.y.z.0 or x.y.z.128
  - For /26 its .0, .64, .128, .192, etc.
- Starting with largest subnet ensures there will be a valid starting address for it, and the next one will begin on a valid starting address as well

![[Pasted image 20261029231759.png]]

> [!example]
> Suppose we have `160.160.128.0/20`
>
>
> | Subnet     | Hosts | Subnet size | Host bits | Subnet address     | B/cast address     |
> | ---        | ---   | ---         | ---       | ---                | ---                |
> | TSV LAN    | 600   | 1024        | 10        | 160.160.128.0/22   | 160.160.131.255/22 |
> | CNS LAN    | 200   | 256         | 8         | 160.160.132.0/24   | 160.160.132.255/24 |
> | BRIS LAN   | 90    | 128         | 7         | 160.160.133.0/25   | 160.160.133.127/25 |
> | SING LAN 1 | 50    | 64          | 6         | 160.160.133.128/26 | 160.160.133.191/26 |
> | SING LAN 2 | 20    | 32          | 5         | 160.160.133.192/27 | 160.160.133.223/27 |
> | CNS-BRIS   | 2     | 4           | 2         | 160.160.133.224/30 | 160.160.133.227/30 |
> | BRIS-TSV   | 2     | 4           | 2         | 160.160.133.228/30 | 160.160.133.231/30 |
> | TSV-CNS    | 2     | 4           | 2         | 160.160.133.232/30 | 160.160.133.235/30 |
> | CNS-SING   | 2     | 4           | 2         | 160.160.133.236/30 | 160.160.133.239/30 |

## Supernetting

- Combine contiguous networks (all use same CIDR block) into a supernet
- Called classless routing/IP address segmentation
- Reduces number of routing table entires by combining several entries
- Allows company to create a single network of more than one Class C license

![[Pasted image 20261029232556.png]]

> [!example]
> Let's calculate the supernet for
> - 209.224.18.0/24
> - 209.224.21.0/24
> - 209.224.22.0/24
>
> | Dissimilar Octet   | Convert to binary | Determine common bits |
> | ---                | ---               | ---   | ---           |
> | 18                 | 00010010          | 00010 | 010           |
> | 21                 | 00010101          | 00010 | 101           |
> | 22                 | 00010110          | 00010 | 110           |
> | Supernet octet is: |                   | 16    |               |
>
> - The first two octets are the same, so 16 bits initially in common.
> - 5 bits in common: so mask is 16 + 5 = 21
> - Supernet: 209.224.16.0/21

## IPv6 Subnets

- No classes
- No subnet masks
- Single IPv6 subnet can supply 18,446,744,073,709,551,616 (2^64) IPv6 addresses
- Subnetting helps manage the enormous amount of IPv6 addresses
- IPv6 address has eight blocks, first four are network prefix (or site prefix, global routing prefix), last four are interface ID
  - Fourth block in network prefix can be altered to create subnets (last 16 bits)
    - 2^16 = 26636 different subnets
  - Subnet has 64 blocks (interface ID)

![[Pasted image 20261029233608.png]]

