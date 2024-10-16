---
id: adjust-blobs-cache-priority
title: ADJUST BLOBS CACHE PRIORITY
slug: /commands/adjust-blobs-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Syntax-->**ADJUST BLOBS CACHE PRIORITY** ( *tabla* ; *prioridad* )<!-- END REF-->
<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla cuyo valor de prioridad de datos "blobs" tiene que ser ajustado |
| prioridad | Integer | &#8594;  | Valor de prioridad de la caché para los BLOBs en la tabla |

<!-- END REF-->

#### Modo experto 

<!--REF #_command_.ADJUST BLOBS CACHE PRIORITY.Summary-->Este comando está reservado para necesidades específicas.<!-- END REF--> Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base.

#### Descripción 

El comando **ADJUST BLOBS CACHE PRIORITY** modifica la *prioridad* de los datos "blobs" relacionados con *tabla* en la caché para el proceso actual. Una llamada a este comando reemplaza toda prioridad previamente ajustado a través del mismo comando en el mismo proceso. Este comando ajusta la prioridad para una necesidad temporal, por ejemplo durante una búsqueda o una importación.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

Los tipos de campos de datos "Blobs" incluyen BLOB, texto, imagen y objeto. Este comando maneja la prioridad para tales datos cuando se almacenan en el archivo de datos únicamente.  
La prioridad para los campos de tipo escalar (como los tipos fecha, número o cadenas) es ajustada por el comando [ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md). 

Pase en *prioridad* una de las siguientes constantes del tema "*Gestión*":

| Constante                | Tipo         | Valor | Comentario                                             |
| ------------------------ | ------------ | ----- | ------------------------------------------------------ |
| Cache priority high      | Entero largo | 1000  |                                                        |
| Cache priority low       | Entero largo | \-900 |                                                        |
| Cache priority normal    | Entero largo | 0     | Define la prioridad de la caché a su valor por defecto |
| Cache priority very high | Entero largo | 30000 |                                                        |
| Cache priority very low  | Entero largo | \-1   |                                                        |

#### Ejemplo 

Usted desea cambiar temporalmente la prioridad de la caché de los campos de texto de la tabla \[Docs\] almacenados en el archivo de datos al ejecutar una búsqueda secuencial:

```4d
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)
 QUERY([Docs];[Docs]Author#"A@") // búsqueda secuencial de un campo no indexado
  //... ejecutar varias otras búsquedas u ordenaciones en la misma tabla
  // al terminar, volver a la prioridad de caché normal
 ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)
```

#### Ver también 

[Get adjusted blobs cache priority](get-adjusted-blobs-cache-priority.md)  
[SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md)  