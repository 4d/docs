---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *process* )} : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Process reference number |
| Function result | Integer | &#8592; | Number of menus in the current menu bar |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count menus.Summary-->The **Count menus** command returns the number of menus present in the menu bar.<!-- END REF-->

If you omit the *process* parameter, **Count menus** applies to the menu bar for the current process. Otherwise, **Count menus** applies to the menu bar for the process whose reference number is passed in *process*. 

#### See also 

[Count menu items](count-menu-items.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 404 |
| Thread safe | &cross; |
| Forbidden on the server ||


