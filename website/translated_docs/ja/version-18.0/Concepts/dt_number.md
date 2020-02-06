---
id: version-18.0-number
title: 数値 (実数、倍長整数、整数)
original_id: number
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

**注:** 4D v15 以降、デフォルトの小数点はシステム言語に関係なくピリオド (.) となりました。 "地域特有のシステム設定を使う" オプション ([メソッドページ](https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575690.ja.html) 参照) にチェックがされている場合、システムで定義されている小数点を使用する必要があります。

負の数値は、マイナス記号 (-) を付けて指定します。 たとえば:

```4d
-27
-123.76
-0.0076
```

## 数値演算子

| 演算子       | シンタックス           | 戻り値     | 式        | 結果    |
| --------- | ---------------- | ------- | -------- | ----- |
| 加算 (足し算)  | 数値 + 数値          | 数値      | 2 + 3    | 5     |
| 減算 (引き算)  | 数値 - 数値          | Number  | 3 – 2    | 1     |
| 乗算 (かけ算)  | 数値 * 数値          | Number  | 5 * 2    | 10    |
| 除算 (割り算)  | 数値 / 数値          | Number  | 5 / 2    | 2.5   |
| 倍長整数を返す除算 | 数値 \ 数値         | Number  | 5 \ 2   | 2     |
| モジューロ     | 数値 % 数値          | Number  | 5 % 2    | 1     |
| 指数        | 数値 ^ 数値          | Number  | 2 ^ 3    | 8     |
| 等しい       | 数値 = 数値          | Boolean | 10 = 10  | True  |
|           |                  |         | 10 = 11  | False |
| 異なる       | 数値 # 数値          | Boolean | 10 # 11  | True  |
|           |                  |         | 10 # 10  | False |
| 大きい       | 数値 > 数値          | Boolean | 11 > 10  | True  |
|           |                  |         | 10 > 11  | False |
| 小さい       | 数値 < 数値          | Boolean | 10 < 11  | True  |
|           |                  |         | 11 < 10  | False |
| 以上        | 数値 >= 数値         | Boolean | 11 >= 10 | True  |
|           |                  |         | 10 >= 11 | False |
| 以下        | Number <= Number | Boolean | 10 <= 11 | True  |
|           |                  |         | 11 <= 10 | False |


モジューロ演算子 % は最初の数値を 2番目の数値で除算し、その余りの整数を返します。 次に例を示します:

- 10 % 2は、0を返します。10 は 2 で割り切れるからです。
- 10 % 3は、1を返します。余りが 1 だからです。
- 10.5 % 2は、0を返します。余りが整数ではない (0.25) からです。

**警告:**

- モジューロ演算子 % は倍長整数の範囲内 (-2^31 から (2^31)-1 まで) の数値に対して有効な値を返します。 この範囲外の数値のモジューロ演算を実行するには、`Mod` コマンドを使用します。
- 倍長整数を返す除算演算子 \ は、整数値の有効値を返します。 

### Precedence

The order in which an expression is evaluated is called precedence. 4D has a strict left-to-right precedence, in which algebraic order is not observed. たとえば:

```4d
 3+4*5
```

returns 35, because the expression is evaluated as 3 + 4, yielding 7, which is then multiplied by 5, with the final result of 35.

To override the left-to-right precedence, you MUST use parentheses. 例: 

```4d
 3+(4*5)
```

returns 23 because the expression (4 * 5) is evaluated first, because of the parentheses. The result is 20, which is then added to 3 for the final result of 23.

Parentheses can be nested inside other sets of parentheses. Be sure that each left parenthesis has a matching right parenthesis to ensure proper evaluation of expressions. Lack of, or incorrect use of parentheses can cause unexpected results or invalid expressions. Furthermore, if you intend to compile your applications, you must have matching parentheses—the compiler detects a missing parenthesis as a syntax error.