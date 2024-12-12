---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| horizontal | Boolean | &#8594;  | True = 表示, False = 非表示 |
| vertical | Boolean | &#8594;  | True = 表示, False = 非表示 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX SET GRID.Summary-->**LISTBOX SET GRID**コマンドを使用し、*object*引数および *\** で指定されたリストボックスのグリッドを構成する、横および縦グリッドラインを表示、または非表示に設定することができます。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

*horizontal*と*vertical*には、対応するグリッドラインを表示するか（**True**）、表示しないか（**False**）を示すブール値を渡します。デフォルトでは、グリッドが表示されます。

#### 参照 

[LISTBOX GET GRID](listbox-get-grid.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  