---
id: listbox-get-column-width
title: LISTBOX Get column width
slug: /commands/listbox-get-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column width.Syntax-->**LISTBOX Get column width** ( * ; *object* : Text {; *minWidth* : Integer {; *maxWidth* : Integer}} )  : Integer<br/>**LISTBOX Get column width** ( *object* : Variable {; *minWidth* : Integer {; *maxWidth* : Integer}} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get column width.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| minWidth | Integer | &#8592; | Minimum column width (in pixels) |
| maxWidth | Integer | &#8592; | Maximum column width (in pixels) |
| Function result | Integer | &#8592; | Column width (in pixels) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Renamed|
|12|Modified|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX Get column width.Summary-->The **LISTBOX Get column width** command returns the width (in pixels) of the column set in the *object* and *\** parameters.<!-- END REF--> You can pass either a list box column or a column header in the *object* parameter. 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

**LISTBOX Get column width** can return the resizing limits of the column in the *minWidth* and *maxWidth* parameters. These limits can be specified via the [LISTBOX SET COLUMN WIDTH](../commands/listbox-set-column-width) command.   
If no minimum and/or maximum value has been set for the column, the corresponding parameter returns 0.

## See also 

[LISTBOX SET COLUMN WIDTH](../commands/listbox-set-column-width)  

## Properties

|  |  |
| --- | --- |
| Command number | 834 |
| Thread safe | no |


