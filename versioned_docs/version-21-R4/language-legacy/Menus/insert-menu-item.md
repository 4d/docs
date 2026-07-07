---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* : Integer, Text ; *afterItem* : Integer ; *itemText* : Text {; *subMenu* : Text {; *process* : Integer}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Menu number or Menu reference |
| afterItem | Integer | &#8594;  | Menu item number |
| itemText | Text | &#8594;  | Text for the menu item to be inserted |
| subMenu | Text | &#8594;  | Reference of submenu associated with item |
| process | Integer | &#8594;  | Process reference number |
| * | Operator | &#8594;  | If passed: consider metacharacters as standard characters |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R3|Modified|
|11 SQL Release 4|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.INSERT MENU ITEM.Summary-->The **INSERT MENU ITEM** command inserts new menu items into the menu whose number or reference is passed in *menu* after the existing menu item whose number is passed in *afterItem*.<!-- END REF-->

If you omit the *process* parameter, **INSERT MENU ITEM** applies to the menu bar for the current process. Otherwise, the command applies to the menu bar for the process whose reference number is passed in *process*. 

**Note:** If you pass a [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") in *menu*, the *process* parameter serves no purpose and will be ignored.

If you do not pass the *\** parameter, **INSERT MENU ITEM** allows to you insert one or several menu items in one call.

**INSERT MENU ITEM** works like [APPEND MENU ITEM](../commands/append-menu-item), except that it enables you to insert items anywhere in the menu, while [APPEND MENU ITEM](../commands/append-menu-item) always adds them at the end of the menu.

See the description of the [APPEND MENU ITEM](../commands/append-menu-item) command for details about the item definition passed in *itemText* and about the action of the *\** parameter.

**Note:** The ak standard action title constant is supported in the *itemText* parameter (4D v16 R3 and higher).

The optional *subMenu* parameter can be used to indicate a menu as the added item and thus position a hierarchical submenu. You must pass a menu reference (MenuRef type string) specifying a menu created, for example, using the [Create menu](../commands/create-menu) command. If the command adds more than one menu item, the submenu is associated with the first item.

**Important:** The new items do not have any associated methods or actions. These must be associated with the items using the [SET MENU ITEM PROPERTY](../commands/set-menu-item-property) or [SET MENU ITEM METHOD](../commands/set-menu-item-method) commands, or the items can also be managed from within a form method using the [Menu selected](../commands/menu-selected) command.

## Example 

The following example creates a menu consisting of two commands to which it assigns a method:

```4d
 menuRef:=Create menu
 APPEND MENU ITEM(menuRef;"Characters")
 SET MENU ITEM METHOD(menuRef;1;"CharMgmtDial")
 INSERT MENU ITEM(menuRef;1;"Paragraphs")
 SET MENU ITEM METHOD(menuRef;2;"ParaMgmtDial")
```

## See also 

[APPEND MENU ITEM](../commands/append-menu-item)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Properties

|  |  |
| --- | --- |
| Command number | 412 |
| Thread safe | no |
| Forbidden on the server ||


