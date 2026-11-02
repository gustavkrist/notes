---
id: "LLM Architecture"
aliases: []
tags: []
---

![[Pasted image 20261006165356.png]]

![[Pasted image 20261006165703.png]]

## Layer Normalization

- Helps improve stability and efficiency of neural network training
- Adjusts activations (outputs) of a NN to have mean 0 variance 1
- Prevents vanishing/exploding gradients

![[Pasted image 20261006165824.png]]

## GELU Activation Function

- Gaussian Error Linear Unit (GELU) used to improve performance for deep learning models
- Used for non-linear layer between linear layers

$$
\text{GELU} (x) = x \cdot \Phi(x)
$$

$\Phi$ is the CDF of standard Gaussian distribution.

![[Pasted image 20261006170328.png]]

## Shortcut Connections

- Creates an alternate shorter path for gradient to flow through the network
- Helps mitigate vanishing gradients in residual networks

![[Pasted image 20261006170452.png]]

![[Pasted image 20261006170542.png]]

## Transformer Block

Connects attention and linear layers.

![[Pasted image 20261006170708.png]]

Has encoder (left) and decoder (right).

![[Pasted image 20261006170942.png]]

- GPT model has 12 transformer blocks in sequence.
- Starts with token embedding layer and positional embedding layer before the transformer blocks
- Ends with a linear output layer

![[Pasted image 20261006171045.png]]

## Weight Tying

- The input embedding weights are reused for the output layer
- Reduces memory footprint and complexities

![[Pasted image 20261006171703.png]]
