---
id: menu-bar-screen
title: Menu bar screen
slug: /commands/menu-bar-screen
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar screen.Syntax-->**Menu bar screen**  -> Function result<!-- END REF-->
<!--REF #_command_.Menu bar screen.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Longint | &#8592; | Number of screen where menu bar is located |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Menu bar screen.Summary-->Menu bar screen returns the number of the screen where the menu bar is located.<!-- END REF-->

**Windows note:** On Windows, Menu bar screen always returns 1.

#### See also 

[Count screens](count-screens.md)  
[Menu bar height](menu-bar-height.md)  