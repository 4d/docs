---
id: query-selection-by-formula
title: QUERY SELECTION BY FORMULA
slug: /commands/query-selection-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY FORMULA.Syntax-->**QUERY SELECTION BY FORMULA** ( *aTable* {; *queryFormula*} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードセレクションを求めるテーブル |
| queryFormula | Boolean | &#8594;  | クエリフォーミュラ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY SELECTION BY FORMULA.Summary-->QUERY SELECTION BY FORMULAは、*aTable*からレコードを検索します。<!-- END REF-->QUERY SELECTION BY FORMULAは、カレントプロセスの*aTable*のカレントセレクションを変更し、セレクションの先頭のレコ－ドをカレントレコ－ドにします。

QUERY SELECTION BY FORMULAは[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")と同じような動作を実行します。相違点は検索する範囲が異なるだけです:

* [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")はテーブル中全レコードの中からレコードを検索します。
* QUERY SELECTION BY FORMULAはテーブルのカレントセレクションの中からレコードを検索します。

詳細については、[QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA")の説明を参照してください。

#### 参照 

[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY SELECTION](query-selection.md)  