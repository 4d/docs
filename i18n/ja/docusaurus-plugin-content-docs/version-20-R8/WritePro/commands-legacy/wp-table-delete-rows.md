---
id: wp-table-delete-rows
title: WP TABLE DELETE ROWS
slug: /WritePro/commands/wp-table-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE DELETE ROWS.Syntax-->**WP TABLE DELETE ROWS** ( *targetObj* ) | ( *tableRef* ; *rowNumber* {; *numRows*} )<!-- END REF-->
<!--REF #_command_.WP TABLE DELETE ROWS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| tableRef | Object | &#8594;  | 表の参照 |
| rowNumber | Integer | &#8594;  | 行インデックス番号 |
| numRows | Integer | &#8594;  | 削除する行の数(デフォルト値=1) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP TABLE DELETE ROWS.Summary-->**WP TABLE DELETE ROWS** コマンドは、4D Write Proの表から一つまたは複数の行を削除します。<!-- END REF-->

このコマンドは二つのシンタックスをサポートします:

* 最初の引数としてtargetObj を渡した場合、コマンドはターゲットに含まれる全ての行を削除します。*targetObj* 引数に渡せるものは以下の通りです:  
   * レンジ  
   * 要素(行/段落/本文/ヘッダー/フッター/インラインピクチャー/セクション/サブセクション)  
   * 4D Write Pro ドキュメント  
         
   *targetObj* 引数のターゲットが複数の表と交差する場合、全てのテーブルに触れる列は削除されます。*targetObj* 引数のターゲットが表と交差しない場合、コマンドは何もしません(エラーは生成されません)。  
   このシンタックスでは、*numRows* 引数は(渡された場合)無視されます。
* *tableRef* および *rowNumber* 引数の両方を渡した場合、コマンドは指定されたテーブルの、指定された行インデックス番号からカラムを削除します。  
このシンタックスでは、任意の*numRows* 引数を渡すと*tableRef* 引数で指定した表から削除するカラムの数を定義することができます。この引数が省略された場合、デフォルトで1行が削除されます。

全ての行を表から削除した場合、表全体が削除されます。

#### 例題 

*Invoice* の表から行を一つ削除したい場合を考えます。以下のコードを実行すると:

```4d
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") //"Invoice" の表を取得
 
 WP TABLE DELETE ROWS($table;3;2) //2行目(3つ目)から2行削除
```

正しい位置の行が削除されます:

![](../../assets/en/WritePro/commands/pict4680306.en.png)

#### 参照 

[WP TABLE DELETE COLUMNS](wp-table-delete-columns.md)  