---
id: listbox-delete-column
title: LISTBOX DELETE COLUMN
slug: /commands/listbox-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE COLUMN.Syntax-->**LISTBOX DELETE COLUMN** ( {* ;} *object* ; *colPosition* {; *number*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE COLUMN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| colPosition | Integer | &#8594;  | 削除する列番号 |
| number | Integer | &#8594;  | 削除する列数 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX DELETE COLUMN.Summary-->LISTBOX DELETE COLUMN コマンドは、引数*object*および *\** で指定されたリストボックスから1つ以上の列 (表示または非表示) を取り除きます。<!-- END REF-->

**Note:** このコマンドは階層モードで表示されているリストボックスの先頭の列に適用された場合なにも行いません。

オプション引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細はの節を参照してください。

オプション引数*number*を渡さない場合、コマンドは*colPosition*引数で指定された列だけを削除します。  
この引数を渡した場合、*number*引数は、*colPosition*引数より、この列を含め右側にある削除する列の数を示します。

*colPosition* 引数がリストボックスの列数よりも大きい場合、コマンドは何も行いません。

#### 参照 

[LISTBOX Get number of columns](listbox-get-number-of-columns.md)  
[LISTBOX INSERT COLUMN](listbox-insert-column.md)  