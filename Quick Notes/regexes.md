Replace math blocks with $$ blocks

```vim
:%s/```math.*\(\n\(\_.\(`\)\@!\)*\n\)```/\$\$\1\$\$/g
```

Find all words with criteria in tweets

```regex
http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|
(?:%[0-9a-fA-F][0-9a-fA-F]))+|www\.\w+\.\w{3}|
[012]?[0-9](?:(?::[0-6]{2})|(?:[AP]M))+|#?\b[12]\d{3}\b|
[6-9]0'?s|[\U0000263a-\U000e007f]|\b\d{1,3}%|(?:1)?0\/10|
(?<![!\-:/])\b\d{1}\b(?![!\-:/])|(?<!#)\b[A-Z]\w+\s[A-Z]\p{L}\w*\b|
w\/|w\/o|['"]\b\p{L}+\b(?:'\b\w+\b)?(?:-\b\w+\b)?['"]|
@?#?\b\p{L}+\d*\b(?:'\b\w+\b)?(?:-(?!http)\b\w+\b)?
```

Parser extended admonitions functionality

```javascript
function admonition(st) {
  pat = /^(?<tabs>\ *)\?\?\?(\+)?\ (\w+)\s(.*)\n((?:\k<tabs>\ {4}.*\n?)+)/gm
  st = st.replace(pat, function(whole, tabs, open, type, title, content) {
    content = content.replace(/^\s{4}/gm, "")
    rep = "<details class=\"admonition " + type + "\""
    if (open == "+") {
      rep += "open>"
    } else {
      rep += ">"
    }
    rep += "<summary class=\"admonition-title\">" + title + "</summary>\n\n"
    rep += content + "\n" + tabs + "</details>" + "\n\n"
    return rep
  })
  return st
}
newmarkdown = admonition(markdown)
while (newmarkdown != markdown) {
  markdown = newmarkdown
  newmarkdown = admonition(markdown)
}
```
