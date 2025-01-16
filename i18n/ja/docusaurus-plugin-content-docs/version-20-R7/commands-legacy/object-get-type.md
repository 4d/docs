---
id: object-get-type
title: OBJECT Get type
slug: /commands/object-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get type.Syntax-->**OBJECT Get type** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Integer | &#8592; | オブジェクトのタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get type.Summary-->**OBJECT Get type**コマンドは、カレントフォーム内の、引数 *object* と *\** で指定したオブジェクトのタイプを返します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。線や長方形といった静的なオブジェクトを処理する場合にはこの記法を用いなければなりません。省略時には *object* 引数でフィールドまたは変数を指定します。

**注:** このコマンドを複数のオブジェクトに対して適用した場合、最背面にあるオブジェクトのタイプが返されます。

返された値は "*Form Object Types*" テーマ内にある以下の定数と対応しています:

| 定数                                  | 型    | 値  |
| ----------------------------------- | ---- | -- |
| Object type 3D button               | 倍長整数 | 16 |
| Object type 3D checkbox             | 倍長整数 | 26 |
| Object type 3D radio button         | 倍長整数 | 23 |
| Object type button grid             | 倍長整数 | 20 |
| Object type checkbox                | 倍長整数 | 25 |
| Object type combobox                | 倍長整数 | 11 |
| Object type dial                    | 倍長整数 | 28 |
| Object type group                   | 倍長整数 | 21 |
| Object type groupbox                | 倍長整数 | 30 |
| Object type hierarchical list       | 倍長整数 | 6  |
| Object type hierarchical popup menu | 倍長整数 | 13 |
| Object type highlight button        | 倍長整数 | 17 |
| Object type invisible button        | 倍長整数 | 18 |
| Object type line                    | 倍長整数 | 32 |
| Object type listbox                 | 倍長整数 | 7  |
| Object type listbox column          | 倍長整数 | 9  |
| Object type listbox footer          | 倍長整数 | 10 |
| Object type listbox header          | 倍長整数 | 8  |
| Object type matrix                  | 倍長整数 | 35 |
| Object type oval                    | 倍長整数 | 34 |
| Object type picture button          | 倍長整数 | 19 |
| Object type picture input           | 倍長整数 | 4  |
| Object type picture popup menu      | 倍長整数 | 14 |
| Object type picture radio button    | 倍長整数 | 24 |
| Object type plugin area             | 倍長整数 | 38 |
| Object type popup dropdown list     | 倍長整数 | 12 |
| Object type progress indicator      | 倍長整数 | 27 |
| Object type push button             | 倍長整数 | 15 |
| Object type radio button            | 倍長整数 | 22 |
| Object type radio button field      | 倍長整数 | 5  |
| Object type rectangle               | 倍長整数 | 31 |
| Object type rounded rectangle       | 倍長整数 | 33 |
| Object type ruler                   | 倍長整数 | 29 |
| Object type splitter                | 倍長整数 | 36 |
| Object type static picture          | 倍長整数 | 2  |
| Object type static text             | 倍長整数 | 1  |
| Object type subform                 | 倍長整数 | 39 |
| Object type tab control             | 倍長整数 | 37 |
| Object type text input              | 倍長整数 | 3  |
| Object type unknown                 | 倍長整数 | 0  |
| Object type view pro area           | 倍長整数 | 42 |
| Object type web area                | 倍長整数 | 40 |
| Object type write pro area          | 倍長整数 | 41 |

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
[LISTBOX GET OBJECTS](listbox-get-objects.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1300 |
| スレッドセーフである | &cross; |


