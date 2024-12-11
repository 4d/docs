---
id: listbox-get-row-font-style
title: LISTBOX Get row font style
slug: /commands/listbox-get-row-font-style
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row font style.Syntax-->**LISTBOX Get row font style** ( {* ;} *object* ; *row* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row font style.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string)<br/>If omitted, object is a variable |
| object | any | &#8594;  | Object name (if * is specified) or<br/>Variable (if * is omitted) |
| row | Integer | &#8594;  | Row number |
| Function result | Integer | &#8592; | Style value |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get row font style.Summary-->**Note:** This command only works with array type list boxes.<!-- END REF-->

The **LISTBOX Get row font style** command returns the font style of a row or a cell in the list box designated by the *object* and *\** parameters.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a variable. In this case, you pass a variable reference instead of a string.   
You can designate a list box or a list box column in the *object* parameter:

* When *object* designates a list box, the command returns the style of the row.
* When *object* designates a list box column, the command returns the style of the cell.

In *row*, pass the number of the row whose style you want to get. 

**Note:** The command does not take any hidden/shown states of the list box rows into account.

**Warning:** a style assigned to a row is not necessarily displayed in every cell of the row (see example). If conflicting color values are set using properties for list boxes or list box columns, an order of priority is applied. For more information, refer to the *Design Reference* manual.

#### Example 

Given the following list box: 

![](../assets/en/commands/pict1205514.fr.png)

```4d
 vStyle:=LISTBOX Get row font style(*;"Col5";3)
 vStyle2:=LISTBOX Get row font style(*;"List Box";3)
  // vStyle contains 1 (Bold)
  // vStyle2 contains 6 (Italic + Underline)
```

#### See also 

[LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1269 |
| Thread safe | &check; |
| Forbidden on the server ||


