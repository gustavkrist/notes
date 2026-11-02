---
id: "Cloud Economics & Billing"
aliases: []
tags: []
---
## Fundamental Costs

- Compute
  - Charged per hour, or per second on Linux
- Storage
  - Typically charged per GB
- Data transfer
  - Outbound aggregated and charged
  - Inbound no charge (some exceptions)
  - Typically charged per GB
  - Between services in same region is free

## Pricing Philosophy

- Pay for what you use
  - No large upfront expenses
  - No long-term contracts
- Pay less when you reserve
- Pay less when you use more and as AWS grows
  - Volume-based savings
    - Tiered pricing for S3/EBS/EFS - more usage, price per GB lower
    - Cheaper storage for infrequent data access - use multiple storage services for lower costs based on needs
  - As AWS grows, focuses on lowering costs
    - Future higher-performing resources replace current ones for free
- Custom pricing available for high-volume projects with unique requirements
- Free-tier for up to one year
- Free to use VPC, Elastic Beanstalk, Auto Scaling, CloudFormation, IAM

## Total Cost of Ownership

![[Pasted image 20261005095534.png]]

- TCO is the financial estimate to help identify direct and indirect cost of system
- Use to compare costs of running entire infrastructure/specific workload on on-prem vs AWS
- Use to budget/build the business case for moving to cloud

![[Pasted image 20261005095723.png]]

- Most costs for cloud service are upfront
- On-prem costs have more stuff like maintenance once, replacement, network, etc.

### AWS Pricing Calculator

- Estimate monthly costs
- Identify opportunities to reduce cost
- Model solution before building
- Find available instance types and contract terms to meet needs
- Name estimates and create and name groups of services
- Estimate is broken into:
  - First 12 months total
  - Total upfront
  - Total monthly
- Shows monthly cost for each service group

Looking at current on-prem costs vs to-be cloud costs might only provide a narrow view of total financial impact of moving to the cloud. Consider ROI analysis to determine value when considering spending and saving. ROI analysis looks at hard benefits (direct/visible cost reductions, efficiency improvements), and soft savings (reusing services, improved developer efficiency, improved customer satisfaction, etc.).

## AWS Organizations

> [!note] Use-case
> Can assign separate AWS accounts to each department/team in a large company.
>
> Allows each team to have a clear/defined report about use/expenses.

### Organization Hierarchy

![[Pasted image 20261005100602.png]]

- Root
- OU (Organizational Unit) is a branch for accounts
  - Can also contain other branches (OUs)
  - Branch can only have one parent
- Each account can be a member of only one branch (OU)
- Account: Standard AWS account containing AWS resources

### Features/Benefits

- Policy-based account management
- Group based account management
- Consolidated billing
- Does not replace IAM
  - IAM policies can allow/deny access to AWS services for users/groups/roles
- SCP (Service Control Policy) can allow/deny access to AWS services for individual or group accounts in OU
  - Affects entire account, including users/groups/role, and the root user

### Organization Setup

![[Pasted image 20261005101109.png]]

1. Create organization with current AWS account as primary account
  a. Invite one account to join organization
  b. Create another account as member account
2. Create 2 OUs and place the accounts in them
3. Create SCPs
4. Test policies/restrictions

### Managing AWS Organizations

- AWS Management Console
  - Browser-based interface, can perform any task
- AWS CLI
  - Can be faster/more convenient than console
- SDKs
- HTTPS Query API

## Billing and Cost Management

Used to monitor usage, budget expenses, and forecast costs/usage in the future to plan ahead.

- AWS Billing Dashboard to view Month-to-Date spend
  - Can view by service
  - Spend summary shows spend last month, Month-to-Date, and forecast for current month
  - Access other services from dashboard:
    - AWS Budgets
      - Create notifications when going over budget
        - Via email or Amazon SNS
      - Can be monthly, quarterly, or yearly
    - AWS Cost and Usage Reports
      - Single location for comprehensive information about service costs
      - Usage for each service category used by an account or its users
      - In hourly/daily
      - Shows any tax allocated for tax allocation purposes
    - AWS Cost Explorer
      - Visualize AWS cost data as graph
    - AWS Bills Page
      - Lists costs incurred over past month for each service, broken down by region and account

## AWS Technical Support

Support provided for:
- Businesses experimenting with AWS
- Production use of AWS
- Business-critical use of AWS

### Account Support

#### Support Concierge

- For account assistance
- Billing and account expert
- Provides analysis on billing and account issues
- Addresses non-technical billing and account inquiries

#### AWS Trusted Advisor

- Helps follow best practices
- Helps lower unnecessary costs
- Tells you what you're doing right, where to watch out
- Tells what needs to be corrected

#### TAM (Technical Account Manager)

- Provides proactive account support
- Guidance, architectural review
- Continuous communication during planning, deployment, and optimization of solutions
- Only available via Enterprise Support plan

### Plans

- Basic Support
  - Free
  - Resource Center access, Service Health Dashboard, product FAQs, discussion forums, support for health checks
- Other plans have unlimited support cases, pay-by-the-month pricing, no long-term contract
- Developer Support
  - Support for early development
  - Guidance on how to use AWS products, services together
- Business Support
  - Customers running production workloads
  - Full access to Trusted Advisor
  - Access to API for Support Center and Trusted Advisor
- Enterprise Support
  - Business and mission-critical workloads
  - Technical account manager
  - White-gloved case routing
  - Application infrastructure guiding
  - Management business reviews
  - Infrastructure event management support

### Case Severities

![[Pasted image 20261005103120.png]]

## Notes from lecture

### Reserved Instance Pricing

- Reserved instances available in three options:
  - All Upfront Reserved Instance (AURI) - pay everything now, highest discount
  - Partial Upfront Reserved Instance (PURI) - Pay part now, rest over time
  - No Upfront Payments Reserved Instance (NURI) - Pay monthly, smaller discount
- Minimize risks, priductable budgets, comply with policies requiring longer-term commitment

- Use pay-as-You-Go pricing for short-term, variable, or uncertain workloads.
- Reserved Instances/Savings Plans for predictable usage over 1-3 years commitment
- Spot Instances for interruption-tolerant work where lowest price matters more than availability
  - Bid for surplus EC2 compute capacity with up to 90% discount
