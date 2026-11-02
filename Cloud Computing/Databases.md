---
id: Databases
aliases: []
tags: []
---

## Amazon RDS (Relational Database Service)

- Managed database service
- AWS manages installing, patching, backing up OS and Database software
- Can pick instance class
  - Differs in CPU, memory, ram
- Pick instance storage
  - Magnetic, General purpose (ssd), provisioned IOPS
- Multi-AZ deployment with replica in other AZ
- Good for:
  - Complex transactions/queries
  - Medium to high query to write rate
  - One single worker node or shard
  - High durability
- Bad for
  - Massive R/W rates
  - Sharding
  - Simple GET/PUT requests better suited for NoSQL DB
  - RDBMS costumization
- Instance type, storage, load impacts cost
- First 100% of storage in backup is free
  - Billed if instance is terminated
- RDS must implement ACID (atomicity, consistency, isolation, durability)

## Amazon DynamoDB

- Non-relational (NoSQL - Not only SQL) DB service
  - Key-value, document, graph
  - Dynamic schemas
  - Querying focuses on collection of documents (documents stored in JSON)
- Scalable read/write throughput
- All data stored on SSDs
- No need for DB migrations
- Consists of tables, items, and attributes
- PK can be a single key or compound key
  - Partition key
  - Partition key + sort key

![[Pasted image 20261102124251.png]]

## Amazon Redshift

- Fully managed data warehouse
  - Columnar
  - Massive parallel processing
  - Supports Business Intelligence (BI) tools for complex analysis
- Queried with SQL queries
- Cluster of leader and compute nodes
  - Leader nodes does query planning and result aggregation
  - ![[Pasted image 20261102124420.png]]
- Common use cases:
  - Increased agility
  - Big data

## Amazon Aurora

- MySQL and PostgreSQL compatible
- Automate time-consuming maintenance tasks
- Pay-as-you-go, fast and available, simple setup, managed service
- Stores multiple copies of data across other AZs
- Data backed up to S3
- Quick restart after database crash
