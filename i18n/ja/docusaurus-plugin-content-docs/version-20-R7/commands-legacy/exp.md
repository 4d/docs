---
id: exp
title: Exp
slug: /commands/exp
displayed_sidebar: docs
---

<!--REF #_command_.Exp.Syntax-->**Exp** ( *number* ) : Real<!-- END REF-->
<!--REF #_command_.Exp.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 評価する数値 |
| 戻り値 | Real | &#8592; | 指数関数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Exp.Summary-->Expは自然対数の底（e = 2.<!-- END REF-->71828...）の*number*乗の値を計算します。ExpはLogの逆の関数です。

**Note:** 4Dは定義済み定数e number (2.71828...) を提供しています。

#### 例題 

以下の例では、*vrE*に2.71828...が代入されます:

```4d
 vrE:=Exp(1) // vrE gets 2.17828...
```

#### 参照 

[Log](log.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 21 |
| スレッドセーフである | &check; |


