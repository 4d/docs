---
id: number
title: Number (Real, Longint, Integer)
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

> The default decimal separator is a period (.), regardless of the system language. If you have checked the "Use regional system settings" option in the Methods Page of the Preferences, you must use the separator defined in your system.

Negative numbers are specified with the minus sign (-). For example:

```4d
-27
-123.76
-0.0076
```

## Number operators

| Operation                | Sintaxe          | Returns  | Expression | Value |
| ------------------------ | ---------------- | -------- | ---------- | ----- |
| Addition                 | Number + Number  | Número   | 2 + 3      | 5     |
| Subtraction              | Number - Number  | Número   | 3 – 2      | 1     |
| Multiplication           | Number * Number  | Número   | 5 * 2      | 10    |
| Division                 | Number / Number  | Número   | 5 / 2      | 2.5   |
| Longint division         | Number \ Number | Número   | 5 \ 2     | 2     |
| Modulo                   | Number % Number  | Número   | 5 % 2      | 1     |
| Exponentiation           | Number ^ Number  | Número   | 2 ^ 3      | 8     |
| Equality                 | Number = Number  | Booleano | 10 = 10    | True  |
|                          |                  |          | 10 = 11    | False |
| Desigualdade             | Number # Number  | Booleano | 10 #11     | True  |
|                          |                  |          | 10 # 10    | False |
| Greater than             | Number > Number  | Booleano | 11 > 10    | True  |
|                          |                  |          | 10 > 11    | False |
| Less than                | Number < Number  | Booleano | 10 < 11    | True  |
|                          |                  |          | 11 < 10    | False |
| Greater than or equal to | Number >= Number | Booleano | 11 >= 10   | True  |
|                          |                  |          | 10 >= 11   | False |
| Less than or equal to    | Number <= Number | Booleano | 10 <= 11   | True  |
|                          |                  |          | 11 <= 10   | False |

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


## Bitwise operators

The bitwise operators operates on **Long Integer** expressions or values.

> If you pass an Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left.

Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:

| Operation              | Operator  | Sintaxe             | Returns              |
| ---------------------- | --------- | ------------------- | -------------------- |
| Bitwise AND            | &         | Long & Long         | Long                 |
| Bitwise OR (inclusive) | &#124;    | Long &#124; Long    | Long                 |
| Bitwise OR (exclusive) | \^&#124; | Long \^&#124; Long | Long                 |
| Left Bit Shift         | <<        | Long << Long        | Long (see note 1)    |
| Right Bit Shift        | >>        | Long >> Long        | Long (see note 1)    |
| Bit Set                | ?+        | Long ?+ Long        | Long (see note 2)    |
| Bit Clear              | ?-        | Long ?- Long        | Long (see note 2)    |
| Bit Test               | ??        | Long ?? Long        | Boolean (see note 2) |

#### Notas

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.



The following table lists the bitwise operators and their effects:

| Operation              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitwise AND            | Each resulting bit is the logical AND of the bits in the two operands. <p>Here is the logical AND table:<li>1 & 1 --> 1<li>0 & 1 --> 0<li>1 & 0 --> 0<li>0 & 0 --> 0<p>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.                                           |
| Bitwise OR (inclusive) | Each resulting bit is the logical OR of the bits in the two operands.<p>Here is the logical OR table:<li>1 &#124; 1 --> 1<li>0 &#124; 1 --> 1<li>1 &#124; 0 --> 1<li>0 &#124; 0 --> 0<p>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.           |
| Bitwise OR (exclusive) | Each resulting bit is the logical XOR of the bits in the two operands.<p>Here is the logical XOR table:<li>1 \^&#124; 1 --> 0<li>0 \^&#124; 1 --> 1<li>1 \^&#124; 0 --> 1<li>0 \^&#124; 0 --> 0<p>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0. |
| Left Bit Shift         | The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. <p>**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.                                                                   |
| Right Bit Shift        | The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.<p>**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.                                                                      |
| Bit Set                | The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.                                                                                                                                                                                                                                                                                |
| Bit Clear              | The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.                                                                                                                                                                                                                                                                                |
| Bit Test               | Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.                                                                                                                                                                                                                                   |

### Exemplos

| Operation              | Exemplo                         | Result     |
| ---------------------- | ------------------------------- | ---------- |
| Bitwise AND            | 0x0000FFFF & 0xFF00FF00         | 0x0000FF00 |
| Bitwise OR (inclusive) | 0x0000FFFF &#124; 0xFF00FF00    | 0xFF00FFFF |
| Bitwise OR (exclusive) | 0x0000FFFF \^&#124; 0xFF00FF00 | 0xFF0000FF |
| Left Bit Shift         | 0x0000FFFF << 8                 | 0x00FFFF00 |
| Right Bit Shift        | 0x0000FFFF >> 8                 | 0x000000FF |
| Bit Set                | 0x00000000 ?+ 16                | 0x00010000 |
| Bit Clear              | 0x00010000 ?- 16                | 0x00000000 |
| Bit Test               | 0x00010000 ?? 16                | True       |
