---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION** anula la transacción abierta por el comando [START TRANSACTION](start-transaction.md)  del nivel correspondiente en el proceso actual.<!-- END REF-->anula todas las operaciones que llegaran a ejecutarse en los datos durante la transacción.

**Nota:** **CANCEL TRANSACTION** no tiene efecto en las posibles modificaciones efectuadas en los registros actuales que no se guardaron, se siguen mostrando después de la ejecución del comando.

#### Ver también 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
[Transaction level](transaction-level.md)  
*Utilización de transacciones*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 241 |
| Hilo seguro | &check; |


