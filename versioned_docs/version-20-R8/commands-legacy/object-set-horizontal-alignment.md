---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( {* ;} *object* ; *alignment* )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an Object name (String) If omitted, object is a field or a variable |
| object | any | &#8594;  | Object name (if * specified), or Field or variable (if * omitted) |
| alignment | Integer | &#8594;  | Alignment code |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->The **OBJECT SET HORIZONTAL ALIGNMENT** command allows you to set the type of horizontal alignment applied to the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in the *object* parameter. If you omit the *\** parameter, you indicate a field or variable in the *object* parameter. In this case, you specify a field or variable reference (field or variable objects only) instead of a string.

Pass one of the constants of the *Form Objects (Properties)* theme in the *alignment* parameter:  

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

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 706 |
| Thread safe | &cross; |


