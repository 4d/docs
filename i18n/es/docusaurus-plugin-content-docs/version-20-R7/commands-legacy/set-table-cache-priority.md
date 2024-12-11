---
id: set-table-cache-priority
title: SET TABLE CACHE PRIORITY
slug: /commands/set-table-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET TABLE CACHE PRIORITY.Syntax-->**SET TABLE CACHE PRIORITY** ( *tabla* ; *prioridad* )<!-- END REF-->
<!--REF #_command_.SET TABLE CACHE PRIORITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla cuyo valor de prioridad de datos escalares tiene que ser definido para la sesión |
| prioridad | Integer | &#8594;  | Valor de prioridad de caché para valores escalares en la tabla |

<!-- END REF-->

#### Modo experto 

<!--REF #_command_.SET TABLE CACHE PRIORITY.Summary-->Este comando está reservado para necesidades específicas.<!-- END REF--> Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base.

#### Descripción 

El comando **SET TABLE CACHE PRIORITY** define una *prioridad* específica para los datos relacionados con *tabla* en caché para todos los procesos de la sesión actual. Este comando debe llamarse en el método base **On Startup** u **On Server Startup**.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en 4D modo remoto.

 Este comando controla la prioridad de los datos sólo en los campos escalares (fecha, número o tipos de cadena). La prioridad para campos de tipo binario (Blobs, textos, imágenes y objetos) es manejada por el comando [SET BLOBS CACHE PRIORITY](set-blobs-cache-priority.md). 

Pase en *prioridad* una de las siguientes constantes del tema:

| Constante                | Comentario                                             |
| ------------------------ | ------------------------------------------------------ |
| Cache priority low       |                                                        |
| Cache priority very low  |                                                        |
| Cache priority normal    | Define la prioridad de la caché a su valor por defecto |
| Cache priority high      |                                                        |
| Cache priority very high |                                                        |

#### Ejemplo 

En el , usted desea definir una prioridad alta para el dato escalar \[Customer\]:

```4d
 SET TABLE CACHE PRIORITY([Customer];Cache priority very high)
```

#### Ver también 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[ADJUST TABLE CACHE PRIORITY](adjust-table-cache-priority.md)  
[Get adjusted table cache priority](get-adjusted-table-cache-priority.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1400 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


