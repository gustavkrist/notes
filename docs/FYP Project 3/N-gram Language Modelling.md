---
tags: [n-gram, language modelling]
---

## Language models

!!! note ""
    Learns a probability distribution over a sequence of words

    $$
    p(w_1, w_2, \ldots, w_N)
    $$

Allows you to predict word sequences that are ungrammatical, but still occur
often. Early language models only worked well on sentences with proper grammar,
and wouldn't work with social media texts at all.

Models joint probability of the word sequence rather than conditional probability.
Lets you sample from the model and generate plausible sounding word sequences.

Often used as components in other models:

- Automatic speech recognition: Acoustic model + language model
- Statistical machine translation: Translation model + language model

Looking at long-range dependencies gives too many parameters to model.
It is more reasonable to look at *local* dependencies.

- *the* strongly flavors a following noun (or adjective)
- After a full stop, we are likely to see a capital letter

### Markov assumption

!!! note ""
    Each element of the sequence depends only on the immediately preceding element
    and is *independent* of the previous history.

    $$
    p(w_i \given w_1, \ldots, w_{i-1}) \approx p(w_i \given w_{i-1})
    $$

!!! note "$k$-th order Markov assumption"
    Each element of the sequence depends only on the *k* immediately preceding
    elements.

    $$
    p(w_i \given w_1, \ldots, w_{i-1}) \approx p(w_i \given w_{i-k}, \ldots, w_{i-1})
    $$
    
For a model without independence assumption:

- We need to estimate $p(w_N \given w_1, w_2, \ldots, w_{N-1})$
- Up to $V^N$ model parameters

For a $k$-th order Markov model:

- We need to estimate $p(w_{k+1} \given w_1, \ldots, w_k)$
- Up to $V^{k+1}$ model parameters

In a realistic language model:

- $V \approx 10^4$ to $10^5$
- $n \approx 30$ to $80$
- $k \approx 2$ to $5$

### Sequence padding

Add special symbols to mark the start and end of each sentence.
Makes the model learn good start/end of sentences.

Use for example `<s>` and `</s>` or `BOS` and `EOS`.

### N-Gram language model

Markov models for language modelling.

N-Gram: sequence of $n$ tokens in a text.

1-gram = Unigram; 2-gram = Bigram; 3-gram = Trigram

A 4-gram model is a 3rd order Markov model.

!!! example ""
    $$
    \underbrace{\stackrel{1}{\text{in}}\quad\stackrel{2}{\text{the}}}_{\stackrel{\text{bigram}}{\text{2-gram}}}
    \qquad p(\text{the} \given \underbrace{\phantom{text}\text{in}\phantom{text}}_{\text{firstorder MM}})
    $$

N-gram models estimate *probabilities*. With one small factor per token in the sentence,
numbers become *really* small very quickly. Bad numerical precision, risk of scores
getting rounded to 0.

Use *log-probabilities* instead:

- Much better numerical stability
- Multiplication becomes addition
- Do this *whenever* you use probabilities!

### Perplexity

!!! note ""
    Commonly used to compare language models:

    $$
    PPL = p(w_1, w_2, \ldots, w_N)^{-\frac{1}{N}}
    $$

    Indication of how "confused" the language model is:  
    How many continuations does it consider plausible on average per step?
    
    **Lower** perplexity is better!  
    Only comparable if they refer to the ***same vocabulary***
    
1 is the lowest possible perplexity, where the model knows exactly what it is
going to do after every step.

Typical for language models is $\approx100$ PPL.

