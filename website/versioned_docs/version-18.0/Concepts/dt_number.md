---
id: version-18.0-number
title: Number (Real, Longint, Integer)
original_id: number
---

Number is a generic term that stands for:

- Real field, variable or expression. The range for the Real data type is ±1.7e±308 (13 significant digits). 
- Long Integer field, variable or expression. The range for the Long Integer data type (4-byte Integer) is -2^31..(2^31)-1. 
- Integer field, array or expression. The range for the Integer data type (2-byte Integer) is -32,768..32,767 (2^15..(2^15)-1).

**Note:** Integer field values are automatically converted in Long integers when used in the 4D Language.

You can assign any Number data type to another; 4D does the conversion, truncating or rounding if necessary. However, when values are out of range, the conversion will not return a valid value. You can mix Number data types in expressions.

**Note:** In the 4D Language Reference manual, no matter the actual data type, the Real, Integer, and Long Integer parameters in command descriptions are denoted as number, except when marked otherwise.

    
## Number literals   

A numeric literal constant is written as a real number. Here are some examples of numeric constants:

```4d
27
123.76
0.0076
```

**Note:** Since 4D v15, the default decimal separator is a period (.), regardless of the system language. If you have checked the "Use regional system settings" option (see Methods Page), you must use the separator defined in your system.

Negative numbers are specified with the minus sign (-). For example:

```4d
-27
-123.76
-0.0076
```
 
## Number operators 

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|Addition	|Number + Number	|Number	|2 + 3	|5|
|Subtraction	|Number - Number	|Number	|3 – 2	|1|
|Multiplication	|Number * Number	|Number	|5 * 2	|10|
|Division	|Number /Number	|Number	|5 / 2	|2.5|
|Longint division	|Number \ Number	|Number	|5 \ 2	|2|
|Modulo	|Number % Number	|Number	|5 % 2	|1|
|Exponentiation	|Number ^ Number	|Number	|2 ^ 3|	8|
|Equality	|Number = Number	|Boolean	|10 = 10	|True|
			||||10 = 11|	False|
|Inequality	|Number # Number	|Boolean	|10 #11	|True|
			||||10 # 10	|False|
|Greater than	|Number > Number	|Boolean	|11 > 10	|True|
			||||10 > 11	|False|
|Less than	|Number < Number	|Boolean	|10 < 11	|True|
		||||	11 < 10	|False|
|Greater than or equal to	|Number >= Number	|Boolean	|11 >= 10	|True|
			||||10 >= 11	|False|
|Less than or equal to	|Number <= Number	|Boolean	|10 <= 11	|True|
		||||	11 <= 10	|False|

The modulo operator % divides the first number by the second number and returns a whole number remainder. Here are some examples:

- 10 % 2 returns 0 because 10 is evenly divided by 2.
- 10 % 3 returns 1 because the remainder is 1.
- 10.5 % 2 returns 0 because the remainder is not a whole number.

**WARNING:**
- The modulo operator % returns significant values with numbers that are in the Long Integer range (from minus 2^31 to 2^31 minus one). To calculate the modulo with numbers outside of this range, use the `Mod` command.
- The longint division operator \ returns significant values with integer numbers only. 

### Precedence

The order in which an expression is evaluated is called precedence. 4D has a strict left-to-right precedence, in which algebraic order is not observed. For example:

```4d
 3+4*5
```

returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35.

To override the left-to-right precedence, you MUST use parentheses. For example:

```4d
 3+(4*5)
```

returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23.

Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses—the compiler detects a missing parenthesis as a syntax error.
