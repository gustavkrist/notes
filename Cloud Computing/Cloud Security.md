---
id: "Cloud Security"
aliases: []
tags: []
---
## AWS Shared Responsibility Model

Customer and AWS have shared responsibility for security.

![[Pasted image 20260925152020.png]]

- AWS is responsible for the security of the cloud
  - Responsible for security of everything physical
  - Responsible for securing infrastructure of cloud infrastructure
- Customer is responsible for security in the cloud
  - Responsible for securing every application and dataset
  - AWS provides tools for security, but customer must implement
  - Customer is responsible for securing (encrypting) data in transit and at rest
  - Ensure security credentials and logins are managed safely
  - Firewall and security of OS and applications on compute instances

### Security of the Cloud

- Physical security of data centers
  - Controlled, need-based access
- Hardware and software infrastructure
- Network infrastructure
- Virtualization infrastructure

## Service Characteristics

- IaaS
  - EC2, EBS, VPC
    - Customer has more flexibility in configuration
    - Customer more responsible for managing security
    - Customer configures access controls
- PaaS
  - Lambda, RDS, Elastic Beanstalk
    - AWS handles OS, DB patching, firewall config, disaster recovery
    - Customer can focus on managing code or data
- SaaS
  - AWS Trusted Advisor, AWS Shield, AWS Chime
    - Software centrally hosted, typically accessed via browser, app or API
    - No need to manage infrastructure supporting the service

## AWS Identity and Access Management (IAM)

- Use to define users and the amount of access they have
- Define fine-grained access rights
- Free AWS account feature
- Global service - available to all regions

### Definitions

![[Pasted image 20260925153241.png]]

IAM role similar to linux `sudo` command.

### Authentication

Select type of access the user is permitted to use:
- Programmatic access
  - Authenticate using Access key ID and Secret Access key (key pair)
  - Can use AWS CLI and AWS SDK access
- AWS Management Console access
  - Authenticate using 12-digit Account ID or alias, IAM user name, IAM password
  - Can enable MFA
- Can enable either or both types of access

### Authorization

- Which services are which users allowed to access
- No access by default
  - Principle of least privilege
- Scope of IAM service configuration is **global**

### IAM Policy

- Document that defines permissions (written in JSON)
- Two types of policies
- Identity-based
  - Attach a policy to any IAM entity (user, group, or role)
  - Specifies actions that **may** be performed
  - Actions that may **not** be performed
  - Single policy can be attached to multiple entitites
  - Single entity can have multiple policies
- Resource-based
  - Attached to a resource (i.e. S3 bucket)
    - Specifies who can access the resource and which actions they can perform on it
    - Policies are *inline* only, not managed
    - Only supported by some services
![[Pasted image 20260925154109.png]]

> [!note] How IAM determines permissions
> ![[Pasted image 20260925154204.png]]

### Groups

- No default group
- User can belong to multiple groups
- Groups cannot be nested

### IAM Role

- Identity with specific permissions
- Similar to IAM User (attach policies to it)
  - Not uniquely associated with one person
  - Intended to be **assumable** by a person, application, or service
- Provides ==*temporary*== security credentials

## Securing a new AWS Account

- Starts with AWS account root user
  - Full access to all resources
  - No privilege control
  - Best practice: ==Do not use the root account except when necessary==
  - Access requires logging in with the email and password used to create account
  - Can update account root user password, change AWS support plan, restore IAM user's permissions, change account settings (contact info, allowed Regions)

### Step 1: Stop using the root account ASAP
1. Create an IAM user for yourself
2. Create IAM group with full admin perms and add your user to it
3. Disable and remove root account access keys
4. Enable password policy for users
5. Sign in with new IAM user credentials
6. Store root account credentials in a secure place

### Step 2: Enable MFA authentication requirement

### Step 3: Enable AWS CloudTrail

- Tracks user activity
  - Logs all API requests to all resources
- Basic event history enabled by default and free
  - Contains 90 day audit log
