---
id: Storage
aliases: []
tags: []
---

Storage is like a warehouse.

## Temporary Storage

Instance volume for EC2 instance.

## Persistent storage

### EBS

- Block-level storage
  - If a file is changed, only the changed block is updated
- Backups have a base backup layer
  - Further backups only store the change in data from the previous layer

### S3

- If a file is changed, the whole file must be re-uploaded
- Buckets have a globally unique name
- Replicated across at least 3 AZs
- Different tiers:
  - Standard - High availability, low latency
  - Standard Infrequent access (IA) - Higher latency, lower cost
  - Standard One-Zone IA - Only stored in one AZ
  - Glacier - Low cost, higher cost for retrieval
    - 1-5 minute retrieval, expensive
    - 1-3 hour retrieval, less expensive
    - 5-12 hour retrieval, least expensive
  - Glacier Deep Storage - Lowest cost, highest cost and time for retrieval
  - Intelligent Tiering
    - Automatically chooses the most cost efficient tier

### EFS

- Network file system
- Can be attached to EC2 instances through a mount point
- Can be used with NFS (Network File System)
- Created because customers want files/folders in the cloud like their on-prem solutions
- More expensive than EBS or S3 per GB
  - Not Amazon's preferred solution, not very cloud native
  - Demotivating usage through pricing
