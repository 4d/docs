---
id: get-menu-item-method
title: Get menu item method
slug: /commands/get-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item method.Syntax-->**Get menu item method** ( *menu* ; *menuItem* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item method.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| process | Integer | &#8594;  | Process number |
| Function result | Text | &#8592; | Method name |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item method.Summary-->The Get menu item method command returns the name of the 4D project method associated with the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->

You can pass -1 in *menuItem* in order to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. If you pass a menu reference, the *process* parameter is unnecessary and will be ignored if it is passed. If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional *process* parameter.

The command returns the name of the 4D method as a character string (expression). If no method is associated with a menu item, the command returns an empty string.

#### See also 

[SET MENU ITEM METHOD](set-menu-item-method.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 981 |
| Thread safe | &cross; |


