---
id: query-selection-by-formula
title: QUERY SELECTION BY FORMULA
slug: /commands/query-selection-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION BY FORMULA.Syntax-->**QUERY SELECTION BY FORMULA** ( *tabla* {; *formula*} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION BY FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual efectuar la búsqueda en la selección actual |
| formula | Boolean | &#8594;  | Fórmula de búsqueda |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY SELECTION BY FORMULA.Summary-->El comando QUERY SELECTION BY FORMULA busca registros en tabla.<!-- END REF--> busca registros en tabla aplicando QUERY BY FORMULA a cada registro de la selección QUERY SELECTION BY FORMULA modifica la selección actual de tabla para el proceso actual y hace del primer registro el nuevo registro actual.

QUERY SELECTION BY FORMULA funciona de la misma forma que [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA"). La diferencia entres estos dos comandos es el alcance de la búsqueda:

* [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA") busca registros entre todos los registros de la tabla.
* QUERY SELECTION BY FORMULA efectúa su búsqueda únicamente en los registros de la selección actual de la tabla.

Para mayor información, consulte la descripción del comando [QUERY BY FORMULA](query-by-formula.md "QUERY BY FORMULA").

#### Ver también 

[QUERY](query.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY SELECTION](query-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 207 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||
| Prohibido en el servidor ||


