---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.START TRANSACTION.Summary-->START TRANSACTION inicia una transacción en el proceso actual.<!-- END REF--> Todos los cambios a los datos (registros) de la base dentro de la transacción se almacenan temporalmente hasta que la transacción sea validada o cancelada.

A partir de la versión 11 de 4D, puede anidar varias transacciones (subtransaccciones). Cada transacción o subtransaction debe ser finalmente cancelada o validada. Note que si la transacción principal se cancela, todas las subtransacciones también se cancelan, sin importar su resultado.

#### Ver también 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[Transaction level](transaction-level.md)  
*Utilización de transacciones*  
[VALIDATE TRANSACTION](validate-transaction.md)  