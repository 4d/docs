---
id: in-transaction
title: In transaction
slug: /commands/in-transaction
displayed_sidebar: docs
---

<!--REF #_command_.In transaction.Syntax-->**In transaction**  : Boolean<!-- END REF-->
<!--REF #_command_.In transaction.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devuelve TRUE si el proceso actual está en transacción |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|6|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.In transaction.Summary-->El comando In transaction devuelve [True](../commands/true) si el proceso actual está en transacción, de lo contrario devuelve [False](../commands/false).<!-- END REF-->

## Ejemplo 

Si efectúa las operaciones (adición, modificación, o eliminación de registros) con múltiples registros, puede encontrarse con registros bloqueados. En este caso, para preservar la integridad de los datos, debe tener abierta una transacción, de manera que pueda “devolver” toda la operación y dejar la base intacta.

Si efectúa la operación desde un trigger o una subrutina que puede ser llamado(a) en una transacción o fuera de transacción, la utilización del comando In transaction permite verificar que el método del proceso actual o el método llamante abrió bien una transacción. Si no es el caso, no comienza la transacción, porque en caso de una falla en el proceso, no podría deshacer las operaciones efectuadas. 

## Ver también 

[Active transaction](../commands/active-transaction)  
[CANCEL TRANSACTION](../commands/cancel-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*Triggers*  
[VALIDATE TRANSACTION](../commands/validate-transaction)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 397 |
| Hilo seguro | yes |


