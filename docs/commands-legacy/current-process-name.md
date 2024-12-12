---
id: current-process-name
title: Current process name
slug: /commands/current-process-name
displayed_sidebar: docs
---

<!--REF #_command_.Current process name.Syntax-->**Current process name**  : Text<!-- END REF-->
<!--REF #_command_.Current process name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Name of current process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current process name.Summary-->The **Current process name** command returns the name of the process within which this command is called.<!-- END REF-->

This command is particularly useful in the context of worker processes (see the *About workers* section). It can be used to identify the worker process to call when writing generic code. 

#### Example 

You want to call a worker and pass the calling process name as parameter:

```4d
 CALL WORKER(1;"myMessage";Current process name;"Start:"+String(vMax))
```

#### See also 

*About workers*  
[CALL WORKER](call-worker.md)  
[KILL WORKER](kill-worker.md)  