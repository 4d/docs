---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->VALIDATE TRANSACTION acepta la transacción abierta por el comando [START TRANSACTION](start-transaction.md "START TRANSACTION") del nivel correspondiente en el proceso actual.<!-- END REF--> VALIDATE TRANSACTION guarda todas las modificaciones efectuadas a los datos de la base que ocurrieron durante la transacción. 

A partir de la versión 11 de 4D, puede anidar varias transacciones (subtransacciones). Si la transacción principal se cancela, todas las subtransacciones se cancelan, incluso si han sido validadas individualmente utilizando este comando.

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si la transacción se ha validado correctamente; de lo contrario, toma el valor 0.

Tenga en cuenta que cuando OK toma el valor 0, la transacción automáticamente se cancela internamente (equivalente a [CANCEL TRANSACTION](cancel-transaction.md)). Por lo tanto, no debe llamar explícitamente [CANCEL TRANSACTION](cancel-transaction.md) si OK=0, particularmente en el contexto de las transacciones anidadas, ya que la cancelación se aplicará entonces a la transacción de nivel superior.

#### Ver también 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Utilización de transacciones*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 240 |
| Hilo seguro | &check; |
| Modifica variables | OK |


