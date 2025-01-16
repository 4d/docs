---
id: listbox-get-column-formula
title: LISTBOX Get column formula
slug: /commands/listbox-get-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column formula.Syntax-->**LISTBOX Get column formula** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get column formula.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| 戻り値 | Text | &#8592; | 列に割り当てられたフォーミュラ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get column formula.Summary-->**LISTBOX Get column formula**コマンドは*object*と*\** 引数で指定したリストボックス列に割り当てられたフォーミュラを返します。<!-- END REF-->フォーミュラはリストボックスプロパティのデータソースが**カレントセレクション**、**命名セレクション**、あるいは**コレクションまたはエンティティセレクション**の場合のみ使用できます。列にフォーミュラが割り当てられていない場合、コマンドは空の文字列を返します。 

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。この引数にはリストボックス列を指定しなければなりません。

#### 参照 

[LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1202 |
| スレッドセーフである | &cross; |


