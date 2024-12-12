---
id: ob-keys
title: OB Keys
slug: /commands/ob-keys
displayed_sidebar: docs
---

<!--REF #_command_.OB Keys.Syntax-->**OB Keys** ( *object* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Keys.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | プロパティ名を返すオブジェクト |
| 戻り値 | Collection | &#8592; | プロパティ名(文字列)のコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Keys.Summary-->**OB Keys** コマンドは、*object* 引数で指定したオブジェクト内の列挙可能な全てのプロパティ名を文字列として格納したコレクションを返します。<!-- END REF-->

返されるのは第1レベルのプロパティ名のみです(オブジェクト内にあるオブジェクトのプロパティ名は返されません)。返されるコレクション内の名前の順番は、プロパティの定義順に対応します。

#### 例題 

オブジェクトの第1レベルのプロパティ名を格納したコレクションを取得したい場合を考えます:

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Keys($person)
 
  //$col[0]="lastName"
  //$col[1]="firstName"
  //$col[2]="children"
```

#### 参照 

[OB Entries](ob-entries.md)  
[OB Values](ob-values.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1719 |
| スレッドセーフである | &cross; |


