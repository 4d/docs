---
id: listbox-moved-column-number
title: LISTBOX MOVED COLUMN NUMBER
slug: /commands/listbox-moved-column-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Syntax-->**LISTBOX MOVED COLUMN NUMBER** ( * ; *object* : Text ; *oldPosition* : Integer ; *newPosition* : Integer )<br/>**LISTBOX MOVED COLUMN NUMBER** ( *object* : Variable ; *oldPosition* : Integer ; *newPosition* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| oldPosition | Integer | &#8592; | Previous position of the moved column |
| newPosition | Integer | &#8592; | New position of the moved column |
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

<!--REF #_command_.LISTBOX MOVED COLUMN NUMBER.Summary-->The **LISTBOX MOVED COLUMN NUMBER** command returns two numbers in *oldPosition* and *newPosition* indicating respectively the previous position and the new position of the column moved in the list box, specified by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

This command must be used with the form event On Column Moved (see the [Form event code](../commands/form-event-code) command). 

**Note:** This command takes invisible columns into account.

## See also 

[Form event code](../commands/form-event-code)  
[LISTBOX MOVED ROW NUMBER](../commands/listbox-moved-row-number)  

## Properties

|  |  |
| --- | --- |
| Command number | 844 |
| Thread safe | no |



