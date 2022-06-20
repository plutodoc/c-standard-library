# Punctuation

These are the punctuation symbols in C. The meaning of each symbol is detailed in the linked pages.

## { }

- In a [struct](https://en.cppreference.com/w/c/language/struct "c/language/struct") or [union](https://en.cppreference.com/w/c/language/union "c/language/union") definition, delimit the struct-declaration-list.
- In a [enum](https://en.cppreference.com/w/c/language/enum "c/language/enum") definition, delimit the enumerator list.
- Delimit a [compound statement](https://en.cppreference.com/w/c/language/statements#Compound_statements "c/language/statements"). The compound statement may be part of a [function definition](https://en.cppreference.com/w/c/language/function_definition "c/language/function definition").
- In [initialization](https://en.cppreference.com/w/c/language/initialization "c/language/initialization"), delimit the initializers.

## [ ]

- [Subscript operator](https://en.cppreference.com/w/c/language/operator_member_access#Subscript "c/language/operator member access").
- Part of [array declarator](https://en.cppreference.com/w/c/language/declarations#Declarators "c/language/declarations") in a [declaration](https://en.cppreference.com/w/c/language/declarations "c/language/declarations") or a [type-id](https://en.cppreference.com/w/c/language/type#Type_names "c/language/type").
- In [initialization](https://en.cppreference.com/w/c/language/initialization "c/language/initialization"), introduce a designator for an array element. (since C99)
- In a [attribute specifier](https://en.cppreference.com/w/c/language/attributes "c/language/attributes"), delimit the attributes. (since C23)

## \#

- Introduce a [preprocessing directive](https://en.cppreference.com/w/c/preprocessor "c/preprocessor").
- The [preprocessing operator for stringification](https://en.cppreference.com/w/c/preprocessor/replace#.23_and_.23.23_operators "c/preprocessor/replace").

## \##

- The [preprocessing operator for token pasting](https://en.cppreference.com/w/c/preprocessor/replace#.23_and_.23.23_operators "c/preprocessor/replace").

## ( )

- In a expression, [indicate grouping](https://en.cppreference.com/w/c/language/expressions#Primary_expressions "c/language/expressions").
- [Function call operator](https://en.cppreference.com/w/c/language/operator_other#Function_call "c/language/operator other").
- In a [`sizeof`](https://en.cppreference.com/w/c/language/sizeof "c/language/sizeof") or [`_Alignof`](https://en.cppreference.com/w/c/language/_Alignof "c/language/ Alignof") (since C11) expression, delimit the operand.
- In a [explicit cast](https://en.cppreference.com/w/c/language/cast "c/language/cast"), delimit the type-id.
- In a [compound literal](https://en.cppreference.com/w/c/language/compound_literal "c/language/compound literal"), delimit the type-id. (since C99)
- In a [declaration](https://en.cppreference.com/w/c/language/declarations "c/language/declarations") or a [type-id](https://en.cppreference.com/w/c/language/type#Type_names "c/language/type"), indicate grouping.
- In a [function declarator](https://en.cppreference.com/w/c/language/function_declaration "c/language/function declaration") (in a [declaration](https://en.cppreference.com/w/c/language/declarations "c/language/declarations") or a [type-id](https://en.cppreference.com/w/c/language/type#Type_names "c/language/type")), delimit the parameter list.
- In a [`if`](https://en.cppreference.com/w/c/language/if "c/language/if"), [`switch`](https://en.cppreference.com/w/c/language/switch "c/language/switch"), [`while`](https://en.cppreference.com/w/c/language/while "c/language/while"), [`do-while`](https://en.cppreference.com/w/c/language/do "c/language/do"), or [`for`](https://en.cppreference.com/w/c/language/for "c/language/for") statement, delimit the controlling clause.
- In a [function-like macro definition](https://en.cppreference.com/w/c/preprocessor/replace#Function-like_macros "c/preprocessor/replace"), delimit the macro parameters.
- Part of a `defined` or `__has_c_attribute` (since C23) preprocessing operator.
- Part of a [generic selection expression](https://en.cppreference.com/w/c/language/generic "c/language/generic"). (since C11)
- In an [`_Atomic`](https://en.cppreference.com/w/c/language/atomic "c/language/atomic") type specifier, delimit the type-id. (since C11)
- In a [static assertion declaration](https://en.cppreference.com/w/c/language/_Static_assert "c/language/ Static assert"), delimit the operands. (since C11)
- In an [`_Alignas`](https://en.cppreference.com/w/c/language/_Alignas "c/language/ Alignas") specifier, delimit the operand. (since C11)
- In an [attribute](https://en.cppreference.com/w/c/language/attributes "c/language/attributes"), delimit the attribute arguments. (since C23)

## ;

- Indicate the end of

- a [statement](https://en.cppreference.com/w/c/language/statements "c/language/statements") (including the init-statement of a for statement)
- a [declaration](https://en.cppreference.com/w/c/language/declarations "c/language/declarations") or struct-declaration-list

- Separate the second and third clauses of a [for statement](https://en.cppreference.com/w/c/language/for "c/language/for").

## :

- Part of [conditional operator](https://en.cppreference.com/w/c/language/operator_other#Conditional_operator "c/language/operator other").
- Part of [label declaration](https://en.cppreference.com/w/c/language/statements#Labels "c/language/statements").
- In a [bit-field member declaration](https://en.cppreference.com/w/c/language/bit_field "c/language/bit field"), introduce the width.

## ...

- In the [parameter list](https://en.cppreference.com/w/c/language/function_declaration#Parameter_list "c/language/function declaration") of a function declarator, signify a [variadic function](https://en.cppreference.com/w/c/language/variadic "c/language/variadic").
- In a [macro definition](https://en.cppreference.com/w/c/preprocessor/replace "c/preprocessor/replace"), signify a variadic macro. (since C99)

## ?

- Part of [conditional operator](https://en.cppreference.com/w/c/language/operator_other#Conditional_operator "c/language/operator other").
- In a [generic association](https://en.cppreference.com/w/c/language/generic "c/language/generic"), delimit the type-id or default and the selected expression. (since C11)

## ::

- In a [attribute](https://en.cppreference.com/w/c/language/attributes "c/language/attributes"), indicate attribute scope. (since C23)

## .

- [Member access operator](https://en.cppreference.com/w/c/language/operator_member_access#Member_access "c/language/operator member access").
- In [initialization](https://en.cppreference.com/w/c/language/initialization "c/language/initialization"), introduce a designator for a struct/union member. (since C99)

## ->

- [Member access operator](https://en.cppreference.com/w/c/language/operator_member_access#Member_access_through_pointer "c/language/operator member access").

## ~

- [Unary complement operator (a.k.a. bitwise not operator)](https://en.cppreference.com/w/c/language/operator_arithmetic#Bitwise_logic "c/language/operator arithmetic").

## !

- [Logical not operator](https://en.cppreference.com/w/c/language/operator_logical#Logical_NOT "c/language/operator logical").

## +

- [Unary plus operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Unary_arithmetic "c/language/operator arithmetic").
- [Binary plus operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Additive_operators "c/language/operator arithmetic").

## -

- [Unary minus operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Unary_arithmetic "c/language/operator arithmetic").
- [Binary minus operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Additive_operators "c/language/operator arithmetic").

## *

- [Indirection operator](https://en.cppreference.com/w/c/language/operator_member_access#Dereference "c/language/operator member access").
- [Multiplication operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Multiplicative_operators "c/language/operator arithmetic").
- Pointer operator operator in a [declarator](https://en.cppreference.com/w/c/language/declarations#Declarators "c/language/declarations") or in a [type-id](https://en.cppreference.com/w/c/language/type#Type_names "c/language/type").
- Placeholder for the length of a variable-length array declarator in a [function declaration](https://en.cppreference.com/w/c/language/function_declaration "c/language/function declaration"). (since C99)

## /

- [Division operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Multiplicative_operators "c/language/operator arithmetic").

## %

- [Modulo operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Multiplicative_operators "c/language/operator arithmetic").

## ^

- [Bitwise xor operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Bitwise_logic "c/language/operator arithmetic").

## &

- [Address-of operator](https://en.cppreference.com/w/c/language/operator_member_access#Address_of "c/language/operator member access").
- [Bitwise and operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Bitwise_logic "c/language/operator arithmetic").

## |

- [Bitwise or operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Bitwise_logic "c/language/operator arithmetic").

## =

- [Simple assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Simple_assignment "c/language/operator assignment").
- In [initialization](https://en.cppreference.com/w/c/language/initialization "c/language/initialization"), delimit the object and the initializer list.
- In a [enum definition](https://en.cppreference.com/w/c/language/enum "c/language/enum"), introduce the value of enumeration constant.

## +=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## -=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## *=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## /=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## %=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## ^=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## &=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## |=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## ==

- [Equality operator](https://en.cppreference.com/w/c/language/operator_comparison#Equality_operators "c/language/operator comparison").

## !=

- [Inequality operator](https://en.cppreference.com/w/c/language/operator_comparison#Equality_operators "c/language/operator comparison").

## <

- [Less-than operator](https://en.cppreference.com/w/c/language/operator_comparison#Relational_operators "c/language/operator comparison").
- Introduce a header name in a [#include directive](https://en.cppreference.com/w/c/preprocessor/include "c/preprocessor/include").

## >

- [Greater-than operator](https://en.cppreference.com/w/c/language/operator_comparison#Relational_operators "c/language/operator comparison").
- Indicate the end of a header name in a [`#include` directive](https://en.cppreference.com/w/c/preprocessor/include "c/preprocessor/include")

## <=

- [Less-than-or-equal-to operator](https://en.cppreference.com/w/c/language/operator_comparison#Relational_operators "c/language/operator comparison").

## >=

- [Greater-than-or-equal-to operator](https://en.cppreference.com/w/c/language/operator_comparison#Relational_operators "c/language/operator comparison").

## &&

- [Logical and operator](https://en.cppreference.com/w/c/language/operator_logical#Logical_AND "c/language/operator logical").

## ||

- [Logical or operator](https://en.cppreference.com/w/c/language/operator_logical#Logical_OR "c/language/operator logical").

## <<

- [Bitwise shift operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Shift_operators "c/language/operator arithmetic").

## >>

- [Bitwise shift operator](https://en.cppreference.com/w/c/language/operator_arithmetic#Shift_operators "c/language/operator arithmetic").

## <<=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## >>=

- [Compound assignment operator](https://en.cppreference.com/w/c/language/operator_assignment#Compound_assignment "c/language/operator assignment").

## ++

- [Increment operator](https://en.cppreference.com/w/c/language/operator_incdec "c/language/operator incdec").

## --

- [Decrement operator](https://en.cppreference.com/w/c/language/operator_incdec "c/language/operator incdec").

## ,

- [Comma operator](https://en.cppreference.com/w/c/language/operator_other#Comma_operator "c/language/operator other").
- List separator in

- the declarator list in a [declaration](https://en.cppreference.com/w/c/language/declarations "c/language/declarations")
- initializer list in [initialization](https://en.cppreference.com/w/c/language/initialization "c/language/initialization"), including [compound literals](https://en.cppreference.com/w/c/language/compound_literal "c/language/compound literal") (since C99)
- the argument list in a [function call expression](https://en.cppreference.com/w/c/language/operator_other#Function_call "c/language/operator other")
- the enumerator list in a [enum](https://en.cppreference.com/w/c/language/enum "c/language/enum") declaration
- the macro parameter list in a [function-like macro definition](https://en.cppreference.com/w/c/preprocessor/replace#Function-like_macros "c/preprocessor/replace")
- the generic association list in a [generic selection expression](https://en.cppreference.com/w/c/language/generic "c/language/generic") (since C11)
- an [attribute](https://en.cppreference.com/w/c/language/attributes "c/language/attributes") list (since C23)

- In a [static assertion declaration](https://en.cppreference.com/w/c/language/_Static_assert "c/language/ Static assert"), separate the arguments. (since C11)
- In a [generic selection expression](https://en.cppreference.com/w/c/language/generic "c/language/generic"), seperate the controlling expression and the generic association list. (since C11)
