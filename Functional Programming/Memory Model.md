---
id: Memory Model
aliases: []
tags: []
---

Primitive values are allocated on the stack.

Composite values are allocated on the heap.

```fsharp
let xs = [ 5; 6; 7 ]
let ys = 3 :: 4 :: xs
let zs = xs @ ys
let n = 27
```

![[Pasted image 20240228082722.png#invert|800]]

- The linked list `xs` is not copied when constructing `ys`
- `xs` is only copied when building `xs @ ys`
