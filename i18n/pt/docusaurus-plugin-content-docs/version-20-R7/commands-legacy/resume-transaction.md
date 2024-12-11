---
id: resume-transaction
title: RESUME TRANSACTION
slug: /commands/resume-transaction
displayed_sidebar: docs
---

<!--REF #_command_.RESUME TRANSACTION.Syntax-->**RESUME TRANSACTION**<!-- END REF-->
<!--REF #_command_.RESUME TRANSACTION.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.RESUME TRANSACTION.Summary-->O comando **RESUME TRANSACTION** reativa a transação que foi suspensa utilizando *ServerSpecialBuild*  no nível correspondente no processo atual.<!-- END REF--> Todas as operações que são executadas depois deste comando são realizadas sob o controle de transações (exceto quando várias transações suspensas estão aninhadas).

Para saber mais, consulte *Suspender as transações*.

#### Ver também 

[Active transaction](active-transaction.md)  
[SUSPEND TRANSACTION](suspend-transaction.md)  
*Suspender as transações*  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1386 |
| Thread-seguro | &check; |
| Proibido no servidor ||


