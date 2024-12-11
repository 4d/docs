---
id: trunc
title: Trunc
slug: /commands/trunc
displayed_sidebar: docs
---

<!--REF #_command_.Trunc.Syntax-->**Trunc** ( *number* ; *places* ) : Real<!-- END REF-->
<!--REF #_command_.Trunc.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number | Real | &#8594;  | 切り捨てる数値 |
| places | Integer | &#8594;  | 切り捨てを行う位置 |
| 戻り値 | Real | &#8592; | 切り捨てられた数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Trunc.Summary-->Truncは、指定された*places*の小数部を切り捨てた数値を返します。<!-- END REF-->Truncは、常に元の値よりも小さい値を返します。

*places*が正の数の場合は、*number*の小数部を切り捨て、*places*が負の場合には、整数部（小数点の左側）を切り捨てます。

#### 例題 

さまざまな引数を使用したTruncの機能を次に示します。結果を*vlResult*に代入します。コメントは、変数*vlResult*に代入される値についての説明です:

```4d
 vlResult:=Trunc(216.897;1) // vlResult gets 216.8
 vlResult:=Trunc(216.897;-1) // vlResult gets 210
 vlResult:=Trunc(-216.897;1) // vlResult gets -216.9
 vlResult:=Trunc(-216.897;-1) // vlResult gets -220
```

#### 参照 

[Round](round.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 95 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


