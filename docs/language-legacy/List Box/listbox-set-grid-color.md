---
id: listbox-set-grid-color
title: LISTBOX SET GRID COLOR
slug: /commands/listbox-set-grid-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID COLOR.Syntax-->**LISTBOX SET GRID COLOR** ( * ; *object* : Text ; *color* : Text, Integer ; *horizontal* : Boolean ; *vertical* : Boolean )<br/>**LISTBOX SET GRID COLOR** ( *object* : Variable ; *color* : Text, Integer ; *horizontal* : Boolean ; *vertical* : Boolean )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID COLOR.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| color | Text, Integer | &#8594;  | RGB color value |
| horizontal | Boolean | &#8594;  | Use color for horizontal grid lines |
| vertical | Boolean | &#8594;  | Use color for vertical grid lines |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Renamed|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX SET GRID COLOR.Summary-->The **LISTBOX SET GRID COLOR** command allows you to modify the color of the grid in the list box object set using the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Pass the RGB color value in *color*. For more information on RGB colors, refer to the description of the [OBJECT SET RGB COLORS](../commands/object-set-rgb-colors) command. 

The *horizontal* and *vertical* parameters allow you to set the grid lines to which you will apply a color:

* If you pass **True** in *horizontal*, the color will be applied to horizontal grid lines. If you pass **False**, their color is not changed.
* If you pass **True** in *vertical*, the color will be applied to vertical grid lines. If you pass **False**, their color is not changed.

## See also 

[LISTBOX GET GRID COLORS](../commands/listbox-get-grid-colors)  
[LISTBOX SET GRID](../commands/listbox-set-grid)  
[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)  

## Properties

|  |  |
| --- | --- |
| Command number | 842 |
| Thread safe | no |


