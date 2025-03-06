---
id: bring-to-front
title: BRING TO FRONT
slug: /commands/bring-to-front
displayed_sidebar: docs
---

<!--REF #_command_.BRING TO FRONT.Syntax-->**BRING TO FRONT** ( *process* )<!-- END REF-->
<!--REF #_command_.BRING TO FRONT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process number of the process to pass to the frontmost level |

<!-- END REF-->

#### Description 

<!--REF #_command_.BRING TO FRONT.Summary-->**BRING TO FRONT** brings all the windows belonging to *process* to the front.<!-- END REF--> If the process is already the frontmost process, the command does nothing. If the process is hidden, you must use [SHOW PROCESS](show-process.md) to display the process, otherwise **BRING TO FRONT** has no effect.

The Main and Design processes can be brought to the front using this command.

**Note:** When the process contains several windows and you want to pass a specific one to the front, it is preferable to use, for example, the [SET WINDOW RECT](set-window-rect.md) command. 

#### Example 

The following example is a method that can be executed from a menu. It checks to see if *◊vlAddCust\_PID* is the frontmost process. If not, the method brings it to the front:

```4d
 If(Frontmost process#◊vlAddCust_PID)
    BRING TO FRONT(◊vlAddCust_PID)
 End if
```

#### See also 

[HIDE PROCESS](hide-process.md)  
[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 326 |
| Thread safe | &cross; |


