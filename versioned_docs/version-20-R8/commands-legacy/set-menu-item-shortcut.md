---
id: set-menu-item-shortcut
title: SET MENU ITEM SHORTCUT
slug: /commands/set-menu-item-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM SHORTCUT.Syntax-->**SET MENU ITEM SHORTCUT** ( *menu* ; *menuItem* ; *itemKey* ; *modifiers* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM SHORTCUT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for last item added |
| itemKey | Text, Integer | &#8594;  | Letter of keyboard shortcut or Character code of keyboard shortcut (former syntax) |
| modifiers | Integer | &#8594;  | Modifier(s) to associate with shortcut  (ignored if Character code is passed in itemKey) |
| process | Integer | &#8594;  | Process reference number |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM SHORTCUT.Summary-->The **SET MENU ITEM SHORTCUT** command assigns a new shortcut to a menu item.<!-- END REF--> 

The menu item is defined through the *menu* and *menuItem* parameters. You can pass -1 in *menuItem* to target the last item added to the *menu*. 

In *itemKey*, pass a string that indicates the shortcut key. The new shortcut will automatically include the **Ctrl** (Windows) or **Cmd** (macOS) modifier by default. For example, passing "U" in *itemKey* sets the shortcut to **Ctrl + U** (Windows) or **Cmd + U** (macOS).

**Note:** You can designate an F-key by passing "\[Fx\]" to *itemKey*, for example "\[F4\]". In this case, no modifier is added by default.

In *modifiers*, you can pass additional modifiers to the shortcut, such as the **Shift** key. This way, you can define shortcuts like **Ctrl+Alt+Shift+Z** (Windows) or **Cmd+Option+Shift+Z** (macOS). Pass 0 if you don't want to add any modifiers. The following constants are available:

* `Command key mask` for the **Command** (macOS) or **Ctrl** (Windows) key
* `Shift key mask` for the **Shift** key
* `Option key mask` for the **Option** (macOS) or **Alt** (Windows) key

To set a shortcut with several modifiers, just combine the above constants.

If you omit the *process* parameter, **SET MENU ITEM SHORTCUT** applies to the menu bar for the current process. Otherwise, the command applies to the menu bar for the process whose reference number is passed in *process*.

**Note:** If you pass a Menu reference (16-character alphanumeric) in *menu*, the *process* parameter serves no purpose and will be ignored.

##### Compatibility 

For compatibility reasons, the command also accepts a character code in the *itemKey* parameter (former syntax). In this case, the shortcut automatically includes the **Ctrl** (Windows) or **Cmd** (macOS) key and the *modifiers* parameter is not taken into account. 

If you pass 0 (zero) in *itemKey*, any shortcut is removed from the menu item.

#### Example 1 

Definition of the Ctrl+Shift+U (Windows) and Cmd+Shift+U (Mac OS) shortcut for the “Underline” menu item:

```4d
 SET MENU ITEM(menuRef;1;"Underline")
 SET MENU ITEM SHORTCUT(menuRef;1;"U";Shift key mask)
```

#### Example 2 

Definition of the Ctrl+R (Windows) and Cmd+R (Mac OS) shortcut for the "Restart" menu item:

```4d
 INSERT MENU ITEM(FileMenu;-1;"Restart")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"R";Command key mask)
```

#### Example 3 

Definition of the F4 shortcut for the "Close" menu item:

```4d
 INSERT MENU ITEM(FileMenu;-1;"Close")
 SET MENU ITEM SHORTCUT(FileMenu;-1;"[F4]";0)
```

#### See also 

[Get menu item key](get-menu-item-key.md)  
[Get menu item modifiers](get-menu-item-modifiers.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 423 |
| Thread safe | &cross; |
| Forbidden on the server ||


