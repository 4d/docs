---
id: wp-table-insert-columns
title: WP Table insert columns
slug: /WritePro/commands/wp-table-insert-columns
displayed_sidebar: docs
---

<!--REF #_command_.WP Table insert columns.Syntax-->**WP Table insert columns** ( targetObj | {*tableRef* ; *colNumber*} {; *numColumns*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Table insert columns.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| tableRef | Object | &#8594;  | 表参照 |
| colNumber | Integer | &#8594;  | カラム番号 |
| numColumns | Integer | &#8594;  | 挿入するカラムの数(デフォルト値=1) |
| 戻り値 | Object | &#8592; | 表のカラムのレンジ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Table insert columns.Summary-->**WP Table insert columns** コマンドは、4D Write Pro の表に一つまたは複数のカラムを挿入します。<!-- END REF-->

このコマンドは二つのシンタックスをサポートします:

* 最初の引数としてtargetObj を渡した場合、コマンドはターゲットに含まれる最初の表にカラムを挿入します。*targetObj* 引数に渡せるものは以下の通りです:  
   * レンジ  
   * 要素(行/段落/本文/ヘッダー/フッター/インラインピクチャー/セクション/サブセクション)  
   * 4D Write Proドキュメント  
         
   *targetObj* 引数のターゲットがカラムが挿入可能な表またはテキストレンジと交差しない場合、コマンドは何もせず、Null を返します(エラーは生成されません)。
* *tableRef* および *colNumber* 引数の両方を渡した場合、コマンドは指定された表の、指定されたカラムインデックスにカラムを挿入します。*col* *Number* 引数の番号がの表内にあるカラム数より大きい場合、カラムは表に挿入ではなく追加される形になります。

任意の*numColumns* 引数は*targetObj* または *tableRef* に挿入される行の数を定義します。この引数が省略された場合、デフォルトで1行が挿入されます。

**戻り値**

コマンドは、挿入されたカラムを表すカラムレンジを返すか、あるいは何も挿入されなかった場合にはNull を返します。

#### 例題 

*Invoice* の最初のカラムの終わりにカラムを3つ追加したい場合を考えます。以下のコードを実行すると:

```4d
 var $column : Object
 var $table : Object
 
 $table:=WP Get element by ID(WParea;"Invoice") // "Invoice" 表を取得
 
 $column:=WP Table insert columns($table;2;3) // 2の位置に3カラム追加
```

正しい位置にカラムが新しく追加されます:

![](../../assets/en/WritePro/commands/pict4680283.en.png)

#### 参照 

[WP Table insert rows](wp-table-insert-rows.md)  