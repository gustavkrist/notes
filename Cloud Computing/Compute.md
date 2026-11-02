---
id: Compute
aliases: []
tags: []
---
![[Pasted image 20261021235701.png]]

## EC2

Use for various servers. Provides VMs with full administration controls over OS running on instance.

- AZ level
- Control traffic to/from instance
- Create from AMI (Amazon Machine Image)
  - Big catalogue of AMIs - both in marketplace and community made, can make yourself too
  - Create ami by making VM from AMI, making changes, then capture image as AMI
- Instance types with different RAM, CPU, Storage, and network capabilities

![[Pasted image 20261022000100.png]]

![[Pasted image 20261022000124.png]]

- Place interdependent instances in **cluster placement groups**

### Network settings

- Deploy into VPC (default if not specified)
  - Optionally into subnet
- Attach IAM role to instance to allow instance to call other AWS service
  - Not an IAM User - never store IAM credentials on instance, not secure

### Storage

- Can supply user data script at instance launch
  - Bash for linux machine, batch script/powershell for windows
- Configure storage volumes at launch
  - Volume sizes, encryption settings, whether to delete on instance termination
- Storage options:
  - EBS - durable, block-level storage
  - EC2 Instance store - provided on disks attached to instances
    - Deleted of instance is stopped
  - Not for root volume:
    - Mount EFS file system
    - Connect to S3

### Tags

- Has key and optional value
- Used to attach metadata to EC2 instance
  - Used for filtering, automation, cost allocation, access control

### Security Groups

- Firewall rules controlling traffic to/from instance
- Rules specify source of traffic, protocol, and port range

### Connecting to instance

- Create key pair for SSH/RDP connection
- SSH with private key for linux AMI
- Use private key to obtain admin password for windows AMI

### Launching instance

- Can use the graphical interface
- CLI
  ![[Pasted image 20261022001952.png]]
- SDK

### Instance states

![[Pasted image 20261022002044.png]]

- Pending
- Running
- Rebooting
- Shutting down
- Terminated
- For EBS root volume:
  - Stopping
  - Stopped

### IP address

- Changes if instance is stopped and started again
  - Public IP and external DNS hostname
- Rebooting does not change DNS hostname or IP addresses
- Attach Elastic IP address for persistent public IP address

### Metadata

- Retrieve from http://169.254.169.254/latest/meta-data/ (called from instance only)
- Can be used to configure or manage a running instance

## Pricing

### Pricing models

- On-demand instances
  - Low cost and flexibility
- Dedicated instances
  - Run in VPC on hardware dedicated to single customer
  - Save money on licensing costs
  - Helps meet compliance and regulatory requirements
- Reserved instances
  - 1-year or 3-year term
  - Full, partial, or no upfront payment
  - Predictability ensures available compute when needed
- Scheduled reserved instances
  - 1-year term
  - Capacity reservation available on a recurring schedule
- Spot instances
  - Bid on excess compute
  - Flexible start/end times, instances can shut down suddenly
  - Large scale, dynamic workload

![[Pasted image 20261022002745.png]]

- Match need first, then look for opportunities to downsize
- Optimize and combine purchase types
- Consider AWS Lambda
- Optimize storage choises
  - Resize EBS volumes
  - Delete old EBS snapshots
  - Use the appropriate storage type for each type of data

## AWS Container Services

- Smaller than VMS
- Don't contain an entire OS
- Repeatable
- Self-contained environments
- Reliable, consistent environments
- Fast to launch, stop, or terminate compared to VMS
- Containers run on Docker, created from Docker images

![[Pasted image 20261022003153.png]]

### Amazon ECS

- Manages fleet of nodes (EC2 instances) that run the containers
- Request containers and number of them to run
- ECS creates the EC2 instances to run them

![[Pasted image 20261022003325.png]]

- Cluster can be backed by Fargate, leaves AWS with control of the cluster

### Amazon EKS

- Enables running Kubernetes on AWS
- Supports linux and windows containers
- Compatible with Kubernetes community tools and popular add-ons

### Amazon ECR

- Fully managed docker registry
- Store, manage, and deploy docker images
- Integrated with ECS, EKS
- Team collaboration, access controls, 3rd party integration

## AWS Lambda

![[Pasted image 20261022003728.png]]

- "Serverless" computing
- Lambda function is the code to run
  - Triggered by event or on a schedule
  - Code only runs when triggered
    - Pay only for compute used when running
      - Increments of 100 milliseconds
- Supports many programming languages
- Built-in fault tolerance - compute capacity across many regions and AZs in each region
- Can orchestrate multiple functions
- Event sources: S3, DynamoDB, SNS, SQS, API Gateway, Application Load Balancer
  - Also via API, SDK, and CLI
- Logs all requests handled to CloudWatch

### Configuring function

- Give a name
- Execution runtime environment (specific version of python, node)
- IAM Execution role (for interacting with other services)
- Add trigger(s)
- Add function code
- Specify memory in MB for function
  - Optionally VPC to run in, timeout, environment variables, other settings
- Everything bundled in deployment package (ZIP file)

> [!example]
> Example:
> ![[Pasted image 20261022004300.png]]

## Elastic Beanstalk

- Easy way to get web applications running
- Managed service, automatically handles:
  - Infrastructure provisioning and configuration
  - Deployment
  - Load balancing
  - Automatic scaling
  - Health monitoring
  - Analysis and debugging
  - Logging
- No extra charge for Elastic Beanstalk
  - Pay for the underlying resources used
- Supports common web application platforms (Java, .NET, Python, Ruby, Go, PHP, Docker)
- Upload code to Elastic Beanstalk
  - Handles deployment
  - Deploys on serves like Apache, NGINX, etc.

![[Pasted image 20261022004633.png]]


