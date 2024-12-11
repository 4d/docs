---
id: start-sql-server
title: START SQL SERVER
slug: /commands/start-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.START SQL SERVER.Syntax-->**START SQL SERVER**<!-- END REF-->
<!--REF #_command_.START SQL SERVER.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.START SQL SERVER.Summary-->El comando START SQL SERVER lanza el servidor SQL integrado de la aplicación 4D en la que se ejecuta.<!-- END REF--> Una vez lanzado, el servidor SQL puede responder a las búsquedas SQL externas. 

**Nota:** este comando no afecta el funcionamiento del motor SQL interno de 4D. El motor SQL siempre está disponible para las búsquedas internas.

#### Variables y conjuntos del sistema 

Si el servidor SQL ha sido lanzado correctamente, la variable sistema OK toma el valor, de lo contrario toma el valor 0.

#### Ver también 

[STOP SQL SERVER](stop-sql-server.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 962 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


