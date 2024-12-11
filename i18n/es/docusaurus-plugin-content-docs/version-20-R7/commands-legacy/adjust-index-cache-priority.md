---
id: adjust-index-cache-priority
title: ADJUST INDEX CACHE PRIORITY
slug: /commands/adjust-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Syntax-->**ADJUST INDEX CACHE PRIORITY** ( *campo* ; *prioridad* )<!-- END REF-->
<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campo | Field | &#8594;  | Campo cuyo valor de prioridad de índice(s) debe ajustarse |
| prioridad | Integer | &#8594;  | Valor de prioridad de la caché para los índices de campo |

<!-- END REF-->

#### Modo experto 

<!--REF #_command_.ADJUST INDEX CACHE PRIORITY.Summary-->Este comando está reservado para necesidades específicas.<!-- END REF--> Debe utilizarse con cuidado, ya que puede afectar el rendimiento de la base.

#### Descripción 

El comando **ADJUST INDEX CACHE PRIORITY** modifica el valor de *prioridad* de los índices relacionados con campo en la caché para el proceso actual. Una llamada a este comando reemplaza cualquier valor de prioridad previamente ajustado a través del mismo comando en el mismo proceso. Este comando ajusta la prioridad para necesidades temporales, por ejemplo durante una búsqueda o una importación.

**Nota:** este comando sólo funciona en modo local (4D Server y 4D); No se puede utilizar en modo remoto 4D.

Este comando controla la prioridad para todos los índices relacionados con *campo*, incluyendo índices de palabras claves. Sin embargo, no cambia la prioridad de los índices compuestos.

Pase en *prioridad* una de las siguientes constantes del tema "*Gestión*":

| Constante                | Comentario                                             |
| ------------------------ | ------------------------------------------------------ |
| Cache priority low       |                                                        |
| Cache priority very low  |                                                        |
| Cache priority normal    | Define la prioridad de la caché a su valor por defecto |
| Cache priority high      |                                                        |
| Cache priority very high |                                                        |

#### Ejemplo 

Usted desea cambiar temporalmente la prioridad de la caché para el índice de campo \[Docs\]Comments:

```4d
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority very high)
 QUERY([Docs];[Docs]Comments%"Extra") // búsqueda de un campo indexado
  //... realización de otras búsquedas u ordenaciones en la misma tabla
  // al terminar, volver a la prioridad de caché normal
 ADJUST INDEX CACHE PRIORITY([Docs]Comments;Cache priority normal)
```

#### Ver también 

[Get adjusted index cache priority](get-adjusted-index-cache-priority.md)  
[SET INDEX CACHE PRIORITY](set-index-cache-priority.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1430 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


