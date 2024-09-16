---
id: object-set-border-style
title: OBJECT SET BORDER STYLE
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET BORDER STYLE.Syntax-->**OBJECT SET BORDER STYLE** ( {* ;} *object* ; *borderStyle* )<!-- END REF-->
<!--REF #_command_.OBJECT SET BORDER STYLE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)
If omitted, object is a field or variable |
| object | Form object | -> | Object name (if * is specified) or
Field or variable (if * is omitted) |
| borderStyle | Longint | -> | Border line style |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET BORDER STYLE.Summary-->The **OBJECT SET BORDER STYLE** command modifies the border line style of the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

The "Border Line Style" property modifies the appearance of the object outlines. For more information, refer to [Border Line Style](/4Dv20R6/4D/20-R6/Setting-object-display-properties.300-7003258.en.html#945967) in the *Design Reference* manual. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

In the *borderStyle* parameter, pass the value of the border line style that you want to apply to the object. You can pass one of the following constants, found in the "[Form Objects (Properties)](/4Dv20R6/4D/20-R6/Form-Objects-Properties.302-6958435.en.html)" theme:

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
[OBJECT Get border style](object-get-border-style.md)  