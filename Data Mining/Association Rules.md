---
id: "Association Rules"
aliases: []
tags: []
---
Try to find association patterns in data. I.e. finding association among items from data of item purchases from a store.
Can be used for i.e. "often bought together".

Also called "affinity analysis", "market basket analysis", or "frequent pattern analysis".

Applications: Floor/shelf planning, cross-marketing, catalogue design, targeted marketing, etc.


> [!example] Transactional Database
>
> | TID | Item  |
> | --- | ----- |
> | 100 | Apple |
> | 100 | Coke  |
> | 100 | DVD   |
> | 200 | Bread |
> | 200 | Coke  |
> | 200 | Egg   |
> | 300 | Apple |
> | 300 | Bread |
> | 300 | Coke  |
> | 300 | Egg   |
> | 400 | Bread |
> | 400 | Egg   |
>
> | TID (Transaction ID) | Items                   |
> | -------------------- | ----------------------- |
> | 100                  | Apple, Coke, DVD        |
> | 200                  | Bread, Coke, Egg        |
> | 300                  | Apple, Bread, Coke, Egg |
> | 400                  | Bread, Egg              |
>
> | TID | Apple | Bread | Coke | DVD | Egg |
> | --- | ----- | ----- | ---- | --- | --- |
> | 100 | 1     | 0     | 1    | 1   | 0   |
> | 200 | 0     | 1     | 1    | 0   | 1   |
> | 300 | 1     | 1     | 1    | 0   | 1   |
> | 400 | 0     | 1     | 0    | 0   | 1   |

Terms:
- *Itemset*: Set of items, e.g. {Apple, Coke, Bread}
- *k-itemset*: Itemset with k items
- Given a dataset D, itemset X has a (frequency) *count* in D
- ==Association rule==: About relationships between two disjoint itemsets X and Y
  - $X \implies Y$ (no overlap between X and Y)
  - X is the **antecedent** (initial assumption)
  - Y is the **consequent** (something else that may happen too)
  - Presents pattern than when X occurs, Y also occurs

Association rules do not represent any causality or correlation between two itemsets. The rules are asymmetrical.

Types of association rules:
- Actionable rules - contain high-quality, actionable information
- Trivial rules - information already known from business knowledge
- Inexplicable rules - no explanation and od not suggest action
- Trivial and inexplicable rules most common

## Measuring the strength of a rule

- ==Frequent pattern==: Intrinsic and important part of the data set
- Frequency measuring criteria: **support** and **confidence**
- Find all the rules $x \implies y$ with minimum support and confidence
  - ***support*** $s$: probability that a transaction contains X and Y
  - ***confidence*** c: conditional probability that a transaction having X also contains Y
- Report all rules that satisfy the minimum support and confidence limits
- A frequent itemset meets the minimum support

## Apriori

One approach to finding strong association rules. Invented 30 years ago, early time of data mining.

- **Downward closure** property
  - Any subset of a frequent itemset must be frequent
    - If {coffee, sugar, banana} is frequent, so is {coffee, sugar}

### Apriori pruning principle

> [!important]
> If there is **any** itemset which is infrequent, its superset should not be generated or tested.

Method:
- Initially scan DB once to get frequent 1-itemset
- Generate length (k+1) candidate itemsets from length k frequent itemsets
- Test the candidates against DB
- Terminate when no frequent or candidate set can be generated

![[Pasted image 20260929112022.png]]

Generate all possible association rules from the frequent itemsets:
- If have {bread, coke, egg}, the possible rules are
  ![[Pasted image 20260929112359.png]]
- Test the confidence of the rules

### Challenges

- Multiple scans of DB
- Huge number of candidates
- Tedious workload of support counting for candidates
- Ideas for improvement:
  - Reduce passes of DB scans
  - Shrink number of candidates
  - Facilitate support counting of candidates

## FP-Tree

Produces same results as apriori, but much faster. Came around 20 years ago, 10 years after apriori.

Idea: Recursively grow frequent patterns by pattern and database partition

Method:
- For each frequent item, construct its conditional pattern-base, then its conditional FP-tree
- Repeat the process on each newly created conditional FP-tree
- Until the resulting FP-tree is empty, or it contains only one path - single path will generate all the combinations of its sub-paths, each of which is a frequent pattern

## Patterns

> [!note] Too Many Patterns
> Any sub-pattern of frequent pattern is also a frequent patterns
>
> Combinatorially many sub-patterns, so mine only **closed patterns** or **max patterns** instead

### Closed Patterns

- Itemset X is **closed** if:
  - X is frequent
  - There exists no super-pattern $Y \supset X$ ***with the same support*** as X

### Max Patterns

- An itemset X is a **max pattern** if X is frequent and there exists no frequent super-pattern $Y \supset x$

## ARM Extension Methods

### Multi-level ARM

- Items often form hierarchies
- Flexible support settings
  - Items at the lower level are expected to have lower support
![[Pasted image 20260929113950.png]]

- Some rules may be redundant due to "ancestor" relationships between them
  - milk => wheat bread (support 8%, confidence 70%)
  - 2% milk => wheat bread (support 2%, confidence 72%)
  - Here first rule is an ancestor of the second rule
- Rule is redundant if its support is close to the "expected" value, based on the rule's ancestor

### Quantitative ARM

- Numeric attributes discretized
- 2-D quantitative association rules: $A_{quan_{1}} \land A_{quan_{2}} = A_{cat}$

![[Pasted image 20260929114432.png]]

### Constraint ARM

- Finding all patterns in database autonomously is unrealistic
  - Could be too many unfocused patterns
- Data mining should be an interactive process
- Constraint-based mining gives:
  - User flexibility: provides constraints on what to be mined
  - System optimization: explores the constraints only for efficient mining

### Rule constraints

Categorized as:
- Antimonotonic
  - When an itemset S violates the constraint, so does any of its supersets
- Monotonic
  - When an itemset S satisfies the constraint, so does any of its supersets
- Succinct
  - All and only those sets guaranteed to satisfy the rule can be enumerated
    - Itemsets that satisfy the rule can be generated before the support count even starts
- Convertible
  - Can be made to satisfy one of the above by changing the order of elements in the set
- Inconvertible
  - Does not satisfy (anti)monotonic, succinct, and is not convertible

## Lift

Alternative measure for interest of patterns.

$$
\text{lift} = \frac{P(A \cup B)}{P(A)P(B)}
$$

For a rule A => B

- If lift if close to 1: indicates X and Y are independent of each other, so rule is not interesting
- If lift < 1: X and Y are negatively correlated - the presence of X makes Y less likely
- If lift > 1: X and Y are positively correlated - the presence of X makes Y more likely
