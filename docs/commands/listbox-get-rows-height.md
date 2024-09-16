---
id: listbox-get-rows-height
title: LISTBOX Get rows height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get rows height.Syntax-->**LISTBOX Get rows height** ( {* ;} *object* {; *unit*} ) -> Function result<!-- END REF-->
<!--REF #_command_.LISTBOX Get rows height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | -> | If specified, object is an object name (string) If omitted, object is a variable |
| object | Form object | -> | Object name (if * is specified) or Variable (if * is omitted) |
| unit | Longint | -> | Unit of height value: 0 or omitted = pixels, 1 = lines |
| Function result | Integer | <- | Row height |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get rows height.Summary-->The **LISTBOX Get rows height** command returns the current row height for the list box object set using the *object* and *\** parameters.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the [Object Properties](/4Dv20R6/4D/20-R6/Object-Properties.300-6958806.en.html) section. 

By default, if you omit the *unit* parameter, the row height returned is expressed in pixels. To set another unit, in the *unit* parameter you can pass one of the following constants, found in the [List Box](/4Dv20R6/4D/20-R6/List-Box.302-6958504.en.html) theme:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Longint | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Longint | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about calculating the height of rows, refer to the *Design Reference* manual.

#### See also 
[LISTBOX Get auto row height](listbox-get-auto-row-height.md)  
[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  