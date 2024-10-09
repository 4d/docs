---
id: set-menu-item-style
title: SET MENU ITEM STYLE
slug: /commands/set-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM STYLE.Syntax-->**SET MENU ITEM STYLE** ( *menu* ; *menuItem* ; *itemStyle* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM STYLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &srarr; | Menu number or Menu reference |
| menuItem | Integer | &srarr; | Menu item number or -1 for last item added |
| itemStyle | Integer | &srarr; | New menu item style |
| process | Integer | &srarr; | Process reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM STYLE.Summary-->The **SET MENU ITEM STYLE** command changes the font style of the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem* according to the font style passed in *itemStyle*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If you omit the *process* parameter, **SET MENU ITEM STYLE** applies to the menu bar for the current process. Otherwise, **SET MENU ITEM STYLE** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

You specify the font style of the item in the *itemStyle* parameter. You pass a combination (one or a sum) of the following predefined constants, found in the *Font Styles* theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Longint | 1     |
| Italic    | Longint | 2     |
| Plain     | Longint | 0     |
| Underline | Longint | 4     |

  

#### See also 

[Get menu item style](get-menu-item-style.md)  