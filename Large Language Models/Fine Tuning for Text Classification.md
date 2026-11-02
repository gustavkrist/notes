---
id: "Fine Tuning for Text Classification"
aliases: []
tags: []
---

## Types of fine tuning

| Type                                | Description                                                      | Pros                                 | Cons                                         | Best Use Case                            |
| ---                                 | ---                                                              | ---                                  | ---                                          | ---                                      |
| Full Fine-Tuning                    | Update all model parameters on your dataset.                     | Highest flexibility and performance. | Requires huge compute and large dataset.     | When you have lots of data and resources |
| Feature-Based Fine-Tuning           | Freeze base model, train only new head(e.g., classifier).        | Lightweight, fast, less compute.     | Limited improvement for complex tasks        | Simple tasks like classification         |
| Parameter-Efficient(LoRA, Adapters) | Add small trainable modules, keep most weights frozen.           | Saves memory and compute,scalable    | Slightly less powerful than full fine-tuning | Domain adaptation with limited resources |
| Prompt-Based Fine-Tuning            | Learn soft prompts or prefix tokens instead of changing weights. | Extremely efficient, minimal compute | Works best for tasks similar to pre-training | Quick adaptation for similar tasks       |

- Two common categories for fine tuning:
  - Instruction fine tuning
    - Tasks involving complex use instructions
    - Classification with further explanation behind the choice of label
  - Classification fine tuning
    - Classification with set labels
    - Model is only allowed to respond with one of the labels

## Classification Fine Tuning Steps

### Stage 1: Dataset preparation

1) Download the dataset
  - ***Labeled*** dataset
2) Preprocess dataset
3) Create data loaders

> [!note]
> Sequences are padded to the max length of the batch with padding tokens
>
> Longer sequences are truncated

### Stage 2: Model setup

4) Initialize model
5) Load pretrained weights
6) Modify model for fine-tuning
  - Add a classification head to the model
  - Replace the original linear output layer with a layer that maps from embedding size to 2 units, with the 2 units representing the two class labels
7) Implement evaluation utilities

### Stage 3: Model fine-tuning and usage

8) Fine-tune model
9) Evaluate fine-tuned model
10) Use model on new data

## Fine tuning timeline

![[Pasted image 20261028000348.png]]

Process is going on to improve fine-tuning techniques.
