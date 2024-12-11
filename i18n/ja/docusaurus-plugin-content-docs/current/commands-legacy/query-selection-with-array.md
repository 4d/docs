---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *targetField* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | 値の比較に使用するフィールド |
| array | Array | &#8594;  | 検索する値の配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->QUERY SELECTION WITH ARRAY コマンドは1番目の引数に渡されたフィールドのテーブルを検索し、*targetField* が*array*要素のうち少なくともひとつの値に等しいレコードをカレントセレクションにします。<!-- END REF-->

QUERY SELECTION WITH ARRAYは[QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY")と同じような動作を実行します。相違点は検索する範囲が異なるだけです:

* [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY")は、*targetField*を含むテーブル中全レコードの中からレコードを検索します。
* QUERY SELECTION WITH ARRAYは、*targetField*を含むテーブルのカレントセレクションの中からレコードを検索します。

詳細は、[QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY") コマンドの説明を参照してください。

#### 参照 

[QUERY WITH ARRAY](query-with-array.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1050 |
| スレッドセーフである | &check; |
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


