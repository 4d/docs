---
id: listbox-insert-rows
title: LISTBOX INSERT ROWS
slug: /commands/listbox-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT ROWS.Syntax-->**LISTBOX INSERT ROWS** ( {* ;} *object* ; *rowPosition* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT ROWS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| rowPosition | Integer | &#8594;  | 行挿入位置 |
| numRows | Integer | &#8594;  | 挿入する行数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX INSERT ROWS.Summary-->**LISTBOX INSERT ROWS**コマンドは、*object*引数および *\** で指定されたリストボックスにひとつ以上の新しい行を挿入します。<!-- END REF--> 

**注:** このコマンドは配列タイプのリストボックスに対してのみ利用できます。セレクションタイプのリストボックスに対して使用した場合、コマンドは何も行わず、OKシステム変数に0が設定されます。

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

*numRows*が省略されているとデフォルトで行が1つだけ挿入されます。指定された場合、コマンドはこの引数で指定された行数を挿入します。

行は*rowPosition* 引数で指定された位置に挿入されます。新しい行は、配列タイプや表示状態に関わらず、リストボックスで使用されるすべての配列のこの位置に自動で挿入されます。 

*rowPosition* の値がリストボックスの総行数より大きい場合、行は各配列の一番最後に追加されます。0の場合、行は各配列の先頭に追加されます。負数の場合、何も行いません。

#### 参照 

[LISTBOX DELETE ROWS](listbox-delete-rows.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 913 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


