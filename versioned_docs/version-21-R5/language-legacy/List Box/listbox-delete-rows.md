---
id: listbox-delete-rows
title: LISTBOX DELETE ROWS
slug: /commands/listbox-delete-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX DELETE ROWS.Syntax-->**LISTBOX DELETE ROWS** ( * ; *object* : Text ; *rowPosition* : Integer {; *numRows* : Integer} )<br/>**LISTBOX DELETE ROWS** ( *object* : Variable ; *rowPosition* : Integer {; *numRows* : Integer} )<!-- END REF-->
<!--REF #_command_.LISTBOX DELETE ROWS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| rowPosition | Integer | &#8594;  | Position of the row to delete |
| numRows | Integer | &#8594;  | Number of rows to delete |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Renamed|
|13|Modified|
|12|Renamed|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX DELETE ROWS.Summary-->The **LISTBOX DELETE ROWS** command deletes one or several row(s) starting at *rowPosition* row (visible or not) from the list box set in the *object* and *\** parameters.<!-- END REF-->

**Note:** This command only works with list boxes based on arrays. When this command is used with a list box based on a selection, it does nothing and the OK system variable is set to 0.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

Keep in mind that after command execution, there will no longer be any element selected in the list box.

The *rowPosition* row is automatically removed from all the arrays used by the list box columns. 

If the *rowPosition* value is higher than the total number of rows in the list box, or if it is less than 1, the command does nothing. 

**Note:** This command does not take into account any hidden/displayed states of list box rows. 

## See also 

[LISTBOX Get number of rows](../commands/listbox-get-number-of-rows)  
[LISTBOX INSERT ROWS](../commands/listbox-insert-rows)  

## Properties

|  |  |
| --- | --- |
| Command number | 914 |
| Thread safe | no |
| Modifies variables | OK |


