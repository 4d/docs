---
id: object-get-horizontal-alignment
title: OBJECT Get horizontal alignment
slug: /commands/object-get-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get horizontal alignment.Syntax-->**OBJECT Get horizontal alignment** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get horizontal alignment.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an Object name (String) If omitted, object is a field or a variable |
| object | any | &#8594;  | Object name (if * specified), or Field or variable (if * omitted) |
| Function result | Integer | &#8592; | Alignment code |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get horizontal alignment.Summary-->The **OBJECT Get horizontal alignment** command returns a code indicating the type of horizontal alignment applied to the object designated by the *object* and *\** parameters.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in the *object* parameter. If you omit the *\** parameter, you indicate a field or variable in the *object* parameter. In this case, you specify a field or variable reference (field or variable objects only) instead of a string.

**Note:** If you apply the command to a group of objects, only the alignment value of the last object is returned.

The returned code corresponds to one of the following constants located in the *Form Objects (Properties)* theme:   

| Constant      | Type    | Value | Comment                               |
| ------------- | ------- | ----- | ------------------------------------- |
| Align center  | Integer | 3     |                                       |
| Align default | Integer | 1     |                                       |
| Align left    | Integer | 2     |                                       |
| Align right   | Integer | 4     |                                       |
| wk justify    | Integer | 5     | Available for 4D Write Pro areas only |

  
The form objects to which alignment can be applied are as follows:

* Scrollable areas
* Combo boxes
* Buttons
* Radio buttons
* Check boxes
* Static text
* Group areas
* Pop up menu/Drop-down lists
* Fields
* Variables
* List boxes
* List box columns
* List box headers
* List box footers
* *4D Write Pro Reference* areas

#### See also 

[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 707 |
| Thread safe | &check; |
| Forbidden on the server ||


