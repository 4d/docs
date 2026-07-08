---
id: enable-menu-item
title: ENABLE MENU ITEM
slug: /commands/enable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.ENABLE MENU ITEM.Syntax-->**ENABLE MENU ITEM** ( *menu* : Integer, Text ; *menuItem* : Integer {; *process* : Integer} )<!-- END REF-->
<!--REF #_command_.ENABLE MENU ITEM.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for the last item added |
| process | Integer | &#8594;  | Proces reference number |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.ENABLE MENU ITEM.Summary-->The **ENABLE MENU ITEM** command enables the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to designate the last item added to the *menu*.

If the *menuItem* parameter designates a hierarchical submenu, all the items of this menu and any submenus are enabled. This command also works with a menu bar created using the [Create menu](../commands/create-menu) command and installed with the [SET MENU BAR](../commands/set-menu-bar) command.

If you omit the *process* parameter, **ENABLE MENU ITEM** applies to the menu bar for the current process. Otherwise, **ENABLE MENU ITEM** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

**Tip:** To enable/disable all items of a menu at once, pass 0 (zero) in *menuItem*.

## See also 

[DISABLE MENU ITEM](../commands/disable-menu-item)  

## Properties

|  |  |
| --- | --- |
| Command number | 149 |
| Thread safe | no |
| Forbidden on the server ||


