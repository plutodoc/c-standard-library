# Phases of translation

The C source file is processed by the compiler _as if_ the following phases take place, in this exact order. Actual implementation may combine these actions or process them differently as long as the behavior is the same.

## Phase 1

1. The individual bytes of the source code file (which is generally a text file in some multibyte encoding such as UTF-8) are mapped, in implementation defined manner, to the characters of the _source character set_. In particular, OS-dependent end-of-line indicators are replaced by newline characters.

   The _source character set_ is a multibyte character set which includes the _basic source character set_ as a single-byte subset, consisting of the following 96 characters:

   1. 5 whitespace characters (space, horizontal tab, vertical tab, form feed, new-line)

   2. 10 digit characters from `0` to `9`

   3. 52 letters from `a` to `z` and from `A` to `Z`

   4. 29 punctuation characters: `_` `{` `}` `[` `]` `#` `(` `)` `<` `>` `%` `:` `;` `.` `?` `*` `+` `-` `/` `^` `&` `|` `~` `!` `=` `,` `\` `"` `'`

2. [Trigraph sequences](https://en.cppreference.com/w/c/language/operator_alternative "c/language/operator alternative") are replaced by corresponding single-character representations.

## Phase 2

1. Whenever backslash appears at the end of a line (immediately followed by the newline character), both backslash and newline are deleted, combining two physical source lines into one logical source line. This is a single-pass operation: a line ending in two backslashes followed by an empty line does not combine three lines into one.

2. If a non-empty source file does not end with a newline character after this step (whether it had no newline originally, or it ended with a backslash), the behavior is undefined.

## Phase 3

1. The source file is decomposed into [comments](https://en.cppreference.com/w/c/comment "c/comment"), sequences of whitespace characters (space, horizontal tab, new-line, vertical tab, and form-feed), and _preprocessing tokens_, which are the following

   1. header names: `<stdio.h>` or `myfile.h`

   2. [identifiers](https://en.cppreference.com/w/c/language/identifier)

   3. preprocessing numbers, which cover [integer constants](https://en.cppreference.com/w/c/language/integer_constant "c/language/integer constant") and [floating constants](https://en.cppreference.com/w/c/language/floating_constant "c/language/floating constant"), but also cover some invalid tokens such as `1..E+3.foo` or `0JBK`

   4. [character constants](https://en.cppreference.com/w/c/language/character_constant) and [string literals](https://en.cppreference.com/w/c/language/string_literal)

   5. operators and punctuators, such as `+`, `<<=`, `<%`, or `##`.

   6. individual non-whitespace characters that do not fit in any other category

2. Each comment is replaced by one space character

3. Newlines are kept, and it's implementation-defined whether non-newline whitespace sequences may be collapsed into single space characters.

If the input has been parsed into preprocessing tokens up to a given character, the next preprocessing token is generally taken to be the longest sequence of characters that could constitute a preprocessing token, even if that would cause subsequent analysis to fail. This is commonly known as _maximal munch_.

```c
int foo = 1;
int bar = 0xE+foo;   // error: invalid preprocessing number 0xE+foo
int baz = 0xE + foo; // OK
int pub = bar+++baz;   // OK: bar++ + baz
int ham = bar++-++baz; // OK: bar++ - ++baz
int qux = bar+++++baz; // error: bar++ ++ +baz, not bar++ + ++baz.
```

The sole exception to the maximal munch rule is:

- Header name preprocessing tokens are only formed within a `#include` directive and in implementation-defined locations within a `#pragma` directive.

```c
#define MACRO_1 1
#define MACRO_2 2
#define MACRO_3 3
#define MACRO_EXPR (MACRO_1 <MACRO_2> MACRO_3) // OK: <MACRO_2> is not a header-name
```

## Phase 4

1. [Preprocessor](https://en.cppreference.com/w/c/preprocessor) is executed.

2. Each file introduced with the [#include](https://en.cppreference.com/w/c/preprocessor/include "c/preprocessor/include") directive goes through phases 1 through 4, recursively.

3. At the end of this phase, all preprocessor directives are removed from the source.

## Phase 5

1. All characters and [escape sequences](https://en.cppreference.com/w/c/language/escape "c/language/escape") in [character constants](https://en.cppreference.com/w/c/language/character_constant "c/language/character constant") and [string literals](https://en.cppreference.com/w/c/language/string_literal "c/language/string literal") are converted from _source character set_ to _execution character set_ (which may be a multibyte character set such as UTF-8, as long as all 96 characters from the _basic source character set_ listed in phase 1 have single-byte representations). If the character specified by an escape sequence isn't a member of the execution character set, the result is implementation-defined, but is guaranteed to not be a null (wide) character.

Note: the conversion performed at this stage can be controlled by command line options in some implementations: gcc and clang use `-finput-charset` to specify the encoding of the source character set, `-fexec-charset` and `-fwide-exec-charset` to specify the encodings of the execution character set in the string literals and character constants that don't have an encoding prefix (since C11).

## Phase 6

Adjacent [string literals](https://en.cppreference.com/w/c/language/string_literal "c/language/string literal") are concatenated.

## Phase 7

Compilation takes place: the tokens are syntactically and semantically analyzed and translated as a translation unit.

## Phase 8

Linking takes place: Translation units and library components needed to satisfy external references are collected into a program image which contains information needed for execution in its execution environment (the OS).
