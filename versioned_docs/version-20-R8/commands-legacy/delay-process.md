---
id: delay-process
title: DELAY PROCESS
slug: /commands/delay-process
displayed_sidebar: docs
---

<!--REF #_command_.DELAY PROCESS.Syntax-->**DELAY PROCESS** ( *process* ; *duration* )<!-- END REF-->
<!--REF #_command_.DELAY PROCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number |
| duration | Real | &#8594;  | Duration expressed in ticks |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELAY PROCESS.Summary-->DELAY PROCESS delays the execution of a *process* for a number of ticks (1 tick = 1/60th of a second).<!-- END REF--> During this period, *process* does not take any processing time. Even though the execution of a process may be delayed, it is still in memory.

You can delay a process for less than one tick. For example, if you pass 0.5 in *duration*, the process will be delayed for a 1/2 tick, i.e. 1/120th of a second.

If the process is already delayed, this command delays it again. The *duration* parameter is not added to the time remaining, but replaces it. Therefore pass zero (0) for *duration* if you no longer want to delay a process.

If the process does not exist, the command does nothing.

**Note:** You cannot use this command to assign a stored procedure on the server machine from a client machine (*process*<0).

#### Example 1 

See example in *Record Locking*.

#### Example 2 

See example for the command [Process number](../commands/process-number.md).

#### See also 

[HIDE PROCESS](hide-process.md)  
[PAUSE PROCESS](pause-process.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 323 |
| Thread safe | &check; |