- To enable logs beyond 90 days and enable specific event alerting, create a trail
  - Create trail, give a name, apply it to all regions, and create a new S3 bucket for log storage
  - Configure access restrictions on the S3 bucket

### Step 4: Enable Billing Reports

- Provide information about use of AWS resources and estimated costs
- Delivers reports to an S3 bucket of choice, at least once per day

## Securing Multiple Accounts with AWS Organizations

- AWS Organizations enabled you to consolidate multiple AWS accounts to centrally manage them
- Security features:
  - Group AWS accounts into organizational units (OUs) and attach different access policies to each OU
    - Service control policies
      - Available for organizations with all features enabled including consolidated billing
        - Not available without all features enabled, i.e. only consolidated billing
      - Offer central control over accounts
      - Ensures that accounts comply with access control guidelines
      - Similar to IAM permissions policies
        - Similar syntax
        - SCP never grants permissions, but specifies ***maximum permissions*** for an organization
    - Can make certain accounts only able to access certain services
  - Permissions to a user are the intersection of AWS Organizations perms and IAM perms

## Security Services

### AWS KMS

- Enables creating and managing encryption keys
- Control the use of encryption across most AWS services and in applications
- Integrates with AWS CloudTrail to log all key usage
- Uses hardware security modules (HSMs) that are validated by Federal Information Processing Standards (FIPS) 140-2 to protect keys

### Amazon Cognito

- Adds user sign-up, sign-in, and access control to web applications and mobile apps
- Scales to millions of users
- Supports sign-in with identity providers such as Facebook, Google, and Amazon; and enterprise identity providers like Microsoft Entra ID via SAML 2.0

### AWS Shield

- Managed DDOS protection service
  - Protects from all types including:
    - UDP floods
    - TCP syn floods
    - HTTP GET/POST floods
- Safeguards apps running on AWS
- Provides always-on detection and automatic inline mitigations
- *AWS Shield Standard* enabled for free, *AWS Shield Advanced* optional and paid
- Use to minimize downtime and latency

## Securing Data

### Encryption

- Encrypt data at rest
  - AWS supports encryption of data stored in any service supported by AWS KMS
    - S3, EBS, EFS, RDS
- Encryption of data in transit
  - TLS
    - AWS Certificate Manager provides a way to manage, deploy, and renew TLS or SSL certificates
  - HTTPS creates a secure tunnel using TLS or SSL for data exchange

### Securing S3 buckets and objects

- Newly created buckets are private and protected by default
- When sharing data objects on S3 is required:
  - Manage and control data access by following principle of least privilege when managing permissions
- Control access to S3 data using:
    - S3 Block Public Access
    - IAM policies
    - Bucket policies
    - Access control lists (ACLs) - legacy access control mechanism
    - AWS Trusted Advisor bucket permission check - free feature

## Working to Ensure Compliance

- AWS engages with certifying bodies and independent auditors to provide customers with detailed informations about the policies, processes, and controls that are established and operated by AWS
- Certifications and attestations
  - ISO 27001, etc.
- Laws, regulations, and privacy
  - AWS provides security features and legal agreements to support compliance, i.e. GDPR, HIPAA
- Alignments and frameworks
  - Industry- or function-specific security or compliance requirements
  - I.e. CIS, EU-US Privacy Shield certified

### AWS Config

- Assess, audit, and evaluate the configurations of AWS resources
- Use for continuous monitoring of configurations
- Evaluate recorded vs desired configurations
- Review configuration changes
- View configuration histories
- Simplify compliance auditing and security analysis
- Flags non-compliant rules and services

### AWS Artifact

- Resource for compliance-related information
- Access to compliance security and reports, and select online agreements
- Can access downloads:
  - AWS ISO certs
  - PCI and SOC reports
- Only provides documents about AWS
- Customer must develop or obtain documents demonstrating security and compliance of their applications themselves

## Notes from lecture

- In addition to IaaS, PaaS, SaaS, also have FaaS (Function as a Service, i.e. AWS Lambda)
