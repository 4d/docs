---
id: number
title: Number (Real, Longint, Integer)
---

Número é um termo genérico que significa:

- Campo real, variável ou expressão. O intervalo para o tipo de dados Real é de ±1,7e±308 (13 dígitos significativos).
- Campo Inteiro Longo, variável ou expressão. O intervalo para o tipo de dados Long Integer (4-byte Integer) é -2^31...(2^31)-1.
- Campo inteiro, array ou expressão. The range for the Integer data type (2-byte Integer) is -32,768..32,767 (2^15..(2^15)-1).

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

Negative numbers are specified with the minus sign (-). Por exemplo:

```4d
-27
-123.76
-0.0076
```

## Number operators

| Operação             | Sintaxe          | Retorna  | Expressão | Value |
| -------------------- | ---------------- | -------- | --------- | ----- |
| Addition             | Number + Number  | Número   | 2 + 3     | 5     |
| Subtração            | Número - Número  | Número   | 3 – 2     | 1     |
| Multiplicação        | Número * Número  | Número   | 5 * 2     | 10    |
| Division             | Número / Número  | Número   | 5 / 2     | 2.5   |
| Divisão inteira      | Número \ Número | Número   | 5 \ 2    | 2     |
| Módulo               | Número % Número  | Número   | 5 % 2     | 1     |
| Exponenciação        | Número ^ Número  | Número   | 2 ^ 3     | 8     |
| Igual                | Número = Número  | Booleano | 10 = 10   | True  |
|                      |                  |          | 10 = 11   | False |
| Desigualdade         | Número # Número  | Booleano | 10 #11    | True  |
|                      |                  |          | 10 # 10   | False |
| Maior que            | Number >= Number | Booleano | 11 > 10   | True  |
|                      |                  |          | 10 > 11   | False |
| Menor que            | Number <= Number | Booleano | 10 < 11   | True  |
|                      |                  |          | 11 < 10   | False |
| Maior ou igual a     | Number >= Number | Booleano | 11 >= 10  | True  |
|                      |                  |          | 10 >= 11  | False |
| Menor que ou igual a | Number <= Number | Booleano | 10 <= 11  | True  |
|                      |                  |          | 11 <= 10  | False |

O operador do módulo % divide o primeiro número pelo segundo número e devolve um número inteiro restante. Aqui estão alguns exemplos:

- 10 % 2 retorna 0 porque 10 é dividido uniformemente por 2.
- 10 % 3 devolve 1 porque o resto é 1.
- 10,5% 2 devolve 0 porque o resto não é um número inteiro.

**AVISO:**
- O operador do módulo % devolve valores significativos com números que se encontram na gama do Long Integer (de menos 2^31 a 2^31 menos um). Para calcular o modulo com números fora deste intervalo, utilizar o comando `Mod` .
- O operador da divisão de longint retorna valores significativos apenas com números inteiros.

### Precedência

A ordem pela qual uma expressão é avaliada é chamada precedência. 4D tem uma estrita precedência da esquerda para a direita, na qual a ordem algébrica não é observada. Por exemplo:

```4d
 3+4*5
```

retorna 35, porque a expressão é avaliada como 3 + 4, produzindo 7, que é depois multiplicada por 5, com o resultado final de 35.

Para anular a precedência da esquerda para a direita, DEVE usar parênteses. Por exemplo:

```4d
 3+(4*5)
```

retorna 23 porque a expressão (4 * 5) é avaliada em primeiro lugar, por causa dos parênteses. O resultado é 20, que é depois adicionado a 3 para o resultado final de 23.

Os parênteses podem ser aninhados dentro de outros conjuntos de parênteses. Certifique-se de que cada parêntese esquerdo tem um parêntese direito correspondente para assegurar uma avaliação adequada das expressões. A falta ou utilização incorrecta de parênteses pode causar resultados inesperados ou expressões inválidas. Além disso, se pretende compilar as suas candidaturas, deve ter parênteses correspondentes - o compilador detecta um parêntese em falta como um erro de sintaxe.


## Operadores Bitwise

The bitwise operators operates on **Long Integer** expressions or values.

> If you pass an Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left.

Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:

| Operação               | Operator  | Sintaxe                | Retorna              |
| ---------------------- | --------- | ---------------------- | -------------------- |
| Bitwise AND            | &         | Long & Long            | Long                 |
| Bitwise OR (inclusive) | &#124;    | Long &#124; Long       | Long                 |
| Bitwise OR (exclusive) | \^&#124; | Long \^&#124; E. long | Long                 |
| Left Bit Shift         | <<        | Long << Long           | Long (see note 1)    |
| Right Bit Shift        | >>        | Long >> Long           | Long (see note 1)    |
| Bit Set                | ?+        | Long ?+ Long           | Long (see note 2)    |
| Bit Clear              | ?-        | Long ?- Long           | Long (see note 2)    |
| Bit Test               | ??        | Long ?? Long           | Boolean (see note 2) |

#### Notas

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.



The following table lists the bitwise operators and their effects:

| Operação               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
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

| Operação               | Exemplo                         | Resultado  |
| ---------------------- | ------------------------------- | ---------- |
| Bitwise AND            | 0x0000FFFF & 0xFF00FF00         | 0x0000FF00 |
| Bitwise OR (inclusive) | 0x0000FFFF &#124; 0xFF00FF00    | 0xFF00FFFF |
| Bitwise OR (exclusive) | 0x0000FFFF \^&#124; 0xFF00FF00 | 0xFF0000FF |
| Left Bit Shift         | 0x0000FFFF << 8                 | 0x00FFFF00 |
| Right Bit Shift        | 0x0000FFFF >> 8                 | 0x000000FF |
| Bit Set                | 0x00000000 ?+ 16                | 0x00010000 |
| Bit Clear              | 0x00010000 ?- 16                | 0x00000000 |
| Bit Test               | 0x00010000 ?? 16                | True       |
