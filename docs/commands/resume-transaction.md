---
id: resume-transaction
title: RESUME TRANSACTION
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESUME TRANSACTION.Summary-->The **RESUME TRANSACTION** command resumes the transaction that was paused using [SUSPEND TRANSACTION](suspend-transaction.md) at the corresponding level in the current process.<!-- END REF--> Any operations that are executed after this command are carried out under transaction control (except when several suspended transactions are nested). 

For more information, please refer to [Suspending transactions](/4Dv20R6/4D/20-R6/Suspending-transactions.300-6958364.en.html).

#### See also 

[Active transaction](active-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
[Suspending transactions](../../4D/20-R6/Suspending-transactions.300-6958364.en.html)  