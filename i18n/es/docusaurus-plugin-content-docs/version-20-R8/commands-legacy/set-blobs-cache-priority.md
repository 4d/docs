---
id: set-blobs-cache-priority
title: SET BLOBS CACHE PRIORITY
slug: /commands/set-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Syntax-->**SET BLOBS CACHE PRIORITY** ( *tabla* ; *prioridad* )<!-- END REF-->
<!--REF #_command_.SET BLOBS CACHE PRIORITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla cuyo valor de prioridad de datos "blobs" tiene que definirse para la sesión |
| prioridad | Integer | &#8594;  | Valor de prioridad de la caché para BLOBs en la tabla |

<!-- END REF-->

#### Modo experto 

<!--REF #_command_.SET BLOBS CACHE PRIORITY.Summary-->Este comando está reservado para necesidades específicas.<!-- END REF--> Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base.

#### Descripción 

El comando **SET BLOBS CACHE PRIORITY** define una *prioridad* específica para los datos "blobs" relacionados con *tabla* in la caché para todos los procesos de la sesión actual. Este comando debe llamarse en el método base **On Startup** u **On Server Startup**.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

Los tipos de campos de datos "Blobs" incluyen BLOB, texto, imagen y objeto. Este comando maneja la prioridad para tales datos cuando se almacenan en el archivo de datos únicamente.

Pase en *prioridad* una de las siguientes constantes del tema "*Gestión*":

| Constante                | Comentario                                             |
| ------------------------ | ------------------------------------------------------ |
| Cache priority low       |                                                        |
| Cache priority very low  |                                                        |
| Cache priority normal    | Define la prioridad de la caché a su valor por defecto |
| Cache priority high      |                                                        |
| Cache priority very high |                                                        |

#### Ejemplo 

En el , usted desea definir una prioridad alta para la tabla \[Customer\]:

```4d
 SET BLOBS CACHE PRIORITY([Customer];Cache priority very high)
```

#### Ver también 

[ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md)  
[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1425 |
| Hilo seguro | &check; |


