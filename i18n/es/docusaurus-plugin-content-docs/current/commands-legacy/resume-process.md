---
id: resume-process
title: RESUME PROCESS
slug: /commands/resume-process
displayed_sidebar: docs
---

<!--REF #_command_.RESUME PROCESS.Syntax-->**RESUME PROCESS** ( *proceso* )<!-- END REF-->
<!--REF #_command_.RESUME PROCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RESUME PROCESS.Summary-->RESUME PROCESS reactiva un *proceso* cuya ejecución ha sido retrasada o suspendida.<!-- END REF--> Si *proceso* no está retrasado o suspendido, RESUME PROCESS no hace nada.

Si *proceso* ha sido retrasado anteriormente, consulte los comandos [PAUSE PROCESS](pause-process.md "PAUSE PROCESS") o [DELAY PROCESS](delay-process.md "DELAY PROCESS"). Si *proceso* no existe, el comando no hace nada.

**Nota:** no puede utilizar este comando para asignar un procedimiento almacenado en el equipo servidor de un equipo cliente. (*proceso*<0).

#### Ver también 

[DELAY PROCESS](delay-process.md)  
[PAUSE PROCESS](pause-process.md)  