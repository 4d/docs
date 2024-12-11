---
id: ob-values
title: OB Values
slug: /commands/ob-values
displayed_sidebar: docs
---

<!--REF #_command_.OB Values.Syntax-->**OB Values** ( *object* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Values.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | プロパティ値を取得したいオブジェクト |
| 戻り値 | Collection | &#8592; | プロパティ値の(バリアント型の)コレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Values.Summary-->**OB Values** コマンドは、*object* 引数で指定したオブジェクトの内の列挙可能なプロパティの値を格納したバリアントのコレクションを返します。<!-- END REF-->

返されるコレクション内での値の順番は、プロパティの定義順に対応します。

#### 例題 

オブジェクトのプロパティ値を全て格納したコレクションを取得したい場合を考えます:

```4d
 var $person : Object
 var $col : Collection
 
 $person:=New object
 $person.lastName:="Smith"
 $person.firstName:="Jenny"
 $person.children:=New object("Mary";12;"Mark";8)
 
 $col:=OB Values($person)
 
  //$col[0]="Smith"
  //$col[1]="Jenny"
  //$col[2]={"Mary":12,"Mark":8}
```

#### 参照 

[OB Entries](ob-entries.md)  
[OB Keys](ob-keys.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1718 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


