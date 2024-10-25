---
id: listbox-get-footers-height
title: LISTBOX Get footers height
slug: /commands/listbox-get-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footers height.Syntax-->**LISTBOX Get footers height** ( {* ;} *object* {; *unit*} ) -> Function result<!-- END REF-->
<!--REF #_command_.LISTBOX Get footers height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| unit | Integer | &#8594;  | Unit of height value: 0 or omitted = pixels, 1 = lines |
| Function result | Longint | &#8592; | Row height |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LISTBOX Get footers height.Summary-->The **LISTBOX Get footers height** command returns the height of the footer row in the list box designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. You can designate either the list box or any footer of the list box.

By default, if you omit the *unit* parameter, the height of the row returned is expressed in pixels. To set a different unit, you can pass one of the following constants (found in the *List Box* theme), in the *unit* parameter:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Longint | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Longint | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about calculating the height of rows, refer to the *Design Reference* manual.

#### See also 

[LISTBOX SET FOOTERS HEIGHT](listbox-set-footers-height.md)  