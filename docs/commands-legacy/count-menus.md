---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *process* )} -> Function result<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Longint | &#x1F852; | Process reference number |
| Function result | Longint | &#x1F850; | Number of menus in the current menu bar |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count menus.Summary-->The **Count menus** command returns the number of menus present in the menu bar.<!-- END REF-->

If you omit the *process* parameter, **Count menus** applies to the menu bar for the current process. Otherwise, **Count menus** applies to the menu bar for the process whose reference number is passed in *process*. 

#### See also 

[Count menu items](count-menu-items.md)  