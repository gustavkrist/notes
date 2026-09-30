---
id: "Working With Text Data"
aliases: []
tags: []
---
## Embedding

Process of converting data into a vector format. An embedding model converts raw input into a vector representation.

![[Pasted image 20260922160121.png]]

1. Tokenize text
2. Convert tokens into token IDs
  a. Each token gets a unique ID (possibly in alphabetical order)
3. Convert token IDs to embeddings

- Corpus : Complete training data text
- Vocabulary : All unique tokens in the training set
- Encoding : Converting the text into token IDs
- Decoding : Converting token IDs into text

### Special Context Tokens

- `<unk>` token for out of vocabulary words
- i.e. `<endoftext>` token for end of text

### Byte Pair Encoding (BPE)

- Sophisticated tokenizer which breaks down words into subunits that are not present in the pre-defined vocabulary
  - I.e. tiktoken
- Can encode/decode unknown words correctly

### Creating token embeddings

- Token IDs converted to embedding vectors of continuous numbers using **embedding layer**
- Word positions are also encoded
  - Absolute positional embedding
  - Relative positional embedding

![[Pasted image 20260922161748.png]]


