---
id: listbox-get-row-color-as-number
title: LISTBOX Get row color as number
slug: /commands/listbox-get-row-color-as-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row color as number.Syntax-->**LISTBOX Get row color as number** ( {* ;} *object* ; *row* {; *colorType*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row color as number.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) |
| row | Integer | &#8594;  | Row number |
| colorType | Integer | &#8594;  | List box font color (default) or list box background color |
| Function result | Integer | &#8592; | Color value |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get row color as number.Summary-->**Note:** This command only works with array type list boxes.<!-- END REF-->

The **LISTBOX Get row color as number** command returns the color of a row or a cell in the list box designated by the *object* and *\** parameters as a number in 0x00rrggbb format.

**Note:** If you want to get the color as a CSS string, you need to use the [LISTBOX Get row color](listbox-get-row-color.md) command. For more information on color formats, please refer to the [OBJECT SET RGB COLORS](object-set-rgb-colors.md) command description. 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string. You can designate a list box or a list box column in the *object* parameter:

* When *object* designates a list box, the command returns the color of the row.
* When *object* designates a list box column, the command returns the color of the cell.

In *row*, pass the number of the row whose color you want to get. 

**Note:** The command does not take any hidden/visible states of the list box rows into account.

In the *colorType* parameter, you can pass either the lk background color or lk font color constant ("*List Box*" theme) in order to find out the background or font color for the row. If you omit this parameter, the font color is returned.

**Warning:** a color assigned to a row is not necessarily displayed in every cell of the row (see example). If conflicting color values are set using properties for list boxes or list box columns, an order of priority is applied. For more information, refer to the *Design Reference* manual.

#### Example 

Given the following list box:

![](../assets/en/commands/pict1205393.fr.png)

```4d
 var $vLColor;$vLColor2;$vLColor3 : Integer
 $vLColor:=LISTBOX Get row color as number(*;"Col5";3)
 $vLColor2:=LISTBOX Get row color as number(*;"List Box";3)
 $vLColor3:=LISTBOX Get row color as number(*;"List Box";3;lk background color)
  // $vLColor contains 0xFFFF00 (yellow)
  // $vLColor2 contains 0x00FF (blue)
  // $vLColor3 contains 0x00FF0000 (red)
```

#### See also 

*List Box*  
[LISTBOX Get row color](listbox-get-row-color.md)  
[LISTBOX SET ROW COLOR](listbox-set-row-color.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1271 |
| Thread safe | &cross; |


