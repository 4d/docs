---
id: int
title: Int
slug: /commands/int
displayed_sidebar: docs
---

<!--REF #_command_.Int.Syntax-->**Int** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Int.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 整数部を求める数値 |
| 戻り値 | Real | &#8592; | 整数部の数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Int.Summary-->Int は*number*の整数部を取り出して返します。<!-- END REF-->*number*が負の場合は、ゼロから遠い数値に丸めます。

#### 例題 

以下の例は、負の数値と正の数値に対してIntがどのように機能するかを示しています。数値の少数点以下の部分が取り除かれている点に注目してください:

```4d
 vlResult:=Int(123.4) // vlResult gets 123
 vlResult:=Int(-123.4) // vlResult gets -124
```

#### 参照 

[Dec](dec.md)  