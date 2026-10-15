---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* : Integer, Text ; *menuItem* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuItem | Integer | &#8594;  | Number of menu item or -1 for the last item added to the menu |
| Function result | Text | &#8592; | Custom parameter of the menu item |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL Release 4|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get menu item parameter.Summary-->The **Get menu item parameter** command returns the custom character string associated with the menu item designated by the *menu* and *menuItem* parameters.<!-- END REF--> This string must have been set beforehand using the [SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter) command.

## See also 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Properties

|  |  |
| --- | --- |
| Command number | 1003 |
| Thread safe | no |


