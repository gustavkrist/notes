# Sums, products and quotients of random variables

## Sum of discrete random variables

!!! Note ""
    Let X and Y be two independent discrete random variables, with probability
    mass functions $p_X$ and $p_Y$. then the probability mass function $p_Z$ of
    $Z = X + Y$ satisfies
    <!---->
    ```math
    p_Z(c) = \sum_{j} p_X(c-b_j)p_Y(b_j)
    ```
    <!---->
    where the sum runs over all possible values $b_j$ of Y.

Sum of two geometrically distributed random variables $X$ and $Y$ for $k\geq 2$

$$
P(X + Y = k) = (k-1)p^2(1-p)^{k-2}
$$

Sum of two uniformly distributed random variables $X$ and $Y$ on $[0,1]$,
for $1 \leq a \leq 2$

$$
F_Z(a) = 1 - \frac{1}{2}(2-a)^2
$$

## Sum of continuous random variables

!!! Note Sum of continuous random variables
    Let X and Y be two independent continuous random variables, with probability density
    functions $f_X$ and $f_Y$. Then the probability density function $f_Z$ of $Z = X + Y$ is
    <!---->
    ```math
    f_Z(z) = \int_{-\infty}^{\infty} f_X(z-y)f_Y(y) \; dy
    ```

Sum of two exponentially distributed random variables with parameter $\lambda$

$$
f_Z(z) = \lambda^2 ze^{-\lambda z}
$$

The sum of two independent, normally distributed variables is also normally distributed.

## Product of continuous random variables

For two independent continuous variables with PDFs $f_X$ and $f_Y$, the PDF $f_Z$ of the
product $Z = XY$ is

Product of continuous random variables

$$
\def\abs#1{\lvert #1 \rvert}
f_Z(z) = \int_{-\infty}^{\infty} f_Y \left( \frac{z}{x} \right) f_X(x) \frac{1}{\abs{x}}dx
$$

## Quotient of continuous random variables

For two independent continuous variables with PDFs $f_X$ and $f_Y$, the PDF $f_Z$
of the quotient $Z = X/Y$ is

$$
\def\abs#1{\lvert #1 \rvert}
f_Z(z) = \int_{-\infty}^{\infty} f_Y \left( \frac{z}{x} \right) f_X(x) \frac{1}{\abs{x}}dx
$$

Quotient of continuous random variables

$$
\def\abs#1{\lvert #1 \rvert}
f_Z(z) = \int_{-\infty}^{\infty} f_X(zx)f_Y(x)\abs{x}dx
$$
