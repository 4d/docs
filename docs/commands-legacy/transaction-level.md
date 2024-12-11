---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Current transaction level (0 if no transaction has been started) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Transaction level.Summary-->The Transaction level command returns the current transaction level for the process.<!-- END REF--> This command takes all the transactions of the current process into account, regardless of whether they were started via the 4D language or via SQL.

#### See also 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Using Transactions*  

#### Properties
|  |  |
| --- | --- |
| Command number | 961 |
| Thread safe | &check; |
| Forbidden on the server ||


