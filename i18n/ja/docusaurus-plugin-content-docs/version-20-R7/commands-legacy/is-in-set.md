---
id: is-in-set
title: Is in set
slug: /commands/is-in-set
displayed_sidebar: docs
---

<!--REF #_command_.Is in set.Syntax-->**Is in set** ( *set* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is in set.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| set | Text | &#8594;  | テストするセットの名前 |
| 戻り値 | Boolean | &#8592; | True＝カレントレコードがセットに含まれる False＝カレントレコードがセットに含まれない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is in set.Summary-->Is in set関数は、*set*の属するテーブルのカレントレコードが*set*に含まれているかどうかを調べます。<!-- END REF-->Is in set関数は、カレントレコードが*set*に含まれていれば Trueを返し、含まれていなければ Falseを返します。

#### 例題 

以下の例は、ボタンのオブジェクトメソッドです。これは、現在表示されているレコードが "Best" のセットに含まれているかどうかを調べます。  
:

```4d
 If(Is in set("Best")) //お得意様かどうか調べる
    ALERT("お得意様"")
 Else
    ALERT("お得意様ではありません。")
 End if
```

#### 参照 

[ADD TO SET](add-to-set.md)  
[REMOVE FROM SET](remove-from-set.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 273 |
| スレッドセーフである | &check; |


