---
id: wp-get-element-by-id
title: WP Get element by ID
slug: /WritePro/commands/wp-get-element-by-id
displayed_sidebar: docs
---

<!--REF #_command_.WP Get element by ID.Syntax-->**WP Get element by ID** ( *wpDoc* ; *ID* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get element by ID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro ドキュメント |
| ID | Text | &#8594;  | 取得する要素のID |
| 戻り値 | Object | &#8592; | 4D Write Pro 要素 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get element by ID.Summary-->**WP Get element by ID** コマンドは、*wpDoc* 引数で指定したドキュメント内の、*ID* 引数で指定された要素を格納しているオブジェクトを返します。<!-- END REF-->

*wpDoc* 引数には、4D Write Pro ドキュメントを渡します。

*ID* 引数には、取得する要素の属性IDを渡します。要素なドキュメント内のもの、例えば画像、段落、表、などを指定できますし、あるいはドキュメント自身を指定することもできます。ドキュメント内に指定されたIDを持つ要素がなかった場合、null 値が返されます。

**注:** *ID* 引数の値は大文字と小文字を区別します。

#### 例題 1 

"img1"というID を持つピクチャーを取得する場合を考えます:

```4d
 var obImage : Object
 obImage:=WP Get element by ID(myDoc;"img1")
```

#### 例題 2 

表要素を探し、その境界線を太い紫の境界線に変更したい場合を考えます:

```4d
 var $element : Object
 $element:=WP Get element by ID(myDoc;"Table1")
 WP SET ATTRIBUTES($element;wk border style;wk solid)
 WP SET ATTRIBUTES($element;wk border width;"4px")
 WP SET ATTRIBUTES($element;wk border color;"purple")
```

#### 例題 3 

要素を取得し、そのID を変更したい場合を考えます:

```4d
 $colTable:=WP Create table range([INFO]Sample)
 $elements:=WP Get elements($colTable)
 $elem:=WP Get element by ID([INFO]Sample;"Paris")
 If($elem#Null)
    $elem.ID:="Lyon"
 End if
```

#### 参照 

[WP Get elements](wp-get-elements.md)  