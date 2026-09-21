---
id: "AWS Global Infrastructure"
aliases: []
tags: []
---
## AWS Region

- Geographical area
  - Physical geographical region
- No automatic data replication across regions
- Communication between regions uses AWS backbone infrastructure
- Full redundancy and connectivity to the network in each region
- Region usually consists of two or more availability zones

![[Pasted image 20260921121411.png]]

### Factors to consider when selecting region

- Data governance, legal requirements (GDPR, etc.)
- Proximity to customers (reduced latency)
- Services available within the region
  - Not all services are available in all regions
- Costs (vary by region)

### Availability zones

- Fully isolated partition of the AWS infrastructure
- 69 availability zones available
- Each include multiple discrete data centers (typically 3)
- Designed for fault isolation
- Interconnected with other availability zones using high-speed networking (within 100km of each other)
- You choose availability zones
- AWS recommends replicating data and resources across availability zones

#### Data centers

- Customer does not specify data center
- Actual data resides in data centers
- Each data center has redundant power, networking, and connectivity, and is housed in a separate facility
- Typically 50k to 80k physical servers in each data center
- If all data/applications are in one physical data center, all apps will be down in an event of a failure of that data center

## Amazon CloudFront

- Global network of 187 points of presence locations
- Consists of mostly edge locations and 11 regional caches
- Regional caches used for infrequently accessed content
  - Used with CloudFront, a global CDN
- Used with many amazon services

## AWS Services

![[Pasted image 20260921121520.png]]

- 23 different service category with multiple services in each category
- Storage services
  - Simple Storage Service (S3), EBS (Elastic Block Store), EFS (Elastic File System), S3 Glacier (secure, durable, low-cost, for long time backup/archiving)
- Compute
  - EC2 VM Instances, EC2 autoscaling, ECS (Elastic Container Service), EC2 Container Registry, AWS Elastic Beanstalk for deploying/scaling web servers, AWS Lambda for serverless functions, Amazon Elastic Kubernetes Services (EKS), AWS Fargate compute engine for EKS
- Database Services
  - Relational Database Service (RDS), Aurora (MySQL/PostGreSQL), Redshift for analytic queries, DynamoDB KV NoSQL database
- Networking and Content Delivery services
  - Amazon VPC, Elastic Load Balancing distributes incoming traffic amongst services, CloudFront CDN, Transit Gateway connects VPC and on-prem to central gateway, Route 53 scalable cloud domain name system, Direct Connect way to establish direct connection from datacenter/office to AWS, AWS VPN
- Security, identity, compliance services
  - Identity and Access Management (IAM), AWS Organizations can restrict allowed services, Cognito to add auth/access control to apps, Artifact for access to security and compliance report, KMS (key management service) to create and manage encryption keys, AWS Shield is a DDOS protection app
- Cost management services
  - Cost and Usage Report, Budgets (budgets that alert when costs are close to budgeted amount), Cost Explorer
- Management and governance services
  - Management Console, Config (track resource inventory and changes), CloudWatch, Auto Scaling, AWS CLI, Trusted Advisor helps optimize performance and security, Well-Architected Tool, AWS CloudTrail tracs user activity and API usage across AWS accounts
