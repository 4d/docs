---
id: listbox-delete-rows
title: LISTBOX DELETE ROWS
slug: /commands/listbox-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE ROWS.Syntax-->**LISTBOX DELETE ROWS** ( {* ;} *object* ; *rowPosition* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE ROWS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| rowPosition | Integer | &#8594;  | 削除する行の位置 |
| numRows | Integer | &#8594;  | 削除する行の数 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX DELETE ROWS.Summary-->**LISTBOX DELETE ROWS**コマンドは、*object*引数および *\** で指定されたリストボックスから、*rowPosition* から始まるひとつ以上の行（表示または非表示）を削除します。<!-- END REF--> 

**Note:** このコマンドは配列タイプのリストボックスでのみ動作します。このコマンドがセレクションタイプのリストボックスに適用された場合、何も行わず、システム変数OKに0が設定されます。

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

コマンド実行後、リストボックス内の要素の選択はすべて解除される点に留意してください。

*rowPosition* で指定した行は、リストボックスの列で使用されるすべての配列から自動的に削除されます。  
*rowPosition* の値がリストボックス内の合計行数よりも大きい場合、コマンドは何も行いません。

**Note:** このコマンドはリストボックス行の表示/非表示状態を考慮しません。

#### 参照 

[LISTBOX Get number of rows](listbox-get-number-of-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  