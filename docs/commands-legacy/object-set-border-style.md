---
id: object-set-border-style
title: OBJECT SET BORDER STYLE
slug: /commands/object-set-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET BORDER STYLE.Syntax-->**OBJECT SET BORDER STYLE** ( {* ;} *object* ; *borderStyle* )<!-- END REF-->
<!--REF #_command_.OBJECT SET BORDER STYLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Field or variable (if * is omitted) |
| borderStyle | Integer | &#8594;  | Border line style |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET BORDER STYLE.Summary-->The **OBJECT SET BORDER STYLE** command modifies the border line style of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

The "Border Line Style" property modifies the appearance of the object outlines. For more information, refer to *Border Line Style* in the *Design Reference* manual. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *borderStyle* parameter, pass the value of the border line style that you want to apply to the object. You can pass one of the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant      | Type    | Value | Comment                                                                                         |
| ------------- | ------- | ----- | ----------------------------------------------------------------------------------------------- |
| Border Dotted | Integer | 2     | Objects appear framed with a dotted 1-pt. border line                                           |
| Border Double | Integer | 5     | Objects appear framed with a double line, i.e., two continuous 1-pt. lines separated by a pixel |
| Border None   | Integer | 0     | Objects appear with no border                                                                   |
| Border Plain  | Integer | 1     | Objects appear framed with a continuous 1-pt. border line                                       |
| Border Raised | Integer | 3     | Objects appear framed with a 3D effect (raised)                                                 |
| Border Sunken | Integer | 4     | Objects appear framed with a sunken 3D effect                                                   |
| Border System | Integer | 6     | The border line is drawn based on the graphic specifications of the system                      |

#### See also 

[OBJECT Get border style](object-get-border-style.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1262 |
| Thread safe | &check; |
| Forbidden on the server ||


