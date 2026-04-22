---
id: get-menu-items
title: GET MENU ITEMS
slug: /commands/get-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEMS.Syntax-->**GET MENU ITEMS** ( *menu* : Integer, Text ; *menuTitlesArray* : Text array ; *menuRefsArray* : Text array )<!-- END REF-->
<!--REF #_command_.GET MENU ITEMS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu reference or Menu number |
| menuTitlesArray | Text array | &#8592; | Array of menu titles |
| menuRefsArray | Text array | &#8592; | Array of menu references |
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

<!--REF #_command_.GET MENU ITEMS.Summary-->The **GET MENU ITEMS** command returns, in the *menuTitlesArray* and *menuRefsArray* arrays, the titles and IDs of all the items of the menu or menu bar designated by the *menu* parameter.<!-- END REF-->

In the *menu* parameter, you can pass a menu reference ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")), a menu bar number or a menu bar reference obtained using the [Get menu bar reference](../commands/get-menu-bar-reference) command.

If no menu reference is associated with an item, an empty string is returned in the corresponding array element.

## Example 

You want to find out the contents of the menu bar of the current process: 

```4d
 ARRAY TEXT(menuTitlesArray;0)
 ARRAY TEXT(menuRefsArray;0)
 MenuBarRef:=Get menu bar reference(Frontmost process)
 GET MENU ITEMS(MenuBarRef;menuTitlesArray;menuRefsArray)
```


## Properties

|  |  |
| --- | --- |
| Command number | 977 |
| Thread safe | no |


