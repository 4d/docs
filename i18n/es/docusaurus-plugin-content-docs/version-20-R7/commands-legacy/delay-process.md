---
id: delay-process
title: DELAY PROCESS
slug: /commands/delay-process
displayed_sidebar: docs
---

<!--REF #_command_.DELAY PROCESS.Syntax-->**DELAY PROCESS** ( *proceso* ; *duracion* )<!-- END REF-->
<!--REF #_command_.DELAY PROCESS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso |
| duracion | Real | &#8594;  | Duración expresada en tics |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELAY PROCESS.Summary-->DELAY PROCESS permite retrasar un *proceso* por un número de tics (1 tic = 1/60 de segundo).<!-- END REF--> Durante este periodo, el *process* retrasado no utiliza tiempo de procesamiento. Aunque la ejecución de un proceso puede ser retardada, aún está en memoria.

Puede retrasar un proceso por menos de un tic. Por ejemplo, si pasa 0.5 en duración, el proceso será retrasado por 1/2 tic, es decir 1/120 de segundo.

Si el proceso ya está retrasado, este comando lo retrasa nuevamente. El parámetro *duracion* no se añade al tiempo restante, pero lo reemplaza. Por lo tanto pase cero (0) en *duracion* si no quiere retrasar el proceso.

Si el proceso no existe, el comando no hace nada.

**Nota:** no puede utilizar este comando para asignar un procedimiento almacenado en el equipo servidor de un equipo cliente (*process*<0).

#### Ejemplo 1 

Ver los ejemplos en *Record Locking*.

#### Ejemplo 2 

Ver el ejemplo del comando [Process Number](process-number.md "Process Number").

#### Ver también 

[HIDE PROCESS](hide-process.md)  
[PAUSE PROCESS](pause-process.md)  