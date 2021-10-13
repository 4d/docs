---
id: genInfo
title: Obtener información del servidor
---

You can get several information from the REST server:

- the exposed datastores and their attributes
- the REST server cache contents, including user sessions.

## Catálogo

Utilice los parámetros [`$catalog`]($catalog.md), [`$catalog/{dataClass}`]($catalog.md#catalogdataclass), o [`$catalog/$all`]($catalog.md#catalogall) para obtener la lista de [las clases de datos expuestas y sus atributos](configuration.md#exposing-tables-and-fields).

To get the collection of all exposed dataclasses along with their attributes:

`GET /rest/$catalog/$all`


## Información de la caché

Use the [`$info`]($info.md) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions.

## queryPath y queryPlan

Entity selections that are generated through queries can have the following two properties: `queryPlan` and `queryPath`. To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

Por ejemplo:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:
- **queryPlan**: object containing the detailed description of the query just before it was executed (i.e., the planned query).
- **queryPath**: object containing the detailed description of the query as it was actually performed.

The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low.