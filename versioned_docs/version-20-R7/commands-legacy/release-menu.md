---
id: release-menu
title: RELEASE MENU
slug: /commands/release-menu
displayed_sidebar: docs
---

<!--REF #_command_.RELEASE MENU.Syntax-->**RELEASE MENU** ( *menu* )<!-- END REF-->
<!--REF #_command_.RELEASE MENU.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | Menu reference |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.RELEASE MENU.Summary-->The **RELEASE MENU** command removes the menu whose ID is passed in *menu* from memory.<!-- END REF--> This menu must have been created by the menu [Create menu](create-menu.md) command. The following rule applies: for each [Create menu](create-menu.md) there must be a corresponding [RELEASE MENU](release-menu.md).

The command removes every instance of the *menu* menu from every menu bar and every process. If the menu belongs to a menu bar which is in use, it will continue to work but can no longer be modified. It will only be truly removed from the memory when the last menu bar where it appears is no longer in use.

This command can be used with menus that are used as menu bars.

Any sub-menus used by *menu* are not removed if they were created directly using the [Create menu](create-menu.md) command. In this case, you must remove them individually (see the rule mentioned above). However, if the submenus come from the duplication of an existing menu, do not call [RELEASE MENU](release-menu.md) with them because 4D will erase them automatically.

#### Example 

This example shows different ways to use this command:

```4d
 newMenu:=Create menu
 APPEND MENU ITEM(newMenu;"Test1")
 subMenu:=Create menu
 APPEND MENU ITEM(subMenu;"SubTest1")
 APPEND MENU ITEM(subMenu;"SubTest2") // Creation of items in submenu
 
 APPEND MENU ITEM(newMenu;"Test2";subMenu) // Attaching submenu to menu
 
  //At this point, the submenu is attached to the menu and if we will not need it later on, this is right place to remove it.
  //Removing it does not immediately delete subMenu since it is still used by newMenu. subMenu is only deleted when newMenu is.
  //Removing the submenu here lets you save memory
 RELEASE MENU(subMenu)
 
 $result1:=Dynamic pop up menu(newMenu) //Use of menu
 copyMenu:=Create menu(newMenu) // Creation of menu by copying newMenu (and thus copying subMenu as well)
 RELEASE MENU(newMenu) // We no longer need newMenu.
 
 $result2:=Dynamic pop up menu(copyMenu)
 RELEASE MENU(copyMenu)
  //You don't need to worry about deleting the submenus of copyMenu since it was not created directly using Create menu
  //The rule to follow is: each Create menu must have a corresponding RELEASE MENU
```

#### See also 

[Create menu](create-menu.md)  