---
id: wp-table-split-cells
title: WP TABLE SPLIT CELLS
slug: /WritePro/commands/wp-table-split-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE SPLIT CELLS.Syntax-->**WP TABLE SPLIT CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE SPLIT CELLS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Proドキュメント |
| tableRef | Object | &#8594;  | 表の参照 |
| startColumn | Integer | &#8594;  | 最初のセル列の位置 |
| startRow | Integer | &#8594;  | 最初のセル行の位置 |
| columnCount | Integer | &#8594;  | 結合解除する列の数 |
| rowCount | Integer | &#8594;  | 結合解除する行の数 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP TABLE SPLIT CELLS.Summary-->**WP TABLE SPLIT CELLS** コマンドは、*targetObj* または(startColumn、*startRow*、columnCount、および rowCount によって定義される)tableRef 内のセルのセレクションの結合を解除します。<!-- END REF-->セルは、それが縦方向/横方向/その両方向に既に結合されていた場合にのみ結合を解除され分割されます。そうでない場合は、セルは変更されません。

以下のいづれかを渡して下さい:

* *targetObj* *:*  
   * レンジ  
   * 要素(表 / 行 / 本文 / 段落 / アンカーされた画像 / ヘッダー / フッター / セクション / サブセクション)  
   * 4D Write Pro ドキュメント

*targetObj* 引数で指定したターゲットが、セルのセレクションを含む表またはテキストのレンジと交差しない場合、コマンドは何もしません。

*targetObj* 引数で指定したターゲットが、単一または複数のまだ結合されていないセルと交差する場合、**WP TABLE SPLIT CELLS** コマンドは何もしません。

**または**

* startColumn 引数および *startRow* 引数 - 結合を解除する最初のセルの左上の座標を定義します。
* columnCount 引数および rowCount 引数(任意) - それぞれ結合を解除したい列および行の数を指定します。  
    
rowCount 引数が省略された場合は、1 を渡したのと同等の扱いになります(1がデフォルト値)。columnCount 引数および rowCount 引数の両方が省略された場合、これは単一のセルを結合解除するのと同等になりますので、何も起こりません。

If startColumn 引数と ColumnCount 引数の和、または *startRow* 引数と rowCount 引数の和が *tableRef* 引数で指定した表の列/行数を超える場合、またはstartColumn 引数または *startRow* 引数が *tableRef* 引数で指定した表の列/行数より大きい場合、返されるレンジには最大限大きい列/行数を格納したレンジが返されますので、これはつまり表全体の中の全てのセルが結合を解除されることになります(ただし既に結合されていた場合)。

#### 例題 

(既に結合されているセルを格納している)複数のセルのレンジを指定して、それの結合を解除したい場合を考えます:

```4d
 WP TABLE SPLIT CELLS($table;3;2;1;1)
  //または
 $cells:=WP Table get cells($table;3;2;1;1)
 WP TABLE SPLIT CELLS($cells)
```

実行した結果:

![](../../assets/en/WritePro/commands/pict6398103.en.png)

結合していたセルにあったデータは結合解除後は全て最初(左上)のセルへと格納され、それ以外の解除されたセルは空のままになります。

詳細な情報については、*セルの結合と結合解除* の章を参照して下さい。

#### 参照 

[WP TABLE MERGE CELLS](wp-table-merge-cells.md)  
*表の管理*  