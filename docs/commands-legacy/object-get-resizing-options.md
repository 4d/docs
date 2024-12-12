---
id: object-get-resizing-options
title: OBJECT GET RESIZING OPTIONS
slug: /commands/object-get-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Syntax-->**OBJECT GET RESIZING OPTIONS** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| horizontal | Integer | &#8592; | Horizontal resizing option |
| vertical | Integer | &#8592; | Vertical resizing option |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Summary-->The **OBJECT GET RESIZING OPTIONS** command returns the current resizing options for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

The command returns the current resizing options, as set in the Design mode or for the process using the [OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md) command. These options specify the display of the object when the form window is resized.

The *horizontal* parameter returns a value indicating the horizontal resizing option that is set for the object. You can compare the value received with the following constants, found in the *Form Objects (Properties)* theme:

| Constant               | Type    | Value | Comment                                                                                       |
| ---------------------- | ------- | ----- | --------------------------------------------------------------------------------------------- |
| Resize horizontal grow | Integer | 1     | If the window grows by 50% in width, the object is expanded by 50% to the right.              |
| Resize horizontal move | Integer | 2     | If the window grows by 100 pixels in width, the object is moved 100 pixels to the right.      |
| Resize horizontal none | Integer | 0     | If the window is expanded in width, neither the width nor the position of the object changes. |

The *vertical* parameter returns a value indicating the vertical resizing option that is set for the object. You can compare the value received with the following constants, found in the *Form Objects (Properties)* theme:

| Constant             | Type    | Value | Comment                                                                                         |
| -------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------- |
| Resize vertical grow | Integer | 1     | If the window grows by 50% in height, the object is lengthened by 50% towards the bottom.       |
| Resize vertical move | Integer | 2     | If the window grows by 100 pixels in height, the object is moved 100 pixels towards the bottom. |
| Resize vertical none | Integer | 0     | If the window is expanded in height, neither the height nor the position of the object changes. |

#### See also 

[OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md)  