---
id: listbox-get-grid-colors
title: LISTBOX GET GRID COLORS
slug: /commands/listbox-get-grid-colors
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID COLORS.Syntax-->**LISTBOX GET GRID COLORS** ( {* ;} *object* ; *hColor* ; *vColor* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID COLORS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| hColor | Text, Integer | &#8592; | Value of RGB color for horizontal lines |
| vColor | Text, Integer | &#8592; | Value of RGB color for vertical lines |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX GET GRID COLORS.Summary-->The **LISTBOX GET GRID COLORS** command returns the color of the horizontal and vertical lines making up the grid of the list box object designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. 

In *hColor* and *vColor*, the command returns the values of the RGB colors. The color format depends on the type of the parameter you passed in *hColor* and *vColor*:

* if you passed a text, the color will be expressed as a CSS text (format "#rrggbb")
* if you passed a longint, the color will be expressed as a 4-byte Long Integer (format 0x00rrggbb).

#### See also 

[LISTBOX SET GRID COLOR](listbox-set-grid-color.md)  