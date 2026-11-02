---
id: "Wireless Networking"
aliases: []
tags: []
---
## Wireless Transmissions

- WLAN networks transmit signals through the air via RF waves
- Uses same layer 3 and higher protocols as wired networks
- Different bands on wireless spectrum
  - Cellular, WiFi around 2-5 GHz
  - Examples:
    - RFID
    - NFC
    - Z-wave for smart home communication
    - Zigby is low-powered, battery-conserving, designed to handle small amounts of data, used in IoT
    - Bluetooth similar frequency band as WiFi
    - ANT+ at 2.4GHz band, gathers and tracks information from sensors in HRM, GPS device, other activity monitoring devices
    - IR used to collect data through some sensors
- Signals are emitted from an antenna, travels through the atmosphere, and is received by an antenna

### Channel Management

Bands are divided into channels, that can be further divided into narrow band channels.

Most wireless devices implement one of these technologies:
- FHSS (frequency hopping spread spectrum)
  - Jumps around channels to avoid interference
  - Better performance in crowded indoors areas and cheaper to implement than DSSS
- DSSS (direct sequence spread spectrum)
  - Data divided and encoded into chips, spread across all available frequencies within one of three wide channels at the same time
  - Better throughput
- WiFi uses DSSS, Bluetooth uses FHSS

Technologies for frequency hopping. FHSS performs better in crowded indoors environments.

### Antennas

- Radiation pattern is the relative strength of a 3D area of all energy the antenna sends/receives
  - Directional (unidirectional) antenna
  - Omnidirectional antenna
- Geographical area that an antenna can reach is the **range**

### Signal Propagation

- The way in which a wave travels from one point to another
- LOS when a signal travels in a straight line from transmitter to receiver
- Usually wireless signals do not follow a straight line
- Signals may pass through objects, or be absorbed by objects that are in the way
- Potential problems for signal clarity and strength:
  - **Attenuation** is the loss of strength from distance
    - Can be amplified by increasing the transmission power or repeating the signal with a wireless range extender
  - **Fading** happens as the signal runs into obstacles and its energy fades
    - Can lead to dropped connections or slow data transmission
  - **Interference** from electromagnetic waves
    - **SNR** is the proportion of noise to strength of signal
  - **Refraction** waves direction/speed/wavelength may be altered travelling trough different mediums
  - **Reflection** when a wave hits an obstacle
  - **Scattering** when a signal hits an object with small surface dimensions
  - **Diffraction** signal is split into secondary waves when it encounters an obstruction
  - **Multipath signals** when wireless signals follow different paths to a destination

![[Pasted image 20261102003140.png]]

## WiFi Standards (802.11 WLAN)

- Work at layer 1 and 2
  - Support TCP/IP higher-layer OSI protocols and operation systems
- Most popular standard used by WLANs is WiFi (wireless fidelity)
- Many standards of 802.11:
  - 802.11b, 802.11a, 802.11g, 802.11n, 802.11ac, and 802.11ax
  - 802.11n and later modify the way frames are used at the MAC sublayer (lower portion of the Data Link layer)
  - The LLC sublayer is primarily concerned with multiplexing, flow and error control, and reliability

### 802.11 Innovations

- Channel bonding
  - Two adjacent 20 MHz channels can be bonded to make a 40MHz channel
  - More than doubles the bandwidth available in a signal 20MHz channel
- MIMO (Multiple Input Multiple Output)
  - Multiple access point and client antennas
  - Increases range and throughput
- MU-MIMO (Multi-User MIMO)
  - Allows multiple antennas to service multiple clients simultaneously
  - Reduces congestion and contributes faster data transmission
- ODFMA
  - Can subdivide channels into smaller channels, e.g. 20MHz into 2 or 4MHz for each user
  - More efficient multiuser functionality for 802.11ax
- Frame aggregation
  - Combining multiple frames into one larger frame
    - A-MSDU or A-MPDU can be used
    - ![[Pasted image 20261102004011.png]]

### Access Method

- 802.11 MAC services append a 48-bit physical address to the frame for source and destination
- Use of same physical addressing as Ethernet makes it easy to combine wireless and wired networks
- Wireless devices not designed to simultaneously transmit and receive
- Uses CSMA/CA procedures to access a shared medium (atmosphere) to avoid collisions
  - Ensures signals from different devices aren't interfering with each other
  - Uses ACK (acknowledgement) packets to verify transmissions
  - Requires more overhead than Ethernet
