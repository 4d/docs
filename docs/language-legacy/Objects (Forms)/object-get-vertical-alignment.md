---
id: object-get-vertical-alignment
title: OBJECT Get vertical alignment
slug: /commands/object-get-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get vertical alignment.Syntax-->**OBJECT Get vertical alignment** ( * ; *object* : Text ) : Integer<br/>**OBJECT Get vertical alignment** ( *object* : Variable, Field ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get vertical alignment.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Integer | &#8592; | Type of alignment |
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

<!--REF #_command_.OBJECT Get vertical alignment.Summary-->The **OBJECT Get vertical alignment** command returns a value indicating the type of vertical alignment applied to the object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

**Note:** If you apply this command to a set of objects, only the alignment value for the last object is returned. 

The value returned corresponds to one of the following constants, found in the *Form Objects (Properties)* theme:

| Constant     | Type    | Value |
| ------------ | ------- | ----- |
| Align bottom | Integer | 4     |
| Align center | Integer | 3     |
| Align top    | Integer | 2     |

Vertical alignment can be applied to the following types of form objects:

* list boxes,
* list box columns,
* list box headers and footers.

## See also 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT SET HORIZONTAL ALIGNMENT](../commands/object-set-horizontal-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)  

## Properties

|  |  |
| --- | --- |
| Command number | 1188 |
| Thread safe | no |


