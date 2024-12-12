---
id: set-menu-item-method
title: SET MENU ITEM METHOD
slug: /commands/set-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM METHOD.Syntax-->**SET MENU ITEM METHOD** ( *menu* ; *menuItem* ; *methodName* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM METHOD.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| methodName | Text | &#8594;  | Method name |
| process | Integer | &#8594;  | Process number |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET MENU ITEM METHOD.Summary-->The **SET MENU ITEM METHOD** command modifies the 4D project method associated with the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->

You can pass -1 in *menuItem* in order to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. If you pass a menu reference, the command will apply to all the instances of the menu in all the processes. In this case, the *process* parameter is ignored if it is passed. If you pass a menu number, the command will be applied to the corresponding menu in the main menu bar of the current process. If you want to designate another process, pass its number in the optional *process* parameter.

In *method*, pass the name of the 4D method as a character string (expression).

**Note:** If the menu item corresponds to the title of a hierarchical sub-menu, the method will not be called when the menu item is selected.

#### Example 

Refer to the example of the [SET MENU BAR](set-menu-bar.md) command. 

#### See also 

[Get menu item method](get-menu-item-method.md)  