---
id: get-menu-item
title: Get menu item
slug: /commands/get-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item.Syntax-->**Get menu item** ( *menu* : Integer, Text ; *menuItem* : Integer {; *process* : Integer} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for last item added |
| process | Integer | &#8594;  | Process reference number |
| Function result | Text | &#8592; | Text of the menu item |
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

<!--REF #_command_.Get menu item.Summary-->The **Get menu item** command returns the text of the menu item whose menu and item numbers are passed in *menu* and *menuItem*.<!-- END REF--> You can pass -1 in *menuItem* in order to indicate the last item added to *menu*.

If you omit the *process* parameter, **Get menu item** applies to the menu bar for the current process. Otherwise, **Get menu item** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

## See also 

[Get menu item key](../commands/get-menu-item-key)  
[SET MENU ITEM](../commands/set-menu-item)  

## Properties

|  |  |
| --- | --- |
| Command number | 422 |
| Thread safe | no |
| Forbidden on the server ||


