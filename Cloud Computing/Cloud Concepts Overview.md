---
id: "Cloud Concepts Overview"
aliases: []
tags: []
---
## Cloud Computing Intro

Traditional computing model
- Infrastructure as hardware
- Costs time and money to meet changing needs
- Requires staff, space, physical security, planning
- Most guess theoretical max peaks

Cloud computing model
- Infrastructure as software
- Flexible
- Can change more quickly, easily, and cost-effectively than hardware solutions
- Eliminate undifferentiated heavy-lifting tasks

![[Pasted image 20260914120643.png]]

![[Pasted image 20260914120952.png]]

## Advantages

- Trade capital expenses for variable expenses
  - Pay only for amount consumed
- Benefit from massive economics of scale
  - Usage from many customers are added up, which adds up to lower compute costs for each customer
- No need to guess capacity, can scale compute on demand
- No costs for running an maintaining data centers
- Can deploy AWS application in multiple regions around the world
  - Provides lower latency and better experience globally for minimal cost

## Introduction to AWS

### Web service

Piece of software that makes itself available over the internet. Uses a standardized format for the request and response of an API interaction.

We only concern ourselves with what data we give the application, and what data it gives back in response. The implementation details (language, provision platform) are not important.

AWS:
- Secure cloud platform offering a broad set of global cloud-based products
- On-demand access
- Offers flexibility
- Pay-as-you-go
- AWS services work together like building blocks

Ways to interact with AWS
- AWS Management console - Browser GUI
- AWS CLI
- SDKs to access from code

## Moving to AWS

Cloud computing is a significant shift for organization in processes, budgeting, support from stakeholders, and more.

### AWS CAF (Cloud Adoption Framework)

Document created to help organizations design and travel an accelerated path to successful cloud adoption.

- Offers guidance and best practices to help build a comprehensive approach to cloud computing
- Organized into six perspectives
- Perspectives consist of sets of capabilities

![[Pasted image 20260914123127.png]]

---

## Lecture notes

AWS and other cloud services are IaaS (Infrastructure as a Service).

Also have Platform as a Service (PaaS) and (Software as a Service) (SaaS). IaaS, PaaS, SaaS give less control over IT resources in that order.

- IaaS
  - Gives the hardware, control over what to do. If something is wrong with application, it is your fault
- PaaS
  - Given tools to work with, different tools available on AWS and it is on AWS to ensure the tools work
- SaaS
  - Software is already made and you have no say in the application backend. If there is a bug, provider must fix it

### Deployment model

- Cloud
- Hybrid
- On-premises (private cloud)

### AWS CAF

Elements to consider:
- People
- Process
- Technology

