---
id: listbox-set-footers-height
title: LISTBOX SET FOOTERS HEIGHT
slug: /commands/listbox-set-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Syntax-->**LISTBOX SET FOOTERS HEIGHT** ( {* ;} *object* ; *height* {; *unit*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)If omitted, object is a variable |
| object | any | &#8594;  | Object Name (if * is specified) or Variable (if * is omitted) |
| height | Integer | &#8594;  | Row height |
| unit | Integer | &#8594;  | Unit of height value: 0 or omitted = pixels, 1 = lines |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Summary-->The **LISTBOX SET FOOTERS HEIGHT** command modifies by programming the height of the footer row in the list box designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. You can designate either the list box or any footer of the list box.

Pass the height to set in the *height* parameter. By default, if you omit the *unit* parameter, this height is expressed in pixels. To change the unit, you can pass one of the following constants (found in the *List Box* theme), in the *unit* parameter:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Integer | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Integer | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about the calculation of row heights, refer to the *Design Reference* manual.

#### See also 

[LISTBOX Get footers height](listbox-get-footers-height.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1145 |
| Thread safe | &check; |
| Forbidden on the server ||