- RTS/CTS protocol ensures packets are not inhibited by other transmissions
  - Decreases network efficiency, but can be efficient for larger packages

![[Pasted image 20261102004540.png]]

![[Pasted image 20261102004620.png]]
RTS/CTS

### Association and Wireless Topographies

- **Association** is the process where packages are exchanged between computer and access point to gain Internet access
- **Scanning** is when a wireless device surveys surroundings for an access point
  - Active scanning client sends out a special frame called a probe
  - Passive scanning client listens for a special signal called a beacon frame
- SSID (service set identifier) is a unique character string identifying an access point
- Name of WiFi network
  - Contained in beacon frame information
  - Recommended to change from the default setting (often contains model/manufacturer)

#### Topologies

![[Pasted image 20261102005033.png]]
![[Pasted image 20261102005410.png]]

- IEEE terms that reflect the most common wireless topologies:
  - IBSS (Independent Basic Service Set) using an **ad hoc topology**
    - Small number of nodes closely positioned transmit directly to each other without an intervening connection device
  - BSS (Basic Service Set) using an **infrastructure topology**
    - Group of stations share an access point
      - Identifier for this group of nodes known as BSSID (basic service set identifier)
  - ESS (Extended Service Set) using a **mesh topology**
    - Several access points connected to the same LAN netowrk
    - Managed by a wireless LAN controller
    - Clients belonging to same ESS share a special identifier called ESSID
    - ESSID allows a user to roam, or change from AP to AP

### IEEE 802.11 Frames

- Specifies a MAC sublayer frame type
- Frame types are divided into three groups:
  - Management frames - association and reassociation
  - Control frames - Medium access and data delivery
    - I.e. ACK and RTS/CTS frames
  - Data frames - carry data sent between devices
- Header different than Ethernet
  - Frame control field
    - Information about protocol, type of frame, reissued, and more
    - Duration field - how long transmission will take
    - Address 1-4 (MAC Addresses)
      1. Source address
      2. Transmitter address
      3. Receiver address
      4. Destination address
  - Sequence control - Indicates how a large packet is fragmented
    - Error checking done at the transport layer, fragmentation done at network layer
      - Also handled at MAC layer in 802.11 network, because they are more error prone than wired transmissions
- MTU is 2312 bytes

![[Pasted image 20261102005605.png]]

## WiFi Design and Implementation

### Determine design

- SOHO (home or small office) network might only need one access point
  - AP often combines switching, routing, and other network functions
  - Connects wireless clients to LAN and acts as Internet gateway
  - Many SOHO networks include IoT devices
- Consider when deciding AP placement:
  - Distance
  - Type and number of obstacles
  - Coverage
  - Interference
- Generally place AP in high places, keep away from interference sources
- Larger WLANs warrant more systematic approach to AP placement
- A **site survey** assesses client requirements, facility characteristics, coverage areas

> [!note] Site Survery
> A thorough site survey might include:
> - Studying building blueprints to identify potential obstacles
> - Consider whether Wi-Fi access points will be used as wireless bridges to create remote wired access to the network
> - Determine whether certain floors require multiple APs
> - Measure the signal coverage and strength from other WLANS
> - Test proposed access point locations
> - Test wireless access from the farthest corners of your space
> - Consider the materials used in objects that aren’t always present in the environment
> - Consider how the wireless portions of the LAN will integrate with the wired portions

### Configure WiFi Connectivity Devices

- APs vary in which wireless standard they support, antenna strength, other features
- Variables to set during installation include:
  - SSID (and whether SSID is broadcast)
  - Security options
  - Whether or not DHCP is used
- Can force a reset of all the variables if something goes wrong

### Configure WiFi Clients

- Varies from one client type to another
- Clients in vicinity will detect it if SSID is broadcast
- **On-boarding** involves installing a specific program or app on a device to give it trusted access to certain portions of the network
- **Off-boarding** involves removing programs that gave devices special permissions on the network
  - Must be possible to do remotely, in case of lost/stolen devices
  - Called **remote wipe**
  - Especially important for BYOD (Bring Your Own Device) policies

## WiFi Security

- By default 802.11 offers no security
  - Not broadcasting the SSID offers no real security
