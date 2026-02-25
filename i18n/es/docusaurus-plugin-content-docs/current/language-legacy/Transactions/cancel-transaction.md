---
id: cancel-transaction
title: CANCEL TRANSACTION
slug: /commands/cancel-transaction
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL TRANSACTION.Syntax-->**CANCEL TRANSACTION**<!-- END REF-->
<!--REF #_command_.CANCEL TRANSACTION.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.CANCEL TRANSACTION.Summary-->**CANCEL TRANSACTION** anula la transacción abierta por el comando [START TRANSACTION](../commands/start-transaction)  del nivel correspondiente en el proceso actual.<!-- END REF-->anula todas las operaciones que llegaran a ejecutarse en los datos durante la transacción.

**Nota:** **CANCEL TRANSACTION** no tiene efecto en las posibles modificaciones efectuadas en los registros actuales que no se guardaron, se siguen mostrando después de la ejecución del comando.

## Ver también 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
[Transaction level](../commands/transaction-level)  
*Utilización de transacciones*  
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 241 |
| Hilo seguro | yes |


