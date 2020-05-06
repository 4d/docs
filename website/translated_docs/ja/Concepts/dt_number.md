---
id: number
title: 数値 (実数、倍長整数、整数)
---

数値とは、以下を示す総称です:

- 実数のフィールド、変数、または式。 実数データタイプの範囲は、±1.7e±308 (有効数字13桁) です。 
- 倍長整数のフィールド、変数、または式。 倍長整数 (4バイト整数) データタイプの範囲は、-2^31..(2^31)-1です。 
- 整数のフィールド、変数、または式。 整数 (2バイト整数) データタイプの範囲は、-32,768..32,767 (2^15..(2^15)-1)です。

**注:** 整数フィールドの値は、4D ランゲージで使用される際には自動的に倍長整数に変換されます。

数値データタイプは、異なる数値データタイプに代入することができます。このとき、4Dが必要に応じて変換、切り捨て、丸め処理をおこないます。 ただし、値が範囲外の場合には、変換は正しい値を返しません。 数値データタイプは式の中に混在させて使用することができます。

**注:** 4D ランゲージリファレンスでは、実際のデータタイプに関わらず、コマンド説明における実数、整数、倍長整数の引数はとくに明記されていない限り、数値と表記されています。

## 数値リテラル

数値リテラル定数は、実数として記述します。 下記に数値定数の例をいくつか示します:

```4d
27
123.76
0.0076
```

> The default decimal separator is a period (.), regardless of the system language. If you have checked the "Use regional system settings" option in the Methods Page of the Preferences, you must use the separator defined in your system.

負の数値は、マイナス記号 (-) を付けて指定します。 たとえば:

```4d
-27
-123.76
-0.0076
```

## 数値演算子

| 演算子       | シンタックス          | 戻り値 | 式        | 結果    |
| --------- | --------------- | --- | -------- | ----- |
| 加算 (足し算)  | 数値 + 数値         | 数値  | 2 + 3    | 5     |
| 減算 (引き算)  | 数値 - 数値         | 数値  | 3 – 2    | 1     |
| 乗算 (かけ算)  | 数値 * 数値         | 数値  | 5 * 2    | 10    |
| 除算 (割り算)  | Number / Number | 数値  | 5 / 2    | 2.5   |
| 倍長整数を返す除算 | 数値 \ 数値        | 数値  | 5 \ 2   | 2     |
| モジューロ     | 数値 % 数値         | 数値  | 5 % 2    | 1     |
| 指数        | 数値 ^ 数値         | 数値  | 2 ^ 3    | 8     |
| 等しい       | 数値 = 数値         | ブール | 10 = 10  | True  |
|           |                 |     | 10 = 11  | False |
| 異なる       | 数値 # 数値         | ブール | 10 # 11  | True  |
|           |                 |     | 10 # 10  | False |
| 大きい       | 数値 > 数値         | ブール | 11 > 10  | True  |
|           |                 |     | 10 > 11  | False |
| 小さい       | 数値 < 数値         | ブール | 10 < 11  | True  |
|           |                 |     | 11 < 10  | False |
| 以上        | 数値 >= 数値        | ブール | 11 >= 10 | True  |
|           |                 |     | 10 >= 11 | False |
| 以下        | 数値 <= Number    | ブール | 10 <= 11 | True  |
|           |                 |     | 11 <= 10 | False |


モジューロ演算子 % は最初の数値を 2番目の数値で除算し、その余りの整数を返します。 次に例を示します:

- 10 % 2は、0を返します。10 は 2 で割り切れるからです。
- 10 % 3は、1を返します。余りが 1 だからです。
- 10.5 % 2は、0を返します。余りが整数ではない (0.25) からです。

**警告:**

- モジューロ演算子 % は倍長整数の範囲内 (-2^31 から (2^31)-1 まで) の数値に対して有効な値を返します。 この範囲外の数値のモジューロ演算を実行するには、`Mod` コマンドを使用します。
- 倍長整数を返す除算演算子 \ は、整数値の有効値を返します。 

### 優先順位

式を評価する順番を優先順位と呼びます。 4D における優先順位は厳密に左から右で、代数的順序は採用されていません。 たとえば:

```4d
 3+4*5
```

これは 35 を返します。最初に式 3+4 の結果 7 を求め、それに 5 を乗じるので、結果は 35 になります。

左から右の優先順位を変更するには、必ずカッコを使用します。 たとえば:

```4d
 3+(4*5)
```

この式は、23 を返します。カッコがあるため、最初に式 (4*5) の結果 20 を求め、 それに 3 を加えて、結果は 23 になります。

カッコは、他のカッコの組の内側にネストすることができます。 式の評価が正しくおこなわれるように、必ず各左カッコに対応する右カッコを指定してください。 カッコの不足または誤用は、予測できない結果や、式の無効化につながります。 またコンパイルする場合は、左カッコと右カッコは同じ数でなければなりません。組になっていないカッコはシンタックスエラーとして検出されます。

## Bitwise operators

The bitwise operators operates on **Long Integer** expressions or values.

> If you pass an Integer or a Real value to a bitwise operator, 4D evaluates the value as a Long Integer value before calculating the expression that uses the bitwise operator.

While using the bitwise operators, you must think about a Long Integer value as an array of 32 bits. The bits are numbered from 0 to 31, from right to left.

