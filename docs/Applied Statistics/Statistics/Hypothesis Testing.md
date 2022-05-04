---
tags: [hypothesis testing]
---
## Null hypothesis testing

Given two competing propositions, one is called the *null hypothesis*,
denoted by $H_0$, and the other is called the *alternative hypothesis*,
denoted by $H_1$.

The null hypothesis is presumed to be true until the data provide
convincing evidence against it. Like the defendant in a court case.

If we reject the null hypothesis we will accept $H_1$; we speak of
*rejecting* $H_0$ *in favor of* $H_1$. Usually $H_1$ represents a
theory or belief that we would like to accept if we reject $H_0$, and
should be chosen accordingly. 

!!! note "Test Statistic"
    Suppose the dataset is modeled as the realization of random variables
    $\Xn$. A *test statistic* is any sample statistic $T=h(\Xn)$, whose
    numerical value is used to decide whether we reject $H_0$.

### P-values

The p-value is the tail probability that expresses how likely it is to
obtain a value of the test statistic $T$  *at least as extreme* as the value
$t$ observed for the data. The size of the p-value reflects how much
evidence the observed value $t$ bears against $H_0$.

The phrase *at least as extreme as* refers to the direction in which values
of $T$ provide stronger evidence against $H_0$ and in favor of $H_1$.

### Type I and II Errors

![Type I and II Errors](assets/Hypothesis%20Testing_2022-05-04-10-54-40.png)

!!! note ""
    A *type I error* occurs if we falsely reject $H_0$. A *type II error* occurs
    when if we false do not reject $H_0$.
    
### Significance level

The *significance level* is the largest acceptable probability of committing
a type I error and is denoted by $\alpha$, where $0 < \alpha < 1$.

We speak of "performing the test at level $\alpha$," as well as "rejecting
$H_0$ in favor of $H_1$ at level $\alpha$.

### Critical region and critical values

The set $K$ consisting of values of the test statistic $T$ for which we
reject $H_0$ is called critical region.

!!! note "Critical Region and Critical Values"
    Suppose we test $H_0$ against $H_1$ at significance level $\alpha$ by means
    of a test statistic $T$. The set $K \subset \R$ that corresponds to all values
    of $T$ for which we reject $H_0$ in favor of $H_1$ is called the *critical region*.
    Values on the boundary of the critical region are called *critical values*.

The probability that $T \in K$ always satisfies

$$
\P(T \in K) \leq \alpha \quad \text{in the case that } H_0 \text{ is true.}
$$

In relation to p-values,

$$
t \in K \Leftrightarrow \text{the } p \text{-value corresponding to } t \text{ is
less than or equal to } \alpha
$$

![Critical Values](assets/Hypothesis%20Testing_2022-05-04-11-25-08.png)

### One- and two-tailed p-values

When $H_0$ can be deviated from in two directions:

One could report the appropriate left or right tail probability, which corresponds
to the direction in which $x$ deviates from $H_0$. This is called a *one-tailed
p-value*. They can be misleading about how strong the evidence is against $H_0$.
They should be compared to $\alpha/2$.

Since one is inclined to compare the p-value with $\alpha$ itself, one could
double the one-tailed p-value and compare this with $\alpha$. This is called a
*two-tailed p-value*.

Which one is reported doesn't make a difference, as long as the type of p-value
is also reported.

### Type II Error

![Type I/II Error](assets/Hypothesis%20Testing_2022-05-04-11-38-22.png)

Left curve: $N(120, 4/3)$ distribution.  
Right curve: $N(123, 4/3)$ distribution.  
Significance level $\alpha=0.05$.

The shaded area on the right of 121.9 represents the probability of committing
a type I error. The shaded area on the left represents the probability of
committing a type II error.

The probability of committing a type II error depends on the true value
of the variable in the alternative hypothesis.

### Relation with confidence intervals

Suppose that for some parameter $\theta$ we test $H_0:\theta > \theta_0$. Then

we reject $H_0:\theta > \theta_0$ in favor of $H_1: \theta > \theta_0$ at level $\alpha$
  
if and only if

$\theta_0$ is not in the $100(1-\alpha)$% *one-sided* confidence interval for $\theta$.

The same relation holds for testing against $H_1: \theta < \theta_0$, and a
similar relation holds between testing against $H_1: \theta \neq \theta_0$ and
two-sided confidence intervals:

we reject $H_0: \theta = \theta_0$ in favor of $H_1: \theta \neq \theta_0$ at level $\alpha$

if and only if

$\theta_0$ is not in the $100(1-\alpha)$% *two-sided* confidence region for $\theta$.

!!! note "Remark"
    These relations *only* hold if the random variable that is used to construct the
    confidence interval relates appropriately to the test statistic. For instance,
    the preceding relations do not hold if on the one hand, we construct a confidence
    interval for the parameter $\mu$ of an $N(\mu, \sigma^2)$ distribution by means
    of the studentized mean $(\mean{X}_n - \mu) / (S_n / \sqrt{n})$, and on the other
    hand, use the sample median $\med_n$ to test a null hypothesis for $\mu$.
