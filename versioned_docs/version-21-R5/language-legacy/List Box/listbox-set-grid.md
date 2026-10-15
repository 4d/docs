---
id: listbox-set-grid
title: LISTBOX SET GRID
slug: /commands/listbox-set-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET GRID.Syntax-->**LISTBOX SET GRID** ( * ; *object* : Text ; *horizontal* : Boolean ; *vertical* : Boolean )<br/>**LISTBOX SET GRID** ( *object* : Variable ; *horizontal* : Boolean ; *vertical* : Boolean )<!-- END REF-->
<!--REF #_command_.LISTBOX SET GRID.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| horizontal | Boolean | &#8594;  | True = show, False = hide |
| vertical | Boolean | &#8594;  | True = show, False = hide |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Renamed|
|12|Renamed|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX SET GRID.Summary-->The **LISTBOX SET GRID** command allows you to display or hide the horizontal and/or vertical grid lines that make up the grid in the list box object set using the *object* and *\** parameters.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Pass the Boolean values in *horizontal* and *vertical* that indicate if the corresponding grid lines should be displayed (**True**) or hidden (**False**). The grid is displayed by default. 

## See also 

[LISTBOX GET GRID](../commands/listbox-get-grid)  
[LISTBOX Get property](../commands/listbox-get-property)  
[LISTBOX SET GRID COLOR](../commands/listbox-set-grid-color)  

## Properties

|  |  |
| --- | --- |
| Command number | 841 |
| Thread safe | no |



