---
id: count-user-processes
title: Count user processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  -> Function result<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Longint | <- | Number of live processes (excluding internal processes) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count user processes.Summary-->Count user processes returns the current number of "live" processes in the 4D application whose type is different from -25 (Internal Timer Process), -31 (Client Manager Process) and -15 (Server Interface Process).<!-- END REF--> For more information about process types, please refer to the [PROCESS PROPERTIES](process-properties.md) command and to the [Process Type](/4Dv20R6/4D/20-R6/Process-Type.302-6958444.en.html) constants theme. 

The Count user processes function returns the number of processes opened directly or indirectly by the user (processes for which the *origin* parameter returned by the [PROCESS PROPERTIES](process-properties.md) command is greater than or equal to 0). 

**Note:** The "live" processes are processes whose status is neither *aborted*, nor *does not exist* (see the [Process state](process-state.md) command). 

#### See also 
[Count tasks](count-tasks.md)  
[Count users](count-users.md)  