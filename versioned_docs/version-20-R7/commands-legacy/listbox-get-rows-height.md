---
id: listbox-get-rows-height
title: LISTBOX Get rows height
slug: /commands/listbox-get-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get rows height.Syntax-->**LISTBOX Get rows height** ( {* ;} *object* {; *unit*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get rows height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or Variable (if * is omitted) |
| unit | Integer | &#8594;  | Unit of height value: 0 or omitted = pixels, 1 = lines |
| Function result | Integer | &#8592; | Row height |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get rows height.Summary-->The **LISTBOX Get rows height** command returns the current row height for the list box object set using the *object* and *\** parameters.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that the *object* parameter is an object name (string). If you do not pass this parameter, you indicate that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the *Object Properties* section. 

By default, if you omit the *unit* parameter, the row height returned is expressed in pixels. To set another unit, in the *unit* parameter you can pass one of the following constants, found in the *List Box* theme:

| Constant  | Type    | Value | Comment                                                                                             |
| --------- | ------- | ----- | --------------------------------------------------------------------------------------------------- |
| lk lines  | Integer | 1     | Height is expressed as a number of lines. 4D calculates the height of a line according to the font. |
| lk pixels | Integer | 0     | Height is expressed as a number of pixels (default).                                                |

**Note:** For more information about calculating the height of rows, refer to the *Design Reference* manual.

#### See also 

[LISTBOX Get auto row height](listbox-get-auto-row-height.md)  
[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 836 |
| Thread safe | &cross; |


