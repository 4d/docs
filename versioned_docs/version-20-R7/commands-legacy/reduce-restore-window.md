---
id: reduce-restore-window
title: REDUCE RESTORE WINDOW
slug: /commands/reduce-restore-window
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE RESTORE WINDOW.Syntax-->**REDUCE RESTORE WINDOW** ( *window* )<!-- END REF-->
<!--REF #_command_.REDUCE RESTORE WINDOW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.REDUCE RESTORE WINDOW.Summary-->The **REDUCE RESTORE WINDOW** command reduces/expands the window whose reference number was passed in *window* to/from the taskbar on Windows or the dock on macOS.<!-- END REF--> 

The command toggles the window state:

* If the window was displayed, the command reduces the window to the taskbar or dock.
* If the window was reduced, the command restores the window to its previous state.

**Note:** On macOS, the command is asynchronous.

#### See also 

[Is window reduced](is-window-reduced.md)  
[MAXIMIZE WINDOW](maximize-window.md)  
[MINIMIZE WINDOW](minimize-window.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1829 |
| Thread safe | &check; |
| Forbidden on the server ||


