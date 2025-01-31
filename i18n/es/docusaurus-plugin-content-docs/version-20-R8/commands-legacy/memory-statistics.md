---
id: memory-statistics
title: MEMORY STATISTICS
slug: /commands/memory-statistics
displayed_sidebar: docs
---

<!--REF #_command_.MEMORY STATISTICS.Syntax-->**MEMORY STATISTICS** ( *tipoInfo* ; *arrayNombres* ; *arrayValores* ; *ArrayContador* )<!-- END REF-->
<!--REF #_command_.MEMORY STATISTICS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoInfo | Integer | &#8594;  | Selector de información a obtener |
| arrayNombres | Text array | &#8592; | Títulos de la información |
| arrayValores | Real array | &#8592; | Valores de la información |
| ArrayContador | Real array | &#8592; | Número de objetos respectivos (si disponible) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MEMORY STATISTICS.Summary-->El comando **MEMORY STATISTICS** recupera la información relativa al uso de la caché de datos por 4D.<!-- END REF-->. Esta información puede utilizarse en el análisis del funcionamiento de la aplicación.

El parámetro *tipoInfo* especifica el tipo de información solicitada. En versiones 4D actuales, solo hay un tipo soportado (*infoType*\=1) 

Después de ejecutar el comando, las estadísticas solicitadas se entregan en los arrays *arraysNombres*, *arraysValores* y *ArrayContador*. Esta información también está disponible vía el explorador de ejecución: tamaño de memoria física, virtual, libre, ocupada, etc. Para mayor información sobre la interpretación avanzada de estos datos, contacte al departamento de servicio técnico de 4D.

#### Ver también 

[Cache info](cache-info.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1118 |
| Hilo seguro | &check; |


