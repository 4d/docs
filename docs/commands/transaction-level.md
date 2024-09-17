---
id: transaction-level
title: Transaction level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  -> Function result<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Longint | <- | Current transaction level (0 if no transaction has been started) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Transaction level.Summary-->The Transaction level command returns the current transaction level for the process.<!-- END REF--> This command takes all the transactions of the current process into account, regardless of whether they were started via the 4D language or via SQL.

#### See also 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[Using Transactions](../../4D/20-R6/Using-Transactions.300-6958365.en.html)  