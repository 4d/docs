---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESUME TRANSACTION.Summary-->El comando **RESUME TRANSACTION** reactiva la transacción que se suspendió utilizando *ServerSpecialBuild*  en el nivel correspondiente en el proceso actual.<!-- END REF--> Todas las operaciones que se ejecutan después de este comando se llevan a cabo bajo el control de transacciones (excepto cuando varias transacciones suspendidas están anidadas).

Para más información, consulte la sección *Suspender las transacciones*.

#### Ver también 

[Active transaction](active-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspender las transacciones*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1386 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


