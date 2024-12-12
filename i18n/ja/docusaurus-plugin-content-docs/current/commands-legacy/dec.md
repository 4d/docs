---
id: dec
title: Dec
slug: /commands/dec
displayed_sidebar: docs
---

<!--REF #_command_.Dec.Syntax-->**Dec** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Dec.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 小数部を求める数値 |
| 戻り値 | Real | &#8592; | 小数部の数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Dec.Summary-->Decは*number*の小数部を返します。<!-- END REF-->返す値は、常に正の数またはゼロになります。 

#### 例題 

以下の例は、通貨のドル単位で実数になっている金額を、整数のドルとセントに変換します。金額が7.31ドルの場合、7ドルと31セントになります:

```4d
 vlDollars:=Int(vrAmount) // Get the dollars
 vlCents:=Dec(vrAmount)*100 // Get the fractional part
```

#### 参照 

[Int](int.md)  