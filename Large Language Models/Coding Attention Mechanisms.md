---
id: "Coding Attention Mechanisms"
aliases: []
tags: []
---
Difficulty with translation when sentence structure changes.

### Encoder/decoder RNN

![[Pasted image 20260929155134.png]]

Using attention mechanism:

![[Pasted image 20260929155237.png]]

All inputs are available for each output token. Weights are assigned to input tokens to determine the importance of it on the given output token.

## Self-Attention Mechanisms

Allows the model to weight the importance of tokens in a sequence relative to each other.

Four types:
- Simplified self-attention
  - Simplified version
- Self-attention
  - Trainable weights
- Causal attention
  - Allows model to consider only previous and current inputs in a sequence
- Multi-head attention
  - Extension of self-attention and causal attention, enables model to simultaneously attend to information from different representation subspaces

### Simplified self-attention

Compute context vector for each input element

![[Pasted image 20260929160141.png]]

![[Pasted image 20260929160225.png]]

### Self-Attention with Trainable Weights

$$
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^{T}}{\sqrt{ d_{k} }}\right)V
$$
- Q: Query - Represents current item the model focuses on
- K: Key - Each item in input sequence has an associated key, key used to match query
- V: Value - Actual representation of input items

### Causal Attention

- Each output token has access to the current token and previous tokens, but not future tokens
- Apply softmax to attention scores
- Mask with 0 above diagonal
- Normalize rows

![[Pasted image 20260929160830.png]]

Can also mask out additional words with random dropout to avoid overfitting.

### Multi-Head Attention

![[Pasted image 20260929161119.png]]

Can either stack multiple single-headed attention layers, or implement with weight splits.
