---
id: cache-info
title: Cache info
slug: /commands/cache-info
displayed_sidebar: docs
---

<!--REF #_command_.Cache info.Syntax-->**Cache info** {( *dbFilter* )} : Object<!-- END REF-->
<!--REF #_command_.Cache info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| dbFilter | Object | &#8594;  | Define la lista de atributos a devolver (filtrada por DB) |
| Resultado | Object | &#8592; | Información sobre la caché |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Cache info.Summary-->El comando **Cache info** devuelve un objeto que contiene la información detallada sobre el contenido actual de la caché (memoria utilizada, tablas e índices cargados, etc.)

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); no debe ser utilizado con 4D en modo remoto.<!-- END REF-->

Por defecto, la información devuelta se refiere solamente a la base en ejecución. El parámetro objeto opcional *dbFilter* le permite especificar el alcance del comando:

* pase el atributo "dbFilter" con el valor "All" para obtener la información acerca de la caché de todas las bases lanzadas, incluidos los componentes.
* pase el atributo "dbFilter" con un valor "" (cadena vacía) para obtener información sobre la única base de datos actual (equivale a omitir el parámetro *dbFilter*).

El comando **Cache info** devuelve un único objeto que contiene toda la información relevante acerca de la caché. El objeto devuelto tiene la siguiente estructura básica:

```json
{    "maxMem": Maximum cache size (real),    "usedMem": Current cache size (real),    "objects": [...] Array of objects currently loaded in cache}
```

Los elementos del array *objetos* son objetos raíz (tablas, índices, Blobs, etc.) que estén cargados en la memoria caché. Cada elemento contiene atributos específicos que describen su estado actual. Para más información acerca de la interpretación avanzada de estos datos, contacte a su departamento de servicio técnico.

#### Ejemplo 

Quiere obtener la información de la caché para la base de datos actual:

```4d
 var $cache : Object
 $cache:=Cache info
```

Usted quiere obtener información de la caché de la base de datos y todos los componentes abiertos:

```4d
 var $dbFilter : Object
 OB SET($dbFilter;"dbFilter";"All")
 $cache:=Cache info($dbFilter)
```

#### Ver también 

[MEMORY STATISTICS](memory-statistics.md)  