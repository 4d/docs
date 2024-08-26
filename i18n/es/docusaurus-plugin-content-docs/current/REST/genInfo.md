---
id: genInfo
title: Obtener información del servidor
---

Puede obtener varias informaciones del servidor REST:

- los almacenes de datos expuestos y sus atributos
- el contenido de la caché del servidor REST, incluidas las sesiones de los usuarios.

## Catálogo

Utilice los parámetros [`$catalog`]($catalog.md), [`$catalog/\{dataClass\}`]($catalog.md#catalogdataclass), o [`$catalog/$all`]($catalog.md#catalogall) para obtener la lista de [clases de datos expuestas y sus atributos](configuration.md#exposing-tables-and-fields).

Para obtener la colección de todas las clases de datos expuestas junto con sus atributos:

`GET /rest/$catalog/$all`

## Información de la caché

Utilice el parámetro [`$info`]($info.md) para obtener información sobre las selecciones de entidades actualmente almacenadas en la caché de 4D Server, así como sobre las sesiones de usuario en ejecución.

## queryPath y queryPlan

Las selecciones de entidades generadas a través de búsquedas pueden tener las dos propiedades siguientes: `queryPlan` y `queryPath`. Para calcular y devolver estas propiedades, basta con añadir [`$queryPlan`]($queryplan.md) y/o [`$queryPath`]($querypath.md) en la petición REST.

Por ejemplo:

`GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true`

Estas propiedades son objetos que contienen información sobre cómo el servidor realiza consultas compuestas internamente a través de clases de datos y relaciones:

- **queryPlan**: objeto que contiene la descripción detallada de la petición justo antes de ser ejecutada (es decir, la consulta planificada).
- **queryPath**: objeto que contiene la descripción detallada de la consulta tal y como se ha realizado realmente.

La información registrada incluye el tipo de consulta (indexada y secuencial) y cada subconsulta necesaria junto con los operadores de conjunción. Las rutas de acceso de las peticiones también contienen el número de entidades encontradas y el tiempo necesario para ejecutar cada criterio de búsqueda. Query paths also contain the number of entities found and the time required to execute each search criterion. Generalmente, la descripción del plan de consulta y su ruta de acceso son idénticas, pero pueden diferir porque 4D puede implementar optimizaciones dinámicas cuando se ejecuta una consulta para mejorar el rendimiento. Por ejemplo, el motor 4D puede convertir dinámicamente una consulta indexada en una secuencial si estima que es más rápida. Este caso concreto puede darse cuando el número de entidades que se buscan es bajo.
