---
id: count-tasks
title: Count tasks
slug: /commands/count-tasks
displayed_sidebar: docs
---

<!--REF #_command_.Count tasks.Syntax-->**Count tasks**  : Integer<!-- END REF-->
<!--REF #_command_.Count tasks.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Number of open processes (including kernel processes) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count tasks.Summary-->**Count tasks** returns the highest alive process number in the 4D single-user, 4D remote, or 4D Server (stored procedures) version.<!-- END REF--> Processes are numbered in the order in which they are created. When still no process has been aborted during the session, then this command returns the total number of open processes. 

This number takes into account all processes, even those that are automatically managed by 4D. These include the Main process, Design process, Cache Manager process, Indexing process, and Web Server process.

#### Example 

See the example for [Process state](process-state.md) and for the [Semaphore](semaphore.md).

#### See also 

[Count user processes](count-user-processes.md)  
[Count users](count-users.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 335 |
| Thread safe | &check; |
| Forbidden on the server ||


