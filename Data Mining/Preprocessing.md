---
id: Preprocessing
aliases: []
tags: []
---
Forms of data preprocessing:

- Data Cleaning
- Data Integration
- Data Transformation
- Data Reduction

![[Pasted image 20260921150824.png]]

## Why pre-process data

- Data could be dirty
  - Incomplete - missing values
  - Noisy - errors, invalid values (i.e. negative age)
  - Inconsistent
    - Discrepancies, i.e. age = 23, age = 1990, age = "twenty-three"
- Low quality data = Low quality output

## Describing Data

Before starting pre-processing, we need an overall description of the data

Examples:
- Central tendency (mean, median, mode, etc.)
  - Mode is the value that occurs most frequently in the data
- Variation and Spread (quantiles, outliers, variance, etc.)
  - Quantiles $Q_1$ to $Q_{4}$
  - Inter-quartile range: $IQR = Q_{3} = Q_{4}$
  - Five number summary: $\min, Q_{1}, M, Q_{3}, \max$
  - Boxplot
  - Variance and standard deviation
- Relationship between two variables (correlation)
  - Pearsons correlation coefficient
    - $\rho_{X, Y} = \frac{\cov(X, Y)}{\sigma_{X}\sigma_{Y}}$

## Handling Dirty Data

### Missing Data

Data is not always available. Missing data could be due to:
- Equipment malfunction
- Inconsistencies leading to deletion
- Not entered due to misunderstanding
- Maybe not important at time of entry
- Not register history or changes of the data

Handling missing data:
- Ignore the tuple/record
  - Usually done when class label is missing in classification task
- Filling missing value manually (often tedious and infeasible)
- Fill in automatically with:
    - Global constant (e.g. "unknown", a new class?)
    - Attribute mean
    - Attribute mean for all samples in same class
    - Most probably value (inferring using e.g. regression, Bayesian function, etc.)

### Noisy Data

> [!note]
> Random error or variance in a measured variable

- Incorrect attribute values due to:
  - Faulty collection instruments
  - Data entry problems
  - Technology limitation
  - Inconsistency in naming convention
- Duplicate records
- Incorrect processing (incomplete data, inconsistent data)
- Outliers
- **Valid outliers cannot be ignored but may be considered separately)**

#### Handling Noisy Data

- Binning
  - First sort data and partition into (equal-frequency) bins
  - Then can smooth by bin means, smooth by bin median, boundaries, etc.
- Regression
  - Smooth by fitting data into regression functions
- Clustering
  - Detect and remove outliers
- Combined computer and human inspection
  - Detect suspicious values and check by human

## Data Integration and Transformation

### Data Integration

- Combining data from multiple sources into a single data source
- Need to resolve conflicts and inconsistencies
  - Suburb-aggregated population in ABS, but city based data from BOM
  - Schema integration, i.e. `A.cust-id = B.cust-no`
  - Entity identification problem, i.e. `Joanne Lee = J. Lee`
  - Different scales for numeric data

### Data Transformation

- Smoothing
  - Smoothing by regression
- Aggregation
  - Aggregate complex time series into simpler one i.e. day-level trend to month-level trend
- Generalization
  - 
- Normalization
  - Min-max normalization
    - Normalize range to $[0.0, 1.0]$
  - Z-score normalization (0 mean, 1 standard deviation)
- Attribute/feature construction

## Data Reduction

- Sampling
  - **horizontal reduction** (number of attributes unchanged, fewer rows)
  - Selecting a representative subset of the data
  - Clustering based, random, systematic, etc.
- Compression
  - Lossless/lossy compression
- Generalization
  - If there is a hierarchical structure, i.e. scooter and bicycle are can be merged into motorcycle, motorcycle and car can be merged into vehicle
- Discretization
  - Divide range of continuous variable into intervals
  - Reduce data size
  - Some classification algorithms only accept categorical attributes
- Data cube aggregation
- Dimensionality reduction/attribute selection
  - **vertical reduction**

### Attribute Subset Selection

- Select a subset of features
  - Remove/reduce redundant features
  - Remove irrelevant features with no useful information for mining task
- There are $2^{d}$ possible sub-features of $d$ features
- Several heuristics for feature selection
  - Best single features under **independence assumption** (choose by significance test)
  - Best step-wise feature selection (greedy)
    - Choose best single feature first, then best feature condition to the first, etc.
  - Step-wise feature elimination
    - Repeatedly eliminate worst feature
  - Best combined feature selection and elimination
  - Ugly-duckling theorem
    - Classification is impossible without bias
    - Ugly duckling as similar to a swan as two swans are to each other
    - No problem-independent best set of features (attributes)
    - Look at number of features needed to do the task (i.e. which features are used in classification)

### Dimensionality Reduction

- Reduce redundancy implied among attributes
- More dimensions = more diverse data, patterns are less significant and more peculiar, processing time may increase
- How to:
  - Linear algebra techniques
    - PCA
      - Reduce overlap of information
      - Find the dimensions that carry the most information (highest variance)
    - Independent component analysis (ICA)
    - Single-value decomposition (SVD)
  - Feature selection

## Feature Creation

- Sometimes more dimensions or other features are needed
- Extract new features from existing ones (i.e. extract color, texture, and shape from image of pixel values)
- Mapping data to a new space
- Constructing new features from existing ones using domain knowledge
