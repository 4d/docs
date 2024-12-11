---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 使用されているカレントのデータソース名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL Get current data source.Summary-->*Get current data source*コマンドはアプリケーションのカレントデータソースの名前を返します。<!-- END REF-->カレントデータソースは、[Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL")内で実行されるSQLクエリを受け取ります。  
カレントデータソースがローカルな4Dのデータベースである時、コマンドはSQL\_INTERNAL定数("" テーマ) の値に該当する文字列";DB4D\_SQL\_LOCAL;" を返します。  
SQLクエリを実行する前に、このコマンドでカレントデータソースをチェックすることができます。

#### 参照 

[Begin SQL](begin-sql.md)  
[End SQL](end-sql.md)  
[SQL GET DATA SOURCE LIST](sql-get-data-source-list.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 990 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


