---
id: listbox-set-row-color
title: LISTBOX SET ROW COLOR
slug: /commands/listbox-set-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ROW COLOR.Syntax-->**LISTBOX SET ROW COLOR** ( {* ;} *object* ; *row* ; *color* {; *colorType*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ROW COLOR.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) |
| row | Integer | &#8594;  | Row number |
| color | Text, Integer | &#8594;  | RGB color value |
| colorType | Integer | &#8594;  | Listbox font color (default) or listbox background color |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET ROW COLOR.Summary-->**Note:** This command only works with array type list boxes.<!-- END REF-->

The **LISTBOX SET ROW COLOR** command sets the color for a row or a cell in the array list box designated by the *object* and *\** parameters.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the object parameter is a variable. In this case, you pass a variable reference instead of a string.

You can designate a list box or a list box column in the *object* parameter:

* When *object* designates a list box, the command applies to the row.
* When *object* designates a list box column, the command applies to the cell located at the column/row intersection.

In *row*, pass the number of the row where you want to apply the new color. 

**Note:** The command does not take any hidden/visible states of the list box rows into account.

In *color*, pass an RGB color value. For more information about RGB colors, refer to the description of the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command. If you want the row to inherit the color set for the higher level, you can pass the lk inherited constant in *color*.

In the *colorType* parameter, pass the lk background color or lk font color constants to indicate whether you want to apply the color as the background or the font color of the row. If you omit this parameter, the color is applied as the font color. 

This command modifies values found in the array of colors that may have been defined for the column or list box. If these arrays are not already defined, the command dynamically creates arrays that you can access using the [LISTBOX Get array](listbox-get-array.md) command. 

If conflicting color values are set using properties for list boxes or list box columns, an order of priority is applied. For more information, refer to the *Design Reference* manual.

#### Example 

In an array type list box, we want to set colors for a row and for one cell in this row:

```4d
  // Definition of font color for cell
 LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")
 
  // Definition of background and font color for row 3
 LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)
 LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")
```

![](../assets/en/commands/pict1205393.fr.png)

#### See also 

*List Box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX Get row color as number](listbox-get-row-color-as-number.md)  
[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1270 |
| Thread safe | &check; |
| Forbidden on the server ||


