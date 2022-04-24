## Lookup table for regex syntax

=== "Python"

    `\w`:

    :   Matches any word character (ASCII letter or digit)

    `\W`:

    :   Matches any non-word character

    `\s`:

    :   Matches any white-space character (including newlines)

    `\S`

    :   Matches any non-whitespace character

    `\d`

    :   Matches any digit

    `\D`

    :   Matches any non-digit

    `.`

    :   Matches any character except `\n`

    `a{}`

    :   Matches a specified number of token `a`
        `a{3}`
        :   Matches exactly 3

        `a{3,}`
        :   Matches 3 or more
        
        `a{,3}`
        :   Matches 3 or less
        
        `a{3,6}`
        :   Matches between 3 and 6

    `*`:

    :   Matches 0 or more of the preceding token. Non-greedy: `*?`

    `+`:

    :   Matches 1 or more of the preceding token Non-greedy: `+?`

    `?`:

    :   Matches 0 or 1 of the preceding token

    `\b`

    :   Word boundary (0 length)

    `\B`

    :   Non-word boundary (0 length)

    `^`

    :   Matches start of string or after `\n`. Must have `re.M` enabled

    `$`

    :   Matches end of string or before `\n`. Must have `re.M` enabled

    `[...]`

    :   Match any character in the brackets. Use `-` to indicate
        a range, i.e. `[a-zA-Z]` matches any character between a and z
        or A and Z. Use `\U{XXXXXXXX}` to match 8-bit unicode characters
        
    `[^...]`

    :   Matches any character not in the set

    `|`

    :   Boolean or. Matches one or the other

    `(...)`

    :   Capture group. Can be references later by `\{i}` where `i` is the group number

    `(?:...)`

    :   Non-capturing group. Captures anything inside but does not save it.

    `(?P<name>...)` { #named-capture-group }

    :   Named capture group. Referenced by `(?P=name)`

    `(?=...)` { #positive-lookahead }

    :   Positive lookahead. 0 length, match is discarded if lookahead does not match

    `(?!...)` { #negative-lookahead }

    :   Negative lookahead. 0 length, match is discarded if lookahead matches

    `(?<=...)` { #positive-lookbehind }

    :   Positive lookbehind. 0 length, fixed width. Match is discarded if lookbehind
        does not match

    `(?<!...)` { #negative-lookbehind }

    :   Negative lookbehind. 0 length, fixed width. Match is discarded if lookbehind matches.

    `Flags` { #flags }

    :   Pass as argument `flags=...` to `#!py re.compile()` or to the matching/substitution
        function if the pattern is not compiled.  
        Multiple flags are separated with `|`, i.e. `#!py flags=re.M|re.I`
        
        `re.DOTALL`, `re.S`

        :   `.` also matches `\n`
        
        `re.IGNORECASE`, `re.I`
        
        :   Perform case-insensitive matching

        `re.MULTILINE`, `re.M`
        
        :   Enables `^` to match start of lines and `$` to match end of lines

    `#!py re.match(pattern, string, flags=0)`

    :   Tries to match the start of the string

    `#!py re.search(pattern, string, flags=0)`

    :   Finds the first match in the string.

    `#!py re.findall(pattern, string, flags=0)`

    :   Finds all matches in string

    `#!py re.split(pattern, string, maxsplit=0, flags=0)`

    :   Splits the string at pattern matches. Returns any captured groups
        as part of the resulting list
        
    `#!py re.sub(pattern, repl, string, count=0, flags=0)`

    :   Substitutes matches with `repl`. Capture groups are references by their number
        using `\{i}` and named capture groups are referenced by `\g<name>`
        
    `#!py re.escape(pattern)`

    :   Escape special chars in pattern. Useful for matching a string with regex metachars
        in it

=== "Vim"

    `\w`:

    :   Matches any word character (ASCII letter or digit)

    `\W`:

    :   Matches any non-word character

    `\s`:

    :   Matches any white-space character (including newlines)

    `\S`

    :   Matches any non-whitespace character

    `\d`

    :   Matches any digit

    `\D`

    :   Matches any non-digit

    `\l`

    :   Matches any lowercase character (invertible with `\L`)

    `\u`

    :   Matches any lowercase character (invertible with `\U`)

    `.`

    :   Matches any character except `\n`

    `\_.` { #single-line }

    :   Matches any character including `\n`

    `a\{}`

    :   Matches a specified number of token `a`
        `a\{3}`
        :   Matches exactly 3

        `a\{3,}`
        :   Matches 3 or more
        
        `a\{,3}`
        :   Matches 3 or less
        
        `a\{3,6}`
        :   Matches between 3 and 6

    `*`:

    :   Matches 0 or more of the preceding token. Non-greedy: `\{-}`

    `\+`:

    :   Matches 1 or more of the preceding token. Non-greedy: `\(-1,}`

    `\=`:

    :   Matches 0 or 1 of the preceding token

    `\<`, `\>`

    :   Word boundary (0 length)

    `\B`

    :   ==Not supported==

    `^`

    :   Matches start of string or after `\n`

    `$`

    :   Matches end of string or before `\n`

    `[...]`

    :   Match any character in the brackets. Use `-` to indicate
        a range, i.e. `[a-zA-Z]` matches any character between a and z
        or A and Z. Use `\U{XXXXXXXX}` to match 8-bit unicode characters
        
    `[^...]`

    :   Matches any character not in the set

    `\|`

    :   Boolean or. Matches one or the other

    `\(...\)`

    :   Capture group. Can be references later by `\{i}` where `i` is the group number

    `\%(...\)` { #vim-non-capturing-group }

    :   Non-capturing group. Captures anything inside but does not save it.

    `(?P<name>...)` { #named-capture-group }

    :   ==Not supported==

    `\(...\)\@=` { #positive-lookahead }

    :   Positive lookahead. 0 length, match is discarded if lookahead does not match

    `\(...\)\@!` { #negative-lookahead }

    :   Negative lookahead. 0 length, match is discarded if lookahead matches

    `\(...\)\@<=` { #positive-lookbehind }

    :   Positive lookbehind. 0 length, fixed width. Match is discarded if lookbehind
        does not match

    `\(...\)\@<!` { #negative-lookbehind }

    :   Negative lookbehind. 0 length, fixed width. Match is discarded if lookbehind matches.

    `Flags` { #flags }

    :   Flags are specified after the pattern `/pattern/<flags>`  
        They are applicable for the substitute command only

        `g`
        :   Replaces all occurrences of the pattern on a line, rather than just the first

        `c`
        :   Ask for confirmation before each replacement
        
        `i`
        :   Case insensitive search
        
        `I`
        :   Not case insensitive search
