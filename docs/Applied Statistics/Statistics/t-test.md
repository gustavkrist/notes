---
tags: [t-test]
---
# The t-test

Under the null hypothesis $H_0: \mu = \mu_0$, the test statistic is

!!! note "T-test test statistic"
    $$
    \begin{align*}
    T = \frac{\mean{X}_n - \mu_0}{S_n / \sqrt{n}}
    \end{align*}
    $$

which is the studentized mean. Hence *under the null hypothesis*, the 
probability distribution of $T$ is the *same* as that of the studentized mean.

Values of $T$ close to 0 are in favor of $H_0: \mu = \mu_0$.

$$
\begin{align*}
p-\text{value} = \begin{cases}
    \P(T \leq t \given H_0) & H_A : \mu < \mu_0 \\
    \P(T \geq t \given H_0) & H_A : \mu > \mu_0 \\
    \P(\abs{T - \mu_0} \leq \abs{t - \mu_0} \given H_0) & H_A : \mu \neq \mu_0
\end{cases}
\end{align*}
$$

## The one-sample *t*-test

### Normal data

The test for the null hypothesis $H_0: \mu = \mu_0$ is called the *(one-sample)
t-test*. Under the assumption of normality, the test statistic $T$ has a
t-distribution.

$T$ has a $t(n-1)$ distribution. Therefore, if we test $H_0: \mu = \mu_0$
against $H_1 : \mu \neq \mu_0$ at level $\alpha$, then we must reject the
null hypothesis in favor of $H_1 : \mu \neq \mu_0$, if

$$
T \leq -t_{n-1, \alpha/2} \quad \text{or} \quad T \geq t_{n-1, \alpha/2}
$$

Similar decision rules apl=ply to alternatives $H_1 : \mu > \mu_0$ and
$H_1 : \mu < \mu_0$.

### Nonnormal data

Use the bootstrap to approximate the distribution of $T$. For large sample sizes,
the distribution can be approximated with the CLT.

Generate many bootstrap datasets and for each bootstrap dataset
$x_1^*, x_2^*, \ldots, x_n^*$ compute

$$
\begin{align*}
t^* = \frac{\mean{n}_n^* - \mu_0}{s_n^* / \sqrt{n}}
\end{align*}
$$

Find the critical bootstrap values $c_l^*$ and $c_u^*$ by taking the appropriate
quantiles of the ECDF.

### Large samples

For large sample sizes, the distribution of the studentized mean can be
approximated by a standard normal distribution (due to the CLT).

## The *t*-test in a regression setting

Given a linear regression model with normally distributed errors

$$
Y_i = \alpha + \beta x_i + U_i
$$

we could test a null hypothesis of the form $H_0 : \alpha = \alpha_0$ or
$H_0 : \beta = \beta_0$. With normally distributed errors, we can construct
test statistics for these null hypotheses that have a $t$-distribution.
For this reason, for both null hypotheses the test is called a $t$-test.

### The *t*-test for the slope

For the null hypothesis $H_0 : \beta = \beta_0$, we use the test statistic

$$
\begin{align*}
T_b = \frac{\hat{\beta} - \beta_0}{S_b}
\end{align*}
$$

where $\hat{\beta}$ is the least squares estimator for $\beta$ and

$$
\begin{align*}
S^2_b = \frac{n}{n \sum x^2_i - (\sum x_i)^2} \hat{\sigma}^2
\end{align*}
$$

In this expression,

$$
\begin{align}
\hat{\sigma}^2 = \frac{1}{n - 2} \sum_{i=1}^{n} (Y_i - \hat{\alpha} - \hat{\beta x_i})^2
\end{align}
$$

is the estimator for $\sigma^2$.

Values of $T_b$ close to 0 are in favor of $H_0 : \beta = \beta_0$.

Large positive values of $T_b$ suggest that $\beta > \beta_0$, and large
negative values of $T_b$ suggest that $\beta < \beta_0$.

$T_b$ has a $t(n-2)$ distribution under the null hypothesis $H_0 : \beta = \beta_0$.

### The *t*-test for the intercept

We test the null hypothesis $H_0 : \alpha = \alpha_0$ with test statistic

$$
\begin{align*}
T_a = \frac{\hat{\alpha} - \alpha_0}{S_a}
\end{align*}
$$

where $\hat{\alpha}$ is the least squares estimator for $\alpha$ and

$$
S^2_a = \frac{\sum x_i^2}{n \sum x_i^2 - (\sum x_i)^2} \hat{\sigma}^2
$$

with $\hat{\sigma}^2$ as defined in (1).

Like $T_b$, also has a $t(n - 2)$ distribution under the null hypothesis
$H_0 : \alpha = \alpha_0$.
