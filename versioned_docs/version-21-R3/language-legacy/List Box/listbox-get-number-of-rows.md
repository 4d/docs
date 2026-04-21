---
id: listbox-get-number-of-rows
title: LISTBOX Get number of rows
slug: /commands/listbox-get-number-of-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get number of rows.Syntax-->**LISTBOX Get number of rows** ( * ; *object* : Text ) : Integer<br/>**LISTBOX Get number of rows** ( *object* : Variable ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get number of rows.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| Function result | Integer | &#8592; | Number of rows |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Renamed|
|11 SQL Release 2|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX Get number of rows.Summary-->The **LISTBOX Get number of rows** command returns the number of rows in the list box set in the *object* and *\** parameters.<!-- END REF-->

**Note:** This command does not take the hidden/displayed state of the rows into account. For example, in a list box with 10 rows where the first 9 rows are hidden, **LISTBOX Get number of rows** will return 10.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

**Note:** If the arrays associated with the columns of a List box do not all have the same size, only the number of items corresponding to the smallest array will appear in the list box and thus be returned by this command. 

## See also 

[LISTBOX DELETE ROWS](../commands/listbox-delete-rows)  
[LISTBOX INSERT ROWS](../commands/listbox-insert-rows)  

## Properties

|  |  |
| --- | --- |
| Command number | 915 |
| Thread safe | no |


