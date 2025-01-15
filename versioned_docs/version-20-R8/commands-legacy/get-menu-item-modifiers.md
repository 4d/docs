---
id: get-menu-item-modifiers
title: Get menu item modifiers
slug: /commands/get-menu-item-modifiers
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item modifiers.Syntax-->**Get menu item modifiers** ( *menu* ; *menuItem* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item modifiers.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| process | Integer | &#8594;  | Process number |
| Function result | Integer | &#8592; | Modification key(s) associated with menu item |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item modifiers.Summary-->The **Get menu item modifiers** command returns any additional modifier(s) associated with the standard shortcut of the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF-->

The standard shortcut is composed of the Command (Mac OS) or Ctrl (Windows) key plus a custom key. The standard shortcut is managed using the [SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md) and [Get menu item key](get-menu-item-key.md) commands.

The additional modifiers are the Shift key and the Option (Mac OS) /Alt (Windows) key. These modifiers can only be used when a standard shortcut has been specified beforehand.

The number value returned by the command corresponds to the codeof the additional modifier key(s). The key codes are as follows:

* **Shift**\= 512
* **Option** (Mac OS) or **Alt** (Windows) = 2048  
If both keys are used, their values are combined.

**Note:** You can evaluate the value returned using the Shift key mask and Option key mask constants of the “*Events (Modifiers)*” theme.

If the menu item does not have an associated modifier key, the command returns 0.

You can pass -1 in *menuItem* in order to specify the last item added to *menu*.

In *menu*, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) or a menu number. 

If you pass a menu reference, the *process* parameter serves no purpose and will be ignored if it is passed. 

If you pass a menu number, the command will take the corresponding menu in the main menu bar of the current process into account. If you want to designate another process, pass its number in the optional *process* parameter.

#### Example 

Refer to the example of the [Get menu item key](get-menu-item-key.md) command. 

#### See also 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 980 |
| Thread safe | &cross; |


