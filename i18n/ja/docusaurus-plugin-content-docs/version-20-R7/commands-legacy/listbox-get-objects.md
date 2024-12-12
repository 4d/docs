---
id: listbox-get-objects
title: LISTBOX GET OBJECTS
slug: /commands/listbox-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET OBJECTS.Syntax-->**LISTBOX GET OBJECTS** ( {* ;} *object* ; *arrObjectNames* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET OBJECTS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、 Object はオブジェクト名(文字列)<br/>省略時、 Object は変数 |
| object | any | &#8594;  | オブジェクト名(* 指定時)、<br/>または変数(* 省略時) |
| arrObjectNames | Text array | &#8592; | リストボックスを構成するサブオブジェクト名(ヘッダー、列、フッター) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET OBJECTS.Summary-->**LISTBOX GET OBJECTS** コマンドは 、*object* と*\** 演算子で指定したリストボックスを構成するオブジェクトの、それぞれの名前を含んだ配列を返します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で変数を指定します。この場合、文字列ではなく変数参照を渡します。

*arrObjectNames* には、コマンドからの配列を受け取るテキスト配列を渡します。配列には、オブジェクト名が以下の規則に従って表示順に返されます: 

| nameCol1       |
| -------------- |
| headerNameCol1 |
| footerNameCol1 |
| nameCol2       |
| headerNameCol2 |
| footerNameCol2 |
| ...            |

配列には、表示非表示に関わらず、全ての列に関して(列のフッターを含む)オブジェクト名が返されます。

このコマンドは [FORM LOAD](form-load.md)、[FORM GET OBJECTS](form-get-objects.md) と [OBJECT Get type](object-get-type.md) コマンドを使用してフォームを解析する際に有用です。必要に応じてリストボックスのサブオブジェクトの名前を取得するために使用することができます。

#### 例題 

フォームをロードし、そこに内包される全てのリストボックスオブジェクトの一覧を取得する場合:

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### 参照 

[FORM LOAD](form-load.md)  
[OBJECT Get type](object-get-type.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1302 |
| スレッドセーフである | &cross; |


