---
id: number
title: Number (Real, Integer)
---

Número é um termo genérico que significa:

- Campo real, variável ou expressão. O intervalo para o tipo de dados Real é de ±1,7e±308 (13 dígitos significativos).
- Integer variable or expression. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka *Long* or *Longint*).

:::info Compatibidade

Usually when working with Integers, you handle *Long* values (4-byte Integer). However, there are two cases where Integers are stored as *Shorts* values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):

- Database fields with `Integer` type,
- Elements of arrays declared with [`ARRAY INTEGER`](../commands-legacy/array-integer.md).

These legacy data types are automatically converted in *Longs* when used in the 4D Language.

:::

Pode atribuir qualquer tipo de dados Number a outro; 4D faz a conversão, truncagem ou arredondamento, se necessário. No entanto, quando os valores estiverem fora do intervalo, a conversão não retornará um valor válido. You can mix number data types in expressions.

## Números literais

Uma constante literal numérica é escrita como um número real. Aqui estão alguns exemplos de constantes numéricas:

```4d
27
123.76
0.0076
```

> O separador decimal padrão é um ponto (.), independente do idioma do sistema. Se você marcou a opção "Usar configurações regionais do sistema" na Página de Métodos das Preferências, você deve usar o separador definido no seu sistema.

Números negativos são especificados com o sinal de menos (-). Por exemplo:

```4d
-27
-123.76
-0.0076
```

## Operadores de números

| Operação             | Sintaxe                                   | Retorna    | Expression                        | Valor               |
| -------------------- | ----------------------------------------- | ---------- | --------------------------------- | ------------------- |
| Adição               | Número + Número                           | Number     | 2 + 3                             | 5                   |
| Subtração            | Número - Número                           | Number     | 3 – 2                             | 1                   |
| Multiplicação        | Número \* Número                          | Number     | 5 \* 2                            | 10                  |
| Divisão              | Número / Número                           | Number     | 5 / 2                             | 2.5 |
| Divisão inteira      | Número \ Número                           | Number     | 5 \ 2                             | 2                   |
| Módulo               | Número % Número                           | Number     | 5 % 2                             | 1                   |
| Exponenciação        | Número ^ Número                           | Number     | 2 ^ 3                             | 8                   |
| Igual                | Número = Número                           | Parâmetros | 10 = 10                           | True                |
|                      |                                           |            | 10 = 11                           | False               |
| Desigualdade         | Número # Número                           | Parâmetros | 10 #11                            | True                |
|                      |                                           |            | 10 # 10                           | False               |
| Maior que            | Number > Number                           | Parâmetros | 11 > 10                           | True                |
|                      |                                           |            | 10 > 11                           | False               |
| Menor que            | Number < Number  | Parâmetros | 10 < 11  | True                |
|                      |                                           |            | 11 < 10  | False               |
| Maior ou igual a     | Number >= Number                          | Parâmetros | 11 >= 10                          | True                |
|                      |                                           |            | 10 >= 11                          | False               |
| Menor que ou igual a | Number <= Number | Parâmetros | 10 <= 11 | True                |
|                      |                                           |            | 11 <= 10 | False               |

### Módulo

O operador do módulo % divide o primeiro número pelo segundo número e devolve um número inteiro restante. Aqui estão alguns exemplos:

- 10 % 2 retorna 0 porque 10 é dividido uniformemente por 2.
- 10 % 3 devolve 1 porque o resto é 1.
- 10,5% 2 devolve 0 porque o resto não é um número inteiro.

:::warning

O operador do módulo % devolve valores significativos com números que se encontram na gama do Long Integer (de menos 2^31 a 2^31 menos um). Para calcular o módulo com números fora desse intervalo, use o comando [`Mod`](../commands-legacy/mod.md).

:::

### Divisão inteira

O operador da divisão de longint retorna valores significativos apenas com números inteiros.

### Comparação real

To compare two reals for equality, the 4D language actually compares the absolute value of the difference with *epsilon*. See the [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md) command.

:::note

For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for *epsilon* and does not take the [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md) setting into account.

:::

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

retorna 23 porque a expressão (4 \* 5) é avaliada em primeiro lugar, por causa dos parênteses. O resultado é 20, que é depois adicionado a 3 para o resultado final de 23.

Os parênteses podem ser aninhados dentro de outros conjuntos de parênteses. Certifique-se de que cada parêntese esquerdo tem um parêntese direito correspondente para assegurar uma avaliação adequada das expressões. A falta ou utilização incorrecta de parênteses pode causar resultados inesperados ou expressões inválidas. Além disso, se pretende compilar as suas candidaturas, deve ter parênteses correspondentes - o compilador detecta um parêntese em falta como um erro de sintaxe.

## Operadores Bitwise

The bitwise operators operates on (Long) Integers expressions or values.

