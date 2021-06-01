---
id: number
title: Número (Real, Entero largo, Entero)
---

Número es un término genérico que significa:

- Los campos, variables o expresiones de tipo real. El rango del tipo Real es ±1,7e±308 (13 dígitos significativos).
- Los campos, variables o expresiones de tipo Entero largo. El rango para el tipo de datos Entero largo (4 bytes) es -2^31..(2^31)-1.
- Los campos, variables o expresiones de tipo Entero. El rango para el tipo de datos Entero (2 bytes) es -32.768..32.767 (2^15..(2^15)-1).

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

Negative numbers are specified with the minus sign (-). Por ejemplo:

```4d
-27
-123.76
-0.0076
```

## Number operators

| Operación         | Sintaxis         | Devuelve | Expresión | Valor |
| ----------------- | ---------------- | -------- | --------- | ----- |
| Addition          | Number + Number  | Número   | 2 + 3     | 5     |
| Subtraction       | Number - Number  | Número   | 3 – 2     | 1     |
| Multiplication    | Number * Number  | Número   | 5 * 2     | 10    |
| Division          | Number / Number  | Número   | 5 / 2     | 2.5   |
| Longint division  | Number \ Number | Número   | 5 \ 2    | 2     |
| Modulo            | Number % Number  | Número   | 5 % 2     | 1     |
| Exponentiation    | Number ^ Number  | Número   | 2 ^ 3     | 8     |
| Igual             | Número = Número  | Booleano | 10 = 10   | True  |
|                   |                  |          | 10 = 11   | False |
| Desigualdad       | Número # Número  | Booleano | 10 #11    | True  |
|                   |                  |          | 10 # 10   | False |
| Mayor que         | Número > Número  | Booleano | 11 > 10   | True  |
|                   |                  |          | 10 > 11   | False |
| Menor que         | Número < Número  | Booleano | 10 < 11   | True  |
|                   |                  |          | 11 < 10   | False |
| Mayor o igual que | Número >= Número | Booleano | 11 >= 10  | True  |
|                   |                  |          | 10 >= 11  | False |
| Menor o igual que | Número <= Número | Booleano | 10 <= 11  | True  |
|                   |                  |          | 11 <= 10  | False |

El operador modulo % divide el primer número entre el segundo y devuelve un resto de número entero. He aquí algunos ejemplos:

- 10 % 2 devuelve 0 porque 10 está dividido uniformemente por 2.
- 10 % 3 devuelve 1 porque el resto es 1.
- 10,5 % 2 devuelve 0 porque el resto no es un número entero.

**ATENCIÓN:**
- El operador modulo % devuelve valores significativos con números que están en el rango de los enteros largos (de –2^31 hasta 2^31 menos 1). Para calcular el módulo con números fuera de este rango, utilice el comando `Mod`.
- El operador de división entero largo \ devuelve valores significativos sólo con números enteros.

### Prioridad

El orden en que se evalúa una expresión se llama prioridad. 4D tiene una precedencia estricta de izquierda a derecha, en la que no se aplica el orden algebraico. Por ejemplo:

```4d
 3+4*5
```

devuelve 35, porque la expresión se evalúa como 3 + 4, dando como resultado 7, que luego se multiplica por 5, con el resultado final de 35.

Para anular la precedencia de izquierda a derecha, DEBE utilizar paréntesis. Por ejemplo:

```4d
 3+(4*5)
```

devuelve 23 porque la expresión (4 * 5) se evalúa primero, debido a los paréntesis. El resultado es 20, que se suma a 3 para el resultado final de 23.

Los paréntesis pueden anidarse dentro de otros conjuntos de paréntesis. Asegúrese de que cada paréntesis de la izquierda tenga un paréntesis de la derecha que coincida para garantizar la evaluación correcta de las expresiones. La falta o el uso incorrecto de los paréntesis puede provocar resultados inesperados o expresiones no válidas. Además, si pretende compilar sus aplicaciones, debe tener paréntesis coincidentes: el compilador detecta la falta de paréntesis como un error de sintaxis.


