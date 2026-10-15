---
id: listbox-set-static-columns
title: LISTBOX SET STATIC COLUMNS
slug: /commands/listbox-set-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Syntax-->**LISTBOX SET STATIC COLUMNS** ( * ; *object* : Text ; *numColumn* : Integer )<br/>**LISTBOX SET STATIC COLUMNS** ( *object* : Variable ; *numColumn* : Integer )<!-- END REF-->
<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| numColumn | Integer | &#8594;  | Number of columns to make static |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Summary-->The **LISTBOX SET STATIC COLUMNS** command sets *numColumns* columns as static (starting from the first on the left) in the list box designated by the *object* and *\** parameters.<!-- END REF-->

Static columns cannot be moved within the list box.

**Note:** Static columns and locked columns are two independent functions. For more information, refer to the *Design Reference* manual.

## See also 

[LISTBOX Get static columns](../commands/listbox-get-static-columns)  
[LISTBOX SET LOCKED COLUMNS](../commands/listbox-set-locked-columns)  

## Properties

|  |  |
| --- | --- |
| Command number | 1153 |
| Thread safe | no |


