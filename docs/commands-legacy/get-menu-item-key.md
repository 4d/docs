---
id: get-menu-item-key
title: Get menu item key
slug: /commands/get-menu-item-key
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item key.Syntax-->**Get menu item key** ( *menu* ; *menuItem* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item key.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for the last item added |
| process | Integer | &#8594;  | Process reference number |
| Function result | Integer | &#8592; | Character code of standard shortcut key associated with the menu item |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item key.Summary-->The **Get menu item key** command returns the code of the **Ctrl** (Windows) or **Command** (Macintosh) shortcut for the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If you omit the *process* parameter, **Get menu item key** applies to the menu bar for the current process. Otherwise, **Get menu item key** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

If the menu item has no associated shortcut or if the *menuItem* parameter designates a hierarchical submenu, **Get menu item key** returns *0* (zero).

#### Example 

To obtain the shortcut associated with a menu item, it is useful to implement a programming structure of the following type:

```4d
 If(Get menu item key(mymenu;1)#0)
    $modifiers:=Get menu item modifiers(mymenu;1)
    Case of
       :($modifiers=Option key mask)
          ...
       :($modifiers=Shift key mask)
          ...
       :($modifiers=Option key mask+Shift key mask)
          ...
    End case
 End if
```

#### See also 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 424 |
| Thread safe | &check; |
| Forbidden on the server ||


