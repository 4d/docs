---
id: genInfo
title: Obtener información del servidor
---

Puede obtener varias informaciones del servidor REST:

- los almacenes de datos expuestos y sus atributos
- el contenido de la caché del servidor REST, incluidas las sesiones de los usuarios.

## Catálogo

Use the [`$catalog`]($catalog.md), [`$catalog/{dataClass}`]($catalog.md#catalogdataclass), or [`$catalog/$all`]($catalog.md#catalogall) parameters to get the list of [exposed dataclasses and their attributes](configuration.md#exposing-tables-and-fields).

Para obtener la colección de todas las clases de datos expuestas junto con sus atributos:

`GET /rest/$catalog/$all`

## Información de la caché

Use the [`$info`]($info.md) parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions.

## queryPath y queryPlan

Entity selections that are generated through queries can have the following two properties: `queryPlan` and `queryPath`. To calculate and return these properties, you just need to add [`$queryPlan`]($queryplan.md) and/or [`$queryPath`]($querypath.md) in the REST request.

Por ejemplo:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Estas propiedades son objetos que contienen información sobre cómo el servidor realiza consultas compuestas internamente a través de clases de datos y relaciones:

- **queryPlan**: object containing the detailed description of the query just before it was executed (i.e., the planned query).
- **queryPath**: object containing the detailed description of the query as it was actually performed.

La información registrada incluye el tipo de consulta (indexada y secuencial) y cada subconsulta necesaria junto con los operadores de conjunción. Las rutas de acceso de las peticiones también contienen el número de entidades encontradas y el tiempo necesario para ejecutar cada criterio de búsqueda. Query paths also contain the number of entities found and the time required to execute each search criterion. Generalmente, la descripción del plan de consulta y su ruta de acceso son idénticas, pero pueden diferir porque 4D puede implementar optimizaciones dinámicas cuando se ejecuta una consulta para mejorar el rendimiento. Por ejemplo, el motor 4D puede convertir dinámicamente una consulta indexada en una secuencial si estima que es más rápida. Este caso concreto puede darse cuando el número de entidades que se buscan es bajo.
