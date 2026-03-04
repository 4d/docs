---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( * ; *object* : Text ) : Boolean<br/>**OBJECT Get three states checkbox** ( *object* : Variable, Field ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Boolean | &#8592; | True = three-states checkbox, False = standard checkbox |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->The **OBJECT Get three states checkbox** command returns the current state of the "Three-States" property for the checkbox(es) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the "Three-States" property either using the Property List, or using the [OBJECT SET THREE STATES CHECKBOX](../commands/object-set-three-states-checkbox) command if it was called in the current process.

## See also 

[OBJECT SET THREE STATES CHECKBOX](../commands/object-set-three-states-checkbox)  

## Properties

|  |  |
| --- | --- |
| Command number | 1250 |
| Thread safe | no |


