---
id: query-selection-with-array
title: QUERY SELECTION WITH ARRAY
slug: /commands/query-selection-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Syntax-->**QUERY SELECTION WITH ARRAY** ( *campoObjetivo* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION WITH ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campoObjetivo | Field | &#8594;  | Campo utilizado para comparar los valores |
| array | Array | &#8594;  | Array de valores buscados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY SELECTION WITH ARRAY.Summary-->El comando QUERY SELECTION WITH ARRAY busca en la tabla del campo pasado como primer parámetro los registros para los cuales el valor de campoObjetivo es igual a al menos uno de los valores de los elementos en el *array*.<!-- END REF--> Los registros encontrados constituyen la nueva selección actual. 

QUERY SELECTION WITH ARRAY funciona de la misma forma que [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY"). La diferencia entre estos dos comandos es el alcance de la búsqueda:

* [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY") busca en todos los registros de la tabla de *campoObjetivo*.
* QUERY SELECTION WITH ARRAY busca únicamente en los registros de la selección actual de la tabla *campoObjetivo*.

Para mayor información, consulte la descripción del comando [QUERY WITH ARRAY](query-with-array.md "QUERY WITH ARRAY").

#### Ver también 

[QUERY WITH ARRAY](query-with-array.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1050 |
| Hilo seguro | &check; |
| Modifica la selección actual ||
| Prohibido en el servidor ||


