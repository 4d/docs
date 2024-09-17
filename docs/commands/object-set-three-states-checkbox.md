---
id: object-set-three-states-checkbox
title: OBJECT SET THREE STATES CHECKBOX
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Syntax-->**OBJECT SET THREE STATES CHECKBOX** ( {* ;} *object* ; *threeStates* )<!-- END REF-->
<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | -> | Object name (if * is specified) or
Field or variable (if * is omitted) |
| threeStates | Boolean | -> | True = three-states checkbox, False = standard checkbox |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Summary-->The **OBJECT SET THREE STATES CHECKBOX** command modifies, for the current process, the "Three-States" property of the checkbox(es) designated by the *object* and *\** parameters.<!-- END REF--> 

The "Three-states" option allows the additional "semi-checked" state to be used for checkboxes. For more information, refer to [Three-States check box](/4Dv20R6/4D/20-R6/Check-Boxes.300-7003318.en.html#382725) in the *Design Reference* manual. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

This command only applies to checkboxes associated with variables, and not to Boolean fields that are represented as checkboxes. 

In the *threeStates* parameter, pass **True** to enable the "three states" mode, or **False** to disable it. 

#### See also 

[OBJECT Get three states checkbox](object-get-three-states-checkbox.md)  