Because each bit can equal 0 or 1, you can also think about a Long Integer value as a value where you can store 32 Boolean values. A bit equal to 1 means **True** and a bit equal to 0 means **False**.

An expression that uses a bitwise operator returns a Long Integer value, except for the Bit Test operator, where the expression returns a Boolean value. The following table lists the bitwise operators and their syntax:

| 演算子                    | 演算子       | シンタックス              | 戻り値                  |
| ---------------------- | --------- | ------------------- | -------------------- |
| Bitwise AND            | &         | Long & Long         | Long                 |
| Bitwise OR (inclusive) | &#124;    | Long &#124; Long    | Long                 |
| Bitwise OR (exclusive) | \^&#124; | Long \^&#124; Long | Long                 |
| Left Bit Shift         | <<        | Long << Long        | Long (see note 1)    |
| Right Bit Shift        | >>        | Long >> Long        | Long (see note 1)    |
| Bit Set                | ?+        | Long ?+ Long        | Long (see note 2)    |
| Bit Clear              | ?-        | Long ?- Long        | Long (see note 2)    |
| Bit Test               | ??        | Long ?? Long        | Boolean (see note 2) |


#### Notes

1. For the `Left Bit Shift` and `Right Bit Shift` operations, the second operand indicates the number of positions by which the bits of the first operand will be shifted in the resulting value. Therefore, this second operand should be between 0 and 31. Note however, that shifting by 0 returns an unchanged value and shifting by more than 31 bits returns 0x00000000 because all the bits are lost. If you pass another value as second operand, the result is non-significant.
2. For the `Bit Set`, `Bit Clear` and `Bit Test` operations , the second operand indicates the number of the bit on which to act. Therefore, this second operand must be between 0 and 31; otherwise, the result of the expression is non-significant.

The following table lists the bitwise operators and their effects:

| 演算子         | 説明                                                                     |
| ----------- | ---------------------------------------------------------------------- |
| Bitwise AND | Each resulting bit is the logical AND of the bits in the two operands. |


<

p>Here is the logical AND table:

- 1 & 1 --> 1
    - 0 & 1 --> 0
        - 1 & 0 --> 0
            - 0 & 0 --> 0</p> 
                <
                
                p>In other words, the resulting bit is 1 if the two operand bits are 1; otherwise the resulting bit is 0.| |Bitwise OR (inclusive)|Each resulting bit is the logical OR of the bits in the two operands.
                
                <
                
                p>Here is the logical OR table:
                
                - 1 &#124; 1 --> 1
                    - 0 &#124; 1 --> 1
                        - 1 &#124; 0 --> 1
                            - 0 &#124; 0 --> 0</p> 
                                <
                                
                                p>In other words, the resulting bit is 1 if at least one of the two operand bits is 1; otherwise the resulting bit is 0.| |Bitwise OR (exclusive)|Each resulting bit is the logical XOR of the bits in the two operands.
                                
                                <
                                
                                p>Here is the logical XOR table:
                                
                                - 1 \^&#124; 1 --> 0
                                    - 0 \^&#124; 1 --> 1
                                        - 1 \^&#124; 0 --> 1
                                            - 0 \^&#124; 0 --> 0</p> 
                                                <
                                                
                                                p>In other words, the resulting bit is 1 if only one of the two operand bits is 1; otherwise the resulting bit is 0.| |Left Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the left by the number of positions indicated by the second operand. The bits on the left are lost and the new bits on the right are set to 0.
                                                
                                                <
                                                
                                                p>**Note:** Taking into account only positive values, shifting to the left by N bits is the same as multiplying by 2^N.| |Right Bit Shift|The resulting value is set to the first operand value, then the resulting bits are shifted to the right by the number of position indicated by the second operand. The bits on the right are lost and the new bits on the left are set to 0.
                                                
                                                <
                                                
                                                p>**Note:** Taking into account only positive values, shifting to the right by N bits is the same as dividing by 2^N.| |Bit Set|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 1. The other bits are left unchanged.| |Bit Clear|The resulting value is set to the first operand value, then the resulting bit, whose number is indicated by the second operand, is set to 0. The other bits are left unchanged.| |Bit Test|Returns True if, in the first operand, the bit whose number is indicated by the second operand is equal to 1. Returns False if, in the first operand, the bit whose number is indicated by the second operand is equal to 0.|
                                                
                                                ### 例題
                                                
                                                | 演算子                    | 例題                                         | Result     |
                                                | ---------------------- | ------------------------------------------ | ---------- |
                                                | Bitwise AND            | 0x0000FFFF & 0xFF00FF00                    | 0x0000FF00 |
                                                | Bitwise OR (inclusive) | 0x0000FFFF &#124; 0xFF00FF00               | 0xFF00FFFF |
                                                | Bitwise OR (exclusive) | 0x0000FFFF \^&#124; 0xFF00FF00 0xFF0000FF |            |
                                                | Left Bit Shift         | 0x0000FFFF << 8                            | 0x00FFFF00 |
                                                | Right Bit Shift        | 0x0000FFFF >> 8                            | 0x000000FF |
                                                | Bit Set                | 0x00000000 ?+ 16                           | 0x00010000 |
                                                | Bit Clear              | 0x00010000 ?- 16                           | 0x00000000 |
                                                | Bit Test               | 0x00010000 ?? 16                           | True       |