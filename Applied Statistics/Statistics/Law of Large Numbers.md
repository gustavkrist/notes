---
tags: [central limit theorem]
---
# Law of Large Numbers

## Expectation and variance of an average

Let $\overline{X}_n$ be the average of n independent random variables with the same
expectation $\mu$ and variance $\sigma^2$. Then,

$$
\def\mean#1{\overline{#1}}
\def\var{\operatorname{Var}}
E[\mean{X}_n] = \mu \quad \text{and} \quad \var(\mean{X}_n) = \frac{\sigma^2}{n} 
$$

## Chebyshev's Inequality

For an arbitrary random variable Y and any $a > 0$,

$$
\def\abs#1{\lvert #1 \rvert}
\def\var{\operatorname{Var}}
P(\abs{Y - E[Y]} \geq a) \leq \frac{1}{a^2} \var(Y)
$$

This means that most of the probability mass of a random variable is within a few
standard deviations from its expectation.

## The law of large numbers

Let $\overline{X}_n$ be the average of n i.i.d. with expectation $\mu$ and variance $\sigma^2$,
then for any $\epsilon > 0$

#### The (weak) law of large numbers

$$
\def\abs#1{\lvert #1 \rvert}
\def\mean#1{\overline{#1}}
\lim_{n \to \infty} P(\abs{\mean{X}_n - \mu} > \epsilon) = 0
$$

#### The (strong) law of large numbers

$$
\def\mean#1{\overline{#1}}
P \left( \lim_{n \to \infty} \mean{X}_n = \mu \right) = 1
$$

The law of large numbers means that the sample mean $\overline{X}_n$ converges to
the theoretical mean $\mu$ as the number of samples $n$ increases.

## The central limit theorem

Let $X_1, \ldots, X_n$ be any sequence of i.i.d. random variables with finite positive variance.
For $n \geq 1$, let $Z_n$ be defined by

$$
\def\mean#1{\overline{#1}}
Z_n = \sqrt{n}\frac{\mean{X}_n - \mu}{\sigma} \\[0.5em]
\text{then for any number } a \\[0.5em]
\lim_{n \to \infty} F_{Z_n}(a) = \Phi(a)
$$

where $\Phi$ is the PDF of the $N(0,1)$ distribution. In other words, the distribution
function of $Z_n$ converges in distribution to the standard normal distribution $\Phi$

The CLT gives the best approximation if:

- $n$ is large
- The distribution is symmetric
- The distribution is continuous

The CLT gives a poor approximation when

- $n$ is small
- The distribution is multimodal and/or discrete
- The value of $a$ in $P(\bar{x}_n > a)$ is far from the center of the distribution
