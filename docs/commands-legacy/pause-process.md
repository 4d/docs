---
id: pause-process
title: PAUSE PROCESS
slug: /commands/pause-process
displayed_sidebar: docs
---

<!--REF #_command_.PAUSE PROCESS.Syntax-->**PAUSE PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.PAUSE PROCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number |

<!-- END REF-->

#### Description 

<!--REF #_command_.PAUSE PROCESS.Summary-->**PAUSE PROCESS** suspends the execution of *process* until it is reactivated by the [RESUME PROCESS](resume-process.md) command.<!-- END REF--> During this period, *process* does not take any time on your machine. Even though a process may be paused, the process is still in memory.

If *process* is already paused, **PAUSE PROCESS** does nothing. If the process has been delayed using the [DELAY PROCESS](delay-process.md) command, the process is paused. [RESUME PROCESS](resume-process.md) resumes the process immediately.

While process execution is suspended, the windows belonging to this process are not enterable. In this case, to avoid confusing the user, consider hiding the process. If *process* does not exist, the command does nothing.

**Warning:** Use **PAUSE PROCESS** only in processes that you have started. It will not affect the main process.

**Note:** You cannot use this command to assign a stored procedure on the server machine from a client machine (*process*<0).

#### See also 

[ABORT PROCESS BY ID](abort-process-by-id.md)  
[DELAY PROCESS](delay-process.md)  
[HIDE PROCESS](hide-process.md)  
[RESUME PROCESS](resume-process.md)  