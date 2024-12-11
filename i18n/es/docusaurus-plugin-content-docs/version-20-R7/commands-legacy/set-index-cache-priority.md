---
id: set-index-cache-priority
title: SET INDEX CACHE PRIORITY
slug: /commands/set-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX CACHE PRIORITY.Syntax-->**SET INDEX CACHE PRIORITY** ( *campo* ; *prioridad* )<!-- END REF-->
<!--REF #_command_.SET INDEX CACHE PRIORITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo cuyo valor de prioridad de índices debe ser configurado para la sesión |
| prioridad | Integer | &#8594;  | Valor de prioridad de la caché para el(los) índice(s) de campo |

<!-- END REF-->

#### Modo experto 

<!--REF #_command_.SET INDEX CACHE PRIORITY.Summary-->Este comando está reservado para necesidades específicas.<!-- END REF--> Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base.

#### Descripción 

El comando **SET INDEX CACHE PRIORITY** define una prioridad específica en los índices relacionados con el campo en caché para todos los procesos de la sesión actual. Este comando debe llamarse en el método base **On Startup** u **On Server Startup**. 

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en 4D modo remoto.

Este comando maneja la prioridad para todos los índices relacionados con el *campo*, incluidos los índices de palabras clave (la prioridad de los índices compuestos no se puede personalizar).

Pase en *prioridad* una de las siguientes constantes del tema "*Gestión*":

| Constante                | Comentario                                             |
| ------------------------ | ------------------------------------------------------ |
| Cache priority low       |                                                        |
| Cache priority very low  |                                                        |
| Cache priority normal    | Define la prioridad de la caché a su valor por defecto |
| Cache priority high      |                                                        |
| Cache priority very high |                                                        |

#### Ejemplo 

En el , usted desea definir una alta prioridad para los índices campo \[Cliente\]Apellido:

```4d
 SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)
```

#### Ver también 

[ADJUST INDEX CACHE PRIORITY](adjust-index-cache-priority.md)  
[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1401 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


