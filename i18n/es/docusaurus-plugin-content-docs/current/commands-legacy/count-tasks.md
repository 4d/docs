---
id: count-tasks
title: Count tasks
slug: /commands/count-tasks
displayed_sidebar: docs
---

<!--REF #_command_.Count tasks.Syntax-->**Count tasks**  : Integer<!-- END REF-->
<!--REF #_command_.Count tasks.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número total de procesos abiertos (incluyendo procesos kernel) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Count tasks.Summary-->**Count tasks** devuelve el número de procesos vivos más alto en un equipo 4D remoto, 4D 4D Server (procedimientos almacenados) o en una versión monousuario de 4D.<!-- END REF--> Los procesos se numeran en el orden en que se crean. Cuando aún no se ha interrumpido ningún proceso durante la sesión, este comando devuelve el número total de procesos abiertos.

Este número tiene en cuenta todos los procesos, incluso aquellos administrados automáticamente por 4D. Esto incluye el proceso principal, la gestión de la caché, el proceso de diseño, la gestión de índices o el proceso del servidor Web.

#### Ejemplo 

Ver el ejemplo para [Process state](process-state.md "Process state") y [On Exit Database Method](metodo-base-on-exit.md "On Exit Database Method").

#### Ver también 

[Count user processes](count-user-processes.md)  
[Count users](count-users.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 335 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


