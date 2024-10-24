---
id: get-last-query-path
title: Get last query path
slug: /commands/get-last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last query path.Syntax-->**Get last query path** ( *descFormat* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Get last query path.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| descFormat | Integer | &rarr; | 説明フォーマット (テキストまたはXML) |
| 戻り値 | Text | &larr; | 最後に実行されたクエリパスの説明 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get last query path.Summary-->Get Last Query Path コマンドは、データに対して行われた最後のクエリの実際のパスの説明を返します。<!-- END REF-->クエリの説明に関する詳細は、[DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") コマンドの説明を参照してください。

*descFormat* 引数に渡した値に基づき、説明はテキストまたはXMLフォーマットで返されます。テーマの定数を使用できます: 

| 定数                         | 型    | 値 |
| -------------------------- | ---- | - |
| Description in text format | 倍長整数 | 0 |
| Description in XML format  | 倍長整数 | 1 |

このコマンドを実行する前に[DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") コマンドをセッション中で使用して、クエリ分析モードを有効にしなければなりません。

クエリパスの説明を ([Get Last Query Plan](get-last-query-plan.md "Get Last Query Plan") コマンドで取得できる) クエリプランの説明と比較し、最適化を行うことができます。

#### 参照 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query plan](get-last-query-plan.md)  