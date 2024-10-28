---
id: object-set-resizing-options
title: OBJECT SET RESIZING OPTIONS
slug: /commands/object-set-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Syntax-->**OBJECT SET RESIZING OPTIONS** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| horizontal | Integer | &#8594;  | Horizontal resizing option |
| vertical | Integer | &#8594;  | Vertical resizing option |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET RESIZING OPTIONS.Summary-->The **OBJECT SET RESIZING OPTIONS** command sets or dynamically modifies the resizing options for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF--> These options specify how the object is displayed when the form window is resized.

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In the *horizontal* parameter, you pass a value indicating the horizontal resizing option that you want to specify for the *object*. You can pass one of the following constants, found in the *Form Objects (Properties)* theme:

| Constant               | Type    | Value | Comment                                                                                       |
| ---------------------- | ------- | ----- | --------------------------------------------------------------------------------------------- |
| Resize horizontal grow | Longint | 1     | If the window grows by 50% in width, the object is expanded by 50% to the right.              |
| Resize horizontal move | Longint | 2     | If the window grows by 100 pixels in width, the object is moved 100 pixels to the right.      |
| Resize horizontal none | Longint | 0     | If the window is expanded in width, neither the width nor the position of the object changes. |

In the *vertical* parameter, you pass a value indicating the vertical resizing option that you want to specify for the *object*. You can pass one of the following constants, found in the *Form Objects (Properties)* theme:

| Constant             | Type    | Value | Comment                                                                                         |
| -------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------- |
| Resize vertical grow | Longint | 1     | If the window grows by 50% in height, the object is lengthened by 50% towards the bottom.       |
| Resize vertical move | Longint | 2     | If the window grows by 100 pixels in height, the object is moved 100 pixels towards the bottom. |
| Resize vertical none | Longint | 0     | If the window is expanded in height, neither the height nor the position of the object changes. |

#### See also 

[OBJECT GET RESIZING OPTIONS](object-get-resizing-options.md)  