---
id: create-menu
title: Create menu
slug: /commands/create-menu
displayed_sidebar: docs
---

<!--REF #_command_.Create menu.Syntax-->**Create menu** {( *menu* )} : MenuRef<!-- END REF-->
<!--REF #_command_.Create menu.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text, Integer, Text | &#8594;  | Menu reference or Number or Name of menu bar |
| Function result | MenuRef | &#8592; | Menu reference |

<!-- END REF-->

#### Description 

<!--REF #_command_.Create menu.Summary-->The **Create menu** command creates a new menu in memory.<!-- END REF--> This menu will only exist in memory and will not be added in the Menu editor in Design mode. Any changes made to this menu during the session will be immediately carried over to all the instances of this menu and in all the processes of the database.

The command returns an ID of the [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") type for the new menu.

* If you do not pass the optional *menu* parameter, the menu is created blank. You must build and manage it using the [RELEASE MENU](release-menu.md), [SET MENU ITEM](set-menu-item.md), etc. commands.
* If you pass the *menu* parameter, the menu created will be an exact copy of the source menu designated by this parameter. All the properties of the source menu, including any associated submenus, will be applied to the new menu. Note that a new [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") reference is created for the source menu and for any existing submenus that are associated with it.

In the *menu* parameter, you can pass either a valid menu reference, or the number or name of a menu bar defined in Design mode. In this last case, the new menu will be made up of the menus and submenus of the source menu bar. 

**Note:** If you pass an invalid value in *menu*, a blank menu is created.

A menu created by this command can be used as the menu bar using the [SET MENU BAR](set-menu-bar.md) command.

When you no longer need the menu created by [Create menu](create-menu.md), remember to call the [RELEASE MENU](release-menu.md) command in order to free up the memory being used. 

#### Example 

Refer to the example of the [SET MENU BAR](set-menu-bar.md) command.

#### See also 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[SET MENU BAR](set-menu-bar.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 408 |
| Thread safe | &check; |
| Forbidden on the server ||


