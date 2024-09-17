---
id: suspend-transaction
title: SUSPEND TRANSACTION
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->The **SUSPEND TRANSACTION** command pauses the current transaction in the current process.<!-- END REF--> You can then handle data in other parts of the database, for example, without it being included in the transaction, and while preserving the transaction context untouched. Any records that have been updated or added in the transaction are locked until the transaction is resumed using the [RESUME TRANSACTION](resume-transaction.md) command.

For more information, please refer to the [Suspending transactions](/4Dv20R6/4D/20-R6/Suspending-transactions.300-6958364.en.html) section. 

#### See also 

[Active transaction](active-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
[Suspending transactions](../../4D/20-R6/Suspending-transactions.300-6958364.en.html)  