---
id: get-menu-title
title: Get menu title
slug: /commands/get-menu-title
displayed_sidebar: docs
---

<!--REF #_command_.Get menu title.Syntax-->**Get menu title** ( *menu* {; *process*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Get menu title.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Longint, MenuRef | &#x1F852; | Menu number or Menu reference |
| process | Longint | &#x1F852; | Process reference number |
| Function result | String | &#x1F850; | Title of the menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu title.Summary-->The **Get menu title** command returns the title of the menu whose number or reference is passed in *menu.<!-- END REF-->*

If you omit the *process* parameter, **Get menu title** applies to the menu bar for the current process. Otherwise, the command applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

#### See also 

[Count menus](count-menus.md)  