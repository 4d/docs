---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* : Integer, Text {; *process* : Integer} ) : Integer<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| process | Integer | &#8594;  | Process reference number |
| Function result | Integer | &#8592; | Number of menu items in the menu |
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

<!--REF #_command_.Count menu items.Summary-->The **Count menu items** command returns the number of menu items present in the menu whose number or reference is passed in *menu.<!-- END REF-->*

If you omit the *process* parameter, **Count menu items** applies to the menu bar for the current process. Otherwise, **Count menu items** applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") parameter in *menu*, the *process* parameter serves no purpose and will be ignored.

## See also 

[Count menus](../commands/count-menus)  

## Properties

|  |  |
| --- | --- |
| Command number | 405 |
| Thread safe | no |
| Forbidden on the server ||


