---
id: set-cache-size
title: SET CACHE SIZE
slug: /commands/set-cache-size
displayed_sidebar: docs
---

<!--REF #_command_.SET CACHE SIZE.Syntax-->**SET CACHE SIZE** ( *tam* {; *libMin*} )<!-- END REF-->
<!--REF #_command_.SET CACHE SIZE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tam | Real | &#8594;  | Tamaño de la caché de base de datos en bytes |
| libMin | Real | &#8594;  | Número mínimo de bytes a liberar cuando la caché está llena |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET CACHE SIZE.Summary-->El comando SET CACHE SIZE define dinámicamente el tamaño de la caché de la base de datos y, opcionalmente, permite definir el tamaño minino en bytes a partir del cual comenzar a liberar memoria.<!-- END REF-->

Nota: este comando sólo funciona en modo local (4D Server y 4D); no debe ser utilizado desde un 4D en modo remoto.

En tam, pase el nuevo tamaño de la memoria caché de la base en bytes. Este nuevo tamaño se aplica de forma dinámica cuando se ejecuta el comando.

En libMin, pase el tamaño mínimo de memoria a liberar de la caché de la base cuando el motor necesita espacio para asignar un objeto a él (valor en bytes). El propósito de esta opción es reducir el número de veces que los datos se liberan de la memoria caché con el fin de obtener un mejor rendimiento. Por defecto, si esta opción no se utiliza, 4D descarga al menos el 10% de la caché cuando se necesita espacio. Si su base de datos funciona con una gran caché, puede ser ventajoso utilizar un tamaño fijo que no dependa del tamaño de la memoria caché. Puede ajustar esta configuración de acuerdo con el tamaño de los bloques de datos que maneja en su base de datos.

#### Ejemplo 

Usted quiere añadir 100 MB al tamaño de la caché de su base actual. Puede escribir:

```4d
 var $currentCache : Real
 $currentCache:=Get cache size
  // el tamaño de la caché actual, e por ejemplo, 419430400
 SET CACHE SIZE($currentCache+100000000)
  // el tamaño de la caché actual ahora es 519430400
```

#### Ver también 

[Get cache size](get-cache-size.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1399 |
| Hilo seguro | &check; |


