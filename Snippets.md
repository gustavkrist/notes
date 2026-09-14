---
id: Snippets
aliases: []
tags: []
---
```js
    // Text elements
    {trigger: "conote", replacement: "> [!NOTE]\n> ", options: "tA", priority: -1},
    {trigger: "nconote", replacement: "> [!NOTE] $0\n> $1", options: "tA"},
    {trigger: "coexam", replacement: "> [!EXAMPLE]\n> ", options: "tA", priority: -1},
    {trigger: "ncoexam", replacement: "> [!EXAMPLE] $0\n> $1", options: "tA"},
    
    // Math
    {trigger: ":([a-z])", replacement: "\\vec{[[0]]}", options: "mrA", priority: -1},
    {trigger: "disp", replacement: "\\displaystyle", options: "mA"},
    {trigger: "@6", replacement: "\\partial", options: "mA"},
    {trigger: "@.", replacement: "\\cdot", options: "mA"},
    {trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},
    {trigger: "norm", replacement: "\\norm{$0}$1", options: "mA", priority: 1},
    {trigger: "abs", replacement: "\\abs{$0}$1", options: "mA", priority: 1},
    {trigger: "in", replacement: "\\in", options: "mA"},
    {trigger: "\\\\in([A-Za-z])", replacement: "\\in [[0]]", options: "rmA"},

    // Neural Networks
    {trigger: "OL", replacement: "^{(o)}", options: "mA"},
    {trigger: "HL", replacement: "^{(h)}", options: "mA"},

    // Bold, italic, underline, etc.
    {trigger: "U", replacement: "<u>${VISUAL}</u>", options: "tA"},
    {trigger: "B", replacement: "**${VISUAL}**", options: "tA"},
    {trigger: "I", replacement: "*${VISUAL}*", options: "tA"},
    {trigger: "E", replacement: "***${VISUAL}***", options: "tA"},
    {trigger: "H", replacement: "==${VISUAL}==", options: "tA"},
    {trigger: "S", replacement: "~~${VISUAL}~~", options: "tA"},

    // Mermaid
    {trigger: "merm`", replacement: "```mermaid\n$0\n```", options: "tA"},
    {trigger: "tdg", replacement: "```mermaid\ngraph TD\n  $0\n```", options: "tA"},
    {trigger: "definv", replacement: "classDef invis fill-opacity:0, stroke-opacity:0;", options: "tA"},
    {trigger: "::i", replacement: ":::invis", options: "tA"},
    {trigger: "->|", replacement: "-->|$0| $1", options: "tA"},

    // Code block triggers
    {trigger: "py`", replacement: "```python\n$0\n```", options: "tA"},
    {trigger: "fs`", replacement: "```fsharp\n$0\n```", options: "tA"},
    {trigger: "sql`", replacement: "```SQL\n$0\n```", options: "tA"},
```
