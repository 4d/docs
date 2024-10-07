---
id: get-memory-statistics
title: GET MEMORY STATISTICS
slug: /commands/get-memory-statistics
displayed_sidebar: docs
---

<!--REF #_command_.GET MEMORY STATISTICS.Syntax-->**GET MEMORY STATISTICS** ( *tipoInfo* ; *arrayNombres* ; *arrayValores* ; *ArrayContador* )<!-- END REF-->
<!--REF #_command_.GET MEMORY STATISTICS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoInfo | Integer | &srarr; | Selector de información a obtener |
| arrayNombres | Text array | &harr; | Títulos de la información |
| arrayValores | Real array | &harr; | Valores de la información |
| ArrayContador | Real array | &harr; | Número de objetos respectivos (si disponible) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET MEMORY STATISTICS.Summary-->El comando **GET MEMORY STATISTICS** recupera la información relativa al uso de la caché de datos por 4D.<!-- END REF-->. Esta información puede utilizarse en el análisis del funcionamiento de la aplicación.

El parámetro *tipoInfo* especifica el tipo de información solicitada. En versiones 4D actuales, solo hay un tipo soportado (*infoType*\=1) 

Después de ejecutar el comando, las estadísticas solicitadas se entregan en los arrays *arraysNombres*, *arraysValores* y *ArrayContador*. Esta información también está disponible vía el explorador de ejecución: tamaño de memoria física, virtual, libre, ocupada, etc. Para mayor información sobre la interpretación avanzada de estos datos, contacte al departamento de servicio técnico de 4D.

#### Ver también 

[Cache info](cache-info.md)  