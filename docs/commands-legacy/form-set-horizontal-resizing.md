---
id: form-set-horizontal-resizing
title: FORM SET HORIZONTAL RESIZING
slug: /commands/form-set-horizontal-resizing
displayed_sidebar: docs
---

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Syntax-->**FORM SET HORIZONTAL RESIZING** ( *resize* {; *minWidth* {; *maxWidth*}} )<!-- END REF-->
<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resize | Boolean | &#8594;  | True: The form can be resized horizontally False: The form cannot be resized horizontally |
| minWidth | Integer | &#8594;  | Smallest form width allowed (pixels) |
| maxWidth | Integer | &#8594;  | Largest form width allowed (pixels) |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.FORM SET HORIZONTAL RESIZING.Summary-->The FORM SET HORIZONTAL RESIZING command allows you to change the horizontal resizing properties of the current form through programming.<!-- END REF--> By default, these properties are set in the Design environment Form editor. New properties are set for the current process; they are not stored with the form. 

The *resize* parameter lets you set whether the form can be resized horizontally; in other words, if the width can be changed (manually by the user or through programming). 

If you pass **True**, the form width can be modified by the user; 4D uses values passed in *minWidth* and *maxWidth* as markers.

If you pass **False**, the current form width cannot be changed; in this case, there is no need to pass values in the *minWidth* and *maxWidth* parameters. 

If you passed **True** in the first parameter, you can pass new minimum and maximum widths (in pixels) in the optional *minWidth* and *maxWidth* parameters. If you leave these parameters out, the values set in the Design environment (if any) are used.

#### Example 

Refer to the example of the [FORM SET SIZE](form-set-size.md) command. 

#### See also 

[FORM GET HORIZONTAL RESIZING](form-get-horizontal-resizing.md)  
[FORM SET SIZE](form-set-size.md)  
[FORM SET VERTICAL RESIZING](form-set-vertical-resizing.md)  