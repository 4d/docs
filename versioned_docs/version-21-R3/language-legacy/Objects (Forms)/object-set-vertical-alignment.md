---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( * ; *object* : Text ; *alignment* : Integer )<br/>**OBJECT SET VERTICAL ALIGNMENT** ( *object* : Variable, Field ; *alignment* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| alignment | Integer | &#8594;  | Alignment code |
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

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->The **OBJECT SET VERTICAL ALIGNMENT** command modifies the type of vertical alignment applied to the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In *alignment*, you pass one of the following constants found in the *Form Objects (Properties)* theme: 

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Align bottom  | Integer | 4     |
| Align center  | Integer | 3     |
| Align default | Integer | 1     |
| Align top     | Integer | 2     |

Vertical alignment can be applied to the following form objects:

* list boxes,
* list box columns,
* list box headers and footers.

## See also 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET HORIZONTAL ALIGNMENT](../commands/object-set-horizontal-alignment)  

## Properties

|  |  |
| --- | --- |
| Command number | 1187 |
| Thread safe | no |


