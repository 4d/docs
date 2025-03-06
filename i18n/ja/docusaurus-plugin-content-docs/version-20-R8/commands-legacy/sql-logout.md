---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL LOGOUT.Summary-->SQL LOGOUT コマンドは、カレントプロセスにおいて開かれているODBCソースとの接続をクローズします(すでに接続されていれば)。<!-- END REF-->ODBC接続が行われていない場合、コマンドは何も行いません。

#### システム変数およびセット 

正しくログアウトがあ行われると、OKシステム変数は1に設定されます。そうでなければ0に設定されます。[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドでインストールされたエラー処理メソッドを使用してこのエラーを処理できます。

#### 参照 

[SQL LOGIN](sql-login.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 872 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK、error |


