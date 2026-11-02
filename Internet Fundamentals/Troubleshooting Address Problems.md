---
id: "Troubleshooting Address Problems"
aliases: []
tags: []
---

## Troubleshooting Utilities

### Event Viewer

- First place to look on Windows PC with error
- Provides information/suggestions for errors

### CLI Tools

#### `ping`

- ping: (Packer Internet Groper)
- Used to verify that TCP/IP is:
  - Installed
  - Bound to the NIC
  - Configured correctly
  - Communicating with the network
- Sends out signal called echo request to another device (request for response)
  - Other computer sends back echo reply as response
- ICMP (Internet Control Message Protocol) is the protocol used by echo request/reply to carry error messages and information about the network

##### Ping for ICMPv6

- IPv6 networks use version of ICMP called ICMPv6
  - `ping6` on Linux computers running IPv6
  - `ping -6` on Windows PC
- Must have access to IPv6 internet to work

### `ipconfig`

- On Windows
- Gives TCP/IP addressing and domain name information
- Use `ipconfig /all` to see more complete summary

![[Pasted image 20261005002723.png]]

- Can also allow to change settings:
  - `ipconfig /release`
    - Releases IP address when dynamic IP address is in use.
    - Network communications disabled until new IP address is assigned
  - `ipconfig /release6`
  - `ipconfig /renew`
    - Lease a new IP address (often same one as just released) from a DHCP server
  - `ipconfig /renew6`
    - Lease new IPv6 address from DHCPv6 server
  - `ipconfig /displaydns`
    - Display information about name resolutions currently in the DNS resolver cache
  - `ipconfig /flushdns`
    - Flush (clear) the name resolver cache. Might solve a problem with browser not finding host or a misconfigured DNS server sending wrong information to the cache

### `ip` and `ifconfig`

- Use `ip` to view/manage TCP/ip settings
- Only available on UNIX/Linux systems
- `ip` commands that change state of link require root privileges
- `ifconfig` similar utility for viewing/managing TCP/IP settings, older and more limited
- Useful commands:
  - `ip link show`
    - Displays basic data link layer information - MAC address, NIC address, etc.
  - `sudo ip link set eth0 up`
    - Brings `eth0` interface to an "up" state
  - `sudo ip link set eth0 down`
    - Brings `eth0` interface to an "down" state
  - `ip adress show`
    - Display all IP addresses associated with device

### `hostname`

- On Linux
- Use to view/change a device's host name

### `nslookup`

- Windows and Unix/Linux
- Allows querying the DNS database from any computer on a network
  - To find host name of device by IP address, or vice versa
  - Useful for verifying host is configured correctly or for troubleshooting DNS resolution problems
- Reverse DNS lookup
  - `nslookup 69.23.208.74`
- Available in two modes
  - Interactive - to test multiple DNS servers at one time
  - Non-interactive - test a single DNS server

### `dig`

- `dig` (Domain Information Groper) available on Linux and macOS
  - More detailed information than `nslookup` and uses more reliable sources of information
- Use `dig` to query DNS name servers for information about host addresses or other DNS records
- IP Scanner can be used to gather information about all devices connected to a network

![[Pasted image 20261005004050.png]]

## Common Network Issues

- Incorrect time
  - Check domain computer's time source with `w32tm /query /source`
- DHCP issues
  - If DHCP errors or multiple clients have trouble connecting to network try:
    - Check settings on DHCP server
    - Make sure DHCP scope is large enough for number of supported clients
    - Consider shorter lease time on larger networks
- When computer cannot establish network connection
  - Check its TCP/IP config settings
- Common config errors:
  - Incorrect IP address
  - Duplicate IP address
  - Incorrect subnet mask
  - Incorrect gateway
  - Incorrect DNS or DNS issues
- If computer is not obtaining IP address and related info from DHCP server
  - Static settings might be using wrong information
    - Try checking settings on another computer that is working
  - Try switching to DHCP
