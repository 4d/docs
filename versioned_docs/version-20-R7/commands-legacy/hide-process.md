---
id: hide-process
title: HIDE PROCESS
slug: /commands/hide-process
displayed_sidebar: docs
---

<!--REF #_command_.HIDE PROCESS.Syntax-->**HIDE PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.HIDE PROCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number or process to be hidden |

<!-- END REF-->

#### Description 

<!--REF #_command_.HIDE PROCESS.Summary-->**HIDE PROCESS** hides all windows that belong to *process*.<!-- END REF--> All interface elements of *process* are hidden until the next [SHOW PROCESS](show-process.md). The menu bar of the process is also hidden. This means that opening a window while the process is hidden does not make the screen redraw or display. If the process is already hidden, the command has no effect.

The only exception to this rule is the Debugger window. If the Debugger window is displayed when *process* is a hidden process, *process* is displayed and becomes the frontmost process.

If you do not want a *process* to be displayed when it is created, **HIDE PROCESS** should be the first command in the process method. The Main Process and Cache Manager processes cannot be hidden using this command.

Even though a process may be hidden, the process is still executing.

#### Example 

The following example hides all the windows belonging to the current process:

```4d
 HIDE PROCESS(Current process)
```

#### See also 

[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 324 |
| Thread safe | &cross; |


