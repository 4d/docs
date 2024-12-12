---
id: get-menu-bar-reference
title: Get menu bar reference
slug: /commands/get-menu-bar-reference
displayed_sidebar: docs
---

<!--REF #_command_.Get menu bar reference.Syntax-->**Get menu bar reference** {( *process* )} : MenuRef<!-- END REF-->
<!--REF #_command_.Get menu bar reference.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Reference number of process |
| Function result | MenuRef | &#8592; | Menu bar ID |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Get menu bar reference.Summary-->The **Get menu bar reference** command returns the ID of the current menu bar or the menu bar of a specific process.<!-- END REF-->

If the menu bar was created by the [Create menu](create-menu.md) command, this ID corresponds to the reference ID of the menu created. Otherwise, the command returns a specific internal ID(\*). In all cases, this [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") ID may be used to reference the menu bar by all the other commands of the theme.

(\*)This specific ID is temporary and becomes invalid as soon as another menu bar is called with [SET MENU BAR](set-menu-bar.md). If you want to keep the reference of a menu created in the menu editor, you need to copy it in memory using [Create menu](create-menu.md). For example:  

```4d
 $vEditorRef:=Get menu bar reference(Frontmost process) //menu from the menu bar editor
 $vMenuRef:=Create menu($vEditorRef) //copy the menu in memory
 SET MENU BAR(2) //install another menu bar
 ... // execute code
 SET MENU BAR($vMenuRef) //back to the initial menu bar
```

The *process* parameter can be used to designate the process where you want to get the current menu bar ID. If you omit this parameter, the command returns the menu bar ID of the current process.

#### Example 

Refer to the example of the [GET MENU ITEMS](get-menu-items.md) command.

#### See also 

[SET MENU BAR](set-menu-bar.md)  