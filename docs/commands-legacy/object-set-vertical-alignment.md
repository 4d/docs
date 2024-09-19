---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands-legacy/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( {* ;} *object* ; *alignment* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)If omitted, object is a variable |
| object | Form object | &#x1F852; | Object Name (if * is specified) or Variable (if * is omitted) |
| alignment | Longint | &#x1F852; | Alignment code |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->The **OBJECT SET VERTICAL ALIGNMENT** command modifies the type of vertical alignment applied to the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In *alignment*, you pass one of the following constants found in the *Form Objects (Properties)* theme: 

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Align bottom  | Longint | 4     |
| Align center  | Longint | 3     |
| Align default | Longint | 1     |
| Align top     | Longint | 2     |

Vertical alignment can be applied to the following form objects:

* list boxes,
* list box columns,
* list box headers and footers.

#### See also 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  