- **Authentication** allows a client to log on to network with password/credentials for processing by an authentication server
  - **MAC filtering** prevents AP from authentication any device whose MAC address is not listed
  - Maintaining list of approved MAC addresses is time consuming, and MAC addresses can be easily impersonated
- **Encryption algorithms** make data impossible to easily interpret if intercepted
- **WPA** (WiFi Protected Access) dynamically assigns every transmission its own key
  - TKIP (Temporal Key Integrity Protocol) is an encryption key generation and management scheme
  - Improved security for legacy WEP devices
  - Improves message integrity, key distribution, and encryption
  - Uses insecure encryption algorithm
- WPA2 uses stronger data confidentiality methods
  - CCMP, which is short for Counter Mode with CBC (Cipher Block Chaining) MAC (Message Authentication Code) Protocol, helps ensure data confidentiality with both encryption and packet authentication by providing the following:
    - Message integrity – ensures incoming packets are coming from their declared source
    - Encryption – uses AES (Advanced Encryption Standard), which provides faster and more secure encryption than TKIP
- Most secure communication is by combining a RADIUS server with WPA/WPA2
  - Known as WPA-Enterprise or WPA2-Enterprise
- RADIUS (Remote Authentication Dial-in User Service) is an open-source authentication and authorisation service
  - Called EAP when used in cooperation with an authentication mechanism
- EAP (Extensible Authentication Protocol) provides the framework for authenticating clients and servers
  - Organises communications with the network client devices, while RADIUS handles the actual authentication
- Additional options that can be considered to improve security:
  - AP and antenna placement
    - Use placement to give best signal where its needed
    - Reduce signal strength outside building to prevent giving external attackers a strong enough signal to connect
  - Geofencing
    - Detects the location of a client
    - Can make certain resources available to people inside a certain geographical area only
  - Guest network
  - Wireless client isolation
    - Similar to guest network
    - Allow all clients onto network, but apply firewall rules to only allow clients to communicate with default gateway, not with other devices on the network
  - Captive portal
    - When connecting to network, a browser page will require user to accept terms and conditions, for example
  - IoT access consideration
    - Create strong passwords and use strongest encryption settings

### Security Threats

- **War driving** - a hacker searches for unprotected wireless networks by driving around with a laptop configured to receive and capture wireless data transmissions
- **War chalking** - Hackers draw symbols with chalk on the sidewalk or wall near a vulnerable AP to make it known to other hackers
- **Evil twin** - Rogue AP planted in same area to act as an authorised AP
- **WPA attack** - Involves interception of the network keys communicated between stations and APs
  - Also called WPA craking
- **WPS attack** - Involves cracking a PIN to access APs settings
  - PIN is easily cracked through a brute force attack
  - PIN feature should be disabled

## WiFi Troubleshooting

### WiFi Network Tools

Two types of software tools you should have:
- Spectrum analyser – a device that can assess the quality of the wireless signal
- Wireless analyser (Wi-Fi analyser) – software that can evaluate Wi-Fi network availability, optimise Wi-Fi signal settings, and help identify Wi-Fi security threats

List of capabilities common to wireless testing tools:
- Identify transmitting access points, stations, and channels
- Measure signal strength from an AP
- Indicate the effects of attenuation, signal loss, and noise
- Interpret signal strength information
- Ensure proper association and reassociation between APs
- Capture and interpret traffic
- Measure throughput and assess data transmission errors
- Analyse characteristics of each channel

### Avoid Common Pitfalls

No connection – when you cannot get the Wi-Fi client to connect to the AP:
- Wrong SSID (case sensitive)
- Encryption protocol mismatch (client needs to support same protocol as AP)
- Incorrect passphrase
- Static channel utilisation (AP determine channel and frequency, client must detect right one)
- Mismatched RF band (Some clients can only access 2.4GHz or 5GHz, AP must support a standard that supplies the right one)
- Mismatched standards (clients must match standard of AP)
- Long AP association time
  - Commonly when users try to connect to edge of range, or moving within the range

Slow connections – when dealing with slow Wi-Fi connections:
- Insufficient wireless coverage (check rated range, place AP high up)
- RF attenuation/signal loss
- Interference
- Channel overlap
- Wireless standard specifications
- Simultaneous wired and wireless connections
- Problems with firmware updates
- Incorrect antenna type
- Mismatched antenna polarisation
- Client saturation or overcapacity
- Client disassociation issues
