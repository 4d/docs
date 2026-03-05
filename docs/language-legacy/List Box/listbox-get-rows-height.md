---
id: listbox-get-rows-height
title: LISTBOX Get rows height
slug: /commands/listbox-get-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get rows height.Syntax-->**LISTBOX Get rows height** ( * ; *object* : Text {; *unit* : Integer} ) : Integer<br/>**LISTBOX Get rows height** ( *object* : Variable {; *unit* : Integer} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get rows height.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| unit | Integer | &#8594;  | Unit of height value: 0 or omitted = pixels, 1 = lines |
| Function result | Integer | &#8592; | Row height |
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

<!--REF #_command_.LISTBOX Get rows height.Summary-->The **LISTBOX Get rows height** command returns the current row height for the list box object set using the *object* and *\** parameters.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

By default, if you omit the *unit* parameter, the row height returned is expressed in pixels. To set another unit, in the *unit* parameter you can pass one of the following constants, found in the *List Box* theme:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Integer | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Integer | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about calculating the height of rows, refer to the *Design Reference* manual.

## See also 

[LISTBOX Get auto row height](../commands/listbox-get-auto-row-height)  
[LISTBOX Get row height](../commands/listbox-get-row-height)  
[LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height)  

## Properties

|  |  |
| --- | --- |
| Command number | 836 |
| Thread safe | no |


