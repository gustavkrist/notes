---
title: Evaluating Classifiers
tags: [classifier accuracy, precision, recall]
---
## Accuracy

Proportion of elements classified correctly

$$
\begin{aligned}
\text{Accuracy} = \frac{\text{sum of diagonal}}{\text{total sum}}
\end{aligned}
$$

- Simples method for classification
- Can be misleading in unbalanced datasets!
- Provides no information about individual classes

## Precision and Recall

- Class-specific metrics
    - Based on single rows/columns of the confusion matrix
- Common metrics in NLP come from *information retrieval*
- In a database search, we want to find
    - All relevant results
    - No distracting irrelevant results

### Precision

Out of the examples we *predicted to be* in a certain class, how many of them
are correct?  
(*how many irrelevant results did we find?*)

$$
\begin{aligned}
\text{Precision} = \frac{\text{single diagonal element}}{\text{sum of single column}}
\end{aligned}
$$

![Confusion Matrix Precision](assets/Evaluating%20Classifiers_2022-05-05-10-29-59.png)

### Recall

Out of the examples *that actually belong* to a certain class, how many of them
did we find?  
(*Did we actually find what we were looking for?*)

$$
\begin{aligned}
\text{Recall} = \frac{\text{single diagonal element}}{\text{sum of single row}}
\end{aligned}
$$

![Confusion Matrix Recall](assets/Evaluating%20Classifiers_2022-05-05-10-30-15.png)
