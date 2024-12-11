---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
| Does not require any parameters |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESUME TRANSACTION.Summary-->The **RESUME TRANSACTION** command resumes the transaction that was paused using [SUSPEND TRANSACTION](suspend-transaction.md) at the corresponding level in the current process.<!-- END REF--> Any operations that are executed after this command are carried out under transaction control (except when several suspended transactions are nested). 

For more information, please refer to *Suspending transactions*.

#### See also 

[Active transaction](active-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspending transactions*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1386 |
| Thread safe | &check; |
| Forbidden on the server ||


