---
id: wp-table-merge-cells
title: WP TABLE MERGE CELLS
slug: /WritePro/commands/wp-table-merge-cells
displayed_sidebar: docs
---

<!--REF #_command_.WP TABLE MERGE CELLS.Syntax-->**WP TABLE MERGE CELLS** ( *targetObj* ) | ( *tableRef* ; *startColumn* ; *startRow* {; *columnCount*{; *rowCount*}} )<!-- END REF-->
<!--REF #_command_.WP TABLE MERGE CELLS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Proドキュメント |
| tableRef | Object | &#8594;  | 表の参照 |
| startColumn | Integer | &#8594;  | 最初のセル列の位置 |
| startRow | Integer | &#8594;  | 最初のセル行の位置 |
| columnCount | Integer | &#8594;  | 結合する列の数 |
| rowCount | Integer | &#8594;  | 結合する行の数 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP TABLE MERGE CELLS.Summary-->**WP TABLE MERGE CELLS** コマンドは、*targetObj* または(*startColumn*、*startRow*、*columnCount*、および *rowCount* によって定義される)*tableRef* 内のセルのセレクションを結合します。<!-- END REF-->

以下のいづれかを渡して下さい:

* *targetObj:*  
   * レンジ  
   * 要素(表 / 行 / 本文 / 段落 / アンカーされた画像 / ヘッダー / フッター / セクション / サブセクション)  
   * 4D Write Pro ドキュメント

*targetObj* 引数で指定したターゲットが、セルのセレクションを含む表またはテキストのレンジと交差しない場合、コマンドは何もしません。

*targetObj* 引数で指定したターゲットが、単一のセルのみと交差する場合、**WP TABLE MERGE CELLS** コマンドは何もしません。

**または**

* startColumn 引数および *startRow* 引数 - 結合する最初のセルの左上の座標を定義します。
* columnCount 引数および rowCount 引数(任意) - それぞれ結合したい列および行の数を指定します。  
    
rowCount 引数が省略された場合は、1 を渡したのと同等の扱いになります(1がデフォルト値)。columnCount 引数および rowCount 引数の両方が省略された場合、これは単一のセルを指定するのと同等になりますので、何も起こりません。

If startColumn 引数と ColumnCount 引数の和、または *startRow* 引数と rowCount 引数の和が *tableRef* 引数で指定した表の列/行数を超える場合、またはstartColumn 引数または *startRow* 引数が *tableRef* 引数で指定した表の列/行数より大きい場合、返されるレンジには最大限大きい列/行数を格納したレンジが返されますので、これはつまり表全体が一つの巨大なセルへと結合されることになります。

#### 例題 

複数のセルのレンジを指定して一つに結合したい場合を考えます:

```4d
 WP TABLE MERGE CELLS($table;3;2;2;4)
  //または
 $cells:=WP Table get cells($table;3;2;2;4)
 WP TABLE MERGE CELLS($cells)
```

実行した結果:

![](../../assets/en/WritePro/commands/pict6398108.en.png)

元のセルにあった既存のデータは、結合したセル内に連結されます。

詳細については、*セルの結合と結合解除* の章を参照して下さい。

#### 参照 

[WP TABLE SPLIT CELLS](wp-table-split-cells.md)  
*表の管理*  