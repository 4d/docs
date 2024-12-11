---
id: round
title: Round
slug: /commands/round
displayed_sidebar: docs
---

<!--REF #_command_.Round.Syntax-->**Round** ( *round* ; *places* ) : Real<!-- END REF-->
<!--REF #_command_.Round.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| round | Real | &#8594;  | 丸める数値 |
| places | Integer | &#8594;  | 丸める小数部の位置 |
| 戻り値 | Real | &#8592; | placesで指定された場所で 丸められた数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Round.Summary-->Round は、指定された*places*位置で数値を四捨五入します。<!-- END REF-->

*places*が正の数の場合、Roundの小数部を丸め、*places*が負の場合には、整数部（小数点より左側）を丸めます。

*places*で指定した桁位置に続く数字が5から9の場合、Roundが正のときは切り上げを、負の場合負の大きな値に丸めます。  
*places*で指定した桁位置に続く数字が0から4の場合、Roundは0に丸めます。

#### 例題 

下記は、さまざまな引数を使用してRoundの機能を示します。結果を*vlResult*に代入します。コメントは、変数*vlResult*に代入される値についての説明です:

```4d
 vlResult:=Round(16.857;2) // vlResult gets 16.86
 vlResult:=Round(32345.67;-3) // vlResult gets 32000
 vlResult:=Round(29.8725;3) // vlResult gets 29.873
 vlResult:=Round(-1.5;0) // vlResult gets -2
```

#### 参照 

[Trunc](trunc.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 94 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


