---
id: log
title: Log
slug: /commands/log
displayed_sidebar: docs
---

<!--REF #_command_.Log.Syntax-->**Log** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Log.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 自然対数を求める数値 |
| 戻り値 | Real | &#8592; | 自然対数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Log.Summary-->Log は*number*の自然対数を返します。<!-- END REF-->LogはExpの逆の演算を実行する関数です。

**Note:** 4Dは定義済み定数e number (2.71828...) を提供しています。

#### 例題 

以下の行は1を表示します:

```4d
 ALERT(String(Log(Exp(1)))
```

#### 参照 

[Exp](exp.md)  