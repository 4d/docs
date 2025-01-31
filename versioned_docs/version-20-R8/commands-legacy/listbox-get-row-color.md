---
id: listbox-get-row-color
title: LISTBOX Get row color
slug: /commands/listbox-get-row-color
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color.Syntax-->**LISTBOX Get row color** ( {* ;} *object* ; *row* {; *colorType*} )  : Text<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) |
| row | Integer | &#8594;  | Row number |
| colorType | Integer | &#8594;  | List box font color (default) or list box background color |
| Function result | Text | &#8592; | Color value |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get row color.Summary-->**Note:** This command only works with array type list boxes.<!-- END REF-->

The **LISTBOX Get row color** command returns the color of a row or a cell in the list box designated by the *object* and *\** parameters as a CSS string.

**Note:** If you want to get the color as a 4-byte longint format, you need to use the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command. For more information on color formats, please refer to the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command description. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. You can designate a list box or a list box column in the *object* parameter:

* When *object* designates a list box, the command returns the color of the row.
* When *object* designates a list box column, the command returns the color of the cell.

In *row*, pass the number of the row whose color you want to get. 

**Note:** The command does not take any hidden/visible states of the list box rows into account.

In the *colorType* parameter, you can pass either the lk background color or lk font color constant ("*List Box*" theme) in order to find out the background or font color for the row. If you omit this parameter, the font color is returned.

**Warning:** A color assigned to a row is not necessarily displayed in every cell of the row (see example). If conflicting color values are set using properties for list boxes or list box columns, an order of priority is applied. For more information, refer to the *Design Reference* manual.

#### Example 

Given the following list box:

![](../assets/en/commands/pict1205393.fr.png)

```4d
 var $vtColor;$vtColor2;$vtColor3 : Text
 $vtColor:=LISTBOX Get row color(*;"Col5";3)
 $vtColor2:=LISTBOX Get row color(*;"List Box";3)
 $vtColor3:=LISTBOX Get row color(*;"List Box";3;lk background color)
  // $vtColor contains "#FFFF00" (yellow)
  // $vtColor2 contains "#0000FF" (blue)
  // $vtColor3 contains "#FF0000" (red)
```

#### See also 

[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1658 |
| Thread safe | &cross; |


