---
id: "AWS Networking"
aliases: []
tags: []
---
Each VPC can have multiple subnets, dividing the CIDR block, but they cannot overlap.

Can have multiple AZ in one VPC.

One route table for each subnet (each subnet has a default route table, but can be associated to any route table, but only one).

Internet gateway routes access to internet from public subnet through the route table.

NAT gateway can enable a private subnet to connect to the internet.

Multiple AWS accounts can share a VPC.

VPC peering allows traffic between two VPCs - no transient traffic to a third VPC.

Direct Connect can connect local resources to VPC.

VPC Endpoint connects VPC to AWS services.

AWS Transit Gateway can connect VPC, Direct Connect, VPN Connections, in a star topology.

Security Groups are VPC level firewalls. By default allow all outbound traffic and deny all inbound traffic.
- Stateful - keeps track of network traffic and allows returning outbound traffic

Network ACLS are subnet level
- Allow all traffic by default
- Numbered allow and deny rules - first applicable rule is used
- Stateless - have to allow return traffic explicitly

Route 53 is a DNS service
- Can manage DNS routing
- DNS can translate domain to IP for closes server by geographically, lowest latency, fallback, etc.

CloudFront is a CDN.
