---
id: menu-selected
title: Menu selected
slug: /commands/menu-selected
displayed_sidebar: docs
---

<!--REF #_command_.Menu selected.Syntax-->**Menu selected** {( *subMenu* )} : Integer<!-- END REF-->
<!--REF #_command_.Menu selected.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| subMenu | Text | &#8592; | Reference of menu containing item selected |
| Function result | Integer | &#8592; | Menu command selected Menu number in high word Menu item number in low word |

<!-- END REF-->

#### Description 

<!--REF #_command_.Menu selected.Summary-->**Menu selected** is used only when forms are displayed.<!-- END REF--> It detects which menu command has been chosen from a menu and, in the case of a hierarchical submenu, returns the reference of the submenu.

**Tip:** Whenever possible, use methods associated with menu commands in an associated menu bar (with a negative menu bar number) instead of using **Menu selected**. Associated menu bars are easier to manage, since it is not necessary to test for their selection.

The **Menu selected** command can be used to work with hierarchical submenus. When selecting a hierarchical menu item beyond the first level, the command returns, in the optional *subMenu* parameter, the reference (MenuRef type, 16-character string) of the submenu to which the selected item belongs. If the menu command does not contain a hierarchical submenu, this parameter receives an empy string.  
  
**Menu selected** returns the menu-selected number, a long integer. To find the menu number, divide **Menu selected** by 65,536 and convert the result to an integer. To find the menu command number, calculate the modulo of **Menu selected** with the modulus 65,536\. Use the following formulas to calculate the menu number and menu command number:

```4d
 Menu:=Menu selected\ 65536
 menu command:=Menu selected% 65536
```

You can also extract these values using the *bitwise operators* as follows:

```4d
 Menu:=(Menu selected & 0xFFFF0000)>>16
 menu command:=Menu selected & 0xFFFF
```

If no menu commands are selected, **Menu selected** returns 0.

#### Example 

The following form method uses **Menu selected** to supply the menu and menu item arguments to [SET MENU ITEM MARK](set-menu-item-mark.md):

```4d
 Case of
    :(FORM Event=On Menu Selected)
       C_STRING(16;$refMenuIncludingItem)
       var $ref;$MenuNum;$MenuItemNum : Integer
       $ref:=Menu selected($refMenuIncludingItem)
       $MenuNum:=$ref\65536
       $MenuItemNum:=$ref%65536
       SET MENU ITEM MARK($refMenuIncludingItem;$MenuItemNum;Char(18))
 End case
```

**Note:** The On Menu Selected form event is not activated if no item is selected, *$refMenuIncludingItem* is always given a value and *$MenuNum* equals 0 if the menu is not one of the menus of the menu bar.

#### See also 

*Managing Menus*  

#### Properties
|  |  |
| --- | --- |
| Command number | 152 |
| Thread safe | &check; |
| Forbidden on the server ||


