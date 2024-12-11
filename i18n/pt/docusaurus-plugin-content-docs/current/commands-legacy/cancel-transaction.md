---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->CANCEL TRANSACTION cancela a transação que foi aberta pelo comando [START TRANSACTION](start-transaction.md) do nível correspondente no processo atual.<!-- END REF--> CANCEL TRANSACTION cancela todas as operações executadas nos dados durante a transação.

**Nota:** **CANCEL TRANSACTION** não tem efeito nas possíveis modificações realizadas nos registros atuais que não foram guardados, seguem sendo mostradas depois da execução do comando.

#### Ver também 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[Transaction level](transaction-level.md)  
*Usar Transações*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 241 |
| Thread-seguro | &check; |
| Proibido no servidor ||


