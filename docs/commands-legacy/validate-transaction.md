---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->**VALIDATE TRANSACTION** accepts the transaction that was started with [START TRANSACTION](start-transaction.md) of the corresponding level in the current process.<!-- END REF--> The command saves the changes to the data of the database that occurred during the transaction.

Starting with version 11 of 4D, you can nest several transactions (sub-transactions). If the main transaction is cancelled, all the sub-transactions are cancelled, even if they have been validated individually using this command.

#### System variables and sets 

The system variable OK is set to 1 if the transaction has been validated correctly; otherwise, it is set to 0.

Note that when OK is set to 0, the transaction is automatically cancelled internally (equivalent to [CANCEL TRANSACTION](cancel-transaction.md)). Consequently, you must not explicitly call [CANCEL TRANSACTION](cancel-transaction.md) if OK=0, particularly in the context of nested transactions, because the cancellation will then be applied to the higher level transaction. 

#### See also 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Using Transactions*  