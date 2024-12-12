---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION** cancels the transaction that was started with [START TRANSACTION](start-transaction.md) of the corresponding level in the current process.<!-- END REF--> **CANCEL TRANSACTION** cancels the operations executed on the data and stored during the transaction.

**Note:** **CANCEL TRANSACTION** does not have an effect on any changes made in the current records that were not saved - they remain displayed after the command is executed.

#### See also 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[Transaction level](transaction-level.md)  
*Using Transactions*  
[VALIDATE TRANSACTION](validate-transaction.md)  