---
id: disable-menu-item
title: DISABLE MENU ITEM
slug: /commands/disable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DISABLE MENU ITEM.Syntax-->**DISABLE MENU ITEM** ( *menu* ; *menuItem* {; *process*} )<!-- END REF-->
<!--REF #_command_.DISABLE MENU ITEM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for the last item added |
| process | Integer | &#8594;  | Proces reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISABLE MENU ITEM.Summary-->The DISABLE MENU ITEM command disables the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF-->You can pass -1 in *menuItem* in order to designate the last item added to the *menu*.

If you omit the *process* parameter, DISABLE MENU ITEM applies to the menu bar for the current process. Otherwise, DISABLE MENU ITEM applies to the menu bar for the process whose reference number is passed in *process*. 

If the *menuItem* parameter designates a hierarchical submenu, all the items of this menu and any submenus are disabled. This command also works with a menu bar created using the [Create menu](create-menu.md) command and installed with the [SET MENU BAR](set-menu-bar.md) command.

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

**Tip:** To enable/disable all items of a menu at once, pass 0 (zero) in *menuItem*.

#### See also 

[ENABLE MENU ITEM](enable-menu-item.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 150 |
| Thread safe | &cross; |
| Forbidden on the server ||


