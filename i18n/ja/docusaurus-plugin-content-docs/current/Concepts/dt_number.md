---
id: number
title: Number (Real, Integer)
---

数値とは、以下を示す総称です:

- 実数のフィールド、変数、または式。 実数データタイプの範囲は、±1.7e±308 (有効数字13桁) です。
- Integer variable or expression. The range for the Integer data type is -2^31..(2^31)-1 (4-byte Integer, aka *Long* or *Longint*).

:::info 互換性

Usually when working with Integers, you handle *Long* values (4-byte Integer). However, there are two cases where Integers are stored as *Shorts* values (2-byte Integer), i.e. in the range -32,768..32,767 (2^15..(2^15)-1):

- Database fields with `Integer` type,
- Elements of arrays declared with [`ARRAY INTEGER`](../commands-legacy/array-integer.md).

These legacy data types are automatically converted in *Longs* when used in the 4D Language.

:::

数値データタイプは、異なる数値データタイプに代入することができます。このとき、4Dが必要に応じて変換、切り捨て、丸め処理をおこないます。 ただし、値が範囲外の場合には、変換は正しい値を返しません。 You can mix number data types in expressions.

## 数値リテラル

数値リテラル定数は、実数として記述します。 下記に数値定数の例をいくつか示します:

```4d
27
123.76
0.0076
```

> デフォルトの小数点はシステム言語に関係なくピリオド (.) です。 "地域特有のシステム設定を使う" オプション (<a href="https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575690.ja.html">メソッドページ</a> 参照) にチェックがされている場合、システムで定義されている小数点を使用する必要があります。

負の数値は、マイナス記号 (-) を付けて指定します。 例:

```4d
-27
-123.76
-0.0076
```

## 数値演算子

| 演算                          | シンタックス                                    | 戻り値     | 式                                 | 値                   |
| --------------------------- | ----------------------------------------- | ------- | --------------------------------- | ------------------- |
| 加算 (足し算) | Number + Number                           | Number  | 2 + 3                             | 5                   |
| 減算 (引き算) | Number - Number                           | Number  | 3 – 2                             | 1                   |
| 乗算 (かけ算) | Number \* Number                          | Number  | 5 \* 2                            | 10                  |
| 除算 (割り算) | Number / Number                           | Number  | 5 / 2                             | 2.5 |
| 倍長整数を返す除算                   | Number \ Number                           | Number  | 5 \ 2                             | 2                   |
| モジューロ                       | Number % Number                           | Number  | 5 % 2                             | 1                   |
| 指数                          | Number ^ Number                           | Number  | 2 ^ 3                             | 8                   |
| 等しい                         | Number = Number                           | Boolean | 10 = 10                           | true                |
|                             |                                           |         | 10 = 11                           | false               |
| 異なる                         | Number # Number                           | Boolean | 10 # 11                           | true                |
|                             |                                           |         | 10 # 10                           | false               |
| 大きい                         | Number > Number                           | Boolean | 11 > 10                           | true                |
|                             |                                           |         | 10 > 11                           | false               |
| 小さい                         | Number < Number  | Boolean | 10 < 11  | true                |
|                             |                                           |         | 11 < 10  | false               |
| 以上                          | Number >= Number                          | Boolean | 11 >= 10                          | true                |
|                             |                                           |         | 10 >= 11                          | false               |
| 以下                          | Number <= Number | Boolean | 10 <= 11 | true                |
|                             |                                           |         | 11 <= 10 | false               |

### モジューロ

モジューロ演算子 % は最初の数値を 2番目の数値で除算し、その余りの整数を返します。 次に例を示します:

- 10 % 2は、0を返します。10 は 2 で割り切れるからです。
- 10 % 3は、1を返します。余りが 1 だからです。
- 10.5 % 2は、0を返します。余りが整数ではない (0.25) からです。

:::warning

モジューロ演算子 % は倍長整数の範囲内 (-2^31 から (2^31)-1 まで) の数値に対して有効な値を返します。 To calculate the modulo with numbers outside of this range, use the [`Mod`](../commands-legacy/mod.md) command.

:::

### 倍長整数を返す除算

倍長整数を返す除算演算子 \ は、整数値の有効値を返します。

### 実数の比較

To compare two reals for equality, the 4D language actually compares the absolute value of the difference with *epsilon*. See the [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md) command.

:::note

For consistency, the 4D database engine always compares database fields of the real type using a 10^-6 value for *epsilon* and does not take the [`SET REAL COMPARISON LEVEL`](../commands-legacy/set-real-comparison-level.md) setting into account.

:::

### 優先順位

式を評価する順番を優先順位と呼びます。 4D における優先順位は厳密に左から右で、代数的順序は採用されていません。 例:

```4d
 3+4*5
```

これは 35 を返します。最初に式 3+4 の結果 7 を求め、それに 5 を乗じるので、結果は 35 になります。

左から右の優先順位を変更するには、必ずカッコを使用します。 例:

```4d
 3+(4*5)
```

この式は、23 を返します。カッコがあるため、最初に式 (4\*5) の結果 20 を求め、 それに 3 を加えて、結果は 23 になります。

