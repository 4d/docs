---
id: listbox-get-column-formula
title: LISTBOX Get column formula
slug: /commands/listbox-get-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column formula.Syntax-->**LISTBOX Get column formula** ( * ; *object* : Text ) : Text<br/>**LISTBOX Get column formula** ( *object* : Variable ) : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get column formula.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable | &#8594;  | Form object name (if * is specified) or Variable (if * is omitted) |
| Function result | Text | &#8592; | Formula associated with column |
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

<!--REF #_command_.LISTBOX Get column formula.Summary-->The **LISTBOX Get column formula** command returns the formula associated with the list box column designated by the *object* and *\** parameters.<!-- END REF--> Formulas can only be used when the “Data Source” property of the list box is either **Current Selection**, **Named Selection**, or **Collection or Entity Selection**. If no formula is associated with the column, the command returns an empty string. 

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. This parameter must designate a column of the list box.

## See also 

[LISTBOX SET COLUMN FORMULA](../commands/listbox-set-column-formula)  

## Properties

|  |  |
| --- | --- |
| Command number | 1202 |
| Thread safe | no |


