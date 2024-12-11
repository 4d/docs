---
id: kill-worker
title: KILL WORKER
slug: /commands/kill-worker
displayed_sidebar: docs
---

<!--REF #_command_.KILL WORKER.Syntax-->**KILL WORKER** {( *proceso* )}<!-- END REF-->
<!--REF #_command_.KILL WORKER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Text, Integer | &#8594;  | Número o nombre del proceso a matar (proceso actual si se omite) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.KILL WORKER.Summary-->El comando **KILL WORKER** envía un mensaje al proceso worker cuyo nombre o número que pasa en *proceso*, pidiéndole hacer caso omiso de los mensajes pendientes y poner fin a su ejecución tan pronto como termine la tarea actual.<!-- END REF-->

Este comando sólo se puede utilizar con los procesos worker. Para más información, por favor consulte la sección *Sobre workers*.

En *proceso*, se pasa el nombre o el número del proceso worker cuya ejecución debe terminarse. Si no existe ningún worker con el nombre o el número de proceso especificado, **KILL WORKER** no hace nada.  
Si no pasa ningún parámetro, **KILL WORKER** aplica a los procesos worker actualmente en ejecución y por lo tanto es equivalente a **KILL WORKER* (Current process)*.

Si **KILL WORKER** se aplica a un worker que no fue creado explícitamente utilizando el comando [CALL WORKER](call-worker.md) (por ejemplo, el proceso worker principal de la aplicación), sólo pide a este worker vaciar su buzón de mensajes.

Si se llama al comando [CALL WORKER](call-worker.md) para enviar un mensaje a un worker que acaba de ser finalizado por **KILL WORKER**, se inicia un nuevo proceso. Para asegurarse de que solo hay un proceso que se ejecuta a la vez para un worker, el nuevo proceso se iniciará una vez que el anterior haya finalizado. Sin embargo, tenga en cuenta que si [CALL WORKER](call-worker.md) es llamado por un worker para enviarse un mensaje, mientras que acaba de ser eliminado por **KILL WORKER**, el comando no hace nada.

#### Ejemplo 

El siguiente código (ejecutado desde un formulario, por ejemplo) dará lugar a la terminación del worker:

```4d
 CALL WORKER(vWorkerName;"theWorker";"end")
```

En el método (*theWorker*), se añade código para manejar esta situación:

```4d
  //método theWorker
 var $1 : Text //param
 
 Case of
    :($1="call") //se llama al worker
       ... //do something
    :($1="end") //se le pide al worker suicidarse
       KILL WORKER
 End case
```

#### Ver también 

[CALL WORKER](call-worker.md)  
[Current process name](current-process-name.md)  
*Sobre workers*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1390 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


