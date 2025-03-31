---
id: listbox-set-column-width
title: LISTBOX SET COLUMN WIDTH
slug: /commands/listbox-set-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Syntax-->**LISTBOX SET COLUMN WIDTH** ( {* ;} *object* ; *width* {; *minWidth* {; *maxWidth*}} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| width | Integer | &#8594;  | 列幅 (ピクセル単位) |
| minWidth | Integer | &#8594;  | 列の最小幅 (ピクセル単位) |
| maxWidth | Integer | &#8594;  | 列の最大幅 (ピクセル単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET COLUMN WIDTH.Summary-->**LISTBOX SET COLUMN WIDTH** コマンドを使用し、 *object*引数および *\** で指定されたオブジェクト（リストボックス、列、またはヘッダ）の任意の列の幅、またはすべての列の幅をプログラムから変更することができます。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

*width*引数には、オブジェクトの新しい幅（ピクセル単位）を渡します。

*object*がリストボックスオブジェクトである場合、リストボックスのすべての列サイズが変更されます。  
  
*object*が列または列ヘッダである場合、その列のサイズだけが変更されます。  
  
オプションの*minWidth*と*maxWidth*引数を使用して、列の手動によるサイズ変更の制限を設定できます。*minWidth*と*maxWidth*引数にそれぞれピクセル単位で最小および最大幅を渡すことができます。ユーザにサイズ変更をさせたくない場合は、*width*、*minWidth*および*maxWidth*に同じ値を渡します。

#### 参照 

[LISTBOX Get column width](listbox-get-column-width.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 833 |
| スレッドセーフである | &cross; |


