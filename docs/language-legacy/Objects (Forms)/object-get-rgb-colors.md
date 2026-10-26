---
id: object-get-rgb-colors
title: OBJECT GET RGB COLORS
slug: /commands/object-get-rgb-colors
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RGB COLORS.Syntax-->**OBJECT GET RGB COLORS** ( * ; *object* : Text ; *foregroundColor* : Text, Integer {; *backgroundColor* : Text, Integer {; *altBackgrndColor* : Text, Integer {; *borderColor* : Text, Integer}}} )<br/>**OBJECT GET RGB COLORS** ( *object* : Variable, Field ; *foregroundColor* : Text, Integer {; *backgroundColor* : Text, Integer {; *altBackgrndColor* : Text, Integer {; *borderColor* : Text, Integer}}} )<!-- END REF-->
<!--REF #_command_.OBJECT GET RGB COLORS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| foregroundColor | Text, Integer | &#8592; | RGB color value for foreground |
| backgroundColor | Text, Integer | &#8592; | RGB color value for background |
| altBackgrndColor | Text, Integer | &#8592; | RGB color value for alternating background |
| borderColor | Text, Integer | &#8592; | RGB color value for border color |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R5|Support of *borderColor* parameter|
|17 R6|Modified|
|12|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT GET RGB COLORS.Summary-->The **OBJECT GET RGB COLORS** command returns the foreground, background, and optionally alternate background and border colors of the object or group of objects designated by *object*.<!-- END REF-->

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string. 

When the command is applied to a list box type object, the alternating background color for the rows can be returned in the *altBackgrndColor* parameter. In this case, the value of *backgroundColor* is used for the background of odd-numbered rows only. 

When the command is applied to an object that supports the [`borderColor` property]((../../FormObjects/properties_BackgroundAndBorder.md#border-color)), the border color can be returned in the  *borderColor* parameter.

:::note

The *borderColor* parameter is not available in binary databases. 

:::


The RGB color values returned in the *foregroundColor*, *backgroundColor*, *altBackgrndColor*, and *borderColor* parameters depend on the parameter type: 

* if a parameter of text type is passed, the color is returned in CSS format with "#rrggbb" syntax (ex: "#0000FF")
* if a parameter of integer type is passed, the color can be 4-byte Long Integer of the format (0x00RRGGBB) or negative values corresponding to the "system" colors.

For more information about the format of the *foregroundColor*, *backgroundColor*, *altBackgrndColor*, and *borderColor* parameters, refer to the description of the [OBJECT SET RGB COLORS](../commands/object-set-rgb-colors) command.

## See also 

[OBJECT SET RGB COLORS](../commands/object-set-rgb-colors)  

## Properties

|  |  |
| --- | --- |
| Command number | 1074 |
| Thread safe | no |


