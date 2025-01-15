---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| Function result | Boolean | &#8592; | True = three-states checkbox, False = standard checkbox |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->The **OBJECT Get three states checkbox** command returns the current state of the "Three-States" property for the checkbox(es) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the "Three-States" property either using the Property List, or using the [OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md) command if it was called in the current process.

#### See also 

[OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1250 |
| Thread safe | &cross; |


