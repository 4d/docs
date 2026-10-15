---
id: listbox-moved-row-number
title: LISTBOX MOVED ROW NUMBER
slug: /commands/listbox-moved-row-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Syntax-->**LISTBOX MOVED ROW NUMBER** ( * ; *object* : Text ; *oldPosition* : Integer ; *newPosition* : Integer )<br/>**LISTBOX MOVED ROW NUMBER** ( *object* : Variable ; *oldPosition* : Integer ; *newPosition* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| oldPosition | Integer | &#8592; | Previous position of the moved row |
| newPosition | Integer | &#8592; | New position of the moved row |
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

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Summary-->The **LISTBOX MOVED ROW NUMBER** command returns two numbers in *oldPosition* and *newPosition* indicating respectively the previous position and the new position of the row moved in the list box, specified by the *object* and *\** parameters.<!-- END REF-->

**Note:** You can only move rows in array type list boxes.

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

This command must be used with the form event On Row Moved (see the [Form event code](../commands/form-event-code) command). 

**Note:** This command does not take into account any hidden/displayed states of list box rows. 

## See also 

[Form event code](../commands/form-event-code)  
[LISTBOX MOVED COLUMN NUMBER](../commands/listbox-moved-column-number)  

## Properties

|  |  |
| --- | --- |
| Command number | 837 |
| Thread safe | no |



