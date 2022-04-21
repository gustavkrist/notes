## Unbiased Estimators

We want to estimate from parameter $\theta$ for realizations $x_1, \ldots, x_n$ from
random variables $X_1, \ldots, X_n$.
Let $h$ be a function of the data in a basic statistical model

- The random variable $T = h(X_1, \ldots, X_n)$ is an *estimator*
- The number $t = h(x_1, \ldots, x_n)$ is an *estimate*

The estimate is the actual value computed from the dataset. It can be a single number,
a vector of numbers, or even a complete curve.

The probability distribution of $T$ is called the *sampling distribution* of $T$.

The bias of an estimator $T$ is defined as

$$
E[T] - \theta
$$

An estimator $T$ is called *unbiased* for the parameter $\theta$ if

$$
E[T] = \theta
$$

To find the bias of an estimator, sample from a model distribution where the parameter
of interest is known. Then compare the expected value of the estimator to the value
of the parameter of interest.

### Examples of unbiased estimators

#### Estimator for the mean

$$
\overline{X} = \frac{x_1, \ldots, x_n}{n} 
$$

#### Estimator for the variance

$$
S^2 = \frac{1}{n-1} \sum^{n}_{i=1} (X_i - \overline{X})^2
$$

#### Estimator for uniform distribution $U(0,\theta)$

$$
\theta = \frac{2}{n}(X_1 + \dots + X_n)
$$

!!! example Example
    Finding an unbiased estimator for $\theta$
    
    ```math
    \begin{align*}
    T &= \frac{2}{n}(X_1 + \dots + X_n) \\[0.5em]
    E[T] &= \frac{2}{n}(E[X_1] + \dots + E[X_n]) \\[0.5em]
    &= \frac{2}{n} \left( \frac{\theta}{2} + \dots + \frac{\theta}{2} \right) = \theta
    \end{align*}
    ```

### Good estimators

Properties of a good estimator $T$ for some parameter $\theta$:

- Easy to compute
- Unbiased: $E[T] = \theta$
- Efficient: $\operatorname{Var}(T)$ is as low as possible
- Invariant to transformation of the parameter $\theta$:
  - If the distribution was parametrized in terms of $g(\theta)$ then $g(T)$ would be
    a good estimator for $g(\theta)$
  - This is not always the case, if $T$ is an unbiased estimator for $\theta$, then
    $g(T)$ does not have to be an unbiased estimator for $g(\theta)$
  - Unbiasedness carries over in the case of $g(T) = aT+b$  
    $E[aT + B] = aE[T] + b = a\theta + b$
