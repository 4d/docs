---
id: pause-process
title: PAUSE PROCESS
slug: /commands/pause-process
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE PROCESS.Syntax-->**PAUSE PROCESS** ( *proceso* )<!-- END REF-->
<!--REF #_command_.PAUSE PROCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PAUSE PROCESS.Summary-->PAUSE PROCESS suspende la ejecución de *proceso* hasta que es reactivada por el comando [RESUME PROCESS](resume-process.md "RESUME PROCESS").<!-- END REF--> Durante este periodo, *process* no toma tiempo en su equipo. Aunque un proceso esté suspendido, el proceso aún está en memoria. 

Si *process* ya está suspendido, PAUSE PROCESS no hace nada. Si el proceso ha sido retrasado utilizando el comando [DELAY PROCESS](delay-process.md "DELAY PROCESS"), se suspende el proceso. Si recibe la orden [RESUME PROCESS](resume-process.md "RESUME PROCESS") retoma el proceso inmediatamente. 

Cuando se suspende la ejecución de un proceso, las ventanas que pertenecen a este proceso no son editables. En este caso, para evitar confundir al usuario, considere ocultar el proceso. Si *process* no existe, el comando no hace nada.

**Advertencia:** utilice PAUSE PROCESS únicamente con procesos que usted ha creado. PAUSE PROCESS no tiene ningún efecto en el proceso principal.

**Nota:** no puede utilizar este comando para asignar un procedimiento almacenado en el equipo servidor de un equipo cliente. (*proceso*<0).

#### Ver también 

[ABORT PROCESS BY ID](abort-process-by-id.md)  
[DELAY PROCESS](delay-process.md)  
[HIDE PROCESS](hide-process.md)  
[RESUME PROCESS](resume-process.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 319 |
| Hilo seguro | &check; |


