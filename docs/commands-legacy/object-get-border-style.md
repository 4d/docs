---
id: object-get-border-style
title: OBJECT Get border style
slug: /commands/object-get-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get border style.Syntax-->**OBJECT Get border style** ( {* ;} *object* ) -> Function result<!-- END REF-->
<!--REF #_command_.OBJECT Get border style.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#x1F852; | If specified, object is an object name (string)<br/>If omitted, object is a field or variable |
| object | Form object | &#x1F852; | Object name (if * is specified) or <br/>Field or variable (if * is omitted) |
| Function result | Longint | &#x1F850; | Border line style |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get border style.Summary-->The **OBJECT Get border style** command returns the border line style of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

You can set the border line style for an object in Design mode using the Property List, or using the [OBJECT SET BORDER STYLE](object-set-border-style.md) command. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The command returns a value corresponding to the border line style. You can compare the value received with the following constants, found in the "*Form Objects (Properties)*" theme:

| Constant      | Type    | Value | Comment                                                                                         |
| ------------- | ------- | ----- | ----------------------------------------------------------------------------------------------- |
| Border Dotted | Longint | 2     | Objects appear framed with a dotted 1-pt. border line                                           |
| Border Double | Longint | 5     | Objects appear framed with a double line, i.e., two continuous 1-pt. lines separated by a pixel |
| Border None   | Longint | 0     | Objects appear with no border                                                                   |
| Border Plain  | Longint | 1     | Objects appear framed with a continuous 1-pt. border line                                       |
| Border Raised | Longint | 3     | Objects appear framed with a 3D effect (raised)                                                 |
| Border Sunken | Longint | 4     | Objects appear framed with a sunken 3D effect                                                   |
| Border System | Longint | 6     | The border line is drawn based on the graphic specifications of the system                      |

#### See also 

[OBJECT SET BORDER STYLE](object-set-border-style.md)  