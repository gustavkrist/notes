## Maximum Likelihood

!!! note  Maximum Likelihood Principle
    Given a dataset, choose the parameter(s) of interest in such a way that the data
    are most likely

Suppose we have a dataset $x_1, x_2, \ldots, x_n$ as a realization of a random
sample from a distribution characterized by a parameter $\theta$.
To stress the dependence of the distribution $\theta$, we write

$p_{\theta}(x)$

for the probability mass function in the case we have a sample from a discrete distribution
and 

$f_{\theta}(x)$

for the probability density function when we have a sample from a continuous distribution.

The maximum likelihood principle tells us to estimate $\theta$ by the value where
the function $L(\theta)$, given by
$$
L(\theta) = P(X_1 = x_1, \ldots, X_n = x_n) = p_{\theta}(x_1) \dots p_{\theta}(x_n)  
$$
is maximal. This value is called the maximum likelihood estimate of $\theta$.  
The function $L(\theta)$ is called the *likelihood function*.

To find the maximum value, we can derive the function and find the local extremes,
and then find the maximum.

In the continuous case, the likelihood function is defined by

$$
L(\theta) = f_{\theta}(x_1)f_{\theta}(x_2)\dots f_{\theta}(x_n)   
$$

### Maximum likelihood estimates

!!! note Maximum likelihood estimator
    The maximum likelihood estimate of $\theta$ is the value $t=h(x_1, x_2, \ldots, x_n)$ that 
    maximizes the likelihood function $L(\theta)$. The corresponding random variable 
    $$
    T = h(X_1, X_2, \ldots, X_n)
    $$
    is called the *likelihood estimator* for $\theta$.

??? example Example: Maximum likelihood estimator
    10 coin flips, with $\Omega_X = \{H, T\}$.
    The given outcome is $T, T, T, T, H, T, H, T, H, T$
    $$
    \def\given{\,\vert\,}
    \begin{align*}
      P_p(x) &= \begin{cases}
        p &\text{when } X = H \\
        1-p &\text{when } X=T
      \end{cases} \\
    L(\theta) &= P_{\theta}(x_1) \dots P_{\theta}(x_i) \\
    L(p) &= p^3 (1-p)^7 \\
    \Leftrightarrow \log L(p) &= 3 \log p + 7\log (1-p) \\
    P(\text{"seq"} \given \text{fair}) &= \left( \frac{1}{2} \right)^10 \approx 0.0010 \\
    P(\text{"seq"} \given \text{biased}) &= (0.2)^3 \cdot (0.8)^7 \approx 0.0017
    \end{align*}
    $$

### Loglikelihood

Differentiating $L(\theta)$ can be tedious. Considering the logarithm of $L(\theta)$
changes the product of terms involving $\theta$ into a *sum* of logarithms of these
terms, which makes differentiating easier.  
Because the logarithm is an increasing function, the likelihood function and the
loglikelihood function have the same extreme values of $\theta$.
$$
\ell(\theta) = \ln L(\theta) = \ln p_{\theta}(x_1) + \dots + \ln p_{\theta}(x_n)
$$

### Properties of maximum likelihood estimators

- **Invariance principle**
  - If $T$ is the maximum likelihood estimator of a parameter $\theta$ and $g(\theta)$
    is an invertible function of $\theta$, then $g(T)$ is the maximum likelihood
    estimator for $g(\theta)$
- **Asymptotic unbiasedness**
  - The maximum likelihood estimator $T$ may be biased, however under mild conditions
    on the distribution of the random variables $X_i$ under consideration, one can
    show that asymptotically, maximum likelihood estimators are unbiased.
    That is, if $T_n = h(X_1, X_2, \ldots, X_n)$ is the maximum likelihood estimator for
    $\theta$, then
    $$
    \lim_{n\to\infty} E[T_n] = \theta
    $$
- **Asymptotic minimum variance**
  - The variance of an unbiased estimator for $\theta$ is always larger than or equal
    to a certain positive number, known as the Cramér-Rao lower bound.
    Under mild conditions one can show that maximum likelihood estimators have
    asymptotically the smallest variance among unbiased estimators. Asymptotically,
    the variance of the maximum likelihood estimator attains the Cramér-Rao lower bound.
