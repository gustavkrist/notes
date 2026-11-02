---
id: "Pretraining on Unlabeled Data"
aliases: []
tags: []
---
## Text Generation Loss

- Indicator of performance during training process
- Loss function gradient is computed and used for back propagation
- Cross entropy loss measures difference between two probability distributions
  - Negative average log likelihood in pytorch
- Perplexity measures how well a model's prediction probability distribution matches the actual distribution in the dataset
  - Lower perplexity = better

## Training the LLM

![[Pasted image 20261014001921.png]]

- 90/10% train/test split
- Train over N epochs, loss should go down with number of epochs
- Optimizer (Adam/AdamW) adjusts learning rate and other parameters over epochs

### Tracking training and validation loss

- Training loss measures how well the model learns from training data
- Validation loss measures performance on unseen data, helps to detect overfitting

### Decoding strategies for controlling randomness

- Temperature is a decoding strategy to add probabilistic selection process for token selection
- Top-k sampling limits sampled tokens to top-k most likely tokens
- Greedy selects the token with highest probability

## Load pre-trained weights from OpenAI

