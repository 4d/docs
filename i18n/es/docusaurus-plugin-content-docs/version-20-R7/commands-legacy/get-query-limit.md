---
id: get-query-limit
title: Get query limit
slug: /commands/get-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.Get query limit.Syntax-->**Get query limit** : Integer<!-- END REF-->
<!--REF #_command_.Get query limit.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número límite de registros,0 = número ilimitado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get query limit.Summary-->El comando **Get query limit** devuelve el límite del número de registros que una búsqueda puede encontrar en el proceso actual.<!-- END REF-->

Se define este límite utilizando el comando [SET QUERY LIMIT](set-query-limit.md). 

Por defecto, si ningún límite se ha definido, el comando devuelve 0.

#### Ver también 

[SET QUERY LIMIT](set-query-limit.md)  