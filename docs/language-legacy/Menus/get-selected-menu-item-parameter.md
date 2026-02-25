---
id: get-selected-menu-item-parameter
title: Get selected menu item parameter
slug: /commands/get-selected-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get selected menu item parameter.Syntax-->**Get selected menu item parameter**  : Text<!-- END REF-->
<!--REF #_command_.Get selected menu item parameter.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
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

<!--REF #_command_.Get selected menu item parameter.Summary-->The **Get selected menu item parameter** command returns the custom character string associated with the selected menu item.<!-- END REF--> This parameter must have been set beforehand using the [SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter) command.

If no menu item has been selected, the command returns an empty string "".

## See also 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get menu item parameter](../commands/get-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Properties

|  |  |
| --- | --- |
| Command number | 1005 |
| Thread safe | no |


