---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.START TRANSACTION.Summary-->START TRANSACTION は、カレントプロセスでトランザクションを開始します。<!-- END REF-->トランザクションが受け入れられるまたはキャンセルされるまでは、トランザクション内にデータベース上で変更されたすべてのデータは一時的に保存されます。

4Dのバージョン11以降、複数のトランザクション(サブトランザクション) をネストすることができます。それぞれのトランザクションまたはサブトランザクションは、最終的にはキャンセルまたは認証されていなければなりません。主要なトランザクションがキャンセルされると、結果に関係なく、すべてのサブトランザクションはキャンセルされますので注意してください。

#### 参照 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[Transaction level](transaction-level.md)  
[VALIDATE TRANSACTION](validate-transaction.md)  
*トランザクションを使用する*  