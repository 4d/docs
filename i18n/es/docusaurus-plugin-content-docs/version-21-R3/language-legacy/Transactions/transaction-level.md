---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nivel de transacción actual (0 si ninguna transacción se ha iniciado) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|11 SQL|Creado por|

</details>
</div>

#### Descripción 

<!--REF #_command_.Transaction level.Summary-->El comando Transaction level devuelve el nivel de transacción actual para el proceso.<!-- END REF--> Este comando tiene en cuenta todas las transacciones del proceso actual, sin importar si fueron iniciadas vía el lenguaje 4D o vía SQL.

#### Ver también 

[In transaction](../commands/in-transaction)  
[START TRANSACTION](../commands/start-transaction)  
*Utilización de transacciones*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 961 |
| Hilo seguro | yes |


