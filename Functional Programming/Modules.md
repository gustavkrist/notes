---
id: Modules
aliases: []
tags: []
---

Characterized by:
- A signature (.fsi file)
- A matching implementation (.fs file)

## Signatures

Given in .fsi files

```fsharp
module ModuleName
  type T  // required type
  val f : <type>  // required function
  val g : <type>  // required function
```

The visible functions must be implemented, and the types listed must be defined.

## Implementations

Given in .fs files

```fsharp
module ModuleName  // (same name as in .fsi)
  type T = <def>  // must be discrete union or record
  let f = <implementation>
  let g = <implementation>
```
