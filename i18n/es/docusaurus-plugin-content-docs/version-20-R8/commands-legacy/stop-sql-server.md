---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.STOP SQL SERVER.Summary-->El comando STOP SQL SERVER detiene el servidor SQL integrado de la aplicación 4D en la cual ha sido ejecutado.<!-- END REF--> 

Si el servidor SQL ha sido lanzado, todas las conexiones SQL se interrumpen y el servidor no acepta más búsquedas SQL externas. Si el servidor SQL no se lanzó, el comando no hace nada.

**Nota:** este comando no afecta el funcionamiento del motor SQL interno de 4D. El motor SQL siempre está disponible para búsquedas internas.

#### Ver también 

[START SQL SERVER](start-sql-server.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 963 |
| Hilo seguro | &cross; |


