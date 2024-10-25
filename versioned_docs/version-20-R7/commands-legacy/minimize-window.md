---
id: minimize-window
title: MINIMIZE WINDOW
slug: /commands/minimize-window
displayed_sidebar: docs
---

<!--REF #_command_.MINIMIZE WINDOW.Syntax-->**MINIMIZE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.MINIMIZE WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number or if omitted, all the current process frontmost windows (Windows) or current process frontmost window (Mac OS) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.MINIMIZE WINDOW.Summary-->The MINIMIZE WINDOW command sets the size of the window whose number is passed as *window* to the size it was before being maximized.<!-- END REF--> If *window* is omitted, the command applies to each window of the application (Windows) or to the frontmost window of the process (on Mac OS).

This command has the same effect as one click on the reduction box of the 4D application: 

##### On Windows 

The size of the window is set to its initial size, i.e., its size before being maximized. If the *window* parameter is omitted, all the application windows are set to their initial sizes.

![](../assets/en/commands/pict39369.en.png)  
Reduction box on Windows

##### On Mac OS 

The size of the window is set to its initial size (i.e. its size before being maximized). If the window parameter is omitted, the frontmost window of the current process is set to its initial size. 

![](../assets/en/commands/pict39370.en.png)  
Reduction/zoom box on Mac OS

If the windows to which the command is applied were not previously maximized (manually or using [MAXIMIZE WINDOW](maximize-window.md)), or if the window type does not include a zoom box, the command has no effect. For more information on window types, refer to the *Window Types (compatibility)* section. 

**Note:** This function is not to be confused with minimizing a window to a button (Windows) or in the Dock (Mac OS), which is triggered by a click on the button shown:

![](../assets/en/commands/pict39371.en.png)  
Windows

![](../assets/en/commands/pict39372.en.png)  
Mac OS

#### See also 

[MAXIMIZE WINDOW](maximize-window.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  