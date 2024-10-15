---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* {; *process*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &rarr; | Menu number or Menu reference |
| process | Integer | &rarr; | Process reference number |
| Function result | Longint | &larr; | Number of menu items in the menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count menu items.Summary-->The **Count menu items** command returns the number of menu items present in the menu whose number or reference is passed in *menu.<!-- END REF-->*

If you omit the *process* parameter, **Count menu items** applies to the menu bar for the current process. Otherwise, **Count menu items** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") parameter in *menu*, the *process* parameter serves no purpose and will be ignored.

#### See also 

[Count menus](count-menus.md)  