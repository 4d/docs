---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION**は、対応するレベルの[START TRANSACTION](start-transaction.md)で開始したカレントプロセスのトランザクションをキャンセルします。<!-- END REF-->**CANCEL TRANSACTION**は、トランザクション中にデータ上で実行された処理をキャンセルします。

**注:** **CANCEL TRANSACTION**はまだ保存されていないカレントレコードに対して行われた変更には影響しません。このコマンドが実行された後も変更されたデータはそのまま表示されます。

#### 参照 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[Transaction level](transaction-level.md)  
[VALIDATE TRANSACTION](validate-transaction.md)  
*トランザクションを使用する*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 241 |
| スレッドセーフである | &check; |


