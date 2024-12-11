---
id: random
title: Random
slug: /commands/random
displayed_sidebar: docs
---

<!--REF #_command_.Random.Syntax-->**Random**  : Integer<!-- END REF-->
<!--REF #_command_.Random.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 乱数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Random.Summary-->Random は、0から32,767までの範囲の乱数を返します。<!-- END REF-->

整数の範囲は、以下のように記述して変えることができます:

```4d
 (Random%(vEnd-vStart+1))+vStart
```

*vStart*は範囲の開始値で、*vEnd*は最終値です。

#### 例題 

以下の例は、10から30までの範囲の整数の乱数を*vlResult*に代入します:

```4d
 vlResult:=(Random%21)+10
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 100 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


