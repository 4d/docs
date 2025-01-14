---
id: listbox-moved-row-number
title: LISTBOX MOVED ROW NUMBER
slug: /commands/listbox-moved-row-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Syntax-->**LISTBOX MOVED ROW NUMBER** ( {* ;} *object* ; *oldPosition* ; *newPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| oldPosition | Integer | &#8592; | 移動された行の以前の位置 |
| newPosition | Integer | &#8592; | 移動された行の新しい位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Summary-->LISTBOX MOVED ROW NUMBER コマンドは、引数*object*および *\** で指定されたリストボックス内で移動された行の以前の位置*oldPosition*と新しい位置*newPosition*を返します。<!-- END REF-->

**注:** 行を移動できるのは配列型のリストボックスのみです。

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は *オブジェクトプロパティ* の節を参照してください。

このコマンドはOn row movedフォームイベントで使用します ([Form event](form-event.md "Form event") コマンド参照)。

**注:** このコマンドは、非表示の行を考慮しません。

#### 参照 

[Form event code](../commands/form-event-code.md)"  
[LISTBOX MOVED COLUMN NUMBER](listbox-moved-column-number.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 837 |
| スレッドセーフである | &cross; |


