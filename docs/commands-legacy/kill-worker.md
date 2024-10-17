---
id: kill-worker
title: KILL WORKER
slug: /commands/kill-worker
displayed_sidebar: docs
---

<!--REF #_command_.KILL WORKER.Syntax-->**KILL WORKER** {( *process* )}<!-- END REF-->
<!--REF #_command_.KILL WORKER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Text, Integer | &#8594;  | Number or name of process to kill (kills current process if omitted) |

<!-- END REF-->

#### Description 

<!--REF #_command_.KILL WORKER.Summary-->The **KILL WORKER** command posts a message to the worker process whose name or number you passed in *process*, asking it to ignore any pending messages and to terminate its execution as soon as the current task ends.<!-- END REF-->

This command can only be used with worker processes. For more information, please refer to the *About workers* section. 

In *process*, you pass either the name or number of the worker process whose execution needs to be terminated. If no worker with the specified process name or number exists, **KILL WORKER** does nothing.  
If you do not pass any parameter, **KILL WORKER** applies to the currently running worker and is therefore equivalent to **KILL WORKER* (Current process)*.

If **KILL WORKER** is applied to a worker that was not created explicitly using the [CALL WORKER](call-worker.md) command (for example, the main application worker), it only asks this worker to empty its message box.

If the [CALL WORKER](call-worker.md) command is called to send a message to a worker that was just killed by **KILL WORKER**, a new process is started. To make sure that there is only one process running at a time for a worker, the new process will start after the previous one is actually terminated. Note however that if [CALL WORKER](call-worker.md) is called from a worker to send itself a message whereas it has just been killed by **KILL WORKER**, the command does nothing. 

#### Example 

The following code (executed from a form, for example) triggers the termination of a worker:

```4d
 CALL WORKER(vWorkerName;"theWorker";"end")
```

In the worker method (*theWorker*), you add some code to handle this situation:

```4d
  //theWorker method
 var $1 : Text //param
 
 Case of
    :($1="call") //the worker is called
       ... //do something
    :($1="end") //the worker is asked to kill itself
       KILL WORKER
 End case
```

#### See also 

*About workers*  
[CALL WORKER](call-worker.md)  
[Current process name](current-process-name.md)  