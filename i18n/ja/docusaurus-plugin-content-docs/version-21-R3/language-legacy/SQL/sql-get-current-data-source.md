---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 使用されているカレントのデータソース名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|19 R5|名称変更|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SQL Get current data source.Summary-->*Get current data source*コマンドはアプリケーションのカレントデータソースの名前を返します。<!-- END REF-->カレントデータソースは、[Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL")内で実行されるSQLクエリを受け取ります。  
カレントデータソースがローカルな4Dのデータベースである時、コマンドはSQL\_INTERNAL定数("" テーマ) の値に該当する文字列";DB4D\_SQL\_LOCAL;" を返します。  
SQLクエリを実行する前に、このコマンドでカレントデータソースをチェックすることができます。

## 参照 

[Begin SQL](../commands/begin-sql)  
[End SQL](../commands/end-sql)  
[SQL GET DATA SOURCE LIST](../commands/sql-get-data-source-list)  
[SQL LOGIN](../commands/sql-login)  
[SQL LOGOUT](../commands/sql-logout)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 990 |
| スレッドセーフである | no |


