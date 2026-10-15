---
id: object-get-resizing-options
title: OBJECT GET RESIZING OPTIONS
slug: /commands/object-get-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Syntax-->**OBJECT GET RESIZING OPTIONS** ( * ; *object* : Text ; *horizontal* : Integer ; *vertical* : Integer )<br/>**OBJECT GET RESIZING OPTIONS** ( *object* : Variable, Field ; *horizontal* : Integer ; *vertical* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| horizontal | Integer | &#8592; | Horizontal resizing option |
| vertical | Integer | &#8592; | Vertical resizing option |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Summary-->The **OBJECT GET RESIZING OPTIONS** command returns the current resizing options for the object(s) designated by the *object* and *\** parameters for the current process.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string.

The command returns the current resizing options, as set in the Design mode or for the process using the [OBJECT SET RESIZING OPTIONS](../commands/object-set-resizing-options) command. These options specify the display of the object when the form window is resized.

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

## See also 

[OBJECT SET RESIZING OPTIONS](../commands/object-set-resizing-options)  

## Properties

|  |  |
| --- | --- |
| Command number | 1176 |
| Thread safe | no |


