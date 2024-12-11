---
id: resume-indexes
title: RESUME INDEXES
slug: /commands/resume-indexes
displayed_sidebar: docs
---

<!--REF #_command_.RESUME INDEXES.Syntax-->**RESUME INDEXES** ( *tabla* {; *} )<!-- END REF-->
<!--REF #_command_.RESUME INDEXES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual reactivar los índices |
| * | Operador | &#8594;  | Si se pasa = indexación asíncrona |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESUME INDEXES.Summary-->El comando **RESUME INDEXES** reactiva todos los índices de la *tabla* cuando se han detenido anteriormente utilizando el comando [PAUSE INDEXES](pause-indexes.md).<!-- END REF--> Si los índices de *tabla* no se han detenido, el comando no hace nada.  
  
En la mayoría de los casos, la ejecución de este comando activa la reconstrucción de los índices de *tabla*.  
Si pasa el parámetro opcional *\**, la reconstrucción de los índices se realiza en modo asíncrono. Esto significa que el método de llamada al comando continúa su ejecución después de esta llamada, independientemente de si la indexación ha terminado o no. Si omite este parámetro, la reconstrucción de los índices bloqueará la ejecución del método hasta que se complete la operación de reconstrucción.  
  
El comando **RESUME INDEXES** sólo se puede llamar desde 4D Server o un 4D local. Si este comando se ejecuta desde un equipo 4D remoto, se genera el error -10513\. Este error puede ser interceptado utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md).

#### Ver también 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1294 |
| Hilo seguro | &check; |


