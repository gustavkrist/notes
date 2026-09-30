---
id: Ethernet
aliases: []
tags: []
---
- Most important data link layer standard
  - Runs on variety of network media
  - Offers excellent throughput for reasonable cost
  - Most popular technology used on modern LANs
- Usual standard is Ethernet II

> [!note]
> - Adds both header and trailer to the payload
>   - Creates a frame around the payload
> - Header and FCS make up the 18-byte frame
> - Data portion of an Ethernet frame may have from 46 to 1500 bytes of data
>
> Exists at both data link and physical layer

## Data Link Layer Sublayers

- Logical Link Control (LLC):
  - Upper portion of data link layer
  - Identifies type of message (only LLC function in Ethernet II frame)
  - Also handles multiplexing, flow and error control, reliability
- Media Access Control (MAC):
  - Lower portion of data link layer
  - Identifies destination and source MAC addresses
  - Includes the message and provides the checksum in the frame's trailer

## Ethernet Frames

![[Pasted image 20260928103607.png]]

- MTU (Maximum Transmission Unit): Largest size (in bytes) that routers in a message's path will allow at the network layer
- 1500 bytes for Ethernet, considered the Internet standard

## Functions of Ethernet

- Transmitting and receiving data frames
  - Uses CSMA/CD (non-deterministic)
    - Carrier Sense Multiple Access / Collision Detection
    - Prevents multiple simultaneous users from interrupting each other if using the same medium
      - Not a problem these days, usually PCs have their own connection to a switch
- Decoding data frames and checking for valid MAC addresses
  - If it is valid, or a broadcast message, passes to upper layers of OSI model
- Detecting errors within data frames or on the network
  - FCS (frame check sequence) field
  - Does error detection, ***not* error correction**
  - Frame with incorrect checksum is an error
  - Any frame under 64 bytes is an error

## Switches

> [!info]
> Originally designed to work on networks with a shared medium
> - Physical bus topology, star topology created with a hub
> If multiple nodes attempt to communicate simultaneously, interference in signal (collision)
> CSMA/CD is used for controlling access to the shared medium
>
> Problem solves by using switches

- Layer 2 devices that create Ethernet LANs
- Examine MAC addresses of frame to determine forwarding decisions
- Only send frames out of the port connected to destination
- Send broadcast frame out of all other ports than input
- Associates interfaces (ports) to MAC addresses in a **bridging table**
  - Empty when first connected
  - When frame is received on a given interface, the switch associates the source MAC address with that interface
  - If unknown destination MAC address is seen, the frame is forwarded on all ports aside the source port ("flooding")
