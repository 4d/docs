---
id: create-menu
title: Create menu
slug: /commands/create-menu
displayed_sidebar: docs
---

<!--REF #_command_.Create menu.Syntax-->**Create menu** ({ *menu* : Text, Integer }) : Text<!-- END REF-->
<!--REF #_command_.Create menu.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Text, Integer | &#8594;  | Menu reference or Number or Name of menu bar |
| Function result | Text | &#8592; | Menu reference |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.Create menu.Summary-->The **Create menu** command creates a new menu in memory.<!-- END REF--> This menu will only exist in memory and will not be added in the Menu editor in Design mode. Any changes made to this menu during the session will be immediately carried over to all the instances of this menu and in all the processes of the database.

The command returns an ID of the [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") type for the new menu.

* If you do not pass the optional *menu* parameter, the menu is created blank. You must build and manage it using the [RELEASE MENU](../commands/release-menu), [SET MENU ITEM](../commands/set-menu-item), etc. commands.
* If you pass the *menu* parameter, the menu created will be an exact copy of the source menu designated by this parameter. All the properties of the source menu, including any associated submenus, will be applied to the new menu. Note that a new [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") reference is created for the source menu and for any existing submenus that are associated with it.

In the *menu* parameter, you can pass either a valid menu reference, or the number or name of a menu bar defined in Design mode. In this last case, the new menu will be made up of the menus and submenus of the source menu bar. 

**Note:** If you pass an invalid value in *menu*, a blank menu is created.

A menu created by this command can be used as the menu bar using the [SET MENU BAR](../commands/set-menu-bar) command.

When you no longer need the menu created by [Create menu](../commands/create-menu), remember to call the [RELEASE MENU](../commands/release-menu) command in order to free up the memory being used. 

## Example 

Refer to the example of the [SET MENU BAR](../commands/set-menu-bar) command.

## See also 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[RELEASE MENU](../commands/release-menu)  
[SET MENU BAR](../commands/set-menu-bar)  

## Properties

|  |  |
| --- | --- |
| Command number | 408 |
| Thread safe | no |


