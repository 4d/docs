---
id: get-menu-item-style
title: Get menu item style
slug: /commands/get-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item style.Syntax-->**Get menu item style** ( *menu* ; *menuItem* {; *process*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item style.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for last item added |
| process | Integer | &#8594;  | Process reference number |
| Function result | Integer | &#8592; | Current menu item style |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get menu item style.Summary-->The **Get menu item style** command returns the font style of the menu item whose number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If you omit the *process* parameter, **Get menu item style** applies to the menu bar for the current process. Otherwise, **Get menu item style** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

**Get menu item style** returns a combination (one or a sum) of the following predefined constants, found in the *Font Styles* theme:

| Constant  | Type    | Value |
| --------- | ------- | ----- |
| Bold      | Integer | 1     |
| Italic    | Integer | 2     |
| Plain     | Integer | 0     |
| Underline | Integer | 4     |

  
#### Example 

To test if a menu item is displayed in bold, you write:

```4d
 If((Get menu item style($vlMenu;$vlItem)&Bold)#0)
  //...
 End if
```

#### See also 

[SET MENU ITEM STYLE](set-menu-item-style.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 426 |
| Thread safe | &check; |
| Forbidden on the server ||


