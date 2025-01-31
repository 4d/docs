---
id: last-query-plan
title: Last query plan
slug: /commands/last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Last query plan.Syntax-->**Last query plan** ( *descFormat* ) : Text<!-- END REF-->
<!--REF #_command_.Last query plan.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| descFormat | Integer | &#8594;  | 説明フォーマット (テキストまたはXML) |
| 戻り値 | Text | &#8592; | 最後に実行されたクエリプランの説明 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Last query plan.Summary-->Last query plan コマンドは、データに対して行われた最後のクエリのクエリプランの説明を返します。<!-- END REF-->クエリの説明に関する詳細は、[DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") コマンドの説明を参照してください。

*descFormat* 引数に渡した値に基づき、説明はテキストまたはXMLフォーマットで返されます。テーマの定数を使用できます: 

| 定数                         | 型    | 値 |
| -------------------------- | ---- | - |
| Description in text format | 倍長整数 | 0 |
| Description in XML format  | 倍長整数 | 1 |
  
  
このコマンドを実行する前に[DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") コマンドをセッション中で使用して、クエリ分析モードを有効にしなければなりません。 

クエリプランの説明を ([Last query path](last-query-path.md "Last query path") コマンドで取得できる) クエリパスの説明と比較し、最適化を行うことができます。

#### 参照 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query path](last-query-path.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1046 |
| スレッドセーフである | &check; |


