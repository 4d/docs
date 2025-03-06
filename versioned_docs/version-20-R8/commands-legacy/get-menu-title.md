---
id: get-menu-title
title: Get menu title
slug: /commands/get-menu-title
displayed_sidebar: docs
---

<!--REF #_command_.Get menu title.Syntax-->**Get menu title** ( *menu* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu title.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| process | Integer | &#8594;  | Process reference number |
| Function result | Text | &#8592; | Title of the menu |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu title.Summary-->The **Get menu title** command returns the title of the menu whose number or reference is passed in *menu.<!-- END REF-->*

If you omit the *process* parameter, **Get menu title** applies to the menu bar for the current process. Otherwise, the command applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

#### See also 

[Count menus](count-menus.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 430 |
| Thread safe | &cross; |
| Forbidden on the server ||


