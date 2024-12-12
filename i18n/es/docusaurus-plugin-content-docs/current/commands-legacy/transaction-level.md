---
id: transaction-level
title: Transaction level
slug: /commands/transaction-level
displayed_sidebar: docs
---

<!--REF #_command_.Transaction level.Syntax-->**Transaction level**  : Integer<!-- END REF-->
<!--REF #_command_.Transaction level.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Nivel de transacción actual (0 si ninguna transacción se ha iniciado) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Transaction level.Summary-->El comando Transaction level devuelve el nivel de transacción actual para el proceso.<!-- END REF--> Este comando tiene en cuenta todas las transacciones del proceso actual, sin importar si fueron iniciadas vía el lenguaje 4D o vía SQL.

#### Ver también 

[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Utilización de transacciones*  