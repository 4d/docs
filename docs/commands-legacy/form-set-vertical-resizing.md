---
id: form-set-vertical-resizing
title: FORM SET VERTICAL RESIZING
slug: /commands/form-set-vertical-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET VERTICAL RESIZING.Syntax-->**FORM SET VERTICAL RESIZING** ( *resize* {; *minHeight* {; *maxHeight*}} )<!-- END REF-->
<!--REF #_command_.FORM SET VERTICAL RESIZING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resize | Boolean | &#8594;  | True: The form can be resized verticallyFalse: The form cannot be resized vertically |
| minHeight | Integer | &#8594;  | Smallest form height allowed (pixels) |
| maxHeight | Integer | &#8594;  | Largest form height allowed (pixels) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.FORM SET VERTICAL RESIZING.Summary-->The **FORM SET VERTICAL RESIZING** command allows you to change the vertical resizing properties of the current form through programming.<!-- END REF--> By default, these properties are set in the Design environment Form editor. New properties are set for the current process; they are not stored with the form. 

The *resize* parameter lets you set whether the form can be resized vertically; in other words, if the height can be changed (manually by the user or through programming). 

If you pass **True**, the form height can be modified by the user; 4D uses values passed in *minHeight* and *maxHeight* as markers. 

If you pass **False**, the current form height cannot be changed; in this case, there is no need to pass values in the *minHeight* and *maxHeight* parameters. 

If you passed **True** in the first parameter, you can pass new minimum and maximum heights (in pixels) in the optional *minHeight* and *maxHeight* parameters. If you leave these parameters out, the values set in the Design environment (if any) are used. 

#### Example 

Refer to the example of the [FORM SET SIZE](form-set-size.md) command. 

#### See also 

[FORM GET VERTICAL RESIZING](form-get-vertical-resizing.md)  
[FORM SET HORIZONTAL RESIZING](form-set-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  