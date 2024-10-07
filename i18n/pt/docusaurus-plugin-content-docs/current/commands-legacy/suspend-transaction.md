---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->O comando **SUSPEND TRANSACTION** detem a transação atual no processo atual.<!-- END REF--> Após isso pode manipular os dados em outras partes do banco de dados, por exemplo, sem que sejam incluidos na transação, e ao mesmo tempo preservar o contexto atual da transação. Todos os registros que foram atualizados ou adicionados na transação estão bloqueados até que a transação seja reativada com o comando *Versioning / Client*.

Para saber mais, consulte *Suspender as transações*. 

#### Ver também 

[Active transaction](active-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
*Suspender as transações*  