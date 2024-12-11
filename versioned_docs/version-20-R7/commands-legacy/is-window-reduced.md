---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *window* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Window reference number |
| Function result | Boolean | &#8592; | True if the window is reduced in the taskbar or the in dock, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is window reduced.Summary-->The **Is window reduced** command returns **True** if the window whose reference number is passed in *window* is currently reduced in the taskbar (Windows) or in the dock (macOS), and **False** otherwise.<!-- END REF-->

#### See also 

[Is window maximized](is-window-maximized.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1831 |
| Thread safe | &check; |
| Forbidden on the server ||


