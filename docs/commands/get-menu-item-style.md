---
id: get-menu-item-style
title: Get menu item style
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item style.Syntax-->**Get menu item style** ( *menu* ; *menuItem* {; *process*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Get menu item style.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Longint, MenuRef | -> | Menu number or Menu reference |
| menuItem | Longint | -> | Menu item number or -1 for last item added |
| process | Longint | -> | Process reference number |
| Function result | Longint | <- | Current menu item style |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item style.Summary-->The **Get menu item style** command returns the font style of the menu item whose number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If you omit the *process* parameter, **Get menu item style** applies to the menu bar for the current process. Otherwise, **Get menu item style** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

**Get menu item style** returns a combination (one or a sum) of the following predefined constants, found in the [Font Styles](/4Dv20R6/4D/20-R6/Font-Styles.302-6958451.en.html) theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Longint | 1     |
| Italic    | Longint | 2     |
| Plain     | Longint | 0     |
| Underline | Longint | 4     |

  
#### Example 

To test if a menu item is displayed in bold, you write:

```4d
 If((Get menu item style($vlMenu;$vlItem)&Bold)#0)
  //...
 End if
```

#### See also 

[SET MENU ITEM STYLE](set-menu-item-style.md)  