---
id: sql-load-record
title: SQL LOAD RECORD
slug: /commands/sql-load-record
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOAD RECORD.Syntax-->**SQL LOAD RECORD** {( *numRecords* )}<!-- END REF-->
<!--REF #_command_.SQL LOAD RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| numRecords | Integer | &#8594;  | ロードするレコード数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL LOAD RECORD.Summary-->SQL LOAD RECORDコマンドは、現在の接続において開かれたODBCソースからのレコードを1件以上4D内に取り込みます。<!-- END REF-->

任意の引数*numRecords*を使用し、取り出すレコード数を設定します:

* この引数を省略すると、コマンドはデータソースからカレントレコードを取り出します。この方法は、ループ中で一度に1レコードを受け取るデータ取得に対応します。
* *numRecords*に整数値を渡すと、コマンドは*numRecords*件のレコードを取り出します。
* SQL All Records定数（値 -1）を渡すと、コマンドはテーブルの全レコードを取り出します。

**Note:** 最後の2つの設定は、取得したデータが配列や4Dフィールドに関連付けられている場合にのみ意味を持ちます。 

#### システム変数およびセット 

コマンドが正しく実行されると、OKシステム変数は1に、そうでなければ0に設定されます。

#### 参照 

[SQL CANCEL LOAD](sql-cancel-load.md)  
[SQL EXECUTE](sql-execute.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 822 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


