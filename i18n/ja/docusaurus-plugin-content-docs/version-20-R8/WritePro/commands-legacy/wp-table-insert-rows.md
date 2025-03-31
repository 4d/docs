---
id: wp-table-insert-rows
title: WP Table insert rows
slug: /WritePro/commands/wp-table-insert-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP Table insert rows.Syntax-->**WP Table insert rows** ( targetObj | {*tableRef* ; *rowNumber*} {; *numRows*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Table insert rows.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| tableRef | Object | &#8594;  | 表参照 |
| rowNumber | Integer | &#8594;  | 行インデックス番号 |
| numRows | Integer | &#8594;  | 挿入する行の数(デフォルト値=1) |
| 戻り値 | Object | &#8592; | 表の行のレンジ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Table insert rows.Summary-->**WP Table insert rows** コマンドは、4D Write Pro の表に一つまたは複数の行を挿入します。<!-- END REF-->

このコマンドは二つのシンタックスをサポートします:

* 最初の引数としてtargetObj を渡した場合、コマンドはターゲットに含まれる最初の表に行を挿入します。*targetObj* 引数に渡せるものは以下の通りです:  
   * レンジ  
   * 要素(行/段落/本文/ヘッダー/フッター/インラインピクチャー/セクション/サブセクション)  
   * 4D Write Pro ドキュメント  
         
   *targetObj* 引数のターゲットが表または行が挿入可能なテキストレンジと交差しない場合、コマンドは何もせず、Null を返します(エラーは生成されません)。
* *tableRef* および *rowNumber* 引数の両方を渡した場合、コマンドは指定された表の、指定された行インデックスに行を挿入します。  
rowNumber 引数の番号がの表内にある行数より大きい場合、行は表に挿入ではなく追加される形になります。

任意の*numRows* 引数は*targetObj* または *tableRef* に挿入される行の数を定義します。この引数が省略された場合、デフォルトで1行が挿入されます。

**戻り値**

コマンドは、挿入された行を表す行レンジを返すか、あるいは何も挿入されなかった場合にはNull を返します。

#### 例題 

*Invoice* の表の終わりに行を二つ追加したい場合を考えます。以下のコードを実行すると:

```4d
 var $row : Object
 var $table;$row : Object
 var $rowNum : Integer
 
 $table:=WP Get element by ID(WParea;"Invoice") //"Invoice" の表を取得
 
 If($table#Null)
    $rowNum:=$table.rowCount+1 // 最後の行に1を加えた数を指定することで行を追加する
    $row:=WP Table insert rows($table;$rowNum;2)
 End if
```

正しい位置に行が二つ新しく追加されます:

![](../../assets/en/WritePro/commands/pict4680266.en.png)

#### 参照 

[WP Table insert columns](wp-table-insert-columns.md)  