## Operadores de bits

Los operadores de bits operan sobre expresiones o valores **Entero largo**.

> Si se pasa un valor de tipo Entero o Real a un operador de tipo bit, 4D evalúa el valor como un valor de tipo Entero Largo antes de calcular el resultado de la expresión.

Cuando se utilizan los operadores de bits, hay que pensar en un valor de tipo Entero largo como un array de 32 bits. Los bits están numerados de 0 a 31, de derecha a izquierda.

Dado que cada bit puede ser igual a 0 o 1, también se puede pensar en un valor Entero largo como un valor en el que se pueden almacenar 32 valores booleanos. Un bit igual a 1 significa **Verdadero** y un bit igual a 0 significa **Falso**.

Una expresión que utiliza un operador bitwise devuelve un valor Entero largo, excepto para el operador Bit Test, donde la expresión devuelve un valor Booleano. La siguiente tabla lista los operadores a nivel de bits y su sintaxis:

| Operación       | Operador  | Sintaxis            | Devuelve             |
| --------------- | --------- | ------------------- | -------------------- |
| Y               | &         | Long & Long         | Largo                |
| O (inclusive)   | &#124;    | Long &#124; Long    | Largo                |
| O (exclusivo)   | \^&#124; | Long \^&#124; Long | Largo                |
| Left Bit Shift  | <<        | Long << Long        | Long (ver nota 1)    |
| Right Bit Shift | >>        | Long >> Long        | Long (ver nota 1)    |
| Bit Set         | ?+        | Long ?+ Long        | Long (see note 2)    |
| Bit Clear       | ?-        | Long ?- Long        | Long (see note 2)    |
| Bit Test        | ??        | Long ?? Largo       | Boolean (see note 2) |

#### Notes

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.



The following table lists the bitwise operators and their effects:

| Operación       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Y               | Each resulting bit is the logical AND of the bits in the two operands. <p>Here is the logical AND table:<li>1 & 1 --> 1<li>0 & 1 --> 0<li>1 & 0 --> 0<li>0 & 0 --> 0<p>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.                                           |
| O (inclusive)   | Each resulting bit is the logical OR of the bits in the two operands.<p>Here is the logical OR table:<li>1 &#124; 1 --> 1<li>0 &#124; 1 --> 1<li>1 &#124; 0 --> 1<li>0 &#124; 0 --> 0<p>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.           |
| O (exclusivo)   | Each resulting bit is the logical XOR of the bits in the two operands.<p>Here is the logical XOR table:<li>1 \^&#124; 1 --> 0<li>0 \^&#124; 1 --> 1<li>1 \^&#124; 0 --> 1<li>0 \^&#124; 0 --> 0<p>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0. |
| Left Bit Shift  | The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0. <p>**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.                                                                   |
| Right Bit Shift | The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.<p>**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.                                                                      |
| Bit Set         | The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.                                                                                                                                                                                                                                                                                |
| Bit Clear       | The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.                                                                                                                                                                                                                                                                                |
| Bit Test        | Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.                                                                                                                                                                                                                                   |

### Ejemplos

| Operación       | Ejemplo                         | Result     |
| --------------- | ------------------------------- | ---------- |
| Y               | 0x0000FFFF & 0xFF00FF00         | 0x0000FF00 |
| O (inclusive)   | 0x0000FFFF &#124; 0xFF00FF00    | 0xFF00FFFF |
| O (exclusivo)   | 0x0000FFFF \^&#124; 0xFF00FF00 | 0xFF0000FF |
| Left Bit Shift  | 0x0000FFFF << 8                 | 0x00FFFF00 |
| Right Bit Shift | 0x0000FFFF >> 8                 | 0x000000FF |
| Bit Set         | 0x00000000 ?+ 16                | 0x00010000 |
| Bit Clear       | 0x00010000 ?- 16                | 0x00000000 |
| Bit Test        | 0x00010000 ?? 16                | True       |
