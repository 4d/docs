---
id: number
title: Número (Real, Entero)
---

Número es un término genérico que significa:

- Los campos, variables o expresiones de tipo real. El rango del tipo Real es ±1,7e±308 (13 dígitos significativos).
- Variable o expresión entera. El rango para el tipo de datos Integer es -2^31..(2^31)-1 (Integer de 4 bytes, también conocido como *Long* o *Longint*).

:::info Compatibilidad

Normalmente, cuando se trabaja con enteros, se manejan valores *Long* (enteros de 4 bytes). Sin embargo, hay dos casos en los que los enteros se almacenan como valores *Shorts* (enteros de 2 bytes), es decir, en el rango -32.768..32.767 (2^15..(2^15)-1):

- Campos de la base de datos de tipo `Integer`,
- Elementos de arrays declarados con [`ARRAY INTEGER`](../commands-legacy/array-integer.md).

Estos tipos de datos heredados se convierten automáticamente en *Longs* cuando se utilizan en el Lenguaje 4D.

:::

Puede asignar cualquier tipo de dato numérico a otro; 4D realiza la conversión, truncando o redondeando si es necesario. Sin embargo, cuando los valores están fuera del rango, la conversión no devolverá un valor válido. Puede mezclar tipos de datos numéricos en las expresiones.

## Constantes literales numéricas

Una constante literal numérica se escribe como un número real. Estos son algunos ejemplos de constantes numéricas:

```4d
27
123.76
0.0076
```

> El separador decimal por defecto es el punto (.), independientemente del lenguaje del sistema. Si ha marcado la opción "Utilizar la configuración regional del sistema" en la página de Métodos de las Preferencias, debe utilizar el separador definido en su sistema.

Los números negativos se especifican con el signo menos (-). Por ejemplo:

```4d
-27
-123.76
-0.0076
```

## Operadores numéricos

| Operación         | Sintaxis                                  | Devuelve | Expression                        | Valor               |
| ----------------- | ----------------------------------------- | -------- | --------------------------------- | ------------------- |
| Adición           | Número + Número                           | Number   | 2 + 3                             | 5                   |
| Resta             | Número - Número                           | Number   | 3 – 2                             | 1                   |
| Multiplicación    | Número \* Número                          | Number   | 5 \* 2                            | 10                  |
| División          | Número / Número                           | Number   | 5 / 2                             | 2.5 |
| División entera   | Número \ Número                           | Number   | 5 \ 2                             | 2                   |
| Módulo            | Número % Número                           | Number   | 5 % 2                             | 1                   |
| Exponenciación    | Número ^ Número                           | Number   | 2 ^ 3                             | 8                   |
| Igual             | Número = Número                           | Boolean  | 10 = 10                           | True                |
|                   |                                           |          | 10 = 11                           | False               |
| Desigualdad       | Número # Número                           | Boolean  | 10 #11                            | True                |
|                   |                                           |          | 10 # 10                           | False               |
| Mayor que         | Número > Número                           | Boolean  | 11 > 10                           | True                |
|                   |                                           |          | 10 > 11                           | False               |
| Menor que         | Número < Número  | Boolean  | 10 < 11  | True                |
|                   |                                           |          | 11 < 10  | False               |
| Mayor o igual que | Número >= Número                          | Boolean  | 11 >= 10                          | True                |
|                   |                                           |          | 10 >= 11                          | False               |
| Menor o igual que | Número <= Número | Boolean  | 10 <= 11 | True                |
|                   |                                           |          | 11 <= 10 | False               |

### Módulo

El operador modulo % divide el primer número entre el segundo y devuelve un resto de número entero. He aquí algunos ejemplos:

- 10 % 2 devuelve 0 porque 10 está dividido uniformemente por 2.
- 10 % 3 devuelve 1 porque el resto es 1.
- 10,5 % 2 devuelve 0 porque el resto no es un número entero.

:::warning

