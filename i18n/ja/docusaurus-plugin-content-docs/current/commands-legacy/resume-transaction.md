---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESUME TRANSACTION.Summary-->**RESUME TRANSACTION**コマンドは、カレントプロセスの同レベルにおいて [SUSPEND TRANSACTION](suspend-transaction.md) によって停止していたトランザクションを再開させます。<!-- END REF-->このコマンド後に実行されたオペレーションはトランザクションコントロール下で実行されます (ただし複数の停止されていたトランザクションがネストされていた場合を除きます)。

詳細については、 *トランザクションの停止* を参照ください。

#### 参照 

[Active transaction](active-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*トランザクションの停止*  