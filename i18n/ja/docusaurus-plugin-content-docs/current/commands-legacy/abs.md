---
id: abs
title: Abs
slug: /commands/abs
displayed_sidebar: docs
---

<!--REF #_command_.Abs.Syntax-->**Abs** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Abs.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 絶対値を求める数値 |
| 戻り値 | Real | &#8592; | 絶対値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Abs.Summary-->Abs は*number*の絶対値（符号なしの正の値）を返します。<!-- END REF-->*number*が負の場合、正の数を返します。*number*が正の数の場合は、値は変わりません。

#### 例題 

以下の例は、-10.3の絶対値である10.3を返します:

```4d
 vlVector:=Abs(-10.3)
```
