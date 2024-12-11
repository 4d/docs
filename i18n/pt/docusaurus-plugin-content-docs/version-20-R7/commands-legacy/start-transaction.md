---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

START TRANSACTION inicia uma transação no processo atual. Todas as mudanças nos dados (registros) do banco dentro da transação são armazenados temporariamente até que a transação seja validada ou cancelada.  

A partir da versão 11 de 4D, pode aninhar várias transações (subtransações). Cada transação ou subtransação deve ser finalmente cancelada ou validada. Note que se a transação principal for cancelada, todas as subtransações também são canceladas, sem importar seu resultado.

#### Ver também 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[Transaction level](transaction-level.md)  
*Usar Transações*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 239 |
| Thread-seguro | &check; |
| Proibido no servidor ||


