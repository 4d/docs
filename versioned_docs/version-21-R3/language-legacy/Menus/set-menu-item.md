---
id: set-menu-item
title: SET MENU ITEM
slug: /commands/set-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM.Syntax-->**SET MENU ITEM** ( *menu* : Integer, Text ; *menuItem* : Integer ; *itemText* : Text {; *process* : Integer}{; *} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| menuItem | Integer | &#8594;  | Menu item number or -1 for the last item added |
| itemText | Text | &#8594;  | New text for the menu item |
| process | Integer | &#8594;  | Process reference number |
| * | Operator | &#8594;  | If passed: consider metacharacters as standard characters |
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

<!--REF #_command_.SET MENU ITEM.Summary-->The SET MENU ITEM command changes the text of the menu item whose menu number or reference is passed in *menu* and whose item number is passed in *menuItem*, to the text passed in *itemText*.<!-- END REF--> You can pass -1 in *menuItem* in order to designate the last item added to the *menu*.

If you do not pass the *\** parameter, any "special" characters included in *itemText* (such as ( ; or !) will be considered as instruction characters (metacharacters). For example, to set a menu item as a separator line, you insert the “-” character into *itemText*. If you pass the *\** parameter, the "special" characters will be considered as standard characters. Please refer to the description of the [APPEND MENU ITEM](../commands/append-menu-item) command for more details about these characters. 

If you omit the *process* parameter, SET MENU ITEM applies to the menu bar for the current process. Otherwise, SET MENU ITEM applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

## See also 

[APPEND MENU ITEM](../commands/append-menu-item)  
[Get menu item](../commands/get-menu-item)  
[SET MENU ITEM SHORTCUT](../commands/set-menu-item-shortcut)  

## Properties

|  |  |
| --- | --- |
| Command number | 348 |
| Thread safe | no |
| Forbidden on the server ||