> If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long value as an array of 32 bits. Os bits são numerados de 0 a 31, da direita para a esquerda.

Já que cada bit pode ser igual a 0 ou 1, também se pode pensar num valor Long Integer como um valor onde se pode armazenar 32 valores booleanos. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. A tabela a seguir lista os operadores bitwise e sua sintaxe:

| Operação                                  | Operador                                             | Sintaxe                                                        | Retorna                                 |
| ----------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------- |
| Bitwise AND                               | &                                | Long & Long                                | Long                                    |
| OU (inclusive)         | &#124                            | Long \| Long                                                   | Long                                    |
| Bitwise OR (exclusivo) | ^ &#124                          | Long ^ \| Long                                                 | Long                                    |
| Left Bit Shift                            | << | Long << Long | Long (ver nota 1)    |
| Right Bit Shift                           | > >                                                  | Long >> Long                                                   | Long (ver nota 1)    |
| Bit Set                                   | ?+                                                   | Long ?+ Long                                                   | Long (ver nota 2)    |
| Bit Clear                                 | ?-                                                   | Long ?- Long                                                   | Long (ver nota 2)    |
| Bit Test                                  | ??                                                   | Long ?? Long                                                   | Boolean (ver nota 2) |

#### Notas

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Portanto, este segundo operador deve estar entre 0 e 31. Note-se, no entanto, que o deslocamento por 0 retorna um valor inalterado e o deslocamento por mais de 31 bits retorna 0x00000000 porque todos os bits são perdidos. Se passar outro valor como segundo operando, o resultado não é significativo.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Portanto, este segundo operador deve situar-se entre 0 e 31; caso contrário, o resultado da expressão não é significativo.

O quadro seguinte lista os operadores bitwise e os seus efeitos:

| Operação                                  | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitwise AND                               | Cada bit resultante é o E lógico dos bits nos dois operandos. Here is the logical AND table:<li>1 & 1 --> 1</li><li>0 & 1 --> 0</li><li>1 & 0 --> 0</li><li>0 & 0 --> 0</li>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.                                                 |
| OU (inclusive)         | Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:<li>1 \| 1 --> 1</li><li>0 \| 1 --> 1</li><li>1 \| 0 --> 1</li><li>0 \| 0 --> 0</li>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.                                                                                                        |
| Bitwise OR (exclusivo) | Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:<li>1 ^ \| 1 --> 0</li><li>0 ^ \| 1 --> 1</li><li>1 ^ \| 0 --> 1</li><li>0 ^ \| 0 --> 0</li>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.                                                                                                  |
| Left Bit Shift                            | O valor resultante é definido como o valor do primeiro operando e, em seguida, os bits resultantes são deslocados para a esquerda pelo número de posições indicado pelo segundo operando. Os bits à esquerda são perdidos e os novos bits à direita são estabelecidos como 0. **Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N. |
| Right Bit Shift                           | O valor resultante é definido como o valor do primeiro operando e, em seguida, os bits resultantes são deslocados para a direita pelo número de posições indicado pelo segundo operando. The bits on the right are lost and the new bits on the left are set to 0.**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.               |
| Bit Set                                   | O valor resultante é definido como o valor do primeiro operando e, em seguida, o bit resultante, cujo número é indicado pelo segundo operando, é definido como 1. Os outros bits permanecem inalterados.                                                                                                                                                                                                                            |
| Bit Clear                                 | O valor resultante é definido como o valor do primeiro operando e, em seguida, o bit resultante, cujo número é indicado pelo segundo operando, é definido como 0. Os outros bits permanecem inalterados.                                                                                                                                                                                                                            |
| Bit Test                                  | Retorna True se, no primeiro operando, o bit cujo número é indicado pelo segundo operando for igual a 1. Retorna False se, no primeiro operando, o bit cujo número é indicado pelo segundo operando for igual a 0.                                                                                                                                                                                                                  |

### Exemplos

| Operação                                  | Exemplo                                                           | Resultados |
| ----------------------------------------- | ----------------------------------------------------------------- | ---------- |
| Bitwise AND                               | 0x0000FFFF & 0xFF00FF00                       | 0x0000FF00 |
| OU (inclusive)         | 0x0000FFFF \| 0xFF00FF00                                          | 0xFF00FFFF |
| Bitwise OR (exclusivo) | 0x0000FFFF ^ \| 0xFF00FF00                                        | 0xFF0000FF |
| Left Bit Shift                            | 0x0000FFFF << 8 | 0x00FFFF00 |
| Right Bit Shift                           | 0x0000FFFF >> 8                                                   | 0x000000FF |
| Bit Set                                   | 0x00000000 ?+ 16                                                  | 0x00010000 |
| Bit Clear                                 | 0x00010000 ?- 16                                                  | 0x00000000 |
| Bit Test                                  | 0x00010000 ?? 16                                                  | True       |
