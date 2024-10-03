---
id: listbox-get-headers-height
title: LISTBOX Get headers height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get headers height.Syntax-->**LISTBOX Get headers height** ( {* ;} *object* {; *unit*} ) -> Function result<!-- END REF-->
<!--REF #_command_.LISTBOX Get headers height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string)If omitted, object is a variable |
| object | Form object | -> | Object Name (if * is specified) or Variable (if * is omitted) |
| unit | Longint | -> | Unit of height value: 0 or omitted = pixels, 1 = lines |
| Function result | Longint | <- | Row height |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get headers height.Summary-->The **LISTBOX Get headers height** command returns the height of the header row in the list box designated by the *object* and *\** parameters.<!-- END REF-->

If you pass the optional *\** parameter, this indicates that the *object* parameter is an object name (a string). If you do not pass this parameter, this indicates that the *object* is a variable. In this case, you pass a variable reference instead of a string. You can designate either the list box or any header of the list box.

By default, if you omit the *unit* parameter, the height of the row returned is expressed in pixels. To set a different unit, you can pass one of the following constants (found in the [List Box](/4Dv20R6/4D/20-R6/List-Box.302-6958504.en.html) theme), in the *unit* parameter:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Longint | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Longint | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about calculating the height of rows, refer to the *Design Reference* manual.

#### See also 
[LISTBOX SET HEADERS HEIGHT](listbox-set-headers-height.md)  