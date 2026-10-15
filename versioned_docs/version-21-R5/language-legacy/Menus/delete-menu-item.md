---
id: delete-menu-item
title: DELETE MENU ITEM
slug: /commands/delete-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DELETE MENU ITEM.Syntax-->**DELETE MENU ITEM** ( *menu* : Integer, Text ; *menuItem* : Integer {; *process* : Integer} )<!-- END REF-->
<!--REF #_command_.DELETE MENU ITEM.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for last item added |
| process | Integer | &#8594;  | Process reference number |
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

<!--REF #_command_.DELETE MENU ITEM.Summary-->The **DELETE MENU ITEM** command deletes the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If the menu item specified by *menu* and *menuItem* is itself a menu managed by reference and created, for example, using the [Create menu](../commands/create-menu) command, **DELETE MENU ITEM** will only delete the instance of the *menuItem* in *menu*. The submenu referenced by the *menuItem* will continue to exist in memory. You must use the [RELEASE MENU](../commands/release-menu) command in order to definitively delete a menu that is managed by reference. 

This command also works with a menu bar created using the [Create menu](../commands/create-menu) command and installed with the [SET MENU BAR](../commands/set-menu-bar) command.

If you omit the *process* parameter, **DELETE MENU ITEM** applies to the menu bar for the current process. Otherwise, **DELETE MENU ITEM** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

**Note:** For consistency in the user interface, do not keep a menu with no items.

## See also 

[APPEND MENU ITEM](../commands/append-menu-item)  
[INSERT MENU ITEM](../commands/insert-menu-item)  

## Properties

|  |  |
| --- | --- |
| Command number | 413 |
| Thread safe | no |
| Forbidden on the server ||


