---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
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

<!--REF #_command_.START TRANSACTION.Summary-->START TRANSACTION inicia una transacción en el proceso actual.<!-- END REF--> Todos los cambios a los datos (registros) de la base dentro de la transacción se almacenan temporalmente hasta que la transacción sea validada o cancelada.

A partir de la versión 11 de 4D, puede anidar varias transacciones (subtransaccciones). Cada transacción o subtransaction debe ser finalmente cancelada o validada. Note que si la transacción principal se cancela, todas las subtransacciones también se cancelan, sin importar su resultado.

## Ver también 

[CANCEL TRANSACTION](../commands/cancel-transaction)  
[In transaction](../commands/in-transaction)  
[Transaction level](../commands/transaction-level)  
*Utilización de transacciones*  
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 239 |
| Hilo seguro | yes |


