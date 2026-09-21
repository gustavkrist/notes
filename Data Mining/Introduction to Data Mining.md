---
id: "Introduction to Data Mining"
aliases: []
tags: []
---

Data mining started around 30 years ago, 1990-ish, but grown a lot in recent years.

Try to find patterns in big data. Learning (inference) from big data. Using exploratory data analysis.

The use of data mining is to improve decision making. We want to gain knowledge on the data; understanding, learning, intelligence, and prediction.

Alternate names:
- Knowledge discovery (mining) in databases (KDD)
- Knowledge extraction
- Pattern mining
- Exploratory data analysis
- Inductive learning
- Business intelligence

> [!IMPORTANT] Not data mining
> - Simple search and query processing
> - (Deductive) expert systems
> - Small machine learning programs
>
> Only big data makes it data mining, not small datasets

The basis of data mining is inductive learning, and it is exploratory (data-oriented).

## Why Data Mining

- Data explosion - data has become very big, could be peta/exa+ bytes
- Data is getting more complex - numerical, textual, multimedia
- Everybody is a data owner now due to Web 2
- Processing has become faster and cheaper
- New algorithms and ideas available
- Competitive market - decision making is critical
- Seeking cost efficiency

Have to handle large datasets, so efficiency of algorithms is more important than the effectiveness of computing.

## Potential applications

- Know you customer
- Market analysis and decision support
  - Personalized marketing, product recommendations
- Web analysis
  - Personalization, spam filter, text mining
- Spatial data analysis
- Biological data mining
  - DNA analysis
- Crime patterns, bank fraud, NBA player performance based on mood, etc.

## Knowledge Discovery (KDD) Process

![[Pasted image 20260914221835.png]]

Data mining can be done on top of the data warehouse, data cleaning is not necessarily a part of data mining.

Steps:
- Identify problem
- Collect data
- Preprocess data
  - Cleaning, preprocessing may take 60% of effort
  - Data reduction and transformation
    - Feature modeling, dimensionality reduction, etc.
- Algorithm selection
  - Choose functions, mining algorithms, further data processing to fit chosen algorithms
- Data mining (search for patterns of interest)
  - Construct and evaluate model
  - Evaluate pattern and knowledge representation
- Take action - use discovered knowledge to make decisions

Confluence of multiple disciplines
- Databases
- Information Retrieval
- Statistics
- Machine Learning
- Algorithms

## DM Techniques

- Descriptive mining
  - Clustering
  - Characterization
  - Deviation detection
- Predictive mining
  - Classification
  - Trend detection
  - Association - Finding interesting dependencies among attributes

## DM Issues

- Not all patterns are interesting
- Privacy concerns
