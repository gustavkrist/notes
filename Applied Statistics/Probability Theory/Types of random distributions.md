# Types of random distributions

### Normal distribution

The sum of two independent, normally distributed variables is also normally distributed.

Estimator for $\mu$

$$
\mu = \overline{x}_n
$$

Estimator for $\sigma$

$$
\sigma = \sqrt{\frac{1}{n}\sum^{n}_{i=1}(x_i - \overline{x}_n)^2}
$$

### Exponential distribution

Sum of two exponentially distributed random variables with parameter $\lambda$

$$
f_Z(z) = \lambda^2 ze^{-\lambda z}
$$

### Gamma distribution

*Gamma distributions* have parameters $\alpha > 0$ and $\lambda > 0$ and
PDF $f(x) = 0$ for $x < 0$ and

$$
f(x) = \frac{\lambda^{\alpha}x^{\alpha-1}e^{-\lambda x}}{\Gamma(\alpha)}
$$

for  $x \geq 0$, where $\Gamma(\alpha)$ is a normalizing constant such that $f$
integrates to 1.

- $\lambda > 0$ is called the *rate*
- $\theta \equiv 1/\lambda$ is called the *scale*
- $\alpha > 0$ is called the *shape*
- $\mu = \alpha \theta$
- $\sigma^2 = \alpha \theta^2$
