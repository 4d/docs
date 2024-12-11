---
id: set-menu-item-mark
title: SET MENU ITEM MARK
slug: /commands/set-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM MARK.Syntax-->**SET MENU ITEM MARK** ( *menu* ; *menuItem* ; *mark* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM MARK.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Item number or -1 for last item added |
| mark | Text | &#8594;  | New menu item mark |
| process | Integer | &#8594;  | Process reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM MARK.Summary-->The **SET MENU ITEM MARK** command changes the check mark of the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem* to the first character of the string passed in *mark*.<!-- END REF--> You can pass -1 in *menuItem* in order to designate the last item added to the *menu*.

If you omit the *process* parameter, **SET MENU ITEM MARK** applies to the menu bar for the current process. Otherwise, the command applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

If you pass an empty string, any mark is removed from the menu item. Otherwise:

* On Macintosh, the first character of the string becomes the mark of the menu item. Usually, you will pass [Char](char.md)**(18)**, which is the check mark character for Macintosh menus.
* On Windows, the menu item is assigned the standard check mark.

#### Example 

See example for the [Get menu item mark](get-menu-item-mark.md) command.

#### See also 

[Get menu item mark](get-menu-item-mark.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 208 |
| Thread safe | &check; |
| Forbidden on the server ||


