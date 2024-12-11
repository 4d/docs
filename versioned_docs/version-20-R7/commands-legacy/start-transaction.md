---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.START TRANSACTION.Summary-->START TRANSACTION starts a transaction in the current process.<!-- END REF--> All changes to the data (records) of the database within the transaction are stored temporarily until the transaction is accepted (validated) or canceled.

Beginning with version 11 of 4D, you can nest several transactions (sub-transactions). Each transaction or sub-transaction must eventually be cancelled or validated. Note that if the main transaction is cancelled, all the sub-transactions are cancelled as well, regardless of their result.

#### See also 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[Transaction level](transaction-level.md)  
*Using Transactions*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 239 |
| Thread safe | &check; |
| Forbidden on the server ||


