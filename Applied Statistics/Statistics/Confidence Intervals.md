## Confidence intervals

Suppose a dataset $x_1, \ldots, x_n$ is given, modelled as a realization of random
variables $X_1, \ldots, X_n$. Let $\theta$ be the parameter of interest, and
$\gamma$ a number between 0 and 1. If there exist sample statistics
$L_n = g(X_1, \ldots, X_n)$ and $U_n = h(X_1, \ldots, X_n)$ such that
$$
P(L_n < \theta < U_n) = \gamma
$$
for every value of $\theta$, then
$$
(l_n, u_n),
$$
where $l_n = g(x_1, \ldots, x_n)$ and $u_n = h(x_1, \ldots, x_n)$, is called
a 100$\gamma$% *confidence interval* for $\theta$.  
The number $\gamma$ is called the confidence interval.

If we can only find $L_n$ and $U_n$ satisfying
$$
P(L_n < \theta < U_m) \geq \gamma
$$
We say $(l_n, u_n)$ is a conservative 100$\gamma$% confidence interval.
The actual confidence level may be higher.
