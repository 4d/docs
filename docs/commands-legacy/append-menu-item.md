---
id: append-menu-item
title: APPEND MENU ITEM
slug: /commands/append-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.APPEND MENU ITEM.Syntax-->**APPEND MENU ITEM** ( *menu* ; *itemText* {; *subMenu* {; *process* {; *}}} )<!-- END REF-->
<!--REF #_command_.APPEND MENU ITEM.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Menu number or Menu reference |
| itemText | Text | &#8594;  | Text for the new menu items |
| subMenu | Text | &#8594;  | Reference of submenu associated with item |
| process | Integer | &#8594;  | Process reference number |
| * | Operator | &#8594;  | If passed: consider metacharacters as standard characters |

<!-- END REF-->

#### Description 

<!--REF #_command_.APPEND MENU ITEM.Summary-->The **APPEND MENU ITEM** command appends new menu items to the menu whose number or reference is passed in *menu*.<!-- END REF-->

If you omit the *process* parameter, **APPEND MENU ITEM** applies to the menu bar for the current process. Otherwise, **APPEND MENU ITEM** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purporse and will be ignored.

If you do not pass the *\** parameter, **APPEND MENU ITEM** allows you to append one or several menu items in one call.

You define the items to be appended with the parameter *itemText* as follows:

* Separate each item from the next one with a semi-colon (*;*). For example,  
*"ItemText1;ItemText2;ItemText3".*
* To disable an item: Place an opening parenthesis (*(*) in the item text.
* To specify a separation line: Pass "-" or "(-" as item text.
* To specify a font style for a line: In the item text, place a less than sign (*<*) followed by one of these characters:
  
| <B | Bold      |  
| -- | --------- |  
| <I | Italic    |  
| <U | Underline |
* To add a check mark to an item: In the item text, place an exclamation mark (*!*) followed by the character you want as a check mark. On Macintosh, the character is displayed; on Windows, a check mark is displayed no matter what character you passed.
* To add an icon to an item: In the item text, place a circumflex accent (^) followed by a character whose code plus 208 is the resource ID of a Mac OS-based icon resource.
* To add a shortcut to an item: In the item text, place a slash (*/*) followed by the shortcut character for the item.
* (**Starting with 4D v16 R3**) If the item is associated with a standard action, pass the ak standard action title constant in *itemText* to automatically use the localized action name and context information (if any), for example "Undo <previous action>".

**Note:** Use menus that have a reasonable number of items. For example, if you want to display more than 50 items, consider using a scrollable area in a form instead of a menu.

If you pass the *\** parameter, the "special" characters (*; ( !*...) included in the item text will be considered as standard characters and not as metacharacters. This means that you can create menu items like "**Copy (special)...**" or "**Find/Replace...**". Note that when the *\** parameter is passed, you cannot create several items in a single call since the ";" character is considered as a standard character. 

**Note:** The [GET MENU ITEMS](get-menu-items.md) and [Get menu item](get-menu-item.md) commands will or will not return any metacharacters in the text of a menu item depending on how it was created: if it was created with the *\** option, metacharacters will be returned as standard characters.

The optional *subMenu* parameter can be used to indicate a menu as the added item and thus position a hierarchical submenu. You must pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu") type string) specifying a menu created, for example, using the [Create menu](create-menu.md) command. If the command adds more than one menu item, the submenu is associated with the first item.

**Important:** The new items do not have any associated methods or actions. These must be associated with the items using the [SET MENU ITEM PROPERTY](set-menu-item-property.md) or [SET MENU ITEM METHOD](set-menu-item-method.md) commands, or the items can also be managed from within a form method using the [Menu selected](menu-selected.md) command.

#### Example 

This example appends the names of the available fonts to the Font menu, which in this example is the sixth menu of the current menu bar:

```4d
  // In the On Startup database method
  // The font list is loaded and menu item text is built
 FONT LIST(◊asAvailableFont)
 ◊atFontMenuItems:=""
 For($vlFont;1;Size of array(◊asAvailableFont))
    ◊atFontMenuItems:=◊atFontMenuItems+";"+◊asAvailableFont{$vlFont}
 End for
```

Then, in any form or project method, you can write:

```4d
 APPEND MENU ITEM(6;◊atFontMenuItems)
```

#### See also 

[DELETE MENU ITEM](delete-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 411 |
| Thread safe | &check; |
| Forbidden on the server ||


