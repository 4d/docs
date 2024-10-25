---
id: adjust-table-cache-priority
title: ADJUST TABLE CACHE PRIORITY
slug: /commands/adjust-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Syntax-->**ADJUST TABLE CACHE PRIORITY** ( *tabla* ; *prioridad* )<!-- END REF-->
<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla cuyo valor de prioridad de datos escalar tiene que ser ajustado |
| prioridad | Integer | &#8594;  | Valor de prioridad de la caché para la tabla |

<!-- END REF-->

#### Modo experto 

<!--REF #_command_.ADJUST TABLE CACHE PRIORITY.Summary-->Este comando está reservado para necesidades específicas.<!-- END REF--> Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base.

#### Descripción 

El comando **ADJUST TABLE CACHE PRIORITY** modifica el valor de *prioridad* de los datos relacionados con *tabla* en la caché para el proceso actual.   
Una llamada a este comando reemplaza cualquier valor de prioridad previamente ajustado a través del mismo comando en el mismo proceso. Este comando ajusta la prioridad de las necesidades temporales, por ejemplo durante una búsqueda o una importación. 

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

 Este comando controla la prioridad de los datos sólo en los campos escalares (tipos fecha, número o cadena). La prioridad para campos de tipo binario (Blobs, textos, imágenes y objetos) es manejada por el comando [ADJUST BLOBS CACHE PRIORITY](adjust-blobs-cache-priority.md). 

Pase en *prioridad* una de las siguientes constantes del tema "*Gestión*":

| Constante                | Comentario                                             |
| ------------------------ | ------------------------------------------------------ |
| Cache priority low       |                                                        |
| Cache priority very low  |                                                        |
| Cache priority normal    | Define la prioridad de la caché a su valor por defecto |
| Cache priority high      |                                                        |
| Cache priority very high |                                                        |

#### Ejemplo 

Usted desea cambiar temporalmente la prioridad de la caché de los campos escalares \[Docs\]:

```4d
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority low)
  // ... hacer alguna operación específica
 ADJUST TABLE CACHE PRIORITY([Docs];Cache priority normal)
```

#### Ver también 

[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  
[SET TABLE CACHE PRIORITY](set-table-cache-priority.md)  