カッコは、他のカッコの組の内側にネストすることができます。 式の評価が正しくおこなわれるように、必ず各左カッコに対応する右カッコを指定してください。 カッコの不足または誤用は、予測できない結果や、式の無効化につながります。 またコンパイルする場合は、左カッコと右カッコは同じ数でなければなりません。組になっていないカッコはシンタックスエラーとして検出されます。

## ビットワイズ演算子

The bitwise operators operates on (Long) Integers expressions or values.

> If you pass a (Short) Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long value as an array of 32 bits. これらのビットには、右から左に0~31の番号が付けられます。

それぞれのビットは0か1なので、倍長整数値は32のブール値を格納できる値と考えることもできます。 A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long value, except for the Bit Test operator, where the expression returns a Boolean value. 次の表にビットワイズ演算子とそのシンタックスを示します:

| 演算                                        | 演算子                                                  | シンタックス                                                         | 戻り値                                 |
| ----------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------- |
| Bitwise AND                               | &                                | Long & Long                                | Long                                |
| Bitwise OR (inclusive) | &#124                            | Long \| Long                                                   | Long                                |
| Bitwise OR (exclusive) | ^ &#124                          | Long ^ \| Long                                                 | Long                                |
| Left Bit Shift                            | << | Long << Long | Long (注記1 参照)    |
| Right Bit Shift                           | > >                                                  | Long >> Long                                                   | Long (注記1 参照)    |
| Bit Set                                   | ?+                                                   | Long ?+ Long                                                   | Long (注記2 参照)    |
| Bit Clear                                 | ?-                                                   | Long ?- Long                                                   | Long (注記2 参照)    |
| Bit Test                                  | ??                                                   | Long ?? Long                                                   | Boolean (注記2 参照) |

#### 注記

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. したがって、この2番目のオペランドは、0~31の間でなければなりません。 0ビットシフトするとその値がそのまま返されます。また、31ビットより多くシフトするとすべてのビットがなくなるので、0x00000000が返されます。 それ以外の値を2番目のオペランドとして渡した場合、結果は意味のない値になります。
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. したがって、この2番目のオペランドは0 ~ 31の間です。そうでない場合、式の結果は意味のないものになります。

次の表は、ビットワイズ演算子とその効果を示します:

| 演算                                        | 説明                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bitwise AND                               | それぞれの結果ビットは2つのオペランドのビットの論理ANDです。 Here is the logical AND table:<li>1 & 1 --> 1</li><li>0 & 1 --> 0</li><li>1 & 0 --> 0</li><li>0 & 0 --> 0</li>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0. |
| Bitwise OR (inclusive) | Each resulting bit is the logical OR of the bits in the two operands.Here is the logical OR table:<li>1 \| 1 --> 1</li><li>0 \| 1 --> 1</li><li>1 \| 0 --> 1</li><li>0 \| 0 --> 0</li>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.           |
| Bitwise OR (exclusive) | Each resulting bit is the logical XOR of the bits in the two operands.Here is the logical XOR table:<li>1 ^ \| 1 --> 0</li><li>0 ^ \| 1 --> 1</li><li>1 ^ \| 0 --> 1</li><li>0 ^ \| 0 --> 0</li>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.     |
| Left Bit Shift                            | 最初のオペランド値が結果値に設定され、次に結果ビットが2番目のオペランドで示されたビット数だけ左にシフトします。 左側のビットがなくなり、右側の新しいビットは0に設定されます。 **Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.                                                                                                                         |
| Right Bit Shift                           | 最初のオペランド値が結果値に設定され、次に結果ビットが2番目のオペランドで示されたビット数だけ右にシフトします。 The bits on the right are lost and the new bits on the left are set to 0.**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.                                                                  |
| Bit Set                                   | 最初のオペランド値が結果値に設定され、次に結果ビットのうち2番目のオペランドで示されたビットが1に設定されます。 他のビットはそのままです。                                                                                                                                                                                                                                                                                                 |
| Bit Clear                                 | 最初のオペランド値が結果値に設定され、次に結果ビットのうち2番目のオペランドで示されたビットが0に設定されます。 他のビットはそのままです。                                                                                                                                                                                                                                                                                                 |
| Bit Test                                  | 最初のオペランドのうち、2番目のビットで示されたビットが1の場合、trueが返されます。 最初のオペランドのうち、2番目のビットで示されたビットが0の場合、falseが返されます。                                                                                                                                                                                                                                                                             |

### 例題

| 演算                                        | 例題                                                                | 戻り値        |
| ----------------------------------------- | ----------------------------------------------------------------- | ---------- |
| Bitwise AND                               | 0x0000FFFF & 0xFF00FF00                       | 0x0000FF00 |
| Bitwise OR (inclusive) | 0x0000FFFF \| 0xFF00FF00                                          | 0xFF00FFFF |
| Bitwise OR (exclusive) | 0x0000FFFF ^ \| 0xFF00FF00                                        | 0xFF0000FF |
| Left Bit Shift                            | 0x0000FFFF << 8 | 0x00FFFF00 |
| Right Bit Shift                           | 0x0000FFFF >> 8                                                   | 0x000000FF |
| Bit Set                                   | 0x00000000 ?+ 16                                                  | 0x00010000 |
| Bit Clear                                 | 0x00010000 ?- 16                                                  | 0x00000000 |
| Bit Test                                  | 0x00010000 ?? 16                                                  | true       |