El operador modulo % devuelve valores significativos con números que están en el rango de los enteros largos (de –2^31 hasta 2^31 menos 1). Para calcular el módulo con números fuera de este rango, utilice el comando [`Mod`](../commands-legacy/mod.md).

:::

### Integer division

The integer division operator divides one number by another and returns the whole number part of the result, discarding any remainder. `a\b` is the equivalent to `Int(a/b)`. It returns significant values with integer numbers only.

### Comparación real

Para comparar dos reales por igualdad, el lenguaje 4D realmente compara el valor absoluto de la diferencia con el *épsilon*. Ver el comando [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

:::note

Por coherencia, el motor de base de datos 4D siempre compara los campos de base de datos de tipo real utilizando un valor de 10^-6 para *epsilon* y no tiene en cuenta el ajuste [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md).

:::

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

devuelve 23 porque la expresión (4 \* 5) se evalúa primero, debido a los paréntesis. El resultado es 20, que se suma a 3 para el resultado final de 23.

Los paréntesis pueden anidarse dentro de otros conjuntos de paréntesis. Asegúrese de que cada paréntesis de la izquierda tenga un paréntesis de la derecha que coincida para garantizar la evaluación correcta de las expresiones. La falta o el uso incorrecto de los paréntesis puede provocar resultados inesperados o expresiones no válidas. Además, si pretende compilar sus aplicaciones, debe tener paréntesis coincidentes: el compilador detecta la falta de paréntesis como un error de sintaxis.

## Operadores de bits

Los operadores bitwise operan sobre expresiones o valores Enteros (largos).

> Si pasa un entero (Short) o un valor Real a un operador de bits., 4D evalúa el valor como un valor Long antes de calcular la expresión que utiliza el operador de bits.

Cuando se utilizan los operadores de bits, debe considerar un valor Long como un array de 32 bits. Los bits están numerados de 0 a 31, de derecha a izquierda.

Dado que cada bit puede ser igual a 0 o 1, también se puede pensar en un valor Entero largo como un valor en el que se pueden almacenar 32 valores booleanos. Un bit igual a 1 significa **True** y un bit igual a 0 significa **False**.

Una expresión que utiliza un operador de bits devuelve un valor de tipo Long, excepto para el operador Bit Test, donde la expresión devuelve un valor booleano. La siguiente tabla lista los operadores a nivel de bits y su sintaxis:

| Operación                        | Operador                                              | Sintaxis                                                        | Devuelve                                |
| -------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------- |
| Y                                | &                                 | Long & Long                                 | Long                                    |
| O (inclusive) | &#124;                            | Long &#124; Long                            | Long                                    |
| O (exclusivo) | &#094; &#124; | Long &#094; &#124; Long | Long                                    |
| Left Bit Shift                   | <<  | Long << Long  | Long (ver nota 1)    |
| Right Bit Shift                  | > >                                                   | Long >> Long                                                    | Long (ver nota 1)    |
| Bit Set                          | ?+                                                    | Long ?+ Long                                                    | Long (ver nota 2)    |
| Poner el bit en 0                | ?-                                                    | Long ?- Long                                                    | Long (ver nota 2)    |
| Probar bit                       | ??                                                    | Long ?? Long Long                                               | Boolean (ver nota 2) |

#### Notas

1. Para las operaciones `Desplazar bits a la izquierda` y `Desplazar bits a la derecha`, el segundo operando indica el número de posiciones en que se desplazarán los bits del primer operando en el valor resultante. Por lo tanto, este segundo operando debe estar entre 0 y 31. Tenga en cuenta, sin embargo, que el desplazamiento de 0 devuelve un valor sin cambios y el desplazamiento de más de 31 bits devuelve 0x00000000 porque todos los bits se pierden. Si se pasa otro valor como segundo operando, el resultado no es significativo.
2. Para las operaciones `Bit Set`, `Bit Clear` y `Bit Test`, el segundo operando indica el número del bit sobre el cual actuar. Por lo tanto, este segundo operando debe estar entre 0 y 31; de lo contrario, el resultado de la expresión no es significativo.

La siguiente tabla lista los operadores a nivel de bits y sus efectos:

| Operación                        | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Y                                | Cada bit resultante es el resultado de la operación AND lógica aplicada a los bits de los dos operandos. Cada bit resultante es el resultado de la operación AND lógica aplicada a los bits de los dos operandos.                                                                                                                                                                                                                                                                                                                                      |
| O (inclusive) | Cada bit resultante es el OR lógico de los bits de los dos operandos. He aquí la tabla OR lógica:<li>1 &#124; 1 --> 1</li><li>0 &#124; 1 --> 1</li><li>1 &#124; 0 --> 1</li><li>0 &#124; 0 --> 0</li>En otras palabras, el bit resultante es 1 si al menos uno de los dos bits del operando es 1; en caso contrario, el bit resultante es 0.                                                                                                           |
| O (exclusivo) | Cada bit resultante es el XOR lógico de los bits de los dos operandos. He aquí la tabla XOR lógica:<li>1 &#094; &#124; 1 --> 0</li><li>0 &#094; &#124; 1 --> 1</li><li>1 &#094; &#124; 0 --> 1</li><li>0 &#094; &#124; 0 --> 0</li>En otras palabras, el bit resultante es 1 si sólo uno de los dos bits del operando es 1; en caso contrario, el bit resultante es 0. |
| Left Bit Shift                   | El valor resultante se ajusta al valor del primer operando, luego los bits resultantes se desplazan a la izquierda el número de posiciones indicado por el segundo operando. Los bits de la izquierda se pierden y los nuevos bits de la derecha se ponen en 0. **Nota:** teniendo en cuenta sólo los valores positivos, desplazar a la izquierda N bits es lo mismo que multiplicar por 2^N.                                                                                                                          |
| Right Bit Shift                  | El valor resultante se ajusta al valor del primer operando, luego los bits resultantes se desplazan a la derecha el número de posición indicado por el segundo operando. Los bits de la derecha se pierden y los nuevos bits de la izquierda se ponen en 0. **Nota:** teniendo en cuenta sólo los valores positivos, desplazar a la derecha N bits es lo mismo que dividir por 2^N.                                                                                                                                    |
| Bit Set                          | El valor resultante se establece en el valor del primer operando, luego el bit resultante, cuyo número es indicado por el segundo operando, se coloca en 1. Los demás bits no se modifican.                                                                                                                                                                                                                                                                                                                                                            |
| Poner el bit en 0                | El valor resultante se establece en el valor del primer operando, luego el bit resultante, cuyo número es indicado por el segundo operando, se coloca en 0. Los demás bits no se modifican.                                                                                                                                                                                                                                                                                                                                                            |
| Probar bit                       | Devuelve True si, en el primer operando, el bit cuyo número indica el segundo operando es igual a 1. Devuelve False si, en el primer operando, el bit cuyo número indica el segundo operando es igual a 0.                                                                                                                                                                                                                                                                                                                                             |

### Ejemplos

| Operación                        | Ejemplo                                                                     | Resultado  |
| -------------------------------- | --------------------------------------------------------------------------- | ---------- |
| Y                                | 0x0000FFFF & 0xFF00FF00                                 | 0x0000FF00 |
| O (inclusive) | 0x0000FFFF &#124; 0xFF00FF00                            | 0xFF00FFFF |
| O (exclusivo) | 0x0000FFFF &#094; &#124; 0xFF00FF00 | 0xFF0000FF |
| Left Bit Shift                   | 0x0000FFFF << 8           | 0x00FFFF00 |
| Right Bit Shift                  | 0x0000FFFF >> 8                                                             | 0x000000FF |
| Bit Set                          | 0x00000000 ?+ 16                                                            | 0x00010000 |
| Poner el bit en 0                | 0x00010000 ?- 16                                                            | 0x00000000 |
| Probar bit                       | 0x00010000 ?? 16 16                                                         | True       |
