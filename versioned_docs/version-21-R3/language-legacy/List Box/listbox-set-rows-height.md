---
id: listbox-set-rows-height
title: LISTBOX SET ROWS HEIGHT
slug: /commands/listbox-set-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Syntax-->**LISTBOX SET ROWS HEIGHT** ( * ; *object* : Text ; *height* : Integer {; *unit* : Integer} )<br/>**LISTBOX SET ROWS HEIGHT** ( *object* : Variable ; *height* : Integer {; *unit* : Integer} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| height | Integer | &#8594;  | Row height (in pixels) |
| unit | Integer | &#8594;  | Unit of height value:0 or omitted = pixels, 1 = lines |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Modified|
|12|Renamed|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX SET ROWS HEIGHT.Summary-->The **LISTBOX SET ROWS HEIGHT** command allows you to modify by programming the row height in the list box object set using the *object* and *\** parameters.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

By default, if you omit the *unit* parameter, the height is expressed in pixels. To modify the unit, in the *unit* parameter you can pass one of the following constants, found in the *List Box* theme:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Integer | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Integer | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about calculating the height of rows, refer to the *Design Reference* manual.

## See also 

[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET AUTO ROW HEIGHT](../commands/listbox-set-auto-row-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## Properties

|  |  |
| --- | --- |
| Command number | 835 |
| Thread safe | no |


