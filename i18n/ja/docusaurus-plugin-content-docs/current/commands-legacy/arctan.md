---
id: arctan
title: Arctan
slug: /commands/arctan
displayed_sidebar: docs
---

<!--REF #_command_.Arctan.Syntax-->**Arctan** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Arctan.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 角度を求めるタンジェント値 |
| 戻り値 | Real | &#8592; | ラジアン角度 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Arctan.Summary-->Arctan は*number*の逆正接値をラジアンで返します。<!-- END REF-->*number*はタンジェントです。

**Note:** 4DではPi、Degree、Radianという定数があらかじめ定義されています。Piはパイの数値 (3.14159...) を返し、Degreeはラジアンで表わされた1度 (0.01745...) を、Radianは度数で表わされた1ラジアン (57.29577...) を返します。

#### 例題 

以下の例はPiの値を表示します:

```4d
 ALERT("Pi is equal to: "+String(Arctan(1)*4))
```

#### 参照 

[Cos](cos.md)  
[Sin](sin.md)  
[Tan](tan.md)  