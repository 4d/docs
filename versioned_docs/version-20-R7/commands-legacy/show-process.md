---
id: show-process
title: SHOW PROCESS
slug: /commands/show-process
displayed_sidebar: docs
---

<!--REF #_command_.SHOW PROCESS.Syntax-->**SHOW PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.SHOW PROCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number of process to be shown |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SHOW PROCESS.Summary-->**SHOW PROCESS** displays all the windows belonging to *process*.<!-- END REF--> This command does not bring the windows of *process* to the frontmost level. To do this, use the [BRING TO FRONT](bring-to-front.md) command.

If the process was already displayed, the command has no effect.

#### Example 

The following example displays a process called Customers, if it has been previously hidden. The process reference to the Customers process is stored in the interprocess variable *◊Customers*:

```4d
 SHOW PROCESS(◊Customers)
```

#### See also 

[BRING TO FRONT](bring-to-front.md)  
[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  