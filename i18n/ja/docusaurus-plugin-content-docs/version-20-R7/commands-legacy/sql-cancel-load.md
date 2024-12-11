---
id: sql-cancel-load
title: SQL CANCEL LOAD
slug: /commands/sql-cancel-load
displayed_sidebar: docs
---

<!--REF #_command_.SQL CANCEL LOAD.Syntax-->**SQL CANCEL LOAD**<!-- END REF-->
<!--REF #_command_.SQL CANCEL LOAD.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL CANCEL LOAD.Summary-->SQL CANCEL LOAD コマンドコマンドは、現在のSELECTリクエストを終了してパラメタを初期化します。<!-- END REF-->

このコマンドを使用して、[SQL LOGIN](sql-login.md "SQL LOGIN")コマンドにより開始された同一接続内（つまり同一カーソル内）において、複数のSELECTリクエストを実行できます。 

#### 例題 

この例題では、同一接続内で2つのリクエストが実行されます: 

```4d
 var Myblob : Blob
 var MyText : Text
 SQL LOGIN("mysql";"root";"")
 
 SQLStmt:="SELECT blob_field FROM app_testTable"
 SQL EXECUTE(SQLStmt;Myblob)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
 
  //カーソルを置きなおす。
 SQL CANCEL LOAD
 
 SQLStmt:="SELECT Name FROM Employee"
 SQL EXECUTE(SQLStmt;MyText)
 While(Not(SQL End selection))
    SQL LOAD RECORD
 End while
```

#### システム変数およびセット 

コマンドが正しく実行されると、システム変数OKは1に、そうでなければ0に設定されます。

#### 参照 

[SQL LOAD RECORD](sql-load-record.md)  
[SQL LOGIN](sql-login.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 824 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


