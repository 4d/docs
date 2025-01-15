---
id: get-menu-item-mark
title: Get menu item mark
slug: /commands/get-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item mark.Syntax-->**Get menu item mark** ( *menu* ; *menuItem* {; *process*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item mark.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for last item added |
| process | Integer | &#8594;  | Process reference number |
| Function result | Text | &#8592; | Current menu item mark |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item mark.Summary-->The **Get menu item mark** command returns the check mark of the menu item whose number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If you omit the *process* parameter, **Get menu item mark** applies to the menu bar for the current process. Otherwise, **Get menu item mark** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

If the menu item has no mark or if the *menuItem* parameter specifies a hierarchical submenu, **Get menu item mark** returns an empty string.

**Note:** See discussion of check marks on Macintosh and Windows in the description of the [SET MENU ITEM MARK](set-menu-item-mark.md) command.

#### Example 

The following example toggles the check mark of a menu item:

```4d
 SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))
```

#### See also 

[SET MENU ITEM MARK](set-menu-item-mark.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 428 |
| Thread safe | &cross; |
| Forbidden on the server ||


