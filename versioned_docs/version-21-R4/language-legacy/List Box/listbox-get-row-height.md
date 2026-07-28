---
id: listbox-get-row-height
title: LISTBOX Get row height
slug: /commands/listbox-get-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row height.Syntax-->**LISTBOX Get row height** ( * ; *object* : Text ; *row* : Integer ) : Integer<br/>**LISTBOX Get row height** ( *object* : Variable ; *row* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row height.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| row | Integer | &#8594;  | List box row whose height you want to get |
| Function result | Integer | &#8592; | Row height |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX Get row height.Summary-->The **LISTBOX Get row height** command returns the current height of the specified *row* in the list box object designated using the *object* and *\** parameters.<!-- END REF--> Row height can be set globally using the Property List or the [LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height) command, or individually by means of the [LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height) command.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section.

If the specified *row* does not exist in the list box, the command returns 0 (zero).

The returned height value is expressed:

* in the current unit defined globally for the list box rows either in the Property list or by a prior call to the [LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height) command when the row height is fixed,
* in pixels when the row height is variable, i.e. set to automatic (see *Automatic Row Height*) or handled by an array.

## See also 

[LISTBOX Get auto row height](../commands/listbox-get-auto-row-height)  
[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## Properties

|  |  |
| --- | --- |
| Command number | 1408 |
| Thread safe | no |


