---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( {* ;} *object* ; *foregroundColor* {; *backgroundColor* {; *altBackgrndColor*}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | any | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| foregroundColor | Text, Integer | &#8592; | RGB color value for foreground |
| backgroundColor | Text, Integer | &#8592; | RGB color value for background |
| altBackgrndColor | Text, Integer | &#8592; | RGB color value for alternating background |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->The OBJECT GET RGB COLORS command returns the foreground and background colors of the object or group of objects designated by *object*.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

When the command is applied to a list box type object, the alternating background color for the rows can be returned in the *altBackgrndColor* parameter. In this case, the value of *backgroundColor* is used for the background of odd-numbered rows only. 

The RGB color values returned in the *foregroundColor*, *backgroundColor*, and *altBackgrndColor* parameters depend on the parameter type: 

* if a parameter of [text](# "A character string that may contain from 0 to 2 GB of text") type is passed, the color is returned in CSS format with "#rrggbb" syntax (ex: "#0000FF")
* if a parameter of [longint](# "Number between -2^31..(2^31)-1 (4-byte Integer)") type is passed, the color can be 4-byte Long Integer of the format (0x00RRGGBB) or negative values corresponding to the "system" colors.

For more information about the format of the *foregroundColor*, *backgroundColor*, and *altBackgrndColor* parameters, refer to the description of the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command.

#### See also 

[OBJECT SET RGB COLORS](object-set-rgb-colors.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1074 |
| Thread safe | &check; |
| Forbidden on the server ||


