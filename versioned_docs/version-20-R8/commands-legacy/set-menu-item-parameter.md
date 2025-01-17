---
id: set-menu-item-parameter
title: SET MENU ITEM PARAMETER
slug: /commands/set-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PARAMETER.Syntax-->**SET MENU ITEM PARAMETER** ( *menu* ; *menuItem* ; *param* )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PARAMETER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| param | Text | &#8594;  | String to associate as parameter |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM PARAMETER.Summary-->The **SET MENU ITEM PARAMETER** command associates a custom character string with a menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->

This parameter is mainly used by the [Dynamic pop up menu](dynamic-pop-up-menu.md) command.

#### Example 

This code provides a menu including the names of the open windows and lets you get the number of the window chosen:

```4d
 WINDOW LIST($alWindow)
 $tMenuRef:=Create menu
 For($i;1;Size of array($alWindow))
    APPEND MENU ITEM($tMenuRef;Get window title($alWindow{$i})) // Title of menu item
    SET MENU ITEM PARAMETER($tMenuRef;-1;String($alWindow{$i})) // Value returned by menu item
 End for
 $tWindowRef:=Dynamic pop up menu($tMenuRef)
 RELEASE MENU($tMenuRef)
```

#### See also 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get menu item parameter](get-menu-item-parameter.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1004 |
| Thread safe | &cross; |


