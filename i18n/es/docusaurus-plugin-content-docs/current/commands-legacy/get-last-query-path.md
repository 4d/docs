---
id: get-last-query-path
title: Get last query path
slug: /commands/get-last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last query path.Syntax-->**Get last query path** ( *formatDesc* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get last query path.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| formatDesc | Integer | &#x1F852; | Formato de descripción (Texto o XML) |
| Resultado | Text | &#x1F850; | Descripción de la ruta de la última búsqueda ejecutada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get last query path.Summary-->El comando Get Last Query Path devuelve la descripción interna detallada de la ruta real de la última búsqueda efectuada en los datos.<!-- END REF--> Para mayor información sobre las descripciones de búsquedas, consulte la documentación del comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION"). 

Esta descripción se devuelve en formato Texto o XML dependiendo del valor pasado en el parámetro *formatDesc*. Puede pasar una de las siguientes constantes, ubicadas en el tema “Queries”: 

| Constante                  | Tipo         | Valor |
| -------------------------- | ------------ | ----- |
| Description in text format | Entero largo | 0     |
| Description in XML format  | Entero largo | 1     |

Este comando devuelve un valor significativo si el comando [DESCRIBE QUERY EXECUTION](describe-query-execution.md "DESCRIBE QUERY EXECUTION") ha sido ejecutado durante la sesión.

La descripción de la ruta de la última búsqueda puede compararse con la descripción del plan de búsqueda de la última búsqueda (obtenido utilizando el comando [Get Last Query Plan](get-last-query-plan.md "Get Last Query Plan")) con propósitos de optimización.

#### Ver también 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query plan](get-last-query-plan.md)  