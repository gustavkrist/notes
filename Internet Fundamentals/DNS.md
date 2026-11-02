---
id: DNS
aliases: []
tags: []
---

DNS: Domain Name System

- Character-based names easier to remember than IP addresses
- Fully-qualified domain name (FQDN) is full name of a host, i.e. `www.google.com`
- URL (Uniform Resource Locator) is an address identifying where to find a particular resource on a network
  - I.e. `https://en.wikipedia.org/wiki/Main_Page`
- Last part of FQDN is the top-level domain (TLD)
- Domain names must be registered with a naming authority working on behalf of ICANN (Internet Corporation for Assigned Names and Numbers)
- Name resolution: translate FQDN to IP address
- DNS is an Application layer client-server system of computers and databases made up of:
  - Namespace - collection of computer names and associated IP addresses stored in databases on DNS name servers worldwide
  - Name servers - hold databases in a hierarchical structure
  - Resolvers - DNS client that requests information from DNS name servers

## Namespace Databases

- Each organization providing host services is responsible for maintaining own DNS authoritative servers for public access
  - **Authoritative name server** is the authority on computer names and IP addresses for computers in their domain
- Domains that the organization are responsible for managing are called a **DNS zone**

## name servers

- Four common types:
  - Primary DNS server: authoritative name server for organization
  - Secondary DNS server - backup authoritative name server
    - Makes request to primary server to update its records (zone transfer)
  - Caching DNS server - accesses public DNS data and caches it
  - Forwarding DNS server - receives queries from local clients but doesn't work to resolve the queries
- Any of these can co-exist on same machine
- Organized in hierarchical structure
- Root level: 13 clusters of **root DNS servers** holding information used to locate TLD servers

![[Pasted image 20261005000321.png]]

### Resolving DNS Query

![[Pasted image 20261005000447.png]]


- Process can get more complex by:
  - Caching server is typically not the same machine as the authoritative server
    - Only exists to resolve queries for its own local clients
  - Name servers within a company might not have access to root servers
    - May be more links, i.e. ISP name server
  - TLD name server might be aware of an intermediate name server rather than authoritative name server

### Types of DNS Requests

- Recursive lookup
  - Initial request from the resolver to the local server
  - A query that demands a resolution or the answer "it can't be found"
- Iterative lookup
  - A query where the local server issues queries to other servers
    - Other servers only provide information if they have it
    - Does not demand a resolution

### Resource Records in a DNS Database

- DNS database often in form of a zone file
  - Text file with certain types of records
- SOA (Start of Authority) record
  - Gives information about the zone
- A (Address) record
  - Stores the name-to-address mapping for a host (IPv4)
- AAAA (Address) record
  - Holds name-to-address mapping (IPv6)
- CNAME (Canonical Name) record
  - Holds alternative names for a host
  - I.e. `shop.mysite.com` or `blog.mysite.com` can be used instead of canonical name `www.mysite.com`
- PTR (Pointer) record
  - Used for reverse lookups
    - Reverse of A/AAAA lookups, IP address to host name
- NS (Name Server) record
  - Indicates authoritative name server for a domain
  - Used for delegating subdomains to other name servers
- MX (Mail Exchange) record
  - Identifies a mail server and used for email traffic
    - Which server to talk to to send email to the domain
- SRV (Service) record
  - Identifies the hostname and port of a computer hosting specific network services besides email
  - I.e. SSH server on a domain
- TXT (Text) record
  - Holds any type of free-form text
  - I.e. human-readable text about the network or service

### DNS Server Software

- BIND (Berkeley Internet Name Domain) is most popular DNS server software
  - Open source
- Microsoft DNS Server is built-in DNS service in Windows Server OS
  - Windows Server capable of split-brain/split-horizon deployment, used to handle internal clients and external clients
