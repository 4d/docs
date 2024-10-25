---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->**SUSPEND TRANSACTION**コマンドはカレントプロセス内のカレントトランザクションを一時停止させます。<!-- END REF-->そうすることによって例えば、トランザクションのコンテキストは手つかずで残したまま、データベースの他の部分にてデータを (データがトランザクションに含まれる事なく) 操作することができます。トランザクション内で更新、あるいは追加されたレコードは、トランザクションが [RESUME TRANSACTION](resume-transaction.md) コマンドによって再開されるまでロックされています。

詳細については、*トランザクションの停止* を参照ください。

#### 参照 

[Active transaction](active-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
*トランザクションの停止*  