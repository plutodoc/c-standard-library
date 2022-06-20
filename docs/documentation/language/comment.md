# Comments

Comments serve as a sort of in-code documentation. When inserted into a program, they are effectively ignored by the compiler; they are solely intended to be used as notes by the humans that read source code.

## Syntax

<table><tbody><tr><td colspan="10"></td></tr><tr><td><code><b>/*</b></code> <span>comment</span> <code><b>*/</b></code></td><td>(1)</td><td></td></tr><tr><td colspan="10"></td></tr><tr><td><code><b>//</b></code> <span>comment</span></td><td>(2)</td><td><span>(since C99)</span></td></tr><tr><td colspan="10"></td></tr></tbody></table>

1. Often known as "C-style" or "multi-line" comments.

2. Often known as "C++-style" or "single-line" comments.

All comments are removed from the program at [translation phase 3](https://en.cppreference.com/w/c/language/translation_phases "c/language/translation phases") by replacing each comment with a single whitespace character.

## C-style

C-style comments are usually used to comment large blocks of text or small fragments of code; however, they can be used to comment single lines. To insert text as a C-style comment, simply surround the text with `/*` and `*/`. C-style comments tell the compiler to ignore all content between `/*` and `*/`. Although it is not part of the C standard, `/**` and `*/` are often used to indicate documentation blocks; this is legal because the second asterisk is simply treated as part of the comment.

Except within a [character constant](https://en.cppreference.com/w/c/language/character_constant "c/language/character constant"), a [string literal](https://en.cppreference.com/w/c/language/string_literal "c/language/string literal"), or a comment, the characters `/*` introduce a comment. The contents of such a comment are examined only to identify multibyte characters and to find the characters `*/` that terminate the comment. C-style comments cannot be nested.

<table><tbody><tr><td><h3><span id="C.2B.2B-style">C++-style</span></h3><p>C++-style comments are usually used to comment single lines of text or code; however, they can be placed together to form multi-line comments. To insert text as a C++-style comment, simply precede the text with <code>//</code> and follow the text with the new line character. C++-style comments tell the compiler to ignore all content between <code>//</code> and a new line.</p><p>Except within a <a href="https://en.cppreference.com/w/c/language/character_constant" title="c/language/character constant">character constant</a>, a <a href="https://en.cppreference.com/w/c/language/string_literal" title="c/language/string literal">string literal</a>, or a comment, the characters <code>//</code> introduce a comment that includes all multibyte characters up to, but not including, the next new-line character. The contents of such a comment are examined only to identify multibyte characters and to find the new-line character that terminates the comment. C++-style comments can be nested:</p><div dir="ltr"><pre><span>//  y = f(x);   // invoke algorithm</span></pre></div><p>A C-style comment may appear within a C++-style comment:</p><div dir="ltr"><pre><span>//  y = f(x);   /* invoke algorithm */</span></pre></div><p>A C++-style comment may appear within a C-style comment; this is a mechanism for excluding a small block of source code:</p><div dir="ltr"><pre><span>/*
    y = f(x);   // invoke algorithms
    z = g(x);
*/</span></pre></div></td><td><span>(since C99)</span></td></tr></tbody></table>

## Notes

Because comments [are removed](https://en.cppreference.com/w/c/language/translation_phases "c/language/translation phases") before the preprocessor stage, a macro cannot be used to form a comment and an unterminated C-style comment doesn't spill over from an #include'd file.

```c
/* An attempt to use a macro to form a comment. */
/* But, a space replaces characters "//".       */
#ifndef DEBUG
    #define PRINTF //
#else
    #define PRINTF printf
#endif
...  
PRINTF("Error in file %s at line %i\n", __FILE__, __LINE__);
```

Besides commenting out, other mechanisms used for source code exclusion are:

```c
#if 0
    puts("this will not be compiled");
    /* no conflict with C-style comments */
    // no conflict with C++-style comments
#endif
```

and

```c
if(0) {
    puts("this will be compiled but not be executed");
    /* no conflict with C-style comments */
    // no conflict with C++-style comments
}
```

The introduction of // comments in C99 was a breaking change in some rare circumstances:

```c
a = b //*divisor:*/ c
+ d; /* C89 compiles a = b / c + d;
        C99 compiles a = b + d; */
```

## Example

```c
#include <stdio.h>
/*
C-style comments can contain
multiple lines.
*/
 
/* Or, just one line. */
 
// C++-style comments can comment one line.
 
// Or, they can
// be strung together.
 
int main(void)
{
  // The below code won't be run
  // puts("Hello");
 
  // The below code will be run
  puts("World");
 
  // A note regarding backslash + newline.
  // Despite belonging to translation phase 2 (vs phase 3 for comments),
  // '\' still determines which portion of the source code is considered
  // as 'comments':
  // This comment will be promoted to the next line \
  puts("Won't be run"); // may issue a warning "multi-line comment"
  puts("Hello, again");
}
```

Output:

```text
World
Hello, again
```
