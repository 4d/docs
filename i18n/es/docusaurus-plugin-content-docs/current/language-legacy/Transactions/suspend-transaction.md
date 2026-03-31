---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
<div class="no-index">

| Este comando no requiere parámetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|15 R4|Creado por|

</details>
</div>

#### Descripción 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->El comando **SUSPEND TRANSACTION** suspende la transacción actual en el proceso actual.<!-- END REF--> A continuación, puede manipular los datos en otras partes de la base, por ejemplo, sin que sean incluidos en la transacción, y al mismo tiempo preservar el contexto actual de la transacción. Todos los registros que han sido actualizados o añadidos en la transacción están bloqueados hasta que la transacción se reactiva con el comando *Versioning / Client*.

Para más información, por favor consulte la sección *Suspender las transacciones*. 

#### Ver también 

[Active transaction](../commands/active-transaction)  
[RESUME TRANSACTION](../commands/resume-transaction)  
*Suspender las transacciones*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1385 |
| Hilo seguro | yes |


