# Conditional Probability

The *conditional probability* of $A$ given $C$ is given by

$$
P(A\,   \,C) = \frac{P(A \cap C)}{P(C)}
$$

provided that $P(C) > 0$.

??? example Example
    What is the probability that a family with two children has two boys, given that
    they have at least one boy?\
    \
    Let the sample space be $\Omega = \{b, g\} \times \{b, g\} = \{(b,b), (b,g), (g,b), (g,g)\}$
    and assume that the outcomes are equally likely.\
    \
    Let $E = \{(b,b)\}$ be the event that they *have two boys*.\
    \
    Let $F = \{(b,b), (b,g), (g,b)\}$ be the event that they *have at least one boy*.\
    \
    Since the four possibilities are equally likely, we hate that $P(E \cap F) = 1/4$ and
    $P(F) = 3/4$.  
    Therefore we conclude that
    $$
    P(E \,|\, F) = \frac{P(E \cap F}{P(F)} = \frac{1/4}{3/4} = \frac{1}{3}
    $$

### The multiplication rule

For any events $A$ and $C$

$$
P(A \cap C) = P(A \,   \, C) \cdot P(C)
$$

??? example Example
    Assume that you draw two balls from an urn with 3 black balls and 7 red balls *without replacement*.\
    What is the probability of drawing *two black balls*?\
    Let $B_1$ be the event that we draw a black ball in the first draw.\
    Let $B_2$ be the event that we draw a black ball in the second draw.\
    We then find that
    $$
    P(B_1 \cap B_2) = P(B_2 \,|\, B_1)P(B_1) = \frac{2}{9}\frac{3}{10} = \frac{1}{15}
    $$

#### The law of total probability

Suppose $C_1, \ldots, C_m$ are ***disjoint*** events such that $C_1 \cup \dots \cup C_m = \Omega$.

The probability of an arbitrary event $A$ can be expressed as

$$
\def\given{\,\vert\,}
P(A) = P(A \given C_1)P(C_1) + \dots + P(A \given C_m)P(C_m)
$$

**Bayes' rule**
For events $A$ and $B$ the conditional probability of $B$ given $A$ can be expressed as

$$
\def\given{\,\vert\,}
P(B \given A) = \frac{P(A \given B) \cdot P(B)}{P(A)}
$$

provided that $P(A) > 0$

???+ example Example: COVID-19 Tests
    Imagine that we are testing a person for COVID-19.\
    There are two events:
    - B: the person has COVID
    - T: the test is positive  
    <!---->
    Assume that our test method has the properties
    - $P(T \,|\, B) = 0.7$
    - $P(T \,|\, B^C) = 0.1$
    - $P(B) = 0.02$
    \
    If we test a random person, what is the probability that the test is positive?
    \
    $B$ and $B^C$ are disjoint, and $B \cup B^C = \Omega$, so we can use the law of total probability.
    $$
    \def\given{\,\vert\,}
    \begin{align*}
    P(T) &= P(T \given B)P(B) + P(T \given B^C)P(B^C) \\
    &= 0.7 \cdot 0.02 + 0.01 \cdot (1 - 0.02) = 0.112
    \end{align*}
    $$
    What about $P(B \,|\, T)$?
    $$
    \def\given{\,\vert\,}
    \begin{align*}
    P(B \given T) &= \frac{P(T \given B)P(B)}{P(T)} = \frac{P(T \given B)P(B)}{P(T \given B)P(B) + P(T \given B^C)P(B^C)} \\
    &= \frac{0.7 \cdot 0.02}{0.7 \cdot 0.02 + 0.1 \cdot (1 - 0.02)} = 0.125 
    \end{align*}
    $$

## Independence

An event $A$ is called *independent* of $B$ if

$$
P(A \,   \, B) = P(A)
$$

To show that $A$ and $B$ are independent it suffices to prove just one of the following:

$$
\begin{equation}
  P(A \,   \, B) = P(A)
\end{equation}
$$
$$
\begin{equation}
  P(B \,   \, A) = P(B)
\end{equation}
$$
$$
\begin{equation}
  P(A \cap B) = P(A)P(B)
\end{equation}
$$
where $A$ may be replaced by $A^C$ and $B$ replaced by $B^C$ or both.

If (and only if) one of these statements holds, all of them are true.

### Independence of two or more events

Events $A_1, \ldots, A_m$ are called independent if

$$
P(A_1 \cap \dots \cap A_m) = P(A_1)\dots P(A_m)
$$
And this statement also holds when any number of the events are replaced by their
complements throughout the formula.
