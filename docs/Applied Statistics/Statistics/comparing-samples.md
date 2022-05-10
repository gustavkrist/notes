---
tags: [comparing samples]
---
# Comparing two samples

Comparing *two* groups of observations of the same kind that originate from two
possibly different model distributions, and the question is whether these
distributions have different expectations.

Test $H_0 : u_1 = u_2$ against i.e. $H_1 : u_1 < u_2$. 

Relates to comparing two datasets

$$
x_1, x_2, \ldots, x_n \quad \text{and} \quad y_1, y_2, \ldots, y_m
$$

which are the realization of independent random samples

$$
X_1, X_2, \ldots, X_n \quad \text{and} \quad Y_1, Y_2, \ldots, Y_m
$$

The null hypothesis $H_0 : u_1 = u_2$ is equal to $\mu_1 - \mu_2 = 0$.
Therefore the test statistic for the null hypothesis is based on an estimator
$\mean{X}_n - \mean{Y}_m$ for the difference $\mu_1 - \mu_2$.
$\mean{X}_n - \mean{Y}_m$ is standardized by an estimator for its variance

$$
\begin{align*}
\var(\mean{X}_n - \mean{Y}_n) = \frac{\sigma_X^2}{n} + \frac{\sigma_Y^2}{m} \\
\end{align*}
$$

The sample variances $S_X^2$ and $S_Y^2$ of the $X_i$ and $Y_j$ are unbiased
estimators for $\sigma_X^2$ and $\sigma_Y^2$.

## Two samples with equal variance

Suppose that the samples originate from distributions with the *same* (but unknown)
variance:

$$
\sigma_X^2 = \sigma_Y^2 = \sigma^2
$$

In this case we can *pool* the sample variances $S_X^2$ and $S_Y^2$ by constructing
a linear combination that is an unbiased estimator for $\sigma^2$

The *pooled-variance*:

$$
\begin{align*}
S_p^2 = \frac{(n - 1) S_X^2 + (m - 1) S_Y^2}{n + m - 2} \left( \frac{1}{n} + \frac{1}{m} \right)
\end{align*}
$$

is an estimator for

$$
\begin{align*}
\var(\mean{X}_n - \mean{Y}_m) = \sigma^2 \left( \frac{1}{n} + \frac{1}{m} \right)
\end{align*}
$$

which leads to the following test statistic for the null hypothesis $H_0 : u_1 = u_2$:

!!! note ""

    $$
    \begin{align*}
    T_p = \frac{\mean{X}_n - \mean{Y}_m}{S_p}
    \end{align*}
    $$

Under the null hypothesis $H_0 : u_1 = u_2$, the test statistic $T_p$ is the
*pooled studentized mean difference*

$$
\frac{(\mean{X}_n - \mean{Y}_m) - (\mu_1 - \mu_2)}{S_p}
$$

Hence, *under the null hypothesis*, the probability distribution of $T_p$ is the
*same* as that of the pooled studentized mean difference.

### Normal samples

The pooled studentized mean difference has a $t(n + m - 2)$ distribution.
Hence under the assumption of the null hypothesis, $T_p$ has the same distribution.
For this reason, a test for the null hypothesis $H_0 : u_1 = u_2$ is called a
*two-sample t-test*. 

### Nonnormal samples

Use empirical bootstrap simulation to approximate the distribution for the
pooled studentized mean difference

$$
\frac{(\mean{X}_n - \mean{Y}_m) - (\mu_1 - \mu_2)}{S_p}
$$

Given datasets $x_1, x_2, \ldots, x_n$ and $y_1, y_2, \ldots, y_m$, determine
their ECDFs $F_n$ and $G_m$ as estimates for $F$ and $G$. Their expectations
corresponding to $F_n$ and $G_m$ are $\mu_1^* = \mean{x}_n$ and $\mu_2^* = \mean{y}_m$.
Then repeat the following two steps many times:

- Generate a bootstrap dataset $x_1^*, x_2^*, \ldots, x_n^*$ from $F_n$ and a
  bootstrap dataset $y_1^*, y_2^*, \ldots, y_m^*$ from $G_m$
- Compute the pooled studentized mean difference for the bootstrap data:
  ```math
  \begin{align*}
  t_p^* = \frac{(\mean{x}_n^* - \mean{y}_m^*) - (\mean{x}_n - \mean{y}_m)}{s_p^*}
  \end{align*}
  ```
  where $\mean{x}_n^*$ and $\mean{y}_m^*$ are the sample means of the bootstrap
  datasets, and
  ```math
  \begin{align*}
  (s_p^*)^2 = \frac{(n-1)(s_X^*)^2 + (m-1)(s_Y^*)^2}{n+m-2} \left( \frac{1}{n} + \frac{1}{m} \right)
  \end{align*}
  ```
  with $(s_X^*)^2$ and $(s_Y^*)^2$ as the sample variances of the bootstrap datasets

## Two samples with unequal variances

Use the *nonpooled variance* instead

$$
\begin{align*}
S_d^2 = \frac{S_X^2}{n} + \frac{S_Y^2}{m}
\end{align*}
$$

which leads to test statistic

!!! note ""

    $$
    \begin{align*}
    T_d = \frac{\mean{X}_n - \mean{Y}_m}{S_d}
    \end{align*}
    $$

Under the null hypothesis $H_0 : u_1 = u_2$, the test statistic $T_d$ is equal
to the *nonpooled studentized mean difference*

$$
\frac{(\mean{X}_n - \mean{Y}_m) - (\mu_1 - \mu_2)}{S_d}
$$

The distribution is *not* a $t$-distribution, not even in the case of normal
samples. We have to approximate this distribution.

Same steps as the process for same variance, except substitute

$$
\begin{align*}
t_s^* = \frac{(\mean{x}_n^* - \mean{y}_m^*) - (\mean{x}_n - \mean{y}_m)}{s_d^*}
\end{align*}
$$

where

$$
\begin{align*}
(s_d^*)^2 = \frac{(s_X^*)^2}{n} + \frac{(s_Y^*)^2}{m}
\end{align*}
$$

## Large samples

Variants of the CLT state that as $n$ and $m$ both tend to infinity, the distributions
of the pooled studentized mean difference and the nonpooled studentized mean
difference both approach the standard normal distribution.

This fact can be used to approximate the distribution of the test statistics
$T_p$ and $T_d$ under the null hypothesis by a standard normal distribution.
